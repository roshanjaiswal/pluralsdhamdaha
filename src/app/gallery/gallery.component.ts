import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  galleryImages = [
    {image: "i4.jpg", location: "Dhamdaha", decription: "Rakesh Kumar Jha"},
    {image: "i1.jpg", location: "Barhara", decription: "image 1 test text"},
    {image: "i2.jpg", location: "Dhamdaha", decription: "image 2 test text"},
    {image: "i3.jpg", location: "Barhara", decription: "image 3 test text"},
    {image: "i5.jpg", location: "Dhamdaha", decription: "image 4 test text"}
  ];

  dhamdahaImages = [
    {image: "i1.jpg", location: "Dhamdaha", decription: "image 1 test text"},
  ];

  youTubeVideosIdList = [
    {id: "https://www.youtube.com/embed/v64KOxKVLVg"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
