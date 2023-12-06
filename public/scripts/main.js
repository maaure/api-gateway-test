// public/scripts/main.js

document.getElementById("raposa").addEventListener("click", async () => {
  await fetchData("/raposa");
});

document.getElementById("pato").addEventListener("click", async () => {
  await fetchData("/pato");
});

document.getElementById("cachorro").addEventListener("click", async () => {
  await fetchData("/cachorro");
});

async function fetchData(endpoint) {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    document.getElementById("imagemAnimal").src = data.imagem;
  } catch (error) {
    alert("Erro ao buscar informações.");
  }
}
