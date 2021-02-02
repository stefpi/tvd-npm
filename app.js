const request = require('request');
const thenrequest = require('then-request');

exports.getBearerToken = (client_id, client_secret) => {
    return new Promise(resolve => {
        const bearerOptions = {
            method: 'POST',
            url: "https://id.twitch.tv/oauth2/token?client_id=" + client_id + "&client_secret=" + client_secret + "&grant_type=client_credentials",
            headers: {}
        };
        request(bearerOptions, (err, res, body) => {
            if (err) {console.log(err);}
            const contents = JSON.parse(body);
            console.log(contents);
            resolve(contents);
        });
    });
}

exports.getTwitchVideo = (client_id, access_token, clip_link) => {
    return new Promise(resolve => {
        let wordID;

        clip = clip_link;
        console.log(clip);
        wordID = clip.split("clip/").pop().split(" ")[0];
        console.log(wordID + "\n");

        let videoLink;

        console.log('https://api.twitch.tv/helix/clips?id=' + wordID + "\n");
        let url = 'https://api.twitch.tv/helix/clips?id=' + wordID;
        let headers = {
            'Authorization': "Bearer " + access_token,
            'Client-ID': client_id
        };

        thenrequest('GET', url, {headers}).done((res, err) => {
            if (err) {console.log(err);}
            const contents = JSON.parse(res.body);
            let thumbStr = contents.data[0].thumbnail_url;
            let thumbArr = thumbStr.split("-preview-");
            videoLink = thumbArr[0] + ".mp4";
            resolve(videoLink);
        });
    });
}

exports.getTwitchVideos = (client_id, access_token, clip_links) => {
    return new Promise(resolve => {
        let wordID = [];

        clips = clip_links.split("\n");
        for (let i = 0; i < clips.length; i++) {
            console.log(clips[i]);
            wordID[i] = clips[i].split("clip/").pop().split(" ")[0];
            console.log(wordID[i] + "\n");
        }

        let videoLinks = [];

        for (let i = 0; i < clips.length; i++) {
            console.log('https://api.twitch.tv/helix/clips?id=' + wordID[i] + "\n");
            const options = {
                url: 'https://api.twitch.tv/helix/clips?id=' + wordID[i],
                headers: {
                    'Authorization': "Bearer " + access_token,
                    'Client-ID': client_id
                }
            };

            let url = 'https://api.twitch.tv/helix/clips?id=' + wordID[i];
            let headers = {
                'Authorization': "Bearer " + access_token,
                'Client-ID': client_id
            };

            thenrequest('GET', url, {headers}).done((res, err) => {
                if (err) {console.log(err);}
                const contents = JSON.parse(res.body);
                let thumbStr = contents.data[0].thumbnail_url;
                let thumbArr = thumbStr.split("-preview-");
                console.log(thumbArr[0] + ".mp4");
                videoLinks[i] = thumbArr[0] + ".mp4";
            });
        }
        resolve(videoLinks);
    });
}