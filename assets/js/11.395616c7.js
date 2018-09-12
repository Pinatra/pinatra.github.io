(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{170:function(t,s,a){t.exports=a.p+"assets/img/5.8cab4f74.jpg"},196:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"views"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#views","aria-hidden":"true"}},[t._v("#")]),t._v(" Views")]),t._v(" "),n("p",[t._v("Views are a low-cost component of Pinatra with almost no performance penalty, using PHP itself as a template engine.")]),t._v(" "),n("h2",{attrs:{id:"preparation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#preparation","aria-hidden":"true"}},[t._v("#")]),t._v(" Preparation")]),t._v(" "),n("p",[t._v("Before using the view component, we need to create a new folder as the root of the view files and define a constant to pass this information.")]),t._v(" "),n("h3",{attrs:{id:"new-folder"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#new-folder","aria-hidden":"true"}},[t._v("#")]),t._v(" New folder")]),t._v(" "),n("p",[t._v("Create a new folder "),n("code",[t._v("views")]),t._v(" as the same level as "),n("code",[t._v("public")]),t._v(".")]),t._v(" "),n("h3",{attrs:{id:"tell-pinatra"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tell-pinatra","aria-hidden":"true"}},[t._v("#")]),t._v(" Tell Pinatra")]),t._v(" "),n("p",[t._v("Add the following line of code to "),n("code",[t._v("public/index.php")]),t._v(":")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token function"}},[t._v("Define")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'VIEW_BASE_PATH'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("dirname")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token function"}},[t._v("dirname")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token constant"}},[t._v("__FILE__")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'/views/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"creating-a-view-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-view-file","aria-hidden":"true"}},[t._v("#")]),t._v(" Creating a view file")]),t._v(" "),n("p",[t._v("Create a "),n("code",[t._v("views/home.php")]),t._v(" file with the following code:")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token php language-php"}},[n("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$title")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'<br>'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$home_page")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),n("h2",{attrs:{id:"calling-a-view-and-passing-in-parameters"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#calling-a-view-and-passing-in-parameters","aria-hidden":"true"}},[t._v("#")]),t._v(" Calling a view and passing in parameters")]),t._v(" "),n("p",[t._v("Whether in a closure or in a controller method, you can simply call the view with the following statement:")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token function"}},[t._v("get")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("view")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'home'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("withTitle")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Pinatra'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                     "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("withHomePage")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'HomePage!'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("HomeController")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("home")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("view")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'home'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("withTitle")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Pinatra'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                       "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("withHomePage")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'HomePage!'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("Visit the right URL and you will get the following page:")]),t._v(" "),n("p",[n("img",{attrs:{src:a(170),alt:"view"}})]),t._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("Tips")]),t._v(" "),n("p",[t._v("view() receives a string as a file path that supports the use of multi-level subfolders, separated by "),n("code",[t._v("/")]),t._v(" or "),n("code",[t._v(".")]),t._v(", such as "),n("code",[t._v("admin/home")]),t._v(" or "),n("code",[t._v("admin.home")]),t._v(".")])]),t._v(" "),n("h2",{attrs:{id:"way-of-passing-parameters"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#way-of-passing-parameters","aria-hidden":"true"}},[t._v("#")]),t._v(" Way of passing parameters")]),t._v(" "),n("h3",{attrs:{id:"with"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#with","aria-hidden":"true"}},[t._v("#")]),t._v(" with()")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token function"}},[t._v("view")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'home'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("with")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Piantra'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// $title == 'Pinatra'")]),t._v("\n")])])]),n("h3",{attrs:{id:"all-functions-starting-with-with"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#all-functions-starting-with-with","aria-hidden":"true"}},[t._v("#")]),t._v(" All functions starting with with")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token function"}},[t._v("view")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'home'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("withTitle")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Piantra'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// $title == 'Pinatra'")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("view")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'home'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("withtitle")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Piantra'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// $title == 'Pinatra'")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("view")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'home'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("withHomePage")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Piantra'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// $home_page == 'Pinatra'")]),t._v("\n")])])]),n("blockquote",[n("p",[t._v("withSomeThing() will be translated from camelCase to snake_case when injected into a view.")])]),t._v(" "),n("h3",{attrs:{id:"return"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#return","aria-hidden":"true"}},[t._v("#")]),t._v(" Return")]),t._v(" "),n("p",[t._v("The call to the view must use the "),n("code",[t._v("return view()")]),t._v(" statement.")])])}],e=a(0),o=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);o.options.__file="view.md";s.default=o.exports}}]);