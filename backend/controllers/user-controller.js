
import { examplesFrank } from "../Examples/example-profile";

const users = [examplesFrank]

const UserController = (app) => {
  app.get("/api/user/:uid", find);
  app.post("/api/user", add);
  app.put("api/user/:uid", edit);
  app.delete("api/user/:uid", remove);
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
  users = users.map((u) => {
    User._id === uid ? { ...u, updates } : u;
  });
  res.sendStatus(200);
};

const remove = (req, res) => {
  const uid = req.params["uid"];
  users = users.filter((u) => u._id !== uid);
  res.sendStatus(200);
};

export default UserController;
