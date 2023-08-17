import "./formCodigo.css";
import { useState } from "react";
import { Formik } from "formik";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FlechaRoja from "../assets/imagenes/flecha_blanca.svg";
import Modal from "react-modal";
import { motion } from "framer-motion";

const FormCodigo = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [textModal, setTexModal] = useState("");

  // const buttonPress = (values) => {
  //     // //consulta
  //     // let datos = JSON.stringify(values, null, 2);
  //     // var myHeaders = new Headers();
  //     // myHeaders.append("Content-Type", "application/json");
  //     // var raw = datos;
  //     // var requestOptions = {
  //     //   method: "POST",
  //     //   headers: myHeaders,
  //     //   body: raw,
  //     //   redirect: "follow",
  //     // };
  //     // fetch("https://amstel-backend-production.up.railway.app/api", requestOptions)
  //     //   .then((response) => response.text())
  //     //   .then((data) => {
  //     //     const resultado = JSON.parse(data);
  //     //     if (resultado.codigo === 200) {
  //     //       navigate("/yaestasparticipando", {
  //     //         state: {
  //     //           nombre: values.nombre,
  //     //           cedula: values.cedula,
  //     //           telefono: values.telefono,
  //     //           email: values.email,
  //     //           ciudad: values.ciudad,
  //     //         },
  //     //       });
  //     //     } else {
  //     //       openModal();
  //     //       setTexModal("Código Incorrecto");
  //     //     }
  //     //   })
  //     //   .catch((error) => console.log("error", error));
  //   }
  // };

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
          seguirInstagram: data.seguirInstagram,
          terminosycondiciones: data.terminosycondiciones,
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
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          navigate("/codigoRegistrado", {
            state: {
              nombre: values.nombre,
              cedula: values.cedula,
              telefono: values.telefono,
              email: values.email,
              ciudad: values.ciudad,
              fechaNacimiento: values.fechaNacimiento,
              usuarioInstagram: values.usuarioInstagram,
              seguirInstagram: values.seguirInstagram,
              terminosycondiciones: values.terminosycondiciones,
            },
          });
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
            >
              Enviar <img src={FlechaRoja} className="flechaRoja" />
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
  },
};

export default FormCodigo;
