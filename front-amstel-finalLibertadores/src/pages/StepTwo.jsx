import React from "react";
import Encabezado from "../assets/imagenes/ingresa_tus_datos.svg";
import { motion } from "framer-motion";
import FormUser from "../components/FormUser"
const StepTwo = () => {
  return (
    <>
      <div className="contenido step1">
        <motion.img
          className="encabezado"
          src={Encabezado}
          alt="palabra_ingresa_tus_datos"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <FormUser/>
      </div>
    </>
  );
};

export default StepTwo;
