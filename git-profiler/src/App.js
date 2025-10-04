import React, { useState } from 'react';
import './App.css';
import { useGitHub } from './hooks/useGitHub';
import SearchBar from './components/SearchBar/SearchBar';
import ProfileCard from './components/ProfileCard/ProfileCard';
import RepoList from './components/RepoList/RepoList';
import LanguageChart from './components/LanguageChart/LanguageChart';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
function App() {
  const [username, setUsername] = useState('Subhashree0718');
  const { user, repos, loading, error, fetchUserData } = useGitHub();
  const handleSearch = (searchUsername) => {
    setUsername(searchUsername);
    fetchUserData(searchUsername);
  };
  React.useEffect(() => {
     fetchUserData(username);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  console.log('Rendering App with user:', user);
  return (
    <div className="app-container">
      <div className="main-content">
        <header>
          <h1>Git-Profiler</h1>
          <ThemeToggle />
        </header>  
        <SearchBar onSearch={handleSearch} />
        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}
                {!loading && !error && user && (
          <>         
            <ProfileCard user={user} />
            <RepoList repos={repos} />
            <LanguageChart repos={repos} />
          </>
        )}
      </div>
    </div>
  );
}
export default App;