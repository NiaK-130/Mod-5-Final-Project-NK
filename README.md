# Mod-5-Final-Project-NK

**Sweet Project Title**

This is the part where I tell you about the project. The "pitch", if you will. I'm giving you a high level overview of what the project does, and why I decided to build it. This doesn't have to be extensive, just a quick overview.

This is the repo for, say, the frontend of the app. It's hosted here and the backend repo is here.

User Stories

As a user, I want to be able to create an account, so I can log in and use the app.
As a user, I want to be able to see my user info, so etc etc etc
As an editor, I want to be able to do an admin thing, so I can etc etc
(Have one story for each feature you plan to include—even small features are great to list here, so feel free to get granular with it. You'll probably be making a new branch for each of these, right?)

Models and Relationships
This is a good place for a sweet diagram:

My Data Relationships

User
A User has many Pickles, and so on and so forth

id
username
password_digest
firstname
lastname
birthday
favorite color
Pickle
A Pickle belongs to a User, and so on

id
variety
weight
price
description
API
Here's where you want to describe each API endpoint you're building/using. You can put this in your front end repo, your back end repo, or both.

GET /api/users
Returns a list of all users. Response JSON looks like this:

{ 
  id: 111,
  username: "johndoe",
  firstname: "John",
  lastname: "Doe",
  etc: "etc"
}
POST /api/users
Creates a new user. Say more about that here. Send this data:

{ this is what it takes as data }
And this is what it returns:

{ this is what you get back }
Wireframe / Mockup
Put your sweet wireframes and mockup images here. Probably only goes in the front end repo.

Wireframe

Another Wireframe

Contact info and other stuff
Put anything else you want here!
