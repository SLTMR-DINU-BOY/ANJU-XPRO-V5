//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU000elhUcFA3ZkNHUlY2bXZSRUFXM2puVzFXdnE2WDBqSmYxNU54TzIzdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaEdoMWhncmdNYTZrOXRNNzVEVzkzMW1kWld6Y2JjVU1LQWxtOUJ5NTZqdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRWdXU1hhVmhuZnRxSVZ3TmN1L0JSYk1STTAydndlSDVnN3JjWFBvRzBFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGTzV1VGUzaFRBQUo5cC82VHJTd3JYSTJHTjQzR3pwcFdGQU1WU3VKcXh3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdDMXhPOXJkd3YyMTBoNms4VDBvcEVBNUlWSVhLWklwcFd6NDVTRERYa3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdYVVpKa1pKZUNFdjJHMEk2MlJVOG84VFBVZXNYc2FSWjhKeWdNVVQyVkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0dPYkgyRUtMdk5GK1VJNnB3RlNCWXJ3SlRodFBDdXRMaENWQjVyUTIxMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWNWUHlaNWwwK2RzTUFHa3RZM0lEOFZpNlNmL3dSNjFHSXQyQXVTdFhDMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhJRFF1bFVCenVCTjdvZU5TNGNmcTRKcjBDQ3lTSlZNSFFHUjFOWFdnS2x2TStmelIwZnRpbyszVzYxN2U5NnNOMVhvWXRGOTVzM1B3bUVKWWpvMUR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM4LCJhZHZTZWNyZXRLZXkiOiIxQU9xdGZsandZL1YyYTBOeFl6WThHUENmdC9vayt2aDlMeHRQMWhqV0JJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzI5MTczMjk0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjFEMUFEMEJFNEE3MEFEODUwMTAxQkFDOTRGOUZDRTFCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYwNTEyNjN9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzI5MTczMjk0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjZEMDg5RUU5MTI4NEExQTUwQzRGRTJCRDUwRTY0OTZDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYwNTEyNjN9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzI5MTczMjk0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFGQzU1RTBEODBCRjQyMzM1NURENzdFQTQ3MTUyNEFCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYwNTEyNjZ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzI5MTczMjk0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNCNzVGNzg3RDRCQzYxMDlENjc2QTA1RUI1QUQ4MEEwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYwNTEyNjZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Il9BVFFGcXo3VG5lRjNORDRmVmVvQlEiLCJwaG9uZUlkIjoiMzdhZjA3ZjUtZWQ3Ny00MDE0LWIxYTAtNDRkMGQ5OWIyYTg0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFUcHFvM1JvY3VmTWZsL0g0dUpzcWhzUGxUOD0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1RYeU53c2dZQndaMUd5RDhuVThwQi9sU1JNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTytkOUpNSEVMcnVyTVVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibE9BczM5QkdIZUN4VmtPMk1KZlRxaGd0a0w0b2V6WHk5M0VuUGRwM3JuVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTWVBeGtsOUpZMlJ5Y0hUbldCTFVyWUF6OTBidERDbmVMdm5TRmlmb1JQY3l6UDV4a1J1TWdTSHU1LzlRSmp0T1hlN1VZVVA0bXRZZWpzMjR3ejYzQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IlhnVHRNQkJSZmhLSE53V1dwRXZuaUFnWTZOTDRaeVJ6c1VCbHcwWk5IWkxlNWxBNzVOS2NoakZCNVVRcUVUd1VKT2MyM3FkanJSSzd3bGVhTmlWbkJnPT0ifSwibWUiOnsiaWQiOiI5NDcyOTE3MzI5NDoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkRJTlVWQSIsImxpZCI6IjEwNDYyMTc2MjcyNDA5NDoxQGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyOTE3MzI5NDoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpUZ0xOL1FSaDNnc1ZaRHRqQ1gwNm9ZTFpDK0tIczE4dmR4SnozYWQ2NTEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjA1MTI2MSwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEWm0ifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94781306128",
  PASSWORD: 
    process.env.PASSWORD || "dinuth2009@",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94781306128", "94788214054"],
  PORT: process.env.PORT || "3000",
  USERNAME: process.env.USERNAME || "SLTMR-DINU-BOY", 
  TOKEN:process.env.TOKEN || "",
  REPO_NAME:process.env.REPO_NAME || "ANJU-XPRO-V5",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
  };
  
