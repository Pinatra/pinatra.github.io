# Routing

Pinatra supports `GET` `POST` `PUT` `PATCH` `DELETE` `OPTIONS` `HEAD` http methods, which are very simple：

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

::: tip
The first route that matches the request is invoked.
:::