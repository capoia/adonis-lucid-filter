import type { LucidFilter } from './types/filter.js';
/**
 * Class to filtering AdonisJS Lucid ORM
 *
 * @class BaseModelFilter
 * @constructor
 */
export declare class BaseModelFilter implements LucidFilter {
    $query: any;
    $input: object;
    ['constructor']: typeof BaseModelFilter;
    $blacklist: string[];
    static blacklist: string[];
    static dropId: boolean;
    static camelCase: boolean;
    setup?($query: any): void;
    constructor($query: any, $input: object);
    handle(): any;
    whitelistMethod(method: string): boolean;
    $filterByInput(): void;
    $getFilterMethod(key: string): string;
    static removeEmptyInput(input: object): object;
    $methodIsCallable(method: string): boolean;
    $methodIsBlacklisted(method: string): boolean;
}
export default BaseModelFilter;
