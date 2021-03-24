AskBob Skills Viewer app

A website for viewing the skills available on your AskBob program

How to deploy Local Deployment

Get node and npm Install node and npm at this website - https://nodejs.org/en/
The latest version should work but if not install node version 14.15.0 and npm
6.14.5 Install build dependencies At the base directory, type this command:

```bash
npm install
```

This will install all the dependencies needed to deploy the app Create build
folder After all dependencies have been built, run this command:

```bash
npm run build
```

This should create a build folder. Deploy locally Install serve globally by
typing

```bash
npm install -g serve
```

In the command line, enter:

```bash
serve -s build
```

Run Development If serve isn’t working, type enter

```bash
npm start
```

in the command line to run the app locally in development mode at
“https://localhost:3000”

Hosting on Netlify deploy on a hosting website After the build folder has been
made, you can deploy it on any hosting website as well. Here’s how to deploy on
netlify.

Make an account for Netlify Go to https://www.netlify.com/ and make an account
Add a new site Once logged in, click on the sites tab at the top of the page

scroll to the bottom and then drag the build folder into the white box that says
‘Want to deploy a new site without connecting to Git? Drag and drop your site
output folder here’

This will allow you to deploy the app using the build folder. Click on link The
app should be deployed and you should be redirected to a new page with the
deployment details. Click on the green link (the name should be a random) and
you will be taken to the website
