import { useSelector } from "react-redux";
import Filter from "../components/Filter";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Card from "../components/Card";

const JobList = () => {
  const { jobs, error, isLoading } = useSelector((store) => store);

  return (
    <div className="list-page">
      <Filter />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <div className="cards-wrapper">
          {jobs.map((i) => (
            <Card key={i.id} job={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;
