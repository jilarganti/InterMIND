export type ApiRequest = {
  body?: any
  query?: any
  params?: any
  [key: string]: any
}

export type ApiResponse = {
  status: (code: number) => ApiResponse
  json: (body: any) => void
  send?: (body: any) => void
  [key: string]: any
}
