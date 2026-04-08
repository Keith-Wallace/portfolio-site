import { StrictMode } from 'react';
import RootPageLayout from './components/RootPageLayout/RootPageLayout';
import MainContent from './components/MainContent/MainContent.tsx';
import Footer from './components/Footer/Footer.tsx';

function App() {

  return (
    <StrictMode>
      <RootPageLayout>
        <MainContent />
        <Footer />
      </RootPageLayout>
    </StrictMode>
  );
};

export default App;
