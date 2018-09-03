# 路由

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

## 参数路由

Pinatra 支持 `:num` `:any` `:all` 三种通配参数。

### :num

`:num` 可以匹配所有数字，例如：

```php
get('/:num', function($a) {
  echo "GET ".$a;
});
```

访问 `example.com/10086` 会得到 `get 10086`。

### :any

`:num` 可以匹配除 `/` 之外的所有字符串（包括数字），`/` 是参数分隔符，例如：

```php
get('/:any', function($a) {
  echo "GET ".$a;
});
```

访问 `example.com/foobar` 会得到 `get foobar`。

### :all

`:num` 可以匹配所有字符串，包括 `/`，例如：

```php
get('/:all', function($a = 100, $b = 10000) {
  echo "GET ".$a.' '.$b;
});
```

访问 `example.com/10086/foobar` 会得到 `get 10086 foobar`。

::: tip 提示
我们强烈建议你在使用 `:all` 的时候给回调匿名函数的每一个参数都赋默认值。
:::
