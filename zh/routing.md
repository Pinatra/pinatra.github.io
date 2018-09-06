# 路由

Pinatra 的路由简单而强大，经过了 100% 覆盖率的测试，质量有保证。

## 起步

我们用一个最简单的获取首页的路由作为示例：


```php
get('/', function() {
  echo "GET /";
});
```

## 所有 HTTP 方法

Pinatra 支持 `GET` `POST` `PUT` `PATCH` `DELETE` `OPTIONS` `HEAD` 几种路由方式，用法非常简单：

```php
get('/', function() {
  echo "GET /";
});

post('/', function() {
  echo "POST /";
});

put('/', function() {
  echo "PUT /";
});

patch('/', function() {
  echo "PATCH /";
});

delete('/', function() {
  echo "DELETE /";
});

options('/', function() {
  echo "OPTIONS /";
});

head('/', function() {
  header('custom-header: hello Pinatra!');
});
```

::: tip 提示
只有第一个匹配成功的路由会被响应。
:::

## 响应类型

Pinatra 路由支持闭包和`控制器@方法`两种响应方式。如下：

### 闭包

```php
get('/', function() {
  echo "GET /";
});
```

### `控制器@方法`

```php
get('/', 'HomeController@home');
```

此种类型的响应需要命名空间、自动加载等配合，详情参见[控制器](./controller.html)。

## 参数路由

`{param}` 可以适配除 `/` `?` `#` 之外的任意 [URL 合法字符串](https://stackoverflow.com/a/1547940)。


### 多种用法展示

#### 单元素匹配

```php
get('{a}', function($a) {
  echo "GET /".$a; // GET /foo
});
```

```php
get('hi/{a}', function($a) {
  echo "GET /hi".$a; // GET /hi/foo
});
```

```php
get('{a}/hi', function($a) {
  echo "GET /".$a.'/hi'; // GET /foo/hi
});
```

#### 多元素匹配

```php
get('{a}/{b}', function($a, $b) {
  echo "GET /".$a.'/'.$b; // GET /foo/bar
});
```

```php
get('{a}/hi/{b}', function($a, $b) {
  echo "GET /".$a.'/hi/'.$b; // GET /foo/hi/bar
});
```

::: tip 小贴士
1. `{param}` 中的 `param` 命名可以随意，甚至直接使用空字符串，和回调函数中的参数命名无关。
2. 系统会按照参数顺序依次赋值
3. 如果响应闭包或响应控制器的响应方法所需要的必填参数比路由中 `{param}` 的数量多，则多余必填参数会被赋值为 `NULL`。有默认值的可选参数不受影响。
:::

## 其它特性

1. 第一个 `/` 可有可无，不影响系统功能。
##### `get('/', $response)` 和 `get('', $response)` 功能相同
##### `get('/hi', $response)` 和 `get('hi', $response)` 功能相同