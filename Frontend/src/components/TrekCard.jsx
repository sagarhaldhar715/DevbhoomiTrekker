const TrekCard = ({ image, title, days, price }) => {
  return (
    <div className="trek-card">
      <img src={image} alt="" />

      <div className="trek-content">
        <h3>{title}</h3>

        <p>{days}</p>

        <h4>₹{price}</h4>

        <button>View Details</button>
      </div>
    </div>
  );
};

export default TrekCard;