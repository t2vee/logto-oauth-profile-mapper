// Copyright (c) 2024 t2vee. All rights reserved.
// Use of this source code is governed by an MPL license.
import {error, json} from "itty-router";

export default async (request, env) => {

	try {
		if (request.query.token !== env.TOKEN || !request.query || !request.query.token) {
			return error(401, 'ERR_UNAUTHORISED');
		}
		if (!request.query || !request.query.client) {
			return error(401, 'ERR_UNAUTHORISED');
		}
		const authHeader = request.headers.get("Authorization");
		const token = authHeader.slice('Bearer '.length)
		const clientId = request.query.client;
		const url = 'https://api.twitch.tv/helix/users';
		const response = await fetch(url, {
			method: 'GET',
			headers: new Headers({
				"Authorization": `Bearer ${token}`,
				"Client-Id": clientId,
			})
		});
		if (!response.ok) {
			throw { message: 'Failed to access resource - ERR 7856', status: response.status };
		}
		const data = await response.json();
		const payload = {
			"id": data.data[0].id,
			"display_name": data.data[0].display_name,
			"email": data.data[0].email,
			"image_url": data.data[0].profile_image_url
		}
		return json(payload);
	} catch (e) {
		console.error(e)
		return error(500)
	}
}
