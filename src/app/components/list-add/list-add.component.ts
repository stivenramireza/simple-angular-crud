import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-list-add',
  templateUrl: './list-add.component.html',
  styleUrls: ['./list-add.component.css']
})
export class ListAddComponent implements OnInit {

  item: any = {
    name: ''
  };

  constructor(private service: ConnectionService) {

  }

  ngOnInit() {
  }

  add(){
    this.service.addItem(this.item);
    this.item.name = '';
  }

}
