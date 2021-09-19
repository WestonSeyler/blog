(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{675:function(s,a,t){"use strict";t.r(a);var n=t(30),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),t("p",[s._v("K8s集群对外暴露服务的方式目前只有三种：Loadbalancer；NodePort；Ingress")]),s._v(" "),t("ul",[t("li",[s._v("Loadbalancer 缺点：需要阿里云等公有云支持，而且需要额外支付费用")]),s._v(" "),t("li",[s._v("NodePort 缺点：要暴露端口，端口范围只能是 30000-32767")]),s._v(" "),t("li",[s._v("Ingress 好处：Ingress 不会公开任意端口或协议。可能就是带来一些学习成本，需要了解Traefik和Nginx的常用配置和反向代理。")])]),s._v(" "),t("p",[s._v("一图看Ingress流程,由图可知，ingress充当的是代理的角色，把外部来的请求，根据路由地址转发到k8s中匹配到的后端service，而且service又连接了deployment，一个deployment又跑了N个Pod，达到了流量转发的目的。")]),s._v(" "),t("h3",{attrs:{id:"知识点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[s._v("#")]),s._v(" 知识点：")]),s._v(" "),t("ul",[t("li",[s._v("为了让 Ingress 资源工作，集群必须有一个正在运行的 Ingress Controller。")]),s._v(" "),t("li",[s._v("可以在集群中部署任意数量的 ingress 控制器。 创建 ingress 时，应该使用适当的 ingress.class 注解每个 Ingress 以表明在集群中如果有多个 Ingress 控制器时，应该使用哪个 Ingress 控制器。")]),s._v(" "),t("li",[s._v("比较流行的Ingress 控制器有"),t("a",{attrs:{href:"https://kubernetes.github.io/ingress-nginx/",target:"_blank",rel:"noopener noreferrer"}},[s._v("nginx-ingress-controller"),t("OutboundLink")],1),s._v(" 和 "),t("a",{attrs:{href:"https://doc.traefik.io/traefik/providers/kubernetes-ingress/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Traefik & Kubernetes"),t("OutboundLink")],1)]),s._v(" "),t("li",[s._v("Traefik是用Go编写的边缘路由程序，自带UI界面，有反向代理，负载均衡，自动配置并SSL证书，最近很火，但是官方文档比较垃圾，配置很灵活，使用起来有些难度。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/186c656921b44f53abdaac7cdb738109~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1675957342cb432bba7ac57197bff22c~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),s._v(" "),t("h3",{attrs:{id:"平台"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#平台"}},[s._v("#")]),s._v(" 平台")]),s._v(" "),t("ul",[t("li",[s._v("MacOS 11.2.3")]),s._v(" "),t("li",[s._v("Docker Desktop 3.3.3")]),s._v(" "),t("li",[s._v("Docker Engine: 20.10.6")]),s._v(" "),t("li",[s._v("Kubernates: v1.19.7")])]),s._v(" "),t("h3",{attrs:{id:"坑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#坑"}},[s._v("#")]),s._v(" 坑")]),s._v(" "),t("p",[s._v("目前常用的K8S镜像库有")]),s._v(" "),t("ul",[t("li",[s._v("docker.io (docker hub公共镜像库)")]),s._v(" "),t("li",[s._v("gcr.io (Google container registry)")]),s._v(" "),t("li",[s._v("k8s.gcr.io (等同于 gcr.io/google-containers)")]),s._v(" "),t("li",[s._v("quay.io (Red Hat运营的镜像库)")])]),s._v(" "),t("p",[s._v("k8s.gcr.io 被墙，拉image可能会失败而且阿里云啥的没有最新的镜像库，没办法，我是去docker hub找别人的。具体"),t("a",{attrs:{href:"https://developer.aliyun.com/article/759310",target:"_blank",rel:"noopener noreferrer"}},[s._v("参见"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[s._v("#")]),s._v(" 步骤")]),s._v(" "),t("ol",[t("li",[s._v("本地启动docker，检查k8s版本，是1.19.7\n"),t("code",[s._v("kubectl version")])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('Client Version: version.Info{Major:"1", Minor:"19", GitVersion:"v1.19.7", GitCommit:"1dd5338295409edcfff11505e7bb246f0d325d15", GitTreeState:"clean", BuildDate:"2021-01-13T13:23:52Z", GoVersion:"go1.15.5", Compiler:"gc", Platform:"darwin/amd64"}\nServer Version: version.Info{Major:"1", Minor:"19", GitVersion:"v1.19.7", GitCommit:"1dd5338295409edcfff11505e7bb246f0d325d15", GitTreeState:"clean", BuildDate:"2021-01-13T13:15:20Z", GoVersion:"go1.15.5", Compiler:"gc", Platform:"linux/amd64"}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("安装NGINX Ingress Controller,打开"),t("a",{attrs:{href:"https://kubernetes.github.io/ingress-nginx/deploy/#docker-desktop",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("提示安装"),t("code",[s._v("kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.46.0/deploy/static/provider/cloud/deploy.yaml")])]),s._v(" "),t("p",[s._v("先浏览器打开"),t("code",[s._v("https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.46.0/deploy/static/provider/cloud/deploy.yaml")]),s._v("搜"),t("code",[s._v("image:")])]),s._v(" "),t("p",[s._v("会搜到这个镜像地址"),t("code",[s._v("k8s.gcr.io/ingress-nginx/controller:v0.46.0@sha256:....")])]),s._v(" "),t("p",[s._v("本地先尝试拉下"),t("code",[s._v("docker pull k8s.gcr.io/ingress-nginx/controller:v0.46.0...")]),s._v(" 发现失败，很简单，这个镜像地址被墙了，得找替换！")]),s._v(" "),t("p",[s._v("打开 docker hub 搜 ingress-nginx-controller, 只找到了最新的"),t("a",{attrs:{href:"https://hub.docker.com/r/willdockerhub/ingress-nginx-controller/tags?page=1&ordering=last_updated",target:"_blank",rel:"noopener noreferrer"}},[s._v("v0.45.0"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("猜测差距不大，把文件下载到并编辑器打开\n"),t("code",[s._v("https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.45.0/deploy/static/provider/cloud/deploy.yaml")])]),s._v(" "),t("p",[s._v("把\n"),t("code",[s._v("image: k8s.gcr.io/ingress-nginx/controller:v0.45.0")]),s._v(" 替换为\n"),t("code",[s._v("image: willdockerhub/ingress-nginx-controller:v0.45.0")])]),s._v(" "),t("blockquote",[t("p",[s._v("这步非常重要哦")])]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[s._v("我重命名为了"),t("code",[s._v("v0.45.0-deploy.yaml")]),s._v("接下来运行他！\n"),t("code",[s._v("kubectl apply -f v0.45.0-deploy.yaml")])])]),s._v(" "),t("p",[s._v("验证一下")]),s._v(" "),t("p",[t("code",[s._v("kubectl get pods --all-namespaces -l app.kubernetes.io/name=ingress-nginx")])]),s._v(" "),t("p",[t("code",[s._v("kubectl describe pod")])]),s._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[s._v("跑一个例子")])]),s._v(" "),t("p",[s._v("准备文件，下载三个实例文件,镜像hashicorp/http-echo就是个http服务器")]),s._v(" "),t("p",[s._v("apple.yaml")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Pod\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apple"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("app\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apple\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apple"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("app\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hashicorp/http"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("echo\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("args")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-text=apple"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Service\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apple"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("selector")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apple\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5678")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Default port for image")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("p",[s._v("banana.yaml")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Pod\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" banana"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("app\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" banana\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" banana"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("app\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hashicorp/http"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("echo\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("args")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-text=banana"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Service\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" banana"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("selector")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" banana\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5678")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Default port for image")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("p",[s._v("ingress.yaml")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" extensions/v1beta1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Ingress\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" example"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ingress\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("annotations")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kubernetes.io/ingress.class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ingress.kubernetes.io/rewrite-target")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("rules")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ingress.finley.demo\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("http")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("paths")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /apple\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("backend")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("serviceName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apple"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("servicePort")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5678")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /banana\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("backend")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("serviceName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" banana"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("servicePort")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5678")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("p",[s._v("service不作解释。ingress就是定义一个地址，当访问/apple就调用apple-service中暴露的5678端口，而apple-service是为apple-app这个pod提供网络服务的")]),s._v(" "),t("p",[s._v("运行他们")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(" kubectl apply -f sample/apple.yaml \n kubectl apply -f sample/banana.yaml \n kubectl apply -f sample/ingress.yaml \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("注意"),t("code",[s._v("ingress.yaml")]),s._v("我配置的域名是"),t("code",[s._v("ingress.finley.demo")]),s._v("需要让本地访问")]),s._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[t("p",[s._v("打开 /etc/hosts\n添加"),t("code",[s._v("127.0.0.1 ingress.finley.demo")])])]),s._v(" "),t("li",[t("p",[s._v("见证奇迹时刻")])])]),s._v(" "),t("p",[s._v("浏览器打开 "),t("code",[s._v("http://ingress.finley.demo/apple")]),s._v(" 页面显示 apple\n浏览器打开 "),t("code",[s._v("http://ingress.finley.demo/banana")]),s._v(" 页面显示 banana")]),s._v(" "),t("p",[s._v("其实ingress就是个代理功能，是不是很简单呢？")]),s._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("p",[s._v("https://kubernetes.io/zh/docs/concepts/services-networking/ingress/")]),s._v(" "),t("p",[s._v("https://kubernetes.github.io/ingress-nginx/deploy/#docker-desktop")]),s._v(" "),t("p",[s._v("https://developer.aliyun.com/article/759310")])])}),[],!1,null,null,null);a.default=e.exports}}]);