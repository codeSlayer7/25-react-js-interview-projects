import { useEffect, useState } from "react";
import User from "./user";

function GithubProfileFinder() {
  const [userName, setUsername] = useState("codeSlayer7");
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  function handleSubmit() {
    fetchGithubUserData();
    setUserData("");
  }
  async function fetchGithubUserData() {
    const response = await fetch("https://api.github.com/users/" + userName);
    const data = await response.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      //   setUserData("");
    }
   
  }
  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <div> Data loading...</div>;
  }
  return (
    <div className="github-profile-cotainer">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}

export default GithubProfileFinder;
