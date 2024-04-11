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
router.post("/", (req, res) => {
  const { todos } = req.body;
  const taskName = todos[0];

  let queryText = `INSERT INTO "task" ("taskName") VALUES ($1)`;
  pool
    .query(queryText, [taskName])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

// PUT

router.put("/:id", (req, res) => {
  console.log(req.params);
  let queryText = `
  UPDATE "task" SET "isComplete" = NOT "isComplete"
  WHERE "taskid" = $1;
  `;
  pool
    .query(queryText, [req.params.id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

// DELETE
//DELETE

router.delete("/:id", (req, res) => {
  console.log("req.params", req.params);
  let queryText = `DELETE FROM "task" WHERE "taskid" = $1;`;
  pool
    .query(queryText, [req.params.id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("error in req.params.id", error);
      res.sendStatus(500);
    });
});

module.exports = router;
