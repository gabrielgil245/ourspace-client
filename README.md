# OurSpace Social Media Web Platform
## Project Description
In this social network, everyone is friends with everyone. This application is designed to handle multimedia consuming S3.

OurSpace Social Media Server/Backend: https://github.com/gabrielgil245/ourspace-server

## Technologies Used
- Angular 2+
- Bootstrap
- S3

## Features
### Users can:
- Register.
- Login/Logout.
- Reset their password (utilizing an email feature).
- Modify their information.
- Upload a profile picture (using AWS: S3).
- Search other people.
- Create a post.
  - Image(s) can be added to these posts (using AWS: S3).
- View his own profile.
  - Including posts.
- View others’ profile.
  - Including posts.
- See their feed.
  - Posts of everyone should show here.
  - Pagination should be implemented (only fetching 20 posts at a time).
- Like someone’s post.
  - Old school Facebook, only one type of like.

Todo-List:
- Add a YouTube link to their post.
  - Utilize a YouTube API to display it.
- Users get notifications.
- Deploy web application (web application initially deployed with complications)

## Getting Started
- git clone https://github.com/gabrielgil245/ourspace-client.
- npm install to install this application's packages.
- The server domain string is set to "http://localhost:9000"; it may be changed under services in the generic.service.ts.
- HTTP requests are made to a S3 bucket, go to the generic.service.ts to change the values that pertain to your S3 bucket.

## Usage
- [ng serve -o] to build and serve the application at http://localhost:4200.

## Contributors
### Roel Crodua
  - Assembled the edit-user info and user-login page components.
  - Developed the navbar component, while implementing structural binding, based if the user was logged in or not.
  - Developed the reset and forgot password components, including its display and functionality.
  - Designed most of the display using Bootstrap and CSS.
Added posted date to display along with the post.
### Gabriel Gil
  - Assembled page layouts for when the user forgot their password, and when the user visits a profile page.
  - Devised the search bar to navigate the user to the a user's profile page based using a user's username.
  - Populated the user profile page with posts based on query params.
### Jack Gildea
  - Persisted new user information to the database.
  - Retrieved data from database to populate user dashboard of posts.
  - Added the functionality to create a post by the user with the option of including an image in the post.
  - Utilized AWS S3 services to save images used for image posts and profile pictures.
  - Implemented the ability to "Like" a post and updated the total likes in real time.
  - Utilized Modal to display which users had "Liked" a post.
  - Promoted increased user interaction with the ability to add comments.
