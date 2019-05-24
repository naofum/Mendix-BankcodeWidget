define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",

    "dojo/_base/lang",
    "BankcodeWidget/lib/jquery-1.11.2"


], function (declare, _WidgetBase, lang, _jQuery) {
    "use strict";

    var $ = _jQuery.noConflict(true);

    return declare("BankcodeWidget.widget.BankcodeWidget", [ _WidgetBase ], {


        // Internal variables.
        _handles: null,
        _contextObj: null,

//    autoLoad: false,
//    timeout: 1000,

        constructor: function () {
            this._handles = [];
        },

        postCreate: function () {
            logger.debug(this.id + ".postCreate");

        },

        update: function (obj, callback) {
            logger.debug(this.id + ".update");

//            var self = this;
//            window.bankauto_own = function() {
//                BK.pm[1]= {"bkc":$('.mx-name-' + this.bankcode + ' input').attr('id'),
//                           "bkn":$('.mx-name-' + this.bankname + ' input').attr('id'),
//                           "brc":$('.mx-name-' + this.branchcode + ' input').attr('id'),
//                           "brn":$('.mx-name-' + this.branchname + ' input').attr('id') };
//            }
            this._insertBankcode();

//            window.addEventListener('load', Bnk.uYd, true);
            var bkc = $('.mx-name-' + this.bankcode + ' input').attr('id');
            var bkn = $('.mx-name-' + this.bankname + ' input').attr('id');
            var brc = $('.mx-name-' + this.branchcode + ' input').attr('id');
            var brn = $('.mx-name-' + this.branchname + ' input').attr('id');
            setTimeout(function() {
                BK.pm[1]= {"bkc":bkc,
                           "bkn":bkn,
                           "brc":brc,
                           "brn":brn };
                Bnk.uYd();
                console.log(bkc);
                console.log(BK.pm[1]);
            }, 500);

            this._contextObj = obj;
            callback();
        },

        _insertBankcode: function () {
            logger.debug(this.id + "._insertBankcode");
            var a = document.createElement("script");
            var m = document.getElementsByTagName("script")[0];
            a.src = "/widgets/BankcodeWidget/lib/bankauto0.js";
            a.charset = "UTF-8";
            m.parentNode.insertBefore(a, m);

//            var c = document.createElement("script");
//            c.type = "text/javascript";
//            c.src = "/widgets/BankcodeWidget/lib/bankauto_0.js";
//            c.charset = "UTF-8";
//            document.body.appendChild(c)
        },

    });
});

require(["BankcodeWidget/widget/BankcodeWidget"]);
