export default class ListItem {
  public title!: string;
  public image!: string;
  public clickFn: Function;

  constructor(title: string, image: string, clickFn: Function) {
    this.title = title;
    this.image = image;
    this.clickFn = clickFn
  }
}