import "./formUser.css";
import { useState } from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import FlechaRoja from "../assets/imagenes/flecha-roja.jpg";
import { motion } from "framer-motion";

const FormUser = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [textModal, setTexModal] = useState("");

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
          nombre: "",
          cedula: "",
          telefono: "",
          email: "",
          ciudad: "",
          usuarioInstagram: "",
          seguirInstagram: "",
          Terminosycondiciones: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Ingresa tu email*";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Email inválido*";
          }
          if (!values.nombre) {
            errors.nombre = "Ingresa tu nombre*";
          } //control tipo de datos
          if (!values.cedula) {
            errors.cedula = "Ingresa tu cédula*";
          } else if (
            (values.cedula.length > 10) ^
            (values.cedula.length < 10)
          ) {
            errors.cedula = "Tu número de cédula debe contener 10 dígitos*";
          }
          if (!values.telefono) {
            errors.telefono = "Ingresa tu teléfono*";
          } else if (
            (values.telefono.length > 10) ^
            (values.telefono.length < 10)
          ) {
            errors.telefono = "Tu número de teléfono debe contener 10 dígitos*";
          }
          if (!values.ciudad) {
            errors.ciudad = "Ingresa tu ciudad*";
          }
          if (!values.usuarioInstagram) {
            errors.usuarioInstagram = "Ingrese usuario de instagram*";
          }
          if (!values.seguirInstagram) {
            errors.seguirInstagram = "Debes seguir a amstel en Instagram*";
          }
          if (!values.Terminosycondiciones) {
            errors.Terminosycondiciones =
              "Debes aceptar los Términos y condiciones*";
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
          <form className="contenedorFormulario" onSubmit={handleSubmit}>
            <motion.input
              type="text"
              name="nombre"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder="NOMBRES Y APELLIDOS"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
            />
            <p className="errormensaje">
              {errors.nombre && touched.nombre && errors.nombre}
            </p>
            <motion.input
              type="text"
              name="cedula"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.cedula}
              placeholder="NÚMERO DE CÉDULA"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
            />
            <p className="errormensaje">
              {errors.cedula && touched.cedula && errors.cedula}
            </p>
            <motion.input
              type="telefono"
              name="telefono"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.telefono}
              placeholder="TELÉFONO"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
            />
            <p className="errormensaje">
              {errors.telefono && touched.telefono && errors.telefono}
            </p>
            <motion.input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="EMAIL"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
            />
            <p className="errormensaje">
              {errors.email && touched.email && errors.email}
            </p>
            <motion.input
              type="ciudad"
              name="ciudad"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.ciudad}
              placeholder="CIUDAD"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
            />
            <p className="errormensaje">
              {errors.ciudad && touched.ciudad && errors.ciudad}
            </p>
            <motion.input
              type="usuarioInstagram"
              name="usuarioInstagram"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.usuarioInstagram}
              placeholder="USUARIO DE INSTAGRAM"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
            />
            <p className="errormensaje">
              {errors.usuarioInstagram &&
                touched.usuarioInstagram &&
                errors.usuarioInstagram}
            </p>
            <motion.div
              className="contenedorTerminos"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="contenedorTerminosycondiciones">
                <label>
                  <input
                    type="checkbox"
                    name="seguirInstagram"
                    onChange={handleChange}
                    id="checkbox"
                    value="seguirInstagram"
                  ></input>
                </label>
                <div className="contenedorTextTerminos">
                  <p className="seguirInstagram">SIGO A </p>
                  <a
                    href="https://www.instagram.com/amstelecuador/"
                    className="linkterminos"
                    target="_blank"
                  >
                    AMSTEL EN INSTAGRAM
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="contenedorTerminos"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="contenedorTerminosycondiciones">
                <label>
                  <input
                    type="checkbox"
                    name="Terminosycondiciones"
                    onChange={handleChange}
                    id="checkbox"
                    value="Terminosycondiciones"
                  ></input>
                </label>
                <div className="contenedorTextTerminos">
                  <p className="Terminosycondiciones">Acepto</p>
                  <a className="linkterminos" onClick={() => openModal()}>
                    Términos y Condiciones
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.button
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="botonSiguiente"
              disabled={isSubmitting}
              onClick={() =>
                values.nombre !== "" &&
                values.cedula !== "" &&
                values.cedula.length === 10 &&
                values.telefono !== "" &&
                values.telefono.length === 10 &&
                values.email !== "" &&
                values.ciudad !== "" &&
                values.seguirInstagram !== "" &&
                values.Terminosycondiciones !== ""
                  ? navigate(
                      "/step3"
                      // {
                      //   state: {
                      //     nombre: values.nombre,
                      //     cedula: values.cedula,
                      //     telefono: values.telefono,
                      //     email: values.email,
                      //     ciudad: values.ciudad,
                      //   },
                      // },
                      // { require: true }
                    )
                  : console.log("ingreso no hecho")
              }
            >
              SIGUIENTE <img src={FlechaRoja} className="flechaRoja" />
            </motion.button>
          </form>
        )}
      </Formik>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <h2 className="tituloModal">Términos y Condiciones</h2>
        <p className="textModal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum
          eros magna, sed dignissim lorem varius non. Aliquam lacinia blandit
          leo, sit amet feugiat dolor dictum a. Nullam tincidunt nisl nec
          accumsan tempor. Proin viverra viverra ullamcorper. Pellentesque in
          velit varius, euismod dui id, eleifend quam. Phasellus bibendum
          lobortis bibendum. Etiam sollicitudin, velit gravida tincidunt
          aliquam, velit lacus accumsan odio, quis condimentum odio quam nec
          tortor. Vivamus mollis sapien maximus fermentum lacinia. Nam lobortis,
          urna ac eleifend pellentesque, eros sem condimentum eros, in dignissim
          risus sem vel risus. Donec facilisis enim ullamcorper nunc fermentum
          suscipit. Mauris commodo purus a augue feugiat gravida. Cras blandit
          turpis malesuada turpis rutrum, ac egestas nisi cursus. Ut
          sollicitudin justo diam, sit amet varius turpis maximus consectetur.
          Suspendisse accumsan, sapien at blandit sagittis, felis ligula dapibus
          justo, sed lacinia odio mi quis purus. Nulla non viverra orci, et
          bibendum eros. Aliquam dapibus ullamcorper ante quis consequat.
          Vivamus commodo mattis eros a dignissim. Suspendisse eu accumsan
          massa. Donec lorem sapien, porta sit amet consequat eget, ultricies
          non purus. Praesent eleifend vulputate est vitae dignissim. Proin
          luctus venenatis elementum. Phasellus aliquam imperdiet orci, ut
          molestie sapien tincidunt vel. Morbi cursus tellus sit amet elit
          condimentum, sit amet laoreet nunc tincidunt. Nulla ut luctus risus.
          Nulla sit amet tincidunt eros. Aenean ac sagittis velit. Nulla maximus
          suscipit metus, a posuere nisi laoreet sit amet. Mauris blandit non
          magna at elementum. Etiam nec sem lacinia, interdum lectus finibus,
          ultrices justo. Morbi lectus urna, venenatis at convallis id,
          fringilla id tortor. Aliquam erat volutpat. Aliquam vel leo massa. Sed
          erat libero, elementum eget arcu interdum, faucibus malesuada eros.
          Aenean justo magna, cursus ac condimentum eu, tincidunt quis lorem.
          Duis rutrum fringilla libero sit amet mollis. Fusce neque elit,
          volutpat vitae commodo vel, semper quis eros. Morbi efficitur ut erat
          nec tempor. Mauris malesuada nisl quis malesuada elementum. Etiam et
          lorem ac lacus vulputate iaculis. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Aenean dictum
          vitae mi vitae cursus. Vivamus dapibus velit vel odio accumsan, sed
          vehicula mauris vehicula. Aenean rutrum eget eros quis tempus.
          Curabitur elementum, enim sed dapibus feugiat, libero dolor mattis
          lectus, id malesuada tellus nisi vel massa. Ut sed egestas sapien, nec
          fringilla ligula. Pellentesque hendrerit vitae tortor ut mollis.
          Suspendisse mattis magna magna, ac elementum ex vehicula at. Quisque
          nulla leo, viverra faucibus molestie et, volutpat eu enim.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Pellentesque sed imperdiet erat, sit amet
          scelerisque erat. Morbi molestie efficitur ex ut cursus. Donec iaculis
          tincidunt arcu, id dignissim purus fringilla et. Praesent aliquet
          purus nec eros tempor gravida. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Proin semper tristique lectus efficitur
          tempus. Etiam ut metus efficitur, aliquet tellus in, vehicula ante.
        </p>
        <button className="botonModal" onClick={() => closeModal()}>
          Aceptar
        </button>
      </Modal>
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
    padding: "50px",
    display: "flex",
    flexDirection: "column",
  },
};

export default FormUser;
