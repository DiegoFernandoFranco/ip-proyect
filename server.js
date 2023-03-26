const express = require('express');
const ip = require('ip');

const app = express();

// Route to get the IP address of the user
app.get('/ip', (req, res) => {
  const ipAddress = ip.address();
  res.send(ipAddress);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
