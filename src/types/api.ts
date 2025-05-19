export interface ApiRequestI<T = any> {
  data: T;
  headers?: Record<string, string>;
  params?: Record<string, string | number | boolean>;
}

export interface ApiResponseI<T = any> {
  status: number;
  message?: string;
  data: T;
  error?: string | Record<string, any>;
}
