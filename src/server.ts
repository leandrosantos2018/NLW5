import express, { response } from 'express';
import { request } from 'node:http';

const app =express();

app.get("/", (request,response)=>{
  return response.json({
    menssage: "olá NLW 5"
  })
})

app.post("/",(request,response)=>{
  return response.json({message: "Usuario salvo com sucesso!!"});
})

app.listen(3333,()=> console.log('sever is running on port 3333'));

//primeiro codigo - missãoespacial
 
