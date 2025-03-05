import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import StoryForm from "../components/StoryForm";
import StoryList from "../components/StoryList";
import { getStories } from "../services/mockserver";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const stories = getStories();

  // Redirect to login if user is not authenticated
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    return <p>Loading...</p>; // Show loading state while redirecting
  }

  return (
    <div>
      <h2>Welcome, {user.email}</h2>
      <button onClick={logout}>Logout</button>

      {/* Story Form to create new stories */}
      <StoryForm />

      {/* List of stories */}
      <StoryList stories={stories} />
    </div>
  );
}
