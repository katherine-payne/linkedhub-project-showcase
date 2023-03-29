import { examplesFrank } from "../Examples/example-profile.js";

let users = [examplesFrank];

const UserController = (app) => {
  app.get("/api/users/:uid", find);
  app.post("/api/users", add);
  app.put("/api/users/:uid", edit);
  app.delete("/api/users/:uid", remove);
};

const find = (req, res) => {
  const uid = req.params.uid;
  const user = users.find((u) => u._id === uid);
  res.json(user);
};

const add = (req, res) => {
  const newUser = req.body;
  newUser._id = new Date().getTime() + "";
  users.push(newUser);
  res.json(newUser);
};

const edit = (req, res) => {
  const uid = req.params["uid"];
  const updates = req.body;
  users = users.map((u) => (u._id === uid ? { ...u, ...updates } : u));
  const updated = users.find((u) => u._id === uid);
  res.json(updated);
};

const remove = (req, res) => {
  const uid = req.params["uid"];
  users = users.filter((u) => u._id !== uid);
  res.sendStatus(200);
};

export default UserController;
