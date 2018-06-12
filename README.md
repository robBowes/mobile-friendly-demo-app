# Mobile Friendly Demo App
## Styled with Google Material Design Lite Library

This is a demo to show a mobile friendly app displaying information from http://jsonplaceholder.typicode.com.

This app offfers the following features:

  * Authenticate using username only, you can use Bret or Antonette
  * Displays a list of the authenticated users posts and albums
  * Clicking on any post will bring you to a list of the comments on that post
  * The ability to leave a new comment on a post
  * Clicking on an album will bring you to a list of the photos in that album
  * Search for any other user
  * Clicking on the user will bring you to the users profile, you can click on their posts and leave a comment

A live demonstration of this app can be found at https://mdl-demo-app.herokuapp.com or you can clone this repository and run it yourself using `npm start`

### Technical stuff
#### What I am proud of...

  * This app was written in React, using Redux to manage a global state
  * Because of the global state, even though there is no two way backend communication, posting new comments appears persistent during a browsing session
  * The global state allows for caching of content to speed up browsing on slow connections, although this has not been fully implemented yet
  * Where possible I have used reusable code, and I have tried to embrace immutability and the functional style of programming