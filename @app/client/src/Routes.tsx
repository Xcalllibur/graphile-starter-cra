import * as React from 'react';
import { mount, route, map } from 'navi'

const routes = mount({
  "/": route({
    getView: () => import("./routes/Home")
  }),
  "/login": map(async (_request, _context) =>
    route({
      getView: async (req, _context) => {
        const { Login } = await import("./routes/Login");
        return <Login next={req.params.next} />
      },
    })
  ),
  "/register": route({
    getView: () => import("./routes/Register")
  }),
  "/verify": map(async (_request, _context) =>
    route({
      getView: async (req, _context) => {
        const { Verify } = await import("./routes/Verify");
        return <Verify id={req.params.id} token={req.params.token} />
      },
    })
  ),
  "/reset": map(async (_request, _context) =>
    route({
      getView: async (req, _context) => {
        const { Reset } = await import("./routes/Reset");
        return <Reset userId={req.params["user-id"]} token={req.params["token"]} />
      },
    })
  ),
  "/forgot": route({
    getView: () => import("./routes/Forgot")
  }),
  "/settings": mount({
    "/": route({
      getView: () => import("./routes/settings/Index")
    }),
  })
})

export default routes;
