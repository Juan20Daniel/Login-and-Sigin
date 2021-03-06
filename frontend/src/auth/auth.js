import jwtDecode from 'jwt-decode';

export function verifiUser() {
    const accessToken = localStorage.getItem('accessToken');
    if(!accessToken) {
        return false;
    } else {
        const { idUser, firstname, lastname, email, expire } = jwtDecode(accessToken);
        const data = {
            idUser:idUser,
            firstname:firstname,
            lastname:lastname,
            email:email
        }
        return expireToken(expire) ? false : data;
    }
}
function expireToken(expire) {
    const seconds = 60;
    const now = (Date.now() + seconds) / 1000;
    return now > expire;
}