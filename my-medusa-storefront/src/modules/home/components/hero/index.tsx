import React from "react";
import Slides from "./slide/slide";
import SlidesMarcas from "./slide/marcas";

const Hero = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
    
          <div className="text-center">
            <h3 className="mt-6 text-3xl font-bold text-gray-900 leading-tight">
              Bienvenido a Tech Mind
            </h3>
            <SlidesMarcas />
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Descubre el futuro de la comunicación en la punta de tus dedos. En Tech Mind, nos apasiona brindarte lo último en tecnología móvil, directamente a tu puerta. Explora nuestra amplia selección de teléfonos inteligentes de las marcas más reconocidas y encuentra el dispositivo perfecto para ti.
            </p>
          </div>
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Misión</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-700">
              En el contexto de esta misión, Tech Mind se propone construir una plataforma de comercio electrónico para la venta de teléfonos móviles que refleje su visión de hacer que la tecnología sea accesible para todos, sin importar su nivel de experiencia. La plataforma no solo busca ofrecer productos de última generación, sino también brindar una experiencia de compra en línea intuitiva y satisfactoria que inspire confianza y fomente la exploración.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Visión</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-700">
              La importancia de este proyecto radica en su capacidad para establecer relaciones duraderas con los clientes, tal como lo refleja la misión de Tech Mind de comprender las necesidades y expectativas de sus clientes, y brindar un servicio excepcional en cada paso del camino. Además, este proyecto se alinea con la creencia de Tech Mind en la innovación continua y su compromiso con la construcción de un mundo mejor conectado a través de la tecnología.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-12 bg-teal-400 py-8 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Comentarios de Clientes</h2>
        <div className="flex flex-wrap justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6">
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center max-w-xs">
            <p className="text-gray-700">
              "Muy recomendados para la compra de equipos celulares. La atención por medios virtuales es buena. El envío de los productos es excelente. Los precios son muy competitivos en relación con el mercado, además, siempre traen los últimos móviles estrenados en el mercado."
            </p>
            <p className="text-gray-600 mt-2">- Libardo Rodríguez Céspedes</p>
            <div className="flex items-center mt-4">
              <span className="text-yellow-400">&#9733;</span>
              <span className="text-yellow-400">&#9733;</span>
              <span className="text-yellow-400">&#9733;</span>
              <span className="text-yellow-400">&#9733;</span>
              <span className="text-yellow-400">&#9734;</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center max-w-xs">
            <p className="text-gray-700">
              "La atención personalizada a tiempo y muy oportuna. El equipo llego sin contratiempos el mismo día de la compra. Exactamente lo que se ofrece llega. Muy contento."
            </p>
            <p className="text-gray-600 mt-2">- Manuel Barbaran</p>
            <div className="flex items-center mt-4">
              <span className="text-yellow-400">&#9733;</span>
              <span className="text-yellow-400">&#9733;</span>
              <span className="text-yellow-400">&#9733;</span>
              <span className="text-yellow-400">&#9733;</span>
              <span className="text-yellow-400">&#9733;</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center max-w-xs">
            <p className="text-gray-700">
              "Excelente servicio, excelentes equipos, super atentos, el edificio y la oficina están super limpios y ordenados, 5 estrellas"
            </p>
            <p className="text-gray-600 mt-2">- Andrés Porras</p>
            <div className="flex items-center mt-4">
              <span className="text-yellow-400">&#9733;</span>
              <span className="text-yellow-400">&#9733;</span>
              <span className="text-yellow-400">&#9733;</span>
              <span className="text-yellow-400">&#9733;</span>
              <span className="text-yellow-400">&#9733;</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center max-w-xs">
            <p className="text-gray-700">
              "Excelente servicio, en menos de 24 horas recibí mi equipo muy bien empacado. Es la segunda vez que compro y es muy seguro y confiable."
            </p>
            <p className="text-gray-600 mt-2">- German Darío Hernández Torres</p>
            <div className="flex items-center mt-4">
              <span className="text-yellow-400">&#9733;</span>
              <span className="text-yellow-400">&#9733;</span>
              <span className="text-yellow-400">&#9733;</span>
              <span className="text-yellow-400">&#9733;</span>
              <span className="text-yellow-400">&#9733;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
