# Mod-5-Final-Project-NK

**Modular**

Modular is a website that provides a platform for users to get ideas for home renovation and design and to connect homeowners to professionals. 


**User Stories**

As a user, I want to be able to create an new account
As a user, I want to be able to login to my account
As a user, I want to be able to see my user info in the dashboard
As a user, I want to be able to see my saved ideas, contacts in the dashboard
As a user, I want to be able to remove my saved ideas, contacts from the dashboard to keep it organized
As a user, I can explore/browse home renovation ideas
As a user, I can browse contractors near me 
As a user, I can add a image with description
As a user, I can find an image based off filters


**Models and Relationships**
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

**API**

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

**Wireframe**

Another Wireframe

Contact info and other stuff
Put anything else you want here!
