import { Footer } from "./layout/Footer.jsx";
import { Header } from "./layout/Header.jsx";
import { Navbar } from "./layout/Navbar.jsx";

export default function Page({ children }) {
    return (
        <>
            <Header>
                <img
                    className="logo pointer"
                    src="https://i.pinimg.com/564x/fa/d7/e4/fad7e46ef884c8152422f173a29b9ae7.jpg"
                    alt="SPA-ECOM"
                />
                <div className="flex gap-3 pointer">
                    <span>Home</span>
                    <span>About</span>
                    <span>Cart</span>
                </div>
            </Header>
            <div className="grid-container">
                <Navbar>
                    <span>Groceries</span>
                    <span>Clothings</span>
                </Navbar>
                <main>{children}</main>
            </div>
            <Footer></Footer>
        </>
    );
}
