const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
let items = [
  { id: 1, name: 'Item One' },
  { id: 2, name: 'Item Two' }
];
//main
app.get("/",function(req,res){
  res.sendFile(__dirname + "/pages/main.html");
});
app.get('/items', (req, res) => {
  res.json(items);
});

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});