(window.webpackJsonp=window.webpackJsonp||[]).push([[399],{843:function(e,s,n){"use strict";n.r(s);var r=n(30),t=Object(r.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[n("a",{attrs:{href:"https://github.com/ai/browserslist",target:"_blank",rel:"noopener noreferrer"}},[e._v("browserslist "),n("OutboundLink")],1),e._v(" 是一个开源项目\n见到有些package.json里会有如下的配置参数")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(' "browserslist": [\n    "> 1%",\n    "last 2 versions",\n    "Android >= 3.2", \n    "Firefox >= 20", \n    "iOS 7"\n  ]\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br")])]),n("p",[e._v('应该不难猜出来，这代表这个项目的浏览器兼容情况。\n白话就是我这个项目兼容绝大多数的，最新的和iOS7系统下的浏览器。不兼容Android 3.2系统以下和Firefox20以下的浏览器\n像这些" '),n("a",{attrs:{href:"http://browserl.ist/?q=%3E+1%25",target:"_blank",rel:"noopener noreferrer"}},[e._v("> 1%"),n("OutboundLink")],1),e._v('", "'),n("a",{attrs:{href:"http://browserl.ist/?q=last+2+versions",target:"_blank",rel:"noopener noreferrer"}},[e._v("last 2 versions"),n("OutboundLink")],1),e._v('" 都是查询参数。\n查询参数很强大，比如我想查看中国人使用浏览器的情况请输入 '),n("code",[e._v("> 1% in CN")]),e._v("。竟然还有IE8 ~>_<~。对比美国"),n("code",[e._v("> 1% in US")]),e._v("的。\n具体参数列表见"),n("a",{attrs:{href:"https://github.com/ai/browserslist#queries",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("那配这个除了说明我的项目支持情况，对开发有啥作用呢?")]),e._v(" "),n("p",[e._v("具体的影响到前端工具的编译情况，比如 Autoprefixer 可以给css加兼容性前缀\nbabel-preset-env ， eslint-plugin-compat， stylelint-no-unsupported-browser-features 和 postcss-normalize\n比如.babelrc文件你可以针对配置")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{\n  "presets": [\n    ["env", {\n      "targets": {\n        "browsers": ["last 2 versions"],\n        "node": "current"\n      },\n    }]\n  ]\n}\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-b9a44eafc7ed0e5a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"20170928175559.png"}})]),e._v(" "),n("p",[e._v("更进一步根据浏览器可以获得"),n("a",{attrs:{href:"http://caniuse.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("特性"),n("OutboundLink")],1),e._v("，比如最新的chrome浏览器支持原生的promise，而IE不支持，babel根据browserslist配置项就会动态的转义。不用在一个个进行配置了。")])])}),[],!1,null,null,null);s.default=t.exports}}]);