# twitchdl

Node.js package to download all the clips from twitch that you want!

## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) to install twitchdl.

```bash
npm install twitchdl
```

## Usage

```javascript
const tdl = require('twitchdl');

tdl.getBearerToken(client_id, client_secret).then((oauth) => {
    tdl.getTwitchVideo(client_id, oauth.access_token, clip1).then((video_link) => {
        console.log(video_link);
    });
});
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)