import db from "../../database/config";

const show = async (req, res, next) => {
  const document = db.collection("notebook").doc(req.params.path);
  const postRef = await document.get();
  const post = postRef.data();

  res.json(render(post));
};

const render = post => {
  return {
    status: 1000,
    data: post
  };
};

export default show;
