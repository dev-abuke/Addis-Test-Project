const makeHttpRequest = (controller) => {
  return async (req, res, next) => {
    try {
      var http = {
        data: req.body,
        query: req.query,
        parameter: req.params,
      };

      var result = await controller(http);
      res.status(200).send({ status: true, result: result });
    } catch (error) {
      console.log("CATCH ERROR: ", error);
      res.status(400).send({ status: false, error: error.message });
    }
  };
};

const makeApi = ({ router, controller }) => {
  router.get("/test", (req, res) => res.send("working.."));

  //EMPLOYEE API
  //POST
  router.post("/employee", makeHttpRequest(controller.createEmployee));
  router.post(
    "/employee/:id/delete",
    makeHttpRequest(controller.deleteEmployee)
  );
  router.post(
    "/employee/:id/update",
    makeHttpRequest(controller.updateEmployee)
  );

  //GET
  router.get("/employee", makeHttpRequest(controller.getAllEmployees));
  router.get("/employee/:id", makeHttpRequest(controller.findEmployeeById));
};

module.exports = { makeApi };
