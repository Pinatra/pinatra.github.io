# 视图

视图是 Pinatra 的一个低负载组件，几乎没有性能损失，采用 PHP 本身作为模板引擎。

## 准备工作

在使用视图功能之前，我们需要新建一个文件夹作为视图文件的根目录，并定义一个常量传递这个信息。

### 新建文件夹

新建一个和 `public` 同级的文件夹 `views`。

### 告诉 Pinatra

在 `public/index.php` 中增加下面这行代码即可：

```php
define('VIEW_BASE_PATH', dirname(dirname(__FILE__)).'/views/');
```

## 创建视图文件

创建 `views/home.php` 文件，内容如下：

```php
<?php
echo $title.'<br>';
echo $home_page;
```

## 调用视图并传入参数

无论在闭包还是在控制器方法中，你都可以使用以下语句简单地调用视图：

```php
get('/', function() {
  return view('home')->withTitle('Pinatra')
                     ->withHomePage('HomePage!');
});
```

```php
class HomeController
{
  public function home()
  {
    return view('home')->withTitle('Pinatra')
                       ->withHomePage('HomePage!');
  }
}
```

访问相应 URL，你会得到如下页面：

![view](../assets/5.jpg)

::: tip 小贴士
view() 接收一个字符串作为文件路径，其支持使用多级子文件夹，只需要以 `/` 或 `.` 隔开，例如 `admin/home` 或 `admin.home`。
:::

## 传参方式

### with()

```php
view('home')->with('title', 'Piantra'); // $title == 'Pinatra'
```

### 以 with 开头的所有函数

```php
view('home')->withTitle('Piantra'); // $title == 'Pinatra'
view('home')->withtitle('Piantra'); // $title == 'Pinatra'
view('home')->withHomePage('Piantra'); // $home_page == 'Pinatra'
```

> withSomeThing() 变量名会从驼峰法转换成蛇形，传入视图。

### 返回

调用视图一定要使用 `return view()` 方式。