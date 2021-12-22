const url = "http://localhost:3001/api/access/login";

export function login(data) {
    return fetch(url,{
        method:'POST',
        body:JSON.stringify(data),
        headers: {
            "Content-Type":"application/json"
        }
    }).then(response => {
        if(response.status !== 200) {
            return false;
        } else {
            return response.json();
        }
    }).then(result => {
        return result;
    })
}