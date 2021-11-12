// var q = new Date();
// var m = q.getMonth();
// var d = q.getDay();
// var y = q.getFullYear();

// var date = new Date(y,m,d);
// var dtCurrent = new Date();
// console.log('hii ',dtCurrent);
// mydate=new Date('2021-10-19');
// console.log('Date ',date);
// console.log(mydate)

// if(dtCurrent>mydate)
// {
//     console.log("greater");
// }
// else
// {
//     console.log("smaller");
// }


// // var date1 ='24/10/2021';
// // var date2 ='11/11/2021';
// // console.log("hey")

// // var date1 = new Date(date1);
// // var date2 = new Date(date2);

// // if(date1 > date2){
// //     console.log("yes");
// // }
// var date = new Date('4-1-2015'); // M-D-YYYY

// var d = date.getDate();
// var m = date.getMonth() + 1;
// var y = date.getFullYear();

// let dateString = (d <= 9 ? '0' + d : d) + '-' + (m <= 9 ? '0' + m : m) + '-' + y;



let date = new Date();

  let month = date.getMonth()+1;

  let day = date.getDate();

  let year = date.getFullYear();

  let currdate = day + "/" + month + "/" + year;
  userdate = String(12/12/2021);

  if (currdate>userdate){
      console.log('yesss');
  }
  else{
      console.log('error');
  }


