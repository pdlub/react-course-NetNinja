import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;

  const link = 'https://www.google.com';


  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{[2, 'om', 3, 7, 'polt']}</p>
        <a href={link}>google link</a>
      </div>
    </div>
  );
}

export default App;
