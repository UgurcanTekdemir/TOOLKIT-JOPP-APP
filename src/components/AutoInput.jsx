import React from "react";
import { useSelector } from "react-redux";

const AutoInput = ({ label, name }) => {
  const { jobs } = useSelector((store) => store);

  //1) Sadece poziyon değerlerinden olulan bir dizi tanımla
  const arr = jobs.map((job) => job[name]);
  //Dizide tekrar eden elemenlsrı kaldırır
  const filtredSet = new Set(arr);
  //3) Set in dönderdiği nesneyi diziye çevirir
  const options = Array.from(filtredSet);

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="text" id={label} name={name} required />

      <datalist id={name}>
        {options.map((i, index) => (
          <option key={index} value={i} />
        ))}
      </datalist>
    </div>
  );
};

export default AutoInput;
