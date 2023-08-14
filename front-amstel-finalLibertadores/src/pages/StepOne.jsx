import Riodejaneiro from "../assets/imagenes/riodejaneiro_font.svg";
import Encabezado from "../assets/imagenes/participa_a_un_viaje.svg";
import { motion } from "framer-motion";
import "./StepOne.css";
import FormYear from "../components/FormYear";
import BotonSiguiente from "../components/BotonSiguiente";
import { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
    padding: "30px",
    transition: "300ms",
  },
};

const StepOne = () => {
  const [date, setDate] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [textModal, setTexModal] = useState("");
  const [edad, setEdad] = useState(" ");
  const navigate = useNavigate();

  const handleDate = (date) => {
    setDate(date);
    setEdad(calcularEdad(date));
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const calcularEdad = (fechaNacimiento) => {
    const hoy = new Date();
    const partesFecha = fechaNacimiento.split("/");

    if (partesFecha.length !== 3) {
      return;
    }

    const anoNacimiento = parseInt(partesFecha[0]);
    const mesNacimiento = parseInt(partesFecha[1]) - 1;
    const diaNacimiento = parseInt(partesFecha[2]);

    if (isNaN(anoNacimiento) || isNaN(mesNacimiento) || isNaN(diaNacimiento)) {
      return;
    }

    const cumpleanos = new Date(anoNacimiento, mesNacimiento, diaNacimiento);

    if (isNaN(cumpleanos)) {
      return;
    }

    const edad = hoy.getFullYear() - cumpleanos.getFullYear();
    const m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      return edad - 1;
    }

    return edad;
  };

  const buttonPress = () => {
    console.log(date);
    console.log(edad);
    if (edad !== undefined) {
      if (edad < 18) {
        setTexModal("No tienes la edad suficiente para ver este contenido");
        openModal();
      } else if (edad > 17) {
        navigate("/step2", {
          state: { fechaNacimiento: date }
        });
      }
    } else {
      setTexModal("Ingrese la Fecha de Su Nacimiento");
      openModal();
    }
  };

  return (
    <>
      <div className="contenido step1">
        <motion.img
          className="encabezado"
          src={Encabezado}
          alt="encabezado"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.img
          className="riodejaneiro"
          src={Riodejaneiro}
          alt="palabra_riodejaneiro"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <FormYear handleDate={handleDate} />
        <BotonSiguiente buttonPress={buttonPress} />
        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          ariaHideApp={false}
          contentLabel="Example Modal"
        >
          <div className="contenedormodalerror">
            <h2 className="tituloModal">{textModal}</h2>
            <button className="botonModal" onClick={() => closeModal()}>
              Aceptar
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default StepOne;
