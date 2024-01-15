export const createQuestion = async (data) => {
  await fetch(`${import.meta.env.VITE_API_URI}/question/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(async (resp) => await resp.json())
    .then((resp) => console.log("resp", resp))
    .catch((err) => console.log(err));
};
