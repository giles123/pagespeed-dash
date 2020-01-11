class ProfileResult {

    #site;

    #responseCode;

    #score;

    #error;

    constructor(site, responseCode, score, error = null) {
        this.#site = site;
        this.#responseCode = responseCode;
        this.#score = score;
        this.#error = error;
    }

    toJSON() {
        return {
            title: this.#site.getTitle(),
            url: this.#site.getURL(),
            response_code: this.#responseCode,
            score: this.#score,
            error: this.#error
        };
    }
}

module.exports = ProfileResult;