const {google} = require('googleapis')

const { GoogleSpreadsheet } = require('google-spreadsheet');
const cred = require('./cred.json')

// const getdata = require('./default.js');



const doc = new GoogleSpreadsheet('1tKIw679QfWHDjxvMiRQZNs9WGZtXOYvGMjUBtZv1jB4');
 
let abc= async(name,email,phone,url,area,budget,details)=>{
 
// Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
await doc.useServiceAccountAuth({
  client_email: cred.client_email,
  private_key: cred.private_key,
});
    
await doc.loadInfo(); // loads document properties and worksheets
console.log(doc.title);

const sheet = doc.sheetsByTitle['Sheet1'];
const moreRows = await sheet.addRow(
    { Name: name, Email:email,Phone:phone,Url:url,Area:area,Budget:budget,Details:details}
  );
  // const rows = await sheet.getRows();
  // console.log("rows=",rows);

}

exports.abc=abc;