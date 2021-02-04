# twitchdl

Node.js package to download all the clips from twitch that you want!

## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) to install twitchdl.

```bash
npm install twitchdl
```

## Usage

To be able to access the Twitch API, you will need to create a developer account at https://dev.twitch.tv/. Then, register a new application and note down the client id and client secret.

```javascript
const tdl = require('twitchdl');

let clip = "https://www.twitch.tv/sanchovies/clip/TenuousPunchyKuduWoofer";

tdl.getBearerToken(client_id, client_secret).then((oauth) => {
    tdl.getTwitchVideo(client_id, oauth.access_token, clip).then((video_link) => {
        console.log(video_link);
    });
});
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Files to run tests will be pushed soon to the [github project](https://github.com/stefpi/twitchdl)

## License
[MIT](https://choosealicense.com/licenses/mit/)