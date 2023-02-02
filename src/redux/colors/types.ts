export enum FETCH_STATUS {
  SUCCESS = "success",
  LOADING = "loading",
  ERROR = "error",
}
export type DataType = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: DataItem[] | DataItem;
};

export type DataItem = {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
};
