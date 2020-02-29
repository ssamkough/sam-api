import db from "../../database/config";

const list = async (req, res, next) => {
  const projectsRef = await db.collection("projects");
  let projects = [];

  await projectsRef.get().then(snapshot => {
    let docs = snapshot.docs;
    docs.forEach(doc => {
      projects.push(doc.data());
    });
  });

  res.json(render(projects));
};

const render = projects => {
  return {
    status: 1000,
    data: projects
  };
};

export default list;
