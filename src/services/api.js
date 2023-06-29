// Req 1 - 1.1 - Uma requisição API usando o async/await
const getPlanets = async () => {
  const results = await (await fetch("https://swapi.dev/api/planets")).json();
  return results;
};

export default getPlanets;
