import express, { response } from 'express';
import { request } from 'node:http';
import "./database";
import {routes} from "./routes";
import "reflect-metadata";

const app = express();


app.use(express.json());

app.use(routes)

app.listen(3333,()=> console.log('sever is running on port 3333'));


 
