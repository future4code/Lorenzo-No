"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
/**
 *
 * Lembrem-se de que o arquivo final estará na pasta BUILD
 * Assim, temos que tomar mais cuidado com o PATH dos
 * arquivos e diretórios que queremos mexer
 *
 */
let textsDirBasePath = "/Users/joaogolias/Desktop/gabarito-aprofundamento-em-promises/src/textos";
/**
 * Essa função pega todos os arquivos de um diretório
 */
const getFilesRefs = (path) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((res, rej) => {
        fs.readdir(textsDirBasePath, (err, files) => {
            res(files);
        });
    });
});
/**
 * Essa função serve para pegar o conteúdo de um único arquivo
 */
const getSingleFileContent = (path) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((res, rej) => {
        fs.readFile(path, (err, data) => {
            res(data.toString());
        });
    });
});
/**
 * Essa função serve para pegar todas as infomrações
 * em vários arquivos diferentes
 */
const getFilesContent = (basePath, filesRef) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((res, rej) => {
        const promiseArray = [];
        for (const filePath of filesRef) {
            promiseArray.push(getSingleFileContent(`${basePath}/${filePath}`));
        }
        Promise.all(promiseArray).then(texts => {
            res(texts);
        });
    });
});
/**
 * Recebe um array de strings, concatena-os e imprime
 * o resultado no terminal
 */
const printAllTexts = (texts) => {
    let result = "";
    for (const text of texts) {
        result += text;
    }
    console.log(result);
};
/**
 * Esse é o programa principal, que convoca as outras funções
 */
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const fileRefs = yield getFilesRefs(textsDirBasePath);
    const texts = yield getFilesContent(textsDirBasePath, fileRefs);
    printAllTexts(texts);
});
main();
