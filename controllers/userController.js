const querystring = require('querystring');
const client_id = '2ae33733b5514b60beceeed3e469d2ec'; // Your client id
const client_secret = 'e2224aa93b4142b0bb086d85ad0600a0'; // Your secret
const redirect_uri = 'http://localhost:8888/callback';
const stateKey = 'spotify_auth_state';
const request = require('request');

const generateRandomString = (length) => {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

module.exports = {
    login: (req, res) => {
        const state = generateRandomString(16);
        res.cookie(stateKey, state);
        
        // your application requests authorization
        const scope = 'user-read-private user-read-email';
        res.redirect('https://accounts.spotify.com/authorize?' +
            querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
        }));
    },
    callback: (req, res) => {

        const code = req.query.code || null;
        const state = req.query.state || null;
        const storedState = req.cookies ? req.cookies[stateKey] : null;
      
        if (state === null || state !== storedState) {
            res.redirect('/#' +
                querystring.stringify({error: 'state_mismatch'})
            );
        } 
        else {
            res.clearCookie(stateKey);
            const authOptions = {
                url: 'https://accounts.spotify.com/api/token',
                form: {
                code: code,
                redirect_uri: redirect_uri,
                grant_type: 'authorization_code'
                },
                headers: {
                'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
                },
                json: true
            };
      
            request.post(authOptions, (error, response, body) => {
                if (!error && response.statusCode === 200) {
        
                var access_token = body.access_token,
                    refresh_token = body.refresh_token;
        
                var options = {
                    url: 'https://api.spotify.com/v1/me',
                    headers: { 'Authorization': 'Bearer ' + access_token },
                    json: true
                };
        
                // use the access token to access the Spotify Web API
                request.get(options, function(error, response, body) {
                    console.log(body);
                });
        
                // we can also pass the token to the browser to make requests from there
                res.redirect('/#' +
                    querystring.stringify({
                    access_token: access_token,
                    refresh_token: refresh_token
                    }));
                } else {
                res.redirect('/#' +
                    querystring.stringify({
                    error: 'invalid_token'
                    }));
                }
            })
        }
    }
}