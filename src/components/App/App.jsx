import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import PrivateRoute from "../PrivateRoute";
import RestrictedRoute from "../RestrictedRoute";
import { refreshUserThunk } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage.jsx")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return isRefreshing ? null : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        
        <Route
          path="/register"
          element={
            <RestrictedRoute>
              <Suspense fallback={<div>Loading...</div>}>
                <RegistrationPage />
              </Suspense>
            </RestrictedRoute>
          }
        />
        
        <Route
          path="/login"
          element={
            <RestrictedRoute>
              <Suspense fallback={<div>Loading...</div>}>
                <LoginPage />
              </Suspense>
            </RestrictedRoute>
          }
        />
        
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <Suspense fallback={<div>Loading...</div>}>
                <ContactsPage />
              </Suspense>
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;