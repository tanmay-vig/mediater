// InfluencerList.js
import InfluencerCard from '../components/InfluencerCard';
import influencerData from '../data/influencerData';

const Influencers = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center ">
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
