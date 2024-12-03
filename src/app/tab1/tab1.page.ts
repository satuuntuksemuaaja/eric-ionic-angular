import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  bottomImages = [
    { src: '../../assets/icon/aws_000.png', alt: 'Image 1' },
    { src: '../../assets/icon/aws_000.png', alt: 'Image 2' },
    { src: '../../assets/icon/aws_000.png', alt: 'Image 3' },
  ];

  topLogo = "../../assets/icon/top_logo.png";
  baseImage = "../../assets/icon/base.jpg";

}
