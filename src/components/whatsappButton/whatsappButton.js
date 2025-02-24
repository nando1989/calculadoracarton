
import './styles.css';

export default function WhatsApp() {
  return (
      <a
        href="https://wa.me/5521994598743?text=Ol%C3%A1%20Carton!"  
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <img  className="whatsapp-button-img" src="/whatsapp-icon.png" alt="WhatsApp" />
      </a>

  )
}