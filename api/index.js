require("dotenv").config();
const app = require("./src/app");
const { connection } = require("./src/db");

connection.sync({ force: true }).then(() => {
    app.listen(3001, () => {
        console.log('El servidor está escuchando en el puerto: ' + 3001);
    });
});