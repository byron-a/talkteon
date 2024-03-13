
export function register({fullName,email,password}){
    //   console.log(fullName,email,password);
    if(fullName && email && password){
        let details = {
            fullName,
            email,
            password
        }
        sessionStorage.setItem(details.fullName, JSON.stringify(details))
    }
}

