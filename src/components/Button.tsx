export default function Button(prop: { onClick?: () => void, children: React.ReactNode; className?: string}) {
    return (
        <button onClick={prop.onClick} className={prop.className}>
            {prop.children}
        </button>
    );
}