import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express()
import mysql from 'mysql2';

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: 'cours',
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))





app.get('/api/get', (req, res) => {
    const sqlSelect = 'SELECT * FROM cours';
    db.query(sqlSelect, (err, result) => {
        console.log("ResultGet: ", result)
        console.log("ErrorGet: ", err)
        res.send(result)
    })
})



app.post('/api/insert', (req, res) => {
    const tema = req.body.tema
    const silka = req.body.silka

    console.log(tema)
    const sqlInsert = "INSERT INTO cours (tema,  silka) VALUES (?,?)";
    db.query(sqlInsert, [tema, silka], (err, result) => {
        console.log("Error: ", err)
        console.log("result: ", result)
        res.send(result)
    })
})


app.delete('/api/delete/:id', (req, res) => {
    const name = req.params.id

    const sqlDelete = 'DELETE FROM cours WHERE id = ?';
    db.query(sqlDelete, name, (err, result) => {
        res.send(result)
        if (err) console.log(err)
    })
})

app.listen(3001, () => {
    console.log("running on port 3001")
}) 