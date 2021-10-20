
    const getdata = require('./index1.js');

    function user1handler(options, event, context, callback) {
        ​​​​​​   
            if (event.message == 1) {​​​​​​
            options.next_state = 'bot2_1';
                }​​​​​​ 
            callback(options, event, context);
              }​​​​​​
    function user1_2handler(options, event, context, callback) {
                if(event.message==2){
                    options.next_state = 'bot2_2';
                    }
                    callback(options, event, context);
            }
            
    function user1_3handler(options, event, context, callback) {
                
                if(event.message==3){
                    options.next_state = 'bot2_3';
                    }
                    callback(options, event, context);
            }
            
    function user1_4handler(options, event, context, callback) {
               
                if(event.message==4){
                    options.next_state = 'bot2_4';
                    }
                    callback(options, event, context);
            }
            
    function user1_5handler(options, event, context, callback) {
              
                if(event.message==5){
                    options.next_state = 'bot2_5';
                    }
                    callback(options, event, context);
            }​
        
    
    function user2handler(options, event, context, callback) {​​​​​​
    
        options.next_state = 'bot3';
        callback(options, event, context);
          }​​​​​​
        function user3handler(options, event, context, callback) {​​​​​​
        if (event.message == 1) 
        {​​​​​​
        options.next_state = 'bota';
            }​​​​​​ 
        callback(options, event, context);
          }​​​​​​
        function user3_2handler(options, event, context, callback) {​​​​​​
        if (event.message == 2) {​​​​​​
        options.next_state = 'botb';
            }​​​​​​ 
        callback(options, event, context);
          }​​​​​​
        function user3_3handler(options, event, context, callback) {​​​​​​
        if (event.message == 3) {​​​​​​
        options.next_state = 'botc';
            }​​​​​​ 
        callback(options, event, context);
          }​​​​​​
        function user3_4handler(options, event, context, callback) {​​​​​​
        if (event.message == 4) {​​​​​​
        options.next_state = 'botd';
            }​​​​​​ 
        callback(options, event, context);
          }​​​​​​
        
        function user4handler(options, event, context, callback) {​​​​​​
        options.next_state = 'bot5';
        callback(options, event, context);
          }
          
          
          function user5handler(options, event, context, callback) {​​​​​​
            if (event.message == 1) {​​​​​​
            options.next_state = 'bot6_1';
                }​​​​​​ 
            callback(options, event, context);
              }​​​​​​
            function user5_2handler(options, event, context, callback) {​​​​​​
            if (event.message == 2) {​​​​​​
            options.next_state = 'bot6_2';
                }​​​​​​ 
            callback(options, event, context);
              }​​​​​​
            function user5_3handler(options, event, context, callback) {​​​​​​
            if (event.message == 3) {​​​​​​
            options.next_state = 'bot6_3';
                }​​​​​​ 
            callback(options, event, context);
              }​​​​​​
            function user5_4handler(options, event, context, callback) {​​​​​​
            if (event.message == 4) {​​​​​​
            options.next_state = 'bot6_4';
                }​​​​​​ 
            callback(options, event, context);
              }​​​​​​​​​​​​
        
        
        
        
            
        function user6handler(options, event, context, callback) {​​​​​​​
            if (event.message == 1) {​​​​​​​
              options.next_state = 'bot7_1';
            }​​​​​​​ 
            callback(options, event, context);
          }​​​​​​​
          function user6_2handler(options, event, context, callback) {​​​​​​​
            if (event.message == 2) {​​​​​​​
              options.next_state = 'bot7_2';
            }​​​​​​​ 
            callback(options, event, context);
          }​​​​​​​
          function user6_3handler(options, event, context, callback) {​​​​​​​
            if (event.message == 3) {​​​​​​​
              options.next_state = 'bot7_3';
            }​​​​​​​ 
            callback(options, event, context);
          }​​​​​​​
          function user6_4handler(options, event, context, callback) {​​​​​​​
            if (event.message == 4) {​​​​​​​
              options.next_state = 'bot7_4';
            }​​​​​​​ 
            callback(options, event, context);
          }​​​​​​​
          function user6_5handler(options, event, context, callback) {​​​​​​​
            if (event.message == 5) {​​​​​​​
              options.next_state = 'bot7_5';
            }​​​​​​​ 
            callback(options, event, context);
          }​​​​​​​
        
    
    function user7handler(options, event, context, callback) {
        console.log("abcd",event.message);
            let  name = event.message;
            console.log("find",name);
            options.data.name =  name;
            context.simpledb.roomleveldata.name = name;
    
            options.next_state = 'bot8';
           
                 
            callback(options, event, context);
        //     // console.log(user7handler);
        // })
    }
    
    
    function user8handler(options, event, context, callback) {
       
            let email = event.message;
            options.data.email=email;
            context.simpledb.roomleveldata.email=email;
            options.next_state ='bot9';
            
            callback(options, event, context); 
    }
    
    function user9handler(options, event, context, callback) {
       
        let phone = event.message;
        options.data.phone=phone;
        context.simpledb.roomleveldata.phone=phone;
        options.next_state ='bot10';
        getdata.abc(context.simpledb.roomleveldata.name,context.simpledb.roomleveldata.email,context.simpledb.roomleveldata.phone,context.simpledb.roomleveldata.url); 
        callback(options, event, context); 
    }
    
    
    
    module.exports.main = {​​​​​​​
        user1: user1handler,
        user1_2:user1_2handler,
        user1_3:user1_3handler,
        user1_4:user1_4handler,
        user1_5:user1_5handler,
        user1_6:user1_6handler,
        user1_7:user1_7handler,
        user1_8:user1_8handler,
      }​​​​​​​;
    module.exports.options ={​​​​​​​
        user2: user2handler,
        user3: user3handler,
        user3_2:user3_2handler,
        user3_3:user3_3handler,
        user3_4:user3_4handler,
      }​​​​​​​
      module.exports.url={​​​​​​​
        user4: user4handler,
        user5: user5handler,
        user5_2:user5_2handler,
        user5_3:user5_3handler,
        user5_4:user5_4handler,
      }​​​​​​​
      module.exports.budget={​​​​​​​
        user6: user6handler,
        user6_2:user6_2handler,
        user6_3:user6_3handler,
        user6_4:user6_4handler,
        user6_5:user6_5handler,
      }​​​​​​​
    module.exports.details={
    
        user7:user7handler,
        user8:user8handler,
        user9:user9handler,
    }
    