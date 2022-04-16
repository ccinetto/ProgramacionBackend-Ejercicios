import {Router, Request, Response} from 'express';
import {PerimetroController} from '../controllers/Perimetro';
import {SuperficieController} from '../controllers/Superficie';

const router = Router();

router.get('/perimetro', (req: Request, res: Response) => {
  const {radio} = req.query;

  if(!radio || isNaN(Number(radio)))
    return res.status(400).json({
      msg: "mandame el radio del circulo"
    })

  const perimetro = PerimetroController.circulo(Number(radio));

  res.json({
    value: perimetro,
  })
  
})


router.get('/superficie', (req: Request, res: Response) => {
  const {radio} = req.query;

  if(!radio || isNaN(Number(radio)))
    return res.status(400).json({
      msg: "mandame el radio del circulo"
    })

  const superficie = SuperficieController.circulo(Number(radio));

  res.json({
    value: superficie,
  })
  
})

export default router;