require("dotenv").config();
const app = require("./src/app");

const onAppStarted = () => {
  console.log(`App running on ${port}.`);
};

const port = parseInt(process.env.PORT) || 8000;
app.listen(port, onAppStarted);
