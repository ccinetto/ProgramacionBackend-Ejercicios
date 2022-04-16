import {Router, Request, Response} from 'express';
import {PerimetroController} from '../controllers/Perimetro';
import {SuperficieController} from '../controllers/Superficie';

const router = Router();

router.get('/perimetro', (req: Request, res: Response) => {
  const {base, altura} = req.query;

  if(!base || isNaN(Number(base)))
    return res.status(400).json({
      msg: "mandame la base"
    });

  if(!altura || isNaN(Number(altura)))
    return res.status(400).json({
      msg: "mandame la altura"
    })

  const perimetro = PerimetroController.rectangulo(Number(base), Number(altura));

  res.json({
    value: perimetro,
  })
  
})


router.get('/superficie', (req: Request, res: Response) => {
  const {base, altura} = req.query;

  if(!base || isNaN(Number(base)))
    return res.status(400).json({
      msg: "mandame la base"
    });

  if(!altura || isNaN(Number(altura)))
    return res.status(400).json({
      msg: "mandame la altura"
    })

  const superficie = SuperficieController.rectangulo(Number(base), Number(altura));

  res.json({
    value: superficie,
  })
  
})

export default router;