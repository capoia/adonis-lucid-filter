// src/bindings/model_query_builder.ts
function extendModelQueryBuilder(builder) {
  builder.macro(
    "filter",
    function(input, filter) {
      const Filter = filter || this.model.$filter();
      return new Filter(this, input).handle();
    }
  );
}

export {
  extendModelQueryBuilder
};
//# sourceMappingURL=chunk-WC3ULY4Q.js.map