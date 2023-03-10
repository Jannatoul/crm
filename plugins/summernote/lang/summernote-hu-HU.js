
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd)
    define([], factory);
  else {
    var a = factory();
    for (var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
  }
})(window, function () {
  return /******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
        /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
        /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
      /******/
}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
        /******/
}
      /******/
};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
      /******/
};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function (value, mode) {
/******/ 		if (mode & 1) value = __webpack_require__(value);
/******/ 		if (mode & 8) return value;
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
      /******/
};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
      /******/
};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
    /******/
})
/************************************************************************/
/******/({

/***/ 23:
/***/ (function (module, exports) {

        (function ($) {
          $.extend($.summernote.lang, {
            'hu-HU': {
              font: {
                bold: 'F??lk??v??r',
                italic: 'D??lt',
                underline: 'Al??h??zott',
                clear: 'Form??z??s t??rl??se',
                height: 'Sork??z',
                name: 'Bet??t??pus',
                strikethrough: '??th??zott',
                subscript: 'Subscript',
                superscript: 'Superscript',
                size: 'Bet??m??ret'
              },
              image: {
                image: 'K??p',
                insert: 'K??p besz??r??sa',
                resizeFull: '??tm??retez??s teljes m??retre',
                resizeHalf: '??tm??retez??s fel??re',
                resizeQuarter: '??tm??retez??s negyed??re',
                floatLeft: 'Igaz??t??s balra',
                floatRight: 'Igaz??t??s jobbra',
                floatNone: 'Igaz??t??s t??rl??se',
                shapeRounded: 'Shape: Rounded',
                shapeCircle: 'Shape: Circle',
                shapeThumbnail: 'Shape: Thumbnail',
                shapeNone: 'Shape: None',
                dragImageHere: 'Ide h??zhat k??pet vagy sz??veget',
                dropImage: 'Engedje el a k??pet vagy sz??veget',
                selectFromFiles: 'F??jlok kiv??laszt??sa',
                maximumFileSize: 'Maximum file size',
                maximumFileSizeError: 'Maximum file size exceeded.',
                url: 'K??p URL c??me',
                remove: 'K??p t??rl??se',
                original: 'Original'
              },
              video: {
                video: 'Vide??',
                videoLink: 'Vide?? hivatkoz??s',
                insert: 'Vide?? besz??r??sa',
                url: 'Vide?? URL c??me',
                providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion vagy Youku)'
              },
              link: {
                link: 'Hivatkoz??s',
                insert: 'Hivatkoz??s besz??r??sa',
                unlink: 'Hivatkoz??s megsz??ntet??se',
                edit: 'Szerkeszt??s',
                textToDisplay: 'Megjelen??tend?? sz??veg',
                url: 'Milyen URL c??mre hivatkozzon?',
                openInNewWindow: 'Megnyit??s ??j ablakban'
              },
              table: {
                table: 'T??bl??zat',
                addRowAbove: 'Add row above',
                addRowBelow: 'Add row below',
                addColLeft: 'Add column left',
                addColRight: 'Add column right',
                delRow: 'Delete row',
                delCol: 'Delete column',
                delTable: 'Delete table'
              },
              hr: {
                insert: 'Elv??laszt?? vonal besz??r??sa'
              },
              style: {
                style: 'St??lus',
                p: 'Norm??l',
                blockquote: 'Id??zet',
                pre: 'K??d',
                h1: 'Fejl??c 1',
                h2: 'Fejl??c 2',
                h3: 'Fejl??c 3',
                h4: 'Fejl??c 4',
                h5: 'Fejl??c 5',
                h6: 'Fejl??c 6'
              },
              lists: {
                unordered: 'Listajeles lista',
                ordered: 'Sz??mozott lista'
              },
              options: {
                help: 'S??g??',
                fullscreen: 'Teljes k??perny??',
                codeview: 'K??d n??zet'
              },
              paragraph: {
                paragraph: 'Bekezd??s',
                outdent: 'Beh??z??s cs??kkent??se',
                indent: 'Beh??z??s n??vel??se',
                left: 'Igaz??t??s balra',
                center: 'Igaz??t??s k??z??pre',
                right: 'Igaz??t??s jobbra',
                justify: 'Sorkiz??rt'
              },
              color: {
                recent: 'Jelenlegi sz??n',
                more: 'Tov??bbi sz??nek',
                background: 'H??tt??rsz??n',
                foreground: 'Bet??sz??n',
                transparent: '??tl??tsz??',
                setTransparent: '??tl??sz??s??g be??ll??t??sa',
                reset: 'Vissza??ll??t??s',
                resetToDefault: 'Alaphelyzetbe ??ll??t??s'
              },
              shortcut: {
                shortcuts: 'Gyorsbillenty??',
                close: 'Bez??r??s',
                textFormatting: 'Sz??veg form??z??sa',
                action: 'M??velet',
                paragraphFormatting: 'Bekezd??s form??z??sa',
                documentStyle: 'Dokumentumst??lus',
                extraKeys: 'Extra keys'
              },
              help: {
                'insertParagraph': '??j bekezd??s',
                'undo': 'Visszavon??s',
                'redo': '??jra',
                'tab': 'Beh??z??s n??vel??se',
                'untab': 'Beh??z??s cs??kkent??se',
                'bold': 'F??lk??v??rre ??ll??t??s',
                'italic': 'D??ltre ??ll??t??s',
                'underline': 'Al??h??z??s',
                'strikethrough': '??th??z??s',
                'removeFormat': 'Form??z??s t??rl??se',
                'justifyLeft': 'Balra igaz??t??s',
                'justifyCenter': 'K??z??pre igaz??t??s',
                'justifyRight': 'Jobbra igaz??t??s',
                'justifyFull': 'Sorkiz??rt',
                'insertUnorderedList': 'Sz??mozatlan lista be/ki',
                'insertOrderedList': 'Sz??mozott lista be/ki',
                'outdent': 'Jelenlegi bekezd??s beh??z??s??nak megsz??ntet??se',
                'indent': 'Jelenlegi bekezd??s beh??z??sa',
                'formatPara': 'Blokk form??z??sa bekezd??sk??nt (P tag)',
                'formatH1': 'Blokk form??z??sa, mint Fejl??c 1',
                'formatH2': 'Blokk form??z??sa, mint Fejl??c 2',
                'formatH3': 'Blokk form??z??sa, mint Fejl??c 3',
                'formatH4': 'Blokk form??z??sa, mint Fejl??c 4',
                'formatH5': 'Blokk form??z??sa, mint Fejl??c 5',
                'formatH6': 'Blokk form??z??sa, mint Fejl??c 6',
                'insertHorizontalRule': 'V??zszintes vonal besz??r??sa',
                'linkDialog.show': 'Link p??rbesz??dablak megjelen??t??se'
              },
              history: {
                undo: 'Visszavon??s',
                redo: '??jra'
              },
              specialChar: {
                specialChar: 'SPECIAL CHARACTERS',
                select: 'Select Special characters'
              }
            }
          });
        })(jQuery);

        /***/
})

    /******/
});
});