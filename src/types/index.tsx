type Response = {
  code: string;
  message: string;
};

export type SuccessResponse<TData> = {
  data: TData;
};

export type FailResponse = Response;
