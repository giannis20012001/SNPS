/**
 * Created by lumi (A.K.A. John Tsantilis) on 29/5/2016.
 */

/**
 * Delete all Web and app activity.
 */
jQuery.get("https://history.google.com/history/?utm_source=sidenav").done(function (data) {
    var newDoc = document.open("text/html", "replace");
    newDoc.write(data);
    newDoc.close();

    $("button[ng-click='lookupController.openDeleteDialog()']").trigger("click");
    $("md-radio-button[value='advancedMode']").trigger("click");
    $("md-select[ng-model='controller.advancedTimeRangeValue']").trigger("click");
    $("md-option[value='all']").trigger("click");
    $("button[ng-click='controller.remove()']").trigger("click");
    $("button[ng-click='dialog.hide()']").trigger("click");

});

/**
 * Delete all Voice and Audio activity.
 */
jQuery.get("https://history.google.com/history/audio?utm_source=sidenav").done(function (data) {
    var newDoc = document.open("text/html", "replace");
    newDoc.write(data);
    newDoc.close();

    $("button[ng-click='lookupController.openDeleteDialog()']").trigger("click");
    $("md-radio-button[value='advancedMode']").trigger("click");
    $("md-select[ng-model='controller.advancedTimeRangeValue']").trigger("click");
    $("md-option[value='all']").trigger("click");
    $("button[ng-click='controller.remove()']").trigger("click");
    $("button[ng-click='dialog.hide()']").trigger("click");

});

/**
 * Delete device activity info.
 */
jQuery.get("https://history.google.com/history/device?utm_source=sidenav").done(function (data) {
    var newDoc = document.open("text/html", "replace");
    newDoc.write(data);
    newDoc.close();

    $("button[ng-click='lookupController.openDeleteDialog()']").trigger("click");
    $("md-radio-button[value='advancedMode']").trigger("click");
    $("md-select[ng-model='controller.advancedTimeRangeValue']").trigger("click");
    $("md-option[value='all']").trigger("click");
    $("button[ng-click='controller.remove()']").trigger("click");
    $("button[ng-click='dialog.hide()']").trigger("click");

});

/**
 * Delete your entire location history.
 */
jQuery.get("https://www.google.com/maps/timeline").done(function (data) {
    var newDoc = document.open("text/html", "replace");
    newDoc.write(data);
    newDoc.close();

    $("button[aria-label='Delete Location History']").trigger("click");
    $("md-checkbox[role='checkbox']").trigger("click"); //True or False
    $("button[name='ok']").trigger("click");

});

/**
 * Delete YouTube watch history.
 */
jQuery.get("https://history.google.com/history/youtube/watch?utm_source=sidenav").done(function (data) {
    var newDoc = document.open("text/html", "replace");
    newDoc.write(data);
    newDoc.close();

    $("button[ng-click='lookupController.openDeleteDialog()']").trigger("click");
    $("md-radio-button[value='advancedMode']").trigger("click");
    $("md-select[ng-model='controller.advancedTimeRangeValue']").trigger("click");
    $("md-option[value='all']").trigger("click");
    $("button[ng-click='controller.remove()']").trigger("click");
    $("button[ng-click='dialog.hide()']").trigger("click");

});

/**
 * Delete YouTube search history.
 */
jQuery.get("https://history.google.com/history/youtube/search?utm_source=sidenav").done(function (data) {
    var newDoc = document.open("text/html", "replace");
    newDoc.write(data);
    newDoc.close();

    $("button[ng-click='lookupController.openDeleteDialog()']").trigger("click");
    $("md-radio-button[value='advancedMode']").trigger("click");
    $("md-select[ng-model='controller.advancedTimeRangeValue']").trigger("click");
    $("md-option[value='all']").trigger("click");
    $("button[ng-click='controller.remove()']").trigger("click");
    $("button[ng-click='dialog.hide()']").trigger("click");

});