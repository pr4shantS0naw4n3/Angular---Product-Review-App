import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  searchText: any;
  data: any;
  notFound = false;
  found = false;
  rating = 2
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  search() {
    const searchObj = {
      searchText: this.searchText
    }
    this.apiService.search(searchObj).subscribe((response) => {
      if (response['status'] === 200) {
        this.notFound = false;
        this.found = true
        this.searchText = ""
        this.data = response['find']
      }
    }, (error) => {
      this.notFound = true;
    })
  }

}
