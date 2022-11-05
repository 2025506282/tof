class CanvasManager {
  constructor(viewer) {
    var c = document.createElement("canvas")
    c.style.pointerEvents = "none"
    c.style =
      "position: absolute; width: 100%; height: 100%; left: 0px; top: 0px; pointer-events: none"

    this._positions = []
    this._dirty = true

    var ctx = c.getContext("2d")

    this._listener = viewer.scene.preUpdate.addEventListener(() => {
      if (c.width !== viewer.canvas.width) {
        c.width = viewer.canvas.width
        this._dirty = true
      }

      if (c.height !== viewer.canvas.height) {
        c.height = viewer.canvas.height
        this._dirty = true
      }

      if (this._dirty) {
        this._dirty = false

        // const r = 1.0 / viewer.resolutionScale;
        const r = viewer.scene.pixelRatio // pixelRatio = resolutionScale * devicePixelRatio;

        // redraw
        var gradient = ctx.createLinearGradient(0, 0, c.width, 0)
        // 线性渐变
        // grd.addColorStop(values[0], "rgba(81,201,174,0.6)");
        // grd.addColorStop(values[1], "rgba(75,150,159,0.6)");
        // grd.addColorStop(values[2], "rgba(73,129,153,0.6)");
        // grd.addColorStop(values[3], "rgba(65,63,134,0.6)");

        gradient.addColorStop(0, "rgba(81,201,174,0.6)")
        gradient.addColorStop(0.25, "rgba(75,150,159,0.6)")
        gradient.addColorStop(0.5, "rgba(73,129,153,0.6)")
        gradient.addColorStop(0.75, "rgba(65,63,134,0.6)")
        gradient.addColorStop(1, "rgba(65,63,134,0.6)")

        ctx.fillStyle = gradient

        // ctx.fillStyle =
        // "rgba(255,255,255)";
        ctx.strokeStyle = "rgb(255, 255, 255)"

        ctx.clearRect(0, 0, c.width, c.height)
        ctx.beginPath()
        const ps = this._positions
        const psl = (ps.length / 2) | 0
        for (let i = 0; i < psl; ++i) {
          ctx.lineTo(ps[i * 2 + 0] * r, ps[i * 2 + 1] * r)
        }
        ctx.fill()
        ctx.stroke()
      }
    })

    viewer.container.appendChild(c)

    this._viewer = viewer
    this._canvas = c
  }

  get positions() {
    return this._positions
  }

  refresh() {
    this._dirty = true
  }

  destroy() {
    this._viewer.container.removeChild(this._canvas)
    this._listener = this._listener && this._listener()
    this._canvas = undefined
    this._viewer = undefined
  }
}

function getWindowRectangle(positions, rectangle) {
  if (typeof rectangle === "undefined") {
    rectangle = new Cesium.BoundingRectangle()
  }

  let min = [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
  let max = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY]

  let pl = (positions.length / 2) | 0
  for (let i = 0; i < pl; ++i) {
    min[0] = min[0] > positions[i * 2 + 0] ? positions[i * 2 + 0] : min[0]
    min[1] = min[1] > positions[i * 2 + 1] ? positions[i * 2 + 1] : min[1]
    max[0] = max[0] > positions[i * 2 + 0] ? max[0] : positions[i * 2 + 0]
    max[1] = max[1] > positions[i * 2 + 1] ? max[1] : positions[i * 2 + 1]
  }
  var width = max[0] - min[0]
  var height = max[1] - min[1]

  rectangle.x = min[0]
  rectangle.y = min[1]
  rectangle.width = width
  rectangle.height = height

  return rectangle
}

function getViewportRectangle(
  viewer,
  windowPosition1,
  windowPosition2,
  rectangle,
) {
  getWindowRectangle(
    [
      windowPosition1.x,
      windowPosition1.y,
      windowPosition2.x,
      windowPosition2.y,
    ],
    rectangle,
  )

  // var rs = viewer.resolutionScale;
  var rs = viewer.scene.pixelRatio
  rectangle.x *= rs
  rectangle.y *= rs
  rectangle.width *= rs
  rectangle.height *= rs
  rectangle.y =
    viewer.scene.drawingBufferHeight - rectangle.y - rectangle.height

  return rectangle
}

