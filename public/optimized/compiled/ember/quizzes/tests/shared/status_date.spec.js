(function(){define(["../../shared/status_date","../date_string_offset"],function(a,e){return module("status_date",{setup:function(){}}),test("availableStatus closed",function(){var t;return t=a.create({lockAt:e(-1),unlockAt:e(-1)}),equal(t.get("availableStatus"),"closed")}),test("availableStatus pending",function(){var t;return t=a.create({lockAt:e(2),unlockAt:e(1)}),equal(t.get("availableStatus"),"pending")}),test("availableStatus none",function(){var t;return t=a.create({unlockAt:e(-1)}),equal(t.get("availableStatus"),"none")}),test("availableStatus availableUntil",function(){var t;return t=a.create({unlockAt:e(-1),lockAt:e(1)}),equal(t.get("availableStatus"),"availableUntil")}),test("availableStatus none",function(){var e;return e=a.create({}),equal(e.get("availableStatus"),"none")}),test("availableLabel available",function(){var e;return e=a.create({availableStatus:"available"}),equal(e.get("availableLabel"),"Available")}),test("availableLabel availableUntil",function(){var e;return e=a.create({availableStatus:"availableUntil"}),equal(e.get("availableLabel"),"Available until")}),test("availableLabel pending",function(){var e;return e=a.create({availableStatus:"pending"}),equal(e.get("availableLabel"),"Not available until")}),test("availableMultiLabel pending",function(){var e;return e=a.create({availableStatus:"pending"}),equal(e.get("availableMultiLabel"),"Available on")}),test("availableLabel closed",function(){var e;return e=a.create({availableStatus:"closed"}),equal(e.get("availableLabel"),"Closed")}),test("availableLabel none",function(){var e;return e=a.create({availableStatus:"none"}),equal(e.get("availableLabel"),"")}),test("availableMultiLabel none",function(){var e;return e=a.create({availableStatus:"available"}),equal(e.get("availableMultiLabel"),"Available")})})}).call(this);