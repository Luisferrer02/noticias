

export default function PageFooter() {
    return <div id="footer-area">
        <p className="footer-link" id="foot-about">Sobre Nosotros</p>
        <p className="footer-link" id="foot-contact">Ponte en Contacto</p>
        
        <div id="foot-socmed-container">
            <p id="foot-socmed-title">Nuestras Redes Sociales</p>
            <div id="foot-media-link-container">
                <p className="footer-link-media" id="foot-twitter">Twitter</p>
                <p className="footer-link-media" id="foot-instagram">Instagram</p>
                <p className="footer-link-media" id="foot-facebook">Facebook</p>
            </div>
        </div>
    </div>
}