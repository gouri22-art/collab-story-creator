let stories = [];

export function getStories() {
  return stories;
}

export function createStory(title, sentence, author) {
  const newStory = { id: Date.now(), title, sentences: [{ text: sentence, author }], complete: false };
  stories.push(newStory);
  return newStory;
}

export function addSentence(storyId, sentence, author) {
  const story = stories.find(s => s.id === storyId);
  if (story && story.sentences.length < 10) {
    story.sentences.push({ text: sentence, author });
    if (story.sentences.length === 10) story.complete = true;
  }
}
