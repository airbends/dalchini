import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { DestinationList } from './pages/DestinationList';
import { DestinationDetail } from './pages/DestinationDetail';
import { SearchResults } from './pages/SearchResults';
import { Hotels } from './pages/Hotels';
import { Activities } from './pages/Activities';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<DestinationList />} />
          <Route path="/destination/:id" element={<DestinationDetail />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/activities" element={<Activities />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;