// Mapper for environment variables
export const environment = process.env.NODE_ENV;
export const port = process.env.PORT || 3000;

export const serverConfig = {
    whiteList: ['http://localhost:4200'],
}

export const db = {
    name: process.env.DB_NAME || 'administaraiveLayer',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '27017',
    user: process.env.DB_USER || '',
    password: process.env.DB_USER_PWD || '',
};

export const corsUrl = process.env.CORS_URL;

export const tokenInfo = {
    accessTokenValidityDays: parseInt(process.env.ACCESS_TOKEN_VALIDITY_SEC || '0'),
    refreshTokenValidityDays: parseInt(process.env.REFRESH_TOKEN_VALIDITY_SEC || '0'),
    issuer: process.env.TOKEN_ISSUER || '',
    audience: process.env.TOKEN_AUDIENCE || '',
};

export const logDirectory = process.env.LOG_DIR;
