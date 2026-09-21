import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ModulesSection from './components/ModulesSection';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import ModuleWrapper from './components/ModuleWrapper';

import './App.css';

function HomePage() {
  return (
    <>
      <ModulesSection />
      <DownloadSection />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/modulo/:id" element={<ModuleWrapper />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}