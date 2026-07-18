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
    pgm.createTable('businesses', {
        id: {
            type: 'serial',
            primaryKey: true
        },
        name: {
            type: 'varchar(255)',
            notNull: true,
            unique: true
        },
        phone: {
            type: 'varchar(20)',
            notNull: true
        },
        email:{
            type: 'varchar(255)',
            unique: true,
            notNull: true
        },
        location: {
            type: 'text',
            notNull: false
        },
        staff_no: {
            type: 'bigint',
            notNull: true,
            default: 1
        },
        logo: {
            type: 'text',
            notNull: false
        },
        description: {
            type: 'text',
            notNull: false,
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
