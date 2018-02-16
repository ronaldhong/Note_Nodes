// var prompt = require('prompt');
//   prompt.start();
//   prompt.get(['number'], function(err, result){
//     console.log(result.number);
//   });



var asyncAdd = (a,b)=>{
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if (typeof(a)==='number' && typeof(b)==="number"){
          resolve(a+b)
        }else{
          reject("Arguments must be number");
        }
      },1500);
  });
};

asyncAdd(3, 4).then((result)=>{
  console.log(result);
  return asyncAdd(result, 31);
}).then((res)=>{
  console.log('should return 38 ', res);
}).catch((errorMessage)=>{
  console.log("error message");
})

// var somePromise = new Promise((resolve, reject)=>{
//   setTimeout(()=>{  //benefit: dont have to worry about accidently call callback twice.
//     resolve("uhhhh huh")
//     reject("Uhhhh ohh")
//   },2500);
// });
//
// somePromise.then((message)=>{
//   console.log("it Works ", message);
// }, (errorMessage)=>{
//   console.log("Error :",errorMessage);
// });
