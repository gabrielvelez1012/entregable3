const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require('./utils/database');
const initModels = require('./models/initModels');
const userRoutes = require('./routes/user.route')

initModels();

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const PORT = 8000;

db.authenticate()
    .then(() => {
        console.log("Database is connected");
    })
    .catch((error) => console.log(error));

    //Limpia la base de datos
    //db.sync({ force: true })
    //db.sync({ alter: true })

db.sync()
    .then(() => console.log("DataBase sync"))
    .catch((error) => console.log(error));    

app.use(userRoutes);

app.get('/', (req, res) => {
    res.send('Welcome users');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});