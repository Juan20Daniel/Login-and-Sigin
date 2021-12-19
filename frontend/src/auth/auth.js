import jwtDecode from 'jwt-decode';

export function verifiUser() {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    if(!accessToken && !refreshToken) {
        return false;
    } else {
        const { expira } = jwtDecode(accessToken);
        if(!expireToken(expira)) {
            return accessToken;
        } else {
            const { expira } = jwtDecode(refreshToken);
            if(!expireToken(expira)) {
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