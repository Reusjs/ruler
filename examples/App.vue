<template>
  <div id="app">
    <header>
      <span>文档</span>
      <span @click="toGithub">github</span>
    </header>
    <div class="content-wrapper">
      <RuMenu :uniqueOpen="false" :router="true" activeName="color">
        <RuSubmenu name="1">
          <template slot="title">
            <RuIcon :type="'ios-bookmarks'"></RuIcon>指南
          </template>
          <RuMenuItem name="install">安装</RuMenuItem>
          <RuMenuItem name="start">快速上手</RuMenuItem>
        </RuSubmenu>
        <RuSubmenu name="components">
          <template slot="title">
            <RuIcon :type="'grid'"></RuIcon>组件列表
          </template>
          <RuMenuItem :name="'color'"><RuIcon :type="'android-color-palette'"></RuIcon>Color 色彩</RuMenuItem>
          <RuMenuItem :name="'font'"><RuIcon :type="'bonfire'"></RuIcon>Font 字体</RuMenuItem>
          <RuMenuItem :name="'button'"><RuIcon :type="'settings'"></RuIcon>Button 按钮</RuMenuItem>
          <RuMenuItem :name="'icon'"><RuIcon :type="'ionic'"></RuIcon>Icon 图标</RuMenuItem>
          <RuMenuItem :name="'slider'"><RuIcon :type="'android-options'"></RuIcon>Slider 滑块</RuMenuItem>
          <RuMenuItem :name="'notification'"><RuIcon :type="'paper-airplane'"></RuIcon>Notification 通知</RuMenuItem>
          <RuMenuItem :name="'message'"><RuIcon :type="'email-unread'"></RuIcon>Message 消息</RuMenuItem>
          <RuMenuItem :name="'progress'"><RuIcon :type="'battery-low'"></RuIcon>Progress 进度条</RuMenuItem>
          <RuMenuItem :name="'circle'"><RuIcon :type="'ios-circle-outline'"></RuIcon>Circle 进度环</RuMenuItem>
          <RuMenuItem :name="'carousel'"><RuIcon :type="'ios-film'"></RuIcon>Carousel 走马灯</RuMenuItem>
          <RuMenuItem :name="'datePicker'"><RuIcon :type="'ios-calendar-outline'"></RuIcon>DatePicker 日期选择器</RuMenuItem>
          <RuMenuItem :name="'menu'"><RuIcon :type="'navicon'"></RuIcon>Menu 导航菜单</RuMenuItem>
        </RuSubmenu>
      </RuMenu>
      <router-view class="router-view"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    toGithub () {
      location.href = 'https://github.com/Reusjs/ruler'
    }
  }
}
</script>

<style lang="scss">
html {
  height: 100%;
}
body {
  height: 100%;
  overflow: hidden;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  overflow: hidden;
  header {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 1140px;
    height: 90px;
    margin: 0 auto;
    background: #fff;
    span,
    a {
      display: inline-block;
      box-sizing: border-box;
      position: absolute;
      height: 90px;
      width: 90px;
      line-height: 120px;
      text-align: center;
      font-size: 16px;
      cursor: pointer;
      color: #5e5e5e;
      text-decoration: none;
      &:first-child {
        right: 100px;
        border-bottom: 2px solid #fe6f3d;
      }
      &:nth-of-type(2) {
        right: 0;
      }
    }
  }
  .content-wrapper {
    box-sizing: border-box;
    width: 1140px;
    height: 100%;
    margin: 0px auto 0 auto;
    padding-top: 90px;
    overflow: auto;
    h2 {
      font-size: 28px;
      &+p {
        margin: 14px 0;
      }
    }
    h3 {
      font-size: 22px;
      &+p {
        margin: 14px 0;
      }
    }
    section > h3 {
      margin: 50px 0 20px;
    }
    > .ru-menu {
      position: fixed;
      top: 0;
      bottom: 0;
      width: 240px;
      margin-top: 90px;
      border-right: none;
      overflow-y: auto;
      .ru-menu-item {
        border-right: none;
      }
    }
    .router-view {
      box-sizing: border-box;
      padding: 10px 0 80px 270px;
    }
  }
}
.router-view > table {
  width: 100%;
  border: 1px solid #e4e4e4;
  border-collapse: collapse;
  thead {
    background-color: #f7f7f7;
    font-weight: 600;
  }
  th,
  td {
    padding: 8px 16px;
    border: 1px solid #e4e4e4;
    text-align: left;
  }
  td {
    font-size: 14px;
    font-family: Consolas;
    color: #495056;
  }
  th {
    min-width: 100px;
  }
}
.hljs {
  font-family: Consolas, Menlo, Courier, monospace !important;
  * {
    line-height: 1.7;
  }
}

.xml {
  .hljs-tag {
    .hljs-name {
      color: #DD4A68
    }
    .hljs-attr {
      color: #690
    }
    .hljs-string {
      color: #07a
    }
  }
}

.hljs-comment,
.hljs-quote {
  color: #bc9458;
  font-style: italic
}

.hljs-keyword,
.hljs-selector-tag {
  color: #07a
}

.hljs-string,
.hljs-number,
.hljs-regexp,
.hljs-variable,
.hljs-template-variable {
  color: #690
}

.hljs-subst {
  color: #519f50
}

.hljs-tag
.hljs-name {
  color: #DD4A68
}

.hljs-type {
  color: #da4939
}

.hljs-symbol,
.hljs-bullet,
.hljs-built_in,
.hljs-builtin-name,
.hljs-attr,
.hljs-link {
  color: #690
}

.hljs-params {
  color: #d0d0ff
}

.hljs-attribute {
  color: #07a
}

.hljs-meta {
  color: #9b859d
}

.hljs-title,
.hljs-section {
  color: #ffc66d
}

.hljs-addition {
  background-color: #144212;
  color: #e6e1dc;
  display: inline-block;
  width: 100%
}

.hljs-deletion {
  background-color: #600;
  color: #e6e1dc;
  display: inline-block;
  width: 100%
}

.hljs-selector-class {
    color: #9b703f
}

.hljs-selector-id {
  color: #8b98ab
}

.hljs-emphasis {
  font-style: italic
}

.hljs-strong {
  font-weight: bold
}

.hljs-link {
  text-decoration: underline
}
</style>
