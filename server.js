
import app from './app.js'
import {config} from "dotenv";
config();

const port = process.env.PORT || 8000

app.listen(port, ()=>{
    console.log(`server run success on http://localhost:${port}`);
})