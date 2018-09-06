# Routing

Pinatra's routing is simple and powerful, with 100% coverage testing and quality assurance.

## Getting start

We use one of the easiest routes to get the home page as an example:

```php
get('/', function() {
  echo "GET /";
});
```

## Avaliable HTTP mothods

Pinatra supports `GET` `POST` `PUT` `PATCH` `DELETE` `OPTIONS` `HEAD` several routing methods, the usage is very simple:

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

## Response Type

Pinatra routing supports both closures and `controller@methods`. as follows:

### Closure

```php
get('/', function() {
  echo "GET /";
});
```

### `Controller@method`

```php
get('/', 'HomeController@home');
```

This type of response requires a combination of namespaces, autoloading, etc. See [Controller](./controller.html) for details.

## Routing Parameter

`{param}` can be adapted to any [URL legal string](https://stackoverflow.com/a/1547940) except `/` `?` `#`.


### Multiple usage shows

#### Single element matching

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

#### Multi-element matching

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

::: tip Tips
1. The `param` word in `{param}` can be arbitrary, even using an empty string directly, regardless of the parameter naming in the callback function.
2. The system will assign values ​​in order of parameters.
3. If the response parameter in response to the closure or response controller is more than the number of `{param}` in the route, the extra required parameter will be assigned the value `NULL`. Optional parameters with default values ​​are not affected.
:::

## Other features

1. The first `/` is optional and does not affect system functionality.
##### `get('/', $response)` and `get('', $response)` have the same function
##### `get('/hi', $response)` and `get('hi', $response)` have the same function
