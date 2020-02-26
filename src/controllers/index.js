import blockList from "./blocks/list";
import blockShow from "./blocks/show";
import userLogin from "./user/login";
import userShow from "./user/show";
import notebookList from "./notebook/list";
import notebookShow from "./notebook/show";
import notebookCreate from "./notebook/create";
import projectList from "./projects/list";
import projectShow from "./projects/show";
import projectCreate from "./projects/create";
import serviceList from "./services/list";
import serviceShow from "./services/show";
import serviceCreate from "./services/create";
import musicSpotifyToken from "./music/spotify_token";
import musicSpotifyTokenCallback from "./music/spotify_token_callback";
import musicSpotifyPlaylists from "./music/spotify_playlists";
import musicSpotifyRecentTracks from "./music/spotify_recent_tracks";
import messagingResponse from "./messaging/response";

export default {
  blocks: {
    list: blockList,
    show: blockShow
  },
  users: {
    login: userLogin,
    show: userShow
  },
  notebook: {
    list: notebookList,
    show: notebookShow,
    create: notebookCreate
  },
  projects: {
    list: projectList,
    show: projectShow,
    create: projectCreate
  },
  services: {
    list: serviceList,
    show: serviceShow,
    create: serviceCreate
  },
  music: {
    spotify_token: musicSpotifyToken,
    spotify_token_callback: musicSpotifyTokenCallback,
    spotify_playlists: musicSpotifyPlaylists,
    spotify_recent_tracks: musicSpotifyRecentTracks
  },
  messaging: {
    response: messagingResponse
  }
};
