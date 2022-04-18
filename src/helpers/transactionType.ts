import { CREDIT, DEBIT } from '@utils/TransactionEntry'
import { PAYMENT, TRANSFER } from '@utils/TransactionSource'
import { COMPLETED, PENDING, REFUNDED } from '@utils/TransactionStatus'

const transactionType = ({ status, source, entry }) => {
  if (status === COMPLETED) {
    if (source === PAYMENT && entry === DEBIT) {
      return 'Pagamento Realizado'
    }

    if (source === TRANSFER && entry === DEBIT) {
      return 'Transferência Realizada'
    }

    if (source === PAYMENT && entry === CREDIT) {
      return 'Pagamento Recebido'
    }
  }

  if (status === REFUNDED) {
    if (source === TRANSFER && entry === CREDIT) {
      return 'Pagamento Estornado'
    }

    if (source === TRANSFER && entry === CREDIT) {
      return 'Trasferência Estornada'
    }
  }

  if (status === PENDING) {
    if (source === PAYMENT && entry === DEBIT) {
      return 'Pagamento Agendado'
    }

    if (source === TRANSFER && entry === DEBIT) {
      return 'Transferência Agendada'
    }
  }
}

export { transactionType }
