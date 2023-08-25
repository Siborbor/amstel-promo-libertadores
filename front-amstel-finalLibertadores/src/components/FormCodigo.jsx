import "./formCodigo.css";
import { useState } from "react";
import { Formik } from "formik";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FlechaRoja from "../assets/imagenes/flecha_roja.svg";
import FlechaBlanca from "../assets/imagenes/flecha_blanca.svg";
import Modal from "react-modal";
import { motion } from "framer-motion";
import Loader from "./Loader";

const FormCodigo = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [textModal, setTexModal] = useState("");
  const [loading, setLoading] = useState(false);
  const windowWidth = window.innerWidth;
  const widthBreackPoint = 750;

  const buttonPress = (values) => {
    setLoading(true);
    if (values.codigo) {
      let datos = JSON.stringify(values, null, 2);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = datos;
      console.log(raw);
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };
      fetch("https://api.desarrollo.viajaconamstel.com/api/user", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          const codigo = data.codigo;
          if (codigo === 200) {
            setLoading(false);
            navigate("/codigoRegistrado", {
              state: {
                nombre: values.nombre,
                cedula: values.cedula,
                telefono: values.telefono,
                email: values.email,
                ciudad: values.ciudad,
                fechaNacimiento: values.fechaNacimiento,
                usuarioInstagram: values.usuarioInstagram,
                seguirInstagram: values.checkInstagram,
                terminosycondiciones: values.checkTerminos,
              },
            });
          } else {
            openModal();
            setTexModal("Código Incorrecto");
            setLoading(false);
          }
        })
        .catch((error) => [
          openModal(),
          setTexModal("Error en el servidor - vuelva intentarlo", error),
          setLoading(false),
        ]);
    } else {
      openModal();
      setTexModal("Ingrese su código");
      setLoading(false);
    }
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Formik
        initialValues={{
          nombre: data.nombre,
          cedula: data.cedula,
          telefono: data.telefono,
          email: data.email,
          ciudad: data.ciudad,
          fechaNacimiento: data.fechaNacimiento,
          usuarioInstagram: data.usuarioInstagram,
          checkInstagram: data.seguirInstagram,
          checkTerminos: data.terminosycondiciones,
          codigo: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.codigo) {
            errors.codigo = "Ingresa tu código";
          } else if (values.codigo.length !== 6) {
            errors.codigo = "Código debe tener 6 dígitos";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className="contenedorFormularioCodigo" onSubmit={handleSubmit}>
            <motion.input
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              type="text"
              name="codigo"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.codigo}
              placeholder="código"
            />
            <motion.p
              className="errormensaje"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {errors.codigo && touched.codigo && errors.codigo}
            </motion.p>
            <Modal
              isOpen={modalIsOpen}
              style={customStyles}
              ariaHideApp={false}
              contentLabel="Example Modal"
            >
              <h2 className="tituloModal">{textModal}</h2>
              <button className="botonModal" onClick={() => closeModal()}>
                Aceptar
              </button>
            </Modal>
            <motion.button
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              type="submit"
              className="botonEnviar"
              disabled={isSubmitting}
              onClick={() => buttonPress(values)}
            >
              {loading ? (
                <Loader />
              ) : (
                <>
                  Enviar
                  <img
                    className="flechaRoja"
                    src={
                      windowWidth < widthBreackPoint ? FlechaRoja : FlechaBlanca
                    }
                  />
                </>
              )}
            </motion.button>
          </form>
        )}
      </Formik>
    </div>
  );
};

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
    display: "flex",
    flexDirection: "column",
  },
};

export default FormCodigo;
