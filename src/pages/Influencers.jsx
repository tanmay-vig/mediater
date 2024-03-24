// InfluencerList.js
import InfluencerCard from '../components/InfluencerCard';
import influencerData from '../data/influencerData';

const Influencers = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center bg-dark bg-gradient">
      {influencerData.map((influencer, index) => (
        <InfluencerCard
          key={index}
          name={influencer.name}
          image={influencer.image} 
        />
      ))}
    </div>
  );
};

export default Influencers;
