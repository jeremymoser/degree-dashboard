const data = [];
const url = "https://www.jeremymoser.dev/api/portfolio/student.php?id=1";
const results = await fetch(url, { mode: 'cors'});
const json = await results.json();
data.push(json);

export default data;