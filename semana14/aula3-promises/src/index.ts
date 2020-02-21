import { readFile, readdir } from "fs";

const path: string = "../textos"

const potentialData = new Promise((resolve, reject) => {
  readdir(path, (e: Error, files: string[]) => {
    files.map(file => {
      readFile(`${path}/${file}`, (e: Error, data: Buffer) => {
        if (e) {
          reject(e);
        }
        resolve(data.toString());
      })
    })
  });
})

const init = () => {
  potentialData.then((resp) => {
    console.log(resp);
  }).catch((err) => {
    console.error(err);
  });
}

init();