import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

export const authEndpoint = 'https://accounts.spotify.com/authorize';
export const clientId = '33cff7bd710f4bcd910eb378dea331a4';
export const redirectUri = 'http://localhost:3000/callback';
export const scopes = ['playlist-read-private'];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}&response_type=token`;

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const setAccessToken = (token) => {
  spotifyApi.setAccessToken(token);
};

export default spotifyApi;
