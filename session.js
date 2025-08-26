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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1A4SzdXZW0wa3RoYjVwd2UvNTVYODJ6ZkZtOFhUeUpkL3dWb3NPVGFFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDl2R05EV1hvem1oWVUxRURLUnZnM3U1UkRQZWd5OExlL0VvdUxJMzZ4WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwS05PUS82cm9KdXpVRUFudXoycmh5NVA5MXVBR2RrVG1JSWh4eWdkWm1zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5K25JQnN0VGpvSWY2WjR6VXhWZmQ5SEtVcndManRkNHdaS3N2OFlvdGpzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRFNzc3ckMyOEozMW0wUmcrMDhpSDZ0M1RXQWpzSFBmbTVxVkJyZGlBVnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRSYU1HWmZnL2N6ZWU3akdyUGdFT1ZORWZPNkExaFoyK1Znb0d3NDlFM289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU9VeGdkZnI5YmlVOXhqeVJ5VUsxVWNzQWtDT25sR2gyanNVUWxlQ2cwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGw4aFNiMi96T2tJa2JkSURhUEorSVhrMVlKUkJOemM0VnpYcUU3N3dTcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJzTEFxS3VteEhVNXh2UThuNERMQlcyTVgzeExHM0lkYUY4MTUzajNiWVpxcHZKV1Y4K3FtY2QzRTNNSzN1RisyenRzV0M2Y2pzc3dSTFdyMDh5aGl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk2LCJhZHZTZWNyZXRLZXkiOiIxcFJOeHV6dVZYY290dUYzQTZPalV5VlFZYXJLOGdNblpQbDgzQWNMVDUwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYxOTkyMjcxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkVDRTkyNDMzMTUxRkZEMThFODc3NzMwMjI3M0NGMzFDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYxMjMyNjd9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYxOTkyMjcxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkUxMkY1RjQyRTFDQTMyMzA4RDY5NTJEMUUyMkVCNEY3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYxMjMyNjd9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYxOTkyMjcxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjIwN0YyQUYyMkE0REY4NDBERkREM0IyODAxMUJDODlEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYxMjMyNjl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlJvWkxNU2VuUWlPRTlZSnd3dTAtVUEiLCJwaG9uZUlkIjoiZjZiMDdmNTMtODA2MS00MTk1LTg0NDctOTQ0YjhiZDRkOGRiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImIySmJMRitNTDhYOGRja3poelV1OEZBZGxyYz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVQzaGRTaktJU3F6TndvYUxRRUIwcURTOEdFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUFRYdFlVRkVQNmdzY1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoid0laVk0vUHVxRnA4bFVmbXZERWNYK0JjZHFNR2FFQkxEdEIxbUp4eEptQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoibmdJVGljQm40UnRadWV2eUQ2dmNIYWFHZ1NBREtsYmRCaEF0cmVyU2ErVG1EaHc5VFRSc25WZDdNS3BsU2cxelYwcC9CVjhOeEI1Z25VVHM2MVNWQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6Im85WGVYQ2drS201dzNvUTRHdmlaOXRFM2hqaWo3QnRLZW5jeFNPOURSMVlVakl4Z1c4ZUlvSG0yTS9SNFBNZG5tRURqTVU3T051cW9FNi9QVlQ5eGhnPT0ifSwibWUiOnsiaWQiOiI5NDc2MTk5MjI3MToxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjQyMTY4MDQwMDEzOTI5OjFAbGlkIiwibmFtZSI6IvCfpoEgRGloZWluIPCfpoEifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjE5OTIyNzE6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjQ0dWVFB6N3FoYWZKVkg1cnd4SEYvZ1hIYWpCbWhBU3c3UWRaaWNjU1pnIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYxMjMyNjUsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSVpFIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94781306128",
  PASSWORD: 
    process.env.PASSWORD || "dinuth2009@",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94781306128", "94788214054"],
  PORT: process.env.PORT || "3000",
  USERNAME: process.env.USERNAME || "SLTMR-DINU-BOY", 
  TOKEN:process.env.TOKEN || "dZ6YCXxOGD3roCWjIWy4UN6yDRy8N90UY42m",
  REPO_NAME:process.env.REPO_NAME || "ANJU-XPRO-V5",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
  };
  
