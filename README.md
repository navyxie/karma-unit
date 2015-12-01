# karma unit test demo

## install

- npm install 

- npm install -g karma

- npm install -g http-server.
**attentsion**

  Cannot find plugin "karma-chrome-launcher" or Cannot find plugin "karma-firefox-launcher".

```js
npm install karma-firefox-launcher --save-dev --link
npm install karma-chrome-launcher --save-dev --link
```

## run test

karma start karma.conf.js

## access single app

1 http-server app

2 open browser , locate to 127.0.0.1:8080/page/login

3 enter name : karma , password:test.

4 clear input(ng-model="name") , filter list.

### how to test jquery with jasmine in karma ?

- Your js source code must be can be access in window, why?(karma will execute the sciprt before the fixture load in browser, so such as dom bind event will not fire.)

- example:app/src/login.js

