(window.webpackJsonp=window.webpackJsonp||[]).push([[383],{833:function(n,s,e){"use strict";e.r(s);var a=e(30),t=Object(a.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("先看 "),e("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/module#import",target:"_blank",rel:"noopener noreferrer"}},[n._v("这里"),e("OutboundLink")],1),n._v("\n有一个"),e("a",{attrs:{href:"https://github.com/tc39/proposal-dynamic-import",target:"_blank",rel:"noopener noreferrer"}},[n._v("提案"),e("OutboundLink")],1),n._v("，建议引入"),e("code",[n._v("import()")]),n._v("函数，完成动态加载。")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("import(specifier)\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("p",[n._v("上面代码中，"),e("code",[n._v("import")]),n._v("函数的参数"),e("code",[n._v("specifier")]),n._v("，指定所要加载的模块的位置。"),e("code",[n._v("import")]),n._v("命令能够接受什么参数，"),e("code",[n._v("import()")]),n._v("函数就能接受什么参数，两者区别主要是后者为动态加载。")]),n._v(" "),e("p",[e("code",[n._v("import()")]),n._v("返回一个 Promise 对象。下面是一个例子。")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("const main = document.querySelector('main');\n\nimport(`./section-modules/${someVariable}.js`)\n  .then(module => {\n    module.loadPageInto(main);\n  })\n  .catch(err => {\n    main.textContent = err.message;\n  });\n\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br")])]),e("p",[e("code",[n._v("import()")]),n._v("函数可以用在任何地方，不仅仅是模块，非模块的脚本也可以使用。它是运行时执行，也就是说，什么时候运行到这一句，也会加载指定的模块。另外，"),e("code",[n._v("import()")]),n._v("函数与所加载的模块没有静态连接关系，这点也是与"),e("code",[n._v("import")]),n._v("语句不相同。")]),n._v(" "),e("p",[e("code",[n._v("import()")]),n._v("类似于 Node 的"),e("code",[n._v("require")]),n._v("方法，区别主要是前者是异步加载，后者是同步加载。")]),n._v(" "),e("h3",{attrs:{id:"syntax-dynamic-import"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax-dynamic-import"}},[n._v("#")]),n._v(" syntax-dynamic-import")]),n._v(" "),e("p",[n._v("这种方式chrome63后已经原生支持了，但是如果是不支持浏览器就需要babel了。\n看这里 https://babeljs.io/docs/plugins/syntax-dynamic-import/")]),n._v(" "),e("h3",{attrs:{id:"运用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运用"}},[n._v("#")]),n._v(" 运用")]),n._v(" "),e("ol",[e("li",[n._v("vue的router.js中")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("import Vue from 'vue'\nimport Router from 'vue-router'\n\nVue.use(Router)\n\nfunction load(component) {\n  // '@' is aliased to src/components\n  return () => import(`@/pages/${component}/index.vue`)\n}\n\nexport default new Router({\n  routes: [\n    {\n      path: '/',\n      name: 'HelloWorld',\n      component: load('HelloPage')\n    },\n    {\n      path: '/tree',\n      name: 'TreePage',\n      component: load('TreePage')\n    }\n  ]\n})\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[n._v("vue加载多components")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// http://www.css88.com/doc/lodash/#_kebabcasestring\n// UploadFile => upload-file\nimport { kebabCase } from 'lodash'\n\nconst load = (component) => {\n  return () => import(`../components/${component}.vue`)\n}\n\nconst commonComponents = [\n  'BaseFormDialog',\n  'Datepicker',\n  'HeaderContent',\n  'UploadFile',\n  'FullScreenButton',\n  'RouterTreeview',\n  'RouterLinkBack',\n  'ModalDialog',\n  'vSelect'\n]\n\ncommonComponents.forEach(component => {\n  Vue.component(kebabCase(component), load(component));\n})\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);