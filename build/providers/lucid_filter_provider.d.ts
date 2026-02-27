import type { ApplicationService } from '@adonisjs/core/types';
export default class LucidFilterProvider {
    protected app: ApplicationService;
    constructor(app: ApplicationService);
    boot(): Promise<void>;
}
