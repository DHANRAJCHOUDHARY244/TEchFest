const db = require('../connect/connect')
const express = require('express')
const router = express.Router()


router.post ('/con', async (req, res) => {
  const {name, email,message} = req.body;
  const sql = `INSERT INTO contact (name, email,message) VALUES (?, ?, ?)`;
  db.run (
    sql,
    [name, email,message],
    function (err) {
      if (err) {
        console.error (err.message);
        return;
      }
      console.log (`A row has been inserted with rowid ${this.lastID}`);
    }
  );
  res.json ({message: 'Data inserted successfully'});
});

module.exports = router
