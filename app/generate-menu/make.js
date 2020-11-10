var HomeViewModel = require("../home-view-model");
var homeViewModel = new HomeViewModel();
var page;

function pageLoaded(args) {
    page = args.object;
    page.bindingContext = homeViewModel;
}

exports.pageLoaded = pageLoaded;

exports.onVidTap = function () {

}

exports.onImgTap = function () {

}

exports.onFileTap = function () {

}

exports.onTxtTap = function () {

}

exports.onUrlTap = function () {

}

exports.onMultiTap = function () {

}