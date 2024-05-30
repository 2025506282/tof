<template>
  <div class="parent">
    <div class="root">
      <div class="head">
        <div class="row head" :style="'height: ' + headHeight + 'px;'">
          <span v-for="col in columns" :key="col">
            <div :class="'col ' + col[0]" :key="col[0]">{{col[0]}}</div>
          </span>
        </div>
      </div>
      <div class="body" :style="'height: ' + bodyHeight + 'px;'" @scroll.passive="body_onScroll">
        <div class="blank" :style="'height: ' + fullHeight + 'px;'">
          <div class="remain" :style="'top: ' + remainTop + 'px;'">
            <span v-for="(item, k) in remainItems" :key="item">
              <template v-if="item">
                <div :class="'row item ' + (selectedItems.indexOf(item.id) !== -1? 'selected': '')"
                :style="'height: ' + itemHeight + 'px;'" :key="k" @click="item_onClick($event, item.id)">
                  <span v-for="col in columns" :key="col">
                    <div :class="'col ' + col[0]" :key="col[0]">{{col[1](item, col[0])}}</div>
                  </span>
                </div>
              </template>
              <template v-else>
                <div class="row item" :style="'height: ' + itemHeight + 'px;'" :key="k"></div>
              </template>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: 0,
      items: Object.freeze(Array(1000000).fill().map((e, i) => (e, {id: i, A: 'A' + i, B: 'B' + i, C: 'C' + i, D: 'D' + i, E: 'E' + i, }))),
      columns: Object.freeze([['A', (item, col) => item[col]],
                              ['B', (item, col) => item[col]],
                              ['C', (item, col) => item[col]],
                              ['D', (item, col) => item[col]],
                              ['E', (item, col) => item[col]]]),
      selectedItems: [],
    }
  },
  computed: {
    fullHeight() {
      return this.items.length * this.itemHeight;
    },
    remainTop() {
      return (Math.ceil(this.scrollTop / this.itemHeight) - 1 - this.headBufferCount) * this.itemHeight;
    },
    remainCount() {
      return parseInt((Math.min(this.items.length, Math.floor(this.bodyHeight / this.itemHeight)) + 1) + this.headBufferCount + this.tailBufferCount);
    },
    remainItems() {
      let a = Array(this.remainCount).fill();
      for(let i=0; i< a.length; i++) {
        let itemIndex = Math.floor(this.scrollTop / this.itemHeight)+ i - this.headBufferCount;
        if (!(this.scrollTop % this.itemHeight) ) {
          itemIndex = Math.floor(this.scrollTop / this.itemHeight) - 1 + i - this.headBufferCount;
        }
        if (itemIndex >= 0 && itemIndex < this.items.length) {
          a[i] = this.items[itemIndex];
        }
      }
      return a;
    },
    itemHeight() {
      return 20;
    },
    headHeight() {
      return 30;
    },
    bodyHeight() {
      return 270;
    },
    headBufferCount() {
      return Math.round(300 / this.itemHeight);
    },
    tailBufferCount() {
      return Math.round(300 / this.itemHeight);
    }
  },
  methods: {
    body_onScroll(event) {
      let target = event.currentTarget;
      if (!window["3fcff984-32a1-4d20-8c89-3e0c6d720cda"]) {
        window.requestAnimationFrame(() => {
          this.scrollTop = target.scrollTop;
          window["3fcff984-32a1-4d20-8c89-3e0c6d720cda"] = false;
        });
        window["3fcff984-32a1-4d20-8c89-3e0c6d720cda"] = true;
      }
    },
    item_onClick(event, itemId) {
      event;
      let index = this.selectedItems.indexOf(itemId);
      if (-1 === index) {
        this.selectedItems.push(itemId);
      } else {
        this.selectedItems.splice(index, 1);
      }
    }
  }
}
</script>

<style scoped>
.parent {
  overflow: hidden;
  width: 500px;
  height: 300px;
  margin: 100px auto;
}
.root {
  margin: 0;
  padding: 0;
}
.body {
  overflow: auto;
}
.blank {
  overflow: hidden;
}
.remain {
  position: relative;
  overflow: hidden;
}
.row {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  width: 500px;
}
.col {
  flex-basis: 100px;
}
.selected {
  background: red;
}
</style>
