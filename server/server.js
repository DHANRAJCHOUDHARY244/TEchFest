const express = require ('express');
const frontened = require ('express');
const registerRoutes=require('./routes/register')
const contactRoutes=require('./routes/contact')
const path = require ('path');
const app = express ();
const front = frontened ();
const port = process.env.PORT || 3001;
const cors = require ('cors');
const {exec} = require ('child_process'); // Import the exec function
const isWindows = process.platform === 'win32';

app.use (express.json ());
app.use (cors ());

app.use ('/api', registerRoutes);
app.use ('/api', contactRoutes);
front.use (express.static (path.join (__dirname, 'build')));

front.get ('*', (req, res) => {
  res.sendFile (path.join (__dirname, 'build', 'index.html'));
});
// Start the server
app.listen (port, () => {
  console.log (`Server is running on port ${port}`);

  // Open the browser when the server starts using the appropriate command
  if (isWindows) {
    exec ('start http://localhost:9999', (error, stdout, stderr) => {
      if (error) {
        console.error (`Error opening browser: ${error}`);
        return;
      }
      console.log (`Browser opened.`);
    });
  } else {
    exec ('open http://localhost:9999', (error, stdout, stderr) => {
      if (error) {
        console.error (`Error opening browser: ${error}`);
        return;
      }
      console.log (`Browser opened.`);
    });
  }
});

front.listen (9999, () => {
  console.log ('frontend is running on 9999');
});
