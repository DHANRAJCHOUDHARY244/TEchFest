const db = require('../connect/connect');
const express = require('express');
const router = express.Router();

// ------------------------------------------

router.get('/reg', (req, res) => {
  const sql = `select * from  registration`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(rows);
    }
  }); 
});

// -------------------------

router.post('/reg', async (req, res) => {
  const { name, email, college_name, enroll, branch, pass_year, event_name, ph, message } = req.body;
  const sql = `INSERT INTO registration (name,email,college_name,enroll,branch,pass_year,event_name,ph,message) VALUES (?, ?, ?, ?,?,?,?,?,?)`;
  db.run(
    sql,
    [name, email, college_name, enroll, branch, pass_year, event_name, ph, message],
    function (err) {
      if (err) {
        console.error(err.message);
        return;
      }
      console.log(`A row has been inserted with rowid ${this.lastID}`);
    }
  );
  res.json({ message: 'Data inserted successfully' });
});
// ---------------------------


module.exports = router;
