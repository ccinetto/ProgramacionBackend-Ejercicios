import app from './services/server';
import { DBService } from './services/db';

const puerto = 8080;

DBService.init();
app.listen(puerto, () => console.log(`SERVER UP ON PORT ${puerto}`));
