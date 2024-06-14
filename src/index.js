// Copyright (c) 2024 t2vee. All rights reserved.
// Use of this source code is governed by an MPL license.

// ITTY
import {AutoRouter, cors, error} from 'itty-router'
// HANDLERS
import HandleSpotifyUserInfoEndpoint from './handlers/handleSpotifyUserInfoEndpoint'
import HandleTwitchUserInfoEndpoint from "./handlers/handleTwitchUserInfoEndpoint";


const { preflight, corsify } = cors({
    origin: 'https://id.mxs.app',
    credentials: true,
    allowMethods: ['GET', 'POST'],
    maxAge: 15000
})
const router = AutoRouter({
    before: [preflight],
    finally: [corsify],
});

router
	.get('/api/v1/oauth-user-info/endpoint/api-spotify-com/v1/me', HandleSpotifyUserInfoEndpoint)
	.get('/api/v1/oauth-user-info/endpoint/api-twitch-com/helix/users', HandleTwitchUserInfoEndpoint)

router
    .all('*', () => error(404, 'this is not the route you are looking for'))

export default { ...router }
