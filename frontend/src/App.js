import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import RegisterScreen from "./screens/RegisterScreen";
import SigninScreen from "./screens/SigninScreen";
import CounsellorScreen from "./screens/CounsellorScreen";
import ProfileScreen from "./screens/ProfileScreen";
import UsersListScreen from "./screens/UsersListScreen";
import CounsellorListScreen from "./screens/CounsellorsListScreen";
import CounsellorEditScreen from "./screens/CounsellorEditScreen";
import AdminDashboardScreen from "./screens/AdminDashboardScreen";
import OrderListScreen from "./screens/OrderListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import DashboardScreen from "./screens/DashboardScreen";
import BookingScreen from "./screens/BookingScreen";
import SessionBookingScreen from "./screens/SessionBookingScreen";
import OrderScreen from "./screens/OrderScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import IndividualScreen from "./screens/IndividualScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/register" component={RegisterScreen} />
          <Route path="/login" component={SigninScreen} />
          <Route path="/" component={CounsellorScreen} exact /> 
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/admin/userlist" component={UsersListScreen} />
          <Route
            path="/admin/counsellorlist"
            component={CounsellorListScreen}
          />
          <Route
            path="/admin/counsellor/:id/edit"
            component={CounsellorEditScreen}
          />
          <Route path="/admin_dashboard" component={AdminDashboardScreen} />
          <Route path="/admin/orderlist" component={OrderListScreen} />
          <Route path="/admin/users/:id/edit" component={UserEditScreen} />
          <Route path="/dashboard" component={DashboardScreen} />
          <Route path="/confirm" component={BookingScreen} />
          <Route path="/sessions/:id?" component={SessionBookingScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/bespeaking" component={PlaceOrderScreen} />
          <Route path="/counsellor/:id" component={IndividualScreen} />
          {/* 



          */}
        </Container>
      </main>
    </Router>
  );
}

export default App;
