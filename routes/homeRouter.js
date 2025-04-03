import { Router } from "express";

const router = Router()

router.get('/',(req,res)=>{
    res.set("Content-Type", "text/html");
    res.sendFile("pages/home.html")
})

export default router