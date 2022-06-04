import { ServerRoute } from "../../routers/serverRouters";
import urlParamUtils from "../../utils/UrlParamUtils";
import receive from "./websocket-receiver";


class WebsocketConnection {
    socket: any;
    user: any;
    queueMessage: Array<any>;

    constructor() {
        this.socket = null;
        this.user = null;
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
        this.socket.onclose = () => {};
        this.socket.onmessage = this.onMessage;
        this.socket.onerror = () => {};
    }

    send(content = null) {
        if (content) {
          this.queueMessage.push(content);
        }
        if (this.isConnect) {
          this.queueMessage.forEach((item) => this.socket.send(item));
          this.queueMessage = [];
        }
    }
}

const WEBSOCKET_CONNECTION = new WebsocketConnection();
export default WEBSOCKET_CONNECTION;