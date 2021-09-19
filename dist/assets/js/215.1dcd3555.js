(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{650:function(s,e,n){"use strict";n.r(e);var t=n(30),a=Object(t.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("Jenkins是在Docker容器里内跑的，现在需要Jenkins进到外部的宿主机并执行命令。")]),s._v(" "),n("p",[s._v("这里牵涉到两个问题：")]),s._v(" "),n("ol",[n("li",[s._v("我如何知道宿主机的IP")]),s._v(" "),n("li",[s._v("我如何通过IP访问宿主机")])]),s._v(" "),n("h3",{attrs:{id:"第1个问题-获取宿主机的ip"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第1个问题-获取宿主机的ip"}},[s._v("#")]),s._v(" 第1个问题,获取宿主机的IP")]),s._v(" "),n("p",[s._v("方法1：宿主机执行"),n("code",[s._v("ifcong")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500\n        inet 172.17.0.1  netmask 255.255.0.0  broadcast 172.17.255.255\n        inet6 fe80::42:63ff:fe9f:9251  prefixlen 64  scopeid 0x20<link>\n        ether 02:42:63:9f:92:51  txqueuelen 0  (Ethernet)\n        RX packets 18693  bytes 5563196 (5.5 MB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 23271  bytes 122914964 (122.9 MB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("会看到docker0中的inet，172.17.0.1就是docker中的IP。\n如果进到Jenkins容器，直接ping这个地址是直接ping通的。")]),s._v(" "),n("p",[s._v("但问题是这个IP不一定是固定的，我们需要在启动Jenkins容器时将当前的宿主IP告诉容器。")]),s._v(" "),n("p",[s._v("方法2：容器内执行"),n("code",[s._v("ip route show | awk '/default/ {print $3}'")])]),s._v(" "),n("p",[s._v("方法3：解决方案")]),s._v(" "),n("p",[s._v("如果在MacOS或Windows运行docker，尝试直接在容器内运行"),n("code",[s._v("ping host.docker.internal")])]),s._v(" "),n("p",[s._v("对于Linux，在docker-compose.yaml加入")]),s._v(" "),n("blockquote",[n("p",[s._v("注：需要docker版本在20.04及以上")])]),s._v(" "),n("p",[s._v("我们更新docker-compose.yml")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('extra_hosts:\n- "host.docker.internal:host-gateway"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("重新进到容器内,查看hosts文件\n"),n("code",[s._v("cat /etc/hosts")]),s._v("\n就会发现新增了一条"),n("code",[s._v("172.17.0.1\thost.docker.internal")]),s._v("\n直接ping host.docker.internal可以连通")]),s._v(" "),n("p",[s._v("如果docker-compose.yml")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('extra_hosts:\n - "somehost:162.242.195.82"\n - "otherhost:50.31.209.229"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("/etc/hosts 就会看到")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("162.242.195.82  somehost\n50.31.209.229   otherhost\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"第2个问题-通过ssh协议访问宿主机"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第2个问题-通过ssh协议访问宿主机"}},[s._v("#")]),s._v(" 第2个问题，通过SSH协议访问宿主机")]),s._v(" "),n("p",[s._v("这个简单，我们需要进到容器内，只需要生成一对密钥。然后再将ssh目录映射出来")]),s._v(" "),n("p",[s._v("假设有一正在运行的容器，名称为: jenkins_jenkins-compose")]),s._v(" "),n("p",[s._v("登录宿主机，将容器内的ssh目录拷贝到宿主机中\n"),n("code",[s._v("docker cp jenkins_jenkins-compose:/root/.ssh ssh")])]),s._v(" "),n("p",[s._v("设置权限和所属")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("chown root:root -R ~/.ssh/\nchmod 600 ~/.ssh/config\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("修改docker-compose")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("volumes:\n - /var/run/docker.sock:/var/run/docker.sock\n - /usr/bin/docker:/usr/bin/docker\n # 加入这行\n - /home/ubuntu/docker/jenkins/ssh:/root/.ssh\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("关于ssh/config文件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Host cloud2\n    HostName host.docker.internal\n    User ubuntu\n    Port 22\n    IdentityFile ~/.ssh/id_rsa\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("测试：\n在容器内执行 ssh cloud2 ls，相当于进到cloud2主机，并执行ls命令,返回结果正常")]),s._v(" "),n("h2",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),n("p",[s._v("https://stackoverflow.com/questions/31324981/how-to-access-host-port-from-docker-container/61424570#61424570")]),s._v(" "),n("p",[s._v("https://github.com/qoomon/docker-host")]),s._v(" "),n("p",[s._v("https://stackoverflow.com/questions/52925194/how-to-run-shell-script-on-host-from-jenkins-docker-container")]),s._v(" "),n("p",[s._v("https://stackoverflow.com/questions/32163955/how-to-run-shell-script-on-host-from-docker-container")])])}),[],!1,null,null,null);e.default=a.exports}}]);