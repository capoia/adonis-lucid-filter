import { Database } from '@adonisjs/lucid/database';
/**
 * Creates an instance of the database class for making queries
 */
export declare function createDatabase(): Promise<Database>;
/**
 * Creates needed database tables
 */
export declare function createTables(db: Database): Promise<void>;
