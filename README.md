# Ecommerce Market place in React native


This is a react-native Android/iOS application for show products market place https://fakestoreapi.com/docs. User can Login, browse products, search for products, add to cart and checkout products. 


This is developed on React-native with Redux architecture.

Other useful libraries used in this project are:- 
1. redux-logger for development purposes. 
2. redux-thunk for handling async calls. 
3. react-native-web to coonvert native UI to web UI. 
4. react-native-testing library to test react native app along with jest.

#### Future enhancement 
1. Web Project set up for navigation and state management and make compatible all UI from RN native to web. 
2. Render products per catogories on categories list. 
3. Realm to read/write token value instead of local storage(Currently only writeable but issuing while reading it).


## Getting Started

### React-native environment set up

```
 follow official website of react-native for setting up react-native environment in to your machine.

https://facebook.github.io/react-native/docs/getting-started.html 
```

* Make sure `nodejs` and `yarn` are installed
* clone the repo `git clone https://github.com/Nasirilahi/notch.git`
* move into the project directory
* Run `yarn` or `npm install` to install the dependencies
* Run `npx react-native link` command to link all binaries files

 After installing dependencies run your package server.


#### For Android
```
$  yarn android
```
#### For iOS

```
$ yarn ios
```

#### For web

```
$ yarn start:web
```


Note1:- Right now web is not configured to show all projects but only to show how RN view can be reused in web app. 
Note2:- Once app is successfully is running then this app can be used to check username/password to login in to the app 'https://fakestoreapi.com/users'


Below are the screenshots for home page, checkout and empty checkout screen in Android view. 
![Home](https://user-images.githubusercontent.com/18344021/157851657-8414acde-7bd6-42a6-8839-6534729a18be.png)
![Checkout](https://user-images.githubusercontent.com/18344021/157851685-4f3cc7a9-9fa6-4fac-9266-a13aab3cd49f.png) 
![emtpycheckout](https://user-images.githubusercontent.com/18344021/157851785-94cd69eb-5e00-4567-9a14-0b8308580dce.png)

