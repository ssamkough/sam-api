import axios from "axios";

const recent_tracks = async (req, res, next) => {
  const recent_tracks = await axios({
    method: "get",
    url: `https://api.spotify.com/v1/me/player/recently-played`,
    headers: { Authorization: "Bearer " + access_token }
  });

  res.send(recent_tracks.data);
};

export default recent_tracks;
