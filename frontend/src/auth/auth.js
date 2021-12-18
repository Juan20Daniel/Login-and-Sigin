import jwtDecode from 'jwt-decode';

export function verifiUser() {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    if(!accessToken && !refreshToken) {
        return false;
    } else {
        const { exp } = jwtDecode(accessToken);
        if(!expireToken(exp)) {
            return accessToken;
        } else {
            const { exp } = jwtDecode(refreshToken);
            if(!expireToken(exp)) {
                console.log("The refresh token it valid");
                return true;
            } else {
                return false;
            }
        }
    }
}

function expireToken(exp) {
    const seconds = 60;
    const now = (Date.now() + seconds) / 1000;
    return now > exp;
}