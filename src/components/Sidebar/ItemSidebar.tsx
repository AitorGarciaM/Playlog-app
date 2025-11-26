import React from 'react';

import styles from './Sidebar.module.scss';
import { useTranslation } from 'react-i18next';

type ItemSidebarProps = {
    image?: string;
    text?: string;
    navigate: Function;
};


export default function ItemSidebar({ navigate, image='User.svg', text='Error' }: ItemSidebarProps) {
    const { t } = useTranslation();

    const src = React.useMemo(() => {
        return `src/assets/icons/${image}`;
        }, [image]);

    return (
        <div className={styles.itemSidebar} onClick={()=>navigate()}>
            <div className={styles.contentImage}>
                <img src={src} alt={'icon ' + image.replace(".svg", "")} />
            </div>
            <p>{t(text)}</p>
        </div>
    );
}