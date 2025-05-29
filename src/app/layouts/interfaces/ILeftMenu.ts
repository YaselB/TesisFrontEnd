import { ILeftSubmenu } from './ILeftSubmenu';

export interface ILeftMenu {
  title: string;
  name: string;
  domain: string;
  menus: ILeftSubmenu[];
  permission: string;
}
