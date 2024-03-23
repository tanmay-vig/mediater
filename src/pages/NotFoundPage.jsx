// NotFoundPage.js

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaSadTear } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../css/NotFoundPage.css'; // Import your custom CSS file

const NotFoundPage = () => {
  return (
    <Container fluid className="dark-theme"> {/* Apply dark-theme class and make it fluid */}
      <Row className="justify-content-center align-items-center vh-100">
        <Col xs={12} className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaSadTear size={100} color="#FF5722" />
          </motion.div>
          <h1 className="mt-4">Oops! Page not found</h1>
          <p className="text-white">The page you are looking for might have been removed or is temporarily unavailable.</p>
          <Link to="/" className="btn btn-primary mt-3">Go back to Home</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
