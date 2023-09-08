// debugger;
// var year=2020;
// if(year%4===0){
//     if(year%100==0){
//         if(year%400==0){
//             console.log("this year leep year"+year)
//         }else{
//             console.log("this year is not leep year"+year)
//         }

//     }else{
//         console.log("this year is leep year"+year)
//     }

// }else{
//     console.log("this year is not leep year"+year)
// }
// if(score=0){
//     console.log("we loss the game")
// }else{
//     console.log("we won the match")
// }
// var a=15;
// var b=10;
// if(b>a){
//     console.log("that is invalid camparision")
// }else if(a>b){
//     console.log("you have valid comperision a>b")
// }else{
//     console.log("you are not authorised")
// }


// example of IIFE

    // var x=0;
    // (function(){
    //     var a=23;
    //     alert("here i am printing IIFE ")
    // })(a);
    // alert(x)


    
//  var cunstNs=(function(){
//     function customer(){}
//     function custimerInvalid(){}
//     function custimerValidation(){}
//     return{
//         customer,
//         custimerInvalid
//     }
// })();
// var cust= new cunstNs.customer();
// var suppNs=(function(){
//     function suppiler(){}
//     function supplierInventory(){}
    
//  })();
// Create an Array

//  const num = [5,7,9,11,15,17,23]
//  for(let i=0;i<num.length;i++){
//     const b=num[i];
   

//     let next =b+2;
//    console.log(num[i+1]!==next)
//    if(num[i+1]!==next){
//     // console.log(next)
//  }
//  }

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();