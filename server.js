const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

app.get("/", function(req, res){
  res.sendFile(__dirname+ '/pages/main.html');
})

app.get("/employer", function(req, res){
  res.sendFile(__dirname+ '/pages/employer.html');
})

app.get("/student", function(req, res){
  res.sendFile(__dirname+ '/pages/student.html');
})

app.get("/university", function(req, res){
  res.sendFile(__dirname+ '/pages/university.html');
})




app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'Иван' },
    { id: 2, name: 'Мария' },
  ];
  res.json(users);
});



app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
