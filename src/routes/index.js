import categoriasRoute from "./categoriasRoute";
import autoresRoute from "./autoresRoute"
import livrosRoute from "./livrosRoute";
import usuariosRoute from "./usuariosRoute";
import emprestimosRoute from "./emprestimosRoute"

function Routers(app) {
    categoriasRoute(app);
    autoresRoute(app);
    livrosRoute(app);
    usuariosRoute(app);
    emprestimosRoute(app);
}

export default Routers