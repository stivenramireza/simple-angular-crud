import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: any[] = [];
  updatedItem: any = {
    name: ''
  };

  constructor(private connection: ConnectionService ) { 
    this.connection.listItems().subscribe(item => {
      this.items = item;
      console.log(this.items);
    });
  }

  ngOnInit() {
  }

  delete(item) {
    this.connection.deleteItem(item);
  }

  update(item) {
    this.updatedItem = item;
  }

  addUpdatedItem() {
    this.connection.updateItem(this.updatedItem);
  }

}
