import {setServers} from "node:dns/promises"
setServers(["1.1.1.1", "8.8.8.8"]); 

import 'dotenv/config'

import app from "./src/app.js";
import connectToDb from './src/config/database.js';


connectToDb()

app.listen(3000, ()=> {
    console.log('server is running at port 3000')
})
