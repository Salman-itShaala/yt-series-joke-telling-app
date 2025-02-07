const setup = document.getElementById("setup");
const punchline = document.getElementById("punchline");
const type = document.getElementById("type");

async function sendReq() {
  const res = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await res.json();

  console.log(data);

  setup.innerText = `Setup : ${data.setup}`;
  punchline.innerText = `Punchline: ${data.punchline}`;
  type.innerText = `Type : ${data.type}`;
}
