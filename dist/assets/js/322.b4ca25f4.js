(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{757:function(e,n,s){"use strict";s.r(n);var a=s(30),r=Object(a.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("传统情况下，定义JS对象的方法有:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("let obj = {};\nlet obj = new Object; \nlet obj = Object.create();\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("如果我们直接为对象添加一个属性，比如 obj.a = 10 我们说 a 是 "),s("code",[e._v("普通属性")]),e._v("，他的值既可以被改变，也可以被删除，还可以被for..in 或 Object,keys 枚举遍历。")]),e._v(" "),s("p",[e._v("如果需要精确的添加或修改对象的属性。就可以使用"),s("code",[e._v("Object.defineProperty()")]),e._v("。\nObject.defineProperty(obj, prop, descriptor) 接收三个参数:")]),e._v(" "),s("p",[e._v("obj:  要在其上定义属性的对象。\nprop:  要定义或修改的属性的名称。\ndescriptor: 将被定义或修改的属性描述符。")]),e._v(" "),s("p",[s("strong",[e._v("默认情况下，使用 Object.defineProperty() 添加的属性值是不可修改的。")])]),e._v(" "),s("p",[e._v("descriptor  是重点，它是个对象，包含的键值比较多；\n我们可以这样：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('// 在对象中添加一个属性与数据描述符的示例\nObject.defineProperty(obj, "a", {\n  value : 20,  // 属性 a 的初始化值是37\n  writable : true,  // 可修改值内容\n  enumerable : true, // 可枚举，默认 false\n  configurable : true // 可删除，默认 false\n});\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("p",[e._v("这种效果和 obj.a = 20 一样\n还可以这么写")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('var bValue;\nObject.defineProperty(obj, "a", {\n  get : function(){\n    return bValue;\n  },\n  set : function(newValue){\n    bValue = newValue;\n  },\n  writable : true,  // 可修改值内容\n  enumerable : true, // 可枚举，默认 false\n  configurable : true // 可删除，默认 false\n});\no.a = 20;\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br")])]),s("p",[e._v("set，get 叫做"),s("code",[e._v("存取描述符")]),e._v("，这时不能出现 value 或 write 键，因为会冲突.")]),e._v(" "),s("h3",{attrs:{id:"writable-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#writable-属性"}},[e._v("#")]),e._v(" Writable 属性")]),e._v(" "),s("p",[e._v("默认 false\n如下：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("let obj = new Object;\nobj.a = 10;\nobj.a = 20;\nconsole.log(obj.a) // 20\n\nObject.defineProperty(obj, 'b', {}) // 属性 b 默认值为 'undefined'\nobj.b = 20\nconsole.log(obj.b) // 依然是 undefined，而且不会报错\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("h3",{attrs:{id:"enumerable-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enumerable-属性"}},[e._v("#")]),e._v(" Enumerable 属性")]),e._v(" "),s("p",[e._v("默认 false")]),e._v(" "),s("blockquote",[s("p",[e._v("enumerable定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举。")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var o = {};\nObject.defineProperty(o, \"a\", { value : 1, enumerable:true });\nObject.defineProperty(o, \"b\", { value : 2, enumerable:false });\nObject.defineProperty(o, \"c\", { value : 3 }); // enumerable defaults to false\no.d = 4; // 如果使用直接赋值的方式创建对象的属性，则这个属性的enumerable为true\n\nfor (var i in o) {    \n  console.log(i);  \n}\n// 打印 'a' 和 'd' (in undefined order)\n\nObject.keys(o); // [\"a\", \"d\"]\n\no.propertyIsEnumerable('a'); // true\no.propertyIsEnumerable('b'); // false\no.propertyIsEnumerable('c'); // false\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br")])]),s("h3",{attrs:{id:"configurable-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configurable-属性"}},[e._v("#")]),e._v(" Configurable  属性")]),e._v(" "),s("blockquote",[s("p",[e._v("configurable特性表示对象的属性是否可以被删除，以及除value和writable特性外的其他特性是否可以被修改。")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('var o = {};\nObject.defineProperty(o, "a", { get : function(){return 1;}, \n                                configurable : false } );\n\n// throws a TypeError\nObject.defineProperty(o, "a", {configurable : true}); \n// throws a TypeError\nObject.defineProperty(o, "a", {enumerable : true}); \n// throws a TypeError (set was undefined previously) \nObject.defineProperty(o, "a", {set : function(){}}); \n// throws a TypeError (even though the new get does exactly the same thing) \nObject.defineProperty(o, "a", {get : function(){return 1;}});\n// throws a TypeError\nObject.defineProperty(o, "a", {value : 12});\n\nconsole.log(o.a); // logs 1\ndelete o.a; // Nothing happens\nconsole.log(o.a); // logs 1\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br")])])])}),[],!1,null,null,null);n.default=r.exports}}]);