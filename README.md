# Eaze Wordpress Front End Project

> Our Wordpress code challenge for engineering applicants

## Project

The purpose of this exercise is to help the Eaze Engineering team get a feel for your technical skill level. This exercise has two parts: The first being the setup of a CMS environment using the Wordpress [REST API](https://developer.wordpress.org/rest-api/) and a front-end framework of your choice (React, Vue, Angular, etc.).

For the frontend part of the exercise we've provided a small boilerplate React app generated with [create-react-app](https://github.com/facebook/create-react-app). Feel free to change this to a framework of your choice. In any case, please build a web page that displays some articles combined with a list of GIFs from Giphy.

## Wordpress Exercise

You’ll need to get a WordPress development environment set up on your local machine using the frontend web app. Once that is running, create different blog posts with the provided data. Each article will have some tags associated with it and we would like for the app to dynamically include some GIFs, that are pulled in by the Giphy API, inside the content of the blog post.

Users should have a good experience on the web app on desktop and mobile devices.

This exercise is pretty open ended in order to leave you some freedom to improve upon the base by focusing on what you like the most.

We strongly encourage you to pick a couple of optional improvements. The following are just some ideas, so if none of these interest you, feel free to do something that isn’t on this list:

- Show off your CSS and design skills!
- Animations are awesome! Show us what you got.
- Use your UX hat to think of a creative way of injecting the GIFs.
- Think of your development environment and how it will scale.

## Project Structure

Import the provided [xml file](https://github.com/eaze/cms-exercise/blob/master/template.xml), to generate content, and properly test your theme data.

```shell
root/        # → Root folder for the project
  ├── wp/    # → Local Wordpress Core (Running on port :8888)
  └── frontend/   # → React client app
```

## Evaluation

Assume that we will have a local instance of Wordpress running at the root level of the directory, running on port 8888. The react app will also be at root level so make sure to have your paths set up correctly.

Once the Wordpress instance is running locally the front-end should run by running the create-react-app start script, either yarn start or npm start. We’ll evaluate the exercise by assessing the end result and reviewing the code.


## Coding at Eaze

At [Eaze](https://www.eaze.com) we strive for writing simple, maintainable and clean code.

We prefer simplicity and over complexity.

We comment our code and commit often.

We love our users and we really care about providing a good user experience and pleasant UI.

We encourage out of the box thinking and we love to be impressed!
