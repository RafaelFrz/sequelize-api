import categoriasRoute from "./categoriasRoute";
import autoresRoute from "./autoresRoute"
import livrosRoute from "./livrosRoute";
import usuariosRoute from "./usuariosRoute";

function Routers(app) {
    categoriasRoute(app);
    autoresRoute(app);
    livrosRoute(app);
    usuariosRoute(app);
}

export default Routers