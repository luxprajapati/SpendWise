// FileName: TransactionsContainer.js

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TransactionItem from "./TransactionItem";

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

const Heading = styled.h2`
  font-size: 25px;
  font-weight: 600;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 15px 20px;
  outline: none;
  border-radius: 5px;
  margin: 5px 0;
  border: 1px solid #e6e8e9;
  background-color: #e6e8e9;
  margin-bottom: 25px;
`;

const TransactionItems = styled.div``;

const TransactionsContainer = ({ transactions, removeTransaction }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredTransactions, setFilteredTransactions] =
    useState(transactions);

  useEffect(() => {
    setFilteredTransactions(transactions);
  }, [transactions]);

  const handleSearch = (e) => {
    const inputValue = e.target.value.toLowerCase().trim();
    setSearchInput(inputValue);

    if (!inputValue) {
      setFilteredTransactions(transactions);
      return;
    }

    const filtered = transactions.filter((transaction) =>
      transaction.details.toLowerCase().includes(inputValue)
    );
    setFilteredTransactions(filtered);
  };

  return (
    <Container>
      <Heading>Transactions</Heading>
      <SearchInput
        type="text"
        placeholder="Search here"
        value={searchInput}
        onChange={handleSearch}
      />
      <TransactionItems>
        {filteredTransactions.length ? (
          filteredTransactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              removeTransaction={removeTransaction}
            />
          ))
        ) : (
          <p>No Transactions</p>
        )}
      </TransactionItems>
    </Container>
  );
};

export default TransactionsContainer;
