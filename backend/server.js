import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import foodRouter from './routes/foodRoute.js';


const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

connectDB()

app.use('api/food',foodRouter);
app.use('/images',express.static('uploads'));

app.get('/', (req, res) => {
    res.send('Api Working!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
