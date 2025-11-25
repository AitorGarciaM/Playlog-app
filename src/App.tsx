
import Navbar from './components/Navbar';
import { useTranslation } from 'react-i18next'
import { useTheme } from "./hooks/useTheme";

function App() {
    const { t } = useTranslation();
    const { toggleTheme } = useTheme();
    const myColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--background")
        .trim();
    return (
    <>
        <Navbar />
        <p className='f-primary f-md f-bold'>{t("welcome")}</p>
        <button style={{background: myColor}} onClick={toggleTheme}>Cambiar tema</button>
    </>
  )
}

export default App
