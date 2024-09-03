import React from 'react'
import { Typography, Grid, Container } from '@mui/material';



export function PricingComponent(){
  return(
    <Grid className="one-container" container spacing={3}>

<svg className="svg" xmlns="http://www.w3.org/2000/svg" version="1.1">
<defs>
  <filter id="goo">
    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
    <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
  </filter>
</defs>
  </svg>
    
      <Grid data-aos="fade-right" className="one">
          <Typography variant="h1" className="business-card-title">
            Solopreneur & Small Business
          </Typography>
          <Typography variant="body1" className="business-card-description">
            For 1099 contractors, self employed and simple operations.
          </Typography>
       
          <Typography variant="body1" className="business-card-description">
            Who it is for:
          </Typography>
          <ul className="business-card-list">
            <li>- Low Levels of Complexity</li>
            <li>- Simple Tax Planning</li>
            <li>- Small Business or 1099 Contractor</li>
          </ul>
          <ul className="business-card-list two">
            <li>&#10003; Year End Tax Returns</li>
            <li>&#10003; Tax Reduction Planning</li>
            <li>&#10003; Bookkeeping Services</li>
            <li>&#10003; Payroll Service</li>
          </ul>
      </Grid>
      <Grid data-aos="fade-up" className="one">
          <Typography variant="h5" className="business-card-title">
            Growing Business
          </Typography>
          <Typography variant="body1" className="business-card-description">
            For small to medium sized businesses.
          </Typography>

       
          <Typography variant="body1" className="business-card-description">
            Who it is for:
          </Typography>
          <ul className="business-card-list">
            <li>- Growing Businesses</li>
            <li>- Business Expansion</li>
            <li>- Intermediate Complexity</li>
          </ul>
          <ul className="business-card-list two">
            <li>&#10003; Everything from Solopreneur</li>
            <li>&#10003; Quarterly CFO Meetings</li>
            <li>&#10003; Increased complexity and operations</li>
          </ul>
      </Grid>
      <Grid data-aos="fade-left" className="one">
          <Typography variant="h5" className="business-card-title">
            Established Business
          </Typography>
          <Typography variant="body1" className="business-card-description">
            For established businesses with complex tax requirements.
          </Typography>

       
          <Typography variant="body1" className="business-card-description">
            Who it is for:
          </Typography>
          <ul className="business-card-list">
            <li>- Complex Businesses</li>
            <li>- High Revenue</li>
            <li>- Sophisticated Tax Planning</li>
          </ul>
          <ul className="business-card-list two">
            <li>&#10003; Everything from growing</li>
            <li>&#10003; Increased meetings and financial guidance</li>
            <li>&#10003; Larger operations with greater needs</li>
          </ul>
      </Grid>
    </Grid>
  )
}

export default function Pricing() {

  return (
    <div className="pricing">
        <PricingComponent />
    </div>
  )
}
