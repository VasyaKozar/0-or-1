import queryString from 'query-string'; 

export async function postData(url = "", data = {}) {
  // Default options are marked with *

  const response = await fetch('http://localhost:10000' + url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "no-cors", // no-cors, *cors, same-origin
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: "same-origin", // include, *same-origin, omit
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    // redirect: "follow", // manual, *follow, error
    // referrerPolicy: "no-referrer", // no-referrer, *client
    body: queryString.stringify( data ), // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}




// (async () => {
//   const rawResponse = await fetch('https://httpbin.org/post', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({a: 1, b: 'Textual content'})
//   });
//   const content = await rawResponse.json();

//   console.log(content);
// })();
