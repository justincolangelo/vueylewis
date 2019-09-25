export default class ListItem {
  private title!: string;
  private image!: string;

  constructor(title: string, image: string) {
    this.title = title;
    this.image = image;
  }
}