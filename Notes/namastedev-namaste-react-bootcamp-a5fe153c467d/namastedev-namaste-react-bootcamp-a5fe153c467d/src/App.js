import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import AboutUs from "./components/AboutUs.js";
import ErrorComponent from "./components/ErrorComponent.js";
import RestaurantComponent from "./components/RestaurantComponent.js";
import ProfileComponent from "./components/ProfileComponent.js";
//import SearchPageComponent from "./components/SearchPageComponent.js";
import HeadingComponent from "./components/Header.js";

import UserContext from "./components/UserContext.js";
import ThemeContext from "./components/ThemeContext.js";
import store from "./components/store.js";
import { Provider } from "react-redux";

const AboutUs = lazy(() => import("./components/AboutUs.js"));
const SearchPageComponent = lazy(() =>
  import("./components/SearchPageComponent.js")
);

const AppLayout = () => {
  const [emailId, setEmailId] = useState("akshay@namastedev.com");
  const [theme, setTheme] = useState("light");
  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
        <UserContext.Provider value={{ email: emailId, setEmail: setEmailId }}>
          <HeadingComponent />
          <div className="body">
            <Outlet />
          </div>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </Provider>
  );
};

const routesConfig = [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/restaurant/:id",
        element: <RestaurantComponent />,
      },
      {
        path: "/search",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <SearchPageComponent />
          </Suspense>
        ),
      },
      {
        path: "/about-us",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <AboutUs />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: (
              <ProfileComponent
                name={"Akshay Saini from the props"}
                xyz={123}
              />
            ),
          },
        ],
      },
    ],
  },
];

const appRouter = createBrowserRouter(routesConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
