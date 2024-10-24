import { Router } from 'express';
import { EnderecoControlador } from './controladores/EnderecoControlador';
import { EmpresarioControlador } from './controladores/EmpresarioControlador';
import { UsuarioControlador } from './controladores/UsuarioControlador';
import { EventoControlador } from './controladores/EventoControlador';
import { TipoControlador } from './controladores/TipoControlador';
import { verificarToken } from './utils/verificarToken';

const routes = Router();

const enderecoControlador = new EnderecoControlador();
const empresarioControlador = new EmpresarioControlador();
const usuarioControlador = new UsuarioControlador()
const eventoControlador = new EventoControlador()
const tipoControlador = new TipoControlador();

// Endereço
routes.post("/endereco", enderecoControlador.criar.bind(enderecoControlador));
routes.get("/endereco", enderecoControlador.visualizarTodos.bind(enderecoControlador));
routes.delete("/endereco/:id", enderecoControlador.deletar.bind(enderecoControlador));
routes.put("/endereco/:id", enderecoControlador.editar.bind(enderecoControlador));
routes.get("/cidades", enderecoControlador.visualizarCidades.bind(enderecoControlador))


// Empresário
routes.get("/empresario/:id", empresarioControlador.visualizar.bind(empresarioControlador));
routes.get("/empresario", empresarioControlador.visualizarTodos.bind(empresarioControlador));
routes.post("/empresario/login", empresarioControlador.realizarAcesso.bind(empresarioControlador))
routes.post("/empresario", empresarioControlador.criar.bind(empresarioControlador));
routes.put("/empresario/:id", empresarioControlador.editar.bind(empresarioControlador));
routes.delete("/empresario/:id", empresarioControlador.apagar.bind(empresarioControlador));

// Usuário
routes.get("/usuario/:id", usuarioControlador.visualizar.bind(usuarioControlador));
routes.get("/usuario", usuarioControlador.visualizarTodos.bind(usuarioControlador));
routes.post("/usuario", usuarioControlador.criar.bind(usuarioControlador));
routes.put("/usuario/:id", usuarioControlador.editar.bind(usuarioControlador));
routes.delete("/usuario/:id", usuarioControlador.apagar.bind(usuarioControlador));

// Evento
routes.get("/evento/filtrar", eventoControlador.filtrar.bind(eventoControlador))
routes.get("/evento/:id", eventoControlador.visualizar.bind(eventoControlador));
routes.get("/evento", eventoControlador.visualizarTodos.bind(eventoControlador));
routes.post("/evento", eventoControlador.criar.bind(eventoControlador));
routes.put("/evento/:id", eventoControlador.editar.bind(eventoControlador));
routes.delete("/evento/:id", eventoControlador.apagar.bind(eventoControlador))


// Tipos
routes.get("/tipo", tipoControlador.visualizarTodos.bind(tipoControlador))


routes.get("/validar", empresarioControlador.validar.bind(empresarioControlador))
routes.get("/testartoken", verificarToken, empresarioControlador.testarToken.bind(empresarioControlador))

export { routes };
