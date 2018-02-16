# libAdm
Application for management of a library using AngularJS, Express JS, Node JS, MongoDB, among other technologies, which consists of a server-side (accessible via REST API) and of a client side.

__Author:__ Levindo Gabriel Taschetto Neto.


## Used Technologies

### Front-End

* HTML v5.
* CSS v3.
* [Bootstrap v3.3.7](http://getbootstrap.com/).
* [Font Awesome toolkit](http://fontawesome.io).

### Back-end

#### Framework(s)
* [ExpressJS](https://expressjs.com).

#### Parsing Middleware
* [Body-Parser](https://www.npmjs.com/package/body-parser).

#### Database
* [MongoDB](https://www.mongodb.com).

#### Object Modeling Tool
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

### For automatically restarting the server on changes

```terminal
$ npm install -g nodemon
```

## How to start

```terminal
$ node app
```

Thus, the app may be accessed on [http://localhost:8000](http://localhost:8000).

## How to use

### RestAPI

#### Using an app/extension for constructing app requests

##### Add a book (with an object element)

POST HTTP/1.1
__URL:__ localhost:8000/api/books/

###### Request body
```terminal
{
	"title": "A book",
	"category": "romance",
	"numberOfCopies": "40",
    "numberOfAvailableCopies": "20"
}
```

##### Get all books

GET HTTP/1.1
__URL:__ localhost:8000/api/books/

##### Get an specific book (by its id)

GET HTTP/1.1
__URL:__ localhost:8000/api/books/ID_BOOK

#### Edit a book (by its id and with an object element)

PUT HTTP/1.1
__URL:__ localhost:8000/api/books/ID_BOOK

###### Request body
```terminal
{
	"title": "A book",
	"category": "romance",
	"numberOfCopies": "40",
    "numberOfAvailableCopies": "20"
}
```

#### Remove a book (by its id)

DELETE HTTP/1.1
__URL:__ localhost:8000/api/books/ID_BOOK

## License

MIT License. Click [here](LICENSE.md) for more information about this license.