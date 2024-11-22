const register = () => {
   return new Promise((resolve, reject) => {
        setTimeout(()  => {
            console.log('Please Register')
            const error = false; // Simulate success or failure
            if (!error) {
                resolve("Registration Successful");
            } else {
                reject("Registration Failed");
            }
        }, 2000)
    })
}

const login = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('Please Login :)');
            const error = false;
            if (!error){
                resolve('Login Successful')
            } else {
                reject('Login Failed')
            }
        }, 1000)
    })
}

const success = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Thank you :)');
            resolve('Thanq')
        }, 1000)
    })
}


register()
.then((message) => {
    console.log(message);
    return login();
})
.then((message) => {
    console.log(message);
    return success()
})
.then((message) => {
    console.log(message)
})
.catch((error) => {
    console.log('Error:', error)
})