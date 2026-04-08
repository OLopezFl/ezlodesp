import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from './components/layout/PublicLayout';
import { ROUTES } from './config/routes';
import Home from './pages/public/Home';
import Services from './pages/public/Services';
import Contact from './pages/public/Contact';
import FAQ from './pages/public/FAQ';
import Login from './pages/public/Login';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.SERVICES} element={<Services />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.FAQ} element={<FAQ />} />
        </Route>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
      </Routes>
    </Router>
  );
}
