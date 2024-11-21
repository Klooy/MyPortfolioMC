import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeComponent = () => {
  const url = "https://my-portfolio-mc.netlify.app/";

  return (
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', // Asegura que los elementos se apilen verticalmente
        justifyContent: 'center', // Centra verticalmente
        alignItems: 'center', // Centra horizontalmente
        textAlign: 'center', 
        marginTop: '20px' // Ajusta este valor si necesitas más espacio
      }}
    >
      <h1>Escanea este código QR</h1>
      <QRCodeCanvas 
        value={url} 
        size={200} // Tamaño del código QR en px
        bgColor={"#ffffff"} // Color de fondo
        fgColor={"#000000"} // Color de los elementos
        level={"H"} // Nivel de corrección de errores
      />
      <p>Redirige a: {url}</p>
    </div>
  );
};

export default QRCodeComponent;