import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Link to="/about">Go to About</Link> {/* Link to the About page */}
    </div>
  );
}

export default About;