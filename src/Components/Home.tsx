import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">Go to About</Link> {/* Link to the About page */}
    </div>
  );
}

export default Home;