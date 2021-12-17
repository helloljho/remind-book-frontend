import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BookCard } from '../components/BookCard';
import { Container } from '@material-ui/core';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BookList = () => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const getBookList = async () => {
      const url = `${process.env.REACT_APP_API}/api`;
      console.log(url);
      axios.get(url).then(response => setBookList(response.data));
    };

    getBookList();
  }, []);
  return (
    <>
      <StyledContainer>
        {bookList &&
          bookList.map((book, index) => <BookCard key={index} book={book} />)}
      </StyledContainer>
    </>
  );
};

export default BookList;
