# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: The foreign key will be inside of the Sightings model. And the key will be called "animal-id". The Sighting model will have a "belong_to" relationship with the Animal model.

  Researched answer:

has many
Useful for describing 1:n or n:n relationships. Using the 1:n relationship, we are looking at a single object and looking at the 1 or more other objects related to the first object.

A parking garage has many cars parked within it.
The primary object has many secondary objects.
The primary key has many foreign keys (linking the primary entry to many other entries in other tables.)

belongs to
Useful for describing 1:1 or n:1 relationships (note that n:1 is the reverse of 1:n, so you're looking at the relationship in the opposite direction.)

A car belongs to the parking garage.
The secondary object belongs to the primary object.
In the n:n case:
The foreign key is referenced by / belongs to the primary key.


2. Which RESTful routes must always be passed params? Why?

  Your answer: All RESTful routes except for new, index and create need params. All the other routes need information in order for them to actually make an action or run a method. The rest of the RESTful routes; show, edit, destroy, update. They all need an id to go by in order for them to actually run. If you wanted to show something what are you going to show specifically? Same thing applies with the rest of the RESTful routes that need params. 

  Researched answer: 

  In RESTful APIs the path parameters are used to identify a resource (client, order, blog post etc). This resource is often a record in some database. Some database tables have composite keys e.g if you have a system that stores data about the employees of several different clients then there might be entries in your database.


HTTP Verb	Path	action	used for
GET	/photos	index	display a list of all photos
GET	/photos/new	new	return an HTML form for creating a new photo
POST	/photos	create	create a new photo
GET	/photos/:id	show	display a specific photo
GET	/photos/:id/edit	edit	return an HTML form for editing a photo
PUT	/photos/:id	update	update a specific photo
DELETE	/photos/:id	destroy	delete a specific photo



3. Name three rails generator commands. What is created by each?

  Your answer: Resource, model, migration, controller.
  Resource: Will create a model with all routes. All migratins and controllers all ready to go
  Model: This will allow you to make a new table in a database will columns and what kind of data type you want in the model. 
  Migration: Will allow you to add a column to a previous model
  Controller: Will allow you to create logic that will work hand in hand with the view and database

  Researched answer:

  Resource:You enter the name of the resource you want to create along with the table column names and types. You can even assign foreign keys in this line of code so that you save time. Generating a resource does everything generating a model does, but it also creates a resource in the routes.rb file and an empty folder in the views.

  Model:Model is a Ruby class that can add database records (think of whole rows in an Excel table), find particular data you're looking for, update that data, or remove data. These common operations are referred to by the acronym CRUD--Create, Remove, Update, Destroy.

  Migration:Migrations are a convenient way to alter your database schema over time in a consistent way. They use a Ruby DSL so that you don't have to write SQL by hand, allowing your schema and changes to be database independent.

  Controller: Inside the controller, we define what we want to happen when a method is reached. Now we can add methods to the controller file that was created in the generate command.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /users          index

method="GET"    /users/1        show

method="GET"    /users/new      new

method="GET"    /users/edit/1   edit

method="POST"   /users/         create

method="PUT"    /users/1        update

method="DELETE" /users/1        destroy



5. As a developer, you want to make an application that will help you manage your to do list. For the MVP, you want to create just the user's view. Create 10 user stories that will help you get your application started. 


As a user I want to see all the entries in the database (index)

As a user I want to see a specific entry in the database

As a user I want to go to a specific entry's page when I click on it in the index page

As as user I want to add another entry into the database

As a user I want to see the entry I made in the main page (index)

As a user I want to see my new entry included in the list of all entries

As a user I have realized I made a typo and there are also some other typos in other entrie. I want to be able to fix/update those typos

As a user whenever I go into a specific entry's page I want to be able to go back to the homepage using a link the specific entry's page

As a user I want to get rid of a couple entries in the database.

As a user when I go into a specific entry's page I want to see some additional information about the entry page I am on
