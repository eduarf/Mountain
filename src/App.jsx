import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import { About, Contact, Home, Services } from "./pages";
import Header from "./components/header/Header";
import DefaultHeader from "./components/defaultHeader/DefaultHeader";

function App() {
  const Layout = () => {
    const { pathname } = useLocation();
    return (
      <div className="App">
        {pathname === "/" ? <Header /> : <DefaultHeader />}
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/services",
          element: <Services />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
