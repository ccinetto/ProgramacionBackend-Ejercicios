// deno-lint-ignore-file require-await
import { Context, helpers } from "../../deps.ts";
import type { User } from "../types/user.ts";
import * as db from "../db/index.ts";

export const findAllUsers = async (ctx: Context) => {
  const users: User[] = await db.find();
  ctx.response.body = users;
}

export const findUser = async (ctx: Context) => {
  const { id } = helpers.getQuery(ctx, { mergeParams: true });
  try {
    const user: User = await db.findUserById(id);
    ctx.response.body = user;
  } catch (err) {
    ctx.response.status = 404;
    ctx.response.body = { msg: err.message };
  }
};

export const createUser = async (ctx: Context) => {
  try {
    const { name, birthDate } = await ctx.request.body().value;
    const createdUser: User = await db.createUser(name, birthDate);
    ctx.response.body = createdUser;
  } catch (err) {
    ctx.response.status = 500;
    ctx.response.body = { msg: err.message };
  }
};

export const updateUser = async (ctx: Context) => {
  ctx.response.body = { msg: "User updated!" };
};

export const deleteUser = async (ctx: Context) => {
  ctx.response.body = { msg: "User deleted!" };
};

