(window.webpackJsonp=window.webpackJsonp||[]).push([[367],{806:function(s,n,e){"use strict";e.r(n);var a=e(30),r=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("blockquote",[e("p",[s._v("学好 RxJS 的关键是对 Operators (操作符)的灵活使用，操作符大多是纯函数，我们使用操作符创建，转换，过滤，组合，错误处理，辅助操作 Observables。具体"),e("a",{attrs:{href:"http://reactivex.io/documentation/operators.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("参见"),e("OutboundLink")],1),s._v("\n不同的操作符有不同的使用场景，有些名字容易混淆，可以对比的学习。")])]),s._v(" "),e("p",[s._v("下面介绍几个可以创建 Observable 的运算符，具体的介绍请问官网\n例子：https://codepen.io/mafeifan/pen/eQKNvN")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  const {from, of, range, interval, timer, empty} = rxjs;\n\n  function f() {\n    return from(arguments);\n  }\n\n  const observer = {\n    next: value => {\n      console.log('Next: ' + value);\n    },\n    error: error => {\n      console.log('Error:', error);\n    },\n    complete: () => {\n      console.log('Complete');\n    }\n  }\n\n  // Array Like Object\n  f(1, 2, 3).subscribe(observer);\n\n  // string\n  // from 接收数组\n  // 如果是字符串，会打印每一个字符\n  from('foo').subscribe(observer);\n\n  // Set, any iterable object\n  const s = new Set(['foo', window]);\n  from(s).subscribe(observer);\n\n  // Promise\n  const source = from(new Promise((resolve, reject) => {\n      setTimeout(() => {\n        resolve('Hello RxJS!');\n      },3000)\n    }));\n\n  source.subscribe(observer);\n  // 传啥输出啥\n  /*\n  Next: 1\n  Next: 2\n  Next: 3\n  */\n  of(1, 2, 3).subscribe(observer);\n\n  // Next: 4,5,6\n  of([4, 5, 6]).subscribe(observer);\n\n  // https://rxjs-dev.firebaseapp.com/api/index/function/range\n  // 从10开始递增+1连续发射两次， 输出 10, 11\n  /*\n    Next: 10,\n    Next: 11\n  */\n  range(10, 2).subscribe(observer);\n\n  // 从0开始计数，每间隔num ms秒发射一次\n  const num = 1000;\n  interval(num).subscribe(observer);\n\n  // 延迟2秒发射\n  timer(2000).subscribe(observer);\n\n  // 不会执行 next，直接执行 complete\n  empty().subscribe({\n    next: () => console.log(`empty`),\n    complete: () => console.log('empty Complete!')\n  });\n\n  // 延迟5秒发射, 间隔1秒发射一次\n  const subscription = timer(5000, 1000).subscribe(observer);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br"),e("span",{staticClass:"line-number"},[s._v("71")]),e("br"),e("span",{staticClass:"line-number"},[s._v("72")]),e("br")])])])}),[],!1,null,null,null);n.default=r.exports}}]);