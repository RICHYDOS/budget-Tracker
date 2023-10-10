export interface TransactionAttributes {
  id: number
  account_id: number
  transaction_type: 'income' | 'expense' | 'transfer'
  amount: number
  tag_id: number
}
