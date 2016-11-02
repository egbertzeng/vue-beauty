webpackJsonp([13,49],{3:function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]={props:{type:{type:String,"default":"props"},head:Array,content:Array,apis:Array,title:{type:String,"default":"API"}},ready:function(){if(!this.head)switch(this.type){case"props":this.$set("head",["参数","说明","类型","默认值"]);break;case"events":this.$set("head",["事件名","说明","参数"]);break;case"methods":this.$set("head",["方法名","说明","参数"])}}}},4:function(e,a,o){a=e.exports=o(1)(),a.push([e.id,".markdown>table{border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #e9e9e9;width:100%;margin-bottom:24px}.markdown>table th{white-space:nowrap;color:#5c6b77;font-weight:600;background:#f7f7f7}.markdown>table td,.markdown>table th{border:1px solid #e9e9e9;padding:8px 16px;text-align:left}.markdown.api-container table{font-family:Consolas,Menlo,Courier,monospace;font-size:13px}",""])},5:function(e,a,o){var t=o(4);"string"==typeof t&&(t=[[e.id,t,""]]);o(2)(t,{});t.locals&&(e.exports=t.locals)},6:function(e,a){e.exports=' <section class="markdown api-container"> <h2>{{ title }}</h2> <slot></slot> <table> <thead> <tr> <th v-for="text in head" v-html=text></th> </tr> </thead> <tbody> <tr v-for="item in content"> <td v-for="text in item" v-html=text></td> </tr> <tr v-for="api in apis"> <td v-for="text in api" v-html=text></td> </tr> </tbody> </table> </section> '},7:function(e,a,o){var t,n,i={};o(5),t=o(3),n=o(6),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;n&&(r.template=n),r.computed||(r.computed={}),Object.keys(i).forEach(function(e){var a=i[e];r.computed[e]=function(){return a}})},8:function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]={props:{title:String,describe:String,code:String},data:function(){return{open:!1}},ready:function(){var e=this,a=this._slotContents["default"].childNodes;a=Array.prototype.filter.call(a,function(e){return 1===e.nodeType}),this.code||(this.code=a.map(function(e){return e.outerHTML.replace(/\t| {4}/g,"")}).join("\n")),this.$nextTick(function(){hljs.highlightBlock(e.$el.querySelector("pre code"))})},methods:{handleOpen:function(){this.open=!this.open}}}},9:function(e,a,o){a=e.exports=o(1)(),a.push([e.id,'.code-box{border:1px solid #e9e9e9;border-radius:6px;display:inline-block;width:100%;position:relative;margin:0 0 16px;-webkit-transition:all .2s ease;transition:all .2s ease}.code-box .collapse{position:absolute;right:16px;bottom:16px;cursor:pointer;width:18px;height:18px;font-size:18px;line-height:18px;opacity:.5;text-align:center;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all .3s ease;transition:all .3s ease;color:#999;background:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:100%}.code-box .collapse:hover{opacity:1}.code-box:hover{box-shadow:0 0 6px rgba(0,0,0,.15);position:relative;z-index:10;background:#fff}.code-box:hover .code-box-title{background:#fbfbfb;box-shadow:0 -1.2px 0 #e9e9e9}.code-box:hover .code-box-meta{background:#fbfbfb}.code-box .code-box-demo{border-bottom:1px solid #e9e9e9;padding:42px 20px 50px}.code-box .highlight-wrapper{max-height:0;opacity:0;overflow:auto;-webkit-transition:all .4s ease;transition:all .4s ease;border-radius:0 0 6px 6px}.code-box .highlight-wrapper-expand{max-height:500px;opacity:1}.code-box.expand .collapse{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.code-box.expand .code-box-meta{border-radius:0;border-bottom:1px dashed #e9e9e9}.code-box-meta{position:relative;padding:16px;border-radius:0 0 6px 6px;-webkit-transition:background-color .4s ease;transition:background-color .4s ease;width:100%;font-size:12px}.code-box-meta p{margin:0}.code-box-title{position:absolute;top:-14px;padding:1px 1.1em;color:#777;border-radius:6px;background:#fff;-webkit-transition:all .4s ease;transition:all .4s ease}.code-box-title:before{font-family:anticon;content:"\\E6D2";font-size:16px;vertical-align:middle;line-height:22px;position:relative;margin-right:8px;top:-2px;color:#ccc;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);display:inline-block}.code-box .code-box-title a,.code-box .code-box-title a:hover{color:#666;font-size:14px}.highlight{line-height:1.5}.highlight pre{margin:0;padding:0;background:#fff;width:auto}.highlight pre code{display:block;color:#666;line-height:1.7;border:1px solid #e9e9e9;padding:10px 15px;border-radius:6px;font-size:13px;border:none;background:#fff}.hljs{background:none}',""])},10:function(e,a,o){var t=o(9);"string"==typeof t&&(t=[[e.id,t,""]]);o(2)(t,{});t.locals&&(e.exports=t.locals)},11:function(e,a){e.exports=' <section class=code-box :class="{\'expand\': open}"> <section class=code-box-demo> <slot></slot> </section> <section class="code-box-meta markdown"> <div class=code-box-title><a>{{ title }}</a></div> <div><p>{{ describe }}</p></div> <span class="collapse anticon anticon-circle-o-right" @click=handleOpen></span> </section> <section class=highlight-wrapper :class="{\'highlight-wrapper-expand\': open}"> <div class=highlight> <pre><code class=html>{{ code }}</code></pre> </div> </section> </section> '},12:function(e,a,o){var t,n,i={};o(10),t=o(8),n=o(11),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;n&&(r.template=n),r.computed||(r.computed={}),Object.keys(i).forEach(function(e){var a=i[e];r.computed[e]=function(){return a}})},268:function(e,a,o){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0});var n=o(34),i=t(n),r=o(15),d=t(r),l=o(12),s=t(l),u=o(7),p=t(u);a["default"]={data:function(){return{apis:[{parameter:"disabled",explain:"禁用",type:"Boolean","default":"false"},{parameter:"onChange",explain:"选项变化时的回调函数",type:"Function(e:Event)","default":"无"},{parameter:"value",explain:"根据 value 进行比较，判断是否选中",type:"String","default":"无"},{parameter:"defaultChecked",explain:"初始是否选中",type:"Boolean","default":"false"},{parameter:"checked",explain:"指定当前是否选中",type:"Boolean","default":"false"}],apiGroup:[{parameter:"onChange",explain:"选项变化时的回调函数",type:"Function(e:Event)","default":"无"},{parameter:"value",explain:"用于设置当前选中的值",type:"String","default":"无"},{parameter:"defaultValue",explain:"默认选中的值",type:"String","default":"无"},{parameter:"size",explain:"大小，只对按钮样式生效large default small",type:"String","default":"default"},{parameter:"type",explain:"外观radio or button",type:"String","default":"radio"},{parameter:"radios[ { name,value,disabled } ]",explain:"指定可选项",type:"array","default":"无"},{parameter:"disabled",explain:"禁用",type:"Boolean","default":"false"}],disabled:!0}},methods:{_toggleDisabled:function(){this.disabled=!this.disabled},_onGroupChange:function(e){console.log("radio checked:"+e.target.value),this.groupValue=e.target.value},_onCityChange:function(e){console.log("当前城市: "+e.target.name),this.cityName=e.target.name}},components:{vRadio:i["default"],vRadioGroup:i["default"].Group,vButton:d["default"],codeBox:s["default"],apiTable:p["default"]}}},353:function(e,a,o){a=e.exports=o(1)(),a.push([e.id,"",""])},410:function(e,a,o){var t=o(353);"string"==typeof t&&(t=[[e.id,t,""]]);o(2)(t,{});t.locals&&(e.exports=t.locals)},548:function(e,a){e.exports=" <div> <section class=markdown> <h1>Radio 单选框</h1> <p> 单选框 </p> <h2>何时使用</h2> <ul> <p> 用于在多个备选项中选中单个状态。 </p> <p> 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。 </p> </ul> <h2>组件演示</h2> </section> <div class=ant-row style=\"margin-left: -8px; margin-right: -8px\"> <div class=\"ant-col-lg-12 code-boxes-col-2-1\"> <code-box title=基本 describe=最简单的用法。 code=\"<v-radio><span>Radio</span></v-radio>\"> <v-radio><span>Radio</span></v-radio> </code-box> <code-box title=按钮尺寸 describe=RadioGroup组合> <v-radio-group :on-change=_onGroupChange default-value=a :radios=\"[{value: 'a', name: 'A'},{value: 'b', name: 'B'},{value: 'c', name: 'C'},{value: 'd', name: 'D'}]\"> </v-radio-group> </code-box> <code-box title=按钮样式 describe=按钮样式的单选组合。 code=\" <v-radio-group\n  type='button'\n  :on-change='_onCityChange'\n  default-value='hangzhou'\n  :radios='[{value: 'hangzhou', name: '杭州'},{value: 'shanghai', name: '上海'},{value: 'beijing', name: '北京'},{value: 'chengdu', name: '成都'}]'>\n</v-radio-group>\n<v-radio-group\n  type='button'\n  :on-change='_onCityChange'\n  default-value='hangzhou'\n  :radios='[{value: 'hangzhou', name: '杭州'},{value: 'shanghai', name: '上海',disabled:true},{value: 'beijing', name: '北京'},{value: 'chengdu', name: '成都'}]'>\n</v-radio-group>\n<v-radio-group\n  type='button'\n  :on-change='_onCityChange'\n  default-value='hangzhou'\n  disabled\n  :radios='[{value: 'hangzhou', name: '杭州'},{value: 'shanghai', name: '上海',disabled:false},{value: 'beijing', name: '北京'},{value: 'chengdu', name: '成都'}]'>\n</v-radio-group>\"> <v-radio-group type=button :on-change=_onCityChange default-value=hangzhou :radios=\"[{value: 'hangzhou', name: '杭州'},{value: 'shanghai', name: '上海'},{value: 'beijing', name: '北京'},{value: 'chengdu', name: '成都'}]\"> </v-radio-group> <br><br> <v-radio-group type=button :on-change=_onCityChange default-value=hangzhou :radios=\"[{value: 'hangzhou', name: '杭州'},{value: 'shanghai', name: '上海',disabled:true},{value: 'beijing', name: '北京'},{value: 'chengdu', name: '成都'}]\"> </v-radio-group> <br><br> <v-radio-group type=button :on-change=_onCityChange default-value=hangzhou disabled=disabled :radios=\"[{value: 'hangzhou', name: '杭州'},{value: 'shanghai', name: '上海',disabled:false},{value: 'beijing', name: '北京'},{value: 'chengdu', name: '成都'}]\"> </v-radio-group> </code-box> </div> <div class=\"ant-col-lg-12 code-boxes-col-2-1\"> <code-box title=不可用 describe=\"Radio 不可用。\" code=\"<v-radio :default-checked='false' :disabled='disabled'><span>不可用</span></v-radio>\n<v-radio :default-checked='true' :disabled='disabled'><span>不可用</span></v-radio>\n<v-button :type='primary' @click='_toggleDisabled'>Toggle disabled</v-button>\"> <v-radio :default-checked=false :disabled=disabled><span>不可用</span></v-radio> <br> <v-radio :default-checked=true :disabled=disabled><span>不可用</span></v-radio> <br> <br> <v-button :type=primary @click=_toggleDisabled>Toggle disabled</v-button> </code-box> <code-box title=大小 describe=大中小三种组合，可以和表单输入框进行对应配合。 code=\"<v-radio-group\n  size='large'\n  type='button'\n  :on-change='_onCityChange'\n  default-value='hangzhou'\n  :radios='[{value: 'hangzhou', name: '杭州'},{value: 'shanghai', name: '上海'},{value: 'beijing', name: '北京'},{value: 'chengdu', name: '成都'}]'>\n</v-radio-group>\n<br><br>\n<v-radio-group\n  type='button'\n  :on-change='_onCityChange'\n  default-value='hangzhou'\n  :radios='[{value: 'hangzhou', name: '杭州'},{value: 'shanghai', name: '上海'},{value: 'beijing', name: '北京'},{value: 'chengdu', name: '成都'}]'>\n</v-radio-group>\n<br><br>\n<v-radio-group\n  size='small'\n  type='button'\n  :on-change='_onCityChange'\n  default-value='hangzhou'\n  :radios='[{value: 'hangzhou', name: '杭州'},{value: 'shanghai', name: '上海'},{value: 'beijing', name: '北京'},{value: 'chengdu', name: '成都'}]'>\n</v-radio-group>\"> <v-radio-group size=large type=button :on-change=_onCityChange default-value=hangzhou :radios=\"[{value: 'hangzhou', name: '杭州'},{value: 'shanghai', name: '上海'},{value: 'beijing', name: '北京'},{value: 'chengdu', name: '成都'}]\"> </v-radio-group> <br><br> <v-radio-group type=button :on-change=_onCityChange default-value=hangzhou :radios=\"[{value: 'hangzhou', name: '杭州'},{value: 'shanghai', name: '上海'},{value: 'beijing', name: '北京'},{value: 'chengdu', name: '成都'}]\"> </v-radio-group> <br><br> <v-radio-group size=small type=button :on-change=_onCityChange default-value=hangzhou :radios=\"[{value: 'hangzhou', name: '杭州'},{value: 'shanghai', name: '上海'},{value: 'beijing', name: '北京'},{value: 'chengdu', name: '成都'}]\"> </v-radio-group> </code-box> </div> </div> <api-table :apis=apis> <h3>Radio</h3> </api-table> <api-table title=\"\" :apis=apiGroup> <h3>RadioGroup</h3> </api-table> </div> "},667:function(e,a,o){var t,n,i={};o(410),t=o(268),n=o(548),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;n&&(r.template=n),r.computed||(r.computed={}),Object.keys(i).forEach(function(e){var a=i[e];r.computed[e]=function(){return a}})}});