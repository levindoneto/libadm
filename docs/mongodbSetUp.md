# MongoDB

NoSQL cross-platform document-oriented database.

## Set MongoDB up for the first time

### Get MongoDB to run

1.  Go to the [MongoDB download center](https://www.mongodb.com/download-center).
2.  Click __Community Server__.
3.  Choose a version and click the button for installing the package.
4.  Run the downloaded _msi_ file in order to install the database.

### Configure the database to work as a service

#### Being in the folder where MongoDB has been installed
1.  Create a folder called __data__.
2.  Inside __data__, create a folder called __db__.
3.  Create a folder called __log__ in the folder __bin__.

#### Being in the folder __bin/__ where MongoDB has been installed, run the following command using the command prompt (wigh adminstrator rights):

##### MongoDB v3.6 or superior
Id does not use the flag _--rest_.
```terminal
$ mongod --directoryperdb --dbpath PATH_MONGODB\data\db --logpath PATH_MONGODB\log\mongo.log --logappend --install
```

##### In order to initialize MongoDB
```terminal
$ net start MongoDB
```

## Create the database locally

### Being in the folder __bin/__ where MongoDB has been installed, run the following command using the command prompt (wigh adminstrator rights):

```terminal
$ mongo
```

#### In the MongoDB's terminal

```terminal
> use libadm
> db.createCollection('books')
```








