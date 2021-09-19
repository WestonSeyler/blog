(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{594:function(e,n,s){"use strict";s.r(n);var a=s(30),r=Object(a.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("Docker Buildx 是一个 docker CLI 插件，其扩展了 docker 命令，支持 Moby BuildKit 提供的功能。提供了与 docker build 相同的用户体验，并增加了许多新功能。\nBuildKit 是下一代的镜像构建组件，主要特点有很多，本文主要使用其可以编译多种系统架构的特性。")]),e._v(" "),s("p",[e._v("网址：https://github.com/moby/buildkit")]),e._v(" "),s("p",[e._v("需要注意的是，该功能仅适用于 Docker v19.03+ 版本。")]),e._v(" "),s("p",[e._v("本文将讲解如何使用 Buildx 构建多种系统架构的镜像。\n在开始之前，已经默认你在 Linux 系统（各大发行版）下安装好了 64 位的 Docker。\n在写本文时，Docker 最新版本号是 20.10.0。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ docker version\n\nClient: Docker Engine - Community\n Version:           20.10.0\n API version:       1.41\n Go version:        go1.13.15\n Git commit:        7287ab3\n Built:             Tue Dec  8 18:59:53 2020\n OS/Arch:           linux/amd64\n Context:           default\n Experimental:      true\n\nServer: Docker Engine - Community\n Engine:\n  Version:          20.10.0\n  API version:      1.41 (minimum version 1.12)\n  Go version:       go1.13.15\n  Git commit:       eeddea2\n  Built:            Tue Dec  8 18:57:44 2020\n  OS/Arch:          linux/amd64\n  Experimental:     false\n containerd:\n  Version:          1.4.3\n  GitCommit:        269548fa27e0089a8b8278fc4fc781d7f65a939b\n runc:\n  Version:          1.0.0-rc92\n  GitCommit:        ff819c7e9184c13b7c2607fe6c30ae19403a7aff\n docker-init:\n  Version:          0.19.0\n  GitCommit:        de40ad0\nubuntu@VM-16-4-ubuntu:~$\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br")])]),s("h3",{attrs:{id:"_1-启用-buildx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-启用-buildx"}},[e._v("#")]),e._v(" 1. 启用 Buildx")]),e._v(" "),s("p",[e._v("buildx 命令属于实验特性，因此首先需要开启该特性。\n上面的查看 Docker 版本返回的内容中，如果出现"),s("code",[e._v("Experimental: true")]),e._v("字样就代表已经开启该特性了。\n下面的这一步骤就可以省略。\n编辑"),s("code",[e._v("~/.docker/config.json")]),e._v(" 文件，新增如下内容（以下的演示适用于事先不存在 .docker 目录的情况下）")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('$ mkdir ~/.docker\n$ cat > ~/.docker/config.json <<EOF\n{\n"experimental": "enabled"\n}\nEOF\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[e._v("Linux/macOS 下或者通过设置环境变量的方式（不推荐）：")]),e._v(" "),s("p",[s("code",[e._v("$ export DOCKER_CLI_EXPERIMENTAL=enabled")])]),e._v(" "),s("h3",{attrs:{id:"_2-新建-builder-实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-新建-builder-实例"}},[e._v("#")]),e._v(" 2. 新建 builder 实例")]),e._v(" "),s("p",[e._v("在 Docker 19.03+ 版本中可以使用 docker buildx build 命令使用 BuildKit 构建镜像。该命令支持 --platform 参数可以同时构建支持多种系统架构的 Docker 镜像，大大简化了构建步骤。")]),e._v(" "),s("p",[e._v("由于 Docker 默认的 builder 实例不支持同时指定多个 --platform ，我们必须首先创建一个新的 builder 实例。\n"),s("code",[e._v("$ docker buildx create --name mybuilder --driver docker-container")])]),e._v(" "),s("p",[e._v("返回新的 builder 实例名，为「mybuilder」")]),e._v(" "),s("p",[s("code",[e._v("mybuilder")])]),e._v(" "),s("p",[e._v("使用新创建好的 builder 实例")]),e._v(" "),s("p",[s("code",[e._v("$ docker buildx use mybuilder")])]),e._v(" "),s("p",[e._v("查看已有的 builder 实例")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ docker buildx ls\nNAME/NODE    DRIVER/ENDPOINT             STATUS   PLATFORMS\nmybuilder *  docker-container\n  mybuilder0 unix:///var/run/docker.sock inactive \ndefault      docker\n  default    default                     running  linux/amd64, linux/386\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[e._v("Docker 在 linux/amd64 系统架构下是不支持 arm 架构镜像，因此我们可以运行一个新的容器（emulator）让其支持该特性，Docker 桌面版则无需进行此项设置。")]),e._v(" "),s("ul",[s("li",[e._v("方法一：")])]),e._v(" "),s("p",[s("code",[e._v("$ docker run --rm --privileged docker/binfmt:a7996909642ee92942dcd6cff44b9b95f08dad64")])]),e._v(" "),s("p",[e._v("注：docker/binfmt 可以参考网址：https://hub.docker.com/r/docker/binfmt/tags 获取最新镜像")]),e._v(" "),s("ul",[s("li",[e._v("方法二（推荐）：")])]),e._v(" "),s("p",[s("code",[e._v("$ docker run --rm --privileged tonistiigi/binfmt --install all")])]),e._v(" "),s("p",[e._v("去参考网址：https://hub.docker.com/r/tonistiigi/binfmt 获取最新镜像。目前（2021/09/02 更新）的 Qemu version: 6.0.0")]),e._v(" "),s("h3",{attrs:{id:"_3-新建-dockerfile-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-新建-dockerfile-文件"}},[e._v("#")]),e._v(" 3. 新建 Dockerfile 文件")]),e._v(" "),s("p",[e._v("要想构建多种系统架构的镜像，还需要一个支持的 Dockerfile 文件。\n以下是一个示例的 Dockerfile 文件。\n参考链接：https://github.com/teddysun/across/blob/master/docker/kms/Dockerfile.architecture")]),e._v(" "),s("p",[e._v("该 Dockerfile 文件内容如下：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('FROM --platform=$TARGETPLATFORM alpine:latest AS builder\nWORKDIR /root\nRUN apk add --no-cache git make build-base && \\\n    git clone --branch master --single-branch https://github.com/Wind4/vlmcsd.git && \\\n    cd vlmcsd/ && \\\n    make\n\nFROM --platform=$TARGETPLATFORM alpine:latest\nLABEL maintainer="Teddysun <i@teddysun.com>"\n\nCOPY --from=builder /root/vlmcsd/bin/vlmcsd /usr/bin/vlmcsd\nEXPOSE 1688\nCMD [ "vlmcsd", "-D", "-e" ]\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br")])]),s("p",[s("code",[e._v("$TARGETPLATFORM")]),e._v(" 是内置变量，由 --platform 参数来指定其值。\n由于是基于 alpine 的镜像来制作的，而 alpine 是支持以下 7 种系统架构的，因此我们制作的镜像也就跟着支持这 7 种系统架构。")]),e._v(" "),s("p",[s("code",[e._v("linux/amd64, linux/arm/v6, linux/arm/v7, linux/arm64, linux/386, linux/ppc64le, linux/s390x")])]),e._v(" "),s("p",[e._v("更友好一点的架构名称如下：")]),e._v(" "),s("p",[s("code",[e._v("amd64, arm32v6, arm32v7, arm64v8, i386, ppc64le, s390x")])]),e._v(" "),s("p",[e._v("这里穿插一句吐槽。\n简单统计了一下，ARM 的系统架构有如下各种简称：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("arm64, armv8l, arm64v8, aarch64\narm, arm32, arm32v7, armv7, armv7l, armhf\narm32v6, armv6, armv6l, arm32v5, armv5,  armv5l, armel, aarch32\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("看完了是不是很想打人？\n而对比 Intel 和 AMD 的就简单多了：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("x86, 386, i386, i686\nx86_64, x64, amd64\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h3",{attrs:{id:"_4-构建镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-构建镜像"}},[e._v("#")]),e._v(" 4. 构建镜像")]),e._v(" "),s("p",[e._v("先来本地构建一个。")]),e._v(" "),s("p",[e._v("git clone 刚才的示例 Dockerfile 文件，并进入其目录下")]),e._v(" "),s("p",[s("code",[e._v("$ cd ~ && git clone https://github.com/teddysun/across.git && cd across/docker/kms/")])]),e._v(" "),s("p",[e._v("在本地构建支持 7 种 platform 的镜像")]),e._v(" "),s("p",[s("code",[e._v("$ docker buildx build --platform linux/amd64,linux/arm/v6,linux/arm/v7,linux/arm64,linux/ppc64le,linux/s390x,linux/386 -t teddysun/kms -o type=local,dest=.docker -f ./Dockerfile.architecture .")])]),e._v(" "),s("p",[e._v("docker buildx build 的具体参数含义，参考下面的官方文档\nhttps://docs.docker.com/engine/reference/commandline/buildx_build/")]),e._v(" "),s("p",[e._v("做完上面的那一步，实际上是把构建好的镜像放在了本地路径下。\n此时我们再来查看一下已有的 builder 实例。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ docker buildx ls\nNAME/NODE    DRIVER/ENDPOINT             STATUS  PLATFORMS\nmybuilder *  docker-container                    \n  mybuilder0 unix:///var/run/docker.sock running linux/amd64, linux/arm64, linux/riscv64, linux/ppc64le, linux/s390x, linux/386, linux/arm/v7, linux/arm/v6\ndefault      docker                              \n  default    default                     running linux/amd64, linux/386\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[e._v("你会发现 mybuilder 下存在 8 种支持的架构（riscv64 目前还用不上，但是已经支持）。")]),e._v(" "),s("p",[e._v("此时查看一下 docker image 的运行情况，会发现存在一个名为 "),s("code",[e._v("buildx_buildkit_mybuilder0")]),e._v(" 的容器在运行。\n这是刚才在本地构建时，自动创建的，切记不要将其停止，也不要删除。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('$ docker ps -as\nCONTAINER ID        IMAGE                           COMMAND           CREATED             STATUS              PORTS             NAMES                        SIZE\nbe753fa16090        moby/buildkit:buildx-stable-1   "buildkitd"       15 minutes ago      Up 15 minutes                         buildx_buildkit_mybuilder0   0B (virtual 78.6MB)\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("再来构建一个多系统架构镜像，并将构建好的镜像推送到 Docker 仓库（也就是 hub.docker.com）。")]),e._v(" "),s("p",[e._v("在此操作之前，你需要事先注册一个账号（演示过程省略），并登录。\n登录命令如下：")]),e._v(" "),s("p",[s("code",[e._v("$ docker login")])]),e._v(" "),s("p",[e._v("输入你的用户名和密码即可登录。")]),e._v(" "),s("p",[e._v("注意，以下演示的命令中 tag 的前面是我的用户名 finley，如果你想制作自己的镜像，请自行替换为你自己的用户名。\n使用 "),s("code",[e._v("--push")]),e._v(" 参数构建好的镜像推送到 Docker 仓库。\n此时仍然是在刚才的 ~/across/docker/kms 目录下，文件 "),s("code",[e._v("Dockerfile.architecture")]),e._v(" 是为多系统架构构建准备的。\n命令如下：")]),e._v(" "),s("p",[s("code",[e._v("$ docker buildx build --platform linux/386,linux/amd64,linux/arm/v6,linux/arm/v7,linux/arm64,linux/ppc64le,linux/s390x -t finley/kms --push -f ./Dockerfile.architecture .")])]),e._v(" "),s("p",[e._v("命令执行成功后，你就会在 Docker Hub 看到你上传的镜像啦。")]),e._v(" "),s("h3",{attrs:{id:"_5-写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-写在最后"}},[e._v("#")]),e._v(" 5. 写在最后")]),e._v(" "),s("p",[e._v("在制作多系统架构的 Docker 镜像时，建议使用 CPU 比较强或者多核心的 VPS 来构建，否则会非常耗时。")]),e._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),s("p",[e._v("https://github.com/moby/buildkit")]),e._v(" "),s("p",[e._v("https://teddysun.com/581.html")]),e._v(" "),s("p",[e._v("https://kubesphereio.com/post/docker-image-operation-guide-for-building-arm-x86-architecture/")])])}),[],!1,null,null,null);n.default=r.exports}}]);