class XbsjBoxPickAction {
  /**
   * 创建XbsjBoxPickAction以后，自动获得框选操作
   * @param {Cesium.Viewer} viewer
   */
  constructor(viewer) {
    this._viewer = viewer

    // this._mode = 'rect'; // 'polygon' // polygon表示任意多边形
    this._mode = "polygon"

    // 创建canvasManager
    this._canvasManager = new CanvasManager(viewer)

    // 创建选框
    var rect = new Cesium.ViewportQuad(
      new Cesium.BoundingRectangle(0, 0, 200, 200),
    )
    rect.material.uniforms.color = new Cesium.Color(1, 1, 1, 0.3)
    viewer.scene.primitives.add(rect)
    rect.show = false
    this._rect = rect

    // 创建event
    this._objectsPickedEvent = new Cesium.Event()
    this._pickEndEvent = new Cesium.Event()
    this._pickStartEvent = new Cesium.Event()

    // 创建事件处理类
    var screenSpaceEventHandler = new Cesium.ScreenSpaceEventHandler(
      viewer.scene.canvas,
    )

    var lastCursorPosScratch1 = new Cesium.Cartesian3()
    var lastCursorPos1 = undefined
    var lastCursorPosScratch2 = new Cesium.Cartesian3()
    var lastCursorPos2 = undefined

    var altLeftDownAction = (movement) => {
      lastCursorPos1 = Cesium.Cartesian3.clone(
        movement.position,
        lastCursorPosScratch1,
      )

      if (this._mode === "polygon") {
        this._canvasManager.positions.splice(
          0,
          this._canvasManager.positions.length,
          movement.position.x,
          movement.position.y,
        )
        this._canvasManager.refresh()
      }

      this._pickStartEvent.raiseEvent()
    }

    var altMouseMoveAction = (movement) => {
      if (lastCursorPos1) {
        if (this._mode === "rect") {
          lastCursorPos2 = Cesium.Cartesian3.clone(
            movement.endPosition,
            lastCursorPosScratch2,
          )
          getViewportRectangle(
            viewer,
            lastCursorPos1,
            lastCursorPos2,
            rect.rectangle,
          )
          rect.show = true
        } else if (this._mode === "polygon") {
          const ps = this._canvasManager.positions
          const p = movement.endPosition
          if (
            p.x !== ps[2 * (ps.length - 1) + 0] ||
            p.y !== ps[2 * (ps.length - 1) + 1]
          ) {
            ps.push(p.x, p.y)
          }
          this._canvasManager.refresh()
        }
      }
    }

    var altLeftUpAction = (movement) => {
      this._pickEndEvent.raiseEvent()

      if (this._mode === "rect") {
        if (lastCursorPos1 && lastCursorPos2) {
          // var pickedPois = boxPick(viewer.scene, lastCursorPos1, lastCursorPos2, this._pickResult);console.log()
          // var pickedPois = boxPick(viewer.scene, { rectPositions: [lastCursorPos1.x, lastCursorPos1.y, lastCursorPos2.x, lastCursorPos2.y] }, this._pickResult);
          var pickedPois = viewer.scene.xbsjBoxPick(
            lastCursorPos1,
            lastCursorPos2,
            this._pickResult,
          )
          this._objectsPickedEvent.raiseEvent(pickedPois)
        }
      } else if (this._mode === "polygon") {
        // var pickedPois = boxPick(viewer.scene, { filterPolygonPositions: this._canvasManager.positions }, this._pickResult);
        //console.log(this._canvasManager.positions)
        var pickedPois = viewer.scene.xbsjPolygonPick(
          this._canvasManager.positions,
          this._pickResult,
        )
        this._objectsPickedEvent.raiseEvent(
          pickedPois,
          this._canvasManager.positions,
        )
      }

      this._canvasManager.positions.splice(
        0,
        this._canvasManager.positions.length,
      )
      //this._canvasManager.refresh();

      lastCursorPos1 = undefined
      lastCursorPos2 = undefined
      rect.show = false
    }

    this._enableAction = () => {
      screenSpaceEventHandler.setInputAction(
        altLeftDownAction,
        Cesium.ScreenSpaceEventType.LEFT_DOWN,
        Cesium.KeyboardEventModifier.ALT,
      )
      screenSpaceEventHandler.setInputAction(
        altMouseMoveAction,
        Cesium.ScreenSpaceEventType.MOUSE_MOVE,
        Cesium.KeyboardEventModifier.ALT,
      )
      screenSpaceEventHandler.setInputAction(
        altMouseMoveAction,
        Cesium.ScreenSpaceEventType.MOUSE_MOVE,
      )
      screenSpaceEventHandler.setInputAction(
        altLeftUpAction,
        Cesium.ScreenSpaceEventType.LEFT_UP,
        Cesium.KeyboardEventModifier.ALT,
      )
      screenSpaceEventHandler.setInputAction(
        altLeftUpAction,
        Cesium.ScreenSpaceEventType.LEFT_UP,
        Cesium.KeyboardEventModifier.CTRL,
      )
      screenSpaceEventHandler.setInputAction(
        altLeftUpAction,
        Cesium.ScreenSpaceEventType.LEFT_UP,
        Cesium.KeyboardEventModifier.SHIFT,
      )
      screenSpaceEventHandler.setInputAction(
        altLeftUpAction,
        Cesium.ScreenSpaceEventType.LEFT_UP,
      )
    }

    this._disableAction = () => {
      screenSpaceEventHandler.removeInputAction(
        Cesium.ScreenSpaceEventType.LEFT_DOWN,
        Cesium.KeyboardEventModifier.ALT,
      )
      screenSpaceEventHandler.removeInputAction(
        Cesium.ScreenSpaceEventType.MOUSE_MOVE,
        Cesium.KeyboardEventModifier.ALT,
      )
      screenSpaceEventHandler.removeInputAction(
        Cesium.ScreenSpaceEventType.MOUSE_MOVE,
      )
      screenSpaceEventHandler.removeInputAction(
        Cesium.ScreenSpaceEventType.LEFT_UP,
        Cesium.KeyboardEventModifier.ALT,
      )
      screenSpaceEventHandler.removeInputAction(
        Cesium.ScreenSpaceEventType.LEFT_UP,
        Cesium.KeyboardEventModifier.CTRL,
      )
      screenSpaceEventHandler.removeInputAction(
        Cesium.ScreenSpaceEventType.LEFT_UP,
        Cesium.KeyboardEventModifier.SHIFT,
      )
      screenSpaceEventHandler.removeInputAction(
        Cesium.ScreenSpaceEventType.LEFT_UP,
      )
    }

    this._screenSpaceEventHandler = screenSpaceEventHandler

    this._pickResult = []

    this._enabled = true
    this.enabled = false
  }

