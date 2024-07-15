export default [
  {
    path: "/",
    label: "Dashboard",
    componentName: "dashboard",
    nav: false
  },
  {
    path: "/dashboard",
    label: "Dashboard",
    componentName: "dashboard",
    nav: true,
  },
  {
    path: "/heroes",
    label: "Heroes",
    componentName: "heroes",
    nav: true,
  },
  {
    path: "/hero-detail/:id",
    label: "HeroDetail",
    componentName: "hero-detail",
    nav: false,
  },
];