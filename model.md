# Model

Pinatra uses the excellent ORM in the Laravel framework: [Eloquent](https://github.com/Illuminate/Database/) as the default ORM.

## Features

The Model base class is [\Pinatra\Model\Model](https://github.com/Pinatra/Pinatra/blob/master/src/Model/Model.php) with the following characteristics:

1. Lazy loading, no initialization when not using Model, reducing unnecessary resource consumption
2. Eloquent is powerful and of high quality, it is the most important reason for Laravel's strength.
3. The powerful Model base class compresses the MVC architecture into an MC architecture, which greatly reduces the middle-level functions and reduces the editing of the same piece of code when multi-person collaboration. This is a huge improvement in software engineering. This is my deep experience after using Laravel in the past few years and the system is getting bigger and bigger.

## Start Using

Suppose we want to manipulate the articles table. Here is the specific process.

### Database Configuration

Add the following statement to the appropriate location in `index.php` to complete the database configuration:

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

### Create Folder

Create a new models folder at public level and add it to composer to load automatically:

```json
"autoload": {
    "psr-4": {
        "Model\\": "models/"
    }
}
```

Then run `composer dump-autoload`.

### Create Model

Create a new `models/Article.php` with the following contents:

```php
<?php

namespace Model;

class Article extends \Pinatra\Model\Model
{
}
```

### Creating a table in a new database

Article defaults to the articles table, and ArticleItem corresponds to the article_itmes table, which converts the hump method into a serpentine shape, and the last word needs to be converted into English plural (very magical).

If you want to customize the name of the data table, it is also very simple:

```php
class Article extends \Pinatra\Model\Model
{
  protected $table = 'my_articles';
}
```

The specific construction process should be completed by yourself.

### Using Model

#### Direct use in routing closure callbacks

```php
get('hi', function() {
  return \Model\Article::first()->id;
});
```

#### Using in Controller

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


## Basic usage example

### Found an article with an id of 2 to print its title

```php
$article = Article::find(2);
echo $article->title;
```

### Find the article titled "I am the title" and print the id

```php
$article = Article::where('title', 'I am the title')->first();
echo $article->id;
```

### Query all articles and cycle through all the titles

```php
// The $articles obtained here is a collection of objects 
// that can be followed by a '->toArray()' to become a 
// multidimensional array.
$articles = Article::all();
foreach ($articles as $article) {
  echo $article->title;
}
```

### Find all articles with id between 10 and 20 and print all the titles

```php
$articles = Article::where('id', '>', 10)->where('id', '<', 20)->get();
foreach ($articles as $article) {
  echo $article->title;
}
```

### Query all articles and cycle out all the titles, sorted by updated_at in reverse order

```php
$articles = Article::where('id', '>', 10)->where('id', '<', 20)->orderBy('updated_at', 'desc')->get();
foreach ($articles as $article) {
  echo $article->title;
}
```

## Documentation Resources

[Eloquent Documentation](https://laravel.com/docs/5.7/eloquent)

## Direct execution an SQL

### Select Query

```php
$users = DB::select('select * from users where active = ?', [1]);
```

#### Using named bindings

In addition to using `?` to represent parameter bindings, you can also use a named binding to execute a query:

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

### Running ordinary statements

```php
DB::statement('drop table users');
```

### More Documentation about DB

* [Running Raw SQL Queries](https://laravel.com/docs/5.7/database#running-queries)
* [Database Transactions](https://laravel.com/docs/5.7/database#database-transactions)