// 异步任务
const list = [100, 300, 200, 500, 100, 100, 200, 150, 300, 100, 100, 100];

const handler = (i) =>
  new Promise( (resolve) => {
    setTimeout(resolve, i, i)
  });
async function taskPool(limit, tasks, handler) {
  const tasklist = [];
  const executing = [];
  for (const task of tasks) {
    console.log("循环", task);
    const p = Promise.resolve().then(() => {
      console.log("初始化", task);
      return handler(task)
    })
    tasklist.push(p)
    if (limit < tasks.length) {
        const e = p.then(() => {
          console.log(executing.indexOf(e));
          return executing.splice(executing.indexOf(e), 1) 
        })
      executing.push(e)
      if (executing.length >= limit) {
        console.log("运行Promise.race");
        await Promise.race(executing);
      }
    }
  }
  return Promise.all(tasklist)
}
taskPool(3, list, handler)
