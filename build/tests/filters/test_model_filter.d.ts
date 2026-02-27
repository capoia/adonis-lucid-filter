import { BaseModelFilter } from '../../src/base_model.js';
export default class TestModelFilter extends BaseModelFilter {
    static blacklist: string[];
    username(username: string): void;
    email(email: string): void;
    company(id: number): void;
    companyId(id: number): void;
    isAdmin(flag: boolean): void;
    title(value: string): void;
    text(value: string): void;
    mobilePhone(value: string): void;
}
