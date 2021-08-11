export class Produto {
    public title: string;
    public subTitle: string;
    public pathImg: string;
    public textImg: string
    public descriptionText: string;
    public value: number;
    
    constructor(_title: string, _subTitle: string, _pathImg: string, _textImg: string, _descriptionText:string, _value: number) {
      this.title = _title;
      this.subTitle = _subTitle;
      this.pathImg = _pathImg;
      this.textImg = _textImg;
      this.descriptionText = _descriptionText;
      this.value = _value;
    }
}