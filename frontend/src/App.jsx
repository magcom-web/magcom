import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AppRoutes from './components/Routes';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default App;
