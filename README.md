![logo](./assets/Pinatra.jpg)

<br>

> ### A PHP copy of Sinatra: a DSL for quickly creating web applications in PHP with minimal effort.

<br>

## GETTING STARTED

### install

```bash
composer require pinatra/framework=dev-master
```

### run your own application!

```php
require __DIR__.'/../vendor/autoload.php';

get('/hi', function() {
  echo "I am Pinatra framework!";
});
```