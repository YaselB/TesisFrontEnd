import { Response } from '../persistence/Response.model';
import { Manager } from '../persistence/manager';
import { TablePermission } from './tablePermission.model';

export class FortesDataTable {
  displayData!: object[];
  manager: Manager;

  role: TablePermission;

  constructor(manager: Manager, role: TablePermission) {
    this.manager = manager;
    this.role = role;
  }

  pageIndex: number = 1;
  offset: number = 0;
  pageSize: number = 10;
  total?: number;
  loading: boolean = true;
  search: string = '';
  ordering: string = '';

  modalSmall: string = '40%';
  modalMedium: string = '55%';
  modalLarge: string = '65%';
  modalExtraLarge: string = '90%';

  filters: string = '';

  LoadData(manager: Manager): void {
    manager
      .get(this.pageSize, this.offset, this.search, this.ordering, this.filters)
      .then((response) => (this.displayData = (response as Response).data));
    // Base for refreshing data.
  }

  ChangePageIndex(pageIndex: number): void {
    this.offset = (pageIndex - 1) * this.pageSize;
    this.pageIndex = pageIndex;
    this.LoadData(this.manager);
  }

  ChangePageSize(pageSize: number): void {
    this.pageSize = pageSize;
    this.LoadData(this.manager);
  }

  Search(param: { target: { value: string } }): void {
    this.search = param.target.value;

    this.Restablish();
    this.LoadData(this.manager);
  }

  Filter(filter: { params: string; value: string }[]): void {
    this.filters = '';

    filter.forEach((element): void => {
      const param = element.params + element.value;
      this.filters = this.filters.concat(param);
      console.log(this.filters);
    });

    this.Restablish();
    this.LoadData(this.manager);
  }

  Sort(sort: { key: string; value: string }): void {
    if (sort.value === 'ascend') {
      this.ordering = '-' + sort.key;
      this.Restablish();
      this.LoadData(this.manager);
    }
    if (sort.value === 'descend') {
      this.ordering = '+' + sort.key;
      this.Restablish();
      this.LoadData(this.manager);
    }
  }

  private Restablish(): void {
    this.pageIndex = 1;
    this.offset = (this.pageIndex - 1) * this.pageSize;
  }
}
