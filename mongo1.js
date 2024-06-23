const { MongoClient } = require("mongodb");
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);


function getData()
{
    let result= client.connect();
   let db=  result.db('e-com')
}

getData;
