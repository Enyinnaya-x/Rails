/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {
    pgm.createTable('users', {
        id: {
            type: 'serial',
            primaryKey: true
        },
        business_id: {
            type: 'bigint',
            references: 'businesses',
            onDelete: 'CASCADE',
            notNull: true
        },
        full_name: {
            type: 'varchar(255)',
            notNull: true
        },
        email: {
            type: 'varchar(255)',
            notNull: true,
            unique: true
        },
        phone: {
            type: 'varchar(20)',
            notNull: true
        },
        password: {
            type: 'varchar(255)',
            notNull: true
        },
        position: {
            type: 'varchar(255)',
            notNull: true
        },
        role: {
            type: 'varchar(255)',
            notNull: true
        },
        created_at: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('CURRENT_TIMESTAMP')
        },
        updated_at: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('CURRENT_TIMESTAMP')
        }
    })
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {};
