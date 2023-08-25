import React, { useEffect } from "react";
import EstasParticipando from "../assets/imagenes/ya_estas_participando.svg";
import EstasParticipandoMobile from "../assets/imagenes/ya_estas_participando_mobile.svg";
import "./yaestasParticipando.css";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import TextoR from "../components/TextoR";

const YaEstasParticipando = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const windowWidth = window.innerWidth;
  const widthBreackPoint = 750;
  useEffect(() => {
    console.log(location.state);
  }, []);

  return (
    <div className="contenido codigoRegistrado">
      <motion.img
        className="img-logo"
        src={
          windowWidth > widthBreackPoint
            ? EstasParticipando
            : EstasParticipandoMobile
        }
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      <motion.button
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="boton_subir_otro_codigo"
        onClick={() =>
          navigate("/step3", {
            state: {
              nombre: location.state.nombre,
              cedula: location.state.cedula,
              telefono: location.state.telefono,
              email: location.state.email,
              ciudad: location.state.ciudad,
              fechaNacimiento: location.state.fechaNacimiento,
              usuarioInstagram: location.state.usuarioInstagram,
              seguirInstagram: location.state.seguirInstagram,
              terminosycondiciones: location.state.terminosycondiciones,
            },
          })
        }
      >
        subir otro código
      </motion.button>
      <TextoR/>
    </div>
  );
};

export default YaEstasParticipando;
