const express = require('express');
const routes = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

const mysql = require('mysql');

const conectionBD = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'password',
    database: 'banco',
    port:"3306",
})



let db = [

    {
        question: "O que é a Lei do Bem ?",
        options: ["Algo de comer", "Algo de beber", "Incentivo fiscal",  ],
        answer: "Incentivo fiscal",
        tip: "esta relacionado ao governo",
    },
    {
        question: "O que é a Lei da Informática?",
        options: ["Algo de comer", "Algo de beber", "Incentivo fiscal",  ],
        answer: "Incentivo fiscal",
        tip: "esta relacionado ao governo",
    },
    {
        question: "O que é Ex-tarifário ?",
        options: ["Algo de comer", "Algo de beber", "Incentivo fiscal",  ],
        answer: "Incentivo fiscal",
        tip: "esta relacionado ao governo",
    },
    {
        question: "O que é Rota 2030 ?",
        options: ["Algo de comer", "Algo de beber", "Incentivo fiscal",  ],
        answer: "Incentivo fiscal",
        tip: "esta relacionado ao governo",
    },
    {
        question: "O que é Imposto para importação ?",
        options: ["Algo de comer", "Algo de beber", "Incentivo fiscal",  ],
        answer: "Incentivo fiscal",
        tip: "esta relacionado ao governo",
    },

]



//metodo para pegar os dados
routes.get('/', (req, res)=>{
    return res.json(db)
})


//método para adicionar dados
routes.post('/register', (req, res)=>{
    
    const email = req.body.email;
    const password = req.body.password;

    conectionBD.query("SELECT * FROM usuarios WHERE email = ?", [email], (err,result)=>{
        if(err){
            res.send(err);
        }
        if(result.length == 0){
            bcrypt.hash(password, saltRounds, (res, hash)=>{
                          
            conectionBD.query("INSERT INTO usuarios (email, password) VALUES (?, ?)", [email, hash], (err, response)=>{
                if(err){
                    res.send(err)
                }

                res.send({msg: "cadastrado com sucesso"})
            })


            })
  
        }else{
            res.send({msg: "Usuario já cadastrado"})
        }

    })

})

routes.post('/login', (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;

    conectionBD.query("SELECT * FROM usuarios WHERE email =?", [email], (err, result)=>{
        if (err) {
            res.send(err)
        }
        if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (erro, result)=>{
                if (result) {
                   
                    res.send({msg: "usuario logado com sucesso"})
       
                }else{
                    res.send({msg: "Senha incorreta"})
                }
            })  }
        else{
            res.send({msg: "Conta não encontrada"})
        }
    })



})


routes.delete('/:id', (req, res)=>{
    const id = req.params.id 

    let newDB = db.filter(item => {
        if(!item[id])
            return item
    })

    db = newDB

    return res.send(newDB)
})



module.exports = routes