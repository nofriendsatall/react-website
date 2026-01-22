import express from 'express';
import { addFood,listFood,removeFood } from '../controllers/foodControler';
import mutler from 'multer';


const foodRouter = express.Router();

const storage = mutler.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})
    
const upload = mutler({ storage: storage }) 

foodRouter.post('/add', upload.single('image') ,addFood)

foodRouter.get('/list', listFood)

foodRouter.post('/remove', removeFood)

export default foodRouter



