import { useParams } from "react-router-dom";

function TrekDetails() {
  const { id } = useParams();

  return (
    <div className="p-10">
      <h1 className="text-5xl font-bold">
        Trek Details #{id}
      </h1>
    </div>
  );
}

export default TrekDetails;
