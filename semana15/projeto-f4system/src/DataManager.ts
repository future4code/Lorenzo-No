import { readFileSync, writeFileSync } from 'fs'

export class DataManager {
  constructor(public filePath: string) { };

  public readFile(): any {
    const fileData = readFileSync(this.filePath);
    return JSON.parse(fileData.toString())
  }

  public writeFile(data: any) {
    writeFileSync(this.filePath, JSON.stringify(data, null, 2));
  }
}