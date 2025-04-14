import React, { useEffect } from 'react'
import Header from './pages/Header'
import Hero from './componenets/Hero/Hero'
import 'aos/dist/aos.css';
import Aos from "aos";
import Project from './componenets/Project/Project';
import Brand from './componenets/Brand/Brand';
import Advantage from './componenets/advantage/advantage';
import Steps from './componenets/Diagrama/Diagrama';
import Question from './componenets/question/Question';
import RemontSteps from './componenets/renovation/renovation';
import CallRequestForm from './componenets/Form/Form';
import Footer from './pages/Footer';
import RepairSelection from './componenets/work/Work';

const App = () => {
  useEffect(() => {
    // Sahifa yuklanishi bilan yuqoriga qaytarish
    window.scrollTo(0, 0);

    // AOS animatsiyasini ishga tushirish
    Aos.init({
      duration: 1000,  // Animatsiya davomiyligi
      once: true,  // Faqat bir marta animatsiya bo'lishi (scroll noto‘g‘ri tushmasligi uchun)
      offset: 200,  // Animatsiya qachon boshlanishi
    });

    Aos.refresh(); // Aos'ni yangilash
  }, []);
  return (
    <div>
      <Header/>
      <Hero/>
      <Project/>
      <RepairSelection/>
      <Brand/>
      <Advantage/>
      <Question/>
      <Steps/>
      <RemontSteps/>
      <CallRequestForm/>
      <Footer/>
    </div>
  )
}

export default App