import * as fs from "fs";

/**
 *
 * Lembrem-se de que o arquivo final estará na pasta BUILD
 * Assim, temos que tomar mais cuidado com o PATH dos
 * arquivos e diretórios que queremos mexer
 *
 */
let textsDirBasePath =
  "/Users/joaogolias/Desktop/gabarito-aprofundamento-em-promises/src/textos";

/**
 * Essa função pega todos os arquivos de um diretório
 */
const getFilesRefs = async (path: string): Promise<string[]> => {
  return new Promise<string[]>((res, rej) => {
    fs.readdir(textsDirBasePath, (err: Error, files: string[]) => {
      res(files);
    });
  });
};

/**
 * Essa função serve para pegar o conteúdo de um único arquivo
 */
const getSingleFileContent = async (path: string): Promise<string> => {
  return new Promise<string>((res, rej) => {
    fs.readFile(path, (err: Error, data: Buffer) => {
      res(data.toString());
    });
  });
};

/**
 * Essa função serve para pegar todas as infomrações
 * em vários arquivos diferentes
 */
const getFilesContent = async (
  basePath: string,
  filesRef: string[]
): Promise<string[]> => {
  return new Promise<string[]>((res, rej) => {
    const promiseArray: Promise<string>[] = [];
    for (const filePath of filesRef) {
      promiseArray.push(getSingleFileContent(`${basePath}/${filePath}`));
    }
    Promise.all(promiseArray).then(texts => {
      res(texts);
    });
  });
};

/**
 * Recebe um array de strings, concatena-os e imprime
 * o resultado no terminal
 */
const printAllTexts = (texts: string[]) => {
  let result = "";
  for (const text of texts) {
    result += text;
  }
  console.log(result);
};

/**
 * Esse é o programa principal, que convoca as outras funções
 */
const main = async () => {
  const fileRefs = await getFilesRefs(textsDirBasePath);
  const texts = await getFilesContent(textsDirBasePath, fileRefs);
  printAllTexts(texts);
};

main();
