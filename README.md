<h1> Users app - backend 📱</h1>

<h2>
    Visualize and manage your users
</h2>

<h3>
  Built using Node.js, Express.js, and Docker
</h3>

# Cloning this repository

```
git clone https://github.com/pedromarquex/users-app-server.git
```


# ❗️ Requisites

To run this app, you need to have the following dependencies installed:
- [Node](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## 💻 Backend Server

<p>
  In this project we use:
</p>

- [Express.js](https://expressjs.com/) to handle the requests
- [TypeScript](https://www.typescriptlang.org/) for types
- [TypeORM ](https://typeorm.io/) for database management
- [Docker](https://www.docker.com/) for running the app
- [Docker Compose](https://docs.docker.com/compose/overview/) for running the app
- [CORS](https://enable-cors.org/) for allowing cross-origin requests
- [Multer](https://www.npmjs.com/package/multer) for file uploads
- [Tsyringe](https://www.npmjs.com/package/tsyringe) for dependency injection
- [UUID](https://www.npmjs.com/package/uuid) for generating unique identifiers
- [Crypto](https://www.npmjs.com/package/crypto) for generating random strings

### ⚡️ Start

To start the application server, run:

```
cd users-app-server

npm install
docker-compose up
```

### Requests

We provide an insomnia request file with the requests that you can use to test the application.
File named as `Insomnia_requests.json` at project root folder.
