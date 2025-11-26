import styles from './Sidebar.module.scss';
import ItemSidebar from './ItemSidebar.tsx';
import {useTranslation} from "react-i18next";

export default function Sidebar() {
    const {t} = useTranslation();
    const releases = t('sidebar.menu.releases', {returnObjects: true}) as Record<string, string>;
    const platform = t('sidebar.menu.platform', {returnObjects: true}) as Record<string, string>;
    const genre = t('sidebar.menu.genre', {returnObjects: true}) as Record<string, string>;

    const navigate = (route: string): void => {
        console.log('Se ejecutó navigate con:', route);

    };
    const renderSection = (title: string, items: Record<string, string>): any => {
        return (
            <>
                <p className={styles.titleMenu}>{title}</p>
                <div className={styles.line}/>
                {
                    Object.entries(items).map(([key, label]) => (
                        <ItemSidebar key={key} navigate={() => navigate(key)} text={label}/>
                    ))
                }
            </>)

    }
    return (
        <div className={styles.sidebar}>
            <div className={styles.content}>
                { renderSection(t('sidebar.menu.sections.releases'), releases) }
                <p className={`${styles.titleMenu} ${styles.navigateItem}`}
                   onClick={() => navigate('allGames')}>{t('sidebar.menu.sections.allGames')}</p>
                <div className={styles.line}/>
                { renderSection(t('sidebar.menu.sections.platform'), platform) }
                { renderSection(t('sidebar.menu.sections.genre'), genre) }
            </div>
        </div>
    );
}