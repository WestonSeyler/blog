(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{574:function(e,t,r){"use strict";r.r(t);var a=r(30),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("2019-11-6 更新 "),r("a",{attrs:{href:"https://github.com/jesseduffield/lazydocker",target:"_blank",rel:"noopener noreferrer"}},[e._v("lazydocker"),r("OutboundLink")],1),e._v(" 终端UI的docker和docker-compose")]),e._v(" "),r("p",[e._v("2019-3-8 更新 "),r("a",{attrs:{href:"https://dockstation.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("dockstation"),r("OutboundLink")],1),e._v(" Docker的GUI管理工具")]),e._v(" "),r("blockquote",[r("p",[r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-aaad497aabec7f5e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),r("blockquote",[r("p",[r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-cab0bbf35db95f74.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),r("h4",{attrs:{id:"为什么需要docker图形化管理平台"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要docker图形化管理平台"}},[e._v("#")]),e._v(" 为什么需要docker图形化管理平台？")]),e._v(" "),r("p",[e._v("命令行虽然效率高，但太专业，不够直观，而且多主机管理不方便。\n图形化管理系统还可以和用户角色管理等关联起来。不用太多的专业知识也能很快上手。")]),e._v(" "),r("h4",{attrs:{id:"都有哪些开源免费的docker图形化管理平台"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#都有哪些开源免费的docker图形化管理平台"}},[e._v("#")]),e._v(" 都有哪些开源免费的docker图形化管理平台？")]),e._v(" "),r("p",[e._v("截至当前(2018年) Rancher 和 portainer 比较火，star数量都将近1w。还有个shipyard，但是作者已经停止维护，并推荐使用前面两款。")]),e._v(" "),r("p",[e._v("Portainer 比 Rancher 要轻量，如果刚接触 Docker，建议先使用这个。如果要图形化管理 Kubernetes  就用 Rancher。")]),e._v(" "),r("h2",{attrs:{id:"portainer-轻量的-docker-ui管理系统"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#portainer-轻量的-docker-ui管理系统"}},[e._v("#")]),e._v(" Portainer - 轻量的 Docker UI管理系统")]),e._v(" "),r("blockquote",[r("p",[r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-eaa69a845ab89428.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),r("blockquote",[r("p",[r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-93857d2ec1052009.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),r("p",[e._v("先看下 Portainer ，以 Windows 为例，Portainer 可以运行在容器中，也可以下载编译后的包。比如这里我下载的是 portainer-1.19.2-windows-amd64.tar.gz")]),e._v(" "),r("p",[e._v("下载最新的发行版本 https://github.com/portainer/portainer/releases\n解压到新建的portainer目录中，这个目录底下再新建保存数据的目录 portainer_data\n打开命令行执行下面的命令，然后浏览器就可以访问了\n"),r("code",[e._v("./portainer.exe -p :9000 --template-file templates.json --data ./portainer_data/")])]),e._v(" "),r("p",[e._v("具体细节参考：\nhttps://portainer.readthedocs.io/en/latest/deployment.html#quick-start\n关于在Windows运行的教程\nhttp://blog.airdesk.com/2017/10/windows-containers-portainer-gui.html")]),e._v(" "),r("h2",{attrs:{id:"rancher-针对-kubernetes-企业级管理系统"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rancher-针对-kubernetes-企业级管理系统"}},[e._v("#")]),e._v(" Rancher - 针对 Kubernetes 企业级管理系统")]),e._v(" "),r("p",[e._v("文档： "),r("a",{attrs:{href:"https://rancher.com/docs/rancher/v2.x/en/quick-start-guide/deployment/quickstart-manual-setup/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rancher"),r("OutboundLink")],1),e._v(" 。")]),e._v(" "),r("p",[e._v("下面放几张图：")]),e._v(" "),r("ol",[r("li",[e._v("装好后，打开先让设置管理员密码：")])]),e._v(" "),r("blockquote",[r("p",[r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-9d7720d226bc6f2d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[e._v("然后让添加一个集群，先修改语言为中文。")])]),e._v(" "),r("blockquote",[r("p",[r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-f3ffd82a4feaf9d4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[e._v("填写信息，呃，好像是配置Kubernates。还没有研究到这里\n先到这里吧。有空再研究。")])]),e._v(" "),r("blockquote",[r("p",[r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-02cafc5cb18c7063.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}}),e._v(" "),r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-16d6303508e1d675.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),r("h2",{attrs:{id:"cadvisor-容器监控工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cadvisor-容器监控工具"}},[e._v("#")]),e._v(" cadvisor - 容器监控工具")]),e._v(" "),r("p",[e._v("有时候需要监控每个容器的运行情况。\ngoogle出品了"),r("a",{attrs:{href:"https://github.com/google/cadvisor",target:"_blank",rel:"noopener noreferrer"}},[e._v("cAdvisor"),r("OutboundLink")],1),e._v("\n运行后，可打开web界面查看所有的容器， 镜像。")]),e._v(" "),r("blockquote",[r("p",[r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-f86d81e3bc40d1ea.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),r("p",[e._v("点击某容器，可查看具体的CPU，内存，网络，文件系统的运行情况")]),e._v(" "),r("blockquote",[r("p",[r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-7404a3e9f389222e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),r("blockquote",[r("p",[r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-5c06e6e73103654e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),r("p",[e._v("cAdvisor提供的页面非常简洁。\n页面上的数据可以通过他"),r("a",{attrs:{href:"https://github.com/google/cadvisor/blob/master/docs/api.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("暴露的API"),r("OutboundLink")],1),e._v("直接获取，可以把 cAdvisor 定位为一个监控数据收集器，收集和导出数据是它的强项，而非展示数据。所以可以结合其他工具一块使用。")]),e._v(" "),r("h2",{attrs:{id:"lazydocker-终端用户界面"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lazydocker-终端用户界面"}},[e._v("#")]),e._v(" lazydocker - 终端用户界面")]),e._v(" "),r("p",[e._v("lazydocker，一个简单的 docker 和 docker-compose 终端用户界面，用更懒惰的方式来管理所有的 docker。")]),e._v(" "),r("p",[e._v("其界面采用 gocui 开发。")]),e._v(" "),r("blockquote",[r("p",[r("img",{attrs:{src:"https://static.oschina.net/uploads/space/2019/0630/141740_uL43_3734192.gif",alt:"image.png"}})])])])}),[],!1,null,null,null);t.default=o.exports}}]);