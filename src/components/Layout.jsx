import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import { apiGet, apiPost, apiPut, apiDelete } from '../hooks/ApiActions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot, faPhone, faSquarePhone } from "@fortawesome/free-solid-svg-icons";

import Logo from '../images/logo.png'
import Bg_1 from '../images/bg-01.jpeg'
import Bg_2 from '../images/bg-05.jpeg'
import Content from "./layout/Content";

const Layout = () => {

  return (
    <div className="font-ubuntu relative w-full">

      {/* Header */}
      <header className="z-50 fixed w-full backdrop-blur-md bg-slate-900/70 shadow-xl shadow-zinc-800/20">
        <Content>
          <div className="md:hidden py-5 flex justify-center grid-cols-1">
              <div><img className="h-[25px] mr-7" src={Logo} /></div>
              <div className="text-white">NICOLE ULLOA <span className="opacity-70 ml-3 font-light">ABOGADA</span></div>
          </div>

          <div className="hidden md:grid py-5 place-content-center gap-10 grid-cols-[40px_auto_1fr_auto]">
            <div><img src={Logo} /></div>
            <div className="pt-[8px] font-ubuntu font-normal text-2xl text-white">
              NICOLE ULLOA <span className="opacity-70 border-l border-l-white/70 ml-4 pl-5 font-light">ABOGADA</span>
            </div>
            <div className="mt-3 ml-12 flex space-x-10 font-light text-white">
              <div className="hover:text-amber-400 cursor-pointer">SOBRE MÍ</div>
              <div className="hover:text-amber-400 cursor-pointer">ASESORIA</div>
              <div className="hover:text-amber-400 cursor-pointer">CONTACTO</div>
            </div>
            <div className="mt-4 flex space-x-5 font-light text-white">
              <FontAwesomeIcon icon={faWhatsapp} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faSquarePhone} />
            </div>
          </div>
        </Content>
      </header>

      {/* Main */}
      <div className="relative w-full">
        <Content>
          <div className="z-20 absolute grid place-content-center w-full h-[600px] md:h-[600px] lg:h-[700px]
          text-center font-merriweather px-10 md:px-36 space-y-5">
            <div className="pt-10 md:pt-14 text-xl md:text-3xl text-white font-light">Estamos aquí para ayudar</div>
            <div className="text-4xl leading-snug md:text-6xl md:leading-[4.5rem] text-white font-medium">Luchamos por tu justicia como una amiga</div>
            <div className="text-2xl leading-normal md:text-3xl md:leading-snug text-white font-light">Estoy preparada para conocerte y brindarte un servicio de calidad.</div>
            <div className="bg-amber-400 hover:bg-white mx-auto w-fit
            text-black cursor-pointer
            shadow-xl shadow-zinc-900/30
            font-ubuntu font-medium !mt-10 py-3 px-7 rounded-xl">
              SOLICITAR UNA ENTREVISTA
            </div>
          </div>
        </Content>
        <img className="z-10 relative w-full object-cover h-[600px] md:h-[600px] lg:h-[700px]" src={Bg_1} />
      </div>

      {/* Sobre Mi */}
      <div className="w-full bg-white">
        <Content>
          <div className="px-8 py-8 md:px-0 md:py-11 grid gap-6 md:gap-16 grid-cols-1 md:grid-cols-2">
            <div className="grid place-content-center font-ubuntu text-lg space-y-3 md:space-y-5 text-left">
              <p className="text-3xl font-bold">Sobre mí</p>
              <p className="text-4xl md:text-5xl">Transformando conocimientos en soluciones</p>
              <p>Abogada litigante con conocimiento en las áreas del Derecho Civil, Familia, y Policía Local (Infracciones a la ley de tránsito).
                Ofrezco asesorías en modalidad online para que las distancias no sean un impedimento al momento de querer optar por mis servicios.
                Mi compromiso es trabajar en colaboración contigo, basándome en valores esenciales como la confianza, la confidencialidad, la empatía y la comunicación clara.
              </p>
              <p>Estoy preparada para conocerte y brindarte un servicio de calidad.</p>
              <p>¡Espero conocerte pronto!</p>
            </div>
            <div>
              <img className="w-full rounded-2xl" src="https://encuadrado-user-uploads.s3.amazonaws.com/cover_photos/user-21945-cover.jpg?%201698773927.037212" />
            </div>
          </div>
        </Content>
      </div>

      {/* Contacto */}
      <div className="w-full">
        <Content>
          <div className="z-20 absolute w-full grid grid-cols-1 md:grid-cols-3
          text-center text-white">
            <div className="md:col-span-3 pt-11 md:pt-14 pb-7 text-3xl text-white font-light">Contacto</div>
            <div className="mb-6">
              <div className="text-3xl mb-1 md:mb-2"><FontAwesomeIcon icon={faLocationDot} /></div>
              <div>2900 Lapeer Rd, Port Hurons, MI 49070</div>
            </div>
            <div className="mb-6">
              <div className="text-3xl mb-1 md:mb-2"><FontAwesomeIcon icon={faPhone} /></div>
              <div>+56 9 4228 8803</div>
            </div>
            <div className="mb-6">
              <div className="text-3xl mb-1 md:mb-2"><FontAwesomeIcon icon={faEnvelope} /></div>
              <div>ulloasesorias@gmail.com</div>
            </div>
          </div>
        </Content>
        <img className="z-10 relative w-full object-cover h-[400px] md:h-[250px] lg:h-[250px]" src={Bg_2} />
      </div>

      {/* Footer */}
      <div className="w-full border-t border-amber-500/70
      bg-gradient-to-t from-slate-800 to-slate-900/40">
        <Content>
          <div className="w-full pt-7 pb-10 md:pt-10 md:pb-12
          text-center font-light text-slate-300">
            <span className="font-medium">Nicole Ulloa Parra</span>
            <div className="mt-2">Abogada / Bachiller en Humanidades</div>
            <div className="mt-4 flex place-content-center space-x-8 text-3xl">
              <FontAwesomeIcon icon={faWhatsapp} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faSquarePhone} />
            </div>
          </div>
        </Content>
      </div>

    </div>
  )
}
// <Outlet />
export default Layout