(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{170:function(t,s,a){t.exports=a.p+"assets/img/1.1b132699.jpg"},171:function(t,s,a){t.exports=a.p+"assets/img/2.e77573d4.jpg"},172:function(t,s,a){t.exports=a.p+"assets/img/3.b07797e6.jpg"},182:function(t,s,a){"use strict";a.r(s);var e=[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"环境要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境要求","aria-hidden":"true"}},[this._v("#")]),this._v(" 环境要求")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("PHP > 7.0")]),this._v(" "),s("li",[this._v("Composer")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"composer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#composer","aria-hidden":"true"}},[this._v("#")]),this._v(" Composer")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"详细步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#详细步骤","aria-hidden":"true"}},[this._v("#")]),this._v(" 详细步骤")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"新建项目文件夹"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新建项目文件夹","aria-hidden":"true"}},[this._v("#")]),this._v(" 新建项目文件夹")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("mkdir")]),this._v(" blog\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"composer-初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#composer-初始化","aria-hidden":"true"}},[this._v("#")]),this._v(" composer 初始化")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("cd")]),this._v(" blog\ncomposer self-update\ncomposer init\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("之后一路回车，直到 "),a("code",[t._v("Search for a package")]),t._v("，输入 "),a("code",[t._v("pinatra/framework")]),t._v(" 回车，出现 "),a("code",[t._v("Enter the version constraint to require (or leave blank to use the latest version)")]),t._v(" 输入 "),a("code",[t._v("~0.0")]),t._v("，之后继续一路回车直到交互结束。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这时，执行 "),s("code",[this._v("ls -a")]),this._v(" 出现下图所示即为成功：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:a(170),alt:"ls"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"查看-composer-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看-composer-json","aria-hidden":"true"}},[this._v("#")]),this._v(" 查看 composer.json")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"user/blog"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"require"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"pinatra/framework"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"~0.0"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"authors"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"JohnLui"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"email"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"user@gmail.com"')]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"下载所有-composer-包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载所有-composer-包","aria-hidden":"true"}},[this._v("#")]),this._v(" 下载所有 composer 包")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("composer update\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:a(171),alt:"vendor"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"建立-index-php"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建立-index-php","aria-hidden":"true"}},[this._v("#")]),this._v(" 建立 index.php")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("mkdir")]),this._v(" public\n"),s("span",{attrs:{class:"token function"}},[this._v("cd")]),this._v(" public\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("touch")]),this._v(" index.php\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("?php\n\nrequire __DIR__."),a("span",{attrs:{class:"token string"}},[t._v("'/../vendor/autoload.php'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nget"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'hi'")]),t._v(", function"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"I am Pinatra framework!"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"使用-php-自带的单线程-web-server-让我们的网站跑起来！"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-php-自带的单线程-web-server-让我们的网站跑起来！","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用 PHP 自带的单线程 web server 让我们的网站跑起来！")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("php -S 0.0.0.0:8000\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"查看成果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看成果","aria-hidden":"true"}},[this._v("#")]),this._v(" 查看成果")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("访问 "),s("code",[this._v("http://0.0.0.0:8000/hi")]),this._v("，如果你的结果如下图所示，说明你成功了！")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:a(172),alt:"success"}})])}],n=a(0),r=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("Composer 是最流行的 PHP 包管理器，各个社区中存在着海量的开源软件，供你选择。在此推荐一个"),a("a",{attrs:{href:"https://packagist.laravel-china.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("中国镜像"),a("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("Pinatra 是第一个做到真正 hands-off 的 PHP 框架，其本身只作为一个库存在，却提供了复杂的路由功能和详尽的 MVC 结构。")]),t._v(" "),a("p",[t._v("下面是“一步一步跟我做”教程：")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("此时 composer.json 的内容应该如下：")]),t._v(" "),t._m(13),t._m(14),t._v(" "),a("p",[t._v("执行命令：")]),t._v(" "),t._m(15),a("p",[t._v("此时你应该得到了 vendor 文件夹，将其展开应该如下图所示：")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),a("p",[t._v("网站的 document root 文件夹应该和 vendor 同级，这是一项安全要求。新建 public 文件夹：")]),t._v(" "),t._m(18),a("p",[t._v("新建 index.php 文件：")]),t._v(" "),t._m(19),a("p",[t._v("之后填入以下内容：")]),t._v(" "),t._m(20),t._m(21),t._v(" "),a("p",[t._v("确保此时命令行的当前路径在 public 文件夹下，之后运行如下命令：")]),t._v(" "),t._m(22),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25)])},e,!1,null,null,null);r.options.__file="install.md";s.default=r.exports}}]);