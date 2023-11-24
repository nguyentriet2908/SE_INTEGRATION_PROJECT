import React from "react";

import { Card, CardBody, CardFooter, Container, Row, Col } from "reactstrap";
import { Component } from 'react';

import NotesHeader from "components/Headers/NotesHeader.js";
import Scheduler from 'components/Scheduler';

const data = [
  { start_date:'2023-11-24 6:00', end_date:'2023-11-24 8:00', text:'Event 1', id: 1},
  { start_date:'2023-11-22 10:00', end_date:'2023-11-22 18:00', text:'Event 2', id: 2 }
];

class Calendar extends Component {
  state = {
      currentTimeFormatState: true,
      messages: []
  };

  addMessage(message) {
      const maxLogLength = 5;
      const newMessage = { message };
      const messages = [
          newMessage,
          this.state.messages
      ];

      if (messages.length > maxLogLength) {
          messages.length = maxLogLength;
      }
      this.setState({ messages });
  }

  logDataUpdate = (action, ev, id) => {
      const text = ev && ev.text ? ` (${ev.text})` : '';
      const message = `event ${action}: ${id} ${text}`;
      this.addMessage(message);
  }

  handleTimeFormatStateChange = (state) => {
      this.setState({
          currentTimeFormatState: state
      });
  }

  render() {
    const { currentTimeFormatState, messages } = this.state;
    return (
      <>
      <NotesHeader />
        <Container className="mt--9" fluid>
          <Card className="shadow border-0">    
            <div className="Notes">
              <Col>
                <div className="scheduler-container">
                  <Scheduler
                    events={data}
                    timeFormatState={currentTimeFormatState}
                    onDataUpdated={this.logDataUpdate}
                  />
                </div>
              </Col>
            </div>
          </Card>
        </Container>
      </>
    );
  }
}
export default Calendar;