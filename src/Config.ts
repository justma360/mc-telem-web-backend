import dotenv from 'dotenv';

dotenv.config();

const { DB_USERNAME, DB_PASSWORD, PORT, JWT_SECRET } = process.env as { [key: string]: string };

const Config = {
  dbUsername: DB_USERNAME,
  dbPassword: encodeURI(DB_PASSWORD),
  port: PORT,
  jwtSecret: JWT_SECRET,
};

export default Config;