  set mode(val) {
    if (val !== "polygon" && val !== "rect") {
      console.error("mode设置错误!")
    }

    if (this._mode !== val) {
      this._mode = val
    }
  }

  get mode() {
    return this._mode
  }
  objectDelete() {
    this._canvasManager.refresh()
  }
  isDestroyed() {
    return false
  }

  destroy() {
    this._viewer.scene.primitives.remove(this._rect)
    this._screenSpaceEventHandler =
      this._screenSpaceEventHandler && this._screenSpaceEventHandler.destroy()
    return Cesium.destroyObject(this)
  }
}

Cesium.defineProperties(XbsjBoxPickAction.prototype, {
  /**
   * 框选操作拾取事件
   * @description 回调使用BoxPickedCallback
   * @memberof XbsjBoxPickAction.prototype
   * @type {Cesium.Event}
   * @readonly
   * @see XbsjBoxPickAction.BoxPickedCallback
   * @example
   * xbsjBoxPickAction.objectsPicked.addEventListener(objects => {
   *     console.log(`objectsPicked: ${objects.length}`);
   * });
   */
  objectsPicked: {
    get() {
      return this._objectsPickedEvent
    },
  },
  /**
   * 框选操作开始事件
   * @memberof XbsjBoxPickAction.prototype
   * @type {Cesium.Event}
   * @readonly
   */
  pickStart: {
    get() {
      return this._pickStartEvent
    },
  },
  /**
   * 框选操作结束事件
   * @memberof XbsjBoxPickAction.prototype
   * @type {Cesium.Event}
   * @readonly
   */
  pickEnd: {
    get() {
      return this._pickEndEvent
    },
  },
  /**
   * 框选操作是否启用
   * @memberof XbsjBoxPickAction.prototype
   * @type {boolean}
   */
  enabled: {
    get() {
      return this._enabled
    },
    set(value) {
      value = !!value
      if (this._enabled !== value) {
        value ? this._enableAction() : this._disableAction()
        this._enabled = value
      }
    },
  },
})
