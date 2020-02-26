import axios from "axios";

const playlists = async (req, res, next) => {
  let user_id = user.data.id;
  const playlists = await axios({
    method: "get",
    url: `https://api.spotify.com/v1/users/${user_id}/playlists`,
    headers: { Authorization: "Bearer " + access_token }
  });

  res.send(playlists.data);
};

export default playlists;
