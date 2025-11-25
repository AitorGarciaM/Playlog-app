
import Navbar from './components/Navbar';
import { useTranslation } from 'react-i18next'

function App() {
    const { t } = useTranslation();
    return (
    <>
        <Navbar />
        <p>{t("welcome")}</p>
    </>
  )
}

export default App
