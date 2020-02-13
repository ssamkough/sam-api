import db from "../../database/config";

const show = async (req, res, next) => {
  const usersRef = db.collection("users").doc("sammysamkough@gmail.com");
  const userDoc = await usersRef.get();
  const user = userDoc.data();

  delete user.password;
  delete user.profile_image_url;
  delete user.timestamp;

  res.json(render(user));
};

const render = post => {
  return {
    status: 1000,
    data: post
  };
};

export default show;
