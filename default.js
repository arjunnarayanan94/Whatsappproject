const getdata = require("./api.js");

function user1handler(options, event, context, callback) {
  options.next_state = "bot1_1";

  console.log("test", event.message);

  callback(options, event, context);
}

function user2handler(options, event, context, callback) {
  //let phone='^([9]{1})([234789]{1})([0-9]{8})$';

  if (/^(\+\d{1,3}[- ]?)?\d{10}$/.test(event.message)) {
    let phone = event.message;

    context.simpledb.roomleveldata.phone = phone;

    options.next_state = "bot2";
  } else {
    context.sendResponse("⚠️Invalid phone number please try again");

    options.next_state = "bot1_1";
  }
  callback(options, event, context);
}

function user3handler(options, event, context, callback) {
  if (/^\d{12}$/.test(event.message)) {
    let Ref = event.message;

    context.simpledb.roomleveldata.ref = Ref;

    options.next_state = "bot3";
  } else {
    context.sendResponse(
      "Invalid RRN/UPI Txn ID/Bank Ref. No  please try again"
    );

    options.next_state = "bot2";
  }

  callback(options, event, context);
}

function user4handler(options, event, context, callback) {
  let date = new Date();

  let month = date.getMonth()+1;

  let day = date.getDate();

  let year = date.getFullYear();

  let currdate = day + "/" + month + "/" + year;

  console.log('Check ',currdate);

  //  console.log('TYpe',typeof(event.message))
 
  let mydate = event.message;
  console.log("Mydate ",mydate);
  if (
    /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/.test(
      event.message
    )
  ) {
    if (currdate > mydate) {
    

      let date1 = event.message;

      context.simpledb.roomleveldata.date = date1;

      options.next_state = "bot4";
    }
    else{
      context.sendResponse("⚠️ Future date cannot be accepted.Please try again")

      options.next_state = "bot3";
    }

  } 

  else {
    options.next_state = "bot3";
    context.sendResponse(
      "⚠️ Please provide the date according to the format given (DD/MM/YYYY)");

    
  }

  callback(options, event, context);
}

function user4_1handler(options, event, context, callback) {

  if (/^\d+(\.\d{1,2})?$/.test(event.message)) {

    let amount = event.message;

    context.simpledb.roomleveldata.amount = amount;

    options.next_state = "bot10";
  } else {
    context.sendResponse("⚠️ Please provide a numbers as input");

    options.next_state = "bot4";
  }

  callback(options, event, context);
}

function user4_2handler(options, event, context, callback) {
  
  if (event.message == 1) {

    let QRcode = "QRcode";

    context.simpledb.roomleveldata.fraudtype = QRcode;

    options.next_state = "bot10_1";
  }
  else{
    
    context.sendResponse("⚠️ Please select the option number as given");

    options.next_state = "bot10";

  }
  callback(options, event, context);
}

function userdetailhandler1(options, event, context, callback) {
  if (event.message == 1 || event.message == 2) {
    //  options.next_state="bot6";
    if (event.message == 1) {
      let Gallery = "Scanned From Gallery";
      context.simpledb.roomleveldata.fraudMethod = Gallery;
    } else {
      let phoneCamera = "Scanned From Phone Camera";
      context.simpledb.roomleveldata.fraudMethod = phoneCamera;
    }
  } else {
    options.next_state = "bot10_1";
  }
  callback(options, event, context);
}

function user4_3handler(options, event, context, callback) {
  
  if (event.message == 2) {

    let paymentlink = "PaymentLink";

    context.simpledb.roomleveldata.fraudtype = paymentlink;

    options.next_state = "bot10_2";
  }
  else if(event.message ==0){

   
    context.sendResponse("⚠️ Please select the option number as given");

    options.next_state = "bot10";
  
    

  }

  callback(options, event, context);
}

function userdetailhandler2(options, event, context, callback) {
  
  if (
    /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(
      event.message
    )
  ) {
    let paylink = event.message;

    context.simpledb.roomleveldata.fraudMethod = paylink;
  } else {
    options.next_state = "bot10_2";
  }

  callback(options, event, context);
}

