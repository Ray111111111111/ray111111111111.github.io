import { renderToString } from "react-dom/server";
import OrbitPage from "../../orbit/OrbitPage";
export function render() { return renderToString(<OrbitPage />); }
