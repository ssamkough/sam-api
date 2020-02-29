import db from "../../database/config";

const show = async (req, res, next) => {
  const document = await db.collection("services").doc(req.params.path);
  const serviceRef = await document.get();
  const service = serviceRef.data();

  res.json(render(service));
};

const render = service => {
  return {
    status: 1000,
    data: service
  };
};

export default show;
