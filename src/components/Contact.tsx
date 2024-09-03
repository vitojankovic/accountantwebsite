import React from 'react';
import { TextField, Grid, Typography, IconButton, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Contact() {


    const handleContactUsClick = () => {
      const emailTitle = document.getElementById('emailTitle').value;
      const emailBody = document.getElementById('emailBody').value;

      const mailtoLink = `mailto:conatusweb@gmail.com?subject=${encodeURIComponent(
        emailTitle
      )}&body=${encodeURIComponent(emailBody)}`;

      window.open(mailtoLink, '_blank', 'noopener,noreferrer');
    };

  return (
    <div className="contact">
        <Grid className="left">
          <Typography variant="h2">Contact Us</Typography>
          <TextField
            className="input"
            label="Email Title"
            variant="outlined"
            fullWidth
            id="emailTitle"
            margin="normal"
            InputProps={{
              style: {
                color: 'white',
              },
              classes: {
                input: 'login-input',
              },
            }}
            InputLabelProps={{
              style: {
                color: 'white',
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              },
            }}          />
          <TextField
            className="input"
            id="emailBody"
            label="Email Body"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            InputProps={{
              style: {
                color: 'white',
              },
              classes: {
                input: 'login-input',
              },
            }}
            InputLabelProps={{
              style: {
                color: 'white',
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              },
            }}
          />
          <Button style={{ padding: '15px', width: '50%' }} className="blob-btn" onClick={handleContactUsClick}>
            Contact us
            <span className="blob-btn__inner">
              <span className="blob-btn__blobs">
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
              </span>
            </span>
          </Button>
          <div className="social-icons">
          <IconButton>
            <FacebookIcon fontSize="large" style={{ color: 'white' }} />
          </IconButton>
          <IconButton>
            <TwitterIcon fontSize="large" style={{ color: 'white' }} />
          </IconButton>
          <IconButton>
            <InstagramIcon fontSize="large" style={{ color: 'white' }} />
          </IconButton>
        </div>
        <Typography className="fade" variant="body1">conatusweb@gmail.com</Typography>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
      <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
    </filter>
  </defs>
    </svg>
          
        </Grid>

        <Grid className="right">
        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.04734782234!2d-74.3100046178181!3d40.697538022847056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20Sjedinjene%20Ameri%C4%8Dke%20Dr%C5%BEave!5e0!3m2!1shr!2shr!4v1702323797358!5m2!1shr!2shr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Grid>
    </div>
  );
}