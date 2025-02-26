import {useParams} from "react-router-dom";
import {BackButton} from "../../../shared/BackButton/BackButton";
import {Spinner} from "../../../shared/Spinner/Spinner";
import {useFetchTest} from "../../../hooks/useFetch";
import './Results.css'

export const ResultsPage = () => {
  const {id} = useParams();
  const {test, loading, error} = useFetchTest(id);

  if (loading) return <Spinner/>;
  if (error) return <div>{error}</div>;
  if (!test) return <div>Test not found</div>;

  return (
    <main className='main-result'>
      <div className='result-content'>
        <h1>Results</h1>
        <h3>{test.name}</h3>
      </div>
      <BackButton/>
    </main>
  );
};
