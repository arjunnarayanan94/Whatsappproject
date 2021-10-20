function user1handler(options, event, context, callback) {
  options.next_state = "bot1_1";
  console.log("test", event.message);
  callback(options, event, context);
}

function user2handler(options, event, context, callback) {
  //let phone='^([9]{1})([234789]{1})([0-9]{8})$';
  let phone;
  if ((phone = /^(\+\d{1,3}[- ]?)?\d{10}$/.test(event.message))) {
    console.log("test1");
    options.next_state = "bot2";
  } else {
    context.sendmessage("Invalid phone number please try again")
    options.next_state = "bot1_1";
  }
  callback(options, event, context);
}

function user3handler(options, event, context, callback) {
  let transaction;
  if ((transaction = /^\d{12}$/.test(event.message))) {
    options.next_state = "bot3";
  } else {
    options.next_state = "bot2";
  }

  callback(options, event, context);
}

function user4handler(options, event, context, callback) {
  let calendar;
  if (
    (calendar =
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(
        event.message
      ))
  ) {
    options.next_state = "bot4";
  } else {
    options.next_state = "bot3";
  }

  callback(options, event, context);
}

function user4_1handler(options, event, context, callback) {
  let amount;
  if ((amount = /^\d+(\.\d{1,2})?$/.test(event.message))) {
    options.next_state = "bot10";
  } else {
    options.next_state = "bot4";
  }

  callback(options, event, context);
}

function user4_2handler(options, event, context, callback) {

  if(event.message==1){

  options.next_state = "bot10_1";

  }
  callback(options, event, context);

}


function userdetailhandler1(options, event, context, callback) {

  if(event.message==1|| event.message==2){

  //  options.next_state="bot6";
  }

else{
   options.next_state="bot10_1";
}
  callback(options, event, context);

}



function user4_3handler(options, event, context, callback) {

  if(event.message==2){
  options.next_state = "bot10_2";
  }

  callback(options, event, context);
}

function userdetailhandler2(options, event, context, callback) {

  let url;
  if (
    (url =
      /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(
        event.message
      ))
  ) {
   
    console.log("Experience");
  } else {
    options.next_state = "bot10_2";
  }

  callback(options, event, context);
}





function user4_4handler(options, event, context, callback) {
  
  if(event.message==3){

    options.next_state = "bot10_3";
    }
  
    callback(options, event, context);
  }



  function userdetailhandler3(options, event, context, callback) {
    let phone1;
    if ((phone1 = /^(\+\d{1,3}[- ]?)?\d{10}$/.test(event.message))) {
      
    } else {
      options.next_state = "bot10_3";
    }
    callback(options, event, context);
  }

    



function user4_5handler(options, event, context, callback) {
  if(event.message==4){

    options.next_state = "bot10_4";
    }
  
  callback(options, event, context);
}

function userdetailhandler4(options, event, context, callback) {
 

  callback(options, event, context);
}


function user4_6handler(options, event, context, callback) {
  if(event.message==5){

    options.next_state = "bot10_5";
    }
  
  callback(options, event, context);
}

function userdetailhandler5(options, event, context, callback) {
 

  callback(options, event, context);
}



// function user4_7handler(options, event, context, callback) {
// //   options.next_state = "bot6";
//   console.log("testing", event.message);
//   console.log("mini");

//   callback(options, event, context);

// }
function user6_1handler(options, event, context, callback) {
  options.next_state = "bot7";

  callback(options, event, context);
}

function user7_1handler(options, event, context, callback) {
  options.next_state = "bot8";
  console.log("hellloooo");

  callback(options, event, context);
}
function user8_1handler(options, event, context, callback) {
  let attachment;
  if (/^.*\.(jpg|JPG|jpeg|JPEG|gif|GIF|doc|DOC|pdf|PDF)$/.test(event.message)) {
    options.next_state = "bot9";
  } else {
    options.next_state = "bot8";
  }
  callback(options, event, context);
}
function user9_1handler(options, event, context, callback) {
  options.next_state = "bot20";

  callback(options, event, context);
}

module.exports.main = {
  user1: user1handler,
  user2: user2handler,
  user3: user3handler,
  user4: user4handler,
  user4_1: user4_1handler,
  user11: user4_2handler,
  user11a:userdetailhandler1,
  user11_1: user4_3handler,
  user11b:userdetailhandler2,
  user11_2: user4_4handler,
  user11c:userdetailhandler3,
  user11_3: user4_5handler,
  user11d:userdetailhandler4,
  user11_4: user4_6handler,
  user11e: userdetailhandler5
};

module.exports.nextoption = {
 
  user6_1: user6_1handler,
  user7_1: user7_1handler,
  user8_1: user8_1handler,
  user9_1: user9_1handler,
};
