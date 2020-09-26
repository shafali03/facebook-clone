# Facebook clone

[Facebook clone](https://facebook-clone-bfbba.web.app/)

A Facebook clone using React Hooks for the front end and firebase google sign in for authentication. For the backend used Firebase realtime database.
As a new user, you will need a Google Gmail account for login. Once you have logged in, you can post messages and images by copying the image address.

<img src='https://res.cloudinary.com/shafali/image/upload/v1601122412/facebook_qgprgi.gif'>

### Packages installed

```
sudo npm install -g firebase-tools
yarn add @material-ui/core
yarn add @material-ui/icons
```

### Steps to deploy to firebase

```
1. sudo npm i -g firebase-tools
2. firebase login  (login automatically select google account)
3. firebase init
4. Hosting: Configure and deploy Firebase Hosting sites (Select by pressing space bar then pressed enter)
5. Use an existing project (Select existing project)
6. Select the project (example: facebook-clone-ce2ab )
7. What do you want to use as your public directory? build
8. Configure as a single-page app (rewrite all urls to /index.html)? (y/N) y
9. yarn build
10. firebase deploy
```

### Tech Used

* React Hooks
* CSS
* Firebase for deployment
* Firebase Realtime Database
* Material ui icons
* Firebase | Google Sign In | Authentication
