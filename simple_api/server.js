
const express = require('express');
const app = express();
app.use(express.json());

let messages = [];

app.get('/messages', (req,res)=>{
  res.json(messages);
});

app.post('/messages', (req,res)=>{
  messages.push({text:req.body.text, time:Date.now()});
  res.json({status:'ok'});
});

app.listen(3000, ()=> console.log('API running on 3000'));
