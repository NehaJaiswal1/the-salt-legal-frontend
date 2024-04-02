



// Thankyou.js
import React from 'react';
import { Typography, Button, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './Thankyou.css';
import { useRecoilValue } from 'recoil';
import { jwtTokenState, userIdState } from '../../auth/atoms';

function Thankyou() {
  const jwtToken = useRecoilValue(jwtTokenState);
  const userId = useRecoilValue(userIdState);
  return (
    <div className="thankyou-page">
      <Container>
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: '100dvh' }}
        >
          <div className=' thank-you-page-div' >
            <Grid item>
              <Typography variant="h7" align="center" gutterBottom>
                <span style={{ fontWeight: 'bold', color: '#14532d' }}>Thank you!</span>
              </Typography>
              <Typography variant="body1" align="center" gutterBottom>
              <span style={{ fontWeight: '200px', color: '#4b5563', fontSize:'30px' }}>
                Thank you for Choosing Us!</span>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" align="center" paragraph>
              <span style={{ fontWeight:'200px', color: '#4b5563', fontSize:'20px'}}>
                Please enjoy our services by logging into your account.</span>
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/login"
              >
                Login
              </Button>
            </Grid>
          </div>
        </Grid>
      </Container>

      <div className="glitter-container">
        {[...Array(50)].map((_, index) => (
          <div key={index} className="glitter" style={{ '--index': index }} />
        ))}
      </div>
    </div>
  );
}

export default Thankyou;