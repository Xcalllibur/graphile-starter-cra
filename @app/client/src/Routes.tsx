import { mount, route } from 'navi'

const routes = mount({
  "/": route({
    getView: () => import("./routes/Home")
  }),
  "/about": route({
    getView: () => import("./routes/About")
  }),
})

export default routes;
