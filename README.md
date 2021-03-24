AskBob Skills Viewer app

A progressive web app that allows users to view the skills available on your
AskBob voice assistant. Make sure your Askbob voice assistant is running and
then enter the end point into the search input of this app. Remember to include
the correct path to the skills (usually /skills).

You can also add the endpoint as a search parameter in this app and the skills
will be fetched from that link. Enter the search parameter as following
/?url=ENDPOINT

where ENDPOINT is the full url that the Askbob Voice Assistant skills api is
pointing to. (usually https://localhost:8000/skills)

You may need to disable CORS on your Askbob voice Assistant

# How to deploy

Here is a website that explains how to deploy a React app. If this guide isn't
sufficient, this should help.

https://create-react-app.dev/docs/deployment/

## How to deploy Local Deployment

### Get node and npm

Install node and npm at this website - https://nodejs.org/en/ The latest version
should work but if not install node version 14.15.0 and npm 6.14.5 Install

### install dependencies

At the base directory, type this command:

```bash
npm install
```

This will install all the dependencies needed to deploy the app.

### Create build folder

After all dependencies have been built, run this command:

```bash
npm run build
```

This should create a build folder.

### Deploy locally

Install serve globally by entering this command:

```bash
npm install -g serve
```

Then, to serve the build folder, enter this in the command line:

```bash
serve -s build
```

Congratulations! Your app should be running now

# Run in development if serve isn’t working

If you want to run in development mode type this command in the command line:

```bash
npm start
```

The app is now running locally in development mode at “https://localhost:3000”

# Hosting on Netlify

If you deploy on a hosting website, after the build folder has been made, you
can deploy it on any hosting website. Here’s how to deploy on netlify.

### Make an account for Netlify

Go to https://www.netlify.com/ and make an account

### Add a new site

Once logged in, click on the sites tab at the top of the page

scroll to the bottom and then drag the build folder into the white box that says
‘Want to deploy a new site without connecting to Git? Drag and drop your site
output folder here’

This will allow you to deploy the app using the build folder.

### Click on link

The app should be deployed and you should be redirected to a new page with the
deployment details. Click on the green link (the name should be a random) and
you will be taken to the website

# How to deploy

Here is a website that explains how to deploy a React app. If this guide isn't
sufficient, this should help.

https://create-react-app.dev/docs/deployment/

## How to deploy Local Deployment

### Get node and npm

Install node and npm at this website - https://nodejs.org/en/ The latest version
should work but if not install node version 14.15.0 and npm 6.14.5 Install

### install dependencies

At the base directory, type this command:

```bash
npm install
```

This will install all the dependencies needed to deploy the app.

### Create build folder

After all dependencies have been built, run this command:

```bash
npm run build
```

This should create a build folder.

### Deploy locally

Install serve globally by entering this command:

```bash
npm install -g serve
```

Then, to serve the build folder, enter this in the command line:

```bash
serve -s build
```

Congratulations! Your app should be running now

# Run in development if serve isn’t working

If you want to run in development mode type this command in the command line:

```bash
npm start
```

The app is now running locally in development mode at “https://localhost:3000”

# Hosting on Netlify

If you deploy on a hosting website, after the build folder has been made, you
can deploy it on any hosting website. Here’s how to deploy on netlify.

### Make an account for Netlify

Go to https://www.netlify.com/ and make an account

### Add a new site

Once logged in, click on the sites tab at the top of the page

scroll to the bottom and then drag the build folder into the white box that says
‘Want to deploy a new site without connecting to Git? Drag and drop your site
output folder here’

This will allow you to deploy the app using the build folder.

### Click on link

The app should be deployed and you should be redirected to a new page with the
deployment details. Click on the green link (the name should be a random) and
you will be taken to the website
