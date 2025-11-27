import type { Game } from './types/Game.ts';

import Navbar from './components/Navbar/Navbar';
import GameCard from './components/GameCard/GameCard.tsx';
import { useTranslation } from 'react-i18next'
import Sidebar from './components/Sidebar/Sidebar.tsx';

const game: Game = {
    id: 1,
    name: "Crash Bandicoot 4: It's About Time",
    genres: [
        {id: 1, name: "Platformer"},
        {id: 2, name: "Adventure"}
    ],
    released: "2020-10-02",
} as Game;

function App() {
    const { t } = useTranslation();
    return (
    <>
        <Navbar />
        <div style={{display: 'flex'}}>
            <Sidebar/>
            <p className='f-primary f-md f-bold'>{t("welcome")}</p>
            <GameCard game={game} />
        </div>
    </>
  )
}

export default App
