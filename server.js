const express = require("express");
const cors = require("cors");

const makeServer = () => {
  const app = express();
  const router = express.Router();
  app.use(express.json());
  app.use(cors());
  app.use("/api", router);

  const port = 1337;
  app.listen(
    port,
    console.log(`Server running on http://localhost:${port}//api`)
  );
  return { app, router };
};

module.exports = { makeServer };
