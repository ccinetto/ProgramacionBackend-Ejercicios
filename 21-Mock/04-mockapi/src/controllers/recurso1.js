import RecursoApi from '../api/recurso1/index';

class Recurso1 {
  async leer(req, res) {
    const id = req.params.id;

    if (id) {
      const data = await RecursoApi.get(Number(id));
      return res.json({ data });
    }

    res.json(await RecursoApi.get());
  }

  async generar(req, res) {
    const cant = req.params.cant ? Number(req.params.cant) : 50;

    for (let i = 0; i < cant; i++) {
      await RecursoApi.post();
    }

    res.json({
      result: 'ok',
    });
  }

  async actualizar(req, res) {
    const id = Number(req.params.id);

    const resource = await RecursoApi.get(id);

    if (!resource.length) return res.status(404).json({ msg: 'id not found' });

    const dataNueva = req.body;
    await RecursoApi.put(id, dataNueva);

    res.json({ msg: 'ok' });
  }

  async borrar(req, res) {
    const id = Number(req.params.id);

    await RecursoApi.delete(id);
    res.json({ msg: 'ok' });
  }
}

export const Recurso1Controller = new Recurso1();
