require("dotenv").config();
const app = require("./src/app");
const { connection } = require("./src/db");
const PORT = process.env.PORT;

connection.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log('El servidor está escuchando en el puerto: ' + PORT);
    });
});