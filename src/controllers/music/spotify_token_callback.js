import axios from "axios";

const callback = async (req, res, next) => {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const redirect_uri = process.env.SPOTIFY_REDIRECT_URI;
  const code = req.query.code || null;

  const token_url = "https://accounts.spotify.com/api/token";
  const url_headers = {
    Authorization:
      "Basic " +
      Buffer.from(client_id + ":" + client_secret).toString("base64"),
    "Content-Type": "application/x-www-form-urlencoded"
  };
  const url_body = {
    code: code,
    redirect_uri: "http://" + redirect_uri,
    client_id: client_id,
    client_secret: client_secret,
    grant_type: "authorization_code"
  };

  const response = await axios({
    method: "post",
    url: token_url,
    params: url_body,
    headers: url_headers
  });

  let access_token, refresh_token, user;

  if (response.status == 200) {
    access_token = response.data.access_token;
    refresh_token = response.data.refresh_token;

    user = await axios({
      method: "get",
      url: "https://api.spotify.com/v1/me",
      headers: { Authorization: "Bearer " + access_token }
    });

    req.currentUser = user.data;
    req.spotifyAccessToken = access_token;
    req.spotifyRefreshToken = refresh_token;

    res.send(user.data);
  } else {
    res.send(response.status);
  }
};

export default callback;
