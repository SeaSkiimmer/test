const path=require('path')
const express= require ('express')

const app=express()
app.set('view engine','hbs')
app.use(express.static(path.join(__dirname,'../public')))



app.get('',(req,res)=>{
    res.render('index',{
        title:'weather app',
        name:"mead"
    })
})

app.get('/help',(req,res)=>{
    res.render('index',{
        title:'Help page',
        name:"mead"
    })
})
app.get('/about',(req,res)=>{
    res.render('index',{
        title:'about page',
        name:"mead"
    })
})

app.listen(3000,()=>{
    console.log("Server up on port 3000.")
})