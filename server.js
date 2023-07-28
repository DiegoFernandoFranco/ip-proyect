const express = require('express');

const requestIp = require('request-ip');

const app = express();

app.use(requestIp.mw());

app.get('/', (req, res) => {
  const ip = req.clientIp;
  res.send(`Your IP address is ${ip}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
