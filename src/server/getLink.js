import fs from "fs";

export default function() {
  const result = fs
    .readdirSync("./public/css")
    .filter(file => file.endsWith(".css"))
    .map(file => `<link src="./css/${file}" />`);
  return result.join("\n");
}