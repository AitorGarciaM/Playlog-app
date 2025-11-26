
import Navbar from './components/Navbar/Navbar';
import { useTranslation } from 'react-i18next'
import Sidebar from './components/Sidebar/Sidebar.tsx';

function App() {
    const { t } = useTranslation();
    return (
    <>
        <Navbar />
        <div style={{display: 'flex'}}>
            <Sidebar/>
            <p className='f-primary f-md f-bold'>{t("welcome")}</p>
        </div>
    </>
  )
}

export default App
