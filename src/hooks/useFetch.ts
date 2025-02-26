import {useEffect, useState} from "react";
import {getTestById} from "../app/api/api";

interface Test {
  id: string;
  name: string;
}

export const useFetchTest = (id?: string) => {
  const [test, setTest] = useState<Test | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    (async () => {
      try {
        setLoading(true);
        const data = await getTestById(id);
        setTest(data);
      } catch (err) {
        setError("Failed to fetch test data");
      } finally {
        setLoading(false);
      }
    })();

  }, [id]);

  return {test, loading, error};
};
