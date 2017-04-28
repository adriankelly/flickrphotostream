import React from 'react';
import { Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const FilterForm = (props) => {
  return (
    <Col xs={12} md={5}>
      <FormGroup>
        <ControlLabel>Start typing a tag name to filter results...</ControlLabel>
        <FormControl 
          type="text"
          onChange={props.onChange}
        />
      </FormGroup>
    </Col>
  )
}

export default FilterForm;