require("dotenv").config();
import app from "./src/app";

const onAppStarted = () => {
  console.log(`App running on ${port}.`);
};

const port = parseInt(process.env.PORT) || 8000;
app.listen(port, onAppStarted);
