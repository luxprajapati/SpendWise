// FileName: TransactionItem.js

import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e6e8e9;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  border-radius: 5px;
  padding: 10px 20px;
  border-right: 5px solid ${(props) => (props.isExpense ? "red" : "green")};
  margin-bottom: 10px;
  cursor: pointer;
`;

const RemoveButton = styled.button`
  background-color: #44e610;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
`;

const TransactionItem = ({ transaction, removeTransaction }) => {
  const handleRemove = () => {
    removeTransaction(transaction.id);
  };

  return (
    <Item isExpense={transaction.transType === "expense"}>
      <span>{transaction.details}</span>
      <span>₹{transaction.amount}</span>
      <RemoveButton onClick={handleRemove}>Remove</RemoveButton>
    </Item>
  );
};

export default TransactionItem;
