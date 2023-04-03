import * as dao from "../dao/daoUsers.js";

const UserController = (app) => {
  app.get("/api/users/:uid", find);
  app.post("/api/users", add);
  app.put("/api/users/:uid", edit);
  app.delete("/api/users/:uid", remove);
};

const find = async (req, res) => {
  const uid = req.params.uid;
  const user = await dao.findUser(uid);
  res.json(user);
};

const add = async (req, res) => {
  const newUser = req.body;
  const u = await dao.createUser(newUser);
  res.json(u);
};

const edit = async (req, res) => {
  const uid = req.params["uid"];
  const updates = req.body;
  const u = await dao.updateUser(uid, updates);
  res.json(u);
};

const remove = async (req, res) => {
  const uid = req.params["uid"];
  const status = await dao.deleteUser(uid);
  res.json(status);
};

export default UserController;
