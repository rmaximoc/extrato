import { Paragraph } from '@components/Paragraph'
import { theme } from '@styles/theme'
import { DEBIT, CREDIT } from '@utils/TransactionEntry'
import { REFUNDED } from '@utils/TransactionStatus'
import styled from 'styled-components'

interface StyledMoneyProps {
  transactionEntry: string;
  transactionStatus: string;
}

const getStyleColor = ({ transactionEntry, transactionStatus }: StyledMoneyProps) => {
  if (transactionEntry === CREDIT && transactionStatus === REFUNDED) {
    return `${theme.pallete.grays.offBlack}`
  }

  if (transactionEntry === DEBIT) {
    return `${theme.pallete.main.primary}`
  }

  if (transactionEntry === CREDIT) {
    return `${theme.pallete.main.secondary}`
  }
}

export const StyledMoney = styled(Paragraph)<StyledMoneyProps>`
  font-size: 16px;
  font-weight: ${({ transactionStatus }) => transactionStatus === REFUNDED ? 'normal' : 'bolder'};
  color: ${({ transactionEntry, transactionStatus }) =>
    getStyleColor({ transactionEntry, transactionStatus })};
  text-decoration: ${({ transactionStatus }) => transactionStatus === REFUNDED ? 'line-through' : 'unset'};

  ${theme.mediaQuery.sm} {
    font-size: 9px;
  }
`
