/**
 *easyHTTP Library
 * Library for making http requests
 *
 * @version 3.1.2
 * @author Christopher Rabut Mcligeyo
 *
  **/

class EasyHTTP {
    //no need for constructor
    //make HTTp GET Request

    async get(url){

        const response = await fetch(url);

        const resData = await response.json();
        return resData;




    }

    //make HTTP post request
   async post(url, data){ //data variable because you will return data

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })

       const resData = await response.json();
       return resData;




    }

    //make http PUT request . update
   async put(url, data){ //data variable because you will return data

        const response = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const resData = await response.json();

            return resData;




    }

    //Make an HTTP DELETE Request
   async  delete(url){ //delete does not need data

        const response =  await fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json"
                }
                //got rid of body because we are not sending data
            });

       const resData = await response.json();

       return resData;



    }
}