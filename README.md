# Project Setup and API Usage Instructions

## Step 1: Clone the Repository

Use the following link to clone the repository:

git clone <replace-with-git-repo-link>

## Step 2: Install the Dependencies

Navigate to the project directory and install the necessary dependencies:

cd <project-directory>
npm install

## Step 3: Run the Local Server

Start the local server on port 3000:

npm run dev

## Step 4: Test the Server

To verify that the server has started correctly, send a GET request to:

http://localhost:3000/api/users/

You should receive the following response:

{
"test": true
}

## User Authentication and Management

### Login

To log in, send a POST request to:

http://localhost:3000/api/users/

with the following body:

{
"password": "replace-with-password",
"email": "replace-with-email"
}

The response will be in JSON format:

{
"request": true, // will be false if the email and password do not match
"userId": "669a241512b59cf576b90e3b" // userId will not be included if request is false
}

### Create User

To create a new user, send a POST request to:

http://localhost:3000/api/users/adduser/

with the following body:
{
"username": "replace-with-username",
"email": "replace-with-email",
"password": "replace-with-password"
}

The response will be in JSON format:

{
"request": true, // true when the user details are added successfully
"userId": "6xxx241xxx59cfxxxxbxxe3b" // returns the user ID
}
