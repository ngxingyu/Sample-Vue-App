export default async function fetchAdviceRepositories(query) {
  return await fetch(`https://api.adviceslip.com/advice/search/${query}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      return !("slips" in json)
        ? [{ advice: json.message.text }]
        : json.slips;
    });
}
