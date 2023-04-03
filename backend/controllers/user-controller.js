import * as dao from "../dao/daoUsers.js";

const UserController = (app) => {
  app.get("/api/users/:uid", find);
  app.post("/api/users", add);
  app.put("/api/users/:uid", edit);
  app.delete("/api/users/:uid", remove);
};

const find = async (req, res) => {
  const uid = req.params.uid;
  const user = await dao.find(uid)
  res.json(user);
};

const add = async (req, res) => {
  const newUser = req.body;
  res.json(await dao.add(newUser));
};

const edit = async (req, res) => {
  const uid = req.params["uid"];
  const updates = req.body;
  res.json(await dao.edit(uid, updates));
};

const remove = async (req, res) => {
  const uid = req.params["uid"];
  const status = await dao.remove(uid)
  res.sendStatus(status);
};

export default UserController;
