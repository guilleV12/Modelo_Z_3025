export const getJsonData = async () => {
  await fetch("/src/constants/data.json")
  .then(response => {
    console.log(response); // Para ver qué devuelve exactamente
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
};
