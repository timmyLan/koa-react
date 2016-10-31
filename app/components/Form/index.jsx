import React, { Component, PropTypes} from 'react';
import {Form, FormGroup, FormControl, Col, Checkbox ,ControlLabel, Button} from 'react-bootstrap';

export default class KoaForm extends Component {
  static proTypes = {
    changeName: PropTypes.func.isRequired,
    changePassword: PropTypes.func.isRequired,
    form:PropTypes.object.isRequired
  }
  handleSubmit(e){
    const {handleSubmit,form} = this.props;
    handleSubmit({name:form.name});
    e.stopPropagation();
    e.preventDefault();
  }
  render() {
    const {changeName, form} = this.props;
    return (
      <section>
        <h2>{form.hello}</h2>
        <Form horizontal>
          <FormGroup controlId="name">
            <Col componentClass={ControlLabel} sm={2}>
              Name
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Name" name="name" value={form.name} onChange={(e)=>{changeName(e.target.value)}}/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="button" onClick={(e)=>this.handleSubmit(e)}>
                Say hello to {form.name ? form.name : 'someOne'}
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </section>
    );
  }
}
