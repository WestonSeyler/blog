(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{568:function(s,e,l){"use strict";l.r(e);var n=l(30),a=Object(n.a)({},(function(){var s=this,e=s.$createElement,l=s._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[l("p"),l("div",{staticClass:"table-of-contents"},[l("ul",[l("li",[l("a",{attrs:{href:"#必备知识"}},[s._v("必备知识")])]),l("li",[l("a",{attrs:{href:"#ansible特点"}},[s._v("Ansible特点")])]),l("li",[l("a",{attrs:{href:"#ansible的隐喻"}},[s._v("Ansible的隐喻")])]),l("li",[l("a",{attrs:{href:"#参考"}},[s._v("参考")])])])]),l("p"),s._v(" "),l("p",[s._v("Ansible是用Python写的自动化运维工具，你如果需要管理维护好多主机，需要做批量操作，部署，任务等，他是个不错的选择。\nAnsible是基于模块工作的，Ansible本身没有批量部署的能力。真正具有批量部署的是ansible所运行的模块。模块的内容会在后面重点介绍。")]),s._v(" "),l("h3",{attrs:{id:"必备知识"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#必备知识"}},[s._v("#")]),s._v(" 必备知识")]),s._v(" "),l("p",[s._v("想要高效的学习Ansible，必须熟悉某一发行的 Linux 系统 (Ubuntu, CentOS)，至少需要了解以下内容。")]),s._v(" "),l("ul",[l("li",[s._v("SSH连接远程服务器")]),s._v(" "),l("li",[s._v("基本的Bash命令")]),s._v(" "),l("li",[s._v("文件权限及处理")]),s._v(" "),l("li",[s._v("环境变量相关")]),s._v(" "),l("li",[s._v("简单的编写shell脚本")])]),s._v(" "),l("p",[s._v("你还需要一台服务器，如果没有可以在本地新建虚拟机，我建议搭建至少两台，以便了解的Ansible的批处理能力。\n搭建虚拟机非常简单，你可以搜一下VirtualBox和Vagrant。")]),s._v(" "),l("h3",{attrs:{id:"ansible特点"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#ansible特点"}},[s._v("#")]),s._v(" Ansible特点")]),s._v(" "),l("ol",[l("li",[s._v("简单易学")]),s._v(" "),l("li",[s._v("使用SSH协议与受控机器进行通信，一般服务器默认有SSH服务，Ansible也被成为agentless(去客户端的)")]),s._v(" "),l("li",[s._v("Ansible主要使用YAML格式作为自己的DSL格式及配置文件格式。")]),s._v(" "),l("li",[s._v("Ansible自带很多模块，基于模块工作")])]),s._v(" "),l("p",[s._v('Ansible将部署逻辑放在一个称为"playbook”的YAML文件中。通常，文件名是playbook.yml。\n组织受控机器的逻辑被放在inventory文件中。它是ini格式的，默认文件名为hosts。\n这两个文件构成了Ansible自动化部署的基础。\n只要运行'),l("code",[s._v("ansible-playbook --inventory hosts --user vagrant --ask pass playbook.ymI")]),s._v("命令，输入SSH登录时用户vagrant的密码，就可以执行我们描述好的部署逻辑了。\n为简单起见，我们使用用户名和密码的方式登录。更安全的方式是使用SSH密钥登录。\n以上就是对Ansible的基本介绍。\n如果想更深入地学习，请前往Ansible官网。")]),s._v(" "),l("h3",{attrs:{id:"ansible的隐喻"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#ansible的隐喻"}},[s._v("#")]),s._v(" Ansible的隐喻")]),s._v(" "),l("p",[s._v("了解Ansible的隐喻对于了解Ansible背后的设计有一定的帮助。Ansible的隐喻很简单:\nAnsible是导演，受控机器列表(inventory) 为演员列表，开发者则是编剧。开发者只要把剧本(playbook.yml) 写好，Ansible拿着剧本与inventory一对上号，演员就会按照剧本如实表演，不会有任何个人发挥。")]),s._v(" "),l("h3",{attrs:{id:"参考"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),l("ul",[l("li",[s._v("https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html?highlight=ansible_user")]),s._v(" "),l("li",[l("a",{attrs:{href:"https://github.com/ansible/ansible-examples",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方提供的playbook的大量例子"),l("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);