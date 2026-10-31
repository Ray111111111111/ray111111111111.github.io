import { createRoot, hydrateRoot } from "react-dom/client";
import OrbitPage from "../../orbit/OrbitPage";
import "../../orbit/orbit.css";
import "../../orbit/glass.css";
const root = document.getElementById("root")!;
if (root.hasChildNodes()) hydrateRoot(root, <OrbitPage />);
else createRoot(root).render(<OrbitPage />);
