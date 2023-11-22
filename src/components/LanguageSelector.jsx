import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  // Estado para armazenar a linguagem selecionada
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  // Função chamada quando a linguagem é alterada
  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);


    // Aqui você pode adicionar lógica adicional, como salvar a preferência do usuário no localStorage ou em um servidor.
  };

  return (
    <div>
      <label htmlFor="language">{t('selectLanguage')}</label>
      <select id="language" value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="es">Español</option>
        {/* Adicione mais opções conforme necessário */}
      </select>
    </div>
  );
};

export default LanguageSelector;