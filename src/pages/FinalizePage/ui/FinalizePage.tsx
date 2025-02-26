import {useParams} from "react-router-dom";
import {BackButton} from "../../../shared/BackButton/BackButton";
import {Spinner} from "../../../shared/Spinner/Spinner";
import {useFetchTest} from "../../../hooks/useFetch";
import './Finalize.css'

export const FinalizePage = () => {
  const {id} = useParams();
  const {test, loading, error} = useFetchTest(id);

  if (loading) return <Spinner/>;
  if (error) return <div>{error}</div>;
  if (!test) return <div>Test not found</div>;

  return (
    <main className='main-finalize'>
      <div className='finalize-content'>
        <h1>Finalize</h1>
        <h2>{test.name}</h2>
      </div>
      <BackButton/>
    </main>
  );
};
