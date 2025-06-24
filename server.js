const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize, Employer } = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Career Navigator API is running');
});

app.get('/api/employers', async (req, res) => {
  try {
    const employers = await Employer.findAll();
    res.json(employers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/employers', async (req, res) => {
  try {
    const employer = await Employer.create(req.body);
    res.status(201).json(employer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
