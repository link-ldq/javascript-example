// async function aw() {
//   const sleep = deplay => {
//     return new Promise((res, rej) => {
//       setTimeout(() => res(),deplay)
//     })
//   }
//   const task = i => {
//     return new Promise(async (res, rej) => {
//       await sleep(500)
//       console.log(i);
//       res(i)
//     })
//   }
//   let param = 0
//   for (let i = 0; i < 4; i++){
//     await task(i)
//   }
// }
// aw()

const sleep = deplay => {
  return new Promise((res, rej) => {
    setTimeout(() => res(), deplay);
  })
}

const task = i => {
  return new Promise(async (res) => {
    await sleep(500);
    console.log(i);
    i++
    res(i);
  })
}
[task, task, task, task, task, task, task, task].reduce(async (prev,cur)=> {
  const res = await prev
  return cur(res)
},2)