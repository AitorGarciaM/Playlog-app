export default function Button(prop: { onClick?: () => void, children: React.ReactNode; classname?: string}) {
    return (
        <button onClick={prop.onClick} className={prop.classname}>
            {prop.children}
        </button>
    );
}