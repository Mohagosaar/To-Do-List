const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

let person = {
  id: 1,
  name: "Mohamed Ali",
  tell: 555,
};

// GET
router.get("/", (request, response) => {
  response.json(person);
});
// router.get("/", (req, res) => {
//   pool.query("SELECT * FROM tasks", (error, results) => {
//     if (error) {
//       console.error("Error getting tasks:", error);
//       res.status(500).json({ message: "Server error" });
//     } else {
//       res.json(results.rows);
//     }
//   });
// });

// POST

// PUT

// DELETE

module.exports = router;
