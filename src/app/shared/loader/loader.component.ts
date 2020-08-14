import { LoaderService } from './../loader.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  color = 'warm';
  mode = 'indeterminate';
  value = 70;
  isLoading: Subject<boolean> = this.loaderService.isLoading;
  constructor(
    private loaderService: LoaderService
  ) {

  }
}
