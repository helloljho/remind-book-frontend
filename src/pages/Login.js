import React from 'react';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Link,
} from '@material-ui/core';
import styled, { ThemeContext } from 'styled-components';
import { withTheme } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import getTheme from '../themes/base';

const StyledPaper = styled(Paper)`
  padding: 20px;
  height: 50vh;
  width: 400px;
  margin: 100px auto;
`;

const StyledAvarta = withTheme(styled(Avatar)`
  background-color ${({ theme }) => theme.palette.primary.main}
`);

const Login = ({ theme }) => {
  const [state, setState] = React.useState({
    checkedB: true,
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  console.log(theme);
  return (
    <Grid>
      <StyledPaper elevation={10}>
        <Grid align="center">
          <StyledAvarta back="red">
            <LockOutlinedIcon />
          </StyledAvarta>
          <h2>Login</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
          label="Remember me"
        />
        <Button type="submit" color="primary" variant="contained" fullWidth>
          Login
        </Button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {' '}
          Do you have an account ?<Link href="#">Sign Up</Link>
        </Typography>
      </StyledPaper>
    </Grid>
  );
};

export default Login;
