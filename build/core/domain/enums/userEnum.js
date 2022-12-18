"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pay = exports.TypeUse = exports.StatusType = exports.RoleType = exports.GenderType = void 0;
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
})(GenderType = exports.GenderType || (exports.GenderType = {}));
var RoleType;
(function (RoleType) {
    RoleType["Client"] = "client";
    RoleType["Admin"] = "admin";
})(RoleType = exports.RoleType || (exports.RoleType = {}));
var StatusType;
(function (StatusType) {
    StatusType["Active"] = "actived";
    StatusType["InActive"] = "Inactive";
    StatusType["Archived"] = "Archived";
})(StatusType = exports.StatusType || (exports.StatusType = {}));
var TypeUse;
(function (TypeUse) {
    TypeUse["Normal"] = "normal";
    TypeUse["WithGG"] = "withgg";
})(TypeUse = exports.TypeUse || (exports.TypeUse = {}));
var Pay;
(function (Pay) {
    Pay["IsPay"] = "ispay";
    Pay["NotPay"] = "notpay";
})(Pay = exports.Pay || (exports.Pay = {}));
