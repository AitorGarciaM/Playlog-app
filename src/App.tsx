import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTranslation } from 'react-i18next'
import { useTheme } from "./hooks/useTheme";

function App() {
  const [count, setCount] = useState(0)
    const { t } = useTranslation();
    const { toggleTheme } = useTheme();
    const myColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--background")
        .trim();
    return (
    <>
        <p>{t("welcome")}</p>
        <button style={{background: myColor}} onClick={toggleTheme}>Cambiar tema</button>

        <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
