import React from 'react';
import './styles.css'; // Importando o arquivo CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        

        <div className="footer-section">
          
        <div className="containerImgFooter">
          <img
            src="/dafel.png"
            alt="logo"
            className="motoImgFooter"
          />
        </div>
          <h3 className="footer-title">Sobre a Calculadora</h3>
          <p className="footer-text">
            Calculadora exclusiva para colaboradores do grupo DAFEL, visando sanar qalquer duvida sobre medidas de forma rápida e agilisar o atendimento.
          </p>
        </div>


        <div className="footer-section">
          <h3 className="footer-title">Contato</h3>
          <p className="footer-text">
            Email: <a href="mailto:contato@serrafrete.com" className="footer-link">cartondrywall@gmail.com</a>
          </p>
          <p className="footer-text">Telefone: (21)99459-8743</p>

        </div>
      </div>


      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Carton. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
