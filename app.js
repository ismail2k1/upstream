// document.body.style.backgroundColor = 'red';

// setTimeout(() => {
// document.body.style.backgroundColor = 'blue';
//     setTimeout(()=>{
//     document.body.style.backgroundColor = 'green';
//     setTimeout(()=>{
//         document.body.style.backgroundColor = 'yellow';
//         setTimeout(()=>{
//             document.body.style.backgroundColor = 'orange';
//             setTimeout(()=>{
//                 document.body.style.backgroundColor = 'teal';
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// }, 1000);

// const changeColor = (color,delay,doNext) =>{
//     setTimeout(()=>{
//         document.body.style.backgroundColor = color;
//         doNext && doNext()
//     },delay);
// }

// changeColor('red',2000,()=>{
//     changeColor('blue',1000,()=>{
//         changeColor('green',1000,()=>{
//             changeColor('yellow',1000,()=>{
//                 changeColor('orange',1000,()=>{

//                 })
//             })
//         })
//     })
// });

const changeColor = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// changeColor('red',1000)
//     .then(() => (changeColor('blue',1000)))
//     .then(() => (changeColor('green',1000)))
//     .then(() => (changeColor('yellow',1000)))
//     .then(() => (changeColor('violet',1000)))
//     .then(() => (changeColor('black',1000)));

// const changeColor = async (color,delay) =>{

//     return setTimeout(() => {
//         document.body.style.backgroundColor = color;

//     },delay)
// }

async function rainbow() {
  await changeColor("red", 1000);
  await changeColor("blue", 1000);
  // await changeColor('green',1000)
  // await changeColor('yellow',1000)
  // await changeColor('orange',1000)
  // await changeColor('violet',1000)
  return "hello";
}

rainbow().then((data) => {
  console.log(data);
});

// async function printRainbow() {
//     await rainbow()
//     console.log(`${data}`)
// }

// callback Hell

// searchMovies('movieName',()=>{
//     saveToMyDb(movies,
//          ()=>{
//         // if saveToMyDb does work
//     },
//     ()=>{
//     //if savetoMyDb doesnt work

//     })
// },()=>{
//    //if searchMovies doesnt work
// })

// const fakeRequest = (url,sucess,failure) =>{
//     const delay = Math.floor(Math.random()*4000 +500);
//     setTimeout(()=>{
//         if(delay < 3000){
//             sucess('request granted')
//         }else{
//             failure('Error!')
//         }
//     },1000)
// }

// fakeRequest('lenovo.com/page1',
//     (grant)=>{
//         console.log(`Your ${grant}`)
//         fakeRequest('lenovo/page2',
//             (grant)=>{
//                 console.log(`Your ${grant}ed for page 2`)
//                 fakeRequest('lenovo/page3',
//                     (grant)=>{
//                         console.log(`Your ${grant}ed for page 3`)
//                     },
//                     (deny)=>{
//                         console.log(`${deny} page not found`)
//                     })
//             },
//             (deny)=>{
//                 console.log(`${deny} page not found`)
//             })
//     },
//     (deny)=>{
//         console.log(`${deny} page not found`)
//     })

// const fakeRequest = (url) =>{
//     return new Promise((allow,deny)=>{
//         const delay = Math.floor(Math.random()*4000 +500);
//         setTimeout(()=>{
//             if(delay < 3000){
//                 allow('allowed');
//             }else{
//                 deny('denied')
//             }
//         },1000)
//     })
// }

// fakeRequest('lenovo')
//     .then((y)=>{
//         console.log(`your request ${y} for page1`)
//         return fakeRequest('lenovo/page1')
//     })
//     .then((y)=>{
//         console.log(`your request ${y} for page2`)
//         return fakeRequest('lenovo/page2')
//     })
//     .then((y)=>{
//         console.log(`your request ${y} for page3`)
//         return fakeRequest('lenovo/page3')
//     })
//     .catch((n)=>{
//         console.log(`your request ${n} for page1`)
//     })

// const fakeRequest = (url) => {
//     return new Promise((resolve,reject) => {
//         const no = Math.random()
//         setTimeout(()=>{
//             if(no < 0.7){
//                 resolve('granted');
//             }else{
//                 reject('denied');
//             }
//         })
//     })
// }

// fakeRequest('hello.com')
//     .then((y)=>{
//         console.log(y)
//     })
//     .catch((n)=>{
//         console.log(n)
//     })
