export class Video {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private url: string,
    private uploader: string
  ) { }

  public getId(): string {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getDescription(): string {
    return this.description;
  }

  public getUrl(): string {
    return this.url;
  }

  public getUploader(): string {
    return this.uploader;
  }

}