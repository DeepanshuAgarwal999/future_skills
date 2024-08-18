declare interface Card {
  id: string;
  title: string;
  description: string;
}

declare interface APIResponse<T> {
  message: string;
  data: T;
  creation_time: string;
}
