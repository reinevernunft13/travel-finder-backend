# Travel Search Engine - Backend Challenge 🛫

This project is a solution to the 2023 *Vueling Tech Hack* challenge (back-end).
## 📓 Description

ℹ️ Build a **travel search engine** for an Online Travel Agency. The app must: 
    - take at least three letters to run the search.   
    - search for trips containing cities that match the text entered by the user.
    - support Middle East and Asian languages.

👉 Further details on functional and technical details, [here](https://nuwe.io/dev/competitions/vueling-tech-hack/travel-search-backend-challenge).

- As a **solution**, I've created a RESTful API in NodeJs, using:

    - **Express** -> for creating endpoints;
    - **MongoDB** -> as persistance;
    - **Mongoose** -> as ORM for managing MongoDB.

- The API defines one single endpoint, **GET /travels**, which returns the desired output. 

## 💻 Prerequsites

Before getting started, please make sure the following technology is installed in your system:

- [Node.js](https://nodejs.org/en/download/) 
- [NPM](https://www.npmjs.com/) 
- [MongoDB](https://www.mongodb.com/docs/manual/administration/install-community/)

## 👩‍💻 Getting Started 👇  
### 🛠️ Installing

> **Step 1** - Clone the project to your local machine using your preferred IDE:

```
gh repo clone reinevernunft13/travel-finder-backend

```

> **Step 2** - Install project dependencies via NPM:

```
npm install
```

### 🔐 Set Environment Variables 

> **Step 3** - Copy the .env-template file into a new **.env** file and fill in the values. 

### 🚀 Run the Project

> **Step 4** - Launch the project...

(production mode):
````
npm run start
````
or (dev mode using nodemon): 
````
npm run dev
````

⚠️ This will do **three** things: 
1. Start the server
2. Connect to a MongoDB server instance (e.g.running on localhost:27017) and use your db_name database, once it is created. 
3. Create a MongoDB database by initializing the 'travelpackages' collection. 
## 🧪 Testing

The output for each search input must follow a standard format. For example, by entering 'Mad' (and sending the request in the req.body):

```
{ "city_name": "Mad" }
````
The output should be:

````
Europe Popular Capitals; Land Trip; 3 days; Madrid, Paris, London; Hotel Best Madrid 3*, Hotel Worst Paris 4*
````


To test the API's endpoint, use [Postman](https://www.postman.com/) -- or your preferred API testing client. A postman collection with various 'http requests' can be found in folder '/postman'.














