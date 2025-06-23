const express = require('express');
const cors = require('cors');
const { sequelize, Employer } = require('./models');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());


sequelize.authenticate()
  .then(() => console.log('DB connected'))
  .catch(err => console.error('DB connection error:', err));

sequelize.sync({ alter: true }) 
  .then(() => console.log('Models synchronized'));



app.get('/employers', async (req, res) => {
  const employers = await Employer.findAll();
  res.json(employers);
});


app.post('/employers', async (req, res) => {
  try {
    const employer = await Employer.create(req.body);
    res.status(201).json(employer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
