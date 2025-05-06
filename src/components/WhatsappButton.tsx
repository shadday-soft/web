import { FloatingWhatsApp } from '@carlos8a/react-whatsapp-floating-button';

const WhatsappButton = () => {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber='+573155040822' // Required
        accountName='Shaddai Soft' // Optional
        avatar='/logo.png' // Optional
        initialMessageByServer='¡Hola! ¿En qué puedo ayudarte?' // Optional
        initialMessageByClient='¡Hola! Encontré tu contacto en tu sitio web. Me gustaría hablar contigo sobre......' // Optional
        statusMessage='Activo' // Optional
        startChatText='Iniciar Chat' // Optional
        tooltipText='Quieres Internarlo? Ir al Chat!' // Optional
        allowEsc={true} // Optional
        // Explore all available props below
      />
    </div>
  );
};

export default WhatsappButton;