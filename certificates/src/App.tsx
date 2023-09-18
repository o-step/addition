import './App.css'
import ChemDiploma1 from '../src/assets/1.jpeg';
import ChemDiploma2 from '../src/assets/2.jpeg';
import ChemDiploma3 from '../src/assets/3.jpeg';
import WebDiploma1 from '../src/assets/4.jpeg';
import WebDiploma2 from '../src/assets/5.jpeg';
import RSFrontend from '../src/assets/frontend.jpeg';
import RSReact from '../src/assets/react.jpeg';
import { Section } from './components/section/Section';
import { useState } from 'react';
import { Modal } from './components/Modal/Modal';

function App() {
  const [isOpenModal, setOpenModal] = useState(false);
  const [curImage, setCurImage] = useState('');

  const openModal = (img: string) => {
    setOpenModal(true);
    setCurImage(img);
  }

  return (
    <main>
      {isOpenModal && <Modal image={curImage} isOpen={isOpenModal}/>}
      <Section title="Bachelor's Degree (Chemical Technology)" images={[ChemDiploma1, ChemDiploma2, ChemDiploma3]} openImage={openModal}/>
      <Section title="Diploma of professional retraining" images={[WebDiploma1, WebDiploma2]} openImage={openModal}/>
      <Section title="Frontend course" images={[RSFrontend]} openImage={openModal}/>
      <Section title="React course" images={[RSReact]} openImage={openModal}/>
    </main>
  )
}

export default App
