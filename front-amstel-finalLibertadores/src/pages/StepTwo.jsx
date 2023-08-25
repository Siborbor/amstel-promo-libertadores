import React, { useEffect, useState } from "react";
import Encabezado from "../assets/imagenes/ingresa_tus_datos.svg";
import { motion } from "framer-motion";
import FormUser from "../components/FormUser";
import { useLocation, useNavigate } from "react-router-dom";
import TextoR from "../components/TextoR";

const StepTwo = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state == null) {
      navigate("/");
    }
  }, []);

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
        <FormUser fechaNacimiento={location.state.fechaNacimiento} />
        <TextoR/>
      </div>
    </>
  );
};

export default StepTwo;
