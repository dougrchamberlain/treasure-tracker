import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loot-upload',
  templateUrl: './loot-upload.component.html',
  styleUrls: ['./loot-upload.component.css']
})
export class LootUploadComponent implements OnInit {
  location: any;
  lootedAt: Date;
  lootType: 'trash' | 'treasure' | 'other';
  constructor() {}

  ngOnInit() {}
}
