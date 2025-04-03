import express from 'express';


const app = express();
const PORT = 8410;

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.listen(PORT, ()=>{
    console.log(`Server listening on port: ${PORT}`);
    
})