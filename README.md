# Nest + MySQL

1. Install dependencies via `yarn` or `npm install`
2. Create database schema via `mysql-shema.sql` dbName : `orm-nest-mysql`
4. Run via `yarn start` or `yarn start:dev` (nodemon)
5. Example API is running on http://localhost:3000

Available routes:

```
GET     /user        finds all user
GET     /user/:id    finds user by id
POST    /user        creates new user
PUT     /user/:id    updates user by id
```

```
GET     /car          finds all car
GET     /car/:id      finds car by id
POST    /car          creates new car
PUT     /car/:id      updates car by id
```
