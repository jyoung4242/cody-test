import "./style.css";
import { UI } from "@peasy-lib/peasy-ui";
import { Assets } from "@peasy-lib/peasy-assets";
import { Input } from "@peasy-lib/peasy-input";

class Popover {
  public static template = `
  <div class="popover" \${===visible}>
    <div class="popover__body">Hello World</div>
  </div>`;

  constructor(public visible: boolean) {
    this.visible = visible;
    console.log(visible);
  }

  public static create(state: { visible: boolean }): Popover {
    console.log(state);

    return new Popover(state.visible);
  }
}

const model = {
  Popover,
  popover: {
    visible: false,
  },
};
const template = `<div>
      <\${Popover === popover}>
      
    </div>`;
UI.create(document.body, template, model);
UI.initialize(100 / 6);
console.log(`Hello World`);
