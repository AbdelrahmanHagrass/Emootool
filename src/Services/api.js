
export const getTweets = async (props) => {
    // User id
    const userId = props.userId;
    // Access Token
    const accessToken = props.accessToken;
    // Secret Access Token
    const accessTokenSecret = props.accessTokenSecret;
    const endpointURL = `http://localhost:8000/server/tweets`;
    const data = await fetch(endpointURL, {
        method: "POST",
        body: JSON.stringify({
            userId,
            accessToken,
            accessTokenSecret
        })
    }).then(res => {
        return res.json();
    })
    return data
}

export const checkFollow = async (props) => {
    const screen_name = props.screen_name;
    const source_id = props.source_id;
    const endpointURL = `http://localhost:8000/server/checkFollow`;
    const data = await fetch(endpointURL, {
        method: "POST",
        body: JSON.stringify({
            screen_name,
            source_id,

        })
    }).then(res => {
        return res.json();
    })
    return data
}
