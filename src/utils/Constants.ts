import * as dotenv from 'dotenv';

const PROD_MODE = (process.env['PROD_MODE'] as any) || 'dev';
dotenv.config({ path: __dirname + '/../../../.env' });

// mail config
const MAIL_CONFIG = {
    MAIL_PORT: process.env['MAIL_CONFIG_MAIL_PORT'],
    MAIL_HOST: process.env['MAIL_CONFIG_MAIL_HOST'],
    MAIL_USER: process.env['MAIL_CONFIG_MAIL_USER'],
    MAIL_PASSWORD: process.env['MAIL_CONFIG_MAIL_PASSWORD'],
};

export const Constants = {
    PROD_MODE,
    MAIL_CONFIG,
};