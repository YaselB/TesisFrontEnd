// TODO: Averiguar el tipo real.
export interface Response {
  data: object[];
  meta: {
    itemsPerPage: number;
    totalItems: number;
    currentPage: number;
    totalPages: number;
    sortBy: [string[]];
  };
  links: { current: string };
}
