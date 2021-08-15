# Book Tracking App

Book Tracking App is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read.

The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

This project can be used to search for book titles and store them on different shelves depending on what you are currently reading, what you have read and what you would like to read.

## App Functionality

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

- Currently Reading
- Want to Read
- Read

## To Get Started:

### Install dependencies

```
$ yarn install
```

### Compiles and hot-reloads for development

```
$ yarn start
```

### Compiles and minifies for production

```
$ yarn build
```

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Demo

Check the project [here](https://seliana-travel-app.netlify.app).
