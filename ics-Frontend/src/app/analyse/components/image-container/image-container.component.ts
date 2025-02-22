import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Image} from "../../models/image-model.models";
import {Tag} from "../../models/tag-model.models";
import {GalleryComponent} from "../gallery/gallery.component";
import {ImageAnalyzerComponent} from "../image-analyzer/image-analyzer.component";
import {ImageService} from "../../services/image.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ImageContainerComponent implements OnInit {

  @Input() image?: Image;
  @Output() exit: EventEmitter<boolean> = new EventEmitter<boolean>();

  showConfidence: boolean;
  currConfidence: number = 0;

  tagsMap: Map<string, number> = new Map;

  constructor(private gallery: GalleryComponent, private analyzer: ImageAnalyzerComponent,
              private imageService: ImageService, private authService: AuthService) {
    this.showConfidence = false;
  }

  ngOnInit(): void {
      this.loadTags();
  }

  public showPopOver(confidence: number): void {
    this.showConfidence = true;
    this.currConfidence = confidence;
  }

  public hidePopOver(): void {
    this.showConfidence = false;
  }

  public saveItemToStorage(currTag: string) {
    console.log(currTag);
    localStorage.setItem("connectGallery", currTag);
    console.log(localStorage.getItem("connectGallery"));
  }

  public exitContainer($event: Event) : void {
    $event.preventDefault();
    this.exit.emit(false);
    console.log(this.image);
  }

  public getClickEvent(tag: string): void {
    console.log(tag);
    //this.analyzer.exitPopUp(true);
    this.gallery.searchByTagParameter(tag);
  }

  public isWide(): boolean {
      console.log(this.image);
    console.log(this.image?.width);
    console.log(this.image?.height);
    return this.image?.width! <= this.image?.height!;
  }

  public isTall(): boolean {
      console.log(this.image);
    return this.image?.width! > this.image?.height!;
  }

  public convertDate(addedOn: string | undefined) {
    const date = new Date(addedOn!); // had to remove the colon (:) after the T in order to make it work
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    const myFormattedDate = day+"-"+(monthIndex+1)+"-"+year+" "+ hours+":"+minutes+":"+seconds;
    return myFormattedDate;
  }

    loadTags() {
        const currUser = this.authService.getCurrentUser();

        if (!currUser) {
            console.error('No current user found');
            return;
        }

        if (currUser && this.image?.id) {
            this.imageService.getTagsByImageId(this.image?.id, currUser.username, currUser.password)
                .subscribe(
                    tagsMap => this.tagsMap = tagsMap,
                    error => console.error('Error fetching tags:', error)
                );
        }
    }

}
