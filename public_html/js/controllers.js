var tutorApp = angular.module('tutorApp', []);

tutorApp.controller('browserCtrl', function ($scope) {
    $scope.chrome = "--";
    $scope.firefox = "--";
    $scope.iExplorer = "--";
    $scope.Opera = "--";
    $scope.safari = "--";
    $scope.android = "--";
    $scope.firefoxMobile = "--";
    $scope.iePhone = "--";
    $scope.operaMobile = "--";
    $scope.safariMobile = "--";
    $scope.browserSupport = function (property) {

        switch (property) {
            case "line-height":
                $scope.chrome = "1.0";
                $scope.firefox = "1.0";
                $scope.iExplorer = "4.0";
                $scope.Opera = "7.0";
                $scope.safari = "1.0";
                $scope.android = "1.0";
                $scope.firefoxMobile = "1.0"
                $scope.iePhone = "6.0";
                $scope.operaMobile = "6.0";
                $scope.safariMobile = "1.0";
                break;

            case "letter-spacing":
                $scope.chrome = "1.0";
                $scope.firefox = "1.0";
                $scope.iExplorer = "4.0";
                $scope.Opera = "3.5";
                $scope.safari = "1.0";
                $scope.android = "?";
                $scope.firefoxMobile = "?"
                $scope.iePhone = "?";
                $scope.operaMobile = "?";
                $scope.safariMobile = "?";
                break;
            case "word-wrap":
                $scope.chrome = "1.0";
                $scope.firefox = "3.5";
                $scope.iExplorer = "5.5";
                $scope.Opera = "10.5";
                $scope.safari = "1.0";
                $scope.android = "1.0";
                $scope.firefoxMobile = "1.0"
                $scope.iePhone = "?";
                $scope.operaMobile = "?";
                $scope.safariMobile = "1.0";
                break;
            case "word-spacing":
                $scope.chrome = "1.0";
                $scope.firefox = "1.0";
                $scope.iExplorer = "6.0";
                $scope.Opera = "3.5";
                $scope.safari = "1.0";
                $scope.android = "?";
                $scope.firefoxMobile = "?";
                $scope.iePhone = "?";
                $scope.operaMobile = "?";
                $scope.safariMobile = "?";
                break;
            case "word-break":
                $scope.chrome = "1.0";
                $scope.firefox = "15.0";
                $scope.iExplorer = "5.5";
                $scope.Opera = "15";
                $scope.safari = "1.0";
                $scope.android = "yes";
                $scope.firefoxMobile = "15.0"
                $scope.iePhone = "?";
                $scope.operaMobile = "?";
                $scope.safariMobile = "?";
                break;
            case "white-space":
                $scope.chrome = "1.0";
                $scope.firefox = "1.0";
                $scope.iExplorer = "8.0";
                $scope.Opera = "8.0";
                $scope.safari = "1.0";
                $scope.android = "?";
                $scope.firefoxMobile = "?"
                $scope.iePhone = "?";
                $scope.operaMobile = "?";
                $scope.safariMobile = "?";
                break;
            case "text-transform":
                $scope.chrome = "1.0";
                $scope.firefox = "1.0";
                $scope.iExplorer = "4.0";
                $scope.Opera = "7.0";
                $scope.safari = "1.0";
                $scope.android = "1.0";
                $scope.firefoxMobile = "1.0"
                $scope.iePhone = "6.0";
                $scope.operaMobile = "6.0";
                $scope.safariMobile = "1.0";
                break;
            case "text-decoration":
                $scope.chrome = "1.0";
                $scope.firefox = "1.0";
                $scope.iExplorer = "3.0";
                $scope.Opera = "3.5";
                $scope.safari = "1.0";
                $scope.android = "1.0";
                $scope.firefoxMobile = "1.0"
                $scope.iePhone = "Yes";
                $scope.operaMobile = "Yes";
                $scope.safariMobile = "Yes";
                break;
            case "text-indent":
                $scope.chrome = "1.0";
                $scope.firefox = "1.0";
                $scope.iExplorer = "3.0";
                $scope.Opera = "3.5";
                $scope.safari = "1.0";
                $scope.android = "?";
                $scope.firefoxMobile = "1.0"
                $scope.iePhone = "?";
                $scope.operaMobile = "?";
                $scope.safariMobile = "?";
                break;
                case "text-align":
                $scope.chrome = "1.0";
                $scope.firefox = "1.0";
                $scope.iExplorer = "3.0";
                $scope.Opera = "3.5";
                $scope.safari = "1.0";
                $scope.android = "?";
                $scope.firefoxMobile = "?"
                $scope.iePhone = "?";
                $scope.operaMobile = "?";
                $scope.safariMobile = "?";
                break;
        }

    }
    $scope.def = function (property) {

        $scope.chrome = "--";
        $scope.firefox = "--";
        $scope.iExplorer = "--";
        $scope.Opera = "--";
        $scope.safari = "--";
        $scope.android = "--";
        $scope.firefoxMobile = "--"
        $scope.iePhone = "--";
        $scope.operaMobile = "--";
        $scope.safariMobile = "--";

    }


})