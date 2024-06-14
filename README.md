set vars in wrangler.toml
deploy with `wrangler deploy`
set endpoints in logto:


## spotify
endpoint:
```
https://<worker url>/api/v1/oauth-user-info/endpoint/api-spotify-com/v1/me?token=<worker token>
```

profile map:
```json
{
  "id": "id",
  "name": "display_name",
  "email": "email",
  "avatar": "image_url"
}
```
## twitch
endpoint:
```
https://<worker url>/api/v1/oauth-user-info/endpoint/api-twitch-com/helix/users?token=<worker token>&client=<twitch outh client id>
```
profile map:
```json
{
  "id": "id",
  "name": "display_name",
  "email": "email",
  "avatar": "image_url"
}
```
