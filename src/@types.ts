export interface ExtractItem {
  status: string;
  actor: string;
  amount: number;
  source: string;
  type: ExtractItemType;
  entry: string;
  scheduled: boolean;
  dateEvent: string;
}

enum ExtractItemType {
  'BANKSLIP' = 'BANKSLIP',
  'CREDITCARD' = 'CREDITCARD'
}

export interface ExtractResponse {
  date: string;
  amountTotal: number;
  items: ExtractItem[];
}

export interface ExtractResults {
  results: ExtractResponse[];
  itemsTotal: number;
}