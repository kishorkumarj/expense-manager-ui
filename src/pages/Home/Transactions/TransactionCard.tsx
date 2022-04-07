import React from "react";

interface TransactionItem {
  _id: string,
  name: string,
  category: string,
  amount: number,
  expense: boolean,
  date: string
}

const TransactionCard = ({
  transaction
}:{
  transaction: TransactionItem
}) => {

  return (
    <div className="transaction-card">
      {transaction.name}, {transaction.amount},
      {transaction.expense ? 'expense': 'income'} ,
      {transaction.category} 
    </div>
  )
}

export default TransactionCard;