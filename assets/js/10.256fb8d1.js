(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{166:function(t,a,s){t.exports=s.p+"assets/img/4.65262032.jpg"},184:function(t,a,s){"use strict";s.r(a);var n=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"控制器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#控制器","aria-hidden":"true"}},[t._v("#")]),t._v(" 控制器")]),t._v(" "),n("p",[t._v("作为一种模仿 Sinatra 的极简框架，Pinatra 默认不提供 "),n("code",[t._v("Controller")]),t._v(" 和 "),n("code",[t._v("Model")]),t._v(" 基础组件，但都可以通过简单的 DIY 来实现。")]),t._v(" "),n("p",[t._v("下面我将展示如何在 Pinatra 框架中使用控制器。")]),t._v(" "),n("h2",{attrs:{id:"路由中控制器的基本设计"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#路由中控制器的基本设计","aria-hidden":"true"}},[t._v("#")]),t._v(" 路由中控制器的基本设计")]),t._v(" "),n("p",[t._v("Pinatra 路由提供了一个十分简易的 "),n("code",[t._v("Controller@method")]),t._v(" 的调用方式，其背后就是如下简单的操作步骤：")]),t._v(" "),n("ol",[n("li",[t._v("定义控制器的根命名空间，默认为 '\\'，即根空间。")]),t._v(" "),n("li",[t._v("拿到形如 "),n("code",[t._v("Controller@method")]),t._v(" 的响应请求时，直接 new 对象，再调用方法并传入参数。")])]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 伪代码")]),t._v("\n"),n("span",{attrs:{class:"token variable"}},[t._v("$a")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$baseNameSpace")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token variable"}},[t._v("$controller")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// '\\NameSpace\\HomeController';")]),t._v("\n"),n("span",{attrs:{class:"token variable"}},[t._v("$b")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$method")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 'home'")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$a")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token variable"}},[t._v("$method")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$a")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$b")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$c")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"使用控制器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用控制器","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用控制器")]),t._v(" "),n("p",[t._v("把控制器装入 Pinatra 需要三步。"),n("s",[t._v("第一步，开冰箱门（不好意思窜台了）。")])]),t._v(" "),n("h2",{attrs:{id:"_1-设置命名空间"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-设置命名空间","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 设置命名空间")]),t._v(" "),n("p",[t._v("设置命名空间的主要目的是为了自动加载，就是让我们不必在调用类之前先手动 require 文件。")]),t._v(" "),n("p",[t._v("PSR-4 规范是让命名空间默认和文件夹以及文件名的结构相同，最省事。PSR-0 规范允许每个文件内部随意设置，缺点是每次修改就要重新运行 "),n("code",[t._v("composer dump-autoload")]),t._v("。")]),t._v(" "),n("p",[t._v("Pinatra 推荐使用 PSR-4 自动加载规范，具体操作如下。")]),t._v(" "),n("blockquote",[n("ol",[n("li",[t._v("新建和 public 文件夹同级的 controllers 文件夹")]),t._v(" "),n("li",[t._v("修改 composer.json，增加以下内容：")])]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{attrs:{class:"token property"}},[t._v('"autoload"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v('"psr-4"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token property"}},[t._v('"Controllers\\\\"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"controllers/"')]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[t._v("运行命令 "),n("code",[t._v("composer dump-autoload")])])])]),t._v(" "),n("h2",{attrs:{id:"_2-让-pinatra-知道"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-让-pinatra-知道","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 让 Pinatra 知道")]),t._v(" "),n("p",[t._v("在 "),n("code",[t._v("public/index.php")]),t._v(" 中增加一行代码：")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[t._v("\\"),n("span",{attrs:{class:"token package"}},[t._v("Pinatra"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Routing"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Router")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token variable"}},[t._v("$baseNamespace")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'\\\\Controllers\\\\'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"_3-尝试一下"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-尝试一下","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 尝试一下")]),t._v(" "),n("h3",{attrs:{id:"创建控制器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建控制器","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建控制器")]),t._v(" "),n("p",[t._v("创建 "),n("code",[t._v("controllers/HomeController.php")]),t._v(" 文件，内容如下：")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token php language-php"}},[n("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),n("span",{attrs:{class:"token package"}},[t._v("Controllers")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("HomeController")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("home")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"Welcome to homepage!"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),n("h3",{attrs:{id:"创建路由"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建路由","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建路由")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token function"}},[t._v("get")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'home'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'HomeController@home'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"检验成果"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#检验成果","aria-hidden":"true"}},[t._v("#")]),t._v(" 检验成果")]),t._v(" "),n("p",[t._v("访问 "),n("code",[t._v("http://0.0.0.0:8000/home")]),t._v("，得到下图页面，成功！")]),t._v(" "),n("p",[n("img",{attrs:{src:s(166),alt:"controller"}})])])}],e=s(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);r.options.__file="controller.md";a.default=r.exports}}]);