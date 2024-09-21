import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/register', (req, res) => { 
    const { email, password } = req.body;
    // res.send({ email, password });
    console.log(email, password);
    res.redirect('/')
    
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
