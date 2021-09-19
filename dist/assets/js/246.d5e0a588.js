(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{683:function(s,a,e){"use strict";e.r(a);var n=e(30),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"linux环境变量配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux环境变量配置"}},[s._v("#")]),s._v(" Linux环境变量配置")]),s._v(" "),e("p",[s._v("在自定义安装软件的时候，经常需要配置环境变量，下面列举出各种对环境变量的配置方法。")]),s._v(" "),e("p",[s._v("下面所有例子的环境说明如下：")]),s._v(" "),e("ul",[e("li",[s._v("系统：Ubuntu 16.0")]),s._v(" "),e("li",[s._v("用户名：ubuntu")]),s._v(" "),e("li",[s._v("需要配置MySQL环境变量路径：/home/ubuntu/mysql/bin")])]),s._v(" "),e("h4",{attrs:{id:"linux读取环境变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux读取环境变量"}},[s._v("#")]),s._v(" Linux读取环境变量")]),s._v(" "),e("p",[s._v("读取环境变量的方法：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("export")]),s._v("命令显示当前系统定义的所有环境变量")]),s._v(" "),e("li",[e("code",[s._v("echo $PATH")]),s._v("命令输出当前的"),e("code",[s._v("PATH")]),s._v("环境变量的值")])]),s._v(" "),e("p",[s._v("这两个命令执行的效果如下")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('ubuntu@VM-16-4-ubuntu:~$ export\ndeclare -x HISTSIZE="3000"\ndeclare -x HISTTIMEFORMAT="%F %T "\ndeclare -x HOME="/home/ubuntu"\ndeclare -x LANG="C.UTF-8"\ndeclare -x LC_CTYPE="C.UTF-8"\ndeclare -x LC_TERMINAL="iTerm2"\ndeclare -x LC_TERMINAL_VERSION="3.4.8"\ndeclare -x LOGNAME="ubuntu"\ndeclare -x MAIL="/var/mail/ubuntu"\ndeclare -x OLDPWD\ndeclare -x PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin"\ndeclare -x PROMPT_COMMAND="history -a; history -a; history -a; "\ndeclare -x PWD="/home/ubuntu"\ndeclare -x SHELL="/bin/bash"\ndeclare -x SHLVL="1"\ndeclare -x SSH_TTY="/dev/pts/3"\ndeclare -x TERM="xterm-256color"\ndeclare -x USER="ubuntu"\ndeclare -x XDG_DATA_DIRS="/usr/local/share:/usr/share:/var/lib/snapd/desktop"\ndeclare -x XDG_RUNTIME_DIR="/run/user/500"\ndeclare -x XDG_SESSION_ID="143335"\n\nubuntu@VM-16-4-ubuntu:~$ echo $PATH\n/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br")])]),e("p",[s._v("其中"),e("code",[s._v("PATH")]),s._v("变量定义了运行命令的查找路径，以冒号"),e("code",[s._v(":")]),s._v("分割不同的路径，使用"),e("code",[s._v("export")]),s._v("定义的时候可加双引号也可不加。")]),s._v(" "),e("h4",{attrs:{id:"linux环境变量配置方法一-export-path"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux环境变量配置方法一-export-path"}},[s._v("#")]),s._v(" Linux环境变量配置方法一：export PATH")]),s._v(" "),e("p",[s._v("使用export命令直接修改PATH的值，配置MySQL进入环境变量的方法:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("export PATH=/home/ubuntu/mysql/bin:$PATH\n# 或者把PATH放在前面\nexport PATH=$PATH:/home/ubuntu/mysql/bin\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("注意事项：")]),s._v(" "),e("ul",[e("li",[s._v("生效时间：立即生效")]),s._v(" "),e("li",[s._v("生效期限：当前终端有效，窗口关闭后无效")]),s._v(" "),e("li",[s._v("生效范围：仅对当前用户有效")]),s._v(" "),e("li",[s._v("配置的环境变量中不要忘了加上原来的配置，即$PATH部分，避免覆盖原来配置")])]),s._v(" "),e("h4",{attrs:{id:"linux环境变量配置方法二-vim-bashrc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux环境变量配置方法二-vim-bashrc"}},[s._v("#")]),s._v(" Linux环境变量配置方法二：vim ~/.bashrc")]),s._v(" "),e("p",[s._v("通过修改用户目录下的"),e("code",[s._v("~/.bashrc")]),s._v("文件进行配置：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vim ~/.bashrc\n\n# 在最后一行加上\nexport PATH=$PATH:/home/uusama/mysql/bin\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("注意事项：")]),s._v(" "),e("ul",[e("li",[s._v("生效时间：使用相同的用户打开新的终端时生效，或者手动"),e("code",[s._v("source ~/.bashrc")]),s._v("生效")]),s._v(" "),e("li",[s._v("生效期限：永久有效")]),s._v(" "),e("li",[s._v("生效范围：仅对当前用户有效")]),s._v(" "),e("li",[s._v("如果有后续的环境变量加载文件覆盖了PATH定义，则可能不生效")])]),s._v(" "),e("h4",{attrs:{id:"linux环境变量配置方法三-vim-bash-profile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux环境变量配置方法三-vim-bash-profile"}},[s._v("#")]),s._v(" Linux环境变量配置方法三：vim ~/.bash_profile")]),s._v(" "),e("p",[s._v("和修改"),e("code",[s._v("~/.bashrc")]),s._v("文件类似，也是要在文件最后加上新的路径即可：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vim ~/.bash_profile\n\n# 在最后一行加上\nexport PATH=$PATH:/home/uusama/mysql/bin\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("注意事项：")]),s._v(" "),e("ul",[e("li",[s._v("生效时间：使用相同的用户打开新的终端时生效，或者手动"),e("code",[s._v("source ~/.bash_profile")]),s._v("生效")]),s._v(" "),e("li",[s._v("生效期限：永久有效")]),s._v(" "),e("li",[s._v("生效范围：仅对当前用户有效")]),s._v(" "),e("li",[s._v("如果没有"),e("code",[s._v("~/.bash_profile")]),s._v("文件，则可以编辑"),e("code",[s._v("~/.profile")]),s._v("文件或者新建一个")])]),s._v(" "),e("h4",{attrs:{id:"linux环境变量配置方法四-vim-etc-bashrc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux环境变量配置方法四-vim-etc-bashrc"}},[s._v("#")]),s._v(" Linux环境变量配置方法四：vim /etc/bashrc")]),s._v(" "),e("p",[s._v("该方法是修改系统配置，需要管理员权限（如root）或者对该文件的写入权限：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 如果/etc/bash.bashrc文件不可编辑，需要修改为可编辑\nchmod -v u+w /etc/bash.bashrc\n\nvim /etc/bash.bashrc\n\n# 在最后一行加上\nexport PATH=$PATH:/home/uusama/mysql/bin\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("注意事项：")]),s._v(" "),e("ul",[e("li",[s._v("生效时间：新开终端生效，或者手动"),e("code",[s._v("source /etc/bash.bashrc")]),s._v("生效")]),s._v(" "),e("li",[s._v("生效期限：永久有效")]),s._v(" "),e("li",[s._v("生效范围：对所有用户有效")])]),s._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),e("p",[s._v("如果系统是 ubuntu 或者 debian 的话, 就不会有 /etc/bashrc 而会有 /etc/bash.bashrc 文件.")])]),s._v(" "),e("h4",{attrs:{id:"linux环境变量配置方法五-vim-etc-profile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux环境变量配置方法五-vim-etc-profile"}},[s._v("#")]),s._v(" Linux环境变量配置方法五：vim /etc/profile")]),s._v(" "),e("p",[s._v("该方法修改系统配置，需要管理员权限或者对该文件的写入权限，和"),e("code",[s._v("vim /etc/bash.bashrc")]),s._v("类似：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 如果/etc/profile文件不可编辑，需要修改为可编辑\nchmod -v u+w /etc/profile\n\nvim /etc/profile\n\n# 在最后一行加上\nexport PATH=$PATH:/home/uusama/mysql/bin\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("注意事项：")]),s._v(" "),e("ul",[e("li",[s._v("生效时间：新开终端生效，或者手动source /etc/profile生效")]),s._v(" "),e("li",[s._v("生效期限：永久有效")]),s._v(" "),e("li",[s._v("生效范围：对所有用户有效")])]),s._v(" "),e("h2",{attrs:{id:"linux环境变量加载原理解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux环境变量加载原理解析"}},[s._v("#")]),s._v(" Linux环境变量加载原理解析")]),s._v(" "),e("p",[s._v("上面列出了环境变量的各种配置方法，那么Linux是如何加载这些配置的呢？是以什么样的顺序加载的呢？")]),s._v(" "),e("p",[s._v("特定的加载顺序会导致相同名称的环境变量定义被覆盖或者不生效。")]),s._v(" "),e("p",[s._v("环境变量的分类\n环境变量可以简单的分成用户自定义的环境变量以及系统级别的环境变量。")]),s._v(" "),e("ul",[e("li",[s._v("用户级别环境变量定义文件："),e("code",[s._v("~/.bashrc")]),s._v("、"),e("code",[s._v("~/.profile")]),s._v("（部分系统为："),e("code",[s._v("~/.bash_profile")]),s._v("）")]),s._v(" "),e("li",[s._v("系统级别环境变量定义文件："),e("code",[s._v("/etc/bashrc")]),s._v("、"),e("code",[s._v("/etc/profile")]),s._v("(部分系统为："),e("code",[s._v("/etc/bash_profile")]),s._v("）\n另外在用户环境变量中，系统会首先读取"),e("code",[s._v("~/.bash_profile")]),s._v("（或者"),e("code",[s._v("~/.profile")]),s._v("）文件，如果没有该文件则读取"),e("code",[s._v("~/.bash_login")]),s._v("，根据这些文件中内容再去读取"),e("code",[s._v("~/.bashrc")]),s._v("。")])]),s._v(" "),e("h2",{attrs:{id:"linux环境变量文件加载详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux环境变量文件加载详解"}},[s._v("#")]),s._v(" Linux环境变量文件加载详解")]),s._v(" "),e("p",[s._v("打开"),e("code",[s._v("/etc/profile")]),s._v("文件你会发现，该文件的代码中会加载"),e("code",[s._v("/etc/bash.bashrc")]),s._v("文件，然后检查"),e("code",[s._v("/etc/profile.d/")]),s._v("目录下的"),e("code",[s._v(".sh")]),s._v("文件并加载。")]),s._v(" "),e("p",[s._v("/etc/profile源码")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /etc/profile: system-wide .profile file for the Bourne shell (sh(1))")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# and Bourne compatible shells (bash(1), ksh(1), ash(1), ...).")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PS1")]),s._v("-}")]),s._v('"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("BASH")]),s._v("-}")]),s._v('"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$BASH")]),s._v('"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/sh"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The file bash.bashrc already sets the default PS1.")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# PS1='\\h:\\w\\$ '")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -f /etc/bash.bashrc "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" /etc/bash.bashrc\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" -u"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v('"')]),s._v(" -eq "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PS1")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'# '")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PS1")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$ '")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -d /etc/profile.d "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /etc/profile.d/*.sh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -r "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("unset")]),s._v(" i\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br")])]),e("p",[s._v("技巧：我在"),e("code",[s._v("/etc/profile.d")]),s._v("创建了"),e("code",[s._v("finley.sh")]),s._v("，方便任何登录用户使用\n内容：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ll")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ls -alhS'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("la")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ls -A'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("l")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ls -CF'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("k")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'kubectl'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"理解-bashrc-和-profile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#理解-bashrc-和-profile"}},[s._v("#")]),s._v(" 理解 bashrc 和 profile")]),s._v(" "),e("h4",{attrs:{id:"shell-的模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shell-的模式"}},[s._v("#")]),s._v(" Shell 的模式")]),s._v(" "),e("p",[s._v("系统的 shell 有很多种, 比如 bash, sh, zsh 之类的,\n如果要查看某一个用户使用的是什么 shell 可以通过 finger [USERNAME] 命令来查看.\n我们这里只说 shell 是 bash 的情况, 因为如果是 sh 或者其他 shell 显然不会运行 bashrc 的.")]),s._v(" "),e("h4",{attrs:{id:"login-shell-和-no-login-shell"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#login-shell-和-no-login-shell"}},[s._v("#")]),s._v(" login shell 和 no-login shell")]),s._v(" "),e("p",[e("code",[s._v("login shell")]),s._v("代表用户登入, 比如使用"),e("code",[s._v("su -")]),s._v("命令, 或者用 ssh 连接到某一个服务器上, 都会使用该用户默认 shell 启动 login shell 模式.")]),s._v(" "),e("p",[s._v("该模式下的 shell 会去自动执行"),e("code",[s._v("/etc/profile")]),s._v("和"),e("code",[s._v("~/.profile")]),s._v("文件, 但不会执行任何的"),e("code",[s._v("bashrc")]),s._v("文件, 所以一般在"),e("code",[s._v("/etc/profile")]),s._v("或者"),e("code",[s._v("~/.profile")]),s._v("里我们会手动去"),e("code",[s._v("source bashrc")]),s._v("文件.")]),s._v(" "),e("p",[s._v("而 no-login shell 的情况是我们在终端下直接输入"),e("code",[s._v("bash")]),s._v("或者"),e("code",[s._v('bash -c "command"')]),s._v("来启动的 shell.\n"),e("strong",[s._v("该模式下是不会自动去运行任何的 profile 文件")])]),s._v(" "),e("h4",{attrs:{id:"interactive-shell-和-non-interactive-shell"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#interactive-shell-和-non-interactive-shell"}},[s._v("#")]),s._v(" interactive shell 和 non-interactive shell")]),s._v(" "),e("p",[s._v("interactive shell 是交互式shell, 顾名思义就是用来和用户交互的, 提供了命令提示符可以输入命令.")]),s._v(" "),e("p",[s._v("该模式下会存在一个叫 PS1 的环境变量, 如果还不是"),e("code",[s._v("login shell")]),s._v("的则会去"),e("code",[s._v("source /etc/bash.bashrc")]),s._v("和"),e("code",[s._v("~/.bashrc")]),s._v("文件")]),s._v(" "),e("p",[s._v("non-interactive shell 则一般是通过"),e("code",[s._v('bash -c "command"')]),s._v("来执行的bash.")]),s._v(" "),e("h4",{attrs:{id:"bashrc和profile的用途和区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bashrc和profile的用途和区别"}},[s._v("#")]),s._v(" bashrc和profile的用途和区别")]),s._v(" "),e("ul",[e("li",[s._v("~/.profile: executed by Bourne-compatible login shells.")])]),s._v(" "),e("p",[s._v("其实看名字就能了解大概了, profile 是某个用户唯一的用来设置环境变量的地方\n因为用户可以有多个 shell 比如 bash, sh, zsh 之类的, 但像环境变量这种其实只需要在统一的一个地方初始化就可以了, 而这就是 profile.")]),s._v(" "),e("ul",[e("li",[s._v("~/.bashrc: executed by bash(1) for non-login shells.")])]),s._v(" "),e("p",[s._v("bashrc 也是看名字就知道, 是专门用来给 bash 做初始化的比如用来初始化 bash 的设置, bash 的代码补全, bash 的别名, bash 的颜色.\n以此类推也就还会有 shrc, zshrc 这样的文件存在了, 只是 bash 太常用了而已.")]),s._v(" "),e("p",[e("code",[s._v("cat ~/.profile")]),s._v("查看该文件的源码")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('# ~/.profile: executed by Bourne-compatible login shells.\n\nif [ "$BASH" ]; then\n  if [ -f ~/.bashrc ]; then\n    . ~/.bashrc\n  fi\nfi\n\nmesg n || true\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("结论:")]),s._v(" "),e("ol",[e("li",[s._v("profile是包含bashrc")]),s._v(" "),e("li",[e("code",[s._v("~/.profile")]),s._v("文件只在用户登录的时候读取一次,profile是在用户登录后才会运行。有些Linux的发行版本不一定有profile这个文件")]),s._v(" "),e("li",[e("code",[s._v("~/.bashrc")]),s._v("会在每次运行Shell脚本的时候读取一次。bashrc是在系统启动后就会自动运行")])]),s._v(" "),e("h4",{attrs:{id:"一些小技巧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一些小技巧"}},[s._v("#")]),s._v(" 一些小技巧")]),s._v(" "),e("p",[s._v("可以自定义一个环境变量文件，比如在某个项目下定义uusama.profile，在这个文件中使用export定义一系列变量，然后在~/.profile文件后面加上：sourc uusama.profile，这样你每次登陆都可以在Shell脚本中使用自己定义的一系列变量。")]),s._v(" "),e("p",[s._v('也可以使用alias命令定义一些命令的别名，比如alias rm="rm -i"（双引号必须），并把这个代码加入到~/.profile中，这样你每次使用rm命令的时候，都相当于使用rm -i命令，非常方便。')]),s._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),e("p",[s._v("https://www.cnblogs.com/youyoui/p/10680329.html")]),s._v(" "),e("p",[s._v("https://wido.me/sunteya/understand-bashrc-and-profile")])])}),[],!1,null,null,null);a.default=t.exports}}]);