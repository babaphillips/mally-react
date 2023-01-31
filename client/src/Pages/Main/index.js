import Menu from "../Menu";
import Order from "../Order";

export default function Main({ page }) {
  function renderPage() {
    if (page === "menu") {
      return <Menu />;
    } else if (page === "order") {
      return <Order />;
    }
  }
  return <>{renderPage()}</>;
}
