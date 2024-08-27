const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="muhammadmuzammilhaqnawazarain@gmail.com"
global.location="Pakistan, Islamabad."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github=process.env.GITHUB|| "https://github.com/itxmemuzammil/Muzammil-MD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VajzERVFy72FxXdllv2y";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VajzERVFy72FxXdllv2y" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/a6c7556a03ceb8ed447d8.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "258867532400" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923436062975";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923436062975";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "258867532400,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://hitdev-qr.onrender.com";


global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0g4RC9RNENzSjhTVjRDazRJZzVueGROSlkxdVpUSENMN09CWUtlcTYybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRmR1d29sQ2VZSjh4dEJzeW9NYldwVGJmL2FYeXZUanRLdkpQUWlIcHRnOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRFV0MGY4a0hseWZ0Z2t2TmpXeDhzd09kTnBTc1JtOXhUYzl2aXJXRVZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLcG9kKzVzQ2Zwb25LWnVyKzliUTBVQXUvTlJPWERSeE4yc09VbkhnMWtFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklPUFpOV1JPT2Zsb3lrVnZEZlBRYUNsNWEwb3o0QjZoRXdHS1QxL1BobnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImIrOUhxSDl4RXFValUvNUN4eGxVY21jWVdEMjdoVlhxUnQ4R2o3Wm10M1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU52bC9xT3ZJallUVGpuMHdncmowdE9aRWR2NXBnbFpPeENOWWFGK2RYVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibjdkL3RTQ0ZQeDFFd0lla2hud3ZRUTkwR2EvUGV1UUpIY0pNUEtjVXRraz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpnNTdkcWVkK2QxWmx1TjRuODFsZ3Y0ZXo3S3NUc3FJZkFqd3Q2RXU3QWhlM3BFZUNpN0l2RU9QU3dzTEpnMWZTUXNWOHhoQWh3S3hVeDFBMElhSUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU1LCJhZHZTZWNyZXRLZXkiOiJkMzNoWVFEdG5GVUhjK2h2bDRvQmxBZGcyTWdnc1FmRldadUliY2hBa2ZVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQzNjA2Mjk3NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBRDNBRDYzMjNFODUwRTIxMDgwMDc5NjlFMTg5MEYxOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI0NzQ2Njc4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJPMmd6dHRkX1R3YWFwWGNfZzNHdUh3IiwicGhvbmVJZCI6IjE1MGFmMWU5LTEzMjMtNDViNi1iOTkzLTc3ZTljNDY1YzRhYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxUFBYczBlZXF4T085NnZlTjR2cWZHc0VhYkE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGc0UExOSUJuSkxidytyWWFFVU96ZjIwNkVNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkREWjMxWTM5IiwibWUiOnsiaWQiOiI5MjM0MzYwNjI5NzU6NzZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2RjPCdkZzwnZGiLi4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ00yeXhhc0VFS2FYdHJZR0dCQWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlR2RXRqQjQvalhJWEJ5VFg1SlNZdCtjaEgwZFlGZC90RW5OZ3VZWXQxa2M9IiwiYWNjb3VudFNpZ25hdHVyZSI6InE1bFVvL3U5THVxSmt4cStDUkh4ZnhQaWhrdFdzcXYxSXh0bC9tZjBLRmVzYTUyMkc2NnVrdllYS3BpMVE0WHFJbFVOS1A3NzY3bkRHVFZ2OTN1VERRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJYakFtVGI1V01kL1hqM3dXSWI5Yi9EY1F0aEkyRHI5aFQrczVycUJhYnR1aStsYWhYcFdiVFVhd1EvdHJSc2YrbUJ3TXdKRmNNMDNvanZYOVg5RWVBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQzNjA2Mjk3NTo3NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVN3hMWXdlUDQxeUZ3Y2sxK1NVbUxmbklSOUhXQlhmN1JKellMbUdMZFpIIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0NzQ2Njc0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUxhbSJ9"
module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: HITDEV-MD Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0",
  caption : process.env.CAPTION || "『© MUHAMMAD MALIK USMAN KHAN』" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʜɪᴛᴅᴇᴠ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ʜɪᴛᴅᴇᴠ ᴛᴇᴄʜ』*\n youtube.com/@hitdeveloper0"),
 
  author : process.env.PACK_AUTHER|| "Malik- MD",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ᴍᴜᴢᴀᴍᴍɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Malik khan",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "HITDEV"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
