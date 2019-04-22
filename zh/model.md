# 模型

Pinatra 采用 Laravel 框架里极其优秀的 ORM：[Eloquent](https://github.com/Illuminate/Database/) 作为默认 ORM。

## 特点

Model 基类为 [\Pinatra\Model\Model](https://github.com/Pinatra/Pinatra/blob/master/src/Model/Model.php)，具有如下特点：

1. 懒加载，不使用 Model 时不进行初始化，减少没必要的资源消耗
2. Eloquent 功能强大且品质优良，它是 Laravel 强大的最重要的原因
3. 功能强大的 Model 基类让 MVC 架构压缩成了 VC 架构，很大程度上减少了中间层函数，减少了多人协作时对同一段代码的编辑，在软件工程方面是一个巨大的进步，这是我这几年使用 Laravel 并且系统规模越来越大之后的深刻体会。

## 开始使用

假设我们要操作 articles 表，下面是具体流程。

### 数据库配置

在 `index.php` 中合适的位置增加如下语句即可完成数据库配置：

```php
\Pinatra\Model\Model::$config = [
  'driver'    => 'mysql',
  'host'      => 'localhost',
  'database'  => 'database',
  'username'  => 'root',
  'password'  => 'password',
  'charset'   => 'utf8',
  'collation' => 'utf8_unicode_ci',
  'prefix'    => '',
];
```

### 新建文件夹

在 public 同级新建 models 文件夹，并将其加入 composer 自动加载：

```json
"autoload": {
    "psr-4": {
        "Model\\": "models/"
    }
}
```

之后运行 `composer dump-autoload`。

### 新建 Model

新建 `models/Article.php`，内容如下：

```php
<?php

namespace Model;

class Article extends \Pinatra\Model\Model
{
}
```

### 新建数据库中的表

Article 默认对应的是 articles 表，ArticleItem 对应的是 article_itmes 表，即驼峰法转换成蛇形，而且最后一个词需要变成英文复数（很神奇）。

如果你想自定义数据表名，也非常简单：

```php
class Article extends \Pinatra\Model\Model
{
  protected $table = 'my_articles';
}
```

具体的建表过程请大家自行完成。

### 使用 Model

#### 路由闭包回调中直接使用

```php
get('hi', function() {
  return \Model\Article::first()->id;
});
```

#### 控制器中使用

```php
<?php
namespace Controllers;
use Pinatra\Model\DB;

class HomeController
{
  public function home()
  {
    return \Model\Article::first()->id;
  }
}
```


## 基础用法示例

### 找到 id 为 2 的文章打印其标题

```php
$article = Article::find(2);
echo $article->title;
```

### 查找标题为“我是标题”的文章，并打印 id

```php
$article = Article::where('title', '我是标题')->first();
echo $article->id;
```

### 查询出所有文章并循环打印出所有标题

```php
$articles = Article::all(); // 此处得到的 $articles 是一个对象集合，可以在后面加上 '->toArray()' 变成多维数组。
foreach ($articles as $article) {
  echo $article->title;
}
```

### 查找 id 在 10 ~ 20 之间的所有文章并打印所有标题

```php
$articles = Article::where('id', '>', 10)->where('id', '<', 20)->get();
foreach ($articles as $article) {
  echo $article->title;
}
```

### 查询出所有文章并循环打印出所有标题，按照 updated_at 倒序排序

```php
$articles = Article::where('id', '>', 10)->where('id', '<', 20)->orderBy('updated_at', 'desc')->get();
foreach ($articles as $article) {
  echo $article->title;
}
```

## 文档资源

[Eloquent 中文文档](https://laravel-china.org/docs/laravel/5.6/eloquent/1403)

[《深入理解 Laravel Eloquent》系列文章](https://lvwenhan.com/laravel/421.html)

## 直接执行 SQL

### Select 查询

```php
$users = DB::select('select * from users where active = ?', [1]);
```

#### 使用命名绑定

除了使用 `?` 来表示参数绑定外，你也可以使用命名绑定来执行一个查询：

```php
$results = DB::select('select * from users where id = :id', ['id' => 1]);
```

### Insert

```php
DB::insert('insert into users (id, name) values (?, ?)', [1, 'Dayle']);
```

### Update

```php
$affected = DB::update('update users set votes = 100 where name = ?', ['John']);
```

### Delete

```php
$deleted = DB::delete('delete from users');
```

### 运行普通语句

```php
DB::statement('drop table users');
```

### DB 更多文档

* [运行原生 SQL 查询](https://laravel-china.org/docs/laravel/5.6/database/1397#running-queries)
* [数据库事务](https://laravel-china.org/docs/laravel/5.6/database/1397#database-transactions)