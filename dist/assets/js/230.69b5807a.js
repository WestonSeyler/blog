(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{668:function(t,a,s){"use strict";s.r(a);var n=s(30),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("Kubernetes 使用 Pod 来管理容器，"),s("strong",[t._v("每个 Pod 可以包含一个或多个紧密关联的容器")]),t._v("。\nPod 是一组紧密关联的容器集合，它们共享 PID、IPC、Network 和 UTS namespace，是 Kubernetes 调度的基本单位。Pod 内的多个容器共享网络和文件系统，可以通过进程间通信和文件共享这种简单高效的方式组合完成服务。")]),t._v(" "),s("p",[t._v("创建 "),s("code",[t._v("pod_nginx.yaml")]),t._v(" 内容如下：")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pod\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("p",[s("code",[t._v("kubectl create -f pod_nginx.yaml")])]),t._v(" "),s("h1",{attrs:{id:"查看-pod"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看-pod"}},[t._v("#")]),t._v(" 查看 pod")]),t._v(" "),s("p",[s("code",[t._v("kubectl get pods")])]),t._v(" "),s("h1",{attrs:{id:"查看更详细的信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看更详细的信息"}},[t._v("#")]),t._v(" 查看更详细的信息")]),t._v(" "),s("p",[s("code",[t._v("kubectl get pods -o wide")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6c3dbf87a40e4aaa9aa23267976ba4f9~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),t._v(" "),s("p",[t._v("刷新dashboard页面也可以看到Pods信息")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e61b14cfb9b84f0b912521255b0128ea~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),t._v(" "),s("p",[t._v("但是外界并不能访问，另外"),s("code",[t._v("docker ps")]),t._v("，确实多了一个容器，但 ports 是空的，端口映射管理需要 k8s 创建service进行配置，接下来几篇会重点讲解")]),t._v(" "),s("p",[t._v("另外通过 "),s("code",[t._v("kubectl describe pods nginx")]),t._v(" 可以查看更多信息")])])}),[],!1,null,null,null);a.default=e.exports}}]);