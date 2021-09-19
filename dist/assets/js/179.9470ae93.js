(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{613:function(n,s,e){"use strict";e.r(s);var t=e(30),a=Object(t.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("参考"),e("a",{attrs:{href:"https://docs.github.com/en/free-pro-team@latest/actions/managing-workflow-runs/enabling-debug-logging",target:"_blank",rel:"noopener noreferrer"}},[n._v("官网文档"),e("OutboundLink")],1)]),n._v(" "),e("p",[n._v("如果需要开启runner的运行日志，只需要在settings中添加一对secret，key为"),e("code",[n._v("ACTIONS_RUNNER_DEBUG")]),n._v("，值为true\n如果需要开启step的运行日志，只需要在settings中添加一对secret，key为"),e("code",[n._v("ACTIONS_STEP_DEBUG")]),n._v("，值为true")]),n._v(" "),e("p",[n._v("下图开启debug前后的输出信息对比")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://pek3b.qingstor.com/hexo-blog/hexo-blog/20201118133259.png",alt:""}})]),n._v(" "),e("p",[n._v("另外在action运行中会带有一些诸如执行环境，当前job，当前runner，当前仓库，执行用户等上下文变量。\n想查看都有哪些集具体的变量可以加入steps")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('    steps:\n      - name: Dump GitHub context\n        env:\n          GITHUB_CONTEXT: ${{ toJson(github) }}\n        run: echo "$GITHUB_CONTEXT"\n      - name: Dump job context\n        env:\n          JOB_CONTEXT: ${{ toJson(job) }}\n        run: echo "$JOB_CONTEXT"\n      - name: Dump steps context\n        env:\n          STEPS_CONTEXT: ${{ toJson(steps) }}\n        run: echo "$STEPS_CONTEXT"\n      - name: Dump runner context\n        env:\n          RUNNER_CONTEXT: ${{ toJson(runner) }}\n        run: echo "$RUNNER_CONTEXT"\n      - name: Dump strategy context\n        env:\n          STRATEGY_CONTEXT: ${{ toJson(strategy) }}\n        run: echo "$STRATEGY_CONTEXT"\n      - name: Dump matrix context\n        env:\n          MATRIX_CONTEXT: ${{ toJson(matrix) }}\n        run: echo "$MATRIX_CONTEXT"\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br")])])])}),[],!1,null,null,null);s.default=a.exports}}]);