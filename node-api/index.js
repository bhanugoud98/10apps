const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: "Node.js API is running!",
    uptime: process.uptime(),
    timestamp: Date.now()
  });
});

app.listen(PORT, () => console.log(`Server on port ${PORT}`));