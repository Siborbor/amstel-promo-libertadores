import { useEffect } from "react";
import Lata from "../assets/imagenes/lata_atras.png";
import "./StepThree.css";
import FormCodigo from "../components/FormCodigo";
import { motion } from "framer-motion";
import { useLocation, redirect, useNavigate } from "react-router-dom";

const StepThree = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state == null) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className="contenido step3">
        <motion.img
          className="encabezado"
          src={Lata}
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
        <FormCodigo data = {location.state}/>
      </div>
    </>
  );
};

export default StepThree;
