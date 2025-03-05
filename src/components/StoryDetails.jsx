export default function StoryDetails({ story }) {
    return (
      <div>
        <h2>{story.title}</h2>
        <ul>
          {story.sentences.map((s, index) => (
            <li key={index}>{s.text} - <i>{s.author}</i></li>
          ))}
        </ul>
      </div>
    );
  }