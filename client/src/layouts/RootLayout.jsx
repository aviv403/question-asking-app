import { Outlet, NavLink, ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <ScrollRestoration />
      <header>
        <nav>
          <h1>Quastion Asking</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="vote">Vote</NavLink>
          <NavLink to="create_question">Create Question</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
