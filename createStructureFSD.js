const fs = require("fs");
const path = require("path");

const createDirectory = (dirPath) => {
  return fs.mkdirSync(dirPath, { recursive: true });
};

const createAppStructure = () => {
  const appDir = path.join(__dirname, "app");
  const fsdDirectoryNames = [
    "components",
    "screens",
    "navigation",
    "hooks",
    "context",
    "assets",
    "utils",
  ];

  createDirectory(appDir);
  fsdDirectoryNames.map((dir) => {
    createDirectory(path.join(appDir, dir));
    fs.writeFileSync(path.join(`./app/${dir}`, `index.ts`), "");
    if (dir === "screens") {
      fs.writeFileSync(
        path.join(`./app/${dir}`, `types.d.ts`),
        "export type RootStackParamList = {}"
      );
    }
  });

  console.log(`The application structure has been successfully created in the /app folder!
    Kirill Kostyu thanks you for using the script!`);
};

createAppStructure();

module.exports = { createAppStructure };
