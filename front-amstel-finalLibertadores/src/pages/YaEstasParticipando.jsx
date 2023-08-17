import React from "react";
import EstasParticipando from "../assets/imagenes/ya_estas_participando.svg";
import "./yaestasParticipando.css";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const YaEstasParticipando = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="contenido codigoRegistrado">
      <motion.img
        className="img-logo"
        src={EstasParticipando}
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
    </div>
  );
};

export default YaEstasParticipando;
