![logo](../assets/Pinatra.jpg)

<br>

> ### PHP 版本的 Sinatra，极其轻量优雅的 web 领域专用语言（框架）


#### 源代码：[https://github.com/Pinatra/Pinatra](https://github.com/Pinatra/Pinatra)

<br>

# 起步

### 安装

```bash
composer require pinatra/framework=dev-master
```

### 运行第一个 Pinatra 应用！

```php
require __DIR__.'/../vendor/autoload.php';

get('hi', function() {
  echo "I am Pinatra framework!";
});
```