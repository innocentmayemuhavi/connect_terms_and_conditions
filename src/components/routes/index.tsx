import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import TermsAndConditions from "../terms_conditions";
import PrivacyPolicy from "../privacy_policy";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<TermsAndConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </>
  )
);
