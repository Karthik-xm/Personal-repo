app.get('/', (req, res) => {
    res.send('Hello World!')
  });

app.get('/static', (req, res) => {
    res.sendFile('./welcome.html',{root:__dirname})
  });
app.get('/json',(req,res)=>{
    var jsondata=[{name: 'mailto:vp',email:"vp@gmail.com"},
                   {name: 'mailto:kp',email:"kp@gmail.com"}];
    res.json(jsondata);
})

