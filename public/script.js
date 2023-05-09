const express = require('express');
const app = express();
const port = 3306;
app.use(express.static('views'));
const exphbs = require('express-handlebars');

app.get('/', (req,res)=> {
    res.send("Index");
});

app.listen(port,() =>{
    console.log(`app lsitening to port ${port}`);
});
