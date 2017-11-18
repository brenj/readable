Readable: A Content and Comment Web App
=======================================

About
-----
From Udacity:
> Leverage the strengths of Redux to build a “Readable” application where
users can post text content and comment on each other's posts. You’ll build
this dynamic application from scratch while combining the state management
features of Redux with the declarative component model from React. When
complete, you’ll be able to submit your own posts, comment on existing posts,
and edit and delete posts and comments.

Supporting courses:
  * React & Redux

Requirements
------------
* Node
* Node Package Manager (npm)

Quickstart (*nix only)
----------------------
* `wget https://raw.githubusercontent.com/brenj/readable/master/bootstrap-readable.sh && bash bootstrap-readable.sh`

Install
-------
1. `git clone --recursive https://github.com/brenj/readable.git && cd readable`
2. `npm install`
3. `npm start`

Code Quality
------------
This code base adheres to the [Airbnb JavaScript/React/JSX Style Guide](https://github.com/airbnb/javascript)  
Use `npm run lint` to check syntax and style.

Code Organization (src)
-----------------------

```console
src/
├── action
│   ├── actions.js
│   ├── creators.js
│   └── index.js
├── api
│   ├── index.js
│   └── methods.js
├── component
│   ├── App
│   │   ├── app.css
│   │   └── index.js
│   ├── Alert
│   │   ├── alert.css
│   │   └── index.js
│   ├── Comment
│   │   ├── comment.css
│   │   └── index.js
│   ├── CommentForm
│   │   ├── comment-form.css
│   │   └── index.js
│   ├── CommentLister
│   │   └── index.js
│   ├── Heading
│   │   ├── heading.css
│   │   └── index.js
│   ├── LabeledInput
│   │   └── index.js
│   ├── LabeledSelect
│   │   └── index.js
│   ├── NavBar
│   │   ├── index.js
│   │   └── navbar.css
│   ├── NavLinks
│   │   ├── index.js
│   │   └── nav-links.css
│   ├── Post
│   │   ├── index.js
│   │   └── post.css
│   ├── PostForm
│   │   ├── index.js
│   │   └── post-form.css
│   ├── PostLister
│   │   └── index.js
│   ├── Root
│   │   └── index.js
│   ├── Sorter
│   │   ├── index.js
│   │   └── sorter.css
│   └── VoteBox
│       ├── index.js
│       └── vote-box.css
├── index.css
├── index.js
├── reducer
│   ├── activeSort.js
│   ├── comments.js
│   ├── index.js
│   └── posts.js
├── registerServiceWorker.js
├── selector
│   └── index.js
├── store
│   └── index.js
├── util
│   ├── index.js
│   └── languages.js
└── view
    ├── Error
    │   ├── error-view.css
    │   └── index.js
    ├── Home
    │   ├── home-view.css
    │   └── index.js
    ├── Language
    │   └── index.js
    └── Post
        ├── index.js
        └── post-view.css

7 directories, 51 files
```

Grading (by Udacity)
--------------------

Criteria           |Highest Grade Possible  |Grade Recieved
-------------------|------------------------|--------------
Application Setup  |Meets Specifications    |
State Management   |Meets Specifications    |
Code Functionality |Meets Specifications    |
