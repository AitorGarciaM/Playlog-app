
import Navbar from './components/Navbar/Navbar';
import { useTranslation } from 'react-i18next'

function App() {
    const { t } = useTranslation();
    return (
    <>
        <Navbar />
        <p className='f-primary f-md f-bold'>{t("welcome")}</p>
    </>
  )
}

export default App
