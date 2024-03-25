import { Row, Col } from 'react-bootstrap';

function Footer() {
    return (
      <Row className='fixed-bottom h-20 border'>
        <Col className='float-right'><p>POWERED BY ImaliPay</p></Col>
        <Col className='float-right'>Insta Twitter</Col>
      </Row>
    );
  }
  
export default Footer;