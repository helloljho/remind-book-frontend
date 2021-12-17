import * as React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { subStrByNum } from '../utils/subStrByNum';

export const BookCard = ({ book }) => {
  return (
    <Card
      style={{
        display: 'flex',
        margin: '2rem',
        width: '600px',
      }}
    >
      <CardMedia
        component="img"
        style={{ width: 150, padding: '1rem' }}
        image="/static/images/book-icon-149.png"
        alt="Live from space album cover"
      />
      <Box style={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent style={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {book.title}
          </Typography>
          <Typography variant="subtitle1" color="textPrimary" component="div">
            {book.author}, {book.publisher}
          </Typography>

          <Typography variant="subtitle1" color="textPrimary" component="div">
            {subStrByNum(book.review, 20)}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};
