const express = require("express")
const app = express()
const mysql = require("mysql")




app.use((reques, response, next) => {
    response.header('Access-Control-Allow-Origin', "*");
    response.header(
        'Access-Control-Allow-Headers',
        '*'
    );

    next();
})

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "lucasalbi123",
    database: "usuarios",
})

app.use(express.json())


app.post("/register", (req,res)=>{
    const user = req.body.user
    const senha = req.body.senha

    db.query("select * from usuario where user = ?", [user], (err,result) =>{
        if(err){
            res.send(err)
        }
        if(result.length==0){
            db.query("insert into usuario (user, senha) values (?,?)", [user,senha], (err,response =>{
                if(err){
                    res.send(err)
                }
                res.send({msg: "Cadastrado com Sucesso"})
            }))
        }else{
            res.send({msg: "Usuário já cadastrado"})
        }
       
    })
})

app.post("/login",(req,res)=>{
    const user = req.body.user
    const senha = req.body.senha

    db.query("select * from usuario where user = ? AND senha = ?", [user,senha], (err,result) =>{
        if(err){
            res.send(err)
        }
        if(result.length > 0){
         res.status(200).end()
        }
        else{
            res.status(401).send({msg: "Usuario não encontrado"})
        }
    })
})

app.listen(8000, () =>{
    console.log("RODANDO NA PORTA 8000")
} )