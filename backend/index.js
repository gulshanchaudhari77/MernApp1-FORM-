const express = require ("express");
const app = express();
const bodyParser = require("body-parser")
const cors = require("cors");
const userRoutes = require("./routes/Authrouter")
const userProduct = require ("./routes/productrouter")





require ("dotenv").config();
const PORT =process.env.PORT || 3000;
app.use(express.json());






app.listen(PORT,()=>{
    console.log(`server stated at SUCCESFULLy ${PORT}`);
  })

  const dbConnect=require("./config/database");
  dbConnect();

  app.use(bodyParser.json());
  app.use(cors());


  app.use("/api/v1", userRoutes);

  app.use("/api/v1", userProduct);





  app.get("/" ,(req,res)=>{
    res.send(`<h1>This
       is hoMEPAGE </h1>`)
  })