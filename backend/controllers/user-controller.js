import * as dao from "../dao/daoUsers.js";

const UserController = (app) => {
  app.get("/api/users/roles/:role", findAllByRole);
  app.get("/api/users", find);
  app.get("/api/users/:uid", find);
  app.put("/api/users/:uid", edit);
  app.delete("/api/users/:uid", remove);
  app.post("/api/users/register", register);
  app.post("/api/users/login", login);
  app.post("/api/users/logout", logout);
};

const findAllByRole = async (req, res) => {
  const role = req.params["role"];
  res.json(await dao.findAllByRole(role));
};

const find = async (req, res) => {
  let uid = req.params.uid;
  if (!uid && req.session.currentUser) {
    uid = req.session.currentUser._id;
  }
  if (!uid) {
    res.json({});
    return;
  }
  const user = await dao.findUser(uid);
  res.json(user);
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

const register = async (req, res) => {
  const newUser = req.body;
  const existingUser = await dao.findUserByEmail(req.body.email);
  if (existingUser) {
    res.sendStatus(403);
    return;
  } else {
    const u = await dao.createUser(newUser);
    req.session.currentUser = u;
    res.json(req.session);
  }
};

const login = async (req, res) => {
  const user = req.body;
  const existingUser = await dao.findUserByEmail(user.email);
  if (existingUser && user.password === existingUser.password) {
    req.session.currentUser = existingUser;
    res.send(req.session);
  } else {
    res.sendStatus(401);
  }
};

const logout = async (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
};

export default UserController;
