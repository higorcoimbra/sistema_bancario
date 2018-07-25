const debug = require('debug')('nodestr:server');

//funções retiradas do gerador de código do express
//normalizando porta para escutar a disponível
function normalizePort(val){
	const port = parseInt(val, 10);

	if(isNaN(port)){return val;}
	if(port >= 0){return port;}
	return false;
}

//tratamento de erros
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

//startando o debug com informações do servidor
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}