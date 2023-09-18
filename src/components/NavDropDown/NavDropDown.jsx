const NavDropDown = () => {
  const routes = [
    { id: 1, path: "/home", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "*", name: "Not Found" }, // Not Found route
  ];

  return (
    <ul className="md:flex gap-3 ml-7">
      {routes.map((route) => (
        <li key={route.id}>
          {" "}
          <a href={route.path}>{route.name}</a>{" "}
        </li>
      ))}
    </ul>
  );
};

export default NavDropDown;
