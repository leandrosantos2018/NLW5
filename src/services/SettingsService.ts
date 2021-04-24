import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate{
  chat :boolean;
  username :String;
}
class SettingsService{

async create({chat,username}: ISettingsCreate){
  const settingsRepository  = getCustomRepository(SettingsRepository)
  //select * from settings limit 1
const userAlreadyExists = await settingsRepository.findOne({
  username
});

if(userAlreadyExists){
  throw new Error("User already exits!");
}
  const settings =  settingsRepository.create({
     chat,
     username
   })
   
   await settingsRepository.save(settings);
   return settings;
}
}


export {SettingsService}