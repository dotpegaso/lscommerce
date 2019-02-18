import React from 'react';
import './about.scss';

const About = () => {

    function getImages(r) {
        return r.keys().map(r);
    }
      
    const images = 
        getImages(require.context('../../res/about/logos/'));

    const scenarios = 
        getImages(require.context('../../res/about/scenarios/'));

    const scenariosSub = 
        ["Mineração", "Saneamento", "Indústria", "PCHs Barragens", "Dragagens"];

    return(
        <section id="about">
            <div className="logos">
                { images.map( x => <img src={x} alt=""/> ) }
            </div>

            <div className="scenarios">
                { scenarios.map( (x, index) => (
                    <div className="item">
                        <span>{`0${index + 1}`}</span>
                        <img src={x} alt=""/>
                        <p className="sub">{scenariosSub[index]}</p>
                    </div>
                ) ) }
            </div>

            <div className="disclaimer">
                <p>Nossas soluções de bombeamento <b>atendem os segmentos de mercado apresentados acima</b>, trabalhamos com produtos de alta qualidade!</p>

                <button>Faça um orçamento</button>
            </div>
        </section>
    )
};

export default About;