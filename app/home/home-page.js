var HomeViewModel = require("../home-view-model");
var homeViewModel = new HomeViewModel();
var page;

function pageLoaded(args) {
  page = args.object;
  page.bindingContext = homeViewModel;
}

exports.pageLoaded = pageLoaded;

exports.onLearnTap = function () {
  page.frame.navigate("./learn/learn");
}

exports.onScanTap = function () {
  page.frame.navigate("./scan-menu/scan-menu");
}

exports.onMakeTap = function () {
  page.frame.navigate("./generate-menu/make");
}

exports.onLibraryTap = function () {
  page.frame.navigate("./scan-library/scan-lib");
}