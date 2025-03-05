import { useState } from "react";
import { useStory } from "../context/StoryContext";
import { useAuth } from "../context/AuthContext";

export default function StoryForm() {
  const [title, setTitle] = useState("");
  const [sentence, setSentence] = useState("");
  const { addNewStory } = useStory();
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !sentence) return;

    addNewStory(title, sentence, user.email);
    setTitle("");
    setSentence("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Story Title" required />
      <input type="text" value={sentence} onChange={(e) => setSentence(e.target.value)} placeholder="First Sentence" required />
      <button type="submit">Create Story</button>
    </form>
  );
}
