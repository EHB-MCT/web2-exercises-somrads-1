const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://admin:admin@cluster0.xmwgw.mongodb.net/session5?retryWrites=true&w=majority";
const client = new MongoClient(url);
 
 // The database to use
 const dbName = "session5";
                      
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);

         // Use the collection "people"
         const col = db.collection("boardgames");

         // Construct a document                                                                                                                                                              
         let boardGameDocument = {
          name: "Terra Mystica",
          genre: "strategy",
          "mechanisms": [
            "Area Control",
            "Network Building",
            "Variable player powers"
          ],
          description: "In the land of Terra Mystica dwell 14 different peoples in seven landscapes, and each group is bound to its own home environment, so to develop and grow, they must terraform neighboring landscapes into their home environments in competition with the other groups.\n\nTerra Mystica is a full information game without any luck that rewards strategic planning. Each player governs one of the 14 groups. With subtlety and craft, the player must attempt to rule as great an area as possible and to develop that group's skills. There are also four religious cults in which you can progress. To do all that, each group has special skills and abilities."
        }

         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertOne(boardGameDocument);
         // Find one document
         const myDoc = await col.findOne();
         // Print to the console
         console.log(myDoc);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

run().catch(console.dir);