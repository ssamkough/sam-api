import db from "../../database/config";

const list = async (req, res, next) => {
  const peopleRef = await db.collection("people");
  let people = [];

  await peopleRef.get().then(snapshot => {
    let docs = snapshot.docs;
    docs.forEach(doc => {
      people.push(doc.data());
    });
  });

  res.json(render(people));
};

const render = people => {
  return {
    status: 1000,
    data: people
  };
};

export default list;
