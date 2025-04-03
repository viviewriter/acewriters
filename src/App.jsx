import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
   const [message, setMessage] = useState('');

   useEffect(() => {
     axios
	    .get('http://127.0.0.1:8000/api/hello/')
	   .then((response) => {
		  setMessage(response.data.message);
		})
		.catch((error) => console.error('Error fetching data', error));
	}, []);

	return (
  <div>
    <h1>React and Django</h1>
    <p>{message}</p>
    <Nav />
    <Header />
    <About />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
	);
  };

  export default App;
