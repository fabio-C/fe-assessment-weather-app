import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Error from "./pages/error/Error";
import Home from "./pages/home/Home";

function App() {
  const HomePage = (<Layout><Home /></Layout>);
  const router = createBrowserRouter([
    {
      path: "/",
      element: HomePage,
      errorElement: <Error />,
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
