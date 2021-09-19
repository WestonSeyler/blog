(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{774:function(e,t,r){"use strict";r.r(t);var a=r(30),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("看完这篇教程你会学到如何在安卓模拟器里运行一个React Native程序。")]),e._v(" "),r("p",[e._v("我的电脑及软件环境\n系统： windows10 64\nNode：8.5.0\n然后安装下面的工具，不分先后。")]),e._v(" "),r("p",[e._v("首先说下 create-react-native-app\n"),r("code",[e._v("npm install -g create-react-native-app")]),e._v("\n并按照"),r("a",{attrs:{href:"http://facebook.github.io/react-native/docs/getting-started.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("教程"),r("OutboundLink")],1),e._v(" 尝试启动，执行完执行"),r("code",[e._v("npm start")]),e._v("会出现个二维码，让我们在手机里安装"),r("a",{attrs:{href:"https://expo.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("expo"),r("OutboundLink")],1),e._v("，扫一扫就可以打开react native应用。注意要处在同一网络。经常会出现timeout。")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://developer.android.com/studio/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android Studio 3.0"),r("OutboundLink")],1),e._v(" (注意这个不是必须的，我主要是用他来安装android sdk)\n这个安装过程会比较慢，而且加上sdk等大约会占2G的空间。按照网站的视频安装就行，安装完就可以启动一个安卓程序了。\n"),r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-a039542495aeea8b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})]),e._v(" "),r("p",[e._v("注意sdk的安装路径，我们要保证命令行可以直接运行adb。\n我是在环境变量里添加了"),r("code",[e._v("C:\\Users\\{替换成你的计算机名}\\AppData\\Local\\Android\\Sdk\\platform-tools")])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.genymotion.com/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("genymotion"),r("OutboundLink")],1),e._v("\n这个需要注册帐号，然后按照expo的推荐，安装安卓虚拟设备，可以是Nexus5。")]),e._v(" "),r("p",[e._v("安装 "),r("a",{attrs:{href:"https://expo.io/tools",target:"_blank",rel:"noopener noreferrer"}},[e._v("expo XDE"),r("OutboundLink")],1),e._v("\n简单说expo是一个工具，可以运行react native，并且在genymotion模拟器里打开，提供live reload等功能，还可以发布你的程序。类似开发微信小程序那个工具。\n"),r("a",{attrs:{href:"https://docs.expo.io/versions/latest/introduction/faq.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("具体文档"),r("OutboundLink")],1),e._v("\n实测发现不太稳定。可能会受到不同的电脑环境和环境变量的影响。\n这里要注意一点ADB的配置\n"),r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-f3b2f18fc7823445.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})]),e._v(" "),r("p",[e._v("大致流程：")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("用 "),r("code",[e._v("create-react-native-app")]),e._v(" 创建一个项目，比如名叫RN_First\n"),r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-2f3ff77e28e19ab5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),r("li",[r("p",[e._v("用Expo XDE打开这个项目并运行\n运行后界面如下，\n"),r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-92de03c0fbe3efe4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),r("li",[r("p",[e._v("打开Genymotion并运行安卓模拟器")])])]),e._v(" "),r("p",[r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-7429cf9dd1cb86c0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})]),e._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[e._v("然后在expo里选择Device-Open on Android，成功的话可以在安卓模拟器看到启动expo并打开了我们的RN项目")])]),e._v(" "),r("p",[e._v("如果修改代码，比如App.js，会立即发生变化。\n"),r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-ec7bedcc531af94a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})]),e._v(" "),r("p",[r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-656ad0cefa1382ec.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})]),e._v(" "),r("p",[e._v("遇到的坑：")]),e._v(" "),r("h5",{attrs:{id:"adb-server-didn-t-ack-failed-to-start-daemon"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#adb-server-didn-t-ack-failed-to-start-daemon"}},[e._v("#")]),e._v(" ADB server didn't ACK, failed to start daemon")]),e._v(" "),r("p",[e._v("答： 发现adb的环境变量设的不对，之前装过安卓sdk造成有两个adb。expo找的是老的adb。\n"),r("a",{attrs:{href:"https://stackoverflow.com/questions/5703550/eclipse-error-adb-server-didnt-ack-failed-to-start-daemon?rq=1",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考"),r("OutboundLink")],1)]),e._v(" "),r("h5",{attrs:{id:"error-running-adb-error-running-app-error-activity-not-started-unable-to-resolve-intent-act-android-intent-action-view-dat-exp-192-168-0-100-19000-flg-0x10000000"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#error-running-adb-error-running-app-error-activity-not-started-unable-to-resolve-intent-act-android-intent-action-view-dat-exp-192-168-0-100-19000-flg-0x10000000"}},[e._v("#")]),e._v(" Error running adb: Error running app. Error: Activity not started, unable to resolve Intent { act=android.intent.action.VIEW dat=exp://192.168.0.100:19000 flg=0x10000000 }")]),e._v(" "),r("p",[e._v("答： 检查adb配置，最后重装expo解决。")]),e._v(" "),r("p",[e._v("原谅我用了粗话，因为第一次接触，走了不少弯路。")]),e._v(" "),r("h4",{attrs:{id:"关于模拟器里调试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#关于模拟器里调试"}},[e._v("#")]),e._v(" 关于模拟器里调试：")]),e._v(" "),r("p",[e._v("ios里按cmd+R，对于安卓，点击菜单按钮\n"),r("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-4cc227ac866dbb1e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})]),e._v(" "),r("h4",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结：")]),e._v(" "),r("ol",[r("li",[e._v("最好用mac开发react native，毕竟这个工具的开发者很多都用的MBP，坑会少一些。")]),e._v(" "),r("li",[e._v("工具尽量从官方下载，不要胡乱从第三方网站下载")]),e._v(" "),r("li",[e._v("开发前建议多看几遍 "),r("a",{attrs:{href:"https://docs.expo.io/versions/latest/introduction/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("expo"),r("OutboundLink")],1),e._v(" 文档。清楚你每步的操作是什么。")])]),e._v(" "),r("p",[e._v("相关工具官方下载地址:\n"),r("a",{attrs:{href:"https://developer.android.com/studio/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android Studio"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://www.genymotion.com/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("genymotion"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);