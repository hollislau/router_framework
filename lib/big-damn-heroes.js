const http = require("http");
const Router = require(__dirname + "/router");

module.exports = (function () {
  var router = new Router();

  function get(path, cb) {
    router.get(path, cb);
  }

  function post(path, cb) {
    router.post(path, cb);
  }

  function put(path, cb) {
    router.put(path, cb);
  }

  function patch(path, cb) {
    router.patch(path, cb);
  }

  function del(path, cb) {
    router.delete(path, cb);
  }

  function badRoute(cb) {
    router.badRoute(cb);
  }

  function listen(port, cb) {
    if (!cb) {
      cb = () => {
        this.serverMsg += port;
        process.stdout.write(this.serverMsg + "\n");
      };
    }

    return http.createServer(router.route()).listen(port, cb);
  }

  return {
    serverMsg: "Serenity still flying on port ",
    get: get,
    post: post,
    put: put,
    patch: patch,
    delete: del,
    badRoute: badRoute,
    listen: listen
  };
})();
