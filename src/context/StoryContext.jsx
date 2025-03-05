import { createContext, useContext, useState } from "react";
import { getStories, createStory, addSentence } from "../services/mockserver";

const StoryContext = createContext();

export function StoryProvider({ children }) {
  const [stories, setStories] = useState(getStories());

  const addNewStory = (title, sentence, author) => {
    const newStory = createStory(title, sentence, author);
    setStories([...stories, newStory]);
  };

  const contributeToStory = (storyId, sentence, author) => {
    addSentence(storyId, sentence, author);
    setStories([...stories]);
  };

  return (
    <StoryContext.Provider value={{ stories, addNewStory, contributeToStory }}>
      {children}
    </StoryContext.Provider>
  );
}

export function useStory() {
  return useContext(StoryContext);
}
