import { Component, OnInit, ViewChild } from '@angular/core';
import { Company, data } from '../../../assets/data';
import { Columns, Config, DefaultConfig, APIDefinition } from 'ngx-easy-table';

@Component({
  selector: 'app-pinned',
  templateUrl: './pinned.component.html',
  styleUrls: ['./pinned.component.scss'],
})
export class PinnedComponent implements OnInit {
  public columns: Columns[];
  public data: Company[] = [];
  public configuration: Config;
  @ViewChild('table') table: APIDefinition;

  ngOnInit(): void {
    this.configuration = DefaultConfig;
    this.configuration.horizontalScroll = true;
    this.configuration.searchEnabled = true;
    this.data = data;
    this.columns = [
      { key: 'phone', title: 'Phone', pinned: true, orderBy: 'asc' },
      { key: 'age', title: 'Age', pinned: true },
      { key: 'company', title: 'Company' },
      { key: 'name', title: 'Name' },
      { key: 'name', title: 'Name' },
      { key: 'name', title: 'Name' },
      { key: 'name', title: 'Name' },
      { key: 'name', title: 'Name' },
      { key: 'name', title: 'Name' },
      { key: 'name', title: 'Name' },
      { key: 'name', title: 'Name' },
      { key: 'name', title: 'Name' },
      { key: 'name', title: 'Name' },
      { key: 'name', title: 'Name' },
      { key: 'isActive', title: 'STATUS' },
    ];
  }

  // TODO fix API when random columns pinned
  // setColumnBG(column: number, className: string, includeHeader: boolean) {
  //   this.table.apiEvent({
  //     type: API.setColumnClass,
  //     value: { column, className, includeHeader },
  //   });
  // }

  // TODO fix API when random columns pinned
  // pinColumn(column: number) {
  //   this.table.apiEvent({
  //     type: API.setColumnPinned,
  //     value: { column, pinned: true },
  //   });
  // }

  // TODO fix API when random columns pinned
  // unpinColumn(column: number) {
  //   this.table.apiEvent({
  //     type: API.setColumnPinned,
  //     value: { column, pinned: false },
  //   });
  // }
}
