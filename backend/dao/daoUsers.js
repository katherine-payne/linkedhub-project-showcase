import modelUsers from "../models/modelUsers.js";

export const findAllByRole = (role) => modelUsers.find({role})
export const findUser = (uid) => modelUsers.findById(uid);
export const createUser = (user) => modelUsers.create(user);
export const deleteUser = (uid) => modelUsers.deleteOne({ _id: uid });
export const updateUser = (uid, user) =>
  modelUsers.findByIdAndUpdate(
    uid,
    { $set: user },
    {
      new: true,
    }
  );
export const findUserByEmail = (email) =>
  modelUsers.findOne({ email });
