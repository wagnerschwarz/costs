import React, { useEffect, useRef } from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator = ({ data }) => {
  const qrCodeRef = useRef(null);

  useEffect(() => {
    if (qrCodeRef.current && data) {
      const qrCode = qrCodeRef.current;
      qrCode.makeCode(JSON.stringify(data)); // Converte o objeto em uma string para o QR code
    }
  }, [data]);

  return (
    <div>
      {data && (
        <QRCode
          ref={qrCodeRef}
          value={JSON.stringify(data)} // Novamente, convertendo o objeto em uma string para o QR code
          size={156}
          fgColor="#000000"
          bgColor="#FFFFFF"
        />
      )}
    </div>
  );
};

export default QRCodeGenerator;
