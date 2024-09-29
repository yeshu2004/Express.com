import express, { json } from 'express'
import cors from 'cors'
import bcrypt from 'bcrypt'
import UserModel from './models/UserModel.js'
import jwt from 'jsonwebtoken'

const app = express()
const PORT = 3000

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/register', async (req, res) => { 
    const { email, password } = req.body;
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, async function(err, hash) {
            const createUser = await UserModel.create({email, password: hash})
            await createUser.save()
            res.status(200).send('Registration successful');
        });
    });
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({email})
            if (!user) {
                return res.status(401).send('Email is incorrect');
            }
            const verifyPassword = await bcrypt.compare(password, user.password) 
            if(!verifyPassword) {
                return res.status(401).send('password is incorrect')
            };
            jwt.sign({email: user.email, id: user._id}, "shhhh", function(_err, token) {
                if (_err) return _err;
                res.cookie("token", token)
                res.status(200).send('Login successful');
            })      
    } catch (error) {
        console.log(error)
    }
})


// function isLoggedIn(req, res, next) {
//     const token = req.cookies?.token;

//     if (!token) return res.status(401).send("You must be logged in");

//     const data = jwt.verify(token, "shhhh");
//     req.user = data;
//     next();
// }

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
