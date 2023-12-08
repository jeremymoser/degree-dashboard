const url = "https://api.jeremymoser.dev/portfolio/student.php?id=1";
const results = await fetch(url, { mode: 'cors'});
const json = await results.json();
const data = json;

export default data;