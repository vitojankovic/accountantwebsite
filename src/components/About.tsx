import { useEffect } from 'react';
import Box from '@mui/material/Box';
import GentleMan from '../assets/accountant-male.webp';
import GentleMan2 from '../assets/man.webp';
import Woman from '../assets/female-2.webp';
import Woman2 from '../assets/female.webp';
import { Card, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {

  useEffect(() => {
    AOS.init({
      offset: 500,
      duration: 1000,
    })
  }, [])

  return (
    <div className="page-container">
      <Box className="about-hero">
          <Typography data-aos="fade-up" variant="h2">👋About Us</Typography>
          <Typography data-aos="fade-down" className="text" variant="h5">Helping business owners and their families motivates us to diligently engage each week.  We know how hard entrepreneurship is and our team is filled with CPA's and Accountants that are ready to make your life much easier.</Typography>
      </Box>


      <Typography style={{ textAlign: 'center', paddingTop: '80px' }} variant="h2">Team</Typography>

      <Box className="team-section">
        <Card data-aos="fade-up" className="team-member">
          <img src={GentleMan} alt="Team Member 1" />
          <div className="member-info">
            <h3>John Doe</h3>
            <p>Senior Accountant</p>
          </div>
        </Card>
        <Card data-aos="fade-up" className="team-member">
          <img src={Woman} alt="Team Member 2" />
          <div className="member-info">
            <h3>Jane Smith</h3>
            <p>Accounting Manager</p>
          </div>
        </Card>
        <Card data-aos="fade-up" className="team-member">
          <img src={GentleMan2}alt="Team Member 3" />
          <div className="member-info">
            <h3>Robert Johnson</h3>
            <p>Financial Analyst</p>
          </div>
        </Card>
        <Card data-aos="fade-upy" className="team-member">
          <img src={Woman2} alt="Team Member 4" />
          <div className="member-info">
            <h3>Amy Brown</h3>
            <p>Junior Accountant</p>
          </div>
        </Card>
      </Box>

    </div>
  );
};

export default About;
