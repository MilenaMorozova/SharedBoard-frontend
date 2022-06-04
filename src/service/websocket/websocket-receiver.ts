// On start connection
function channelName(body: any) {
    // const { generalData } = store.getState();
    // generalData.mainUser.channel = body.channel_name;
    // store.dispatch(setMainUserAction(generalData.mainUser));
}

const MESSAGE_TYPES: {[key: string]: (body: any) => void} = {
    "channel_name": channelName,
}

export default function receive({type, ...data}: {type: string, data: any}) {
    if (type in MESSAGE_TYPES) {
        MESSAGE_TYPES[type](data);
    }
}