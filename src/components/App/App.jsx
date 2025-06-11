import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from '../Layout/Layout.jsx';
import { Toaster } from 'react-hot-toast';
import LandingPage from '../../pages/LandingPage/LandingPage.jsx';
import AllModulesPage from '../../pages/AllModulesPage/AllModulesPage.jsx';
import ModuleDetailsPage from '../../pages/ModuleDetailsPage/ModuleDetailsPage.jsx';

function App() {
  return (
    <Layout>
      <>
        <Toaster />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/order" element={OrderPage} /> */}
          {/* <Route path="/admin" element={AdminPage} /> */}
          {/* <Route path="/api-docs" element={ApiDocsPage} /> */}
          <Route path="/modules" element={<AllModulesPage />} />
          <Route path="/modules/:id" element={<ModuleDetailsPage />} />
          {/* <Route element={NotFound} /> */}
        </Routes>
      </>
    </Layout>
  );
}

export default App;
