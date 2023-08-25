import React from 'react'
import FlechaRoja from "../assets/imagenes/flecha_roja.svg";
import Flechablanca from "../assets/imagenes/flecha_blanca.svg";
import "./BotonSiguiente.css"
import { motion } from 'framer-motion';

const BotonSiguiente = ({buttonPress}) => {
  return (
    <>
    <motion.button
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="botonSiguiente"
    onClick={buttonPress}
  >
    SIGUIENTE <img src={FlechaRoja} className="flechaRoja" />
  </motion.button>
    <motion.button
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="botonSiguienteMobile"
    onClick={buttonPress}
  >
    SIGUIENTE <img src={Flechablanca} className="flechaRoja" />
  </motion.button>
  </>
  )
}

export default BotonSiguiente