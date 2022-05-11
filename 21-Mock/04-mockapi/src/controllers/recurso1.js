import { Recurso1API } from '../api/recurso1';

class Recurso1 {
    leer(req, res) {
        const id = req.params.id;

        if (id) {
            const data = Recurso1API.get(Number(id))
            return res.json({ data });
        }

        res.json(Recurso1API.get());
    }

    generar(req, res) {
        const cant = req.params.cant ? Number(req.params.cant) : 50;

        for (let i = 0; i < cant; i++) {
            Recurso1API.post();
        }

        res.json({
            result: "ok",
        })
    }

    actualizar(req, res) {
        const id = Number(req.params.id);

        const resource = Recurso1API.get(id)

        if (!resource.length)
            return res.status(404).json({ msg: 'id not found' })


        const dataNueva = req.body;
        Recurso1API.put(id, dataNueva);

        res.json({ msg: 'ok' });

    }

    borrar(req, res) {
        const id = Number(req.params.id);

        const resource = Recurso1API.get(id)

        if (!resource.length)
            return res.status(404).json({ msg: 'id not found' })

        Recurso1API.delete(id);
        res.json({ msg: 'ok' });

    }
}


export const Recurso1Controller = new Recurso1();