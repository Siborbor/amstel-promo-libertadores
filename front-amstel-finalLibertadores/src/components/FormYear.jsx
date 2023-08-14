import { useState, useEffect } from "react";
import "./formYear.css";
import { motion } from "framer-motion";

const FormYear = ({ handleDate }) => {
  const [date, setDate] = useState("");
  const [check, setCheck] = useState(null);
  const [year, setYear] = useState([]);
  const [diasSelect, setDiasSelect] = useState("");
  const [mesesSelect, setMesesSelect] = useState("");
  const [yearSelect, setYearSelect] = useState("");

  useEffect(() => {
    handleDate(date);
  }, [date]);

  const dias = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ];
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  useEffect(() => {
    for (let i = 2023; i > 1800; i--) {
      setYear((preState) => [...preState, i]);
    }
  }, []);

  useEffect(() => {
    const dateSelect = yearSelect + "/" + mesesSelect + "/" + diasSelect;
    setDate(dateSelect);
  }, [diasSelect, mesesSelect, yearSelect]);

  const handleChange = () => {
    setCheck(!check);
  };

  const handleChangeDias = (e) => {
    setDiasSelect(e.target.value);
  };
  const handleChangeMeses = (e) => {
    setMesesSelect(e.target.value);
  };
  const handleChangeYear = (e) => {
    setYearSelect(e.target.value);
  };

  return (
    <div>
      <motion.p
        className="titulo_selector_Edad"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        PARA CONTINUAR CON LA EXPERIENCIA
        <br /> DEBES CONFIRMAR TU MAYORÍA DE EDAD
      </motion.p>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="contenedorDateSelect"
      >
        <select onChange={handleChangeDias} defaultValue="option1">
          <option value="option1" disabled style={{ color: "#fff9" }}>
            DD
          </option>
          {dias.map((el, index) => (
            <option value={el} key={index}>
              {el}
            </option>
          ))}
        </select>
        <select onChange={handleChangeMeses} defaultValue="option1">
          <option value="option1" disabled style={{ color: "#fff9" }}>
            MM
          </option>
          {meses.map((el, index) => (
            <option value={index + 1} key={index}>
              {el}
            </option>
          ))}
        </select>
        <select onChange={handleChangeYear} defaultValue="option1">
          <option value="option1" disabled style={{ color: "#fff9" }}>
            AA
          </option>
          {year.map((el, index) => (
            <option value={el} key={index}>
              {el}
            </option>
          ))}
        </select>
      </motion.div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="contenedorCheckbox"
      >
        <label>
          <input
            type="checkbox"
            checked={check}
            onChange={handleChange}
            className="checkbox"
          ></input>
          RECUÉRDAME
        </label>
      </motion.div>
    </div>
  );
};

export default FormYear;
