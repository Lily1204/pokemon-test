export interface Catalog {
  count: number;
  next: string;
  previous: string;
  results: Results[];
}

export interface Results {
  name: string;
  url: string;
}

export interface Page {
  limit?: string;
  offset?: string;
  url?: string;
}
