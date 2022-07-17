import { Tenista } from "./tenista";
import { Programador } from "./programador";

const tenisPlayer1 = new Tenista('David Nalbandian', 33, 40);
const programmer1 = new Programador('Mark Zucaritas', 28, 5, 'javascript');

console.log(tenisPlayer1.saludar());

console.log(programmer1.saludar());

tenisPlayer1.saludarConPromesa().then((data) => console.log(data));
programmer1.saludarConPromesa().then((data) => console.log(data));
