const fs = require("fs");
const path = require("path");

// Генеруємо ID на основі версії з package.json та поточної мітки часу
const packageJson = require("./package.json");
const deployId = `v${packageJson.version}-${Date.now()}`;

fs.writeFileSync(
  path.join(__dirname, ".env.local"),
  `REACT_APP_DEPLOY_ID=${deployId}\n`,
);
console.log(`Generated DEPLOY_ID: ${deployId}`);
