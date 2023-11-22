
import { useTranslation } from 'react-i18next'
import './App.css'
import LanguageSelector from './components/LanguageSelector'

function App() {
  const {t} = useTranslation();

  return (
    <>
      <LanguageSelector></LanguageSelector>
      <h1>{t('welcome')}</h1>
      <p>{t("about")}</p>
      <h6>{t("contact")}</h6>
    </>
  )
}

export default App
