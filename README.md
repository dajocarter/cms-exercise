# Eaze CMS Engineer Homework

The purpose of this exercise is to help the Eaze Engineering team get a feel for your technical skill level.

The end goal of the project is to build a system for editors to integrate GIFs into their articles. Editors should be able to search for GIFs directly in the WordPress editor. The articles are going to be rendered in a custom frontend to render the selected GIFs.

This exercise is divided into two parts:

- Build a data entry UI that gives the editor the ability to search and choose the GIFs of their choice into a post.
- Render the GIF(s) in a layout.

## Instructions

My submission is the [`<root>/plugins/tinymce-giphy`](plugins/tinymce-giphy) directory with the frontend in the [`<root>/frontend`](frontend) directory with instructions for that at [`<root>/frontend/README.md`](frontend/README.md).

This repo can be cloned as the `wp-content` folder of your local WordPress environment.

## WordPress Exercise

1. You’ll need to get a WordPress development environment set up on your local machine.
2. Use the provided template XML at [`<root>/template.xml`](template.xml) to seed your database instance.
3. Set up the editor so that editors will have the ability to select a GIF to include in an article.
   - The writer should should be able to:
     - Search for a list of GIFs.
     - Select one of the GIFs in the list to add it to the article.
   - The GIFs should be fetched using the Giphy API.
   - The writer should be able to select the GIF through the WordPress editor.
4. Build an interface to view the articles with their associated GIFs.
5. Upload your project to a Git repository. We prefer Github but Bitbucket works as well. Please don't fork this repo.

## Evaluation

We should be able to run your app by dropping your submission in our local environment. Please account for any explicit instructions and consider your paths and ports when developing. We prefer the submissions to either be in plugin form or by the addition of a custom theme. If you prefer the latter we have provided a starter theme for your use.

Please do not submit a WordPress instance.

## Optional improvements

We strongly encourage you to pick a couple of optional improvements. The following are just some ideas, so if none of these interest you, feel free to do something that isn’t on this list:

- Show off your UX skills and make the data entry really intuitive for editors to select and add a GIF.
- Allow editors to include more than one GIF with editable ordering.
- Show off your animation skills!
- Implement a decoupled front end by using the WordPress REST API and your framework of choice. We use react for our FE but feel free to use the framework of your choice 😉.

## Coding at Eaze

- At Eaze we strive for writing simple, maintainable and clean code.
- We prefer simplicity over complexity.
- We comment our code and commit often.
- We love our users and we really care about providing a good user experience and pleasant UI.
- We encourage out of the box thinking and we love to be impressed.
