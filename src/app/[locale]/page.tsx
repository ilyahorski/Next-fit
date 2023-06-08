import Navbar from '@/scenes/navbar';
import Home from '@/scenes/home';
import OurClasses from '@/scenes/ourClasses';
import Benefits from '@/scenes/benefits';
import ContactUs from '@/scenes/contactUs';
import Footer from '@/scenes/footer';

const HomePage = () => {

  return (
    <div className={`bg-gray-20 dark:bg-gray-800`}>
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