function user4_4handler(options, event, context, callback) {
 
  if (event.message == 3) {
    let sendMessage = "SendMessage through phone";

    context.simpledb.roomleveldata.fraudtype = sendMessage;

    options.next_state = "bot10_3";
  }

  callback(options, event, context);
}

function userdetailhandler3(options, event, context, callback) {

  if (/^(\+\d{1,3}[- ]?)?\d{10}$/.test(event.message)) {
    let mobilefraud = "mobilenumberfraud";

    context.simpledb.roomleveldata.fraudMethod = mobilefraud;

   
  } else {
    context.sendResponse("⚠️ Please provide the valid phone number");

    options.next_state = "bot10_3";
  }
  callback(options, event, context);
}

function user4_5handler(options, event, context, callback) {
  
  if (event.message == 4) {
    let app = "Fraudapp";

    context.simpledb.roomleveldata.fraudtype = app;

    options.next_state = "bot10_4";
  }

  callback(options, event, context);
}

function userdetailhandler4(options, event, context, callback) {

  let appname = event.message;

  context.simpledb.roomleveldata.fraudMethod = appname;

  callback(options, event, context);
}

function user4_6handler(options, event, context, callback) {
 
  if (event.message == 5) {

    console.log('Test5')

    let otherDetails = event.message;

    context.simpledb.roomleveldata.fraudtype = otherDetails;

    options.next_state = "bot10_5";
  }
 
  else if(event.message ==0 || event.message>5){

   
    context.sendResponse("⚠️ Please select the option number as given");

    options.next_state = "bot10";
  }
  
    callback(options, event, context);

}


function userdetailhandler5(options, event, context, callback) {

  let otherDetails1 = event.message;

  context.simpledb.roomleveldata.fraudMethod = otherDetails1;

  callback(options, event, context);
}

function user6_1handler(options, event, context, callback) {

  let explain = event.message;


  context.simpledb.roomleveldata.description = explain;

  console.log("test6 ", explain);

  options.next_state = "bot7";

  callback(options, event, context);
}

function user7_1handler(options, event, context, callback) {
  
  let description = event.message;

  context.simpledb.roomleveldata.description = description;

  options.next_state = "bot8";

  callback(options, event, context);
}
function user8_1handler(options, event, context, callback) {
  if (/^.*\.(jpg|JPG|jpeg|JPEG|gif|GIF|doc|DOC|pdf|PDF)$/.test(event.message)) {
    let format = event.message;

    context.simpledb.roomleveldata.format = format;

    console.log("test7 ", format);

    options.next_state = "bot9";
  } else {
    context.sendResponse(
      "⚠️ Please provide the format in one of the following(jpg,jpeg,gif,doc,pdf)"
    );

    options.next_state = "bot8";
  }
  callback(options, event, context);
}
function user9_1handler(options, event, context, callback) {
  if (event.message == 1) {
    getdata.store(
      context.simpledb.roomleveldata.phone,
      context.simpledb.roomleveldata.ref,
      context.simpledb.roomleveldata.date,
      context.simpledb.roomleveldata.amount,
      context.simpledb.roomleveldata.fraudtype,
      context.simpledb.roomleveldata.fraudMethod,
      context.simpledb.roomleveldata.description,
      context.simpledb.roomleveldata.format
    );

    options.next_state = "bot20";
  }
  else {
    context.sendResponse(
      "⚠️ Please click 1 to submit the data"
    );

    options.next_state = "bot9";
  }

  callback(options, event, context);
}

module.exports.main = {
  user1: user1handler,
  user2: user2handler,
  user3: user3handler,
  user4: user4handler,
  user4_1: user4_1handler,
  user11: user4_2handler,
  user11a: userdetailhandler1,
  user11_1: user4_3handler,
  user11b: userdetailhandler2,
  user11_2: user4_4handler,
  user11c: userdetailhandler3,
  user11_3: user4_5handler,
  user11d: userdetailhandler4,
  user11_4: user4_6handler,
  user11e: userdetailhandler5,
};

module.exports.nextoption = {
  user6_1: user6_1handler,
  user7_1: user7_1handler,
  user8_1: user8_1handler,
  user9_1: user9_1handler,
};
