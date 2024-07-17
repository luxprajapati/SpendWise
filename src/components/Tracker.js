// Tracker.js

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddTransaction from "./AddTransaction";
import OverviewComponent from "./OverviewComponent";
import TransactionsContainer from "./TransactionsContainer";
import { useTheme, lightTheme } from "../ThemeContext"; // Import useTheme, lightTheme, and darkTheme

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  max-width: 100%;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  padding: 30px 20px;

  border-radius: 5px;
  margin: 10px;
  box-shadow: ${({ theme }) =>
    theme === lightTheme ? "0 0 10px black" : "0 0 10px white"};
`;

const Heading = styled.h1`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const TransactionDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
`;

const ExpenseBox = styled.div`
  flex: 1;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 5px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.background};
  & span {
    font-weight: bold;
    font-size: 25px;
    display: block;
    color: ${(props) => (props.isExpense ? "red" : "green")};
  }
`;

const IncomeBox = styled(ExpenseBox)``;

const Tracker = () => {
  const { theme } = useTheme(); // Get the current theme
  const [toggle, setToggle] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  // Load transactions from local storage on component mount
  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem("transactions"));
    if (storedTransactions) {
      setTransactions(storedTransactions);
    }
  }, []);

  // Update local storage whenever transactions change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
    calculate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactions]);

  const AddTransactions = (data) => {
    const transactionArray = [...transactions];
    transactionArray.push(data);
    setTransactions(transactionArray);
  };

  const removeTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  const calculate = () => {
    let exp = 0;
    let inc = 0;
    transactions.forEach((data) => {
      if (data.transType === "expense") {
        exp += data.amount;
      } else {
        inc += data.amount;
      }
    });
    setIncome(inc);
    setExpense(exp);
  };

  return (
    <Container theme={theme}>
      <Heading>SpendWise</Heading>
      <OverviewComponent
        toggle={toggle}
        setToggle={setToggle}
        income={income}
        expense={expense}
      />
      {toggle && (
        <AddTransaction
          setToggle={setToggle}
          AddTransactions={AddTransactions}
        />
      )}

      <TransactionDetails>
        <ExpenseBox isExpense>
          Expense<span>₹{expense}</span>
        </ExpenseBox>
        <IncomeBox>
          Income<span>₹{income}</span>
        </IncomeBox>
      </TransactionDetails>

      <TransactionsContainer
        transactions={transactions}
        removeTransaction={removeTransaction}
      />
    </Container>
  );
};

export default Tracker;
