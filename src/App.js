import React from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// // import About from "./components/About";
// import Navbar from "./components/Navbar";
// import OrderSummary from "./components/OrderSummary";
// import NoMatch from "./components/NoMatch";
// import Products from "./components/Products";
// import FeaturedProducts from "./components/FeaturedProducts";
// import NewProducts from "./components/NewProducts";
// import Users from "./components/Users";
// import UserDetails from "./components/UserDetails";
// import Admin from "./components/Admin";
// import Profile from "./components/Profile";
// import { AuthProvider } from "./components/Auth";
// import Login from "./components/Login";
// import RequireAuth from "./components/RequireAuth";

// const LazyAbout = React.lazy(() => import("./components/About"));

import NabBarForPages from "./components/Pages/NabBarForPages";
import HomePage from "./components/Pages/HomePage";
import DetailsPage from "./components/Pages/DetailsPage";
import ContactPage from "./components/Pages/ContactPage";
import SubmitPage from "./components/Pages/SubmitPage";

function App() {
  return (
    // <AuthProvider>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route
    //       path="about"
    //       element={
    //         <React.Suspense fallback="Loading...">
    //           <LazyAbout />
    //         </React.Suspense>
    //       }
    //     />
    //     <Route path="order-summary" element={<OrderSummary />} />
    //     <Route path="products" element={<Products />}>
    //       <Route index element={<FeaturedProducts />} />
    //       <Route path="featured" element={<FeaturedProducts />} />
    //       <Route path="new" element={<NewProducts />} />
    //     </Route>
    //     <Route path="users" element={<Users />}>
    //       <Route path=":userId" element={<UserDetails />} />
    //       <Route path="admin" element={<Admin />} />
    //     </Route>
    //     <Route
    //       path="profile"
    //       element={
    //         <RequireAuth>
    //           <Profile />
    //         </RequireAuth>
    //       }
    //     />
    //     <Route path="login" element={<Login />} />
    //     <Route path="*" element={<NoMatch />} />
    //   </Routes>
    // </AuthProvider>

    // This is for checking the react-router-redux feature in react-router library with version 6.something

    // https://github.com/reactjs/react-router-redux
    // You're a smart person. You use Redux to manage your application state. You use React Router to do routing. All is good.
    // But the two libraries don't coordinate. You want to do time travel with your application state, but React Router doesn't navigate between pages when you replay actions. It controls an important part of application state: the URL.
    <>
      <NabBarForPages />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="details" element={<DetailsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="submit" element={<SubmitPage />} />
      </Routes>
    </>
  );
}

export default App;
