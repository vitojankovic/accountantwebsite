import { People } from '@mui/icons-material';
import MainImage from '../assets/accountant-male.webp'
import { Card, Typography, Box, Link, Grid, Button } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PaidIcon from '@mui/icons-material/Paid';
import GentleMan from '../assets/Gentleman.webp'
//import Lottie from 'react-lottie';
//import animationData from '../assets/ani.json'
//import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useEffect } from 'react'
import AdbIcon  from '@mui/icons-material/Adb'
import { PricingComponent } from './Pricing'
import AOS from 'aos';
import 'aos/dist/aos.css';





export default function LandPage() {


  useEffect(() => {
    AOS.init({
      offset: 500,
      duration: 1000,
    });
  },[])



  //????? https://www.youtube.com/watch?v=lPJVi797Uy0

  interface ServiceCardProps {
    title: string;
    description: string;
  }
  
  const ServiceCard = ({ title, description }: ServiceCardProps) => {
    return (
      <Box data-aos="fade-right" className="service-card-2">
        <AdbIcon fontSize="large" />
        <Box className="ser-text">
          <Typography variant="h5">
            {title}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
        </Box>
      </Box>
    );
  };

  const ServiceCardTwo = ({ title, description }: ServiceCardProps) => {
    return (
      <Box data-aos="fade-left" className="service-card-2">
        <AdbIcon fontSize="large" />
        <Box className="ser-text">
          <Typography variant="h5">
            {title}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
        </Box>
      </Box>
    );
  };



  /*interface ServiceCardProps {
    title: string;
    description: string;
    image: string;
  }*/

  /*const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <Card 
        className="ser-card"
        sx={{
          position: 'relative',
          boxShadow: 3,
          "&:hover": {
            boxShadow: 8,
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardMedia
          component="img"
          className="service-img"
          alt={title}
          height="100"
          image={image}
        />
        {!isHovered && (
          <CardContent className="ser-content">
          <Typography variant="h5">
            {title}
          </Typography>
        </CardContent>
        )}
        {isHovered && (
          <Box 
            sx={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              backgroundColor: 'rgba(0,0,0,0.5)', 
              color: 'white', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center' 
            }}
          >
            <Typography variant="h5" component="div">
              {description}
            </Typography>
          </Box>
        )}
      </Card>
    );
  }*/

  /*interface ServiceCardProps {
    title: string;
    description: string;
    Icon: React.ElementType;
    sx?: SxProps<Theme>;
  }
  
  const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, Icon, sx }) => {
    return (
      <Card sx={{ maxWidth: 345, ...sx }}>
        <CardHeader
          avatar={
            <Avatar>
              <Icon />
            </Avatar>
          }
          title={title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    );
  };

  /*const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };*/

  return (
    <div className="page-container">
      
      {/*
      <Card className="hero">
        <CardMedia
          component="img"
          image={MainImage}
          alt="Land Page Image"
          className="img-main"
        />
        <Box className="caption">
          <Typography variant="h3">We Manage Your Finances, So You Don't Have To!</Typography>
          <Typography variant="body1">
            We make sure you have the best finance guide whatever, taxes aren't cool, kids
          </Typography>
        </Box>
    </Card>
    */}


    {/*Numbers*/}




    <section className="spacer layer1"></section>


    <Box className="hero-2">
      <Box>
        <Typography data-aos="fade-up" className="text" variant="h3">We Manage Your Finances,<br></br> So You Don't Have To!</Typography>
        <Typography data-aos="fade-right" className="text" variant="h4">We will level up Your finnancial game, <br></br> check us out!</Typography>
          <Button style={{ padding: '20px', width: '300px' }}  href="/contact" data-aos="zoom-in-right" className="blob-btn">
            Book a Consultation
            <span className="blob-btn__inner">
              <span className="blob-btn__blobs">
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
              </span>
            </span>
          </Button>
      </Box>
      <Box>
        <img data-aos="fade-left" className="img" src={MainImage} alt="LandPage image" />
      </Box>
    </Box>

    <Box className="numbers">
          <Card data-aos="fade-up" className="number">
            <People style={{ fontSize: '60px' }} />
            <Typography className="special" variant="h3">9000</Typography>
            <Typography variant="h5">Satisfied Clients</Typography>
          </Card>
          <Card data-aos="fade-down"  className="number">
            <AccessTimeIcon style={{ fontSize: '60px' }} />
            <Typography className="special" variant="h3">30</Typography>
            <Typography variant="h5">Years Of Experience</Typography>
          </Card>
          <Card data-aos="fade-up"  className="number">
            <PaidIcon style={{ fontSize: '60px' }} />
            <Typography className="special" variant="h3">15%</Typography>
            <Typography variant="h5">Average Tax Savings</Typography>
        </Card>
    </Box>


    {/*What do we do*/}
    {/*
    <Box className="container-data">
      
      <Box className="data-text">
        <Typography variant="h3">
          What's Included With <br></br> Our Outsourced Accounting Service:
        </Typography>
        <Typography>
          <Typography variant="h4">
            <CheckCircleIcon /> Clean up your books and set things up perfectly<br></br>
          </Typography>
          <Typography variant="h4">
            <CheckCircleIcon />Create a tax reduction plan<br></br>
          </Typography>
          <Typography variant="h4">
            <CheckCircleIcon /> 
            Perform high levels of bookkeeping<br></br>
          </Typography>
          <Typography variant="h4">
            <CheckCircleIcon /> Provide monthly or quarterly CFO Meetings<br></br>
          </Typography>
          <Typography variant="h4">
            <CheckCircleIcon /> Meet before year-end for tax planning & decisions<br></br>
          </Typography>
        </Typography>
      </Box>
      

      
      <Lottie width={'50%'} className="animation" animationData={animationData} options={defaultOptions} />

    </Box>

    */}


    <Box className="company-overview">
       <img data-aos="fade-right" className="img" src={GentleMan} alt="LandPage image" />
      <Box className="text"> 
        <Typography data-aos="fade-left" variant="h2">
          Accounting
        </Typography>
        <Typography data-aos="fade-left" variant="h6">
          As an accounting firm, we are well-versed in the complexities of financial management and strive to streamline the process for our clients. Our team of dedicated professionals is committed to providing accurate and efficient accounting services to meet the specific needs of each client.
        </Typography>
      </Box>
    </Box>

    <Typography data-aos="fade-up" style={{ textAlign: 'center', paddingTop: '150px', paddingBottom: '15' }} variant="h2">Our services</Typography>

    
          
    <Box className="service-box-2">
      <ServiceCard data-aos="fade-right" title="Catchup & Tidy Up" description="Initiate the process by streamlining your bookkeeping and ensuring everything is in perfect order for your optimal setup." />
      <ServiceCardTwo data-aos="fade-left" title="Monthly Financial Maintenance" description="Avail our monthly bookkeeping services, guaranteeing that your records are consistently current and precise." />
      <ServiceCard data-aos="fade-right" title="Quarterly Financial Assessment" description="Receive a quarterly assessment of your business finances, pinpointing areas for improvement and offering growth recommendations." />
      <ServiceCardTwo data-aos="fade-left" title="Year-End Tax Readiness" description="Allow us to prepare your year-end tax return, ensuring you capitalize on deductions and leverage all available tax advantages." />
      <ServiceCard data-aos="fade-left" title="Effortless Payroll Management" description="Simplify payroll with our comprehensive services, handling paperwork, calculations, and tax filings, allowing you to focus on your team and business." />
      <ServiceCardTwo data-aos="fade-right" title="Strategic Business Consulting" description="Access invaluable business consulting services, aiding in informed decision-making and facilitating the growth of your business. From financial planning to marketing strategies, we've got you covered." />
      <ServiceCard data-aos="fade-left" title="Fraud Detection and Prevention" description="Safeguard your business against fraud with our thorough audit and prevention services, identifying potential risks and implementing preventive measures." />
      <ServiceCardTwo title="Sarbanes-Oxley Compliance Assistance" description="Ensure your business compliance with Sarbanes-Oxley (SOX) regulations through our specialized services." />
    </Box>


    {/*<Box className="services-box">
      <ServiceCard title="Tax Reduction" description="We provide tax reduction strategies." image={Tax} />
      <ServiceCard title="Financial Statement Analysis" description="We offer financial statement analysis services." image={Tax} />
      <ServiceCard title="Payroll Processing" description="We can handle your payroll processing." image={Tax} />
      <ServiceCard title="Business Valuation" description="We provide business valuation services." image={Tax} />
    </Box>*/}


      <Typography data-aos="fade-up" style={{ textAlign: 'center', paddingTop: '150px', paddingBottom: '150px' }} variant="h2">Pricing framework</Typography>


      <PricingComponent />


    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
      <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
    </filter>
  </defs>
    </svg>


    <Box sx={{ backgroundColor: '#333', color: '#fff', p: 6 }} component="footer">
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={12} md={4}>
          <Box display="flex" alignItems="center">
            <AdbIcon fontSize="large" />
            <Typography variant="h6" component="div" sx={{ ml: 2 }}>
              John Doe
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="body1" component="p">
            Phone: +1 123 456 7890
          </Typography>
          <Typography variant="body1" component="p">
            Email: john.doe@example.com
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className="fade" display="flex" justifyContent="space-around">
            {["/about", "/services", "/contact", "/pricing"].map((route) => (
              <Link key={route} href={route} underline="none" color="inherit">
                {route.substr(1)}
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid>
      <Typography variant="body1">Template by: <span className="fade">conatusweb</span></Typography>
      <Typography variant="body2" color="inherit" align="center" sx={{ mt: 3 }}>
        {"Copyright © "}
        <Link className="fade"href="https://your-website.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>

    </div>
  )
}