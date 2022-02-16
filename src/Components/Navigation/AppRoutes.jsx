import { Route, Routes } from "react-router-dom";
import { Protected } from ".";
import {
  AllCandidates,
  AllExams,
  Candidate,
  Exam,
  Home,
  Login,
  NewCandidate,
} from "../../Pages";
import NewExam from "../../Pages/Exams/NewExam";
import { LINKS } from "../../Utils/dec";
import NotFound from "./NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={LINKS.HOME.PATH} element={<Home />} />
      <Route path={LINKS.LOGIN.PATH} element={<Login />} />
      <Route element={<Protected />}>
        <Route path={LINKS.CANDIDATES.PATH}>
          <Route index element={<AllCandidates />} />
          <Route path={LINKS.SINGLE.PATH} element={<Candidate />} />
          <Route path={LINKS.NEW.PATH} element={<NewCandidate />} />
        </Route>
        <Route path={LINKS.EXAMS.PATH}>
          <Route index element={<AllExams />} />
          <Route path={LINKS.SINGLE.PATH} element={<Exam />} />
          <Route path={LINKS.NEW.PATH} element={<NewExam />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
