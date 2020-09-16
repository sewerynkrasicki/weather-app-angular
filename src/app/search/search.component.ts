import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm = this.fb.group({
    search: ['', Validators.required]
  });
  @Output() getValue: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmitted(): void{
    this.getValue.emit(this.searchForm.value.search);
  }
}
