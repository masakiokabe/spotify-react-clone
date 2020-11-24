//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint =
"https://accounts.spotify.com/authorize"; // this is the login API

const redirectUri ="http://localhost:3000/";

const clientId = "5fce1ce62d464e588351605ae12c8492"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

// we need to get the access token the 
//trying to pull the access token out
export const getTokenFromUrl = () => {
    return window.location.hash //#tag のloctionをcatchする
        .substring(1)　//任意の箇所を１箇所選び、
        .split('&')　  //分ける
        .reduce((initial, item) => {
            // #accessToken=mysupersecretkey&name=masaki
            let parts = item.split('=');
            initial[parts[0]] = 
            decodeURIComponent(parts[1]);

            return initial
        }, {});
}

//passing client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")} to ${authEndpoint} as a parameter 
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
    )}&response_type=token&show_dialog=true`;

 //since spotify already provide you a login api,
 //all you need to do is just passing a redirectUri, clientId, and scopes 