import db from "../../database/config";

const list = async (req, res, next) => {
  const servicesRef = db.collection("services");
  let services = [];

  await servicesRef.get().then(snapshot => {
    let docs = snapshot.docs;
    docs.forEach(doc => {
      services.push(doc.data());
    });
  });

  res.json(render(services));
};

const render = services => {
  return {
    status: 1000,
    data: services
  };
};

export default list;
