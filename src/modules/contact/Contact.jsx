import React from 'react';
import './contact.scss';

const Contact = () => {

    const address = 'Rua Alagoas 1300, Joá, Lagoa Santa - Minas Gerais';

    return(
        <section id="contact">
            <div className="disclaimer">
                <p><b>Somos representantes da empresa <a href="https://www.vgrow.com.br/" target="_blank" rel="noopener noreferrer">VGROW</a></b> <br /> que atua diretamente no setor elétrico brasileiro. <br /> <br /> Entre em contato através do formulário abaixo:</p>
            </div>

            <form action="">
                <div className="box">
                    <input name="client_name" type="text" placeholder="Nome"/>
                    <input name="client_email" type="email" placeholder="Email"/>
                    <input name="client_number" type="tel" placeholder="Telefone/WhatsApp"/>
                </div>
                <div className="box">
                    <textarea name="client_interest" placeholder="Descreva seu interesse" cols="30" rows="10"></textarea>
                </div>

                <div className="submit">
                    <button>Enviar</button>
                </div>
            </form>

            <div className="mail">
                <a href="mailto:vendas@lscomerce.com.br"><b>vendas@lscomerce.com.br</b></a>
                <p><b>(31) 3352 2812</b> <span>ou</span> <b>(31) 992 792 011</b></p>
            </div>
            
            <div className="footer">
                <a href={`https://www.google.com/maps/place/${address}`} target="_blank" rel="noopener noreferrer">{address}</a>
                <p>Copyright © 2019 LS Commerce - Todos os direitos reservados - Site desenvolvido por <a href="https://dotpegaso.com.br" target="_blank" rel="noopener noreferrer">dotpegaso</a></p>
            </div>
        </section>
    )
}

export default Contact;