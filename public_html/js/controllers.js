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
            case "hyphens":
                $scope.chrome = "13-webkit";
                $scope.firefox = "6.0-moz/43";
                $scope.iExplorer = "10.0-ms";
                $scope.Opera = "--";
                $scope.safari = "5.1-webkit";
                $scope.android = "4.0-webkit";
                $scope.firefoxMobile = "6.0-moz/43"
                $scope.iePhone = "--";
                $scope.operaMobile = "--";
                $scope.safariMobile = "4.2-webkit";
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

    $scope.taTitle = "The text-align CSS property describes how inline content like text is aligned in its parent block element. text-align does not control the alignment of block elements itself, only their inline content."
    $scope.tiTitle = "The text-indent property specifies how much horizontal space should be left before the beginning of the first line of the text content of an element.";
    $scope.tdTitle = "The text-decoration CSS property is used to set the text formatting to underline, overline, line-through or blink. Underline and overline decorations are positioned under the text, line-through over it.";
    $scope.ttTitle = "The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized.";
    $scope.wsTitle = {
        main: "The white-space property is used to describe how whitespace inside the element is handled.",
        normal: "Sequences of whitespace are collapsed. Newline characters in the source are handled as other whitespace. Breaks lines as necessary to fill line boxes.",
        nowrap: "Collapses whitespace as for normal, but suppresses line breaks (text wrapping) within text.",
        pre: "Sequences of whitespace are preserved, lines are only broken at newline characters in the source and at <br> elements.",
        preWrap: "Sequences of whitespace are preserved. Lines are broken at newline characters, at <br>, and as necessary to fill line boxes.",
        preLine: "Sequences of whitespace are collapsed. Lines are broken at newline characters, at <br>, and as necessary to fill line boxes"

    }
    $scope.wbTitle = "The word-break CSS property is used to specify whether to break lines within words.";
    $scope.wspTitle = "The word-spacing CSS property specifies the spacing behavior between tags and words.";
    $scope.wwTitle = "The word-wrap property is used to specify whether or not the browser may break lines within words in order to prevent overflow when an otherwise unbreakable string is too long to fit in its containing box.";
    $scope.lsTitle = "The letter-spacing CSS property specifies spacing behavior between text characters.";
    $scope.lhTitle = "On block level elements, the line-height property specifies the minimum height of line boxes within the element.\n\
On non-replaced inline elements, line-height specifies the height that is used to calculate line box height. On replaced inline elements such as buttons or other input elements, line-height has no effect. [1]";
    $scope.hyTitle = {
        main: "The hyphens CSS property tells the browser how to hyphenate words when line-wrapping. You can prevent hyphenation entirely, control when the browser should hyphenate, or let the browser control when to hyphenate.\n\
Hyphenation rules are language-specific. In HTML, the language is determined by the lang attribute, and browsers will hyphenate only if this attribute is present and if an appropriate hyphenation dictionary is available. ",
        none: "Words are not broken at line breaks, even if characters inside the words suggest line break points. Lines will only wrap at whitespace.",
        manual: "Words are broken for line-wrapping only where characters inside the word suggest line break opportunities.",
        auto: "The browser is free to automatically break words at appropriate hyphenation points, following whatever rules it chooses to use."
    };

    $scope.taLast = {
        main: "The text-align-last CSS property describes how the last line of a block or a line, right before a forced line break, is aligned.",
        auto: "The affected line is aligned per the value of text-align, unless text-align is justify, in which case the effect is the same as setting text-align-last to left.",
        start: "The same as left if direction is left-to-right and right if direction is right-to-left.",
        end: "The same as right if direction is left-to-right and left if direction is right-to-left.",
        left: "The inline contents are aligned to the left edge of the line box.",
        right: "The inline contents are aligned to the right edge of the line box.",
        center: "The inline contents are centered within the line box",
        justify: "The text is justified. Text should line up their left and right edges to the left and right content edges of the paragraph."
    }
    $scope.tsTitle = {
        main: "The text-shadow property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and text-decorations of the element.\n\
Each shadow is specified as an offset from the text, along with optional color and blur radius values.\n\
Multiple shadows are applied front-to-back, with the first-specified shadow on top.",
        color: "Optional. Can be specified either before or after the offset values. If the color is not specified, a UA-chosen color will be used. ",
        offsetXY: "Required. These <length> values specify the shadow's offset from the text. <offset-x> specifies the horizontal distance; a negative value places the shadow to the left of the text. <offset-y> specifies the vertical distance; a negative value places the shadow above the text. If both values are 0, then the shadow is placed behind the text (and may generate a blur effect when <blur-radius> is set).",
        blurRadius: "Optional. This is a <length> value. If not specified, it defaults to 0. The higher this value, the bigger the blur; the shadow becomes wider and lighter.",
    }

})