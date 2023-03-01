import React from 'react'
import logo from "../resources/Vectorlogo.png";
import "../components/Footer.css"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {
  return (
    <div className='Footer maxWidth'>
      <div className='FooterLogoDiv'>
        <div className='Footerlogo'>
            <img src={logo} alt="" />
            <p className="large">StarClinch</p>
        </div>
        <div className='foooterSocialMedia'>
            <FacebookRoundedIcon fontSize='small'/>
            <TwitterIcon fontSize='small'/>
            <YouTubeIcon fontSize='small'/>
            <InstagramIcon fontSize='small'/>
        </div>

      </div>
      <div className='FooterParentdiv'>
        <div className="links_div">
                <div>
                    <p className="medium footerHeading" style={{fontWeight:600}}>FOR BUYERS</p>
                    <div className='links'>
                        <p className="smalll" style={{color:"#18BC9C"}}>Our Buyers</p>
                        <p className="smalll" style={{color:"#18BC9C"}}>Browse</p>
                        <p className="smalll" style={{color:"#18BC9C"}}>Post Your Requirement</p>
                        <p className="smalll" style={{color:"#18BC9C"}}>Entertainment on EMI</p>
                    </div>

                    <p className="medium footerHeading" style={{fontWeight:600}}>ABOUT US</p>
                    <div className='links'>
                        <p className="smalll" style={{color:"#18BC9C"}}>Our Story</p>
                        <p className="smalll" style={{color:"#18BC9C"}}>Careers</p>
                    </div>
                </div>
                <div>
                    <p className="medium footerHeading" style={{fontWeight:600}}>FOR BUYERS</p>
                    <div className='links'>
                        <p className="smalll" style={{color:"#18BC9C"}}>Our Buyers</p>
                        <p className="smalll" style={{color:"#18BC9C"}}>Browse</p>
                        <p className="smalll" style={{color:"#18BC9C"}}>Post Your Requirement</p>
                        <p className="smalll" style={{color:"#18BC9C"}}>Entertainment on EMI</p>
                    </div>

                    <p className="medium footerHeading" style={{fontWeight:600}}>ABOUT US</p>
                    <div className='links'>
                        <p className="smalll" style={{color:"#18BC9C"}}>Our Story</p>
                        <p className="smalll" style={{color:"#18BC9C"}}>Careers</p>
                    </div>
                </div>
        </div>
        <div className="address_div">
            <div>
              <p className="medium footerHeading" style={{fontWeight:600}}>REGISTERED OFFICE <br /> ADDRESS:</p>
              <p className="small">
              VINSM Globe Private Limited <br />
 Percept House, Ground Floor  <br />
 East of Kailash, New Delhi<br />
 CIN: U52605DL2012PTC236944<br />
 Phone: +91 11 498 498 01
              </p>
              <div className='links'>
                        <p className="smalll" style={{color:"#18BC9C",marginTop:"5px"}}>Contact Us</p>
                    </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
