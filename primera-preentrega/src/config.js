import * as url from "url";

const config = {
    PORT:8080,
    DIRNAME: URL.fikleURLToPath(new URL(".",import.meta.url)),
    get UPLOAD_DIR() {return `${this.DIRNAME}/public/img`}
};

export default config;