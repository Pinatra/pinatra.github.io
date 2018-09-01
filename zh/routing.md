# 路由

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

::: 提示
只有第一个路由会被响应。
:::