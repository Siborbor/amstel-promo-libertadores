import Encabezado from "../assets/imagenes/encabezado_onborading.svg";
import Riodejaneiro from "../assets/imagenes/riodejaneiro_font.svg";
import IncluyeViaje from "../assets/imagenes/incluye_viaje.svg";
import Patrocinadores from "../assets/imagenes/logos_auspiciantes.svg";
import { motion } from "framer-motion";
import "./Onboarding.css";
const Onboarding = () => {
  return (
    <>
      <div className="contenido onborading">
        <motion.img
          className="encabezado"
          src={Encabezado}
          alt="encabezado"
          initial={{ opacity: 0, y:-40  }}
          animate={{ opacity: 1, y:0 }}
          transition={{ duration: 0.8, delay:0.2 }}
        />
        <motion.img
          className="riodejaneiro"
          src={Riodejaneiro}
          alt="palabra_riodejaneiro"
          initial={{ opacity: 0, y:-40  }}
          animate={{ opacity: 1, y:0 }}
          transition={{ duration: 0.8, delay:0.5 }}
        />
        <motion.img
          className="incluyeViaje"
          src={IncluyeViaje}
          alt="logos de lo que incluye viaje"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay:0.7 }}
        />
        <motion.img
          className="patrocinadores"
          src={Patrocinadores}
          alt="logos de patrocinadores"
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay:1 }}
        />
      </div>
    </>
  );
};

export default Onboarding;