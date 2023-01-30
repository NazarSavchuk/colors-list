export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type Color = {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
};

export interface ColorSliceState {
  items: Color[];
  status: Status;
}
