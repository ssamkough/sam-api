import axios from "axios";
import querystring from "querystring";

const response = async (req, res, next) => {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const redirect_uri = process.env.SPOTIFY_REDIRECT_URI;
  const scope = "user-read-recently-played";

  const authorize_url =
    "https://accounts.spotify.com/authorize?" +
    querystring.stringify({
      response_type: "code",
      client_id: client_id,
      scope: scope,
      redirect_uri: "http://" + redirect_uri
    });

  res.send(authorize_url);
};

export default response;
