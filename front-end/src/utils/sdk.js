export const QDSDK = {
    // 初始化加载城市地图
    init(viewer, url, colorMap) {
        var promisebus = Cesium.GeoJsonDataSource.load(url, {
            clampToGround: true,
            stroke: Cesium.Color.HOTPINK,
            fill: Cesium.Color.PINK,
            strokeWidth: 3,
            markerSymbol: '?'
        })
        promisebus.then(function (dataSource) {
            viewer.dataSources.add(dataSource)
            const entities = dataSource.entities.values
            let obj = {}
            for (let index = 0; index < entities.length; index++) {
                const entity = entities[index]
                const stringColor = colorMap.get(entity.name)
                const color = Cesium.Color.fromCssColorString(stringColor)
                // const color = Cesium.Color.fromRandom({ alpha: 0.7 })
                entity.polygon.fill = true
                entity.polygon.material = color
                entity.polygon.outlineWidth = 4
                entity.polygon.outline = true
                entity.polygon.outlineColor = Cesium.Color.RED
                // entity.polygon.zIndex = 1000
                // entity.polygon.height = 1000 * 1000
                entity.polygon.distanceDisplayCondition = new Cesium.DistanceDisplayCondition(
                    1000,
                    1000000.0
                )
                // console.log()

                const center = entity.properties.center._value
                entity.position = Cesium.Cartesian3.fromDegrees(
                    center[0],
                    center[1],
                    0
                )
                const centerKey = center.join()
                if (!obj[centerKey]) {
                    entity.label = {
                        id: entity.name,
                        text: entity.name,
                        font: '16px PingFang',
                        outlineWidth: 0.5,
                        fillColor: Cesium.Color.WHITE, // 字体颜色
                        outlineColor: Cesium.Color.WHITE, // 字体颜色
                        backgroundColor: Cesium.Color.TRANSPARENT, // 背景颜色
                        showBackground: true, // 是否显示背景颜色
                        // distanceDisplayCondition: new Cesium.DistanceDisplayCondition(10, 100000000.0),
                        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                        // 这里设置了就不会被遮盖了，设为负值则在更上层
                        eyeOffset: new Cesium.Cartesian3(0, 0, -10000),
                        verticalOrigin: Cesium.VerticalOrigin.LEFT, // 垂直位置
                        horizontalOrigin: Cesium.HorizontalOrigin.TOP, // 水平位置
                        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
                        // pixelOffset: new Cesium.Cartesian2(10, 0) // 偏移
                    }
                    obj[centerKey] = true
                }

                entity.polyline = {
                    positions: entity.polygon.hierarchy._value.positions,
                    width: 2,
                    material: Cesium.Color.fromCssColorString('#3BBDCB'),
                    clampToGround: true
                }
            }
            // that.loadSubWay()
        })
        viewer.flyTo(promisebus)
    },
    getGifMaterial(url, form) {
        const img = document.createElement("img");
        img.src = url;
        var scratch = new Cesium.Cartesian2();
        this._viewer.scene.preRender.addEventListener(function () {
            var position = Cesium.Cartesian3.fromDegrees(
                form.longitude,
                form.latitude,
                0
            );
            var canvasPosition = viewer.scene.cartesianToCanvasCoordinates(
                position,
                scratch
            );
            if (Cesium.defined(canvasPosition)) {
                htmlOverlay.style.top = canvasPosition.y + "px";
                htmlOverlay.style.left = canvasPosition.x + "px";
            }
        });
        return img
    },
    // 添加风险
    addRisk(viewer, form) {
        QDSDK.addMark(viewer, {
            ...form,
            modalType: 'risk'
        })
    },
    //   添加设备
    addDevice(viewer, form) {
        QDSDK.addMark(viewer, {
            ...form,
            modalType: 'device'
        })
    },
    // 添加标记
    addMark(viewer, form) {
        // this.dialogShow = false
        if (!form || !form.longitude || !form.latitude || !form.image) {
            alert('longitude，latitude， image是必填项')
            return
        }
        const id = `${form.longitude}-${form.latitude}`
        const curEntity = viewer.entities.add({
            id: id,
            position: Cesium.Cartesian3.fromDegrees(
                form.longitude,
                form.latitude,
                10
            ),
            customData: form,
            billboard: {
                // image资源使用网络资源，如果是使用本地资源，打包后无法正确查找到路径，怎么也调不出来
                image: form.image,
                horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                width: 60,
                height: 80,
                scale: 1,
                show: true
            }
        })
        return curEntity;
    },
    getCameraHeight(viewer) {
        if (viewer) {
            const scene = viewer.scene;
            const ellipsoid = scene.globe.ellipsoid;
            const height = ellipsoid.cartesianToCartographic(viewer.camera.position).height;
            return height;
        }
        return 0;
    },
    // 添加标记
    addGifMark(viewer, form, cb) {
        if (!form || !form.longitude || !form.latitude || !form.image) {
            alert('longitude，latitude， image是必填项')
            return
        }
        const id = form.longitude + form.latitude;
        const selectDom = document.getElementsByClassName(id);
        const scratch = new Cesium.Cartesian2();
        const position = Cesium.Cartesian3.fromDegrees(form.longitude, form.latitude, 0);
        const canvasPosition = viewer.scene.cartesianToCanvasCoordinates(
            position,
            scratch
        );
        const cameraHeight = QDSDK.getCameraHeight(viewer);
        if (Cesium.defined(canvasPosition)) {
            try {
                if (!selectDom.length) {
                    const imgDom = document.createElement("img");
                    imgDom.src = form.image;
                    imgDom.style.position = "absolute";
                    imgDom.style.width = "20px";
                    imgDom.style.height = "20px";
                    imgDom.style.zIndex = "99999";
                    imgDom.style.cursor = 'pointer';
                    imgDom.style.top = canvasPosition.y + "px";
                    imgDom.style.left = canvasPosition.x + "px";
                    imgDom.setAttribute('customeData', form);
                    imgDom.addEventListener('click', (e) => {
                        if (cb) {
                            cb(e)
                        }
                    })
                    imgDom.setAttribute('class', id);
                    document.body.appendChild(imgDom);
                } else {
                    const dom = selectDom[0];
                    dom.style.top = canvasPosition.y + "px";
                    dom.style.left = canvasPosition.x + "px";
                    dom.style.display = cameraHeight < 150000 ? 'block' : 'none'
                }
            } catch (err) {
                console.log('err:', err)
            }
        }
    },
    // 加载地铁线路图
    loadSubWay(viewer, item) {
        const color = Cesium.Color.fromCssColorString(item.color)
        var promisebus = Cesium.GeoJsonDataSource.load(item.url, {
            clampToGround: true,
            stroke: color,
            fill: color,
            strokeWidth: 10,
            markerSymbol: '?'
        })
        promisebus.then(dataSource => {
            viewer.dataSources.add(dataSource)
            const entities = dataSource.entities.values
            for (let index = 0; index < entities.length; index++) {
                const entity = entities[index]
                entity._customData = {
                    modalType: 'line',
                    ...item.data
                }
            }
        })
        return promisebus;
    }
}
