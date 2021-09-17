import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import RegisterScreen from "./screens/RegisterScreen";
import SigninScreen from "./screens/SigninScreen";
import CounsellorScreen from "./screens/CounsellorScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/register" component={RegisterScreen} />
          <Route path="/login" component={SigninScreen} />
          <Route path="/" component={CounsellorScreen} exact /> 
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
    </Router>
  );
}

export default App;
