import React from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaSpotify, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 text-sm">
      <div className="container mx-auto flex justify-around">
        <div>
          <h3 className="font-bold mb-2">CONTACTO</h3>
          <p className="flex items-center"><FaWhatsapp className="mr-2" /> 300 507 10 00</p>
          <p className="flex items-center"><span className="font-bold mr-2">PBX:</span> 01 8000 41 37 57</p>
          <p>Escríbenos tu PQRS</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">QUIÉNES SOMOS</h3>
          <p>Cultura</p>
          <p>Trabaja aquí</p>
          <p>La vida en Mattelsa</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">AYUDA</h3>
          <p>Envíos</p>
          <p>Devoluciones y garantías</p>
          <p>Preguntas frecuentes</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">SÍGUENOS</h3>
          <div className="flex space-x-4">
            <FaWhatsapp />
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaSpotify />
            <FaTiktok />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
