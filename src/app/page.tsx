import Navbar from '@/scenes/navbar';
import Home from '@/scenes/home';
import OurClasses from '@/scenes/ourClasses';
import Benefits from '@/scenes/benefits/index';
import ContactUs from '@/scenes/contactUs';
import Footer from '@/scenes/footer';
import ScrollTracker from '@/hooks/ScrollTracker';

const HomePage = () => {

  return (
    <div className='app bg-gray-20'>
      <ScrollTracker />
      <Navbar />
      <Home />
      <Benefits />
      <OurClasses />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default HomePage;
