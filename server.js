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



app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
//Классы 
class User {
  
  constructor(name, email){//родительский класс
    this.name = name;
    this.email = email;
  }
  setValuesFromString(valueString) {
    this.multiValues = valueString.split(',').map(item => item.trim());
  }
  
  
}
class university extends User { //Университет
  constructor(specialties){
    this.specialties = specialties;
  }
}
class employer extends User { //работодатель
  constructor(work){
    this.work = work;
  }
}
class student extends User { //шкила
  constructor(workOrUniversity){
    this.workOrUniversity= workOrUniversity;
  }
}
app.post('/submit'), (req, res) => {
  let elem = document.getElementById('num');
  let number = elem.dataset.number;
  let name = req.body.name; //адрес имени 
  let email = req.body.email;// адрес почты
  if (number === 1) {   
    let specialties =req.body.specialties;//адрес спецальностей университета
    name = new university(name, email, specialties);
  } 
  if (number === 2){
    let work = req.body.work;//адрес работ 
    name = new employer(name, email, work);
  }
  if (number === 3){
    let workOrUniversity = req.body.workOrUniversit;//адрес потребностей шкилы в образовании или работе
    name = new student(name, email, workOrUniversity);
  }
  console.log(name)
}