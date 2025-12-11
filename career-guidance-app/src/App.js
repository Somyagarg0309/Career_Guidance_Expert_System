import React from 'react';
import CareerGuidanceSystem from './CareerGuidanceSystem';
import Footer from './Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="flex-1">
        <CareerGuidanceSystem />
      </main>
      <Footer />
    </div>
  );
}

export default App;
