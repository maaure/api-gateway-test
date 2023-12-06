const express = require("express");
const path = require("path");

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

const app = express();

const PORT = 3000;

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

require("./endpoints")(app);

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
