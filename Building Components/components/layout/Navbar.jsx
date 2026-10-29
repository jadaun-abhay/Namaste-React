import "../../style.css";

export function Navbar({ children }) {
    return <nav className="flex flex-col gap-3 pointer">{children}</nav>;
}
