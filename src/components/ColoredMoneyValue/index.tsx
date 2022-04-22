import React from 'react'

import { StyledMoney } from './styles'

interface ColoredMoneyValuesProps {
  children: React.ReactNode | React.ReactNode[];
  transactionEntry: string;
  transactionStatus: string;
  className?: string;
  textAlign?: 'center' | 'end' | 'left' | 'unset';
}

const ColoredMoneyValue = ({
  children,
  transactionEntry,
  className,
  transactionStatus,
  textAlign
}: ColoredMoneyValuesProps) => (
  <StyledMoney
    transactionStatus={transactionStatus}
    className={className}
    textAlign={textAlign}
    transactionEntry={transactionEntry}
  >
    {children}
  </StyledMoney>
)

export { ColoredMoneyValue }
