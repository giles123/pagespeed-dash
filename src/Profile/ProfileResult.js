class ProfileResult {
    constructor(site, responseCode, score, error = null) {
        this.site = site;
        this.response_code = responseCode;
        this.score = score;
        this.error = error;
    }
}

module.exports = ProfileResult;