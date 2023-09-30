export interface IMeta {
  page: number;
  limit: number;
  total: number;
}

export type IResponseSuccess = {
  data: any;
  meta?: IMeta;
};
export type IGenericErrorMessages = {
  path: string | number;
  message: string;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessages[];
};
