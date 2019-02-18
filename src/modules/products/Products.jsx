import React from 'react';
import './products.scss';

const Products = () => {

    return(
        <section id="products">
            <div className="parallax">
                <p>Nossos produtos <br /> solucionam seus problemas</p>
            </div>

            <div className="product-list">
                <div className="item">
                    <img src={require('../../res/products/items/1.png')} alt=""/>
                    <p className="item-name">Para Raios 24Kv</p>
                </div>
                <div className="item">
                    <img src={require('../../res/products/items/1.png')} alt=""/>
                    <p className="item-name">Para Raios 24Kv</p>
                </div>
                <div className="item">
                    <img src={require('../../res/products/items/1.png')} alt=""/>
                    <p className="item-name">Para Raios 24Kv</p>
                </div>
                <div className="item">
                    <img src={require('../../res/products/items/1.png')} alt=""/>
                    <p className="item-name">Para Raios 24Kv</p>
                </div>
                <div className="item">
                    <img src={require('../../res/products/items/1.png')} alt=""/>
                    <p className="item-name">Para Raios 24Kv</p>
                </div>
                <div className="item">
                    <img src={require('../../res/products/items/1.png')} alt=""/>
                    <p className="item-name">Para Raios 24Kv</p>
                </div>
                <div className="item">
                    <img src={require('../../res/products/items/1.png')} alt=""/>
                    <p className="item-name">Para Raios 24Kv</p>
                </div>
                <div className="item">
                    <img src={require('../../res/products/items/1.png')} alt=""/>
                    <p className="item-name">Para Raios 24Kv</p>
                </div>
                <div className="item">
                    <img src={require('../../res/products/items/1.png')} alt=""/>
                    <p className="item-name">Para Raios 24Kv</p>
                </div>
                <div className="item">
                    <img src={require('../../res/products/items/1.png')} alt=""/>
                    <p className="item-name">Para Raios 24Kv</p>
                </div>
            </div>

            <div className="action">
                <button>Entre em contato</button>
            </div>

            <div className="report">
                <div className="box">
                    <div className="icon"><img src={require('../../res/products/report/1.png')} alt=""/></div>
                    <div className="detail">
                        <p className="value">300+</p>
                        <p className="title">Orçamentos</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon"><img src={require('../../res/products/report/2.png')} alt=""/></div>
                    <div className="detail">
                        <p className="value">150+</p>
                        <p className="title">Clientes satisfeitos</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon"><img src={require('../../res/products/report/3.png')} alt=""/></div>
                    <div className="detail">
                        <p className="value">180+</p>
                        <p className="title">Manutenções</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon"><img src={require('../../res/products/report/4.png')} alt=""/></div>
                    <div className="detail">
                        <p className="value">200+</p>
                        <p className="title">Projetos aprovados</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Products;