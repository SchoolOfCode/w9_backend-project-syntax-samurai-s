import express from 'express';
import { getSnippets } from '../models/snippets.js';

const router = express.Router();

router.get("/" , async function(req , res){
    const title = req.query.title;
    
    // const result = await getSnippets(title);
    
   // define the object it'll return
     const responseObject = {
         success : true,
         data : await getSnippets(searchQuery),
         message : "please heckin work!",
     }
     // confirm in the console what the client requested
     console.log(`router get request worked`)
 
     // return the response object (defined above) as JSON
     res.json(responseObject);
 });




 export default router;


 // NOTE: changed "payload" to "data" because of a frontend / react specific method
