(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{333:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#git-push免输入账号和密码方法"}},[s._v("git push免输入账号和密码方法")])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"git-push免输入账号和密码方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-push免输入账号和密码方法"}},[s._v("#")]),s._v(" git push免输入账号和密码方法")]),s._v(" "),a("p",[s._v("用git push提交代码时，避免输入帐号和密码，给予当前账号设置信任。")]),s._v(" "),a("h4",{attrs:{id:"对于-linux-mac："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对于-linux-mac："}},[s._v("#")]),s._v(" 对于 Linux/Mac：")]),s._v(" "),a("p",[s._v("创建文件，进入文件，输入内容：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~  \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" .git-credentials  \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" .git-credentials\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("输入")]),s._v(" "),a("div",{staticClass:"language-vim line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vim"}},[a("code",[s._v("https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("@github"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("com")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在终端下输入：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global credential.helper store  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("打开"),a("code",[s._v("~/.gitconfig")]),s._v("文件，会发现多了一项:")]),s._v(" "),a("div",{staticClass:"language-vim line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vim"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("credential"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nhelper "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" store\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("hr"),s._v(" "),a("h4",{attrs:{id:"windows方法："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows方法："}},[s._v("#")]),s._v(" Windows方法：")]),s._v(" "),a("p",[s._v("方法同上面，只是第一步创建git-credentials有点不同。"),a("br"),s._v("\n在%HOME%目录中，一般为C:\\users\\Administrator，也可以是你自己创建的系统用户名目录，反正都在C:\\users\\中。"),a("br"),s._v('\n文件名为.git-credentials,由于在Window中不允许直接创建以"."开头的文件，所以需要借助git bash进行，'),a("br"),s._v("\n打开git bash客户端，进行%HOME%目录，然后用touch创建文件 .git-credentials, 然后后面的操作同上面。\n还有一种方法参考Windows下设置git push免密码。")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("不建议免密，毕竟输入账号密码也不麻烦(编者说)"),a("br"),s._v("\n参考："),a("a",{attrs:{href:"http://www.cnblogs.com/ballwql/p/3462104.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Windows下设置git push免密码"),a("OutboundLink")],1),a("br"),s._v("\n转载自 "),a("a",{attrs:{href:"https://www.cnblogs.com/zhonghuasong/p/5975952.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("zhonghuasong"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);