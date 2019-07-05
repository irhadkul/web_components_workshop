import { Component, h } from '@stencil/core';
import '@vaadin/vaadin-date-picker/vaadin-date-picker';


@Component({
  tag: 'vaadin-datepicker-demo',
  shadow: true
})
export class VaadinDatepickerDemo {

  render() {
    return (
      <div>
        <vaadin-date-picker label="Date" placeholder="Pick a date">
        </vaadin-date-picker>
      </div>
    );
  }
}
