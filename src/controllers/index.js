import blockList from "./blocks/list";
import blockShow from "./blocks/show";
import userLogin from "./user/login";
import userShow from "./user/show";
import notebookList from "./notebook/list";
import notebookShow from "./notebook/show";
import notebookCreate from "./notebook/create";
import notebookUpdate from "./notebook/update";
import notebookDestroy from "./notebook/destroy";
import projectList from "./projects/list";
import projectShow from "./projects/show";
import projectCreate from "./projects/create";
import projectUpdate from "./projects/update";
import projectDestroy from "./projects/destroy";
import serviceList from "./services/list";
import serviceShow from "./services/show";
import serviceCreate from "./services/create";
import serviceUpdate from "./services/update";
import serviceDestroy from "./services/destroy";
import articlesList from "./articles/list";
import articlesCreate from "./articles/create";
import articlesUpdate from "./articles/update";
import articlesDestroy from "./articles/destroy";
import peopleList from "./people/list";
import peopleCreate from "./people/create";
import peopleUpdate from "./people/update";
import peopleDestroy from "./people/destroy";
import serviceCreate from "./services/create";
import serviceUpdate from "./services/update";
import serviceDestroy from "./services/destroy";
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
    create: notebookCreate,
    update: notebookUpdate,
    destroy: notebookDestroy
  },
  projects: {
    list: projectList,
    show: projectShow,
    create: projectCreate,
    update: projectUpdate,
    destroy: projectDestroy
  },
  services: {
    list: serviceList,
    show: serviceShow,
    create: serviceCreate,
    update: serviceUpdate,
    destroy: serviceDestroy
  },
  articles: {
    list: articlesList,
    create: articlesCreate,
    update: articlesUpdate,
    destroy: articlesDestroy
  },
  people: {
    list: peopleList,
    create: peopleCreate,
    update: peopleUpdate,
    destroy: peopleDestroy
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
