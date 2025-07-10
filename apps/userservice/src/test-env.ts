import * as dotenv from 'dotenv';
import { join } from 'path';
console.log('__dirname',__dirname);
dotenv.config({
  path: join(__dirname, '..', '.env'),
});
console.log("DB_USERNAME: ", process.env.DB_USERNAME);