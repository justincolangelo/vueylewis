export default class ToDo {
  private title!: string;
  private image!: string;
  private isDone: boolean;

  constructor(title: string, image: string, isDone: boolean) {
    this.title = title;
    this.image = image;
    this.isDone = isDone;
  }
}