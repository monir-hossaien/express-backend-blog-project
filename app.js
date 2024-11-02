import route from './routes/blog.js';
import express from 'express';
const app = express();
import cors from "cors";
// global middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// routes
app.use(route);

// home route
app.get('/', (req, res)=>{
    res.send("<h1>Welcome to my blog project</h1>")
})
//error handle for unexpected route
app.use((req, res, next)=>{
    res.status(404).send("<h1>404! not  found</h1>");
})


export default app;