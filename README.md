![logo](./assets/Pinatra.jpg)

<br>

> ### A PHP copy of Sinatra: a DSL for quickly creating web applications in PHP with minimal effort.

#### Source Code: [https://github.com/Pinatra/Pinatra](https://github.com/Pinatra/Pinatra)

<br>

# GETTING STARTED

### install

```bash
composer require pinatra/framework=~0.0
```

### run your own application!

```php
require __DIR__.'/../vendor/autoload.php';

get('hi', function() {
  echo "I am Pinatra framework!";
});
```