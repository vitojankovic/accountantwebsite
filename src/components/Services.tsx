import { Box, Button, Card, Typography } from '@mui/material';
import greet from '../assets/land-greet.png'
import Gentleman from '../assets/Gentleman.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Monthly from '../assets/monthly.webp'
import Payroll from '../assets/payrool.webp'
import Business from '../assets/business.webp'
import Fraud from '../assets/fraud.webp'
import Weird from '../assets/weird.webp'
import Yearly from '../assets/yearly.webp'
import Quarter from '../assets/quarter.webp'

export default function Services() { 


  useEffect(() => {
    AOS.init({
      offset: 500,
      duration: 1000,
    });
  },[])


  interface ServiceCardProps {
    title: string;
    description: string;
    source: string;
  }
  
  const ServiceCard = ({ title, description, source }: ServiceCardProps) => {
    return (
      <Card data-aos="fade-right" className="service-card-main">
        <img src={source} alt="Service card image" />
          <Typography style={{ paddingTop: '10px' }} variant="h5">
            {title}
          </Typography>
          <Typography style={{ paddingTop: '10px' }} variant="body2">
            {description}
          </Typography>
          <Button className="l-m">
            Learn More
          </Button>
      </Card>
    );
  };

  const ServiceCardTwo = ({ title, description, source }: ServiceCardProps) => {
    return (
      <Card data-aos="fade-left" className="service-card-main">
        <img src={source} alt="Service card image" />
          <Typography style={{ paddingTop: '10px' }} variant="h5">
            {title}
          </Typography>
          <Typography style={{ paddingTop: '10px' }} variant="body2">
            {description}
          </Typography>
          <Button href="/contact" className="l-m">
            Learn More
          </Button>
      </Card>
    );
  };


  return (
    <div className="page-container">

      <Typography className="ser-title" variant="h2">
        Our Services
      </Typography>
      <Box className="ser-container">
        <ServiceCard data-aos="fade-right" title="Catchup & Revamp" description="Embark on the journey by refining your bookkeeping and ensuring everything is in order for your optimal setup." source={Gentleman} />
        <ServiceCardTwo data-aos="fade-left" title="Monthly Financial Maintenance" description="Avail our monthly bookkeeping services, guaranteeing that your records are consistently current and precise." source={Monthly} />
        <ServiceCard data-aos="fade-right" title="Quarterly Financial Assessment" description="Receive a quarterly assessment of your business finances, identifying any areas that need improvement and offering recommendations for growth." source={Quarter} />
        <ServiceCardTwo data-aos="fade-left" title="Year-End Tax Readiness" description="Allow us to prepare your year-end tax return, ensuring you capitalize on deductions and leverage all available tax advantages." source={Yearly} />
        <ServiceCard data-aos="fade-left" title="Effortless Payroll Management" description="Simplify payroll with our comprehensive services, handling paperwork, calculations, and tax filings, allowing you to focus on your employees and your business." source={Payroll} />
        <ServiceCardTwo data-aos="fade-right" title="Strategic Business Consulting" description="Access invaluable business consulting services, aiding in informed decision-making and facilitating the growth of your business. From financial planning to marketing strategies, we've got you covered." source={Business} />
        <ServiceCard data-aos="fade-left" title="Fraud Detection and Prevention" description="Safeguard your business against fraud with our thorough audit and prevention services, identifying potential risks and implementing preventive measures." source={Fraud} />
        <ServiceCardTwo title="Sarbanes-Oxley Compliance Assistance" description="Ensure your business compliance with Sarbanes-Oxley (SOX) regulations through our specialized services. We'll assist in documenting and managing your controls and processes to meet SOX requirements." source={Weird} />

      </Box>
    </div>
  )
}