const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_42_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQwLFxuICAgICAgICA0OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEsXG4gICAgICAgIDk4LFxuICAgICAgICA5NixcbiAgICAgICAgODUsXG4gICAgICAgIDYzLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjMwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNixcbiAgICAgICAgODcsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTExLFxuICAgICAgICA5MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4NixcbiAgICAgICAgNjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk4LFxuICAgICAgICAxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI4LFxuICAgICAgICA0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgODYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjE1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTczLFxuICAgICAgICA2OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDUxLFxuICAgICAgICA3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDc4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICA2NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgODEsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4NixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDY3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUS9FY0l4alFHekZCRlZaRElvdVRlK0NmK2NLK3NPNUR3amFJVVdzakRZMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQy1fRHJlaEFSNUNWWjAtUkc5Nnp3QVwiLFxuICBcInBob25lSWRcIjogXCI5NjdmYmI1YS1lNzUwLTRmZTctOTA4OS0yZTBmYjUyOTM1ZjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ5LFxuICAgICAgMjI5LFxuICAgICAgMjUsXG4gICAgICA1OSxcbiAgICAgIDEwLFxuICAgICAgOTksXG4gICAgICA3MCxcbiAgICAgIDE3NCxcbiAgICAgIDI2LFxuICAgICAgMTU4LFxuICAgICAgMTEyLFxuICAgICAgMTI4LFxuICAgICAgMjUxLFxuICAgICAgMTYzLFxuICAgICAgMjI1LFxuICAgICAgMTg0LFxuICAgICAgMTMyLFxuICAgICAgMTY4LFxuICAgICAgMTc5LFxuICAgICAgMTUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OSxcbiAgICAgIDE2LFxuICAgICAgMzQsXG4gICAgICAxNCxcbiAgICAgIDExOCxcbiAgICAgIDg0LFxuICAgICAgODksXG4gICAgICAyMDYsXG4gICAgICAxOTMsXG4gICAgICA4MyxcbiAgICAgIDEzNSxcbiAgICAgIDUxLFxuICAgICAgMTAwLFxuICAgICAgMjQ4LFxuICAgICAgMTEzLFxuICAgICAgMTU5LFxuICAgICAgODksXG4gICAgICAxNzUsXG4gICAgICA1NyxcbiAgICAgIDExMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ056T3o2Y0dFTnJ1bkxrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidUs4bW50b2dFb3BrbWljNW9KSi9ja2tTMC91aVpuWDAvSkpTT1E2SDQwMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJQV29SYnNLOGFJdlVIVS9CdWFpT0h0STJmUmV1ZzNZMi9Odys1Umd3UWJHaUoxZGl0aVpHWEszU00zWmExQjMwUDRONkFyckEwcDAzRzZSN1Fzd3JCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6Q05QdlJSc1IvcVlacWQ4SHdkbk9pcEFvNXpwb3d6bSs2SmlJUGVNVzQ3eXpuNlZvTGxhUSttSDAzM3NUdi9sbGs2NFlWR240RG9Ea2w5ZklBK0NoUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY3Njk5ODI1Mzo3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTMxMjQxMzQ5MjUxMjU0OjcyQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3Njc2OTk4MjUzOjcyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDYyMzMyNlxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "#",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
