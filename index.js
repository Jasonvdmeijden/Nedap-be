const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = 3200;

app.use(bodyParser.json());

app.post('/users', (req, res) => {
  const { firstName, lastName, email } = req.body;

  if (!firstName || !lastName || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  sleepSync();

  res.json({ ok: Math.random() < 0.5 });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

function sleepSync() {
  const end = Date.now() + (Math.random() * 500) + 1000 ;
  while (Date.now() < end) {}
}