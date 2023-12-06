const axios = require("axios");

module.exports = function (app) {
  app.get("/raposa", async (req, res) => {
    try {
      const response = await axios.get("https://randomfox.ca/floof/");
      const { message, link } = response.data;
      res.json({ mensagem: "Você solicitou por uma raposa", imagem: link });
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar informações da raposa" });
    }
  });

  app.get("/pato", async (req, res) => {
    try {
      const response = await axios.get("https://random-d.uk/api/quack");
      const { message, url } = response.data;
      res.json({ mensagem: "Você solicitou por um pato", imagem: url });
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar informações do pato" });
    }
  });

  app.get("/cachorro", async (req, res) => {
    try {
      const response = await axios.get("https://random.dog/woof.json");
      const { message, url } = response.data;
      res.json({ mensagem: "Você solicitou por um cachorro", imagem: url });
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar informações do cachorro" });
    }
  });
};
