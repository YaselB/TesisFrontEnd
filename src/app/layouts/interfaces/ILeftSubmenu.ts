import { ILeftMenuItem } from './ILeftMenuItem';

export interface ILeftSubmenu {
  name: string;
  menu_items: ILeftMenuItem[];
  icon?: string;
  open?: boolean;
  disabled?: boolean;
  domain: string;
  permission: string;
}
