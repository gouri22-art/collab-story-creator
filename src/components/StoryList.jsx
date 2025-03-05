export default function StoryList({ stories }) {
    return (
      <div>
        <h3>Ongoing Stories</h3>
        <ul>
          {stories.length > 0 ? (
            stories.map(story => (
              <li key={story.id}>{story.title} - {story.sentences.length}/10 sentences</li>
            ))
          ) : (
            <p>No stories yet. Start one!</p>
          )}
        </ul>
      </div>
    );
  }
  