import {
  extendModelQueryBuilder
} from "../chunk-WC3ULY4Q.js";
import "../chunk-XUS63JTZ.js";

// providers/lucid_filter_provider.ts
var LucidFilterProvider = class {
  constructor(app) {
    this.app = app;
  }
  async boot() {
    const { ModelQueryBuilder } = await this.app.import("@adonisjs/lucid/orm");
    extendModelQueryBuilder(ModelQueryBuilder);
  }
};
export {
  LucidFilterProvider as default
};
//# sourceMappingURL=lucid_filter_provider.js.map