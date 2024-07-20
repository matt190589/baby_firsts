import NavbarTop from "./components/NavbarTop";
import NavbarBottom from "./components/NavbarBottom";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <div className="min-h-screen bg-bf-off-white">
      <NavbarTop />
      <Welcome />
      <NavbarBottom />
  </div>
  );
}
