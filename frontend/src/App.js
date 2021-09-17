import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import RegisterScreen from "./screens/RegisterScreen";
import SigninScreen from "./screens/SigninScreen";
import CounsellorScreen from "./screens/CounsellorScreen";
// import logo from "./components/logo.png";
// import Working from "./components/Working";
// import logo from "./Components/logo.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { Image } from "antd";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
function App() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <Router>
      <Header />

      <main className="py-5">
        {/* <img width="250px" src={logo} alt="" /> */}

        <Container>
          <Route path="/register" component={RegisterScreen} />
          <Route path="/login" component={SigninScreen} />
          <Route path="/" component={CounsellorScreen} exact />

          <div className="img" data-aos="zoom-in-right">
            <Image
              width={900}
              height={200}
              src="https://static.businessworld.in/article/article_extra_large_image/1569931494_o7vUpZ_counselling.jpg"
            />
          </div>

          {/* <img src={img} alt="" /> */}

          {/* <Route path="/order/:id" component={OrderScreen} />
          <Route path="/bespeaking" component={PlaceOrderScreen} />
          <Route path="/confirm" component={BookingScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/counsellor/:id" component={IndividualScreen} />
          <Route path="/sessions/:id?" component={SessionBookingScreen} />
          <Route path="/admin/userlist" component={UsersListScreen} />
          <Route
            path="/admin/counsellorlist"
            component={CounsellorListScreen}
          />

          <Route
            path="/admin/counsellor/:id/edit"
            component={CounsellorEditScreen}
          />

          <Route path="/admin/orderlist" component={OrderListScreen} />
          <Route path="/admin/users/:id/edit" component={UserEditScreen} />
          <Route path="/dashboard" component={DashboardScreen} />
          <Route path="/admin_dashboard" component={AdminDashboardScreen} />

          */}
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
