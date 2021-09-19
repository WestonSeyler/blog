(window.webpackJsonp=window.webpackJsonp||[]).push([[335],{770:function(s,a,t){"use strict";t.r(a);var n=t(30),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("a",{attrs:{href:"https://github.com/react-community/create-react-native-app",target:"_blank",rel:"noopener noreferrer"}},[s._v("create-react-native-app"),t("OutboundLink")],1),s._v(" 运行"),t("code",[s._v("npm run eject")]),s._v("后根目录会产生一个andriod目录和ios目录。里面就是运行打包的配置文件。\n如果你是用react-native-cli 开发RN的应该一开始就有这俩目录。")]),s._v(" "),t("p",[s._v("比如 android 目录里面会有build.gradle，gradle.properties 等\n简单说 gradle 是一个依赖管理/自动化编译测试部署打包工具。")]),s._v(" "),t("h4",{attrs:{id:"首先生成签名key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#首先生成签名key"}},[s._v("#")]),s._v(" 首先生成签名key")]),s._v(" "),t("p",[t("code",[s._v(".\\keytool.exe -genkey -v -keystore D:/my-release-key.keystore -alias my-key-a lias -keyalg RSA -keysize 2048 -validity 10000")]),s._v("\n有个小坑是生成key的路径是D盘，因为在当前C盘生成的话在windows下可能会有权限问题。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-54d89723e11f1f26.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})]),s._v(" "),t("p",[s._v("然后按照这个 "),t("a",{attrs:{href:"http://facebook.github.io/react-native/docs/signed-apk-android.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("教程"),t("OutboundLink")],1),s._v("，改动一些配置文件。")]),s._v(" "),t("h3",{attrs:{id:"修改相关配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改相关配置文件"}},[s._v("#")]),s._v(" 修改相关配置文件")]),s._v(" "),t("p",[s._v("在根目录的android目录下执行 "),t("code",[s._v("./gradlew assembleRelease")]),s._v("\n后面就踩了很多坑，大多数版本问题。\n比如java jdk从最新的9改为了8\ngradle版本改为了最新的4.3\n还报了一些缺少npm包的错误，直接npm install缺哪个装哪个就行了。")]),s._v(" "),t("p",[s._v("具体的见下面的文件改动")]),s._v(" "),t("blockquote",[t("p",[s._v("android/build.gradle")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Top-level build file where you can add configuration options common to all sub-projects/modules.")]),s._v("\n\nbuildscript "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    repositories "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("jcenter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    dependencies "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n        这里之前是 2.2.3\n        卡在这里半天，老是报 com.android.build.gradle.tasks.factory.AndroidJavaCompile.setDependencyCacheDir(Ljava/io/File;)V\n        */")]),s._v(" \n        classpath "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'com.android.tools.build:gradle:2.3.2'")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// NOTE: Do not place your application dependencies here; they belong")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// in the individual module build.gradle files")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nallprojects "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    repositories "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mavenLocal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("jcenter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        maven "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// All of React Native (JS, Obj-C sources, Android binaries) is installed from npm")]),s._v("\n            url "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$rootDir/../node_modules/react-native/android"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br")])]),t("blockquote",[t("p",[s._v("android/app/build.gradle")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("android "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这里之前是")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// compileSdkVersion 23")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// buildToolsVersion "23.0.1')]),s._v("\n    compileSdkVersion "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v("\n    buildToolsVersion "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"25.0.1"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("blockquote",[t("p",[s._v("android\\gradle\\wrapper")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("distributionBase"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GRADLE_USER_HOME")]),s._v("\ndistributionPath"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("wrapper"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dists\nzipStoreBase"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GRADLE_USER_HOME")]),s._v("\nzipStorePath"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("wrapper"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dists\n# distributionUrl"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https\\"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("services"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gradle"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("distributions"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("gradle"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.14")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("all"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("zip\ndistributionUrl"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https\\"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("services"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gradle"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("distributions"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("gradle"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.3")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("all"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("zip\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"执行最后的打包命令-gradlew-assemblerelease"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行最后的打包命令-gradlew-assemblerelease"}},[s._v("#")]),s._v(" 执行最后的打包命令 "),t("code",[s._v("./gradlew assembleRelease")])]),s._v(" "),t("p",[s._v("切换到android目录 打包成功画面\n"),t("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-c8d051c756f5e652.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})]),s._v(" "),t("p",[s._v("注意事项：打包过程会占用大量内存，把WebStorm等大的程序关掉。")])])}),[],!1,null,null,null);a.default=e.exports}}]);