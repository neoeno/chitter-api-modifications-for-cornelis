function PeepsModel () {}

PeepsModel.prototype.fetchPeeps = function() {
  return fetch('https://chitter-backend-api.herokuapp.com/peeps');
};

// function foo() {
//     // RETURN the promise
//     return fetch("/echo/json").then(function(response){
//         return response.json(); // process it inside the `then`
//     });
// }
//
// foo().then(function(response){
//     // access the value inside the `then`
// })
