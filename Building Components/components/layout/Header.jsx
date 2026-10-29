import "../../style.css";

export function Header({ children }) {
    return (
        <header className="flex align-center space-between p-1 bb-sb1">
            {children}
        </header>
    );
}
