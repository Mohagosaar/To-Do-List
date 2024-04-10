const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

router.get("/", (request, response) => {
  console.log("testing get");
  let queryText = `SELECT * FROM task ORDER BY taskid;`;
  pool
    .query(queryText)
    .then((result) => {
      response.send(result.rows);
    })
    .catch((error) => {
      console.log("error in query", error);
      response.sendStatus(500);
    });
});

// POST

// PUT

// DELETE

module.exports = router;
