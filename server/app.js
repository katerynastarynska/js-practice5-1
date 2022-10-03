import express from 'express';
import path from 'path';
import teachers from './public/teachers.js';
import { students } from "./public/students.js";

const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
    console.log('Express server listening on port', port)
})
app.get('/', (req, res) => {
    res.sendFile(path.resolve('./client/index.html'))
})
app.get('/homeJs', (req, res) => {
    res.sendFile(path.resolve('./client/index.js'))
})
app.get('/teachers', (req, res) => {
    console.log("get all teachers")
    res.json(teachers)
})
app.get('/students', (req, res) => {
    console.log("get all students")
    res.json(students)
})