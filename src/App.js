import './App.css';
import Nav from './Nav';
import Footer from './Footer';

function App() {
  return (
    <>
      <header>
        <Nav /> {/* Navigation bar */}
      </header>
      <main>
        <section id="about">
          {/* About section */}
        </section>
        <section id="meals">
          {/* Meal cards section */}
        </section>
        <section id="testimonials">
          {/* Testimonials section */}
        </section>
        <section id="founders">
          {/* Project founders section */}
        </section>
      </main>
      <footer>
        <Footer /> {/* Footer */}
      </footer>
    </>
  );
}

export default App;
