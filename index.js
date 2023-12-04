// const express = require("express");
// const bodyParser = require("body-parser");
// const pg = require("pg");

// const app = express();
// app.use(bodyParser.json());

// // Подключение к базе данных
// const client = new pg.Client({
//   user: "root",
//   host: "localhost",
//   database: "Express_JS",
//   password: "root",
//   port: 5432,
// });

// client.connect((err) => {
//   if (err) {
//     console.error("Error connecting to database:", err.stack);
//   } else {
//     console.log("Connected to database");
//   }
// });

// // Обработчик маршрута для создания нового пользователя
// app.post("/users", (req, res) => {
//   const { name, email, age } = req.body;

//   const query = {
//     text: "INSERT INTO users(name, email, age) VALUES($1, $2, $3)",
//     values: [name, email, age],
//   };

//   client.query(query, (err, result) => {
//     if (err) {
//       console.error("База данных не подключена:", err.stack);
//       res.status(500).send("Error inserting user into database");
//     } else {
//       res.send("User created successfully");
//     }
//   });
// });

// // Запуск сервера
// app.listen(3000, () => {
//   console.log("Server started on port 3000");
// });
