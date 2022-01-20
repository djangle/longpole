const settings = require("../pages/settings");

test("checks default setting: tooltip", () => {
  expect(settings.showTooltips).toBe(true);
});

test("checks default setting: read-only", () => {
  expect(settings.readOnly).toBe(false);
});

test("checks default setting: showProfileWarning", () => {
  expect(settings.showProfileWarning).toBe(true);
});

test("checks default setting: userCanSelectText", () => {
  expect(settings.userCanSelectText).toBe(false);
});
