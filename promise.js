var urls = [
    'https://dog.ceo/api/breed/beagle/images/random',
    'https://dog.ceo/api/breed/chow/images/random',
    'https://dog.ceo/api/breed/akita/images/random',
    'https://dog.ceo/api/breed/dingo/images/random',
    'https://dog.ceo/api/breed/eskimo/images/random'
  ];

  // Part 1
  axios.get(urls[0]).then(function() {
      console.log("data was fetched!");
      axios.get(urls[1]).then(function() {
          console.log("data was fetched!");
          axios.get(urls[2]).then(function() {
              console.log("data was fetched!");
              axios.get(urls[3]).then(function() {
                  console.log("data was fetched!");
                  axios.get(urls[4]).then(function() {
                      console.log("data was fetched!");
                  });
              });
          });
      });
  });

  // Part 2
  Promise.all([axios.get(urls[1]), axios.get(urls[2]), axios.get(urls[3]), axios.get(urls[4])]).then(function() {
      console.log("all the data was fetched!");
  });

// Part 3
function addNUmbers(x, y) {
    let promise = new Promise(function(resolve, reject) {
        if((typeof(x) === 'number') && (typeof(y) === 'number')) {
            resolve(x + y);
        } else {
            reject("x and y must both be numbers");
        }
    });
    return promise;
}

addNUmbers(2, "3").then(function(answer) {
    console.log(answer);
})
.catch(function(error) {
    console.log(error);
})

// Part 4
let dropButteredToastOnFloor = (success, failure) => {
    console.log("oh no, I dropped my toast!");
    setTimeout( function(){
       var drop = Math.random();
       if (drop < 0.5) {
          console.log("Landed butter-side up!")
          success();
       } else {
          console.log("Landed butter-side down...")
          failure();
       }
    }, 2000);
 }

 function dropToastPromisified() {
     let promise = new Promise(function(resolve, reject) {
        dropButteredToastOnFloor(()=>{
            resolve();
         }, ()=>{
            reject();
         });
     });
     return promise;
 }

 dropToastPromisified()
  .then(()=>{
    alert('Whew, that was close!');
  }).catch(()=>{
    alert('Well shucks, there goes my toast...');
  });