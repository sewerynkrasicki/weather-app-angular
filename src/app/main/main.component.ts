import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  searchValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  setValue(search: string): void{
    this.searchValue = search;
  }

}
