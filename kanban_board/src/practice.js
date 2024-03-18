import fs from "fs";

fs.readFile("./log.txt", (error, data) => {
  if (error) throw error;
  console.log(data);
});
