import { CREDIT, DEBIT } from '@utils/TransactionEntry'
import { PAYMENT, TRANSFER } from '@utils/TransactionSource'
import { COMPLETED, PENDING, REFUNDED } from '@utils/TransactionStatus'

interface TransactionTypeProps {
  status: string;
  source: string;
  entry: string;
}

const transactionType = ({ status, source, entry }: TransactionTypeProps) => {
  if (status === COMPLETED) {
    if (source === PAYMENT && entry === DEBIT) {
      return {
        transactionType: 'Saída',
        message: 'Pagamento Realizado'
      }
    }

    if (source === TRANSFER && entry === DEBIT) {
      return {
        transactionType: 'Saída',
        message: 'Transferência Realizada'
      }
    }

    if (source === PAYMENT && entry === CREDIT) {
      return {
        transactionType: 'Entrada',
        message: 'Pagamento Recebido'
      }
    }

    if (source === TRANSFER && entry === CREDIT) {
      return {
        transactionType: 'Entrada',
        message: 'Transferência Recebida'
      }
    }
  }

  if (status === REFUNDED) {
    if (source === TRANSFER && entry === CREDIT) {
      return {
        transactionType: 'Saída',
        message: 'Pagamento Estornado'
      }
    }

    if (source === TRANSFER && entry === CREDIT) {
      return {
        transactionType: 'Entrada',
        message: 'Trasferência Estornada'
      }
    }
  }

  if (status === PENDING) {
    if (source === PAYMENT && entry === DEBIT) {
      return {
        transactionType: 'Futuro',
        message: 'Pagamento Agendado'
      }
    }

    if (source === TRANSFER && entry === DEBIT) {
      return {
        transactionType: 'Futuro',
        message: 'Transferência Agendada'
      }
    }
  }
}

export { transactionType }
