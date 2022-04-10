import { Router, Response, Request } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({
    msg: "HOLA Recurso 1",
  })
})

export default router;