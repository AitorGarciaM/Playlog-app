export default function GenericAvatarIcon(prop: {width: number, height: number, className?: string}) {
    return (<img src="src/assets/icons/Generic avatar.svg" alt="Notification Icon" width={prop.width} height={prop.height} className={prop.className}/>);
}