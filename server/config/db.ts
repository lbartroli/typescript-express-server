
interface IDbConfig {
    base: string;
    name: string;
    username: string;
    password: string;
    domain: string;
    prod: string;
    dev: string;
    local: string;
}

class DbConfig implements IDbConfig {
    base: string;
    name: string;
    username: string;
    password: string;
    domain: string;
    prod: string;
    dev: string;
    local: string;
    constructor() {
        this.base = 'mongodb://';
        this.name = 'ts-test';
        this.username = 'admin';
        this.password = 'admin';
        this.domain = '@ds143707.mlab.com:43707/';
        this.prod = `${this.base}${this.username}:${this.password}${this.domain}${this.name}`;
        this.dev = `${this.base}${this.username}:${this.password}${this.domain}${this.name}`;
        this.local = this.base + 'localhost:27017/' + this.name;
    }
};

export const dbConfig = new DbConfig();