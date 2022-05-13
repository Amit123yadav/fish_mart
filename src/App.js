import React from 'react';
import Header from './Header';
import BodyOne from './BodyOne';
import BodyText from './BodyText';
import Catagory from './Catagory';
import BodyTwo from './BodyTwo';
import Faqs from './Faqs';
import ReadText from './ReadText';
import CenterImage from './CenterImage';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <BodyOne/>
      <BodyText/>
      <Catagory />
      <BodyTwo/>
      <Faqs/>
      <ReadText/>
     <CenterImage/>
     <Footer/>
    </div>
  );
}

export default App;
