import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from '../Layout/Layout.jsx';
import { Toaster } from 'react-hot-toast';
import LandingPage from '../../pages/LandingPage/LandingPage.jsx';

function App() {
  return (
    <Layout>
      <>
        <Toaster />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/order" element={OrderPage} />
        <Route path="/admin" element={AdminPage} />
        <Route path="/api-docs" element={ApiDocsPage} />
        <Route path="/modules" element={ModulesPage} />
        <Route path="/modules/:id" element={ModuleDetailPage} />
        <Route element={NotFound} /> */}
        </Routes>
      </>
    </Layout>
  );
}

export default App;
