import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./QRCodeForm.module.css";
import { useEffect, useState } from "react";
import QRCodeGenerator from "./QRCodeGenerator";

function QRCodeForm() {
  const [QRCode, setQRCode] = useState({});

  //gera o QRCode
  const gerarQRCode = (e) => {
    e.preventDefault();
    console.log("QRCode gerado com sucesso!");
    console.log(QRCode);

    // const dadosPet = {
    //   id: 1,
    //   nome: QRCode.name,
    //   dono: QRCode.dono,
    //   fone: QRCode.fone,
    //   local: QRCode.local,
    // };

    // dadosDoPet = dadosPet;
  };

  function handleChange(e) {
    setQRCode({ ...QRCode, [e.target.name]: e.target.value });
  }

  return (
    //<form onSubmit={submit} className={styles.form}>
    <div className={styles.divisao}>
      <form onSubmit={gerarQRCode} className={styles.form}>
        <Input
          type="text"
          text="Nome do Pet"
          name="name"
          placeholder="Insira o nome do seu pet"
          handleOnChange={handleChange}
          value={QRCode.name ? QRCode.name : ""}
        />

        <Input
          type="text"
          text="Nome do dono(a)"
          name="dono"
          placeholder="Insira o seu nome"
          handleOnChange={handleChange}
          value={QRCode.dono ? QRCode.dono : ""}
        />

        <Input
          type="text"
          text="Telefone para Contato"
          name="fone"
          placeholder="Insira o número de telefone"
          handleOnChange={handleChange}
          value={QRCode.fone ? QRCode.fone : ""}
        />

        <Input
          type="text"
          text="Endereço"
          name="local"
          placeholder="Insira o seu endereço"
          handleOnChange={handleChange}
          value={QRCode.local ? QRCode.local : ""}
        />

        {/* <SubmitButton text="Salvar QRCode" /> */}
      </form>

      <div>
        <h1>QRCode</h1>
        <QRCodeGenerator data={QRCode} />
      </div>
    </div>
  );
}

export default QRCodeForm;
