const p = new Promise((resolve,reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.baidu.com');
  xhr.send();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.readyState >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(xhr.status);
      }
    }
  } 
})

p.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})  