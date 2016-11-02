webpackJsonp([16,49],{3:function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={props:{type:{type:String,"default":"props"},head:Array,content:Array,apis:Array,title:{type:String,"default":"API"}},ready:function(){if(!this.head)switch(this.type){case"props":this.$set("head",["参数","说明","类型","默认值"]);break;case"events":this.$set("head",["事件名","说明","参数"]);break;case"methods":this.$set("head",["方法名","说明","参数"])}}}},4:function(t,o,e){o=t.exports=e(1)(),o.push([t.id,".markdown>table{border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #e9e9e9;width:100%;margin-bottom:24px}.markdown>table th{white-space:nowrap;color:#5c6b77;font-weight:600;background:#f7f7f7}.markdown>table td,.markdown>table th{border:1px solid #e9e9e9;padding:8px 16px;text-align:left}.markdown.api-container table{font-family:Consolas,Menlo,Courier,monospace;font-size:13px}",""])},5:function(t,o,e){var n=e(4);"string"==typeof n&&(n=[[t.id,n,""]]);e(2)(n,{});n.locals&&(t.exports=n.locals)},6:function(t,o){t.exports=' <section class="markdown api-container"> <h2>{{ title }}</h2> <slot></slot> <table> <thead> <tr> <th v-for="text in head" v-html=text></th> </tr> </thead> <tbody> <tr v-for="item in content"> <td v-for="text in item" v-html=text></td> </tr> <tr v-for="api in apis"> <td v-for="text in api" v-html=text></td> </tr> </tbody> </table> </section> '},7:function(t,o,e){var n,i,a={};e(5),n=e(3),i=e(6),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var s="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(s.template=i),s.computed||(s.computed={}),Object.keys(a).forEach(function(t){var o=a[t];s.computed[t]=function(){return o}})},8:function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={props:{title:String,describe:String,code:String},data:function(){return{open:!1}},ready:function(){var t=this,o=this._slotContents["default"].childNodes;o=Array.prototype.filter.call(o,function(t){return 1===t.nodeType}),this.code||(this.code=o.map(function(t){return t.outerHTML.replace(/\t| {4}/g,"")}).join("\n")),this.$nextTick(function(){hljs.highlightBlock(t.$el.querySelector("pre code"))})},methods:{handleOpen:function(){this.open=!this.open}}}},9:function(t,o,e){o=t.exports=e(1)(),o.push([t.id,'.code-box{border:1px solid #e9e9e9;border-radius:6px;display:inline-block;width:100%;position:relative;margin:0 0 16px;-webkit-transition:all .2s ease;transition:all .2s ease}.code-box .collapse{position:absolute;right:16px;bottom:16px;cursor:pointer;width:18px;height:18px;font-size:18px;line-height:18px;opacity:.5;text-align:center;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all .3s ease;transition:all .3s ease;color:#999;background:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:100%}.code-box .collapse:hover{opacity:1}.code-box:hover{box-shadow:0 0 6px rgba(0,0,0,.15);position:relative;z-index:10;background:#fff}.code-box:hover .code-box-title{background:#fbfbfb;box-shadow:0 -1.2px 0 #e9e9e9}.code-box:hover .code-box-meta{background:#fbfbfb}.code-box .code-box-demo{border-bottom:1px solid #e9e9e9;padding:42px 20px 50px}.code-box .highlight-wrapper{max-height:0;opacity:0;overflow:auto;-webkit-transition:all .4s ease;transition:all .4s ease;border-radius:0 0 6px 6px}.code-box .highlight-wrapper-expand{max-height:500px;opacity:1}.code-box.expand .collapse{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.code-box.expand .code-box-meta{border-radius:0;border-bottom:1px dashed #e9e9e9}.code-box-meta{position:relative;padding:16px;border-radius:0 0 6px 6px;-webkit-transition:background-color .4s ease;transition:background-color .4s ease;width:100%;font-size:12px}.code-box-meta p{margin:0}.code-box-title{position:absolute;top:-14px;padding:1px 1.1em;color:#777;border-radius:6px;background:#fff;-webkit-transition:all .4s ease;transition:all .4s ease}.code-box-title:before{font-family:anticon;content:"\\E6D2";font-size:16px;vertical-align:middle;line-height:22px;position:relative;margin-right:8px;top:-2px;color:#ccc;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);display:inline-block}.code-box .code-box-title a,.code-box .code-box-title a:hover{color:#666;font-size:14px}.highlight{line-height:1.5}.highlight pre{margin:0;padding:0;background:#fff;width:auto}.highlight pre code{display:block;color:#666;line-height:1.7;border:1px solid #e9e9e9;padding:10px 15px;border-radius:6px;font-size:13px;border:none;background:#fff}.hljs{background:none}',""])},10:function(t,o,e){var n=e(9);"string"==typeof n&&(n=[[t.id,n,""]]);e(2)(n,{});n.locals&&(t.exports=n.locals)},11:function(t,o){t.exports=' <section class=code-box :class="{\'expand\': open}"> <section class=code-box-demo> <slot></slot> </section> <section class="code-box-meta markdown"> <div class=code-box-title><a>{{ title }}</a></div> <div><p>{{ describe }}</p></div> <span class="collapse anticon anticon-circle-o-right" @click=handleOpen></span> </section> <section class=highlight-wrapper :class="{\'highlight-wrapper-expand\': open}"> <div class=highlight> <pre><code class=html>{{ code }}</code></pre> </div> </section> </section> '},12:function(t,o,e){var n,i,a={};e(10),n=e(8),i=e(11),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var s="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(s.template=i),s.computed||(s.computed={}),Object.keys(a).forEach(function(t){var o=a[t];s.computed[t]=function(){return o}})},262:function(t,o,e){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(o,"__esModule",{value:!0});var i=e(12),a=n(i),s=e(7),r=n(s),c=e(78),p=n(c);o["default"]={data:function(){return{apis:[{parameter:"message",explain:"通知提醒标题，必选",type:"Sring","default":"无"},{parameter:"description",explain:"通知提醒内容，必选",type:"Sring","default":"无"},{parameter:"duration",explain:"默认 4.5 秒后自动关闭，配置为 0 则不自动关闭",type:"Number","default":"4.5"}],config:[{parameter:"top",explain:"消息距离顶部的位置",type:"Number","default":"24"},{parameter:"duration",explain:"默认自动关闭延时，单位秒",type:"Number","default":"4.5"}]}},methods:{openNotification:function(){p["default"].open({message:"这是标题",description:"这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案"})},openNotificationInfinite:function(){p["default"].open({message:"这是标题",description:"我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭",duration:0})},openNotificationWithIcon:function(t){p["default"][t]({message:"这是标题",description:"这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案"})}},components:{codeBox:a["default"],apiTable:r["default"]}}},352:function(t,o,e){o=t.exports=e(1)(),o.push([t.id,"",""])},409:function(t,o,e){var n=e(352);"string"==typeof n&&(n=[[t.id,n,""]]);e(2)(n,{});n.locals&&(t.exports=n.locals)},543:function(t,o){t.exports=' <div> <section class=markdown> <h1>Notification通知提醒框</h1> <p> 全局展示通知提醒信息。 </p> <h2>何时使用</h2> <p>在系统右上角显示通知提醒信息。经常用于以下情况：</p> <ul> <li>较为复杂的通知内容。</li> <li>带有交互的通知，给出用户下一步的行动点。</li> <li>系统主动推送。</li> </ul> <h2>组件演示</h2> </section> <div class=ant-row style="margin-left: -8px; margin-right: -8px"> <div class="ant-col-lg-12 code-boxes-col-2-1"> <code-box title=基本 describe="最简单的用法，4.5 秒后自动关闭。" code=\'openNotification() {\n  notification.open({\n    message: "这是标题",\n    description: "这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案",\n  });\n},\n\n<button type="button" class="ant-btn ant-btn-primary" @click="openNotification"><span>打开通知提醒框</span></button>\'> <button type=button class="ant-btn ant-btn-primary" @click=openNotification><span>打开通知提醒框</span></button> </code-box> <code-box title=带有Icon的通知提醒框 describe=通知提醒框左侧有图标。 code=\'openNotificationWithIcon(type) {\n  notification[type]({\n    message: "这是标题",\n    description: "这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案"\n  });\n}\n\n<button type="button" class="ant-btn" @click="openNotificationWithIcon("success")"><span>成 功</span></button>\n<button type="button" class="ant-btn" @click="openNotificationWithIcon("info")"><span>消 息</span></button>\n<button type="button" class="ant-btn" @click="openNotificationWithIcon("warning")"><span>警 告</span></button>\n<button type="button" class="ant-btn" @click="openNotificationWithIcon("error")"><span>错 误</span></button>\n\'> <button type=button class=ant-btn @click="openNotificationWithIcon(\'success\')"><span>成 功</span></button> <button type=button class=ant-btn @click="openNotificationWithIcon(\'info\')"><span>消 息</span></button> <button type=button class=ant-btn @click="openNotificationWithIcon(\'warning\')"><span>警 告</span></button> <button type=button class=ant-btn @click="openNotificationWithIcon(\'error\')"><span>错 误</span></button> </code-box> </div> <div class="ant-col-lg-12 code-boxes-col-2-1"> <code-box title=自动关闭的延时 describe="自定义通知框自动关闭的延时，默认4.5s，取消自动关闭只要将该值设为 0 即可。" code=\'openNotification() {\n  notification.open({\n    message: "这是标题",\n    description: "我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭",\n    duration: 0,\n  });\n}\n\n<button type="button" class="ant-btn ant-btn-primary" @click="openNotification2"><span>打开通知提醒框</span></button>\'> <button type=button class="ant-btn ant-btn-primary" @click=openNotificationInfinite><span>打开通知提醒框</span></button> </code-box> </div> </div> <api-table :apis=apis> <ul> <li>notification.success(config)</li> <li>notification.error(config)</li> <li>notification.info(config)</li> <li>notification.warning(config)</li> </ul> <p> config 参数如下： </p> </api-table> <api-table :apis=config> <p> 还提供了一个全局配置方法，在调用前提前配置，全局一次生效。 </p> <p> notification.config({ top: 100, duration: 3, }); </p> </api-table> </div> '},661:function(t,o,e){var n,i,a={};e(409),n=e(262),i=e(543),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var s="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(s.template=i),s.computed||(s.computed={}),Object.keys(a).forEach(function(t){var o=a[t];s.computed[t]=function(){return o}})}});