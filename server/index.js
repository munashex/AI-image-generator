import express from 'express'   
import dotenv from 'dotenv' 
import cors from 'cors' 
const PORT = 3001 
import connectDb from './config/db.js' 
connectDb() 
import postRoutes from './routes/postRoutes.js' 
import dalle from './routes/dalle.js'


dotenv.config() 

const app = express()  
app.use(express.json({limit: '50mb'}))  
app.use(cors())


app.use('/api/v1/post', postRoutes) 
app.use('/api/v1/dalle', dalle)

app.get('/', async(req, res) => {
    res.send("hello")
})
 

app.listen(PORT, () => console.log('server is running on port ' + PORT))
