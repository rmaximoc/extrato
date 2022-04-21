export interface ExtractItem {
  status: StatusItemType;
  actor: string;
  amount: number;
  source: SourceItemType;
  type: ExtractItemType;
  entry: EntryItemType;
  scheduled: boolean;
  dateEvent: string;
}

enum ExtractItemType {
  'BANKSLIP' = 'BANKSLIP',
  'EXTERNAL' = 'EXTERNAL',
  'INTERNAL' = 'INTERNAL'
}

enum EntryItemType {
  'CREDIT' = 'CREDIT',
  'DEBIT' = 'DEBIT',
}

enum SourceItemType {
  'TRANSFER' = 'TRANSFER',
  'PAYMENT' = 'PAYMENT',
}

enum StatusItemType {
  'COMPLETED' = 'COMPLETED',
  'REFUNDED' = 'REFUNDED',
  'PENDING' = 'PENDING'
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