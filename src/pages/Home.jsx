import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Collaborative Story Creator</h1>
      <p>Create and contribute to amazing stories with others!</p>
      <Link to="/login">Get Started</Link>
    </div>
  );
}
