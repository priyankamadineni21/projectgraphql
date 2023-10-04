"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductType = void 0;
const nexus_1 = require("nexus");
exports.ProductType = (0, nexus_1.objectType)({
    name: "Product",
    definition(t) {
        t.nonNull.int("id"),
            t.nonNull.string("name"),
            t.nonNull.string("price");
    },
});
//# sourceMappingURL=product.js.map