import { BaseModelFilter } from '../../src/base_model.js';
export default class TestSetupFilter extends BaseModelFilter {
    static blacklist: string[];
    static camelCase: boolean;
    setup(query: any): void;
    username(username: string): void;
    email(email: string): void;
}
