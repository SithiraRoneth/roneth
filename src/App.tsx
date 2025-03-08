import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./component/RootLayout.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Works from "./pages/Works.tsx";
import Contact from "./pages/Contact.tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            children: [
                { path: "/", element: <Home /> },
                { path: "/home", element: <Home /> },
                { path: "/about", element: <About /> },
                { path: "/works", element: <Works /> },
                { path: "/contact", element: <Contact /> },
            ]
        }
    ]);
    return <RouterProvider router={routes} />;
}

export default App;
