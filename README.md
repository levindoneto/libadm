# libAdm
Rest API for management of a library using Express JS, Node JS, MongoDB, among other technologies.

__Author:__ Levindo Gabriel Taschetto Neto.

## Used Technologies

### Framework(s)
* [ExpressJS](https://expressjs.com).

### Parsing Middleware
* [Body-Parser](https://www.npmjs.com/package/body-parser).

### Database
* [MongoDB](https://www.mongodb.com).

### Object Modeling Tool
* [Mongoose](http://mongoosejs.com).

### Linter
* [ESLint v4.1.1](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

## Requiremens for the deployment

### On Windows OS*
* [Node JS](https://www.npmjs.com/get-npm)
* [MongoDB](https://www.mongodb.com) (See [here](docs/mongodbSetUp.md) how to set it up).

## How to deploy

```terminal
$ npm install
```

## How to start

```terminal
$ node app
```

Thus, the app may be accessed on [http://localhost:8000](http://localhost:8000).

## How to use the Rest API


### Using an app/extension for constructing app requests

#### Add a book (with an object element)

POST HTTP/1.1
__URL:__ localhost:8000/api/books/

##### Request body
```terminal
{
    "title": "A book",
    "category": "romance",
    "numberOfCopies": "40",
    "numberOfAvailableCopies": "20"
}
```

#### Get all books

GET HTTP/1.1
__URL:__ localhost:8000/api/books/

#### Get a specific book (by its id)

GET HTTP/1.1
__URL:__ localhost:8000/api/books/ID_BOOK

#### Edit a book (by its id and with an object element)

PUT HTTP/1.1
__URL:__ localhost:8000/api/books/ID_BOOK

##### Request body
```terminal
{
    "title": "An edited book",
    "category": "suspence",
    "numberOfCopies": "40",
    "numberOfAvailableCopies": "19"
}
```

### List books with the same category (by the category)

GET HTTP/1.1
__URL:__ localhost:8000/api/books/categories/ID_CATEGORY

### Remove a book (by its id)

DELETE HTTP/1.1
__URL:__ localhost:8000/api/books/ID_BOOK

## License

MIT License. Click [here](LICENSE.md) for more information about this license.