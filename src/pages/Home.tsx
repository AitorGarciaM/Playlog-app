import type { Game } from '../types/Game.ts';

import { NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next'
import GameCard from "../components/GameCard/GameCard";

const game: Game = {
    id: 1,
    name: "Crash Bandicoot 4: It's About Time",
    genres: [
        {id: 1, name: "Platformer"},
        {id: 2, name: "Adventure"}
    ],
    released: "2020-10-02",
} as Game;

export default function Home() {

    const { t } = useTranslation();

    return (
      <>
        <p className='f-primary f-md f-bold'>{t("welcome")}</p>
        <GameCard game={game} />

        <NavLink to="/games">Go to Games Page</NavLink>
      </>
    );
}