# Routing

## Start

Here is a simple example for getting index page:


```php
get('/', function() {
  echo "GET /";
});
```

## Avaliable HTTP mothods

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

::: tip Tip
The first route that matches the request will be invoked.
:::


## Route Parameters

Pinatra supports 3 type parameters such as `:num` `:any` `:all`.

### :num

`:num` matches all number:

```php
get('/:num', function($a) {
  echo "GET ".$a;
});
```

visits `example.com/10086` you will get `get 10086`。

### :any

`:num` matches all characters including all numbers but not `/`, because `/` will be used to devide parameters:

```php
get('/:any', function($a) {
  echo "GET ".$a;
});
```

visits `example.com/foobar` you will get `get foobar`。

### :all

`:num` matches all characters including all numbers and `/`:

```php
get('/:all', function($a = 100, $b = 10000) {
  echo "GET ".$a.' '.$b;
});
```

visits `example.com/10086/foobar` you will get  `get 10086 foobar`。

::: tip Tip
We strongly recommend that you assign default values to each parameter of the callback anonymous function when using `:all`.
:::
