"use strict";
const Proyecto = use("App/Models/Proyecto");

class ProyectoController {
  async index({ request, auth, response }) {
    const user = await auth.getUser();
    console.log(user);

    const proyectos = await user.proyectos().fetch();
    response.json(proyectos);
  }

  async create({ request, auth, response }) {
    const user = await auth.getUser();
    const { nombre } = request.all();

    const nuevoProyecto = new Proyecto();

    nuevoProyecto.fill({
      nombre,
    });

    await user.proyectos().save(nuevoProyecto);
    response.json(nuevoProyecto);
  }

  async destroy({ request, auth, params, response }) {
    const user = await auth.getUser();
    const { id } = params;

    const proyecto = await Proyecto.find(id);

    if (proyecto.user_id != user.id)
      return response.json({
        msg: "solo el dueño del proyecto puede borrarlo",
      });

    await proyecto.delete();

    response.json({
      msg: "Proyecto borrado",
      proyecto: proyecto,
    });
  }
}

module.exports = ProyectoController;
