webpackJsonp([6,49],{3:function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={props:{type:{type:String,"default":"props"},head:Array,content:Array,apis:Array,title:{type:String,"default":"API"}},ready:function(){if(!this.head)switch(this.type){case"props":this.$set("head",["参数","说明","类型","默认值"]);break;case"events":this.$set("head",["事件名","说明","参数"]);break;case"methods":this.$set("head",["方法名","说明","参数"])}}}},4:function(t,o,e){o=t.exports=e(1)(),o.push([t.id,".markdown>table{border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #e9e9e9;width:100%;margin-bottom:24px}.markdown>table th{white-space:nowrap;color:#5c6b77;font-weight:600;background:#f7f7f7}.markdown>table td,.markdown>table th{border:1px solid #e9e9e9;padding:8px 16px;text-align:left}.markdown.api-container table{font-family:Consolas,Menlo,Courier,monospace;font-size:13px}",""])},5:function(t,o,e){var i=e(4);"string"==typeof i&&(i=[[t.id,i,""]]);e(2)(i,{});i.locals&&(t.exports=i.locals)},6:function(t,o){t.exports=' <section class="markdown api-container"> <h2>{{ title }}</h2> <slot></slot> <table> <thead> <tr> <th v-for="text in head" v-html=text></th> </tr> </thead> <tbody> <tr v-for="item in content"> <td v-for="text in item" v-html=text></td> </tr> <tr v-for="api in apis"> <td v-for="text in api" v-html=text></td> </tr> </tbody> </table> </section> '},7:function(t,o,e){var i,r,s={};e(5),i=e(3),r=e(6),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var n="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;r&&(n.template=r),n.computed||(n.computed={}),Object.keys(s).forEach(function(t){var o=s[t];n.computed[t]=function(){return o}})},8:function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={props:{title:String,describe:String,code:String},data:function(){return{open:!1}},ready:function(){var t=this,o=this._slotContents["default"].childNodes;o=Array.prototype.filter.call(o,function(t){return 1===t.nodeType}),this.code||(this.code=o.map(function(t){return t.outerHTML.replace(/\t| {4}/g,"")}).join("\n")),this.$nextTick(function(){hljs.highlightBlock(t.$el.querySelector("pre code"))})},methods:{handleOpen:function(){this.open=!this.open}}}},9:function(t,o,e){o=t.exports=e(1)(),o.push([t.id,'.code-box{border:1px solid #e9e9e9;border-radius:6px;display:inline-block;width:100%;position:relative;margin:0 0 16px;-webkit-transition:all .2s ease;transition:all .2s ease}.code-box .collapse{position:absolute;right:16px;bottom:16px;cursor:pointer;width:18px;height:18px;font-size:18px;line-height:18px;opacity:.5;text-align:center;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all .3s ease;transition:all .3s ease;color:#999;background:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:100%}.code-box .collapse:hover{opacity:1}.code-box:hover{box-shadow:0 0 6px rgba(0,0,0,.15);position:relative;z-index:10;background:#fff}.code-box:hover .code-box-title{background:#fbfbfb;box-shadow:0 -1.2px 0 #e9e9e9}.code-box:hover .code-box-meta{background:#fbfbfb}.code-box .code-box-demo{border-bottom:1px solid #e9e9e9;padding:42px 20px 50px}.code-box .highlight-wrapper{max-height:0;opacity:0;overflow:auto;-webkit-transition:all .4s ease;transition:all .4s ease;border-radius:0 0 6px 6px}.code-box .highlight-wrapper-expand{max-height:500px;opacity:1}.code-box.expand .collapse{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.code-box.expand .code-box-meta{border-radius:0;border-bottom:1px dashed #e9e9e9}.code-box-meta{position:relative;padding:16px;border-radius:0 0 6px 6px;-webkit-transition:background-color .4s ease;transition:background-color .4s ease;width:100%;font-size:12px}.code-box-meta p{margin:0}.code-box-title{position:absolute;top:-14px;padding:1px 1.1em;color:#777;border-radius:6px;background:#fff;-webkit-transition:all .4s ease;transition:all .4s ease}.code-box-title:before{font-family:anticon;content:"\\E6D2";font-size:16px;vertical-align:middle;line-height:22px;position:relative;margin-right:8px;top:-2px;color:#ccc;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);display:inline-block}.code-box .code-box-title a,.code-box .code-box-title a:hover{color:#666;font-size:14px}.highlight{line-height:1.5}.highlight pre{margin:0;padding:0;background:#fff;width:auto}.highlight pre code{display:block;color:#666;line-height:1.7;border:1px solid #e9e9e9;padding:10px 15px;border-radius:6px;font-size:13px;border:none;background:#fff}.hljs{background:none}',""])},10:function(t,o,e){var i=e(9);"string"==typeof i&&(i=[[t.id,i,""]]);e(2)(i,{});i.locals&&(t.exports=i.locals)},11:function(t,o){t.exports=' <section class=code-box :class="{\'expand\': open}"> <section class=code-box-demo> <slot></slot> </section> <section class="code-box-meta markdown"> <div class=code-box-title><a>{{ title }}</a></div> <div><p>{{ describe }}</p></div> <span class="collapse anticon anticon-circle-o-right" @click=handleOpen></span> </section> <section class=highlight-wrapper :class="{\'highlight-wrapper-expand\': open}"> <div class=highlight> <pre><code class=html>{{ code }}</code></pre> </div> </section> </section> '},12:function(t,o,e){var i,r,s={};e(10),i=e(8),r=e(11),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var n="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;r&&(n.template=r),n.computed||(n.computed={}),Object.keys(s).forEach(function(t){var o=s[t];n.computed[t]=function(){return o}})},278:function(t,o,e){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(o,"__esModule",{value:!0});var r=e(15),s=i(r),n=e(12),a=i(n),p=e(7),l=i(p),c=e(93),d=i(c);o["default"]={data:function(){return{apis:[{parameter:":事件",explain:"显示或关闭tip的触发事件,支持hover或focus",type:"String","default":"hover"},{parameter:".位置",explain:"显示tip的位置,支持8种:left,right,top,bottom,topleft,topright,bottomleft,bottomright",type:"String","default":"top"}],msg:"<em>hello world</em>",msg1:"明月几时有"}},components:{vButton:s["default"],vButtonGroup:s["default"].Group,codeBox:a["default"],apiTable:l["default"]},directive:{tooltip:d["default"]}}},361:function(t,o,e){o=t.exports=e(1)(),o.push([t.id,"p{line-height:3}",""])},418:function(t,o,e){var i=e(361);"string"==typeof i&&(i=[[t.id,i,""]]);e(2)(i,{});i.locals&&(t.exports=i.locals)},559:function(t,o){t.exports=' <div> <section class=markdown> <h1>tooltip指令</h1> <p> 显示简单的提示文字或HTML内容。 </p> <h2>何时使用</h2> <ul> <p> 需要给用户提示一些辅助信息时。 </p> </ul> <h2>组件演示</h2> </section> <div class=ant-row style="margin-left: -8px; margin-right: -8px"> <div class="ant-col-lg-12 code-boxes-col-2-1"> <code-box title=tooltip describe="tooltip指令使用很简单,v-tooltip=\'msg\'即可."> <v-button type=success v-tooltip=msg>默认</v-button> </code-box> </div> <div class="ant-col-lg-12 code-boxes-col-2-1"> <code-box title=tooltip-触发事件 describe="如果需要指定触发事件,使用v-tooltip:hover=\'msg\'或者v-tooltip:focus=\'msg\'"> <v-button type=success v-tooltip:hover.top=msg>hover触发</v-button> <input type=text v-tooltip:focus.top=msg1 placeholder=focus触发> </code-box> </div> <div class="ant-col-lg-24 code-boxes-col-2-1"> <code-box title=tooltip-显示位置 describe="可以使用修饰符指定显示位置,如v-tooltip:hover.right=\'msg1\',支持8种位置"> <v-button type=success v-tooltip:hover.left=msg>left</v-button> <a href=### v-tooltip:hover.right=msg1>right</a> <v-button type=success v-tooltip:hover.top=msg>top</v-button> <a href=### v-tooltip:hover.bottom=msg1>bottom</a> <v-button type=success v-tooltip:hover.topleft=msg>topLeft</v-button> <a href=### v-tooltip:hover.topright=msg1>topRight</a> <v-button type=success v-tooltip:hover.bottomleft=msg>bottomLeft</v-button> <a href=### v-tooltip:hover.bottomright=msg1>bottomRight</a> </code-box> </div> </div> <api-table :apis=apis></api-table> </div> '},678:function(t,o,e){var i,r,s={};e(418),i=e(278),r=e(559),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var n="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;r&&(n.template=r),n.computed||(n.computed={}),Object.keys(s).forEach(function(t){var o=s[t];n.computed[t]=function(){return o}})}});