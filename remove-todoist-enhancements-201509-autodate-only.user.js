// ==UserScript==
// @name            Remove Todoist Enhancements 2015-09 Auto-Date Only
// @version         1.0.0
// @description     Only turns off the date parser
// @author          Darek Kay <darekkay@gmail.com>
// @namespace       http://www.eclectide.com
// @downloadURL     https://github.com/o-o00o-o/userscripts/raw/master/remove-todoist-enhancements-201509-autodate-only.user.js
// @include         http*://*todoist.com/app*
// @grant           GM_addStyle
// @require         https://raw.githubusercontent.com/darekkay/userscripts/master/utils/waitForClass.js
// ==/UserScript==

waitForClass("t_date", removeDate);

function removeDate(node) {
  $(node).click();
}