class Site {
    #id;

    #title;

    #url;

    constructor(id, title, url) {
        this.#id = id;
        this.#title = title;
        this.#url = url;
    }

    getID() {
        return this.#id;
    }

    getTitle() {
        return this.#title;
    }

    getURL() {
        return this.#url;
    }
}

module.exports = Site;