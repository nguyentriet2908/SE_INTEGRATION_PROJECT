/*eslint-disable*/

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
        <Col xl="6">
          <div className="copyright text-center text-xl-left text-muted">
            © {new Date().getFullYear()}{" "}
            <a
              className="font-weight-bold ml-1"
              href="https://github.com/nguyentriet2908/SE_INTEGRATION_PROJECT"
              rel="noopener noreferrer"
              target="_blank"
            >
              Savig
            </a>
          </div>
        </Col>

        <Col xl="6">
          <Nav className="nav-footer justify-content-center justify-content-xl-end">
            <NavItem>
              <NavLink
                href="https://github.com/nguyentriet2908/SE_INTEGRATION_PROJECT"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="https://www.facebook.com/phamhuynh.quocthanh03/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Contact
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="https://forms.gle/7VjMRDyF7bzy8S3L8"
                rel="noopener noreferrer"
                target="_blank"
              >
                Report
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
