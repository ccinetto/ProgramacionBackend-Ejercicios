import express from 'express';
import mainRouter from './routes/index';


const app = express();

app.listen(8080, () => console.log("SERVER UP"));

app.use('/api', mainRouter);


const delay = (time: number) => new Promise((resolve, reject) => {
  setTimeout(() => resolve('done'), time)
})


console.log("HOLAAAAA3");

delay(5000).then((a) => console.log("TERMINE DELAY"))
