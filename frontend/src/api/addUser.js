const url = "http://localhost:3001/api/addUser";

export function addUser(e, data) {
    e.preventDefault();
    fetch(url, {
        method:"POST",
        body:JSON.stringify(data),
        headers: {
            "Content-Type":"application/json"
        }
    }).then(res => res.json())
    .then(data => {
        localStorage.setItem("accessToken", data.accessToken);
    })
    .catch((err) => {
        console.log(err);
    });
}