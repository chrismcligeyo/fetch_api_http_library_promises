const http = new EasyHTTP();


//get users. json placeholder
// http.get("http://jsonplaceholder.typicode.com/users")
//         .then(data => console.log(data)) //getdata
//         .catch(error => console.log(error)); //display an arry with 10 users


//User data

const data = {
    name: "Marcus bony",
    username: "bony",
    email: "j@gmail.com"
}

//create user
// http.post("http://jsonplaceholder.typicode.com/users", data)
//     .then(data => console.log(data)) //getdata . displays {name: "Marcus bony", username: "bony", email: "j@gmail.com", id: 11}
//     .catch(error => console.log(error)); //display an arry with 10 users


//update users

// http.put("http://jsonplaceholder.typicode.com/users/2", data)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

//Delete users
http.delete("http://jsonplaceholder.typicode.com/users/6")
    .then(data => console.log(data)) // displays resource deleted
    .catch(error => console.log(error)); //
