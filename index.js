import express from 'express';

import { homeRouter} from "./routes/index.js"


const app = express();
const PORT = 8410;

app.use(express.static('public'));

app.use('/home',homeRouter)
app.get('/',(req,res)=>{
    res.set('Content-Type', 'text/html')
    res.sendFile('index.html')
})


app.listen(PORT, ()=>{
    console.log(`Server listening on port: ${PORT}`);
    
})