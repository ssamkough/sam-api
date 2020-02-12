import db from "../../database/config";

const show = async (req, res, next) => {
  const document = db.collection("projects").doc(req.params.path);
  const projectRef = await document.get();
  const project = projectRef.data();

  res.json(render(project));
};

const render = project => {
  return {
    status: 1000,
    data: project
  };
};

export default show;
