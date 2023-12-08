const url = "https://api.jeremymoser.dev/portfolio/requirements.php?id=1";
const results = await fetch(url, { mode: 'cors'});
const json = await results.json();
const data = json;

export default data;