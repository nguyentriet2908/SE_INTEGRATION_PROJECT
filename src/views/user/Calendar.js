import React from "react";

// reactstrap components
import { Card, Container, Row } from "reactstrap";

// core components
import NotesHeader from "components/Headers/NotesHeader.js";

function Calendar() {
  return (
    <>
      <NotesHeader />
      <Container className="mt--9" fluid>
        <Row>
          <div className="col">
            <Card className="shadow border-0">
              <div className="Notes">
              
              </div>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Calendar;

