import { ServerRoute } from "../../routers/serverRouters";
import urlParamUtils from "../../utils/UrlParamUtils";
import AUTH_SERVICE from "../AuthService";
import receive from "./websocket-receiver";


class WebsocketConnection {
    socket: any;
    channelName: string;
    queueMessage: Array<any>;

    constructor() {
        this.socket = null;
        this.channelName = '';
        this.queueMessage = [];
    }

    get isConnect(): boolean {
        return this.socket !== null && this.socket.readyState === this.socket.OPEN;
    }

    onMessage(event: any) {
        const data = JSON.parse(event.data);
        receive(data);
    }

    private getWebsocketUrl(): string {
        const accessToken = localStorage.getItem("access");
        return `${ServerRoute.CHANNELS_SERVER_URL}/${urlParamUtils.getFileToken()}/${accessToken}/`
    }

    connect() {
        const url = this.getWebsocketUrl();
        this.socket = new WebSocket(url);
        this.socket.onopen = () => this.send();
        this.socket.onclose = this.onClose;
        this.socket.onmessage = this.onMessage;
        this.socket.onerror = () => {};
    }

    onClose(event: CloseEvent) {
        if (event.code === 4401) {
            AUTH_SERVICE.refreshToken()
            .then(() => {console.log("REFRESH"); WEBSOCKET_CONNECTION.connect()});
        }
    }

    send(content: any = null) {
        if (content) {
          this.queueMessage.push(content);
        }
        if (this.isConnect) {
          this.queueMessage.forEach((item) => this.socket.send(JSON.stringify(item)));
          this.queueMessage = [];
        }
    }
}

const WEBSOCKET_CONNECTION = new WebsocketConnection();
export default WEBSOCKET_CONNECTION;