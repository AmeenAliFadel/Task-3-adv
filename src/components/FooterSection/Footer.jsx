import './Footer.css'
import Logo from '../../assets/footer/logo.svg'
import Email from '../../assets/footer/email.svg'
import Phone from '../../assets/footer/phone.svg'
import Location from '../../assets/footer/location.svg'
import facebook from '../../assets/footer/facebook.svg'
import twitter from '../../assets/footer/twitter.svg'
import linkedIn from '../../assets/footer/linkedIn.svg'



export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="top-footer">
          <div className="footer-logo">
            <img src={Logo} alt="logo" />
            <p>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
            <ul>
              <li><span> <img src={Email} alt="Email" /></span>hello@littlelearners.com</li>
              <li><span><img src={Phone} alt="Phone" /> </span>+91 91813 23 2309</li>
              <li><span><img src={Location} alt="Location" /> </span>Somewhere in the World</li>
            </ul>
          </div>
          <div className='footer-uls'>
            <div className="mobile-footer">
              <div>
                <h4>Home</h4>
                <ul>
                  <li>Features</li>
                  <li>Our Testimonials</li>
                  <li>FAQ</li>
                </ul>
              </div>
              <div>
                <h4>About Us</h4>
                <ul>
                  <li>Our Mission</li>
                  <li>Our Vission</li>
                  <li>Awards and Recognitions</li>
                  <li>History</li>
                  <li>Teachers</li>
                </ul>
              </div>
            </div>
            <div className="mobile-footer">
              <div>
                <h4>Academics</h4>
                <ul>
                  <li>Special Features</li>
                  <li>Gallery</li>
                </ul>
              </div>
              <div>
                <h4>Contact Us</h4>
                <ul>
                  <li>Information</li>
                  <li>Map & Direction</li>
                </ul>
              </div></div>

          </div>
        </div>
        <div className="bottom-footer">
          <div className="bottom-footer-top">
            <p>Terms of Service | Privacy Policy | Cookie Policy</p>
            <div className="bottom-footer-top-icons">
              <span><img src={facebook} alt="facebook" /></span>
              <span><img src={twitter} alt="twitter" /></span>
              <span><img src={linkedIn} alt="linkedIn" /></span>
            </div>
          </div>
          <div className="bottom-footer-bottom">
            <p>Copyright © [2023] Little Learners Academy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  )
}
