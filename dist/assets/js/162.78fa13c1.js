(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{599:function(e,s,n){"use strict";n.r(s);var a=n(30),t=Object(a.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("本节我们自己打包一个docker镜像并发布到官方的镜像仓库中。这样任何人只需执行以下命令：\n"),n("code",[e._v("docker run -d -p 3000:3000 finleyma/express")]),e._v(" 就可以访问一个简单的express程序了。")]),e._v(" "),n("p",[e._v("需要你有简单的express使用经验\n实现过程非常简单：")]),e._v(" "),n("ol",[n("li",[e._v("本地全局安装 "),n("code",[e._v("npm install express-generator -g")])]),e._v(" "),n("li",[e._v("初始化一个express项目 "),n("code",[e._v("express myapp")])]),e._v(" "),n("li",[e._v("cd myapp，然后 npm run start，项目就在本地运行了。")]),e._v(" "),n("li",[e._v("我们在项目内建立Dockerfile，内容如下：")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('FROM node:10.8.0-alpine\nMAINTAINER www.mafeifan.com\n# 设置工作目录，下面的RUN命令会在工作目录执行\nWORKDIR /app\n# 先拷贝本地的 package.json 和 package-lock 到容器内\n# 这样是利用docker的镜像分层机制\nCOPY package*.json ./\n# 安装项目依赖包\n# 生产环境可以运行 RUN npm install --only=production 只按照 package.json 中dependencies定义的模块\nRUN npm install\n# 将根目录下的文件都copy到container（运行此镜像的容器）文件系统的app文件夹下\nADD . /app/\n# 暴露容器内的3000端口\nEXPOSE 3000\n# 容器启动时执行的命令，类似npm run start\nCMD ["npm", "start"]\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br")])]),n("ol",{attrs:{start:"5"}},[n("li",[e._v("构建镜像 "),n("code",[e._v("docker build -t finleyma/express .")]),e._v("\n别忘了最后的点，表示当前目录")]),e._v(" "),n("li",[e._v("启动容器 "),n("code",[e._v("docker run -d -p 3000:3000 finleyma/express")])]),e._v(" "),n("li",[e._v("可选，登录docker hub, 并提交镜像。"),n("code",[e._v("docker login")]),e._v(",  "),n("code",[e._v("docker push finleyma/express")])]),e._v(" "),n("li",[e._v("进入容器 "),n("code",[e._v("docker run -it --rm finleyma/express:1.0 ash")]),e._v("\n简要说下参数：")])]),e._v(" "),n("ul",[n("li",[e._v("-it：这是两个参数，一个是 -i：交互式操作，一个是 -t 终端。我们这里打算进入 容器 执行一些命令并查看返回结果，因此我们需要交互式终端。")]),e._v(" "),n("li",[e._v("--rm：这个参数是说容器退出后随之将其删除。默认情况下，为了排障需求，退出的容器并不会立即删除，除非手动 docker rm。我们这里只是随便执行个命令，看看结果，不需要排障和保留结果，因此使用 --rm 可以避免浪费空间。")]),e._v(" "),n("li",[e._v("ash：因为我们的Node的基础镜像是10.8.0-alpine， alpine的交互式 Shell是ash不是bash，使用bash会提示not found。注意这个细节。\n会发现整个项目文件都在容器内。")])]),e._v(" "),n("blockquote",[n("p",[n("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-b0ac3d1703181ffa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),n("p",[e._v("简单总结使用Docker的好处：")]),e._v(" "),n("ol",[n("li",[e._v("使用版本方便，比如服务器上跑着node6，而你的项目需要node8以上。使用docker因为是隔离环境")]),e._v(" "),n("li",[e._v("部署分享也方便，一行命令完事")])]),e._v(" "),n("p",[e._v("问题：容器内的 node_modules 是本来就有还是容器执行 npm install 产生的呢？\n答案：是构建的时候打包进镜像内了。我们看一下体积，有20M而且进到容器内， ls -l node_modules 时间也是打包的什么，并不是当前时间。")]),e._v(" "),n("blockquote",[n("p",[n("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-aee960c96b2a23bd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),n("h3",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考：")]),e._v(" "),n("ul",[n("li",[e._v("https://nodejs.org/en/docs/guides/nodejs-docker-webapp/")]),e._v(" "),n("li",[e._v("https://www.imooc.com/article/19840")]),e._v(" "),n("li",[e._v("https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md")])])])}),[],!1,null,null,null);s.default=t.exports}}]);