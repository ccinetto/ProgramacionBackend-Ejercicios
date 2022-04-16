import {Router, Request, Response} from 'express';
import {PerimetroController} from '../controllers/Perimetro';
import {SuperficieController} from '../controllers/Superficie';

const router = Router();

router.get('/perimetro', (req: Request, res: Response) => {
  const {lado} = req.query;

  if(!lado || isNaN(Number(lado)))
    return res.status(400).json({
      msg: "mandame el lado"
    })

  const perimetro = PerimetroController.cuadrado(Number(lado));

  res.json({
    value: perimetro,
  })
  
})


router.get('/superficie', (req: Request, res: Response) => {
  const {lado} = req.query;

  if(!lado || isNaN(Number(lado)))
    return res.status(400).json({
      msg: "mandame el lado"
    })

  const superficie = SuperficieController.cuadrado(Number(lado));

  res.json({
    value: superficie,
  })
  
})

export default router;