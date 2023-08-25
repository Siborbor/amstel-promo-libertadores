import { useEffect,useState } from "react";
import Lata from "../assets/imagenes/lata_atras.png";
import LataMobile from "../assets/imagenes/lata_atras_mobile.svg";
import "./StepThree.css";
import FormCodigo from "../components/FormCodigo";
import { motion } from "framer-motion";
import { useLocation,useNavigate } from "react-router-dom";
import TextoR from "../components/TextoR";

const StepThree = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const windowWidth= window.innerWidth;
  const widthBreackPoint = 750;

  useEffect(() => {
    if (location.state == null) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className="contenido step3">
        <div className="lata_titulo">
        <motion.img
          className="encabezado"
          src={windowWidth>widthBreackPoint?Lata:LataMobile}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.h2
          className="titulo_formCodigo"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Ingresa el código alfanumérico <br /> que viene debajo de tu lata de
          Amstel
        </motion.h2>
        </div>
        <FormCodigo data = {location.state}/>
        <TextoR/>
      </div>
    </>
  );
};

export default StepThree;
