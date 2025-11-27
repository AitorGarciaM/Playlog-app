import { useState } from 'react';


import type { Game } from '../../types/Game';

import VideoPlayer from '../VideoPlayer/VideoPlayer';

import PlaystationIcon from '../Icons/PlaystationIcon';
import WindowsIcon from '../Icons/WindowsIcon';
import XboxIcon from '../Icons/XboxIcon';
import style from './GameCard.module.scss';

export default function GameCard({ game }: { game: Game }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  return (
    <div className={style['game-card']} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={style['card-img']}>
        {
          isHovered ? (<VideoPlayer src='/videos/placeholder/Fortnite.mp4' start={0} end={2} autoPlay={true} loop={true} muted={true} controls = {false} className={style['game-card-video']} />) : <img src='src/assets/img/Placeholders/CrashBandicoot_port.png'></img>
        }
      </div>
      
      <div className={style['game-info']}>
        <div className={style['game-platforms']}>
          <WindowsIcon width={20} height={20}/>
          <PlaystationIcon width={20} height={20}/>
          <XboxIcon width={20} height={20}/>

          <div className={style['game-metar']}>88</div>
        </div>
        <div className={style['game-title']}>
          <h3 className='f-primary f-lg f-bold'>{game.name}</h3>
        </div>
        <div className={style['game-genres']}>
          <p className='text-tertiary fs-md fw-semi-bold'>Genres</p>
          <div className={style['genres-list']}>
            {
              game.genres.map((genre, index) => (
                <span className='fs-sm' key={genre.id}>
                  {genre.name}{index < game.genres.length - 1 ? ", " : ''}
                </span>
              ))
            }
          </div>
        </div>
        <hr className={style['game-spacebar']} />
        <div className={style['game-release-date']}>
          <p className='text-tertiary fs-md'>Release Date</p>
          <p className='f-primary fs-sm'>{game.released}</p>
        </div>
      </div>
    </div>
  );
}
