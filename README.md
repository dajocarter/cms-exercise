# Eaze CMS Engineer Homework
The purpose of this exercise is to help the Eaze Engineering team get a feel for your technical skill level.

The end goal of the project is to build a system for writers to integrate GIFs into their articles. Writers should be able to search for GIFs directly in the WordPress editor. The articles are going to be rendered in a custom frontend (using React/Angular/Vue) that uses the WordPress API to fetch the content.

This exercise is divided into two parts:
- Set up and customize WordPress.
- Build a frontend for the data provided by the WordPress Rest API.

## WordPress Exercise
1. You’ll need to get a WordPress development environment set up on your local machine.
2. Use the provided template XML at [`<root>/template.xml`](template.xml) to seed your database instance.
3. Set up the editor so that writers will have the ability to select a GIF to include in an article.
    - The writer should should be able to:
        - Search for a list of GIFs.
        - Select one of the GIFs in the list to add it to the article.
    - The GIFs should be fetched using the Giphy API.
    - The writer should be able to select the GIF through the WordPress editor.
4. Set up a frontend interface to view the articles with their associated GIFs.
    - We've provided a small boilerplate React app generated with [create-react-app](https://github.com/facebook/create-react-app). Feel free to change this to a framework of your choice. This should have basic routing and make it easy to view the different articles.
5. Upload your project to a Git repository. We prefer Github but Bitbucket works as well.

## Evaluation
Assume that we will have a local instance of WordPress running at the root level of the directory, running on port 8888. The frontend app will also be at root level so make sure to have your paths set up correctly.

```shell
root/               # → Root folder for the project
  ├── wp/           # → Local WordPress Core (Running on port :8888)
  ├── template.xml  # → Seed for database
  └── frontend/     # → React client app
```

The frontend boilerplate provided starts using `[npm|yarn] install` and `[npm|yarn] start`. Make sure that your frontend app is able to do the same.

## Optional improvements
We strongly encourage you to pick a couple of optional improvements. The following are just some ideas, so if none of these interest you, feel free to do something that isn’t on this list:
  - Show off your CSS on the frontend and design skills.
  - Think of your development environment and how it will scale.
  - Allow writers to include more than one GIF with editable ordering.
  - Show off your UX skills and make really intuitive for writers to select a GIF.

## Coding at Eaze
- At Eaze we strive for writing simple, maintainable and clean code.
- We prefer simplicity and over complexity.
- We comment our code and commit often.
- We love our users and we really care about providing a good user experience and pleasant UI.
- We encourage out of the box thinking and we love to be impressed.

