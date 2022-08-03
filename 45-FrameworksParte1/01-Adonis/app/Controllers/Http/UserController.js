"use strict";
const User = use("App/Models/User");

class UserController {
  async login({ request, auth }) {
    const { email, password } = request.all();
    const token = await auth.attempt(email, password);

    return token;
  }

  async store({ request, auth, response }) {
    try {
      await auth.check();
    } catch (error) {
      response.status(401).send("Missing or invalid jwt token");
    }

    const { username, email, password } = request.all();

    try {
      console.log(request.all());
      const user = await User.create({
        username,
        email,
        password,
      });

      return user;
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }
}

module.exports = UserController;
