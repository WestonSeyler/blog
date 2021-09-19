(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{760:function(s,a,t){"use strict";t.r(a);var n=t(30),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("code",[s._v("JSON(JavaScript Object Notation)")]),s._v(" 和 "),t("code",[s._v("SONP(JSON with Padding)")]),s._v(" 虽然只有一个字母的差别，但其实他们根本不是一回事儿：JSON是一种数据交换格式，而JSONP是一种依靠开发人员的聪明才智创造出的一种非官方跨域数据交互协议。我们拿最近比较火的谍战片来打个比方，JSON是地下党们用来书写和交换情报的“暗号”，而JSONP则是把用暗号书写的情报传递给自己同志时使用的接头方式。看到没？一个是描述信息的格式，一个是信息传递双方约定的方法。\n　既然随便聊聊，那我们就不再采用教条的方式来讲述，而是把关注重心放在帮助开发人员理解是否应当选择使用以及如何使用上。")]),s._v(" "),t("h3",{attrs:{id:"什么是json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是json"}},[s._v("#")]),s._v(" 什么是JSON")]),s._v(" "),t("p",[s._v("前面简单说了一下，JSON是一种基于文本的数据交换方式，或者叫做数据描述格式，你是否该选用他首先肯定要关注它所拥有的优点。")]),s._v(" "),t("h4",{attrs:{id:"json的优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json的优点"}},[s._v("#")]),s._v(" JSON的优点：")]),s._v(" "),t("p",[s._v("1、基于纯文本，跨平台传递极其简单；\n　　2、Javascript原生支持，后台语言几乎全部支持；\n　　3、轻量级数据格式，占用字符数量极少，特别适合互联网传递；\n　　4、可读性较强，虽然比不上XML那么一目了然，但在合理的依次缩进之后还是很容易识别的；\n　　5、容易编写和解析，当然前提是你要知道数据结构；\n　　JSON的缺点当然也有，但在作者看来实在是无关紧要的东西，所以不再单独说明。")]),s._v(" "),t("h4",{attrs:{id:"json的格式或者叫规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json的格式或者叫规则"}},[s._v("#")]),s._v(" JSON的格式或者叫规则：")]),s._v(" "),t("p",[s._v('JSON能够以非常简单的方式来描述数据结构，XML能做的它都能做，因此在跨平台方面两者完全不分伯仲。\n　　1、JSON只有两种数据类型描述符，大括号{}和方括号[]，其余英文冒号:是映射符，英文逗号,是分隔符，英文双引号""是定义符。\n　　2、大括号{}用来描述一组“不同类型的无序键值对集合”（每个键值对可以理解为OOP的属性描述），方括号[]用来描述一组“相同类型的有序数据集合”（可对应OOP的数组）。\n　　3、上述两种集合中若有多个子项，则通过英文逗号,进行分隔。\n　　4、键值对以英文冒号:进行分隔，并且建议键名都加上英文双引号”"，以便于不同语言的解析。\n　　5、JSON内部常用数据类型无非就是字符串、数字、布尔、日期、null 这么几个，字符串必须用双引号引起来，其余的都不用，日期类型比较特殊，这里就不展开讲述了，只是建议如果客户端没有按日期排序功能需求的话，那么把日期时间直接作为字符串传递就好，可以省去很多麻烦。')]),s._v(" "),t("h3",{attrs:{id:"jsonp是怎么产生的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jsonp是怎么产生的"}},[s._v("#")]),s._v(" JSONP是怎么产生的")]),s._v(" "),t("p",[s._v("其实网上关于JSONP的讲解有很多，但却千篇一律，而且云里雾里，对于很多刚接触的人来讲理解起来有些困难，小可不才，试着用自己的方式来阐释一下这个问题，看看是否有帮助。\n1、一个众所周知的问题，Ajax直接请求普通文件存在跨域无权限访问的问题，甭管你是静态页面、动态网页、web服务、WCF，只要是跨域请求，一律不准；\n2、不过我们又发现，Web页面上调用js文件时则不受是否跨域的影响（不仅如此，我们还发现凡是拥有”src”这个属性的标签都拥有跨域的能力，比如"),t("code",[s._v("<script>、<img>、<iframe>")]),s._v("）；\n3、于是可以判断，当前阶段如果想通过纯web端（ActiveX控件、服务端代理、属于未来的HTML5之Websocket等方式不算）跨域访问数据就只有一种可能，那就是在远程服务器上设法把数据装进js格式的文件里，供客户端调用和进一步处理；\n4、恰巧我们已经知道有一种叫做JSON的纯字符数据格式可以简洁的描述复杂数据，更妙的是JSON还被js原生支持，所以在客户端几乎可以随心所欲的处理这种格式的数据；\n5、这样子解决方案就呼之欲出了，web客户端通过与调用脚本一模一样的方式，来调用跨域服务器上动态生成的js格式文件（一般以JSON为后缀），显而易见，服务器之所以要动态生成JSON文件，目的就在于把客户端需要的数据装入进去。\n6、客户端在对JSON文件调用成功之后，也就获得了自己所需的数据，剩下的就是按照自己需求进行处理和展现了，这种获取远程数据的方式看起来非常像AJAX，但其实并不一样。\n7、为了便于客户端使用数据，逐渐形成了一种非正式传输协议，人们把它称作JSONP，该协议的一个要点就是允许用户传递一个callback参数给服务端，然后服务端返回数据时会将这个callback参数作为函数名来包裹住JSON数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了。")]),s._v(" "),t("p",[s._v("简单总结：\n由于浏览器有同略策略，但是"),t("code",[s._v("<script>")]),s._v('标签的src可以跨域，利用这个"漏洞"搞事，具体做法是:\n服务端地址(比如 '),t("code",[s._v("http://api.xxx.com/jsonp.php?callback?callbackFunction")]),s._v(")  返回 json 数据的包装(故称为 jsonp，即json padding)，形如 "),t("code",[s._v('callback({"name":"Finley","gender":"Male"})')]),s._v(",  可以直接运行的 JS 脚本\n浏览器提供一个回调函数(callbackFunction)来接收数据。\n因为 script 标签只支持"),t("code",[s._v("get")]),s._v("请求，故JSONP只能用GET请求")]),s._v(" "),t("h4",{attrs:{id:"jsonp的客户端具体实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jsonp的客户端具体实现"}},[s._v("#")]),s._v(" JSONP的客户端具体实现")]),s._v(" "),t("p",[s._v("例子1\n后台 PHP 代码，返回一段可 JS 运行的脚本，供前台调用")]),s._v(" "),t("div",{staticClass:"language-PHP line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("header")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'Content-type: application/json'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取回调函数名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$jsoncallback")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("htmlspecialchars")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'jsoncallback'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//json数据， 可以从数据库总获得")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$json_data")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v('\'["customername1","customername2"]\'')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出jsonp格式的数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// callbackFunction(["customername1","customername2"]) 共前台js调用')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$jsoncallback")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"("')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$json_data")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('")"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("前台")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("<div id=\"divCustomers\"></div>\n<script type=\"text/javascript\">\n    function callbackFunction(result, methodName) {\n        var html = '<ul>';\n        for (var i = 0; i < result.length; i++) {\n            html += '<li>' + result[i] + '</li>';\n        }\n        html += '</ul>';\n        document.getElementById('divCustomers').innerHTML = html;\n    }\n<\/script>\n<script src=\"http://localhost/finley/PHP/jsonp/jsonp.php?jsoncallback=callbackFunction\"><\/script>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("例子1中script标签是自己创建的，不方便，可以改为自动动态创建\n参见一个开源库，代码非常简单\nhttps://github.com/webmodules/jsonp/blob/master/index.js")]),s._v(" "),t("p",[s._v("jsonp 源码实现")]),s._v(" "),t("blockquote",[t("p",[t("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-a2dc23b48a861f9c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),s._v(" "),t("p",[s._v("1、ajax和jsonp这两种技术在调用方式上“看起来”很像，目的也一样，都是请求一个url，然后把服务器返回的数据进行处理，因此jquery和ext等框架都把jsonp作为ajax的一种形式进行了封装；\n2、但ajax和jsonp其实本质上是不同的东西。ajax的核心是通过XmlHttpRequest获取非本页内容，而jsonp的核心则是动态添加"),t("code",[s._v("<script>")]),s._v("标签来调用服务器提供的js脚本。\n3、所以说，其实ajax与jsonp的区别不在于是否跨域，ajax通过服务端代理一样可以实现跨域，jsonp本身也不排斥同域的数据的获取。\n4、还有就是，jsonp是一种方式或者说非强制性协议，如同ajax一样，它也不一定非要用json格式来传递数据，如果你愿意，字符串都行，只不过这样不利于用jsonp提供公开服务。")]),s._v(" "),t("p",[s._v("总而言之，jsonp不是ajax的一个特例，哪怕jquery等巨头把jsonp封装进了ajax，也不能改变这一点！")]),s._v(" "),t("p",[s._v("JSONP的总结：")]),s._v(" "),t("ol",[t("li",[s._v("只能用GET请求")]),s._v(" "),t("li",[s._v("核心是动态添加"),t("code",[s._v("script")]),s._v("标签来调用服务器提供的js脚本")]),s._v(" "),t("li",[s._v("JSONP不是ajax的特例，只不过经常被封装进了ajax")])])])}),[],!1,null,null,null);a.default=e.exports}}]);