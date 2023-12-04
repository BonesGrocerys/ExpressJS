// module.exports = User;
const Sequelize = require("sequelize");

const db = require("../db.js");
db.authenticate().catch((error) => console.error(error));
const User = db.define("user", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

db.sync().then(() => {
  console.log("Database synced");
});

module.exports = User;
