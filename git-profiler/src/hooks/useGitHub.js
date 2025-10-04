import { useState, useCallback } from 'react';
import axios from 'axios';
const GITHUB_API = 'https://api.github.com/users/';
export const useGitHub = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchUserData = useCallback(async (username) => {
    if (!username) return;
    //setLoading(true);
    setError(null);
    setUser(null);
    //setRepos([]);
    try {
      const [userResponse, reposResponse] = await Promise.all([
        axios.get(`${GITHUB_API}${username}`),
        axios.get(`${GITHUB_API}${username}/repos?per_page=100`)
      ]);
    console.log('User data fetched:', userResponse.data); 
    console.log('Repos data fetched:', reposResponse.data); 
      setUser(userResponse.data);
      setRepos(reposResponse.data);
    } catch (err) {
      setError('User not found. Please try another username.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);
  return { user, repos, loading, error, fetchUserData };
};