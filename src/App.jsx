import './styles/global.scss';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Entries from './components/entry/Entries';

function App() {
  return (
    <section>
      <Navbar />
      <div className="content">
        <Entries />
      </div>
      <Footer />
    </section>
  );
}

export default App;
