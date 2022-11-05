export interface IRes<T> {
  code: number;
  msg: string;
  data: T;
}
