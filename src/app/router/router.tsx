import {createBrowserRouter} from "react-router-dom";
import {App} from "../App";
import ResultsPage from "../../pages/ResultsPage";
import FinalizePage from "../../pages/FinalizePage";
import * as ROUTE_PATHS from './routesPaths/paths';

export const router = createBrowserRouter([
    {
      path: ROUTE_PATHS.ROOT,
      element: <App/>,
    },
    {
      path: ROUTE_PATHS.RESULTS,
      element: <ResultsPage/>,
    },
    {
      path: ROUTE_PATHS.FINALIZE,
      element: <FinalizePage/>,
    },
  ]);
