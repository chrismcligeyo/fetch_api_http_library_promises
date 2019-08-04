/**
 *easyHTTP Library
 * Library for making http requests
 *
 * @version 3.1.2
 * @author Christopher Rabut Mcligeyo
 *
  **/

class EasyHTTP{
    //no need for constructor
    //make HTTp GET Request

    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error)); //to catch error message

        });


    }

    //make HTTP post request
    post(url, data){ //data variable because you will return data
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(jsonData => resolve(jsonData))
                .catch(msg => reject(msg)); //to catch error message

        });


    }

    //make http PUT request . update
    put(url, data){ //data variable because you will return data
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(jsonData => resolve(jsonData))
                .catch(msg => reject(msg)); //to catch error message

        });


    }

    //Make an HTTP DELETE Request
    delete(url){ //delete does not need data
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json"
                }
                //got rid of body because we are not sending data
            })
                .then(response => response.json())
                .then(() => resolve("Resource Deleted")) // no data. an empty object will be returned.
                .catch(msg => reject(msg)); //to catch error message

        });


    }
}