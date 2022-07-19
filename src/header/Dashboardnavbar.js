import React, { useEffect } from "react";
import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Dashboardnavbar() {
  const [color, setColor] = useState("dark");
  useEffect(() => {
    const a = sessionStorage.getItem("id");
    if (a === "Admin") {
      setColor("danger");
    }
  }, []);
  return (
    <div>
      <>
        <Navbar bg={`${color}`} variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Link
                to="/ALL-IN-ONE-PROJECT-CRUD-OPERATION-WITHOUT-API"
                className="text"
                style={{
                  padding: "5px 15px",
                  backgroundColor: "black",
                  borderRadius: "25px",
                }}
                onClick={() => sessionStorage.clear()}
              >
                Logout
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
}
