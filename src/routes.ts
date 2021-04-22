import { Router} from "express";
import { getCustomRepository } from "typeorm";

import { SettingsRepository } from "./repositories/SettingsRepository";


const routes = Router();


routes.post("/settings",async (request,response) =>{
 const {chat,username} = request.body;
  const settingsRepository  = getCustomRepository(SettingsRepository)

  const settings = SettingsRepository.create({
    chat,
    username
  })
  
  await SettingsRepository.save(settings);
  return response.json(settings);
})
export {routes};