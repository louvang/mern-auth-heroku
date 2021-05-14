# mern-auth-heroku

## 👉 [View Demo](https://mern-auth-heroku-demo.herokuapp.com/)

A MERN app boilerplate with authentication built for all-in-one deployment on Heroku.

Frontend client uses React which includes:

- Welcome page
- Register page with validation
- Login page
- Dashboard page (private route)
- Sass for styling

Backend client uses Express which includes:

- MongoDB connection, Mongoose model for user (name, email, password, date created)
- Authentication with [passport-local](http://www.passportjs.org/packages/passport-local/)
- API for user info

# How To Use

After cloning the repo, make sure you have the required modules by running `npm install` in both the project directory AND the _/client_ directory.

## Set up your .env

In the project directory, create a `.env` file to add your Mongo URI (from [MongoDB.com](https://www.mongodb.com/)) as well as a session secret (a string of letters and/or numbers). The code utilizes [dotenv](https://www.npmjs.com/package/dotenv) so your `.env` file should look like this:

```
MONGO_URI=yourMongoURI
SESSION=sessionSecret
```

## Run your development server

```
$ npm run dev
```

The code runs both servers simultaneously using [Concurrently](https://www.npmjs.com/package/concurrently). Simply run `npm run dev` in your Terminal while inside the project directory. React will run on http://localhost:3000 while Express will run on http://localhost:5000.

## Developing with authentication

In dev mode, [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware) module allows React to use relative links and references. Relative references beginning with `/api` will automatically go to localhost:5000. All other relative references will go to localhost:3000. It is recommended that your Express routes all start with `/api`. When developing in React, use relative references. You can configure this in the `setupProxy.js`.

Authentication is checked using a higher-order component located in `/src/components/wrappers`. The wrapper is implemented in the `/src/components/Routes.js` file. Simply use the wrapper function and pass the component as the argument. There are two wrappers:

- `redirectLoggedIn(Component)` - For routes that logged in users don't need to see. Redirects logged in users to the dashboard. Otherwise, renders the Component.
- `requireAuth(Component)` - For private routes. Redirects users who aren't logged in to the Login page. Otherwise, renders the Component.

# Heroku Deployment

## Option 1: Heroku Git (Heroku CLI)

You want to deploy the entire project so ensure that file changes and Terminal commands are for the project directory (which includes the `client` directory). We don't want to make these deployment preperations in the client directory.

1. In `/package.json`, ensure that you have your engines defined to your node and npm version. Also make sure you have your `start` script defined.

```
"engines": {
    "node": "14.16.1",
    "npm": "7.12.1"
  },
 "scripts": {
    "start": "node server.js"
  },
```

2. Make sure you have a `.gitignore` file that ignores your `node_modules` folder and your `.env` file when committing to Git!
3. Ensure that you have Heroku installed by running in your Terminal `heroku -v`. If no version pops up, download and install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).
4. Log in to [Heroku](https://www.heroku.com/). If you don't have one, create one. Click on New > Create New App.
5. Now in your Terminal while still in the project directory, run `heroku login`. You'll be directed to the browser to log in.
6. You'll need to initialize a git repo for your project. Run `git init` to initialize your project. Then run `heroku git: remote-a <name-of-app-on-heroku>`.
7. In your app settings on Heroku.com, click on Settings and click on the `Reveal Config Vars` button. You want to put your environment variables here. Make sure you have your `MONGO_URI` and `SESSION` keys saved here.
8. You can now commit your code to the repo. Run `git add .` followed by `git commit -m "<Your commit message here>"`.
9. Finally, you will deploy your application with `git push heroku master`.
10. It will take a few minutes for your application to deploy but once that is completed, you can use `heroku open` to open your application in your browser.

Your app should now be deployed on Heroku and complete!

## Option 2: Github

Alternatively, you can push your application on GitHub and then connect your Heroku application to your Github account.

1. Simply create a new application and its name on Heroku and then select "GitHub" as your deployment method.
2. Click the `Enable Automatic Deploys` button if you want your application to be updated whenever you push updates to your repo on Github.
3. You'll be asked to connect to your GitHub account if you haven't already and then to select which repo and which branch to deploy.
4. Click on the `Deploy Branch` button and after a few minutes, your application should be deployed.

## Updating Your App

If you want to make further changes to your app, you can create subsequent deployments on Heroku just like you would commit and push your code to a repo:

1. `git add .`
2. `git commit -m "comment"`
3. If deployed via Heroku Git: `git push heroku master`.
   -- If deployed via GitHub, push your updates as normal: `git push`

# Resources

The following are tutorials that helped me create this boilerplate.

- [Stephen Grider's Node with React Course on Udemy](https://www.udemy.com/course/node-with-react-fullstack-web-development/)
- [Redux: Async Logic & Data Fetching](https://redux.js.org/tutorials/essentials/part-5-async-logic) | [Github Repo](https://github.com/reduxjs/redux-essentials-example-app/tree/tutorial-steps)
- [Redux JWT Auth Example](https://github.com/joshgeller/react-redux-jwt-auth-example)

# Todo

- [ ] Redirect user to previous private route after logging in
- [ ] Google authentication with [passport-google-oauth](http://www.passportjs.org/packages/passport-google-oauth/)
- [ ] Reset password email
- [ ] Verify account with email confirmation
