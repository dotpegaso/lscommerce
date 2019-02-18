import React from 'react';
import './home.scss';

const Home = () => (
    <section id="home">

        <div className="navbar">
            <p className="logo">LS COMMERCE</p>
            <div className="menu">
                <div className="menu-item"><p>Bombeamento</p></div>
                <div className="menu-item"><p>Produtos</p></div>
                <div className="menu-item"><p>Sobre</p></div>
                <div className="menu-item"><p>Contato</p></div>
            </div>
        </div>

        <div className="press">            
            <div className="box">
                <p className="intro">
                    Conectados com o <span>futuro</span>
                </p>
                <p className="disclaimer">
                    Especializada no comércio de <b>materiais e equipamentos elétricos</b> para empresas de energia de todo o Brasil.
                </p>

                <button>
                    Saiba mais
                </button>             
            </div>
            <div className="box">
                <img src={require('../../res/home/workers.png')} alt=""/>
            </div>
        </div>

        <div className="mouse-icon">
            <img src={require('../../res/home/mouse_icon.png')} alt=""/>
        </div>    
    
    </section>
);

export default Home;