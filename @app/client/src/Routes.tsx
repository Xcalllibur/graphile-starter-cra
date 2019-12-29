import * as React from 'react';
import { mount, route, map } from 'navi'

const routes = mount({
  "/": route({
    getView: () => import("./routes/Home")
  }),
  "/about": route({
    getView: () => import("./routes/About")
  }),
  "/login": map(async (_request, _context) =>
    route({
      getView: async (req, _context) => {
        const { Login } = await import("./routes/Login");
        return <Login next={req.params.next} />
      },
    })
  ),
})

export default routes;
