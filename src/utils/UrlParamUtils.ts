class UrlParamUtils {
  get params() {
    const { href } = window.location;
    const params = href.slice(href.indexOf('?') + 1);
    return new URLSearchParams(params);
  }

  getParamByName(paramName: string) {
    let value = this.params.get(paramName);
    return (value !== null) ? value : '';
  }

  getFileToken(): string {
    const { href } = window.location;
    const groupName = 'fileToken';
    const matchResult = href.match(`\/board\/(?<${groupName}>.*)`);
    return matchResult!.groups!.fileToken;
  }
}

const urlParamUtils = new UrlParamUtils();

export default urlParamUtils;
