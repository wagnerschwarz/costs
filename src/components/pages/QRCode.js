import QRCodeForm from "../qrcode/QRCodeForm";
import styles from "./QRCode.module.css";

function insertQRCode() {
  console.log("inseriu dados");
}

function QRCode() {
  return (
    <div className={styles.newproject_container}>
      <h1>Cadastrar Pet</h1>
      <p>Salve as informaçoes do seu bichinho!</p>
      <QRCodeForm handleSubmit={insertQRCode} btnText="Criar Projeto" />
    </div>
  );
}

export default QRCode;
