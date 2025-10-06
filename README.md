# Git-Profiler 🚀

A React-based GitHub Profile Viewer that lets you search for any GitHub user and see their profile, repositories, and language distribution in a clean, responsive UI. Built with React, Context API, Chart.js, and React Router.

---

## 🔹 Features

- **ProfileCard:** Displays user avatar, name, bio, join date, and stats (repos, followers, following).  
- **RepoList:** Shows top repositories with sorting by stars, forks, or creation date.  
- **LanguageChart:** Doughnut chart displaying repository language distribution.  
- **SearchBar:** Search GitHub users with input validation.  
- **ThemeToggle:** Light/Dark mode with context and `localStorage`.  
- **Global State Management:** Managed via `GitHubContext`.  
- **Routing:** Dynamic routes with React Router v6 (`HomePage` & `ProfilePage`).  

---

## 🛠 Tech Stack

- **Frontend:** React, Tailwind CSS  
- **State Management:** Context API, Hooks (`useState`, `useEffect`, `useMemo`, `useCallback`)  
- **Routing:** React Router v6  
- **Charts:** Chart.js (`react-chartjs-2`)  
- **API:** GitHub REST API (Axios)  
- **Theme Persistence:** LocalStorage  

---

## 📂 Project Structure

```
src/
├── components/
│ ├── ProfileCard/
│ ├── RepoList/
│ ├── LanguageChart/
│ ├── SearchBar/
│ └── ThemeToggle/
├── context/
│ ├── GitHubContext.js
│ └── ThemeContext.js
├── pages/
│ ├── HomePage.js
│ └── ProfilePage.js
├── App.js
└── index.js
```
## 🚀 How to Run

1. Clone the repository:

```bash
git clone https://github.com/yourusername/git-profiler.git
cd git-profiler
```
Install dependencies:

```bash
npm install
```
Start the app:
```npm start```
Open in browser: http://localhost:3000

