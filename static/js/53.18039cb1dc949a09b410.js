webpackJsonp([53],{356:function(s,a,t){s.exports=t(425)},425:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l={data:function(){return{options:[],results:[],dataSource:[{value:"Burns Bay Road",label:"Burns Bay Road"},{value:"Downing Street",label:"Downing Street"},{value:"Wall Street",label:"Wall Street"}]}},methods:{select:function(s){console.log("select",s)},search:function(s){this.options=s?[{value:s,label:s},{value:s+s,label:s+s},{value:s+s+s,label:s+s+s}]:[]},handelSearch:function(s){!s||s.indexOf("@")>=0?this.results=[]:this.results=["gmail.com","163.com","qq.com"].map(function(a){return{value:s+"@"+a,label:s+"@"+a}})},filter:function(s,a){var t=s.toLocaleUpperCase();return-1!==a.value.toUpperCase().indexOf(t)}}},v=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("undefined",[t("h1",[s._v("AutoComplete 自动完成")]),s._v(" "),t("p",[s._v("输入框自动完成功能。")]),s._v(" "),t("h2",{attrs:{id:"he-shi-shi-yong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#he-shi-shi-yong","aria-hidden":"true"}},[s._v("¶")]),s._v(" 何时使用")]),s._v(" "),t("p",[s._v("需要自动完成时。")]),s._v(" "),t("h2",{attrs:{id:"dai-ma-yan-shi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dai-ma-yan-shi","aria-hidden":"true"}},[s._v("¶")]),s._v(" 代码演示")]),s._v(" "),t("demo-box",{attrs:{jsfiddle:{html:'<template>\n    <div>\n        <v-auto-complete :data="options" @select="select" @search="search" style="width:200px;"></v-auto-complete>\n    </div>\n</template>\n\n\n',script:"\n    export default {\n        data: ()=> ({\n            options: [],\n        }),\n        methods: {\n            search(val) {\n                this.options = [{\n                    value: value,\n                    label: value\n                }, {\n                    value: value + value,\n                    label: value + value\n                }, {\n                    value: value + value + value,\n                    label: value + value + value\n                }];\n            },\n            select(value) {\n                console.log('select value', value)\n            }\n        }\n    }\n",style:null}}},[t("div",{staticClass:"box-demo-show",attrs:{slot:"component"},slot:"component"},[[t("div",[t("v-auto-complete",{staticStyle:{width:"200px"},attrs:{data:s.options},on:{select:s.select,search:s.search}})],1)]],2),s._v(" "),t("div",{attrs:{slot:"description"},slot:"description"},[t("h4",{attrs:{id:"ji-ben"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben","aria-hidden":"true"}},[s._v("¶")]),s._v(" 基本")]),s._v(" "),t("p",[s._v("基本使用。")])]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"code"},slot:"code"},[t("pre",[t("code",{staticClass:"hljs language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n        "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-auto-complete")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":data")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"options"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@select")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"select"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@search")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"search"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"width:200px;"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-auto-complete")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n        "),t("span",{staticClass:"hljs-attr"},[s._v("data")]),s._v(": "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("()")]),s._v("=>")]),s._v(" ({\n            "),t("span",{staticClass:"hljs-attr"},[s._v("options")]),s._v(": [],\n        }),\n        "),t("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n            search(val) {\n                "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".options = [{\n                    "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": value,\n                    "),t("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": value\n                }, {\n                    "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": value + value,\n                    "),t("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": value + value\n                }, {\n                    "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": value + value + value,\n                    "),t("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": value + value + value\n                }];\n            },\n            select(value) {\n                "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v("'select value'")]),s._v(", value)\n            }\n        }\n    }\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("summary",[s._v("\n  #### 基本\n  基本使用。\n")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-auto-complete")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"options"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@select")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"select"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@search")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"search"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"width:200px;"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-auto-complete")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v("=>")]),s._v(" ({\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [],\n        }),\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n            search(val) {\n                "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".options = [{\n                    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": value,\n                    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": value\n                }, {\n                    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": value + value,\n                    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": value + value\n                }, {\n                    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": value + value + value,\n                    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": value + value + value\n                }];\n            },\n            select(value) {\n                "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-string"}},[s._v("'select value'")]),s._v(", value)\n            }\n        }\n    }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("demo-box",{attrs:{jsfiddle:{html:'<template>\n    <v-auto-complete @search="handelSearch" :data="results" style="width:200px;">\n        <template slot-scope="{data}">\n            {{data.label}}-1\n        </template>\n    </v-auto-complete>\n</template>\n\n\n',script:"\n    export default {\n        data: ()=> ({\n            results: [],\n        }),\n        methods: {\n            handelSearch(value) {\n                if(!value || value.indexOf('@') >=0 ){\n                    this.results = [];\n                } else {\n                    this.results = ['gmail.com', '163.com', 'qq.com'].map(domain => ({value: `${value}@${domain}`, label: `${value}@${domain}`}));\n                }\n            }\n        }\n    }\n",style:null}}},[t("div",{staticClass:"box-demo-show",attrs:{slot:"component"},slot:"component"},[[t("v-auto-complete",{staticStyle:{width:"200px"},attrs:{data:s.results},on:{search:s.handelSearch},scopedSlots:s._u([{key:"default",fn:function(a){var t=a.data;return[s._v("\n            "+s._s(t.label)+"-1\n        ")]}}])})]],2),s._v(" "),t("div",{attrs:{slot:"description"},slot:"description"},[t("h4",{attrs:{id:"zi-ding-yi-xuan-xiang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-xuan-xiang","aria-hidden":"true"}},[s._v("¶")]),s._v(" 自定义选项")]),s._v(" "),t("p",[s._v("通过默认scopedSlot自定义选项显示内容")])]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"code"},slot:"code"},[t("pre",[t("code",{staticClass:"hljs language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-auto-complete")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@search")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"handelSearch"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":data")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"results"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"width:200px;"')]),s._v(">")]),s._v("\n        "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("slot-scope")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"{data}"')]),s._v(">")]),s._v("\n            "),t("span",[s._v("{{")]),s._v("data.label"),t("span",[s._v("}}")]),s._v("-1\n        "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-auto-complete")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n        "),t("span",{staticClass:"hljs-attr"},[s._v("data")]),s._v(": "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("()")]),s._v("=>")]),s._v(" ({\n            "),t("span",{staticClass:"hljs-attr"},[s._v("results")]),s._v(": [],\n        }),\n        "),t("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n            handelSearch(value) {\n                "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v("(!value || value.indexOf("),t("span",{staticClass:"hljs-string"},[s._v("'@'")]),s._v(") >="),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(" ){\n                    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".results = [];\n                } "),t("span",{staticClass:"hljs-keyword"},[s._v("else")]),s._v(" {\n                    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".results = ["),t("span",{staticClass:"hljs-string"},[s._v("'gmail.com'")]),s._v(", "),t("span",{staticClass:"hljs-string"},[s._v("'163.com'")]),s._v(", "),t("span",{staticClass:"hljs-string"},[s._v("'qq.com'")]),s._v("].map("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("domain")]),s._v(" =>")]),s._v(" ({"),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("`"),t("span",{staticClass:"hljs-subst"},[s._v("${value}")]),s._v("@"),t("span",{staticClass:"hljs-subst"},[s._v("${domain}")]),s._v("`")]),s._v(", "),t("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("`"),t("span",{staticClass:"hljs-subst"},[s._v("${value}")]),s._v("@"),t("span",{staticClass:"hljs-subst"},[s._v("${domain}")]),s._v("`")]),s._v("}));\n                }\n            }\n        }\n    }\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("summary",[s._v("\n  #### 自定义选项\n  通过默认scopedSlot自定义选项显示内容\n")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-auto-complete")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@search")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"handelSearch"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"results"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"width:200px;"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot-scope")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"{data}"')]),s._v(">")]),s._v("\n            "),t("span",[s._v("{{")]),s._v("data.label"),t("span",[s._v("}}")]),s._v("-1\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-auto-complete")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v("=>")]),s._v(" ({\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("results")]),s._v(": [],\n        }),\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n            handelSearch(value) {\n                "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v("(!value || value.indexOf("),t("span",{attrs:{class:"hljs-string"}},[s._v("'@'")]),s._v(") >="),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" ){\n                    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".results = [];\n                } "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" {\n                    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".results = ["),t("span",{attrs:{class:"hljs-string"}},[s._v("'gmail.com'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'163.com'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'qq.com'")]),s._v("].map("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("domain")]),s._v(" =>")]),s._v(" ({"),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("`"),t("span",{attrs:{class:"hljs-subst"}},[s._v("${value}")]),s._v("@"),t("span",{attrs:{class:"hljs-subst"}},[s._v("${domain}")]),s._v("`")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("`"),t("span",{attrs:{class:"hljs-subst"}},[s._v("${value}")]),s._v("@"),t("span",{attrs:{class:"hljs-subst"}},[s._v("${domain}")]),s._v("`")]),s._v("}));\n                }\n            }\n        }\n    }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("demo-box",{attrs:{jsfiddle:{html:'<template>\n    <v-auto-complete :data="dataSource" :filter="filter" style="width:200px;"></v-auto-complete>\n</template>\n\n\n',script:"\n    export default {\n        data: ()=> ({\n            dataSource: [\n                { value: 'Burns Bay Road', label: 'Burns Bay Road' },\n                { value: 'Downing Street', label: 'Downing Street' },\n                { value: 'Wall Street', label: 'Wall Street'},\n            ],\n        }),\n        methods: {\n            filter(val, item) {\n                const input = val.toLocaleUpperCase();\n                return item.value.toUpperCase().indexOf(input) !== -1;\n            }\n        }\n    }\n",style:null}}},[t("div",{staticClass:"box-demo-show",attrs:{slot:"component"},slot:"component"},[[t("v-auto-complete",{staticStyle:{width:"200px"},attrs:{data:s.dataSource,filter:s.filter}})]],2),s._v(" "),t("div",{attrs:{slot:"description"},slot:"description"},[t("h4",{attrs:{id:"bu-qu-fen-da-xiao-xie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bu-qu-fen-da-xiao-xie","aria-hidden":"true"}},[s._v("¶")]),s._v(" 不区分大小写")]),s._v(" "),t("p",[s._v("不区分大小写的 AutoComplete")])]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"code"},slot:"code"},[t("pre",[t("code",{staticClass:"hljs language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-auto-complete")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":data")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"dataSource"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":filter")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"filter"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"width:200px;"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-auto-complete")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n        "),t("span",{staticClass:"hljs-attr"},[s._v("data")]),s._v(": "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("()")]),s._v("=>")]),s._v(" ({\n            "),t("span",{staticClass:"hljs-attr"},[s._v("dataSource")]),s._v(": [\n                { "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'Burns Bay Road'")]),s._v(", "),t("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'Burns Bay Road'")]),s._v(" },\n                { "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'Downing Street'")]),s._v(", "),t("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'Downing Street'")]),s._v(" },\n                { "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'Wall Street'")]),s._v(", "),t("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'Wall Street'")]),s._v("},\n            ],\n        }),\n        "),t("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n            filter(val, item) {\n                "),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" input = val.toLocaleUpperCase();\n                "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" item.value.toUpperCase().indexOf(input) !== "),t("span",{staticClass:"hljs-number"},[s._v("-1")]),s._v(";\n            }\n        }\n    }\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("summary",[s._v("\n  #### 不区分大小写\n  不区分大小写的 AutoComplete\n")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-auto-complete")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"dataSource"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":filter")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"filter"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"width:200px;"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-auto-complete")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v("=>")]),s._v(" ({\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("dataSource")]),s._v(": [\n                { "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Burns Bay Road'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Burns Bay Road'")]),s._v(" },\n                { "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Downing Street'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Downing Street'")]),s._v(" },\n                { "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Wall Street'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Wall Street'")]),s._v("},\n            ],\n        }),\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n            filter(val, item) {\n                "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" input = val.toLocaleUpperCase();\n                "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" item.value.toUpperCase().indexOf(input) !== "),t("span",{attrs:{class:"hljs-number"}},[s._v("-1")]),s._v(";\n            }\n        }\n    }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("h2",{attrs:{id:"api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[s._v("¶")]),s._v(" API")]),s._v(" "),t("h3",{attrs:{id:"autocomplete-props"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#autocomplete-props","aria-hidden":"true"}},[s._v("¶")]),s._v(" AutoComplete Props")]),s._v(" "),t("table",{staticClass:"table"},[t("thead",[t("tr",[t("th",[s._v("属性")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("默认值")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("value")]),s._v(" "),t("td",[s._v("指定默认选中的条目")]),s._v(" "),t("td",[s._v("string/array")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("data")]),s._v(" "),t("td",[s._v("自动完成的数据源")]),s._v(" "),t("td",[s._v("array")]),s._v(" "),t("td",[s._v("[]")])]),s._v(" "),t("tr",[t("td",[s._v("placeholder")]),s._v(" "),t("td",[s._v("输入框提示")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("filter")]),s._v(" "),t("td",[s._v("搜索过滤函数,返回Boolean")]),s._v(" "),t("td",[s._v("搜索过滤函数,返回Boolean")]),s._v(" "),t("td",[s._v("-")])])])]),s._v(" "),t("h3",{attrs:{id:"data-props"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-props","aria-hidden":"true"}},[s._v("¶")]),s._v(" Data Props")]),s._v(" "),t("table",{staticClass:"table"},[t("thead",[t("tr",[t("th",[s._v("属性")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("默认值")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("label")]),s._v(" "),t("td",[s._v("选项的标签或组名(作为标签时可通过select的label属性修改；作为组名时只支持一级,可通过select的groupLabel属性修改)")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("disabled")]),s._v(" "),t("td",[s._v("是否禁用")]),s._v(" "),t("td",[s._v("boolean")]),s._v(" "),t("td",[s._v("false")])]),s._v(" "),t("tr",[t("td",[s._v("options")]),s._v(" "),t("td",[s._v("分组的数据")]),s._v(" "),t("td",[s._v("array")]),s._v(" "),t("td",[s._v("-")])])])]),s._v(" "),t("h3",{attrs:{id:"autocomplete-events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#autocomplete-events","aria-hidden":"true"}},[s._v("¶")]),s._v(" AutoComplete Events")]),s._v(" "),t("table",{staticClass:"table"},[t("thead",[t("tr",[t("th",[s._v("事件")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("参数")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("search")]),s._v(" "),t("td",[s._v("搜索补全项的时候调用")]),s._v(" "),t("td",[s._v("value")])]),s._v(" "),t("tr",[t("td",[s._v("select")]),s._v(" "),t("td",[s._v("被选中时调用，参数为选中项的 value 值")]),s._v(" "),t("td",[s._v("value")])]),s._v(" "),t("tr",[t("td",[s._v("blur")]),s._v(" "),t("td",[s._v("blur事件")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("focus")]),s._v(" "),t("td",[s._v("focus事件")]),s._v(" "),t("td",[s._v("-")])])])])],1)},n=[],e={render:v,staticRenderFns:n},_=e,r=t(0),c=r(l,_,!1,null,null,null);a.default=c.exports}});
//# sourceMappingURL=53.18039cb1dc949a09b410.js.map