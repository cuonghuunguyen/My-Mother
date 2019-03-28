import React, { Component } from "react";
import { Container, Header, Content, Picker, Form } from "native-base";

export default class KidPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key1"
    };
  }
  onValueChange() {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
      <Form>
        <Picker
          note
          mode="dropdown"
          style={{ width: 120 }}
          selectedValue={this.state.selected}
          onValueChange={this.onValueChange.bind(this)}
        >
          <Picker.Item label="" value="key0" />
          <Picker.Item label="Hữu Quốc" value="key1" />
          <Picker.Item label="Quốc Huy" value="key2" />
        </Picker>
      </Form>
    );
  }
}
