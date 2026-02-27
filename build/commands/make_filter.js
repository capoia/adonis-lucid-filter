import {
  stubsRoot
} from "../chunk-HUO7N34V.js";
import {
  __decorateClass
} from "../chunk-XUS63JTZ.js";

// commands/make_filter.ts
import { BaseCommand, args } from "@adonisjs/core/ace";
var MakeFilter = class extends BaseCommand {
  static commandName = "make:filter";
  static description = "Make a new Lucid filter";
  /**
   * Run command
   */
  async run() {
    const codemods = await this.createCodemods();
    await codemods.makeUsingStub(stubsRoot, "make/filter/main.stub", {
      name: this.name
    });
  }
};
__decorateClass([
  args.string({ description: "Name of the model file" })
], MakeFilter.prototype, "name", 2);
export {
  MakeFilter as default
};
//# sourceMappingURL=make_filter.js.map