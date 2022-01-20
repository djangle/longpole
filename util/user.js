/* Sample user document - use this as a template when creating new users
{
    "_id": {
        "$oid": "61e5fd4d860ec6eef491f9b0"
    },
    "username": "adam",
    "email": "acamodio@gmail.com",
    "isActive": true,
    "isAdmin": true,
    "settings": {
        "showTooltips": true,
        "readOnly": false,
        "showProfileWarning": true,
        "userCanSelectText": false
    }
}*/


function initUser() {
  const showTooltips = true;
  const readOnly = false;
  const showProfileWarning = true;
  const userCanSelectText = false;

  module.exports = {
    showTooltips,
    readOnly,
    showProfileWarning,
    userCanSelectText,
  };
}
