"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path = "../textos";
const potentialData = new Promise((resolve, reject) => {
    fs_1.readdir(path, (e, files) => {
        files.map(file => {
            fs_1.readFile(`${path}/${file}`, (e, data) => {
                if (e) {
                    reject(e);
                }
                resolve(data.toString());
            });
        });
    });
});
const init = () => {
    potentialData.then((resp) => {
        console.log(resp);
    }).catch((err) => {
        console.error(err);
    });
};
init();
//# sourceMappingURL=index.js.map