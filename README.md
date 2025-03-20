# Readme

## Piazza

Piazza is a social network app developed using Node.js and MongoDB. This application allows users to register, log in, and create posts. However, only users that have already been registered and logged-in can create, update, and delete their posts. 

## API Endpoints documentation

- POST [localhost:3000/api/user/register](http://localhost:3000/api/user/register) - This endpoint is for the user to register and create his/her account. It returns the user’s name, email, password (encrypted), and his/her id.
- POST [localhost:3000/api/user/login](http://localhost:3000/api/user/login) - This endpoint is for the user to login into his/her account. From this, you get a secret key that the user needs in order to create a post, update, or delete a post.
- POST [localhost:3000/api/posts](http://localhost:3000/api/posts/) - This endpoint is where the user can create a post. This endpoint requires authentication and it’s unique to the user.
- GET [localhost:3000/api/posts](http://localhost:3000/api/posts/) - This endpoint is where the user can get and see all the posts that have been created. It is publicly available for any user.
- GET [localhost:3000/api/posts/:id](http://localhost:3000/api/posts/:id) - This endpoint is where the user can get and see a single post by the ID of the post. It is publicly available for any user
- PUT [localhost:3000/api/posts/:id](http://localhost:3000/api/posts/:id) - This endpoint is for the user to update a post that has been created. However, only the post creator can update the post, therefore the user secret key is needed to update a post.
- DELETE [localhost:3000/api/posts/:id](http://localhost:3000/api/posts/:id) - This endpoint is for the user to delete a post that has been created. However, only the post creator can delete the post, therefore the user secret key is needed to delete a post.

## How to run

To run Piazza:

- Type npm start in the terminal
- In Postman, write the path (always starts with [localhost:3000/](http://localhost:3000/api/posts/:id)) and be sure to use the correct method (POST for creating a post or logging in/registering, GET for getting a post, PUT for updating a post, DELETE for deleting a post)
- In Postman you can see the results, but you can also go to MongoDB and see in the PiazzaApp database the collections and see if the users and posts are correctly added.
- To stop the program from running, simply type CNTRL C.

# Screenshots

Screenshot for user registration:

![Screenshot 2025-03-20 143137.png](Screenshot_2025-03-20_143137.png)

Screenshot for user login: 

![Screenshot 2025-03-20 143241.png](Screenshot_2025-03-20_143241.png)

Screenshot for creating a post:

![Screenshot 2025-03-20 143327.png](Screenshot_2025-03-20_143327.png)

Screenshot for fetching all posts:

![Screenshot 2025-03-20 143448.png](Screenshot_2025-03-20_143448.png)

Screenshot for updating a post: 

![Screenshot 2025-03-20 144528.png](Screenshot_2025-03-20_144528.png)

Screenshot for fetching a single post: 

![Screenshot 2025-03-20 144619.png](Screenshot_2025-03-20_144619.png)

Screenshot for deleting a post: 

![Screenshot 2025-03-20 144727.png](Screenshot_2025-03-20_144727.png)

# Link to Github
https://github.com/juanpirubero/PiazzaApp
