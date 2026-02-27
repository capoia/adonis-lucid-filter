import { BaseCommand } from '@adonisjs/core/ace';
export default class MakeFilter extends BaseCommand {
    static commandName: string;
    static description: string;
    /**
     * The name of the model file.
     */
    name: string;
    /**
     * Run command
     */
    run(): Promise<void>;
}
