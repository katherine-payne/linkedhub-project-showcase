import modelUsers from "../models/modelUsers.js";

export const find = (uid) => modelUsers.findById(uid);
export const add = (user) => modelUsers.create(user);
export const edit = (uid, user) =>
  modelUsers.findByIdAndUpdate(uid, { $set: user }, { new: true });
export const remove = (uid) => modelUsers.deleteOne({ _id: uid });
