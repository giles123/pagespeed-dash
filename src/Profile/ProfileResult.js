class ProfileResult {
    constructor(url, title, responseCode, score) {
        this.url = url;
        this.title = title;
        this.response_code = responseCode;
        this.score = score;
    }
}

module.exports = ProfileResult;