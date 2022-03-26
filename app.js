
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://kuroro:devilmaycry@cluster0.sd2mq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object

  const express=require('express');
  const mongoose=require('mongoose');
  const app=express();

  mongoose.connect(uri,{ useNewUrlParser: true});
  const con=mongoose.connection;
  con.on('open',()=>{console.log('HEY YO');}
  );
  app.use(express.json());
     const alienrouter=require('./routers/alien');
     app.use('/aliens',alienrouter);
  app.listen(9000,function(){
      console.log('server started');
  });
client.close();});