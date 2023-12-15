import './App.css';
import Modal from './components/modal.js';
import AOS from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import data from './data-modals.json';
function App() {
  const info = 'Titlu';
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <body>
        <div className='content' data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <div className='first-page'>
            <div className="textbox-introducere">
              <p className="title" >
                Reactii de Precipitare
              </p>
        <p>
                Bine ați venit pe site-ul nostru dedicat reacțiilor de precipitare! Descoperiți fundamentul acestor fenomene chimice și rolul lor în diverse contexte.
        </p>
            </div>
            <img src="https://video-public.canva.com/VAFKHIeV6E8/v/07ba2e6363.gif" className="App-logo" alt="Site realizat de Tirnovan Emilian" />
          </div>
          <img src="https://www.tabf.org.tw/English/image/scroll.gif" className='scroll' alt="scroll down" />
          <div className='second-page' data-aos="fade-zoom-in" data-aos-duration="400" >
            <div className='sub-title'>Ce sunt reactiile de precipitare ?</div>
            <div className='text-box'>
              <img src="https://video-public.canva.com/VAFKHLeOx28/v/45cb848511.gif" data-aos="fade-right" className="App-logo" alt="Emi Tirnovan in alta forma existentiala de semiluna" />
              <p data-aos="fade-left" data-aos-duration="900">Aflați definiția reacțiilor de precipitare și cum acestea duc la formarea de precipitate solide în soluții chimice. Explorează exemple concrete și importanța lor în chimie.</p>
            </div>
          </div>
          <div className='line' data-aos="fade-zoom-in"></div>
          <div className='third-page' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
            {data.map((item, index) => (
              <Modal key={index} btn={item.btn} title={item.title} content={item.content} />
            )
            )}
          </div>

        </div>
        <div className='footer'>
          <h2>Echipa:</h2>
          <div className='mini-pfp'>

            <img src={require('./imgs/Emi.jpeg')} alt='Razvan a luat informatia' />
            <img src={require('./imgs/Daniel.jpeg')} alt='Cosmin nu a facut nimic' />
            <img src={require('./imgs/Razvan.jpeg')} alt='Emi a facut tot site-ul' />
            <img src={require('./imgs/Cosmin.jpeg')} alt='Daniel a facut nimic + 1:)' />
            <img src={require('./imgs/Rares.jpeg')} alt='Rares nici nu cred ca stie ca are de facut un proiect' />

          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
