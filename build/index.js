import {
  stubsRoot
} from "./chunk-HUO7N34V.js";
import {
  __decorateClass,
  __publicField
} from "./chunk-XUS63JTZ.js";

// configure.ts
async function configure(command) {
  const codemods = await command.createCodemods();
  await codemods.updateRcFile((rcFile) => {
    rcFile.addProvider("adonis-lucid-filter/provider");
    rcFile.addCommand("adonis-lucid-filter/commands");
  });
}

// src/base_model.ts
import camelCase from "lodash/camelCase.js";
function StaticImplements() {
  return (_t) => {
  };
}
var BaseModelFilter = class {
  constructor($query, $input) {
    this.$query = $query;
    this.$input = $input;
    this.$input = BaseModelFilter.removeEmptyInput(this.$input);
    this.$blacklist = this.constructor.blacklist;
  }
  handle() {
    if (this.setup && typeof this.setup === "function") {
      this.setup(this.$query);
    }
    this.$filterByInput();
    return this.$query;
  }
  whitelistMethod(method) {
    const index = this.$blacklist.indexOf(method);
    const isBlacklisted = index !== -1;
    if (isBlacklisted) this.$blacklist.splice(index, 1);
    return isBlacklisted;
  }
  $filterByInput() {
    for (const key in this.$input) {
      const method = this.$getFilterMethod(key);
      const keyName = key;
      const value = this.$input[keyName];
      if (this.$methodIsCallable(method)) {
        ;
        this[method](value);
      }
    }
  }
  $getFilterMethod(key) {
    const methodName = this.constructor.dropId ? key.replace(/^(.*)(_id|Id)$/, "$1") : key;
    return this.constructor.camelCase ? camelCase(methodName) : methodName;
  }
  static removeEmptyInput(input) {
    const filteredInput = {};
    for (const key in input) {
      const keyName = key;
      const value = input[keyName];
      if (value !== "" && value !== null && value !== void 0) {
        filteredInput[keyName] = value;
      }
    }
    return filteredInput;
  }
  $methodIsCallable(method) {
    const methodKey = method;
    return !!this[methodKey] && typeof this[methodKey] === "function" && !this.$methodIsBlacklisted(method);
  }
  $methodIsBlacklisted(method) {
    return this.$blacklist.includes(method);
  }
};
__publicField(BaseModelFilter, "blacklist", []);
__publicField(BaseModelFilter, "dropId", true);
__publicField(BaseModelFilter, "camelCase", true);
BaseModelFilter = __decorateClass([
  StaticImplements()
], BaseModelFilter);

// src/mixin.ts
var Filterable = (superclass) => {
  class FilterableModel extends superclass {
    /**
     * Filter method of filterable model
     */
    static filter(input, filter) {
      const Filter = filter || this.$filter();
      return new Filter(this.query(), input).handle();
    }
    /**
     * Filtration scope of filterable model
     */
    static filtration = function(query, input, filter) {
      const Filter = filter || this.$filter();
      return new Filter(query, input).handle();
    };
  }
  return FilterableModel;
};
export {
  BaseModelFilter,
  Filterable,
  configure,
  stubsRoot
};
//# sourceMappingURL=index.js.map