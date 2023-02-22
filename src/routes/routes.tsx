import { Routes as Router, Route, Navigate } from "react-router-dom";

import * as Paths from "./route.paths";
import * as Pages from "@/pages";

const Routes: React.FC = () => {
  return (
    <Router>
      <Route path='*' element={<Navigate to={Paths.HOME} />} />
      <Route element={<Navigate to={Paths.HOME} />} />
      <Route path={Paths.HOME} element={<Pages.Home />} />
    </Router>
  );
};

export default Routes;
