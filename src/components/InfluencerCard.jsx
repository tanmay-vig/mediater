// InfluencerCard.js
import { Card } from 'react-bootstrap';
import { BsPersonFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import '../css/InfluencerCard.css';

const InfluencerCard = ({ name, image }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className="influencer-card">
      <Card className="dark-theme">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <div className="overlay">
          <BsPersonFill size={30} color="#fff" />
          <p>{name}</p>
        </div>
      </Card>
    </motion.div>
  );
};

export default InfluencerCard;
