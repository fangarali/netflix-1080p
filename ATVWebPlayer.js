! function t(e, i, n) {
    function r(s, a) {
        if (!i[s]) {
            if (!e[s]) {
                var l = "function" == typeof require && require;
                if (!a && l) return l(s, !0);
                if (o) return o(s, !0);
                var c = new Error("Cannot find module '" + s + "'");
                throw (c.code = "MODULE_NOT_FOUND", c)
            }
            var u = i[s] = {
                exports: {}
            };
            e[s][0].call(u.exports, function(t) {
                var i = e[s][1][t];
                return r(i ? i : t)
            }, u, u.exports, t, e, i, n)
        }
        return i[s].exports
    }
    for (var o = "function" == typeof require && require, s = 0; s < n.length; s++) r(n[s]);
    return r
}({
    1: [function(t, e, i) {
        e.exports = {
            genericError: {
                title: "Video Error",
                description: 'We're experiencing a problem playing this video. Please try again. For further assistance, <a href="//{{contactUsDigitalUrl}}" target="_blank">contact Amazon Customer Service</a>.'
            },
            genericUnsupportedBrowser: {
                title: "Unsupported Browser",
                description: "This web browser isn't compatible with Prime Video. Please use one of the following web browsers: <ul> <li>Chrome (latest version)</li> <li>Firefox (latest version)</li> <li>Microsoft Edge (version 15 or newer)</li> <li>Internet Explorer (version 10 or newer)</li> <li>Apple Safari (latest version)</li> <li>Opera (latest version)</li> </ul>",
                footer: 'For more information, please see <a href="//{{systemRequirementsUrl}}" target="_blank">Prime Video system requirements</a>.'
            },
            linuxUnsupportedBrowser: {
                title: "Unsupported Browser",
                description: "This web browser isn't compatible with Prime Video. Please use one of the following web browsers: <ul> <li>Chrome (latest version)</li> </ul>",
                footer: 'For more information, please see <a href="//{{systemRequirementsUrl}}" target="_blank">Prime Video system requirements</a>.'
            },
            macUnsupportedBrowser: {
                title: "Unsupported Browser",
                description: "This web browser isn't compatible with Prime Video. Please use one of the following web browsers: <ul> <li>Chrome (latest version)</li> <li>Firefox (latest version)</li> <li>Safari (latest version)</li> <li>Opera (latest version)</li> </ul>",
                footer: 'For more information, please see <a href="//{{systemRequirementsUrl}}" target="_blank">Prime Video system requirements</a>.'
            },
            macLessThan10_9UnsupportedBrowser: {
                title: "Unsupported Browser",
                description: "This web browser isn't compatible with Prime Video. Please use one of the following web browsers: <ul> <li>Safari</li> </ul>",
                footer: 'For more information, please see <a href="//{{systemRequirementsUrl}}" target="_blank">Prime Video system requirements</a>.'
            },
            chromeIos10NotSupported: {
                title: "Unsupported Browser",
                description: "Chrome on iOS 10 is currently not supported. Please try again using Safari."
            },
            windowsUnsupportedBrowser: {
                title: "Unsupported Browser",
                description: "This web browser isn't compatible with Prime Video. Please use one of the following web browsers: <ul> <li>Chrome (latest version)</li> <li>Firefox (latest version)</li> <li>Microsoft Edge (version 15 or newer)</li> <li>Internet Explorer (version 10 or newer)</li> <li>Opera (latest version)</li> </ul>",
                footer: 'For more information, please see <a href="//{{systemRequirementsUrl}}" target="_blank">Prime Video system requirements</a>.'
            },
            genericUnsupportedOs: {
                title: "Unsupported Operating System",
                description: 'Prime Video titles can't be watched on this device because the operating system isn't supported. For more information, please see <a href="//{{systemRequirementsUrl}}" target="_blank">Prime Video system requirements</a>.'
            },
            firefoxOutOfDate: {
                title: "Mozilla Firefox Update Required",
                description: "A later version of Mozilla Firefox is required for Prime Video. To update, click the menu button (three horizontal stripes) on the web browser toolbar, click <b>About Firefox</b>, and then click <b>Restart to update Firefox</b>.",
                footer: 'For more information, please see <a href="//{{systemRequirementsUrl}}" target="_blank">Prime Video system requirements</a>.'
            },
            chromeOutOfDate: {
                title: "Google Chrome Update Required",
                description: "A later version of Google Chrome is required for Prime Video. To update, click the Chrome menu (three horizontal stripes) on the browser toolbar, click <b>About Google Chrome</b>, and then click <b>Relaunch</b>.",
                footer: 'For more information, please see <a href="//{{systemRequirementsUrl}}" target="_blank">Prime Video system requirements</a>.'
            },
            operaOutOfDate: {
                title: "Opera Update Required",
                description: "A later version of Opera is required for Prime Video. To check for updates, click the <b>Opera</b> menu, click <b>About Opera</b>, and then click <b>Relaunch Now</b>.",
                footer: 'For more information, please see <a href="//{{systemRequirementsUrl}}" target="_blank">Prime Video system requirements</a>.'
            },
            firefoxMissingCdm: {
                title: "Digital Rights Error",
                description: "Your web browser is missing a digital rights component.<br/><br/> In your web browser's address bar, type <b>about:addons</b>, press Enter, and then on the left, click <b>Plugins</b>. For the <b>Widevine Content Decryption Module</b>, select <b>Always Activate</b>, and then refresh the video's page and try watching the video.<br/><br/> If the video doesn't play, go back to <b>Plugins</b>, click the gear icon at the top of the page, and then click <b>Check for Updates</b>. When the plugins have updated, refresh the video's page, and then try watching the video.<br/><br/>",
                footer: 'For further assistance, please contact Amazon Customer Service at <a href="//{{videoHelpUrl}}" target="_blank">{{videoHelpUrl}}</a> and refer to error 7235.'
            },
            chromeMissingCdm: {
                title: "Digital Rights Error",
                description: "Your web browser is missing a digital rights component. Go to <b>chrome://components</b> and under <b>WidevineCdm</b>, click <b>Check for update</b>.",
                footer: 'For further assistance, please contact Amazon Customer Service at <a href="//{{videoHelpUrl}}" target="_blank">{{videoHelpUrl}}</a> and refer to error 7235.'
            },
            androidMissingCdm: {
                title: "Protected Content Error",
                description: "To watch protected content, in the top right of Chrome, click the three dots icon, and then tap <b>Settings</b> > <b>Site settings</b> > <b>Protected content</b>. Under <b>Blocked</b>, tap <b>Amazon.com</b> > <b>Clear and Reset</b>. Refresh or reload the video's detail page, and then tap <b>Watch Now</b>.",
                footer: 'For further assistance, please contact Amazon Customer Service at <a href="//{{videoHelpUrl}}" target="_blank">{{videoHelpUrl}}</a> and refer to error 7218.'
            },
            operaMissingCdm: {
                title: "Digital Rights Error",
                description: "Your web browser is missing a digital rights component. In the address bar, go to <b>opera://plugins</b> and ensure <b>Widevine Content Decryption Module</b> is enabled.",
                footer: 'For further assistance, please contact Amazon Customer Service at <a href="//{{videoHelpUrl}}" target="_blank">{{videoHelpUrl}}</a> and refer to error 7235.'
            },
            pinLookupError: {
                title: "PIN Lookup Problem",
                description: 'We're having a problem checking your account's PIN restrictions which is preventing your video from playing. Please try again later, or you can <a href="//{{avSettingsUrl}}" target="_blank">turn off PIN restrictions</a> to watch your video immediately.'
            },
            pinLookupErrorFsk18: {
                title: "PIN Lookup Problem",
                description: "We're having a problem checking your account's PIN restrictions which is preventing your video from playing. Please try again later. If this problem continues, contact Amazon Customer Service and refer to error 5016."
            },
            pinValidationError: {
                title: "PIN Validation Problem",
                description: 'We're having a problem validating your PIN. Please try again. If this problem continues, please <a href="//{{contactUsOrdersUrl}}" target="_blank">contact Amazon Customer Service</a> and refer to error 5014.'
            },
            pinModal: {
                cancelButton: "Cancel",
                submitButton: "Continue",
                title: "Viewing Restrictions Enabled",
                description: "Please enter your Prime Video PIN:",
                notes: '<a href="//{{resetPinUrl}}" target="_blank">Reset your PIN</a> or <a href="//{{avSettingsUrl}}" target="_blank">change viewing restrictions</a>',
                incorrectPin: 'We don't recognize the PIN you entered. Please try again or <a href="//{{resetPinUrl}}" target="_blank">reset your PIN.</a>'
            },
            pinSetupRequired: {
                title: "Viewing Restrictions Enabled",
                description: 'To view this video, a PIN is required. To update your PIN, go to the Prime Video <a href="//{{setupPinUrl}}" target="_blank">Settings page</a>.'
            },
            pinAgeVerificationRequired: {
                title: "Viewing Restrictions Enabled",
                description: "To view this video, age verification is required."
            },
            silverlightInstall: {
                title: "Microsoft Silverlight is not installed",
                description: "Install the free Silverlight plug-in; it will just take a minute. Please refresh this page when the installation completes. <p> If you have issues after installing, restart your browser and try again. If the issue persists, try using our new HTML5 video player on Chrome, Internet Explorer 11 on Windows 8.1 or later, Microsoft Edge or Opera. </p>",
                button: '<a href="http://go2.microsoft.com/fwlink/?LinkID=149156" target="_blank">Install Silverlight</a>',
                footer: 'Already installed Silverlight? <a target="_blank" href="//{{videoIssuesUrl}}">Get Silverlight plug-in help</a>.'
            },
            silverlightInstallSafari: {
                title: "Microsoft Silverlight not installed or enabled",
                description: '<b>To install:</b> Install for free by tapping <b><a href="http://go2.microsoft.com/fwlink/?LinkID=149156" target="_blank">Install Silverlight</a></b>. Refresh this page when installation completes.<br/><br/> <b>To enable:</b> In Safari preferences, <b>Security</b> > <b>Plugins</b> > <b>Silverlight</b>, select <b>Enable</b> and then refresh this page.<br/><br/> If it still doesn't work, we recommend using the HTML5 video player for better performance and more features. The HTML5 video player is available in Chrome, Internet Explorer 11 on Windows 8.1 and later, Edge or Opera.',
                footer: 'Already installed Silverlight? <a target="_blank" href="//{{videoIssuesUrl}}">Get Silverlight plug-in help</a>.'
            },
            silverlightUpgrade: {
                title: "Your Microsoft Silverlight is out of date",
                description: "Upgrade your Silverlight plug-in&mdash;it will just take a minute.",
                button: '<a href="http://go2.microsoft.com/fwlink/?LinkID=149156" target="_blank">Install Silverlight</a>',
                footer: 'If you're experiencing problems with Silverlight, please see our <a target="_blank" href="//{{videoIssuesUrl}}">troubleshooting tips</a>.'
            },
            silverlightActiveX: {
                title: "ActiveX Not Enabled",
                description: "To watch your video in Internet Explorer, ActiveX controls must be enabled.",
                steps: ["In Internet Explorer, press the <b>Alt</b> key, and then on <b>Tools</b> menu, click <b>Internet options</b>.", "On the <b>Security</b> tab, click <b>Custom level</b>.", "Scroll down to the <b>ActiveX controls and plug-ins</b> section.", "Click <b>Enable</b> for <b>Run ActiveX controls and plug-ins</b> and <b>Script ActiveX controls marked safe for scripting</b>.", "Click <b>OK</b>, and then restart Internet Explorer."],
                footer: 'For further assistance, <a href="//{{contactUsDigitalUrl}}" target="_blank">contact Amazon Customer Service</a>.'
            },
            silverlightCorruptionWindows: {
                title: "Silverlight Problem",
                description: "There's a problem with the installation of Microsoft Silverlight on your computer. Microsoft provides a tool that can often fix this problem.",
                fixItToolSteps: ['<a href="https://download.microsoft.com/download/6/C/9/6C970550-32AB-4235-9CDD-7FC9DD848BBB/silverlight.diagcab" target="_blank">Run the Fix It tool</a>', "After the tool has completed, refresh this page."],
                manualRepairSteps: {
                    preLinkText: "If the Microsoft Fix It tool fails to fix the problem, try the ",
                    linkText: "Manual Repair Steps",
                    postLinkText: ".",
                    steps: ["Close all web browser windows, including this one.", "Click the Start button, type <b>Uninstall a program</b>, and then press <b>Enter</b>.<br/> Windows 8: Swipe in from the right edge of the screen, then tap <b>Settings</b>. You can also press Windows key+I. Select <b>Control Panel</b>, and then select <b>Uninstall a program</b>.", "Click <b>Microsoft Silverlight</b>, and then click <b>Uninstall</b>.", "Return to this page to install Silverlight."]
                },
                footer: 'For further assistance, <a href="//{{contactUsDigitalUrl}}" target="_blank">contact Amazon Customer Service</a>.'
            },
            silverlightCorruptionMac: {
                title: "Silverlight Problem",
                description: "There's a problem with the installation of Microsoft Silverlight on your computer. Often, this can be fixed by uninstalling, and then reinstalling Silverlight.",
                steps: ["Close all web browser windows, including this one.", "Click on the Desktop, or open Finder.", 'Click <span class="highlight">Go > Computer</span>.', 'Double-click <span class="highlight">Macintosh HD > Library > Internet Plugins</span>.', 'Drag <span class="highlight">Silverlight.plugin</span> to the Trash.', "Return to this page to install Silverlight."],
                footer: 'For further assistance, <a href="//{{contactUsDigitalUrl}}" target="_blank">contact Amazon Customer Service</a>.'
            },
            notification: {
                showMore: "Show More",
                showLess: "Show Less",
                dismiss: "Dismiss",
                dontShowAgain: "Don't show again"
            },
            silverlightBlocked: {
                message: "The Silverlight plugin isn't loading and might be blocked by your browser.",
                chromeUnblock: 'To enable Silverlight, click this icon <span class="chromePluginBlockerIcon"></span> inside the right edge of the address bar, select <b>"Always allow plug-ins on www.amazon.com"</b>, and then click <b>"Done"</b>.',
                troubleshoot: 'Please see the <a href="//{{videoIssuesUrl}}" target="_blank">Amazon website</a> for additional troubleshooting help. Error: 7303.'
            },
            silverlightBlockedSafari10: 'Silverlight is disabled by default in this version of Safari. To re-enable and watch Prime Video, click <b>Use Silverlight</b>.<br/><br/> If Silverlight isn't installed on your Mac, click <b>Missing Plugin</b>, and then click <b>More Info</b> to go to the Silverlight installation page.<br/><br/> For additional troubleshooting help, go to the <a href="//{{videoIssuesUrl}}" target="_blank">Amazon website</a>. Error: 7304',
            silverlightForcedNarratives: "The Silverlight player doesn't support forced narratives. Subtitles will be automatically enabled. Forced narratives translate dialogue or text that doesn't match the primary language of the video. For example, a scene with sailors speaking Russian, but the video is for English audiences.",
            updateChrome: {
                title: "Chrome Update Available",
                message: "An updated version of Chrome is available which enables an improved HTML5 video web player.",
                instructions: "To update, click the Chrome menu (three horizontal stripes) on the browser toolbar, click <b>About Google Chrome</b>, and then click <b>Relaunch</b>."
            },
            safariBetterWatchExperience: "For the best streaming experience, we recommend using Chrome or Edge.",
            switchToHtml5: "For more features and less buffering, we recommend using the HTML5 video player on Google Chrome, Internet Explorer 11 on Windows 8.1 or later, Microsoft Edge, Firefox 60 or later, or Opera.",
            updateFirefox: 'Update to <a href="https://support.mozilla.org/kb/update-firefox-latest-version" target="_blank">Firefox 60</a> or later to access our HTML5 video player with better performance and features like X-Ray, Auto-play, Live streaming, and more.',
            SilverlightUnsupportedFeatureError: {
                title: "Video Unavailable",
                description: 'This video requires an HTML5 video player which provides a better viewing experience and more features. <a href="//{{systemRequirementsUrl}}" target="_blank">Learn more</a> about web browsers that support the HTML5 player and the benefits.'
            }
        }
    }, {}],
    2: [function(t, e, i) {
        "use strict";

        function n(t, e, i) {
            i = a.isNullOrUndefined(i) ? "" : "?ref=" + i, l.chain(t).keys().forEach(function(e) {
                t[e] += i
            });
            for (var n = 0, r = c; n < r.length; n++) {
                var o = r[n];
                t[o] = u[e] + i
            }
            return t
        }
        var r = t(80),
            o = r.AmazonFQDN,
            s = r.MarketplaceID,
            a = t(93),
            l = t(294),
            c = [s.ROE_EU, s.ROW_EU, s.ROW_FE, s.ROW_NA, o.PRIME_VIDEO],
            u = {
                contactUs: "/help/contact-us",
                devicesAndFeatures: "/help?nodeId=202064920",
                pin: "/settings/parental-controls",
                systemRequirements: "/help?nodeId=202064950",
                videoHelp: "/help",
                videoIssues: "/help?nodeId=202065190"
            },
            p = {
                CONTACT_US_DIGITAL: n({
                    "*": "/gp/help/contact-us/digital-video.html"
                }, "contactUs", "aiv_ply_sl_gen_err_help"),
                CONTACT_US_ORDERS: n({
                    "*": "/gp/help/customer/contact-us"
                }, "contactUs"),
                SYSTEM_REQUIREMENTS: n({
                    "*": "/gp/help/customer/display.html?nodeId=201422810"
                }, "systemRequirements"),
                VIDEO_ISSUES: n({
                    "*": "/gp/help/customer/display.html?nodeId=201460940"
                }, "videoIssues"),
                AV_SETTINGS: n({
                    "*": "/pin"
                }, "pin", "dp_pct_pin_chg"),
                RESET_PIN: n({
                    "*": "/pin"
                }, "pin", "dp_pct_pin_forg"),
                VIDEO_HELP: n({
                    "*": "/videohelp"
                }, "videoHelp"),
                SETUP_PIN: n({
                    "*": "/pin"
                }, "pin"),
                DEVICES_AND_FEATURES: n({
                    "*": "/gp/help/customer/display.html?nodeId=201460880"
                }, "devicesAndFeatures")
            };
        e.exports = p
    }, {
        294: 294,
        80: 80,
        93: 93
    }],
    3: [function(t, e, i) {
        "use strict";
        var n = t(187),
            r = t(80),
            o = r.PartnerServiceEndpoint,
            s = r.StorageKeys,
            a = r.Weblabs,
            l = r.WeblabTreatment,
            c = t(116),
            u = c.BasicStore,
            p = t(231),
            h = p.AbortedEvent,
            f = p.AbortEvent,
            d = p.AsinChangedEvent,
            y = p.CachePriority,
            g = p.CloseEvent,
            m = p.DiagnosticsState,
            v = p.DiagnosticsProtocol,
            E = p.EndOfContentEvent,
            _ = p.ErrorSeverity,
            S = p.Features,
            T = p.InitializedEvent,
            b = p.NotificationCancelEvent,
            w = p.NotificationEvent,
            I = p.PINAcceptedEvent,
            R = p.PINErrorEvent,
            C = p.PINRequiredEvent,
            P = p.PlayerCapabilitiesEvent,
            A = p.PlayingEvent,
            O = p.PreparedEvent,
            N = p.StoppingEvent,
            x = p.VideoType,
            M = t(232),
            k = t(243),
            L = k.Reporter,
            D = t(272),
            U = D.BrowserType,
            F = t(186),
            W = F.Locales,
            H = F.LocalizationStore,
            B = t(82),
            V = t(83),
            q = t(113),
            j = q.AmazonUrlCreator,
            z = q.CookieStorage,
            G = q.EnumUtils,
            Y = q.LocalStorage,
            K = q.SessionStorage,
            X = q.ResourceAcquirer,
            Q = t(126),
            J = t(93),
            Z = t(284),
            $ = t(281),
            tt = t(294),
            et = t(24),
            it = t(286),
            nt = t(288),
            rt = t(30),
            ot = t(34),
            st = t(36),
            at = t(33),
            lt = t(29),
            ct = t(41),
            ut = t(18),
            pt = t(19),
            ht = t(20),
            ft = t(21),
            dt = t(22),
            yt = t(32),
            gt = t(17),
            mt = t(6),
            vt = t(25),
            Et = t(2),
            _t = t(16),
            St = t(1),
            Tt = $.of("DelegatingWebPlayer"),
            bt = Z.get("DelegatingWebPlayer"),
            wt = "playerBeta",
            It = function() {
                function t(e, i, n, r, o, s, a, l, c, p, h, f, d, y, g, m, v, E, S, b, w) {
                    void 0 === n && (n = new L), void 0 === r && (r = new rt), void 0 === o && (o = new X), void 0 === s && (s = new at), void 0 === a && (a = new st), void 0 === l && (l = new ct), void 0 === c && (c = new _t), void 0 === p && (p = new K), void 0 === h && (h = new z), void 0 === f && (f = tt.now), void 0 === d && (d = window.navigator), void 0 === y && (y = window.location), void 0 === g && (g = new mt), void 0 === m && (m = new ot), void 0 === v && (v = new Y), void 0 === E && (E = W), void 0 === S && (S = H), void 0 === b && (b = u), void 0 === w && (w = Q.getInstance());
                    var I = this;
                    this.featureConfig = null, this.playerCacheEnabled = !0, this.onPlayerCreated = function(e, i) {
                        try {
                            I.webPlayerFactory = e, I.webPlayer = i, I.attachEventListeners(I.webPlayer), I.tryNotifyPlaybackInitiated(), I.pinDisplayManager.initialize(I.webPlayer, I.eventEmitter, I.uiElement, I.localizationStore, I.amazonUrlCreator, function() {
                                I.onClosePlayerClicked()
                            });
                            var n = et(!0, I.playerConfig, {
                                domElement: I.playerElement
                            });
                            I.webPlayer.once(T, function() {
                                I.spinnerPanel = null, I.fsm.transitionTo(gt.INITIALIZED), I.eventEmitter.emit(T)
                            }), I.initializeTimer.end(), I.webPlayer.initialize(n)
                        } catch (e) {
                            bt.error(e), I.abort(t.UNHANDLED_INITIALIZE_ERROR, e.message, _.Fatal)
                        }
                    }, this.abort = function(t, e, i, n) {
                        J.isNullOrUndefined(I.playerCapabilities) && (I.playerCapabilities = {
                            supportsDrm: !1,
                            supportsNativePlayback: !1,
                            supportsWebPlayback: !1,
                            supportsAVOD: !1,
                            supportsMidStreamMTA: !1,
                            supportsHDMovies: !0,
                            supportsHDTVShows: !1,
                            supportsLive: !1
                        }, I.eventEmitter.emit(P, new P(I.getPlayerCapabilities()))), I.reportFatalError(t, e, i), I.showErrorMessage(n, t), bt.error("The player has terminated due to a Fatal error: " + t + ": " + e), I.reporter.flush(), I.qosReporter.flush(), I.transitionToAborted()
                    }, this.onNotificationEvent = function(t) {
                        I.notificationManager.addNotification(t, !1)
                    }, this.onNotificationCancelEvent = function(t) {
                        I.notificationManager.cancelNotification(t.getNotification())
                    }, this.fsm = this.createFiniteStateMachine(), this.loaderConfig = e, this.flagManager = c, this.sessionStorage = p, this.cookieStorage = h, this.localStorage = v, this.localesRef = E, this.hasPlaybackInitiated = !1, this.notifyPlaybackInitiatedOnInitialized = !1, this.sortedPlayerFactories = i, this.reporter = n, this.reporter.preInitializeLogging(), this.errorDisplayManager = r, this.resourceAcquirer = o, this.notificationManager = s, this.qosReporter = a, this.spinnerPanel = l, this.now = f, this.navigator = d, this.locationRef = y, this.initializePipeline = g, this.deviceInformation = w, this.eventEmitter = new B.BasicEventEmitter, this.pinDisplayManager = m, this.webPlayer = null, this.webPlayerFactory = null, this.localizationStoreType = S, this.configurationStore = new b
                }
                return (t.prototype.getState = function() {
                    return this.fsm.getCurrentState()
                }, t.prototype.initialize = function(e) {
                    var i = this;
                    if (Tt(e, "playerConfig").is.an.object(), Tt(tt.isElement(e.domElement), "playerConfig.domElement has to be a dom element").is["true"](), Tt(e.marketplaceId, "playerConfig.marketplaceId").is.a.string(), Tt(e.marketplaceId, "playerConfig.marketplaceId").is.not.empty(), !this.fsm.transitionTo(gt.INITIALIZING)) throw new Error("Unable to initialize player while in the " + gt[this.fsm.getCurrentState()] + " state");
                    this.initializeTimer = n.startTimer(t.INITIALIZE_TIME), this.webPlayerFactory = null;
                    var r = this.sanitizePlayerConfig(e);
                    J.isNullOrUndefined(r.deviceId) && (r.deviceId = this.createDeviceId(r.customerId));
                    var s = this.flagManager.isActiveFlag(_t.HTML5_DIAGNOSTICS_STORAGE_KEY),
                        c = s ? m.Enabled : m.Disabled,
                        u = M.getParameter(t.PLAYER_DEBUG_QUERY_PARAM);
                    J.exists(u) && (c = J.withDefault(m[u], c)), this.diagnosticsSessionConfiguration = this.createDiagnosticsConfig();
                    var p = this.flagManager.isActiveFlag(_t.HTML5_HEVC_TEST_STORAGE_KEY),
                        h = M.getParameter(t.PLAYER_CACHE_QUERY_PARAM);
                    null !== h && (this.playerCacheEnabled = h);
                    var f = this.getStoredOverrides(),
                        d = J.nestedValue(f, "userWatchSessionId", nt.v4());
                    this.configurationStore.setValue({
                        userWatchSessionId: d,
                        primitiveSessionId: d + this.now(),
                        diagnosticsSessionConfiguration: this.diagnosticsSessionConfiguration
                    }).commit(), this.playerConfig = et(!0, {
                        loaderConfig: this.loaderConfig,
                        partnerServiceEndpoint: o.fromMarketplaceId(r.marketplaceId),
                        locale: W.EN_US,
                        diagnostics: c,
                        enableAvod: !0,
                        enableHEVC: p,
                        sessionId: this.cookieStorage.get(t.SESSION_ID_KEY),
                        tokenClient: null,
                        clientId: null,
                        configurationStore: this.configurationStore
                    }, r);
                    var y = [W.EN_US, this.localesRef.getLocaleFromMarketplaceId(this.playerConfig.marketplaceId), this.localesRef.getClosestLocale(this.playerConfig.locale, [W.EN_US, W.EN_GB, W.ES_ES, W.DE_DE, W.JA_JP, W.FR_FR, W.IT_IT, W.JA_JP, W.NL_NL, W.PT_BR, W.DA_DK, W.NB_NO, W.PL_PL, W.SV_SE, W.HI_IN, W.TA_IN, W.TE_IN, W.ZH_TW, W.ZH_CN]), this.localesRef.getStandardizedLocale(this.playerConfig.locale)];
                    this.playerConfig.locale = tt.reduce(y, function(t, e) {
                        return J.withDefault(e, t)
                    });
                    var g = {},
                        v = M.getParameter(wt),
                        E = tt.isBoolean(v) ? v : r.playerBeta;
                    if (J.exists(f.weblabs)) {
                        var S = tt.map(f.weblabs.split("&"), function(t) {
                            return t.split(":")
                        });
                        tt.each(S, function(t) {
                            var e = t[1];
                            tt.isString(e) && (g[t[0]] = "C" === e ? null : l[e])
                        })
                    }
                    this.featureConfig = et(!0, t.DEFAULT_FEATURE_CONFIG, this.playerConfig.features), this.qosReporter.reportInformation(t.CLIENT_ID, J.exists(this.playerConfig.clientId) ? this.playerConfig.clientId : "NONE"), bt.info("Using web player version " + this.loaderConfig.dependencies.ATVWebPlayer.version), bt.info("Player config parameter:", e), bt.info("Final player config:", this.playerConfig), bt.info("User Agent: " + this.navigator.userAgent), bt.info("Detected operating system: " + this.deviceInformation.operatingSystem), bt.info("Detected browser: " + this.deviceInformation.browser), bt.info("Page URL: " + (tt.isUndefined(this.locationRef) ? "" : this.locationRef.href)), this.createHTMLElements();
                    var T = this.loaderConfig.assetsRoot + "/" + this.loaderConfig.dependencies.ATVWebPlayer.name + "/" + this.loaderConfig.dependencies.ATVWebPlayer.version + "/" + t.CSS_ASSET_PATH;
                    document.querySelector("link[href='" + T + "']") || this.resourceAcquirer.acquire(T), this.localizationStore = this.createLocalizationStore(), this.amazonUrlCreator = new j(this.playerConfig.marketplaceId, Et), this.localizationStore.setLanguage(W.EN_US, function() {}, function() {}), this.notificationManager.initialize(this.playerElementWrapper, this.playerElement, this.localizationStore, this.amazonUrlCreator), this.errorDisplayManager.initialize(this.uiElement, this.localizationStore, this.amazonUrlCreator, function() {
                        i.onClosePlayerClicked()
                    });
                    try {
                        this.initializePipeline.on(vt, this.onNotificationEvent), this.initializePipeline.initialize({
                            onPlayerCapabilities: function(t) {
                                i.playerCapabilities = t, i.eventEmitter.emit(P, new P(t))
                            },
                            authToken: r.authToken,
                            loaderConfig: this.loaderConfig,
                            playerFactories: this.sortedPlayerFactories,
                            playerElement: this.playerElement,
                            weblabNames: a.getActiveWeblabs(),
                            weblabOverrides: g,
                            playerBeta: E,
                            playerCacheEnabled: this.playerCacheEnabled,
                            playerConfig: this.playerConfig,
                            playerOverride: J.nestedValue(f, "playerOverride"),
                            qosReporter: this.qosReporter,
                            reporter: this.reporter,
                            spinnerPanel: this.spinnerPanel,
                            localizationStore: this.localizationStore
                        }, this.onPlayerCreated, this.abort)
                    } catch (e) {
                        bt.error(e), this.abort(t.UNHANDLED_INITIALIZE_ERROR, e.message, _.Fatal)
                    }
                }, t.prototype.prepareCache = function(t) {
                    Tt(t, "contentConfig").is.an.object(), Tt(t.asin, "contentConfig.asin").is.a.string(), Tt(t.asin, "contentConfig.asin").is.not.empty(), Tt(t.cachePriority, "contentConfig.cachePriority").is.a.number(), Tt(y[t.cachePriority]).exists(), bt.info("Prepare cache with " + t.asin + " at " + t.cachePriority + " priority")
                }, t.prototype.prepare = function(e) {
                    var i = this;
                    if (Tt(e, "contentConfig").is.an.object(), Tt(e.asin, "contentConfig.asin").is.a.string(), Tt(e.asin, "contentConfig.asin").is.not.empty(), !this.fsm.canTransitionTo(gt.PREPARING)) throw new Error("Unable to prepare player while in the " + gt[this.fsm.getCurrentState()] + " state");
                    var n = this.sanitizeContentConfig(e);
                    try {
                        var r = et(!0, {
                            cachePriority: y.High,
                            isAVOD: !1,
                            trailer: !1,
                            immediateConsumption: !0
                        }, n);
                        if (this.ignorePrepare(r)) return;
                        J.exists(e.features) && (this.featureConfig = et(!0, t.DEFAULT_FEATURE_CONFIG, e.features)), this.fsm.transitionTo(gt.PREPARING);
                        var o = this.getStoredOverrides();
                        if (tt.each(t.ALLOWED_CONTENT_OVERRIDES, function(t) {
                                r[t] = J.nestedValue(o, t, r[t])
                            }), r.asin === t.EVENT_HACK_LCID && (r.videoType = "External"), bt.info("Content config parameter:", e), bt.info("Final content config:", r), this.qosReporter.setAsin(r.asin), tt.isEmpty(r.clientMetadata) || this.qosReporter.reportInformation(t.CLIENT_METADATA, r.clientMetadata), this.preparedListener = function() {
                                i.webPlayer.once(N, i.stoppingListener), i.webPlayer.off(T, i.initializedListener), i.fsm.transitionTo(gt.PREPARED), i.eventEmitter.emit(O)
                            }, this.stoppingListener = function() {
                                i.webPlayer.once(T, i.initializedListener), i.fsm.transitionTo(gt.STOPPING), i.eventEmitter.emit(N)
                            }, this.initializedListener = function() {
                                i.webPlayer.off(O, i.preparedListener), i.fsm.transitionTo(gt.INITIALIZED), i.eventEmitter.emit(T)
                            }, this.webPlayer.once(O, this.preparedListener), this.webPlayer.once(T, this.initializedListener), x[r.videoType] === x.Live && this.deviceInformation.browser.getType() === U.Safari && "true" !== this.localStorage.get(lt.DONT_SHOW_AGAIN_KEY)) {
                            var s = new lt("safariBetterWatchExperience");
                            this.notificationManager.addNotification(s.createNotification(), !1)
                        }
                        this.webPlayer.prepare(r)
                    } catch (e) {
                        bt.error(e), this.abort(t.UNHANDLED_PREPARE_ERROR, e.message, _.Fatal)
                    }
                }, t.prototype.play = function(e) {
                    if (Tt(e, "playbackConfig").is.an.object(), !this.fsm.transitionTo(gt.PLAYING)) throw new Error("Unable to prepare player while in the " + gt[this.fsm.getCurrentState()] + " state");
                    try {
                        var i = this.sanitizePlaybackConfig(e),
                            n = et(!0, {}, i);
                        bt.info("Playback config parameter:", e), bt.info("Final playback config:", n), this.webPlayer.play(n), this.notificationManager.showQueuedNotifications()
                    } catch (e) {
                        bt.error(e), this.abort(t.UNHANDLED_PLAY_ERROR, e.message, _.Fatal)
                    }
                }, t.prototype.playbackInitiated = function(t) {
                    this.hasPlaybackInitiated = !0, t || tt.contains([gt.INITIALIZED, gt.INITIALIZING], this.fsm.getCurrentState()) ? (this.tryReportPlaybackInitiated(), this.tryNotifyPlaybackInitiated()) : this.notifyPlaybackInitiatedOnInitialized = !0
                }, t.prototype.stop = function() {
                    var e = this;
                    if (this.fsm.transitionTo(gt.STOPPING)) try {
                        this.hasPlaybackInitiated = !1, this.webPlayer.off(T, this.initializedListener), this.webPlayer.off(O, this.preparedListener), this.webPlayer.off(N, this.stoppingListener), this.initializePipeline.off(vt, this.onNotificationEvent), this.initializedListener = function() {
                            e.fsm.transitionTo(gt.INITIALIZED), e.reporter.flush(), e.qosReporter.flush();
                            var t = nt.v4(),
                                i = t + e.now();
                            e.configurationStore.setValue({
                                userWatchSessionId: t,
                                primitiveSessionId: i,
                                diagnosticsSessionConfiguration: e.diagnosticsSessionConfiguration
                            }).commit(), e.qosReporter.updateSessionIds(t, i), e.reporter.updateLoggingSessionId(t), e.reporter.updateMetricsSessionId(t), e.notifyPlaybackInitiatedOnInitialized && (e.notifyPlaybackInitiatedOnInitialized = !1, e.playbackInitiated(!0)), e.eventEmitter.emit(T)
                        }, this.webPlayer.once(T, this.initializedListener), this.pinDisplayManager.hideModal(), this.webPlayer.stop()
                    } catch (e) {
                        bt.error(e), this.abort(t.UNHANDLED_STOP_ERROR, e.message, _.Fatal)
                    }
                }, t.prototype.seek = function(t) {
                    Tt(t, "position").is.a.number(), Tt(t >= 0, "position >= 0").is["true"]();
                    var e = this.fsm.getCurrentState();
                    return e !== gt.PREPARED && e !== gt.PLAYING ? void bt.warn("The player has not started playback; ignoring call to seek") : (bt.info("Seeking to position: " + t), void this.webPlayer.seek(t))
                }, t.prototype.on = function(t, e) {
                    this.eventEmitter.on(t, e)
                }, t.prototype.once = function(t, e) {
                    this.eventEmitter.once(t, e)
                }, t.prototype.off = function(t, e) {
                    this.eventEmitter.off(t, e)
                }, t.prototype.getFeature = function(t, e, i) {
                    var n = S[S[t]];
                    return J.exists(n) ? J.exists(this.webPlayer) ? void this.webPlayer.getFeature(n, e, i) : void i(new Error("Cannot acquire the requested feature because the player is not initialized yet.")) : void i(new Error("The requested feature does not exist."))
                }, t.prototype.getPosition = function() {
                    var t = this.fsm.getCurrentState();
                    return t !== gt.PREPARED && t !== gt.PLAYING ? (bt.warn("The player has not been prepared; ignoring call to getPosition"), 0) : this.webPlayer.getPosition()
                }, t.prototype.getDuration = function() {
                    var t = this.fsm.getCurrentState();
                    return t !== gt.PREPARED && t !== gt.PLAYING ? (bt.warn("The player has not been prepared; ignoring call to getDuration"), 0) : this.webPlayer.getDuration()
                }, t.prototype.getPlayerCapabilities = function() {
                    return (Tt(this.fsm.getCurrentState() !== gt.UNINITIALIZED, "currentState !== UNINITIALIZED").is["true"](), tt.clone(this.playerCapabilities))
                }, t.prototype.sanitizePlayerConfig = function(e) {
                    var i = {
                        authToken: e.authToken,
                        domElement: e.domElement,
                        marketplaceId: e.marketplaceId,
                        requiredCapabilities: e.requiredCapabilities,
                        loaderConfig: this.loaderConfig,
                        clientId: e.clientId,
                        deviceId: e.deviceId
                    };
                    return (this.isConfigString(e.customerId, "PlayerConfig", "customerId") && (i.customerId = e.customerId), this.isConfigString(e.locale, "PlayerConfig", "locale") && (i.locale = e.locale), this.isConfigString(e.sessionId, "PlayerConfig", "sessionId") && (i.sessionId = e.sessionId), tt.isObject(e.features) && (i.features = e.features), tt.isObject(e.featuresSettings) && (i.featuresSettings = e.featuresSettings), this.isConfigString(e.siteSectionId, "PlayerConfig", "siteSectionId") && (i.siteSectionId = e.siteSectionId), this.isConfigBoolean(e.playerBeta, "PlayerConfig", "playerBeta") && (i.playerBeta = e.playerBeta), tt.each(tt.difference(tt.keys(e), t.PLAYER_CONFIG_PROPERTIES), function(t) {
                        bt.warn("PlayerConfig has unsupported property: " + t)
                    }), i)
                }, t.prototype.sanitizeContentConfig = function(e) {
                    var i = {
                        asin: e.asin
                    };
                    this.isConfigBoolean(e.isAVOD, "ContentConfig", "isAVOD") && (i.isAVOD = e.isAVOD), this.isConfigNumber(e.position, "ContentConfig", "position") && (i.position = e.position), tt.isObject(e.features) && (i.features = e.features);
                    var n = this.getEnumValue(e.videoType, "ContentConfig", "videoType", x);
                    return (J.exists(n) ? i.videoType = x[n] : (n = x.Feature, this.isConfigBoolean(e.trailer, "ContentConfig", "trailer") && e.trailer && (n = x.Trailer), this.isConfigBoolean(e.live, "ContentConfig", "live") && e.live && (Tt(n === x.Feature, "videoType is consistent").is["true"](), n = x.Live), i.videoType = x[n]), this.isConfigBoolean(e.immediateConsumption, "ContentConfig", "immediateConsumption") && (i.immediateConsumption = e.immediateConsumption), this.isConfigString(e.clientMetadata, "ContentConfig", "clientMetadata") && (i.clientMetadata = e.clientMetadata), tt.each(tt.difference(tt.keys(e), t.CONTENT_CONFIG_PROPERTIES), function(t) {
                        bt.warn("ContentConfig has unsupported property: " + t)
                    }), i)
                }, t.prototype.sanitizePlaybackConfig = function(e) {
                    var i = {
                        playbackInitiatedTime: e.playbackInitiatedTime
                    };
                    return (this.isConfigNumber(e.cacheType, "PlaybackConfig", "cacheType") && (i.cacheType = e.cacheType), this.isConfigString(e.audioTrackId, "PlaybackConfig", "audioTrackId") && (i.audioTrackId = e.audioTrackId), this.isConfigString(e.clickstreamRefMarker, "PlaybackConfig", "clickstreamRefMarker") && (i.clickstreamRefMarker = e.clickstreamRefMarker), tt.each(tt.difference(tt.keys(e), t.PLAYBACK_CONFIG_PROPERTIES), function(t) {
                        bt.warn("PlaybackConfig has unsupported property: " + t)
                    }), i)
                }, t.prototype.isConfigBoolean = function(t, e, i) {
                    return !(J.isNullOrUndefined(t) || !tt.isBoolean(t) && (bt.warn(e + " property '" + i + "' must be a boolean but was " + t), 1))
                }, t.prototype.isConfigNumber = function(t, e, i) {
                    return !(J.isNullOrUndefined(t) || (tt.isNumber(t) ? t < 0 && (bt.warn(e + " property '" + i + "' cannot be a negative but was " + t), 1) : (bt.warn(e + " property '" + i + "' must be a number but was " + t), 1)))
                }, t.prototype.isConfigString = function(t, e, i) {
                    return !(J.isNullOrUndefined(t) || (tt.isString(t) ? tt.isEmpty(t) && (bt.warn(e + " property '" + i + "' cannot be an empty string"), 1) : (bt.warn(e + " property '" + i + "' must be a string but was " + t), 1)))
                }, t.prototype.getEnumValue = function(t, e, i, n) {
                    if (J.isNullOrUndefined(t)) return null;
                    if (!tt.isString(t)) return (bt.warn(e + " property '" + i + "' must be a string but was " + t), null);
                    if (tt.isEmpty(t)) return (bt.warn(e + " property '" + i + "' cannot be an empty string"), null);
                    var r = G.getEnumValue(t, n);
                    return J.isNullOrUndefined(r) ? (bt.warn(e + " property '" + i + "' did not receive a valid enum value for the given type. Value received " + t + ". "), null) : r
                }, t.prototype.ignorePrepare = function(t) {
                    return !t.immediateConsumption && (J.exists(this.navigator.connection) && "cellular" === this.navigator.connection.type ? (bt.warn("Pre-cache disabled on Cellular connections, ignoring calls to prepare."), !0) : t.videoType === x[x.Live] && (bt.warn("Pre-cache disabled for Live streams, ignoring calls to prepare."), !0))
                }, t.prototype.createHTMLElements = function() {
                    this.playerElementWrapper = document.createElement("div"), this.playerElementWrapper.style.height = "100%", this.playerElementWrapper.style.width = "100%", this.playerElement = document.createElement("div"), this.playerElement.className = "webPlayerElement", this.playerElementWrapper.appendChild(this.playerElement), this.uiElement = document.createElement("div"), this.uiElement.className = "uiElement", this.parentElement = document.createElement("div"), this.parentElement.className = "webPlayerContainer", this.parentElement.appendChild(this.playerElementWrapper), this.parentElement.appendChild(this.uiElement), this.playerConfig.domElement.innerHTML = "", this.playerConfig.domElement.appendChild(this.parentElement)
                }, t.prototype.createDiagnosticsConfig = function() {
                    var e, i = M.getParameter(t.PLAYER_DIAGNOSTICS_TYPE_PARAM),
                        n = G.getEnumValue(i, v);
                    if (n === v.Http) e = this.localStorage.get(s.DiagnosticsEndpointKey);
                    else {
                        var r = this.loaderConfig.dependencies.ATVWebDiagnosticsRenderer;
                        n = v.PostMessage, e = this.loaderConfig.assetsRoot + "/" + r.name + "/" + r.version + "/html/HTML5Diagnostics.html"
                    }
                    return {
                        protocol: n,
                        endpointURI: e
                    }
                }, t.prototype.transitionToAborted = function() {
                    this.fsm.transitionTo(gt.ABORTED), this.eventEmitter.emit(h)
                }, t.prototype.reportFatalError = function(e, i, r) {
                    this.qosReporter.reportError(e, r, i), n.putMetric(e), r !== _.Crash && r !== _.Fatal || n.putMetric(t.FATAL_ERROR_METRIC)
                }, t.prototype.showErrorMessage = function(t, e) {
                    var i = this.localizationStore.getLocalization();
                    this.playerElementWrapper.innerHTML = "", this.playerElement = null, this.playerElementWrapper = null, J.exists(t) ? this.errorDisplayManager.showError(t, this.featureConfig.playerCloseable) : J.exists(e) && J.exists(i[e]) ? this.errorDisplayManager.showError(new yt(e), this.featureConfig.playerCloseable) : this.errorDisplayManager.showError(new ut, this.featureConfig.playerCloseable)
                }, t.prototype.hidePlayer = function() {
                    this.playerElementWrapper.style.height = "1px", this.playerElementWrapper.style.width = "1px"
                }, t.prototype.showPlayer = function() {
                    J.exists(this.playerElementWrapper) && (this.playerElementWrapper.style.height = "100%", this.playerElementWrapper.style.width = "100%")
                }, t.prototype.proxyEvent = function(t, e) {
                    var i = this;
                    t.on(e, function(t) {
                        i.eventEmitter.emit(e, t)
                    })
                }, t.prototype.attachEventListeners = function(e) {
                    var i = this;
                    e.on(f, function(t) {
                        null !== t.getError() && bt.error(t.getError()), i.abort(t.getErrorName(), t.getErrorMessage(), t.getErrorSeverity(), t.getTemplate())
                    }), e.on(h, function() {
                        i.transitionToAborted()
                    }), e.on(b, this.onNotificationCancelEvent), e.on(w, this.onNotificationEvent), e.on(C, function(t) {
                        i.onPINRequired(t)
                    }), e.on(I, function() {
                        i.showPlayer()
                    }), e.on(R, function() {
                        i.abort(t.PIN_VALIDATION_ERROR, "An error occurred while attempting to validate the customer's PIN", _.Fatal, new dt)
                    }), this.proxyEvent(e, d), this.proxyEvent(e, g), this.proxyEvent(e, E), this.proxyEvent(e, A)
                }, t.prototype.onPINRequired = function(e) {
                    e.getRequiresPINSetup() ? this.abort(t.PIN_SETUP_REQUIRED_ERROR, "PIN on playback is required but the customer does not have a PIN set up", _.NonFatal, new ft) : e.getRequiresAgeVerification() ? this.abort(t.PIN_AGE_VERIFICATION_ERROR, "Age verification on playback is required but the customer does not have age verified", _.NonFatal, new pt) : this.showPINModal(e.getPINLength(), e.getHidePlayer())
                }, t.prototype.onClosePlayerClicked = function() {
                    this.showPlayer(), this.eventEmitter.emit(g)
                }, t.prototype.createLocalizationStore = function() {
                    var t = this.loaderConfig.dependencies.ATVWebPlayer,
                        e = this.loaderConfig.assetsRoot + "/" + t.name + "/" + t.version,
                        i = (n = {}, n[W.DE_DE] = e + "/languages/" + W.DE_DE + ".json", n[W.EN_GB] = e + "/languages/" + W.EN_GB + ".json", n[W.EN_US] = St, n[W.ES_ES] = e + "/languages/" + W.ES_ES + ".json", n[W.ES_MX] = e + "/languages/" + W.ES_MX + ".json", n[W.FR_FR] = e + "/languages/" + W.FR_FR + ".json", n[W.IT_IT] = e + "/languages/" + W.IT_IT + ".json", n[W.JA_JP] = e + "/languages/" + W.JA_JP + ".json", n[W.NL_NL] = e + "/languages/" + W.NL_NL + ".json", n[W.PT_BR] = e + "/languages/" + W.PT_BR + ".json", n[W.DA_DK] = e + "/languages/" + W.DA_DK + ".json", n[W.NB_NO] = e + "/languages/" + W.NB_NO + ".json", n[W.PL_PL] = e + "/languages/" + W.PL_PL + ".json", n[W.SV_SE] = e + "/languages/" + W.SV_SE + ".json", n[W.HI_IN] = e + "/languages/" + W.HI_IN + ".json", n[W.TA_IN] = e + "/languages/" + W.TA_IN + ".json", n[W.TE_IN] = e + "/languages/" + W.TE_IN + ".json", n[W.ZH_TW] = e + "/languages/" + W.ZH_TW + ".json", n[W.ZH_CN] = e + "/languages/" + W.ZH_CN + ".json", n);
                    return new this.localizationStoreType(t.version, t.name, i, W.EN_US, this.playerCacheEnabled);
                    var n
                }, t.prototype.createDeviceId = function(e) {
                    var i = this.localStorage.get(t.DEVICE_ID_KEY);
                    if (J.isNullOrUndefined(i)) {
                        var n = new it(e + nt.v4(), "TEXT");
                        i = n.getHash("SHA-224", "HEX"), this.localStorage.set(t.DEVICE_ID_KEY, i)
                    }
                    return i
                }, t.prototype.showPINModal = function(e, i) {
                    i && this.hidePlayer();
                    try {
                        this.pinDisplayManager.requestPIN(e)
                    } catch (e) {
                        this.abort(t.PIN_LOOKUP_ERROR, "An error occurred while attempting to validate the customer's PIN", _.Fatal, new ht)
                    }
                }, t.prototype.tryNotifyPlaybackInitiated = function() {
                    null !== this.webPlayer && this.hasPlaybackInitiated && this.webPlayer.playbackInitiated()
                }, t.prototype.tryReportPlaybackInitiated = function() {
                    this.hasPlaybackInitiated && this.qosReporter.reportInformation(t.PLAYBACK_INITIATED)
                }, t.prototype.getStoredOverrides = function() {
                    try {
                        var e = this.sessionStorage.get(t.OVERRIDES_STORAGE_KEY),
                            i = JSON.parse(e);
                        return tt.isObject(i) ? i : {}
                    } catch (t) {
                        return {}
                    }
                }, t.prototype.createFiniteStateMachine = function() {
                    var t = new V(gt.UNINITIALIZED);
                    return (t.addTransition(gt.UNINITIALIZED, gt.INITIALIZING), t.addTransition(gt.INITIALIZING, gt.INITIALIZED), t.addTransition(gt.INITIALIZING, gt.ABORTED), t.addTransition(gt.INITIALIZED, gt.PREPARING), t.addTransition(gt.PREPARING, gt.PREPARED), t.addTransition(gt.PREPARING, gt.INITIALIZED), t.addTransition(gt.PREPARING, gt.STOPPING), t.addTransition(gt.PREPARING, gt.ABORTED), t.addTransition(gt.PREPARED, gt.STOPPING), t.addTransition(gt.PREPARED, gt.ABORTED), t.addTransition(gt.PREPARED, gt.PLAYING), t.addTransition(gt.PLAYING, gt.STOPPING), t.addTransition(gt.PLAYING, gt.ABORTED), t.addTransition(gt.STOPPING, gt.INITIALIZED), t.addTransition(gt.STOPPING, gt.ABORTED), t.onTransition(function(t, e) {
                        bt.info("Transitioned from " + gt[t] + " to " + gt[e])
                    }), t.onIllegalTransition(function(t, e) {
                        bt.warn("Attempted illegal state transition from " + gt[t] + " to " + gt[e])
                    }), t)
                }, t.EVENT_HACK_LCID = "amzn1.dv.lcid.Ext73509-2ae9-4b43-a957-236304d15be1", t.CSS_ASSET_PATH = "css/ATVWebPlayer.css", t.PLAYER_CACHE_QUERY_PARAM = "playerCache", t.PLAYER_DEBUG_QUERY_PARAM = "playerDebug", t.PLAYER_DIAGNOSTICS_TYPE_PARAM = "debugType", t.OVERRIDES_STORAGE_KEY = "playerOverrides", t.DEVICE_ID_KEY = "atvwebplayer_deviceid", t.SESSION_ID_KEY = "session-id", t.PLAYER_CONFIG_PROPERTIES = ["sessionId", "authToken", "clientId", "customerId", "domElement", "features", "featuresSettings", "marketplaceId", "locale", "requiredCapabilities", "siteSectionId"], t.CONTENT_CONFIG_PROPERTIES = ["asin", "cachePriority", "clientMetadata", "features", "immediateConsumption", "isAVOD", "live", "position", "trailer", "videoType"], t.ALLOWED_CONTENT_OVERRIDES = ["position"], t.PLAYBACK_CONFIG_PROPERTIES = ["audioTrackId", "clickstreamRefMarker", "playbackInitiatedTime", "cacheType"], t.INITIALIZE_TIME = "DelegatorInitializeTime", t.FATAL_ERROR_METRIC = "FatalError", t.CLIENT_METADATA = "ClientMetadata", t.CLIENT_ID = "ClientID", t.PIN_AGE_VERIFICATION_ERROR = "PINAgeVerificationError", t.PIN_LOOKUP_ERROR = "PINLookupError", t.PIN_SETUP_REQUIRED_ERROR = "PINSetupRequiredError", t.PIN_VALIDATION_ERROR = "PINValidationError", t.UNHANDLED_INITIALIZE_ERROR = "UnhandledInitializeError", t.UNHANDLED_PREPARE_ERROR = "UnhandledPrepareError", t.UNHANDLED_PLAY_ERROR = "UnhandledPlayError", t.UNHANDLED_STOP_ERROR = "UnhandledStopError", t.PLAYBACK_INITIATED = "PlaybackInitiated", t.DEFAULT_FEATURE_CONFIG = {
                    enableHdIndicator: !0,
                    enableLiveContentWarning: !0,
                    enableMta: !0,
                    enableNextUp: !0,
                    enablePause: !0,
                    enableSeek: !0,
                    enableUpdateStream: !0,
                    enableXray: !0,
                    enableOptions: !0,
                    heroImageUrl: null,
                    playerCloseable: !0
                }, t)
            }();
        e.exports = It
    }, {
        1: 1,
        113: 113,
        116: 116,
        126: 126,
        16: 16,
        17: 17,
        18: 18,
        186: 186,
        187: 187,
        19: 19,
        2: 2,
        20: 20,
        21: 21,
        22: 22,
        231: 231,
        232: 232,
        24: 24,
        243: 243,
        25: 25,
        272: 272,
        281: 281,
        284: 284,
        286: 286,
        288: 288,
        29: 29,
        294: 294,
        30: 30,
        32: 32,
        33: 33,
        34: 34,
        36: 36,
        41: 41,
        6: 6,
        80: 80,
        82: 82,
        83: 83,
        93: 93
    }],
    4: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t() {}
            return (t.PLAYER_OVERRIDE = "PlayerOverride", t.WEBLAB = "Weblab", t.MISSING_WIDEVINE_CDM = "MissingWidevineCDM", t.MISSING_PLAYREADY_CDM = "MissingPlayReadyCDM", t.MISSING_FAIRPLAY_CDM = "MissingFairplayCDM", t.MISSING_CODEC_IN_PLAYREADY_CDM = "MissingCodecInPlayReadyCDM", t.UNKNOWN = "UNKNOWN", t.UNSUPPORTED_BROWSER = "UnsupportedBrowser", t.UNSUPPORTED_OS = "UnsupportedOperatingSystem", t.MISSING_MEDIA_SOURCE = "MissingMediaSource", t)
        }();
        e.exports = n
    }, {}],
    5: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t(t, e, i, n) {
                this.name = t, this.message = e, this.severity = i, this.template = n
            }
            return (t.ERROR_NAME = "InitializeAbortedError", t)
        }();
        e.exports = n
    }, {}],
    6: [function(t, e, i) {
        "use strict";
        var n = t(289),
            r = t(281),
            o = t(93),
            s = t(284),
            a = t(82),
            l = a.BasicEventEmitter,
            c = t(231),
            u = c.ErrorSeverity,
            p = t(7),
            h = t(5),
            f = r.of("InitializePipeline"),
            d = s.get("InitializePipeline"),
            y = function() {
                function t(t, e) {
                    void 0 === t && (t = p), void 0 === e && (e = new l), this.eventEmitter = e, this.stages = t
                }
                return (t.prototype.initialize = function(e, i, r) {
                    f(e, "config").exists(), f(i, "onInitialized").is.a["function"](), f(r, "onError").is.a["function"]();
                    var s = {
                        config: e,
                        eventEmitter: this.eventEmitter,
                        factory: null,
                        playerCapabilities: null,
                        webPlayer: null
                    };
                    return n(s).then(this.stages.preinitializeReporting).then(this.stages.downloadLocalization).then(this.stages.getWeblabs).then(this.stages.createTokenClient).then(this.stages.cacheAuthToken).then(this.stages.selectFactory).then(this.stages.initializeReporting).then(this.stages.createWebPlayer).done(function(t) {
                        i(t.factory, t.webPlayer)
                    }, function(e) {
                        e.name !== h.ERROR_NAME || o.isNullOrUndefined(s.abortReason) ? (d.error("Unhandled initialize error", e), r(t.UNHANDLED_INITIALIZE_ERROR, e.message, u.Fatal)) : (d.error("Initialization aborted", s.abortReason), r(s.abortReason.name, s.abortReason.message, s.abortReason.severity, s.abortReason.template))
                    })
                }, t.prototype.on = function(t, e) {
                    this.eventEmitter.on(t, e)
                }, t.prototype.once = function(t, e) {
                    this.eventEmitter.once(t, e)
                }, t.prototype.off = function(t, e) {
                    this.eventEmitter.off(t, e)
                }, t.UNHANDLED_INITIALIZE_ERROR = "UnhandledInitializeError", t)
            }();
        e.exports = y
    }, {
        231: 231,
        281: 281,
        284: 284,
        289: 289,
        5: 5,
        7: 7,
        82: 82,
        93: 93
    }],
    7: [function(t, e, i) {
        "use strict";
        var n = t(9),
            r = t(10),
            o = t(8),
            s = t(11),
            a = t(12),
            l = t(13),
            c = t(14),
            u = t(15),
            p = {
                cacheAuthToken: o,
                createTokenClient: n,
                createWebPlayer: r,
                downloadLocalization: s,
                getWeblabs: a,
                initializeReporting: l,
                preinitializeReporting: c,
                selectFactory: u
            };
        e.exports = p
    }, {
        10: 10,
        11: 11,
        12: 12,
        13: 13,
        14: 14,
        15: 15,
        8: 8,
        9: 9
    }],
    8: [function(t, e, i) {
        "use strict";

        function n(t) {
            var e = t.config.playerConfig.tokenClient;
            return (o.exists(e) && e.getToken(function(t) {
                s.info("Auth token cache succeeded.")
            }, function(t) {
                s.warn("Auth token cache failed.")
            }), t)
        }
        var r = t(284),
            o = t(93),
            s = r.get("CacheAuthToken");
        e.exports = n
    }, {
        284: 284,
        93: 93
    }],
    9: [function(t, e, i) {
        "use strict";

        function n(t, e) {
            var i = {
                appVersion: t.config.loaderConfig.dependencies.ATVWebPlayer.version,
                appName: d,
                marketplaceId: t.config.playerConfig.marketplaceId,
                token: {
                    access: e.access,
                    expireTime: e.expireTime,
                    refresh: e.refresh
                }
            };
            return new a(i, function(e) {
                t.config.qosReporter.reportInformation(y, null, e), p.putMetric(y, e, f)
            }, function(t) {
                p.putMetric(t.name)
            })
        }

        function r(t) {
            var e = t.config.authToken;
            return h.exists(e) && t.config.playerConfig.weblabs[c.ATV_WEB_PLAYER_OAUTH] === u.T1 ? n(t, e) : null
        }

        function o(t) {
            return h.isNullOrUndefined(t.config.playerConfig.customerId) ? t : (t.config.playerConfig.tokenClient = r(t), t.config.qosReporter.setTokenClient(t.config.playerConfig.tokenClient), t)
        }
        var s = t(58),
            a = s.OAuthTokenClient,
            l = t(80),
            c = l.Weblabs,
            u = l.WeblabTreatment,
            p = t(187),
            h = t(93),
            f = "ms",
            d = "ATVWebPlayer",
            y = "OAuthTokenTime";
        e.exports = o
    }, {
        187: 187,
        58: 58,
        80: 80,
        93: 93
    }],
    10: [function(t, e, i) {
        "use strict";

        function n(t) {
            var e = r.defer();
            return (t.factory.createWebPlayer(function(i) {
                t.webPlayer = i, e.resolve(t)
            }, function(i, n, r, a) {
                t.abortReason = new o(i, n, r, a), e.reject(s.newError(o.ERROR_NAME, t.abortReason.message))
            }, t.config.playerConfig.loaderConfig.assetsRoot), e.promise)
        }
        var r = t(289),
            o = t(5),
            s = t(159);
        e.exports = n
    }, {
        159: 159,
        289: 289,
        5: 5
    }],
    11: [function(t, e, i) {
        "use strict";

        function n(t, e) {
            void 0 === e && (e = r);
            var i = "{{locale}}",
                n = "LanguageDownloadCacheHit",
                o = "LanguageDownloadCacheMiss",
                l = "LanguageDownload.Error." + i,
                c = "LanguageDownload.Time." + i,
                u = s.defer(),
                p = t.config.playerConfig.locale;
            return (t.config.localizationStore.setLanguage(p, function(s, l, h) {
                e.putMetric(c.replace(i, p), l, r.MILLISECONDS), e.putMetric(h ? n : o), a.info("Localization download successful."), u.resolve(t)
            }, function(n) {
                e.putMetric(l.replace(i, p)), a.warn("Localization download failed. Falling back to en-US."), u.resolve(t)
            }), u.promise)
        }
        var r = t(187),
            o = t(284),
            s = t(289),
            a = o.get("DownloadLocalization");
        e.exports = n
    }, {
        187: 187,
        284: 284,
        289: 289
    }],
    12: [function(t, e, i) {
        "use strict";

        function n(t, e) {
            void 0 === e && (e = new o);
            var i = p.defer(),
                n = null;
            return (u.exists(t.config.playerConfig.customerId) && (n = {
                customerId: t.config.playerConfig.customerId,
                tokenClient: t.config.playerConfig.tokenClient
            }), e.initialize(t.config.playerConfig.partnerServiceEndpoint, t.config.playerConfig.marketplaceId, a.HTML5, t.config.playerConfig.deviceId, t.config.playerConfig.sessionId, n), e.getWeblabs(t.config.weblabNames, function(e, n) {
                u.exists(n) && (c.putMetric(y, n, c.MILLISECONDS), t.config.qosReporter.reportInformation(y, null, n)), f.info("Acquired weblabs: ", e), t.config.playerConfig.weblabs = h.defaults(t.config.weblabOverrides, e), f.info("Final weblabs: ", t.config.playerConfig.weblabs);
                try {
                    t.config.qosReporter.reportInformation("Weblabs", JSON.stringify(t.config.playerConfig.weblabs))
                } catch (t) {
                    f.error(t)
                }
                i.resolve(t)
            }, function(e, n) {
                f.error("Unable to receive weblabs.", e), c.putMetric(d), u.exists(n) && c.putMetric(y, n, c.MILLISECONDS), t.config.playerConfig.weblabs = t.config.weblabOverrides, i.resolve(t)
            }), i.promise)
        }
        var r = t(278),
            o = r.WeblabClient,
            s = t(80),
            a = s.DeviceTypeId,
            l = t(284),
            c = t(187),
            u = t(93),
            p = t(289),
            h = t(294),
            f = l.get("getWeblabs"),
            d = "GetWeblabTreatmentError",
            y = "GetWeblabTreatmentTime";
        e.exports = n
    }, {
        187: 187,
        278: 278,
        284: 284,
        289: 289,
        294: 294,
        80: 80,
        93: 93
    }],
    13: [function(t, e, i) {
        "use strict";

        function n(t) {
            var e = t.config.playerConfig;
            t.config.reporter.initializeLogging(e.marketplaceId, a.withDefault(e.customerId, l), e.configurationStore.getValue().userWatchSessionId, e.configurationStore, e.logLevel, c, e.diagnostics), t.config.reporter.initializeMetrics(t.factory.getMetricsFeature()), t.config.qosReporter.initialize(t.factory.getPlayerVersion(), t.factory.getDeviceTypeId());
            var i = r.getInstance();
            return (e.diagnostics === s.Auto && i.open(), t)
        }
        var r = t(158),
            o = t(231),
            s = o.DiagnosticsState,
            a = t(93),
            l = "UNAUTHENTICATED",
            c = 10;
        e.exports = n
    }, {
        158: 158,
        231: 231,
        93: 93
    }],
    14: [function(t, e, i) {
        "use strict";

        function n(t, e, i, n) {
            void 0 === e && (e = s.getOperatingSystem()), void 0 === i && (i = s.getBrowser()), void 0 === n && (n = navigator);
            var l = i.toString();
            o.exists(n.buildID) && (l = l + " build:" + n.buildID);
            var c = t.config.playerConfig.configurationStore.getValue();
            return (t.config.reporter.preInitializeMetrics(t.config.playerConfig.marketplaceId, c.userWatchSessionId, t.config.playerConfig.clientId, a, i), t.config.qosReporter.preInitialize(t.config.playerConfig.partnerServiceEndpoint, t.config.loaderConfig.dependencies.ATVWebPlayer.version, t.config.playerConfig.marketplaceId, r.DeviceTypeId.HTML5, t.config.playerConfig.deviceId, c.primitiveSessionId, e.toString(), l), t.config.qosReporter.updateSessionIds(c.userWatchSessionId, c.primitiveSessionId), t)
        }
        var r = t(80),
            o = t(93),
            s = t(272),
            a = "HTML5Player";
        e.exports = n
    }, {
        272: 272,
        80: 80,
        93: 93
    }],
    15: [function(t, e, i) {
        "use strict";

        function n(t, e) {
            void 0 === e && (e = ""), m.isNullOrUndefined(t.config.playerOverride) || (e = a.PLAYER_OVERRIDE), t.config.qosReporter.reportInformation(u.HTML5_NOT_USED_ERROR_NAME, e), E.warn("HTML5 player is not used because of " + e)
        }

        function r(t, e, i, r, a) {
            void 0 === e && (e = new c), void 0 === i && (i = d.getOperatingSystem()), void 0 === r && (r = d.getBrowser()), void 0 === a && (a = l);
            var y;
            y = m.isNullOrUndefined(t.config.playerFactories) ? [new u(t.config.loaderConfig, t.config.qosReporter, t.config.playerBeta), new p(i, r, t.config.loaderConfig, t.config.qosReporter)] : t.config.playerFactories, e.initialize(y, t.config.playerConfig.marketplaceId, t.config.playerConfig.weblabs, t.config.playerCacheEnabled, t.config.localizationStore.getCurrentLanguage(), t.config.playerConfig.clientId);
            var v = o.defer(),
                E = function(e, o, l, c) {
                    if (null === e) return (n(t, l), t.abortReason = new s(_, "No player is supported on this platform.", g.NonFatal, new a(i, r, c)), void v.reject(f.newError(s.ERROR_NAME, t.abortReason.message)));
                    e.getPlayerName() !== S && n(t, l), t.factory = e, t.factory.on(h, function(e) {
                        t.eventEmitter.emit(h, e)
                    }), t.config.onPlayerCapabilities(o);
                    var u = t.config.loaderConfig.dependencies.ATVWebPlayer,
                        p = t.config.loaderConfig.assetsRoot + "/" + u.name + "/" + u.version;
                    t.config.spinnerPanel.initialize(t.config.playerElement, p, e.getPlayerName() !== S), v.resolve(t)
                };
            return (m.isNullOrUndefined(t.config.playerOverride) ? e.selectFactory(E, t.config.playerConfig.requiredCapabilities, S) : e.selectFactoryWithOverride(E, t.config.playerOverride), v.promise)
        }
        var o = t(289),
            s = t(5),
            a = t(4),
            l = t(23),
            c = t(50),
            u = t(27),
            p = t(37),
            h = t(25),
            f = t(159),
            d = t(272),
            y = t(231),
            g = y.ErrorSeverity,
            m = t(93),
            v = t(284),
            E = v.get("selectFactory"),
            _ = "UnsupportedPlatformError",
            S = "html5";
        e.exports = r
    }, {
        159: 159,
        23: 23,
        231: 231,
        25: 25,
        27: 27,
        272: 272,
        284: 284,
        289: 289,
        37: 37,
        4: 4,
        5: 5,
        50: 50,
        93: 93
    }],
    16: [function(t, e, i) {
        "use strict";
        var n = t(294),
            r = t(232),
            o = t(113),
            s = o.LocalStorage,
            a = function() {
                function t(e, i) {
                    void 0 === e && (e = new s), void 0 === i && (i = r);
                    var o = this;
                    this.storage = e, this.queryString = i, n.chain(t.flagStorageKeys).keys().each(function(e) {
                        o.handleFlagStorage(e, t.flagStorageKeys[e])
                    })
                }
                return (t.prototype.isActiveFlag = function(t) {
                    return "true" === this.storage.get(t)
                }, t.prototype.handleFlagStorage = function(t, e) {
                    var i = this.queryString.getParameter(t);
                    i === !0 ? this.storage.set(e, "true") : i === !1 && this.storage.remove(e)
                }, t.HTML5_BETA_STORAGE_KEY = "html5_web_player_beta", t.HTML5_DIAGNOSTICS_STORAGE_KEY = "html5_web_player_diagnostics", t.HTML5_HEVC_TEST_STORAGE_KEY = "html5_web_player_hevc_test", t.HTML5_XRAY_BETA_STORAGE_KEY = "html5_web_player_xray_beta", t.flagStorageKeys = {
                    playerBeta: t.HTML5_BETA_STORAGE_KEY,
                    playerDebug: t.HTML5_DIAGNOSTICS_STORAGE_KEY,
                    hevcTest: t.HTML5_HEVC_TEST_STORAGE_KEY,
                    xrayBeta: t.HTML5_XRAY_BETA_STORAGE_KEY
                }, t)
            }();
        e.exports = a
    }, {
        113: 113,
        232: 232,
        294: 294
    }],
    17: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t[t.UNINITIALIZED = 0] = "UNINITIALIZED", t[t.INITIALIZING = 1] = "INITIALIZING", t[t.INITIALIZED = 2] = "INITIALIZED", t[t.PREPARING = 3] = "PREPARING", t[t.PREPARED = 4] = "PREPARED", t[t.PLAYING = 5] = "PLAYING", t[t.STOPPING = 6] = "STOPPING", t[t.ABORTED = 7] = "ABORTED"
        }(n || (n = {})), e.exports = n
    }, {}],
    18: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(32),
            o = function(t) {
                function e() {
                    return t.call(this, e.KEY) || this
                }
                return (n(e, t), e.KEY = "genericError", e)
            }(r);
        e.exports = o
    }, {
        32: 32
    }],
    19: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(32),
            o = function(t) {
                function e() {
                    return t.call(this, e.KEY) || this
                }
                return (n(e, t), e.KEY = "pinAgeVerificationRequired", e)
            }(r);
        e.exports = o
    }, {
        32: 32
    }],
    20: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(32),
            o = function(t) {
                function e() {
                    return t.call(this, e.KEY) || this
                }
                return (n(e, t), e.KEY = "pinLookupErrorFsk18", e)
            }(r);
        e.exports = o
    }, {
        32: 32
    }],
    21: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(32),
            o = function(t) {
                function e() {
                    return t.call(this, e.KEY) || this
                }
                return (n(e, t), e.KEY = "pinSetupRequired", e)
            }(r);
        e.exports = o
    }, {
        32: 32
    }],
    22: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(32),
            o = function(t) {
                function e() {
                    return t.call(this, e.KEY) || this
                }
                return (n(e, t), e.KEY = "pinValidationError", e)
            }(r);
        e.exports = o
    }, {
        32: 32
    }],
    23: [function(t, e, i) {
        "use strict";
        var n, r = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = t(272),
            s = o.BrowserType,
            a = o.OperatingSystemFamily,
            l = t(113),
            c = l.Version,
            u = t(93),
            p = t(49),
            h = t(32),
            f = function(t) {
                function e(i, n, r) {
                    var o = this,
                        l = u.exists(e.KEYS[r]) ? e.KEYS[r][s[n.getType()]] : null;
                    return (e.isChromeAndroid(n, i) ? l = e.MISSING_CDM_KEYS.Android : i.getFamily() === a.Mac && i.getVersion().compareTo(c.fromString("10.9")) < 0 && (l = e.MAC_LESS_THAN_10_9_UNSUPPORTED_BROWSER), u.isNullOrUndefined(l) && (l = r === p.UNSUPPORTED_OS ? e.GENERIC_UNSUPPORTED_OS : e.UNSUPPORTED_BROWSER_OS_KEYS[a[i.getFamily()]]), l = u.withDefault(l, e.GENERIC_UNSUPPORTED_BROWSER), o = t.call(this, l) || this)
                }
                return (r(e, t), e.isChromeAndroid = function(t, e) {
                    return t.getType() === s.Chrome && (e.getFamily() === a.Linux || e.getFamily() === a.Android) && u.exists(navigator.connection)
                }, e.GENERIC_UNSUPPORTED_BROWSER = "genericUnsupportedBrowser", e.GENERIC_UNSUPPORTED_OS = "genericUnsupportedOs", e.MAC_LESS_THAN_10_9_UNSUPPORTED_BROWSER = "macLessThan10_9UnsupportedBrowser", e.UPDATE_BROWSER_KEYS = {
                    Chrome: "chromeOutOfDate",
                    Firefox: "firefoxOutOfDate",
                    Firefox64: "firefoxOutOfDate",
                    Opera: "operaOutOfDate"
                }, e.MISSING_CDM_KEYS = {
                    Android: "androidMissingCdm",
                    Chrome: "chromeMissingCdm",
                    Firefox: "firefoxMissingCdm",
                    Firefox64: "firefoxMissingCdm",
                    Opera: "operaMissingCdm"
                }, e.UNSUPPORTED_BROWSER_KEYS = {}, e.UNSUPPORTED_BROWSER_OS_KEYS = {
                    Linux: "linuxUnsupportedBrowser",
                    Mac: "macUnsupportedBrowser",
                    Windows: "windowsUnsupportedBrowser",
                    Android: e.GENERIC_UNSUPPORTED_OS
                }, e.UNSUPPORTED_OS_KEYS = {}, e.KEYS = (n = {}, n[p.BROWSER_OUT_OF_DATE] = e.UPDATE_BROWSER_KEYS, n[p.MISSING_CDM] = e.MISSING_CDM_KEYS, n[p.UNSUPPORTED_BROWSER] = e.UNSUPPORTED_BROWSER_KEYS, n[p.UNSUPPORTED_OS] = e.UNSUPPORTED_OS_KEYS, n), e)
            }(h);
        e.exports = f
    }, {
        113: 113,
        272: 272,
        32: 32,
        49: 49,
        93: 93
    }],
    24: [function(t, e, i) {
        "use strict";

        function n(t) {
            var e = t.length,
                i = l.type(t);
            return !l.isWindow(t) && (!(1 !== t.nodeType || !e) || "array" === i || "function" !== i && (0 === e || "number" == typeof e && e > 0 && e - 1 in t))
        }

        function r(t) {
            for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
            var n, o, s, a, c, u, p = arguments[0] || {},
                h = 1,
                f = arguments.length,
                d = !1;
            for ("boolean" == typeof p && (d = p, p = arguments[1] || {}, h = 2), "object" == typeof p || l.isFunction(p) || (p = {}), f === h && (p = this, --h); h < f; h++)
                if (null !== (c = arguments[h]))
                    for (a in c)
                        if (c.hasOwnProperty(a)) {
                            if (n = p[a], s = c[a], p === s) continue;
                            d && s && (l.isPlainObject(s) || (o = l.isArray(s))) ? (o ? (o = !1, u = n && l.isArray(n) ? n : []) : u = n && l.isPlainObject(n) ? n : {}, p[a] = r(d, u, s)) : void 0 !== s && (p[a] = s)
                        } return p
        }
        var o = {},
            s = o.toString,
            a = o.hasOwnProperty,
            l = {
                isFunction: function(t) {
                    return "function" === l.type(t)
                },
                isArray: Array.isArray || function(t) {
                    return "array" === l.type(t)
                },
                isWindow: function(t) {
                    return null !== t && t === t.window
                },
                isNumeric: function(t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                },
                type: function(t) {
                    return null === t ? String(t) : "object" == typeof t || "function" == typeof t ? o[s.call(t)] || "object" : typeof t
                },
                isPlainObject: function(t) {
                    if (!t || "object" !== l.type(t) || t.nodeType || l.isWindow(t)) return !1;
                    try {
                        if (t.constructor && !a.call(t, "constructor") && !a.call(t.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (t) {
                        return !1
                    }
                    var e;
                    for (e in t) t.hasOwnProperty(e);
                    return void 0 === e || a.call(t, e)
                },
                each: function(t, e) {
                    var i, r, o = t.length,
                        s = n(t);
                    if (s)
                        for (r = 0; r < o && (i = e.call(t[r], r, t[r]), i !== !1); r++);
                    else
                        for (r in t)
                            if (t.hasOwnProperty(r) && (i = e.call(t[r], r, t[r]), i === !1)) break;
                    return t
                }
            };
        l.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            o["[object " + e + "]"] = e.toLowerCase()
        }), e.exports = r
    }, {}],
    25: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t() {}
            return (t.toString = function() {
                return "FACTORY_NOTIFICATION_EVENT"
            }, t)
        }();
        e.exports = n
    }, {}],
    26: [function(t, e, i) {
        "use strict";
        var n, r, o, s, a, l, c, u, p, h, f, d = t(272),
            y = d.BrowserType,
            g = d.OperatingSystemFamily,
            m = d.WindowsVersion,
            v = t(93),
            E = t(113),
            _ = E.Version,
            S = t(4),
            T = t(49),
            b = t(284),
            w = t(294),
            I = (b.get("HTML5DeviceInformationBlacklist"), "2c3c3654-ac62-46a9-a36e-76e1ff64a679"),
            R = (n = {}, n[y.Chrome] = (r = {}, r["DRM:YES"] = [{
                browserRange: {
                    min: _.fromNumber(64)
                },
                osFamily: g.Windows,
                osVersion: {
                    min: m.WINDOWS_7
                }
            }, {
                browserRange: {
                    min: _.fromNumber(64)
                },
                osFamily: g.Android,
                osVersion: {
                    min: _.fromString("4.4.3")
                }
            }], r[I + "|DRM:NO"] = [{
                browserRange: {
                    min: _.fromNumber(42)
                }
            }], r), n[y.Chromium] = (o = {}, o["DRM:YES"] = [{
                browserRange: {
                    min: _.fromNumber(64)
                },
                osFamily: g.Windows,
                osVersion: {
                    min: m.WINDOWS_7
                }
            }, {
                browserRange: {
                    min: _.fromNumber(64)
                },
                osFamily: g.Android,
                osVersion: {
                    min: _.fromString("4.4.3")
                }
            }], o[I + "|DRM:NO"] = [{
                browserRange: {
                    min: _.fromNumber(42)
                }
            }], o), n[y.Firefox] = (s = {}, s["DRM:YES"] = [{
                browserRange: {
                    min: _.fromNumber(60)
                },
                osFamily: g.Windows,
                osVersion: {
                    min: m.WINDOWS_7
                }
            }, {
                browserRange: {
                    min: _.fromNumber(60)
                },
                osFamily: g.Android,
                osVersion: {
                    min: _.fromString("4.4.3")
                }
            }], s[I + "|DRM:NO"] = [{
                browserRange: {
                    min: _.fromNumber(53)
                },
                osFamily: g.Android,
                osVersion: {
                    min: _.fromString("4.4.3")
                }
            }, {
                browserRange: {
                    min: _.fromNumber(42)
                }
            }], s), n[y.Firefox64] = (a = {}, a["DRM:YES"] = [{
                browserRange: {
                    min: _.fromNumber(60)
                },
                osFamily: g.Windows,
                osVersion: {
                    min: m.WINDOWS_7
                }
            }, {
                browserRange: {
                    min: _.fromNumber(60)
                },
                osFamily: g.Android,
                osVersion: {
                    min: _.fromString("4.4.3")
                }
            }], a[I + "|DRM:NO"] = [{
                browserRange: {
                    min: _.fromNumber(53)
                },
                osFamily: g.Android,
                osVersion: {
                    min: _.fromString("4.4.3")
                }
            }, {
                browserRange: {
                    min: _.fromNumber(42)
                }
            }], a), n[y.Opera] = (l = {}, l["DRM:YES"] = [{
                browserRange: {
                    min: _.fromNumber(37)
                },
                osFamily: g.Windows,
                osVersion: {
                    min: m.WINDOWS_7
                }
            }, {
                browserRange: {
                    min: _.fromNumber(37)
                },
                osFamily: g.Android,
                osVersion: {
                    min: _.fromString("4.4.3")
                }
            }], l[I + "|DRM:NO"] = [{
                browserRange: {
                    min: _.fromNumber(32)
                }
            }], l), n[y.IE] = (c = {}, c["DRM:YES"] = [{
                browserRange: {
                    min: _.fromNumber(11)
                }
            }], c), n[y.Safari] = (u = {}, u["DRM:YES"] = [{
                browserRange: {
                    min: _.fromNumber(10)
                },
                osFamily: g.Mac,
                osVersion: {
                    min: _.fromString("10.12.1")
                }
            }], u["DRM:NO"] = [{
                browserRange: {
                    min: _.fromNumber(8)
                }
            }], u), n[y.Silk] = (p = {}, p["DRM:YES"] = [{
                browserRange: !1
            }], p), n[y.AmazonWebView] = {}, n[y.Edge] = (h = {}, h["DRM:YES"] = [{
                browserRange: {
                    min: _.fromNumber(15)
                }
            }], h["DRM:NO"] = [{
                browserRange: {
                    min: _.fromNumber(15)
                }
            }], h), n[y.EdgeNext] = (f = {}, f["DRM:YES"] = [{
                browserRange: {
                    min: _.fromNumber(64)
                }
            }], f["DRM:NO"] = [{
                browserRange: {
                    min: _.fromNumber(64)
                }
            }], f), n),
            C = function() {
                function t(t) {
                    this.deviceInformation = t
                }
                return (t.prototype.getSupport = function(t, e, i, n, r) {
                    var o = this.deviceInformation.browser,
                        s = this.deviceInformation.operatingSystem,
                        a = o.getType(),
                        l = {
                            supportsWebPlayback: !0,
                            supportsLive: !0,
                            supportsDrm: !0
                        };
                    if (!v.exists(R[a])) return (l.supportsWebPlayback = !1, l.note = S.UNSUPPORTED_BROWSER, l.notSupportedReason = T.UNSUPPORTED_BROWSER, l);
                    var c = this.getBlacklistEntry(a, s, i, r);
                    if (v.exists(c)) {
                        if (this.isBlacklistedOs(c, s)) return (l.supportsWebPlayback = !1, l.notSupportedReason = T.UNSUPPORTED_OS, l.note = S.UNSUPPORTED_OS, l);
                        if (this.isBlacklistedBrowser(c, o)) return (l.supportsWebPlayback = !1, l.notSupportedReason = T.BROWSER_OUT_OF_DATE, l.note = S.UNSUPPORTED_BROWSER, l)
                    }
                    return l
                }, t.prototype.isInRange = function(t, e) {
                    return !!(v.exists(e.min) && e.min.compareTo(t) > 0) || !!(v.exists(e.max) && e.max.compareTo(t) < 0)
                }, t.prototype.isBlacklistedOs = function(t, e) {
                    return !!v.exists(t.osFamily) && (t.osVersion === !1 || this.isInRange(e.getVersion(), t.osVersion))
                }, t.prototype.isBlacklistedBrowser = function(t, e) {
                    return t.browserRange === !1 || this.isInRange(e.getVersion(), t.browserRange)
                }, t.prototype.keyString = function(t) {
                    return (v.exists(t.clientId) ? t.clientId + "|" : "") + ("DRM:" + (t.requiresDrm ? "YES" : "NO"))
                }, t.prototype.getFirst = function(t) {
                    for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                    for (var n = 0, r = e; n < r.length; n++) {
                        var o = r[n];
                        if (v.exists(t[o])) return t[o]
                    }
                    return null
                }, t.prototype.getBlacklistEntry = function(t, e, i, n) {
                    if (!v.exists(R[t])) return null;
                    var r = R[t],
                        o = this.getFirst(r, this.keyString({
                            clientId: n,
                            requiresDrm: i
                        }), this.keyString({
                            clientId: n,
                            requiresDrm: !0
                        }), this.keyString({
                            requiresDrm: i
                        }), this.keyString({
                            requiresDrm: !0
                        })),
                        s = w.max(o, function(t) {
                            return t.osFamily === e.getFamily() ? 2 : v.exists(t.osFamily) ? -(1 / 0) : 1
                        });
                    return w.isObject(s) ? s : null
                }, t)
            }();
        e.exports = C
    }, {
        113: 113,
        272: 272,
        284: 284,
        294: 294,
        4: 4,
        49: 49,
        93: 93
    }],
    27: [function(t, e, i) {
        "use strict";
        var n = t(126),
            r = t(232),
            o = t(272),
            s = o.BrowserType,
            a = o.OperatingSystemFamily,
            l = o.WindowsVersion,
            c = t(80),
            u = t(82),
            p = u.BasicEventEmitter,
            h = t(93),
            f = t(281),
            d = t(284),
            y = t(294),
            g = t(113),
            m = g.LocalStorage,
            v = g.Version,
            E = t(4),
            _ = t(28),
            S = t(49),
            T = t(54),
            b = t(48),
            w = t(26),
            I = f.of("HTML5WebPlayerFactory"),
            R = d.get("HTML5WebPlayerFactory"),
            C = "xpBeta",
            P = function() {
                function t(t, e, i, o, s, a, l, c, u, h, f) {
                    void 0 === i && (i = !1), void 0 === o && (o = new m), void 0 === s && (s = navigator), void 0 === a && (a = n.getInstance()), void 0 === l && (l = _), void 0 === c && (c = T), void 0 === u && (u = w), void 0 === h && (h = new p), void 0 === f && (f = r), this.isBetaEnabled = !1, this.loaderConfig = I(t, "loaderConfig").exists(), this.qosReporter = I(e, "qosReporter").exists(), this.playerBeta = i, this.storage = o, this.navigator = s, this.deviceInformation = a, this.html5LoaderConfig = t.dependencies.ATVWebCascadesPlayer, this.html5WebPlayerLoader = new l(this.loaderConfig, this.qosReporter), this.wrappedXpPlayerLoader = new c(this.qosReporter), this.deviceInformationBlacklist = new u(a), this.eventEmitter = h,
                        this.queryString = f
                }
                return (t.prototype.initialize = function(e, i, n, r, o) {
                    this.cacheOverride = n, this.clientId = o, this.languageCode = r, this.marketplaceId = e, this.weblabs = i, this.isBetaEnabled = "true" === this.storage.get(t.HTML5_BETA_STORAGE_KEY)
                }, t.prototype.getPlayerName = function() {
                    return t.PLAYER_NAME
                }, t.prototype.getPlayerVersion = function() {
                    return this.loaderConfig.dependencies.ATVWebCascadesPlayer.version
                }, t.prototype.getMetricsFeature = function() {
                    return t.METRICS_FEATURE
                }, t.prototype.getDeviceTypeId = function() {
                    return c.DeviceTypeId.HTML5
                }, t.prototype.getPlayerCapabilities = function(e, i) {
                    void 0 === i && (i = {});
                    var n = this.deviceInformation.browser,
                        r = this.deviceInformation.operatingSystem,
                        o = r.getVersion(),
                        c = n.getType(),
                        u = n.getVersion(),
                        p = {
                            supportsDrm: !1,
                            supportsNativePlayback: !1,
                            supportsWebPlayback: !1,
                            supportsAVOD: !1,
                            supportsMidStreamMTA: !1,
                            supportsHDMovies: y.contains(t.HD_MOVIE_SUPPORTED_OSES, r.getFamily()),
                            supportsHDTVShows: !0,
                            supportsLive: !0
                        },
                        f = h.withDefault(i.supportsDrm, !0),
                        d = this.deviceInformationBlacklist.getSupport(this.weblabs, this.isBetaEnabled, f, h.withDefault(i.supportsLive, !1), this.clientId);
                    if (p.supportsDrm = d.supportsDrm, p.supportsLive = d.supportsLive, !d.supportsWebPlayback) return void e(p, d.note, d.notSupportedReason);
                    var g = E.UNSUPPORTED_BROWSER,
                        m = S.UNSUPPORTED_BROWSER,
                        _ = this.clientId === t.TNF_GATEWAY_CLIENT_ID,
                        T = !1;
                    if (_ && (c === s.Safari && (T = !0), this.isFirefoxBrowser(c) && (r.getFamily() === a.Mac && o.compareTo(v.fromString("10.12")) >= 0 && o.compareTo(v.fromString("10.14")) < 0 && u.compareTo(v.fromNumber(60)) >= 0 && u.compareTo(v.fromNumber(62)) < 0 && (T = !0), r.getFamily() === a.Windows && (r.getVersion().equals(l.WINDOWS_7) || r.getVersion().equals(l.WINDOWS_10)) && c === s.Firefox64 && (T = !0)), r.getVersion().equals(l.WINDOWS_8_1) && c === s.IE && u.compareTo(v.fromNumber(11)) >= 0 && u.compareTo(v.fromNumber(12)) < 0 && (T = !0), r.getVersion().equals(l.WINDOWS_10) && c === s.Edge && u.compareTo(v.fromNumber(14)) >= 0 && u.compareTo(v.fromNumber(16)) < 0 && (T = !0)), T) return (p.supportsWebPlayback = !1, void e(p, g, m));
                    if ((_ || i.supportsLive) && this.isFirefoxBrowser(c) && u.equals(v.fromNumber(55)) && r.getFamily() === a.Mac && o.equals(v.fromString("10.13"))) return (p.supportsWebPlayback = !1, void e(p, g, m));
                    if (_ && (!p.supportsLive || !p.supportsDrm)) return (p.supportsWebPlayback = !1, g = E.UNSUPPORTED_BROWSER, m = S.UNSUPPORTED_BROWSER, void e(p, g, m));
                    if (h.isNullOrUndefined(window.MediaSource) && r.getFamily() === a.iOS && !f && this.isHLSCapable()) R.info("HLS non-DRM support detected."), p.supportsWebPlayback = !0, m = null, g = "";
                    else if (h.isNullOrUndefined(window.MediaSource)) p.supportsWebPlayback = !1, m = S.UNSUPPORTED_BROWSER, g = E.MISSING_MEDIA_SOURCE;
                    else if (f) {
                        if (this.isSupportedWebkitBrowser(c)) {
                            if (h.exists(this.navigator.requestMediaKeySystemAccess)) return (R.info("navigator.requestMediaKeySystemAccess support detected."), void this.supportsUnprefixedEme(function(t, i) {
                                g = t ? "" : c === s.EdgeNext ? E.MISSING_PLAYREADY_CDM : E.MISSING_WIDEVINE_CDM, h.exists(i) && (g += ": " + i), p.supportsDrm = t, p.supportsWebPlayback = t, m = t ? null : S.MISSING_CDM, e(p, g, m)
                            }))
                        } else if (c === s.IE || c === s.Edge)
                            if (h.exists(window.MSMediaKeys)) try {
                                window.MSMediaKeys.isTypeSupported(t.PLAY_READY_KEY_SYSTEM, t.VIDEO_CONTENT_TYPE) && window.MSMediaKeys.isTypeSupported(t.PLAY_READY_KEY_SYSTEM, t.AUDIO_CONTENT_TYPE) ? (R.info("PlayReady support detected."), p.supportsWebPlayback = !0, p.supportsDrm = !0, m = null, g = "") : (g = E.MISSING_CODEC_IN_PLAYREADY_CDM, m = S.MISSING_CODEC, R.info("Audio/Video types not supported by MSMediaKeys"))
                            } catch (t) {
                                g = E.MISSING_PLAYREADY_CDM, m = S.MISSING_CDM, R.error("An error occurred when checking MSMediaKeys", t)
                            } else g = E.MISSING_PLAYREADY_CDM, m = S.MISSING_CDM, R.info("No MSMediaKeys object detected. PlayReady not supported");
                            else if (c === s.Safari) this.isFairplaySupported() ? (p.supportsWebPlayback = !0, p.supportsDrm = !0, p.supportsLive = !0, g = "", m = null, R.info("Safari MP2T+MSE support detected.")) : (p.supportsWebPlayback = !1, g = E.MISSING_FAIRPLAY_CDM, m = S.MISSING_CDM, R.info("Detected Safari version " + u.toString() + " on MacOS version " + o.toString() + ", but WebKitMediaKeys.canPlayType returned false"));
                        else if (this.isFirefoxBrowser(c)) {
                            if (h.exists(this.navigator.requestMediaKeySystemAccess)) return (R.info("navigator.requestMediaKeySystemAccess support detected."), void this.supportsUnprefixedEme(function(t, i) {
                                g = t ? "" : E.MISSING_WIDEVINE_CDM, h.exists(i) && (g += ": " + i), p.supportsDrm = t, p.supportsWebPlayback = t, m = t ? null : S.MISSING_CDM, e(p, g, m)
                            }));
                            p.supportsWebPlayback = !1, g = E.UNSUPPORTED_BROWSER, m = S.UNSUPPORTED_BROWSER, R.info("Firefox not supported because DRM is required.")
                        }
                    } else {
                        R.info("No DRM required, not checking DRM support.");
                        var b = MediaSource.isTypeSupported(t.VIDEO_CONTENT_TYPE),
                            w = MediaSource.isTypeSupported(t.AUDIO_CONTENT_TYPE);
                        R.info('"' + t.VIDEO_CONTENT_TYPE + '" supported: ' + b), R.info('"' + t.AUDIO_CONTENT_TYPE + '" supported: ' + w);
                        var I = w && b;
                        p.supportsWebPlayback = I, m = I ? null : S.MISSING_CODEC, g = ""
                    }
                    e(p, g, m)
                }, t.prototype.createWebPlayer = function(t, e) {
                    this.supportsWrappedXpPlayer() ? this.wrappedXpPlayerLoader.createWebPlayer(t, e) : this.html5WebPlayerLoader.createWebPlayer(this.cacheOverride, t, e)
                }, t.prototype.on = function(t, e) {
                    this.eventEmitter.on(t, e)
                }, t.prototype.once = function(t, e) {
                    this.eventEmitter.once(t, e)
                }, t.prototype.off = function(t, e) {
                    this.eventEmitter.off(t, e)
                }, t.prototype.supportsWrappedXpPlayer = function() {
                    var t = this.queryString.getParameter(C);
                    return t === !0
                }, t.prototype.isFirefoxBrowser = function(t) {
                    return t === s.Firefox || t === s.Firefox64
                }, t.prototype.isFairplaySupported = function() {
                    return "undefined" != typeof window.WebKitMediaKeys && window.WebKitMediaKeys.isTypeSupported(t.SAFARI_KEY_SYSTEM, t.MP2TS_CONTENT_TYPE)
                }, t.prototype.isSupportedWebkitBrowser = function(t) {
                    return t === s.EdgeNext || t === s.Chrome || t === s.Silk || t === s.Opera || t === s.AmazonWebView
                }, t.prototype.isHLSCapable = function() {
                    var e = document.createElement("video");
                    return h.exists(e.canPlayType) && "" !== e.canPlayType(t.HLS_CONTENT_TYPE)
                }, t.prototype.supportsUnprefixedEme = function(e) {
                    var i = this,
                        n = new b,
                        r = n.getDrmSystems(),
                        o = function(n, r) {
                            return i.navigator.requestMediaKeySystemAccess(n.keySystem, r).then(function() {
                                R.info(n.keySystem + ", " + t.INIT_DATA_TYPE + ', "' + t.VIDEO_CONTENT_TYPE + '", and "' + t.AUDIO_CONTENT_TYPE + '" support detected.'), e(!0)
                            })
                        };
                    r.reduce(function(t, e) {
                        return e.configurations.reduce(function(t, i) {
                            return h.exists(t) ? t["catch"](function(t) {
                                return o(e, i)
                            }) : o(e, i)
                        }, t)
                    }, null)["catch"](function(i) {
                        R.info("No supported keySystem, " + t.INIT_DATA_TYPE + ', "' + t.VIDEO_CONTENT_TYPE + '", and/or "' + t.AUDIO_CONTENT_TYPE + '" support detected.'), e(!1, i)
                    })
                }, t.HTML5_NOT_USED_ERROR_NAME = "HTML5PlayerNotUsedWarning", t.PLAYER_NAME = "html5", t.TNF_GATEWAY_CLIENT_ID = "511cc9af-3ecb-48fe-9825-886ebfbb6503", t.HTML5_BETA_STORAGE_KEY = "html5_web_player_beta", t.VIDEO_CONTENT_TYPE = 'video/mp4; codecs="avc1.640028"', t.AUDIO_CONTENT_TYPE = 'audio/mp4; codecs="mp4a.40.2"', t.HLS_CONTENT_TYPE = "application/vnd.apple.mpegURL", t.MP2TS_CONTENT_TYPE = "video/mp2t", t.INIT_DATA_TYPE = "cenc", t.PLAY_READY_KEY_SYSTEM = "com.microsoft.playready", t.SAFARI_KEY_SYSTEM = "com.apple.fps.2_0", t.METRICS_FEATURE = "HTML5Player", t.HD_MOVIE_SUPPORTED_OSES = [a.Windows, a.WindowsPhone, a.ChromeOS, a.Mac, a.Linux], t)
            }();
        e.exports = P
    }, {
        113: 113,
        126: 126,
        232: 232,
        26: 26,
        272: 272,
        28: 28,
        281: 281,
        284: 284,
        294: 294,
        4: 4,
        48: 48,
        49: 49,
        54: 54,
        80: 80,
        82: 82,
        93: 93
    }],
    28: [function(t, e, i) {
        "use strict";
        var n = t(231),
            r = n.ErrorSeverity,
            o = t(187),
            s = t(281),
            a = t(284),
            l = t(294),
            c = t(250),
            u = c.JavaScriptLoader,
            p = c.LazyCachingScriptLoader,
            h = c.TransparentCachingScriptLoader,
            f = c.ScriptType,
            d = s.of("HTML5WebPlayerLoader"),
            y = a.get("HTML5WebPlayerLoader"),
            g = "HTML5JavaScriptDownloadTime",
            m = "HTML5JavaScriptDownloadError",
            v = "HTML5JavaScriptCacheHit",
            E = "HTML5JavaScriptCacheMiss",
            _ = "HTML5JavaScriptDownloadInfo",
            S = function() {
                function t(t, e, i, n, r) {
                    void 0 === i && (i = new u), void 0 === n && (n = new p), void 0 === r && (r = new h), this.loaderConfig = d(t, "loaderConfig").exists(), this.qosReporter = d(e, "qosReporter").exists(), this.javaScriptLoader = i, this.lazyScriptLoader = n, this.transparentScriptLoader = r, this.html5LoaderConfig = t.dependencies.ATVWebCascadesPlayer
                }
                return (t.prototype.createWebPlayer = function(t, e, i) {
                    var n, s = this,
                        a = function(t) {
                            var e = t && l.isFunction(t.toString) ? t.toString() : "Unknown Error";
                            i(m, e, r.Fatal)
                        },
                        c = this.loaderConfig.assetsRoot + "/" + this.html5LoaderConfig.name + "/" + this.html5LoaderConfig.version + "/js/" + this.html5LoaderConfig.name + ".js";
                    n = l.isBoolean(t) && !t ? this.javaScriptLoader : this.html5LoaderConfig.forceUpdate ? this.transparentScriptLoader : this.lazyScriptLoader;
                    var u = c;
                    if (n) {
                        var p = {
                            crc32: this.html5LoaderConfig.crc32,
                            url: c,
                            name: this.html5LoaderConfig.name,
                            type: f.JAVASCRIPT,
                            version: this.html5LoaderConfig.version
                        };
                        n.get(p, function(t) {
                            u = JSON.stringify(t), o.putMetric(g, t.totalMs, "ms"), o.putMetric(t.cached ? v : E, 1), s.qosReporter.reportInformation(_, u, t.totalMs);
                            var i;
                            try {
                                i = new window.ATVWebCascadesPlayer
                            } catch (t) {
                                return void a(t)
                            }
                            e(i)
                        }, function(t, e) {
                            var i = t && l.isFunction(t.toString) ? t.toString() : "Unknown Error",
                                n = JSON.stringify(e);
                            y.error(i), s.qosReporter.reportError(m, r.NonFatal, i, n)
                        }, a)
                    }
                }, t)
            }();
        e.exports = S
    }, {
        187: 187,
        231: 231,
        250: 250,
        281: 281,
        284: 284,
        294: 294
    }],
    29: [function(t, e, i) {
        "use strict";
        var n = t(231),
            r = n.NotificationEvent,
            o = t(113),
            s = o.LocalStorage,
            a = function() {
                function t(t, e) {
                    void 0 === e && (e = new s);
                    var i = this;
                    this.getTemplate = function() {
                        var t = i.browserUpdateKey;
                        return {
                            renderString: function(e) {
                                return e[t]
                            }
                        }
                    }, this.browserUpdateKey = t, this.storage = e
                }
                return (t.prototype.createNotification = function() {
                    var t = this;
                    return new r(this.getTemplate(), null, !0, null, function() {
                        return t.setDontShowAgain()
                    })
                }, t.prototype.setDontShowAgain = function() {
                    this.storage.set(t.DONT_SHOW_AGAIN_KEY, "true")
                }, t.DONT_SHOW_AGAIN_KEY = "dont_show_update_browser", t)
            }();
        e.exports = a
    }, {
        113: 113,
        231: 231
    }],
    30: [function(t, e, i) {
        "use strict";
        var n = t(113),
            r = n.HTMLElementUtils,
            o = t(281),
            s = o.of("ErrorDisplayManager"),
            a = function() {
                function t(t) {
                    void 0 === t && (t = document), this.parent = null, this.localizationStore = null, this.amazonUrlCreator = null, this.onClosePlayerClicked = null, this.documentRef = t
                }
                return (t.prototype.initialize = function(t, e, i, n) {
                    this.parent = s(t, "parent").exists(), this.localizationStore = s(e, "localizationStore").exists(), this.amazonUrlCreator = s(i, "amazonUrlCreator").exists(), this.onClosePlayerClicked = s(n, "onClosePlayerClicked").is.a["function"]()
                }, t.prototype.showError = function(e, i) {
                    void 0 === i && (i = !0), s(this.parent, "this.parent").exists(), s(e, "template").exists();
                    var n = this.documentRef.createElement("div");
                    n.style.height = "100%", n.style.width = "100%", n.innerHTML = e.renderString(this.localizationStore.getLocalization(), this.amazonUrlCreator), this.parent.appendChild(n);
                    for (var o = r.getElementsByClassName(n, t.CLOSE_PLAYER_BUTTON_CLASS), a = 0; a < o.length; a++) i ? o[a].onclick = this.onClosePlayerClicked : o[a].style.display = "none"
                }, t.CLOSE_PLAYER_BUTTON_CLASS = "closePlayerButton", t)
            }();
        e.exports = a
    }, {
        113: 113,
        281: 281
    }],
    31: [function(t, e, i) {
        "use strict";
        var n = t(281),
            r = t(93),
            o = t(287),
            s = n.of("ModalTemplate"),
            a = function() {
                function t(t) {
                    this.mustacheTemplate = '<div class="table"><div class="tableCell"><div class="modal">{{>contents}}</div></div></div>', this.key = s(t, "key").is.a.string()
                }
                return (t.prototype.renderString = function(t, e, i) {
                    s(t, "localization").exists(), r.isNullOrUndefined(i) && (i = {
                        contents: "{{{description}}}"
                    });
                    var n = {
                            contactUsDigitalUrl: e.createCSUrl("CONTACT_US_DIGITAL"),
                            contactUsOrdersUrl: e.createCSUrl("CONTACT_US_ORDERS"),
                            devicesAndFeatures: e.createCSUrl("DEVICES_AND_FEATURES"),
                            systemRequirementsUrl: e.createCSUrl("SYSTEM_REQUIREMENTS"),
                            avSettingsUrl: e.createCSUrl("AV_SETTINGS"),
                            resetPinUrl: e.createCSUrl("RESET_PIN"),
                            setupPinUrl: e.createCSUrl("SETUP_PIN"),
                            videoHelpUrl: e.createCSUrl("VIDEO_HELP"),
                            videoIssuesUrl: e.createCSUrl("VIDEO_ISSUES")
                        },
                        a = t[this.key];
                    return (a.description = o.render(a.description, n), a.notes = o.render(a.notes, n), a.footer = o.render(a.footer, n), a.incorrectPin = o.render(a.incorrectPin, n), a.troubleshoot = o.render(a.troubleshoot, n), o.render(this.mustacheTemplate, a, i))
                }, t)
            }();
        e.exports = a
    }, {
        281: 281,
        287: 287,
        93: 93
    }],
    32: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(93),
            o = t(294),
            s = t(31),
            a = function(t) {
                function e(e) {
                    return t.call(this, e) || this
                }
                return (n(e, t), e.prototype.renderString = function(i, n, s) {
                    var a = {
                        closeButton: '<div class="closePlayerButton closePlayer html5"></div>',
                        contents: e.TEMPLATE,
                        extraText: ""
                    };
                    return (r.isNullOrUndefined(s) || o.extend(a, s), t.prototype.renderString.call(this, i, n, a))
                }, e.TEMPLATE = "<div class='title'>{{{title}}}{{>closeButton}}</div><div class='description'>{{{description}}}{{>extraText}}</div>{{#footer}}<div class='footer'>{{{footer}}}</div>{{/footer}}", e)
            }(s);
        e.exports = a
    }, {
        294: 294,
        31: 31,
        93: 93
    }],
    33: [function(t, e, i) {
        "use strict";
        var n = t(190),
            r = n.NotificationManager,
            o = t(113),
            s = o.HTMLElementUtils,
            a = t(284),
            l = t(287),
            c = t(93),
            u = t(281),
            p = u.of("NotificationDisplayManager"),
            h = a.get("NotificationDisplayManager"),
            f = function() {
                function t(t, e, i) {
                    void 0 === t && (t = new r), void 0 === e && (e = window), void 0 === i && (i = document);
                    var n = this;
                    this.localizationStore = null, this.amazonUrlCreator = null, this.notificationContainerElement = null, this.currentNotification = null, this.hidingNotification = !1, this.notificationHiddenCallback = null, this.onWindowResize = function() {
                        n.notificationContainerElement.offsetHeight > 0 && n.setNotificationAndPlayerHeight()
                    }, this.notificationManager = t, this.windowRef = e, this.documentRef = i
                }
                return (t.prototype.initialize = function(t, e, i, n) {
                    var r = this;
                    this.parent = p(t, "parent").exists(), this.playerElement = p(e, "player").exists(), this.localizationStore = p(i, "localizationStore").exists(), this.amazonUrlCreator = p(n, "amazonUrlCreator").exists(), this.notificationManager.initialize(function(t) {
                        return r.hidingNotification ? null !== r.notificationHiddenCallback ? void h.error("Attempted to show a notification while another notification is waiting to be shown") : void(r.notificationHiddenCallback = function() {
                            r.onShowNotification(t)
                        }) : void r.onShowNotification(t)
                    }, function(t) {
                        r.onCloseNotification(t)
                    })
                }, t.prototype.addNotification = function(t, e) {
                    void 0 === e && (e = !0), p(t, "event").exists(), this.tryInitializeContainer(), this.notificationManager.addNotification(t, e)
                }, t.prototype.cancelNotification = function(t) {
                    p(t, "event").exists(), this.notificationManager.cancelNotification(t)
                }, t.prototype.showQueuedNotifications = function() {
                    this.notificationManager.hasQueuedNotifications() && (this.setNotificationAndPlayerHeight(), this.notificationManager.showQueuedNotifications())
                }, t.prototype.onShowNotification = function(e) {
                    this.tryInitializeContainer(), this.currentNotification = e;
                    var i = this.localizationStore.getLocalization(),
                        n = {
                            contactUsDigitalUrl: this.amazonUrlCreator.createCSUrl("CONTACT_US_DIGITAL"),
                            contactUsOrdersUrl: this.amazonUrlCreator.createCSUrl("CONTACT_US_ORDERS"),
                            devicesAndFeatures: this.amazonUrlCreator.createCSUrl("DEVICES_AND_FEATURES"),
                            systemRequirementsUrl: this.amazonUrlCreator.createCSUrl("SYSTEM_REQUIREMENTS"),
                            avSettingsUrl: this.amazonUrlCreator.createCSUrl("AV_SETTINGS"),
                            resetPinUrl: this.amazonUrlCreator.createCSUrl("RESET_PIN"),
                            setupPinUrl: this.amazonUrlCreator.createCSUrl("SETUP_PIN"),
                            videoHelpUrl: this.amazonUrlCreator.createCSUrl("VIDEO_HELP"),
                            videoIssuesUrl: this.amazonUrlCreator.createCSUrl("VIDEO_ISSUES")
                        };
                    this.messageTextElement.innerHTML = this.currentNotification.getMessageTemplate().renderString(i, n) + " ", this.expandedMessageElement.innerHTML = "";
                    var r = this.currentNotification.getClosable(),
                        o = c.exists(this.currentNotification.getOnDontShowAgain()),
                        a = !1;
                    c.exists(this.currentNotification.getExpandedMessageTemplate()) && (this.expandedMessageElement.innerHTML = this.currentNotification.getExpandedMessageTemplate().renderString(i, n), a = !0), this.addWindowListeners(), s.addClass(this.playerElement, t.PLAYER_HEIGHT_TRANSITION_CSS_CLASS), this.messageIsExpanded = !1, this.showMoreButton.innerHTML = i.notification.showMore, this.showMoreButton.style.display = a ? "" : "none", this.showMoreDivider.style.display = a && (r || o) ? "" : "none", this.dismissButton.style.display = r ? "" : "none", this.dismissDivider.style.display = r && o ? "" : "none", this.dontShowAgainButton.style.display = o ? "" : "none", this.setNotificationAndPlayerHeight()
                }, t.prototype.onCloseNotification = function(t) {
                    t === this.currentNotification && this.hideNotification()
                }, t.prototype.tryInitializeContainer = function() {
                    var e = this;
                    if (!this.notificationInitialized) {
                        this.messageIsExpanded = !1, this.notificationContainerElement = this.documentRef.createElement("div"), this.notificationContainerElement.className = t.CONTAINER_CSS_CLASS;
                        var i = this.localizationStore.getLocalization(),
                            n = {
                                dismiss: i.notification.dismiss,
                                dismiss_button_css_class: t.DISMISS_BUTTON_CSS_CLASS,
                                dismiss_divider_css_class: t.DISMISS_DIVIDER_CSS_CLASS,
                                dont_show_again: i.notification.dontShowAgain,
                                dont_show_again_css_class: t.DONT_SHOW_AGAIN_BUTTON_CSS_CLASS,
                                expanded_message_css_class: t.EXPANDED_MESSAGE_CSS_CLASS,
                                message_css_class: t.MESSAGE_CSS_CLASS,
                                message_text_css_class: t.MESSAGE_TEXT_CSS_CLASS,
                                show_more: i.notification.showMore,
                                show_more_button_css_class: t.SHOW_MORE_BUTTON_CSS_CLASS,
                                show_more_divider_css_class: t.SHOW_MORE_DIVIDER_CSS_CLASS
                            };
                        this.notificationContainerElement.innerHTML = l.render(t.MUSTACHE_TEMPLATE, n), this.parent.insertBefore(this.notificationContainerElement, this.parent.firstChild), this.messageElement = s.getElementsByClassName(this.notificationContainerElement, t.MESSAGE_CSS_CLASS)[0], this.messageTextElement = s.getElementsByClassName(this.notificationContainerElement, t.MESSAGE_TEXT_CSS_CLASS)[0], this.expandedMessageElement = s.getElementsByClassName(this.notificationContainerElement, t.EXPANDED_MESSAGE_CSS_CLASS)[0], this.showMoreButton = s.getElementsByClassName(this.notificationContainerElement, t.SHOW_MORE_BUTTON_CSS_CLASS)[0], this.showMoreButton.onclick = function() {
                            e.toggleExpandedMessage()
                        }, this.dismissButton = s.getElementsByClassName(this.notificationContainerElement, t.DISMISS_BUTTON_CSS_CLASS)[0], this.dismissButton.onclick = function() {
                            e.cancelNotification(e.currentNotification)
                        }, this.dontShowAgainButton = s.getElementsByClassName(this.notificationContainerElement, t.DONT_SHOW_AGAIN_BUTTON_CSS_CLASS)[0], this.dontShowAgainButton.onclick = function() {
                            if (c.exists(e.currentNotification)) {
                                var t = e.currentNotification.getOnDontShowAgain();
                                c.exists(t) && t(), e.cancelNotification(e.currentNotification)
                            } else e.hideNotification()
                        }, this.dismissDivider = s.getElementsByClassName(this.notificationContainerElement, t.DISMISS_DIVIDER_CSS_CLASS)[0], this.showMoreDivider = s.getElementsByClassName(this.notificationContainerElement, t.SHOW_MORE_DIVIDER_CSS_CLASS)[0], this.hideNotification(), this.notificationInitialized = !0
                    }
                }, t.prototype.hideNotification = function() {
                    var e = this;
                    return (this.removeWindowListeners(), this.messageIsExpanded = !1, this.notificationContainerElement.style.height = "0px", this.playerElement.style.height = "100%", null === this.currentNotification ? void this.onNotificationHidden() : (this.hidingNotification = !0, void setTimeout(function() {
                        e.onNotificationHidden()
                    }, t.NOTIFICATION_CLOSE_TIME)))
                }, t.prototype.onNotificationHidden = function() {
                    this.hidingNotification = !1, s.removeClass(this.playerElement, t.PLAYER_HEIGHT_TRANSITION_CSS_CLASS), this.expandedMessageElement.innerHTML = "", this.messageTextElement.innerHTML = "", this.showMoreButton.innerHTML = "", this.dismissButton.style.display = "none", this.dismissDivider.style.display = "none", this.dontShowAgainButton.style.display = "none", this.showMoreButton.style.display = "none", this.showMoreDivider.style.display = "none", this.currentNotification = null, null !== this.notificationHiddenCallback && (this.notificationHiddenCallback(), this.notificationHiddenCallback = null)
                }, t.prototype.toggleExpandedMessage = function() {
                    var t = this.localizationStore.getLocalization();
                    this.messageIsExpanded = !this.messageIsExpanded, this.showMoreButton.innerHTML = this.messageIsExpanded ? t.notification.showLess : t.notification.showMore, this.setNotificationAndPlayerHeight()
                }, t.prototype.addWindowListeners = function() {
                    this.windowRef.addEventListener ? this.windowRef.addEventListener("resize", this.onWindowResize, !0) : this.windowRef.attachEvent && this.windowRef.attachEvent("onresize", this.onWindowResize)
                }, t.prototype.removeWindowListeners = function() {
                    this.windowRef.removeEventListener ? this.windowRef.removeEventListener("resize", this.onWindowResize) : this.windowRef.detachEvent && this.windowRef.detachEvent("onresize", this.onWindowResize)
                }, t.prototype.setNotificationAndPlayerHeight = function() {
                    this.messageIsExpanded ? (this.notificationContainerElement.style.height = this.messageElement.offsetHeight + this.expandedMessageElement.offsetHeight + "px", this.playerElement.style.height = this.parent.offsetHeight - this.messageElement.offsetHeight - this.expandedMessageElement.offsetHeight + "px") : (this.notificationContainerElement.style.height = this.messageElement.offsetHeight + "px", this.playerElement.style.height = this.parent.offsetHeight - this.messageElement.offsetHeight + "px")
                }, t.CONTAINER_CSS_CLASS = "notificationContainer", t.DISMISS_BUTTON_CSS_CLASS = "dismissButton", t.DISMISS_DIVIDER_CSS_CLASS = "dismissDivider", t.DONT_SHOW_AGAIN_BUTTON_CSS_CLASS = "dontShowAgainButton", t.EXPANDED_MESSAGE_CSS_CLASS = "notificationExpandedMessage", t.MESSAGE_CSS_CLASS = "notificationMessage", t.MESSAGE_TEXT_CSS_CLASS = "notificationMessageText", t.PLAYER_HEIGHT_TRANSITION_CSS_CLASS = "heightTransition", t.SHOW_MORE_BUTTON_CSS_CLASS = "showMoreButton", t.SHOW_MORE_DIVIDER_CSS_CLASS = "showMoreDivider", t.MUSTACHE_TEMPLATE = "<div class='{{{message_css_class}}}'>n            <span class='{{{message_text_css_class}}}'></span>n            <a style='display:none;' class='{{{show_more_button_css_class}}}'>{{{show_more}}}</a>n            <span style='display:none;' class='{{{show_more_divider_css_class}}}'> | </span>n            <a style='display:none;' class='{{{dismiss_button_css_class}}}'>{{{dismiss}}}</a>n            <span style='display:none;' class='{{{dismiss_divider_css_class}}}'> | </span>n            <a style='display:none;' class='{{{dont_show_again_css_class}}}'>{{{dont_show_again}}}</a>n        </div>n        <div class='{{{expanded_message_css_class}}}'></div>", t.NOTIFICATION_CLOSE_TIME = 200, t)
            }();
        e.exports = f
    }, {
        113: 113,
        190: 190,
        281: 281,
        284: 284,
        287: 287,
        93: 93
    }],
    34: [function(t, e, i) {
        "use strict";
        var n = t(113),
            r = n.Version,
            o = t(272),
            s = o.BrowserType,
            a = t(231),
            l = a.PINAcceptedEvent,
            c = a.PINDeclinedEvent,
            u = a.PINErrorEvent,
            p = a.PINRequiredEvent,
            h = t(113),
            f = h.HTMLElementUtils,
            d = t(284),
            y = t(93),
            g = t(281),
            m = t(294),
            v = t(35),
            E = g.of("PINDisplayManager"),
            _ = d.get("PINDisplayManager"),
            S = function() {
                function t(t) {
                    if (y.isNullOrUndefined(t)) {
                        var e = o.getBrowser();
                        this.isIE9 = e.getType() === s.IE && e.getVersion().compareTo(r.fromNumber(10)) < 0
                    } else this.isIE9 = t
                }
                return (t.prototype.initialize = function(t, e, i, n, r, o) {
                    this.webPlayer = E(t, "webPlayer").exists(), this.eventEmitter = E(e, "eventEmitter").exists(), this.parent = E(i, "parent").exists(), this.localizationStore = E(n, "localizationStore").exists(), this.amazonUrlCreator = E(r, "amazonUrlCreator").exists(), this.onClosePlayerClicked = E(o, "onClosePlayerClicked").is.a["function"](), this.attachEventListeners(), this.createDOMElements(), this.validatingPIN = !1
                }, t.prototype.requestPIN = function(e) {
                    var i = this;
                    y.isNullOrUndefined(e) && (e = this.pinLength), E(this.parent, "this.parent").exists(), E(0 !== e, "pinLength !== 0").is["true"]();
                    var n = f.getElementsByClassName(this.pinWrapper, t.PIN_FIELDS_CLASS)[0];
                    n.innerHTML = "", this.pinFields = [], this.pinValues = [];
                    for (var r = 0; r < e; r++) {
                        var o = document.createElement("input");
                        o.type = "text", o.maxLength = 1, o.className = t.PIN_FIELD_CLASS, this.isIE9 && (o.className += " ie9"), n.appendChild(o), this.pinFields.push(o), o.onkeydown = function(t) {
                            i.onKeyDown(t)
                        }, o.onkeyup = function() {
                            i.onKeyUp()
                        }, this.pinValues.push("")
                    }
                    0 === f.getElementsByClassName(this.parent, t.PIN_WRAPPER_CLASS).length && this.parent.appendChild(this.pinWrapper), this.pinWrapper.style.display = "block", this.pinFields[0].focus()
                }, t.prototype.hideModal = function() {
                    this.toggleVisibility(t.INCORRECT_PIN_TEXT_CLASS, !1), this.pinWrapper.style.display = ""
                }, t.prototype.onPINRequired = function(t) {
                    this.pinLength = t.getPINLength()
                }, t.prototype.onPINAccepted = function() {
                    _.info("PIN on playback was accepted."), this.validatingPIN = !1, this.toggleVisibility(t.INCORRECT_PIN_TEXT_CLASS, !1), this.hideModal()
                }, t.prototype.onPINDeclined = function() {
                    _.info("PIN on playback was declined."), this.validatingPIN = !1, this.toggleVisibility(t.INCORRECT_PIN_TEXT_CLASS, !0);
                    for (var e = 0; e < this.pinFields.length; e++) this.pinFields[e].value = "", this.pinValues[e] = "";
                    this.pinFields[0].focus()
                }, t.prototype.onPINError = function() {
                    _.error("Error returned by ValidatePin API."), this.validatingPIN = !1, this.toggleVisibility(t.INCORRECT_PIN_TEXT_CLASS, !1), this.hideModal()
                }, t.prototype.toggleVisibility = function(t, e) {
                    var i = f.getElementsByClassName(this.pinWrapper, t)[0];
                    i.style.display = e ? "block" : "none"
                }, t.prototype.keyCodeIsNumber = function(e) {
                    return e >= t.START_OF_NUMBER_KEYCODES && e <= t.END_OF_NUMBER_KEYCODES || e >= t.START_OF_NUMPAD_KEYCODES && e <= t.END_OF_NUMPAD_KEYCODES
                }, t.prototype.pinIsEntered = function() {
                    for (var t = 0; t < this.pinValues.length; t++)
                        if ("" === this.pinValues[t]) return !1;
                    return !0
                }, t.prototype.onKeyDown = function(e) {
                    e = e || event;
                    var i = e.target || e.srcElement,
                        n = m.indexOf(this.pinFields, i),
                        r = window.event ? e.keyCode : e.which;
                    if (r === t.DELETE_KEYCODE || r === t.BACKSPACE_KEYCODE) {
                        this.preventDefault(e);
                        var o = n;
                        n > 0 && "" === this.pinFields[n].value && (o = n - 1), this.pinFields[o].focus(), this.pinFields[o].value = "", this.pinValues[o] = ""
                    } else this.keyCodeIsNumber(r) ? (this.preventDefault(e), r > t.END_OF_NUMBER_KEYCODES && (r -= t.START_OF_NUMBER_KEYCODES), this.pinFields[n].value = "u2022", this.pinValues[n] = String.fromCharCode(r), n !== this.pinFields.length - 1 && this.pinFields[n + 1].focus()) : r === t.ESCAPE_KEYCODE ? this.onCancelPIN() : r !== t.TAB_KEYCODE && r !== t.SHIFT_KEYCODE && this.preventDefault(e)
                }, t.prototype.preventDefault = function(t) {
                    y.isNullOrUndefined(t.preventDefault) ? t.returnValue = !1 : t.preventDefault()
                }, t.prototype.onKeyUp = function() {
                    this.onSubmitPIN()
                }, t.prototype.getPINString = function() {
                    for (var t = "", e = 0; e < this.pinValues.length; e++) t += this.pinValues[e];
                    return t
                }, t.prototype.onCancelPIN = function() {
                    _.info("PIN on playback was cancelled."), this.hideModal(), this.onClosePlayerClicked()
                }, t.prototype.onSubmitPIN = function() {
                    this.pinIsEntered() && !this.validatingPIN && (_.info("PIN on playback was submitted."), this.validatingPIN = !0, this.webPlayer.validatePIN(this.getPINString()))
                }, t.prototype.attachEventListeners = function() {
                    var t = this;
                    this.webPlayer.on(l, function() {
                        t.onPINAccepted()
                    }), this.webPlayer.on(c, function() {
                        t.onPINDeclined()
                    }), this.webPlayer.on(u, function() {
                        t.onPINError()
                    }), this.webPlayer.on(p, function(e) {
                        t.onPINRequired(e)
                    })
                }, t.prototype.createDOMElements = function() {
                    var e = this;
                    this.pinModalTemplate = new v(t.LOCALIZATION_KEY), this.pinWrapper = document.createElement("div"), this.pinWrapper.className = t.PIN_WRAPPER_CLASS, this.pinWrapper.style.display = "none", this.pinWrapper.innerHTML = this.pinModalTemplate.renderString(this.localizationStore.getLocalization(), this.amazonUrlCreator);
                    for (var i = f.getElementsByClassName(this.pinWrapper, t.CLOSE_PLAYER_BUTTON_CLASS), n = 0; n < i.length; n++) i[n].onclick = function() {
                        e.onCancelPIN()
                    }
                }, t.LOCALIZATION_KEY = "pinModal", t.CLOSE_PLAYER_BUTTON_CLASS = "closePlayerButton", t.INCORRECT_PIN_TEXT_CLASS = "incorrectPINText", t.PIN_FIELD_CLASS = "pinField", t.PIN_FIELDS_CLASS = "pinFields", t.PIN_WRAPPER_CLASS = "pinWrapper", t.START_OF_NUMBER_KEYCODES = 48, t.END_OF_NUMBER_KEYCODES = 57, t.START_OF_NUMPAD_KEYCODES = 96, t.END_OF_NUMPAD_KEYCODES = 105, t.BACKSPACE_KEYCODE = 8, t.DELETE_KEYCODE = 46, t.ESCAPE_KEYCODE = 27, t.SHIFT_KEYCODE = 16, t.TAB_KEYCODE = 9, t)
            }();
        e.exports = S
    }, {
        113: 113,
        231: 231,
        272: 272,
        281: 281,
        284: 284,
        294: 294,
        35: 35,
        93: 93
    }],
    35: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(32),
            o = function(t) {
                function e(e) {
                    return t.call(this, e) || this
                }
                return (n(e, t), e.prototype.renderString = function(i, n) {
                    return t.prototype.renderString.call(this, i, n, {
                        extraText: e.PIN_TEMPLATE
                    })
                }, e.PIN_TEMPLATE = "<div class='pinFields'></div><div class='incorrectPINText'>{{{incorrectPin}}}</div><div class='notes'>{{{notes}}}</div>", e)
            }(r);
        e.exports = o
    }, {
        32: 32
    }],
    36: [function(t, e, i) {
        "use strict";
        var n = t(284),
            r = t(93),
            o = t(281),
            s = t(294),
            a = t(80),
            l = a.MarketplaceID,
            c = t(58),
            u = c.TokenType,
            p = t(178),
            h = p.HttpRequest,
            f = t(231),
            d = f.ErrorSeverity,
            y = o.of("QosReporter"),
            g = n.get("QosReporter"),
            m = function() {
                function t(t) {
                    void 0 === t && (t = h), this.initialized = !1, this.eventQueue = [], this.httpRequest = t
                }
                return (t.prototype.preInitialize = function(t, e, i, n, r, o, s, a, l) {
                    this.partnerServiceUrl = y(t, "partnerServiceUrl").is.a.string(), this.clientVersion = y(e, "version").is.a.string(), this.marketplaceId = y(i, "marketplaceId").is.a.string(), this.deviceTypeId = y(n, "deviceTypeId").is.a.string(), this.deviceId = y(r, "deviceId").is.a.string(), this.primitiveSessionId = y(o, "primitiveSessionId").is.a.string(), this.operatingSystem = y(s, "operatingSystem").is.a.string(), this.browser = y(a, "browser").is.a.string(), this.tokenClient = l
                }, t.prototype.initialize = function(t, e) {
                    this.clientVersion = y(t, "version").is.a.string(), this.deviceTypeId = y(e, "deviceTypeId").is.a.string(), this.initialized = !0, this.tryFlush()
                }, t.prototype.updateSessionIds = function(t, e) {
                    this.userWatchSessionId = t, this.primitiveSessionId = e
                }, t.prototype.setAsin = function(t) {
                    this.asin = t
                }, t.prototype.setTokenClient = function(t) {
                    this.tokenClient = t
                }, t.prototype.reportError = function(e, i, n, r) {
                    var o = {
                        eventType: "Error",
                        eventSubtype: e,
                        errorSeverity: Math.min(5, Math.max(1, i)).toString(),
                        httpCode: n,
                        note: r
                    };
                    this.enqueueEvent(o), i <= t.DO_NOT_QUEUE_SEVERITY && this.flush()
                }, t.prototype.reportInformation = function(t, e, i) {
                    var n = {
                        eventType: "Information",
                        eventSubtype: t,
                        note: e,
                        duration: i
                    };
                    this.enqueueEvent(n)
                }, t.prototype.flush = function() {
                    var t = this;
                    r.isNullOrUndefined(this.partnerServiceUrl) || 0 !== this.eventQueue.length && (r.exists(this.tokenClient) ? this.tokenClient.getToken(function(e) {
                        t.sendEventBatch(e)
                    }, function() {
                        g.warn("Could not get auth token, reporting without token."), t.sendEventBatch(null)
                    }) : this.sendEventBatch(null), clearTimeout(this.flushTimeout), this.flushTimeout = null)
                }, t.prototype.enqueueEvent = function(t) {
                    var e = s.extend({
                        primitiveSessionId: this.primitiveSessionId,
                        streamingSessionId: this.primitiveSessionId,
                        userWatchSessionId: this.userWatchSessionId,
                        asin: this.asin
                    }, t);
                    e = this.removeMissingParameters(e), e.enqueueTime = (new Date).getTime(), this.eventQueue.push(e), this.tryFlush()
                }, t.prototype.tryFlush = function() {
                    var e = this;
                    this.initialized && (this.eventQueue.length >= t.MAX_QUEUE_SIZE ? this.flush() : r.isNullOrUndefined(this.flushTimeout) && (this.flushTimeout = setTimeout(function() {
                        return e.flush()
                    }, t.FLUSH_TIMEOUT_MS)))
                }, t.prototype.sendEventBatch = function(e) {
                    var i = this,
                        n = this.partnerServiceUrl.replace(//$/, "") + t.ENDPOINT,
                        o = this.httpRequest.post(n).withCredentials(),
                        a = {
                            gascEnabled: !l.isClassic(this.marketplaceId),
                            firmware: t.FIRMWARE,
                            version: t.VERSION,
                            client_version: this.clientVersion,
                            marketplaceId: this.marketplaceId,
                            deviceTypeID: this.deviceTypeId,
                            sourceSystem: this.deviceTypeId,
                            deviceID: this.deviceId,
                            operatingSystem: this.operatingSystem,
                            browser: this.browser
                        };
                    r.exists(e) && e.type === u.OAUTH && o.bearerToken(e.token), a = this.removeMissingParameters(a);
                    var c = s.map(this.eventQueue, function(t) {
                        return i.prepareEvent(t)
                    });
                    try {
                        o.field("metrics", JSON.stringify(c)).query(a).send()
                    } catch (t) {
                        g.error(t)
                    }
                    this.eventQueue.length = 0
                }, t.prototype.removeMissingParameters = function(t) {
                    var e = s.chain(t).keys().filter(function(e) {
                        return r.isNullOrUndefined(t[e])
                    }).value();
                    return s.omit(t, e)
                }, t.prototype.prepareEvent = function(t) {
                    var e = s.extend({
                        primitiveSessionId: this.primitiveSessionId,
                        streamingSessionId: this.primitiveSessionId,
                        userWatchSessionId: this.userWatchSessionId,
                        asin: this.asin
                    }, t);
                    return (e = this.removeMissingParameters(e), r.isNullOrUndefined(e.enqueueTime) || (e.eventAge = (new Date).getTime() - e.enqueueTime, e = s.omit(e, "enqueueTime")), e)
                }, t.ENDPOINT = "/cdp/usage/ReportEvent", t.FIRMWARE = "1", t.VERSION = "1", t.MAX_QUEUE_SIZE = 5, t.DO_NOT_QUEUE_SEVERITY = d.Fatal, t.FLUSH_TIMEOUT_MS = 1e4, t)
            }();
        e.exports = m
    }, {
        178: 178,
        231: 231,
        281: 281,
        284: 284,
        294: 294,
        58: 58,
        80: 80,
        93: 93
    }],
    37: [function(t, e, i) {
        "use strict";
        var n = t(80),
            r = n.Weblabs,
            o = n.WeblabTreatment,
            s = t(281),
            a = t(272),
            l = a.OperatingSystemFamily,
            c = t(40),
            u = t(38),
            p = t(41),
            h = t(266),
            f = h.SilverlightWebPlayer,
            d = s.of("SilverlightWebPlayerFactory"),
            y = function() {
                function t(t, e, i, n, r) {
                    void 0 === r && (r = new u(t, e, c.createModalTemplate)), this.silverlightDisabled = !1, this.os = d(t, "os").exists(), this.browser = d(e, "browser").exists(), this.loaderConfig = d(i, "loaderConfig").exists(), this.qosReporter = d(n, "qosReporter").exists(), this.playerOption = r
                }
                return (t.prototype.initialize = function(t, e, i, n, s) {
                    this.silverlightDisabled = e[r.DISABLE_SILVERLIGHT] === o.T1, this.clientId = s
                }, t.getPlayerName = function() {
                    return t.PLAYER_NAME
                }, t.prototype.getPlayerName = function() {
                    return t.PLAYER_NAME
                }, t.prototype.getPlayerVersion = function() {
                    return this.loaderConfig.dependencies.DVWebGlobalPlayer.version
                }, t.prototype.getMetricsFeature = function() {
                    return t.METRICS_FEATURE
                }, t.prototype.getDeviceTypeId = function() {
                    return this.os.getFamily() === l.Mac ? n.DeviceTypeId.SILVERLIGHT_MAC : n.DeviceTypeId.SILVERLIGHT_PC
                }, t.prototype.getPlayerCapabilities = function(e, i, n) {
                    void 0 === i && (i = {});
                    var r = this.clientId === t.TNF_GATEWAY_CLIENT_ID,
                        o = this.silverlightDisabled || i.supportsLive === !0 || r;
                    e({
                        supportsDrm: !0,
                        supportsNativePlayback: !1,
                        supportsWebPlayback: !o && this.playerOption.isCompatible(),
                        supportsAVOD: !0,
                        supportsMidStreamMTA: !0,
                        supportsHDMovies: this.os.getFamily() === l.Linux,
                        supportsHDTVShows: !0,
                        supportsLive: !1
                    })
                }, t.prototype.createWebPlayer = function(t, e) {
                    var i = this;
                    this.playerOption.checkAvailability(function() {
                        t(new f(i.loaderConfig, i.qosReporter, new p, c.createModalTemplate))
                    }, e)
                }, t.prototype.on = function(t, e) {}, t.prototype.once = function(t, e) {}, t.prototype.off = function(t, e) {}, t.PLAYER_NAME = "silverlight", t.METRICS_FEATURE = "SilverlightPlayer", t.TNF_GATEWAY_CLIENT_ID = "511cc9af-3ecb-48fe-9825-886ebfbb6503", t)
            }();
        e.exports = y
    }, {
        266: 266,
        272: 272,
        281: 281,
        38: 38,
        40: 40,
        41: 41,
        80: 80
    }],
    38: [function(t, e, i) {
        "use strict";
        var n = t(113),
            r = n.Version,
            o = t(231),
            s = o.ErrorSeverity,
            a = t(272),
            l = a.BrowserType,
            c = a.OperatingSystemFamily,
            u = a.WindowsVersion,
            p = t(93),
            h = t(281),
            f = t(284),
            d = t(39),
            y = t(294),
            g = h.of("SilverlightWebPlayerOption"),
            m = f.get("SilverlightWebPlayerOption"),
            v = function() {
                function t(t, e, i, n) {
                    void 0 === n && (n = navigator), this.os = g(t, "os").exists(), this.browser = g(e, "browser").exists(), this.createModalTemplate = g(i, "createModalTemplate").exists(), this.navigatorRef = n
                }
                return (t.prototype.isCompatible = function() {
                    if (this.os.getFamily() !== c.Windows && this.os.getFamily() !== c.Mac) return (m.info("Silverlight is not supported on non-Win/Mac operating systems."), !1);
                    if (y.contains(t.UNSUPPORTED_BROWSERS, this.browser.getType()) || this.isUnsupportedFirefoxVersion(this.browser)) return (m.info("Silverlight is not supported on " + l[this.browser.getType()] + "."), !1);
                    if (this.browser.getType() === l.IE) {
                        if (u.WINDOWS_8.compareTo(this.os.getVersion()) <= 0 && !this.isActiveXEnabled()) return (m.info("Silverlight is not supported on Internet Explorer Metro."), !1);
                        if (r.fromNumber(t.MIN_IE_VERSION).compareTo(this.browser.getVersion()) > 0) return (m.info("Silverlight is only supported on Internet Explorer version " + this.browser.getVersion() + "."), !1)
                    }
                    return (m.info("Silverlight is supported on " + this.browser + " on " + this.os), !0)
                }, t.prototype.checkAvailability = function(e, i) {
                    return this.os.getFamily() === c.Windows && u.WINDOWS_8.compareTo(this.os.getVersion()) > 0 && this.browser.getType() === l.IE && !this.isActiveXEnabled() ? void i(t.ACTIVEX_DISABLED_ERROR, "ActiveX is not enabled", s.NonFatal, this.createModalTemplate(d.ACTIVEX_KEY, d.ACTIVEX_EXTRA_TEXT)) : void(this.isAvailable() ? this.isUpToDate() ? e() : i(t.UPGRADE_REQUIRED_ERROR, "Silverlight needs to be upgraded", s.NonFatal, this.createModalTemplate(d.UPGRADE_KEY, d.BUTTON_TEMPLATE)) : i(t.NOT_INSTALLED_ERROR, "Silverlight is not installed", s.NonFatal, this.createModalTemplate(this.getBrowserInstallKey(), d.BUTTON_TEMPLATE)))
                }, t.prototype.isUnsupportedFirefoxVersion = function(e) {
                    return this.isFirefoxBrowser(e.getType()) && this.browser.getVersion().compareTo(r.fromNumber(t.FIREFOX_NPAPI_REMOVED_VERSION)) >= 0
                }, t.prototype.isFirefoxBrowser = function(t) {
                    return t === l.Firefox || t === l.Firefox64
                }, t.prototype.isAvailable = function() {
                    if (this.isSafari10OrHigher()) return !0;
                    var e = this.navigatorRef.plugins[t.SILVERLIGHT_NSAPI_ID];
                    if (!p.isNullOrUndefined(e)) return !0;
                    try {
                        return (new ActiveXObject(t.SILVERLIGHT_ACTIVEX_ID), !0)
                    } catch (t) {
                        return !1
                    }
                }, t.prototype.isUpToDate = function() {
                    var e = this.navigatorRef.plugins[t.SILVERLIGHT_NSAPI_ID];
                    if (!p.isNullOrUndefined(e)) {
                        var i = e.description,
                            n = parseFloat(i);
                        return n >= t.MIN_SILVERLIGHT_VERSION
                    }
                    if (this.isSafari10OrHigher()) return !0;
                    try {
                        return (e = new ActiveXObject(t.SILVERLIGHT_ACTIVEX_ID), e.IsVersionSupported("" + t.MIN_SILVERLIGHT_VERSION))
                    } catch (t) {
                        m.info("Silverlight ActiveX plugin not found.")
                    }
                    return !1
                }, t.prototype.getBrowserInstallKey = function() {
                    return this.browser.getType() === l.Safari ? d.INSTALL_SAFARI_KEY : d.INSTALL_KEY
                }, t.prototype.isActiveXEnabled = function() {
                    try {
                        return !!new ActiveXObject("htmlfile")
                    } catch (t) {
                        return !1
                    }
                }, t.prototype.isSafari10OrHigher = function() {
                    return this.browser.getType() === l.Safari && this.browser.getVersion().compareTo(r.fromNumber(t.SAFARI_10_VERSION)) >= 0
                }, t.MIN_SILVERLIGHT_VERSION = 5.1, t.FIREFOX_NPAPI_REMOVED_VERSION = 52, t.MIN_IE_VERSION = 10, t.SAFARI_10_VERSION = 10, t.UNSUPPORTED_BROWSERS = [l.Chrome, l.Edge, l.Opera, l.Unknown], t.SILVERLIGHT_NSAPI_ID = "Silverlight Plug-In", t.SILVERLIGHT_ACTIVEX_ID = "AgControl.AgControl", t.ACTIVEX_DISABLED_ERROR = "SilverlightActiveXDisabledError", t.NOT_INSTALLED_ERROR = "SilverlightNotInstalledError", t.UPGRADE_REQUIRED_ERROR = "SilverlightUpgradeRequiredError", t)
            }();
        e.exports = v
    }, {
        113: 113,
        231: 231,
        272: 272,
        281: 281,
        284: 284,
        294: 294,
        39: 39,
        93: 93
    }],
    39: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(93),
            o = t(32),
            s = function(t) {
                function e(e, i) {
                    var n = t.call(this, e) || this;
                    return (n.extraText = i, n)
                }
                return (n(e, t), e.prototype.renderString = function(e, i, n) {
                    var o = {
                        extraText: this.extraText
                    };
                    return (r.isNullOrUndefined(n) || _.extend(o, n), t.prototype.renderString.call(this, e, i, o))
                }, e.ACTIVEX_KEY = "silverlightActiveX", e.INSTALL_KEY = "silverlightInstall", e.INSTALL_SAFARI_KEY = "silverlightInstallSafari", e.UPGRADE_KEY = "silverlightUpgrade", e.BUTTON_TEMPLATE = "<div class='buttonWrapper'>{{{button}}}</div>", e.ACTIVEX_EXTRA_TEXT = "<ol>{{#steps}}<li>{{{.}}}</li>{{/steps}}</ol>", e)
            }(o);
        e.exports = s
    }, {
        32: 32,
        93: 93
    }],
    40: [function(t, e, i) {
        "use strict";
        var n = t(281),
            r = t(39),
            o = n.of("SilverlightModalTemplate"),
            s = function() {
                function t() {}
                return (t.createModalTemplate = function(t, e) {
                    return (void 0 === e && (e = ""), o(t, "key").exists(), new r(t, e))
                }, t)
            }();
        e.exports = s
    }, {
        281: 281,
        39: 39
    }],
    41: [function(t, e, i) {
        "use strict";
        var n = t(93),
            r = t(281),
            o = r.of("SpinnerPanel"),
            s = function() {
                function t() {}
                return (t.prototype.initialize = function(t, e, i, n) {
                    this.parent = o(t, "parent").exists(), this.assetsRoot = o(e, "assetsRoot").is.a.string(), this.contents = n, this.createHTMLElements(i)
                }, t.prototype.createHTMLElements = function(e) {
                    this.spinner = document.createElement("div"), this.spinner.className = "playerLoadingOverlay", this.spinner.style.width = "100%", this.spinner.style.height = "100%", e ? this.spinner.innerHTML = '<div style="width:100%; height:44%"></div><div style="width:100%; height:11.36%">' + ('<img class="spinning orangeSpinner" src="' + this.assetsRoot + "/" + t.SPINNER_PNG_PATH + '"/>') + '</div><div style="width:100%; height:4.5%"></div>' : this.spinner.innerHTML = '<div class="spinning whiteSpinner"></div>', this.parent.appendChild(this.spinner), this.show()
                }, t.prototype.show = function() {
                    this.spinner.style.display = "", n.isNullOrUndefined(this.contents) || (this.contents.style.width = "1px", this.contents.style.height = "1px")
                }, t.prototype.hide = function() {
                    this.spinner.style.display = "none", n.isNullOrUndefined(this.contents) || (this.contents.style.width = "", this.contents.style.height = "")
                }, t.SPINNER_PNG_PATH = "img/orange_spinner.png", t)
            }();
        e.exports = s
    }, {
        281: 281,
        93: 93
    }],
    42: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t() {}
            return (t.toString = function() {
                return "aborted"
            }, t)
        }();
        e.exports = n
    }, {}],
    43: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t() {}
            return (t.toString = function() {
                return "asinChanged"
            }, t)
        }();
        e.exports = n
    }, {}],
    44: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t(t) {
                this.position = t
            }
            return (t.toString = function() {
                return "closed"
            }, t)
        }();
        e.exports = n
    }, {}],
    45: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t() {}
            return (t.toString = function() {
                return "playerCapabilities"
            }, t)
        }();
        e.exports = n
    }, {}],
    46: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t() {}
            return (t.toString = function() {
                return "playing"
            }, t)
        }();
        e.exports = n
    }, {}],
    47: [function(t, e, i) {
        "use strict";
        var n = t(42),
            r = t(43),
            o = t(44),
            s = t(45),
            a = t(46),
            l = t(231),
            c = l.AbortedEvent,
            u = l.CloseEvent,
            p = l.Features,
            h = l.InitializedEvent,
            f = l.PreparedEvent,
            d = l.PlayingEvent,
            y = l.StoppingEvent,
            g = l.EndOfContentEvent,
            m = l.AsinChangedEvent,
            v = l.PlayerCapabilitiesEvent,
            E = l.CachePriority,
            _ = l.CacheType,
            S = t(281),
            T = t(93),
            b = t(82),
            w = t(294),
            I = t(284),
            R = t(3),
            C = t(24),
            P = t(17),
            A = S.of("StatelessWebPlayer"),
            O = I.get("StatelessWebPlayer"),
            N = function() {
                function t(t, e, i, n) {
                    void 0 === e && (e = R), void 0 === i && (i = w.now), void 0 === n && (n = !0);
                    var o = this;
                    this.Features = p, this.webPlayer = null, this.playerConfig = null, this.contentConfig = null, this.playbackConfig = null, this.newPlayerConfig = null, this.newContentConfig = null, this.newPlaybackConfig = null, this.playerCapabilities = null, this.isWaiting = !1, this.canPrepareOnInitialize = !0, this.shouldEmitClosed = !1, this.lastPosition = null, this.cacheType = _.CacheMiss, this.playInvokedTime = null, this.eventEmitter = new b.BasicEventEmitter, this.featureListeners = [], this.onStateChanged = function() {
                        o.isWaiting = !1;
                        var t = o.getPlayerState();
                        switch (O.info("Changed state to: " + P[t]), t) {
                            case P.UNINITIALIZED:
                                o.onUninitialized();
                                break;
                            case P.INITIALIZED:
                                o.onInitialized();
                                break;
                            case P.PREPARING:
                                o.onPreparing();
                                break;
                            case P.PREPARED:
                                o.onPrepared();
                                break;
                            case P.PLAYING:
                                o.onPlaying();
                                break;
                            case P.STOPPING:
                                o.onStopping();
                                break;
                            case P.ABORTED:
                                o.onAborted();
                                break;
                            default:
                                throw new Error("Unable to transition at invalid state: " + t)
                        }
                    }, this.onPlayerCapabilities = function(t) {
                        var e = t.capabilities;
                        w.isEqual(o.playerCapabilities, e) || (o.playerCapabilities = C(!0, {}, e), o.emitEvent(s, {
                            capabilities: o.playerCapabilities
                        }))
                    }, this.onPlayerClose = function() {
                        o.shouldEmitClosed = !0;
                        var t = o.getPlayerState();
                        t !== P.PREPARED && t !== P.PLAYING || (o.lastPosition = o.webPlayer.getPosition()), o.newContentConfig = null, o.newPlaybackConfig = null, o.onStateChanged()
                    }, this.reportPlaying = function(t) {
                        o.emitEvent(a, t)
                    }, this.reportAsinChanged = function(t) {
                        o.emitEvent(r, t)
                    }, this.loaderConfig = t, this.webPlayerClass = e, this.now = i, this.preInitEnabled = n
                }
                return (t.prototype.initialize = function(t) {
                    if (!this.preInitEnabled) return void O.info("Pre-init disabled, ignoring call to initialize.");
                    this.setConfigs(t);
                    try {
                        O.info("Initialize called."), this.updateStateFromConfig()
                    } catch (t) {
                        throw (O.error("Unhandled exception in initialize.", t), t)
                    }
                }, t.prototype.prepare = function(t, e) {
                    if (!this.preInitEnabled) return void O.warn("Pre-init disabled, ignoring call to prepare.");
                    if (!T.isNullOrUndefined(this.newPlaybackConfig)) return void O.warn("Pre-init disabled while already playing content, ignoring calls to prepare.");
                    if (this.setConfigs(t, e), !T.isNullOrUndefined(this.webPlayer) && this.newContentConfig.cachePriority !== E.High) return void this.webPlayer.prepareCache(this.newContentConfig);
                    try {
                        if (O.info("Prepare called."), this.isEqualWithoutPosition(this.newContentConfig, this.contentConfig) && null !== this.newPlaybackConfig) return void O.info("Content config matches previous call to play, ignoring call to prepare.");
                        this.updateStateFromConfig()
                    } catch (t) {
                        throw (O.error("Unhandled exception in prepare.", t), t)
                    }
                }, t.prototype.play = function(t, e, i) {
                    try {
                        if (this.setConfigs(t, e, i), O.info("Play called."), this.newContentConfig.cachePriority = E.High, !(null !== this.playInvokedTime || w.isEqual(this.contentConfig, this.newContentConfig) && w.isEqual(this.playbackConfig, this.newPlaybackConfig))) {
                            switch (this.playInvokedTime = this.now(), this.getPlayerState()) {
                                case P.PREPARED:
                                    this.cacheType = _.CacheHit;
                                    break;
                                case P.PREPARING:
                                    this.cacheType = _.CachePartialHit;
                                    break;
                                default:
                                    this.cacheType = _.CacheMiss
                            }
                            null !== this.webPlayer && this.webPlayer.playbackInitiated(this.isEqualWithoutPosition(this.contentConfig, this.newContentConfig))
                        }
                        w.isEqual(this.contentConfig, this.newContentConfig) || (this.cacheType = _.CacheMiss), this.updateStateFromConfig()
                    } catch (t) {
                        throw (O.error("Unhandled exception in play.", t), t)
                    }
                }, t.prototype.on = function(t, e) {
                    this.eventEmitter.on(t, e)
                }, t.prototype.once = function(t, e) {
                    this.eventEmitter.once(t, e)
                }, t.prototype.off = function(t, e) {
                    this.eventEmitter.off(t, e)
                }, t.prototype.getFeature = function(t, e, i) {
                    return T.isNullOrUndefined(this.webPlayer) ? void this.featureListeners.push({
                        feature: t,
                        onAvailable: e,
                        onError: i
                    }) : void this.webPlayer.getFeature(t, e, i)
                }, t.prototype.updateStateFromConfig = function() {
                    null !== this.newContentConfig && (this.canPrepareOnInitialize = !0), this.shouldEmitClosed && (this.shouldEmitClosed = !1), this.isWaiting || this.onStateChanged()
                }, t.prototype.setConfigs = function(t, e, i) {
                    void 0 === e && (e = null), void 0 === i && (i = null), A(null === this.playerConfig || w.isEqual(this.playerConfig, t), "The playerConfig cannot be changed after initialization.").is["true"](), this.newPlayerConfig = C(!0, {}, t), null !== e && (e.cachePriority = T.withDefault(e.cachePriority, E.High)), this.newContentConfig = null !== e ? C(!0, {}, e) : null, this.newPlaybackConfig = null !== i ? C(!0, {}, i) : null
                }, t.prototype.onUninitialized = function() {
                    this.playerConfig = this.newPlayerConfig, null !== this.webPlayer && (this.webPlayer.off(h, this.onStateChanged), this.webPlayer.off(f, this.onStateChanged), this.webPlayer.off(d, this.onStateChanged), this.webPlayer.off(d, this.reportPlaying), this.webPlayer.off(m, this.reportAsinChanged), this.webPlayer.off(u, this.onPlayerClose), this.webPlayer.off(g, this.onPlayerClose), this.webPlayer.off(v, this.onPlayerCapabilities), this.webPlayer.off(c, this.onStateChanged)), this.webPlayer = new this.webPlayerClass(this.loaderConfig), this.webPlayer.on(h, this.onStateChanged), this.webPlayer.on(f, this.onStateChanged), this.webPlayer.on(d, this.onStateChanged), this.webPlayer.on(d, this.reportPlaying), this.webPlayer.on(y, this.onStateChanged), this.webPlayer.on(m, this.reportAsinChanged), this.webPlayer.on(u, this.onPlayerClose), this.webPlayer.on(g, this.onPlayerClose), this.webPlayer.once(v, this.onPlayerCapabilities), this.webPlayer.once(c, this.onStateChanged), this.isWaiting = !0, this.webPlayer.initialize(this.playerConfig), null !== this.newPlaybackConfig && this.webPlayer.playbackInitiated(!0)
                }, t.prototype.onInitialized = function() {
                    if (this.reportClosedEvent(), !this.canPrepareOnInitialize) return (this.canPrepareOnInitialize = !0, this.contentConfig = null, void(this.playbackConfig = null));
                    if (!w.isEqual(this.playerConfig, this.newPlayerConfig)) return void this.onUninitialized();
                    for (var t = 0, e = this.featureListeners; t < e.length; t++) {
                        var i = e[t];
                        this.webPlayer.getFeature(i.feature, i.onAvailable, i.onError)
                    }
                    if (this.featureListeners = [], !w.isEqual(this.contentConfig, this.newContentConfig) || !w.isEqual(this.playbackConfig, this.newPlaybackConfig))
                        if (this.contentConfig = this.newContentConfig, null !== this.contentConfig) {
                            var n = !T.isNullOrUndefined(this.newPlaybackConfig);
                            this.canPrepareOnInitialize = !1, this.contentConfig.cachePriority === E.High ? this.webPlayer.prepare(w.extend({
                                immediateConsumption: n
                            }, this.contentConfig)) : this.webPlayer.prepareCache(this.contentConfig)
                        } else this.playbackConfig = null
                }, t.prototype.onPreparing = function() {
                    var t = this.isEqualWithoutPosition(this.contentConfig, this.newContentConfig);
                    w.isEqual(this.playerConfig, this.newPlayerConfig) && t || (this.isWaiting = !0, this.webPlayer.stop())
                }, t.prototype.onPrepared = function() {
                    this.canPrepareOnInitialize = !0;
                    var t = this.isEqualWithoutPosition(this.contentConfig, this.newContentConfig);
                    return w.isEqual(this.playerConfig, this.newPlayerConfig) && t ? (w.isNumber(this.newContentConfig.position) && this.contentConfig.position !== this.newContentConfig.position && (this.contentConfig.position = this.newContentConfig.position, this.webPlayer.seek(this.contentConfig.position)), this.playbackConfig = this.newPlaybackConfig, void(null !== this.playbackConfig && (this.webPlayer.play(C({}, this.playbackConfig, {
                        playbackInitiatedTime: this.playInvokedTime,
                        cacheType: this.cacheType
                    })), this.playInvokedTime = null))) : (this.isWaiting = !0, void this.webPlayer.stop())
                }, t.prototype.onPlaying = function() {
                    var t = this.isEqualWithoutPosition(this.contentConfig, this.newContentConfig);
                    if (!w.isEqual(this.playerConfig, this.newPlayerConfig) || !t || !w.isEqual(this.playbackConfig, this.newPlaybackConfig)) return (this.isWaiting = !0, void this.webPlayer.stop());
                    if (null !== this.contentConfig && w.isNumber(this.newContentConfig.position) && this.contentConfig.position !== this.newContentConfig.position) {
                        var e = this.newContentConfig.position;
                        this.webPlayer.seek(e)
                    }
                    this.newContentConfig.position = null, this.contentConfig = this.newContentConfig
                }, t.prototype.onStopping = function() {
                    this.newContentConfig = null, this.newPlaybackConfig = null
                }, t.prototype.onAborted = function() {
                    this.reportClosedEvent(), this.emitEvent(n, new n)
                }, t.prototype.reportClosedEvent = function() {
                    this.shouldEmitClosed && (this.emitEvent(o, new o(this.lastPosition)), this.lastPosition = null, this.shouldEmitClosed = !1)
                }, t.prototype.emitEvent = function(t, e) {
                    try {
                        this.eventEmitter.emit(t, e)
                    } catch (e) {
                        O.error("An exception was thrown in a StatelessWebPlayer callback for event: " + t, e)
                    }
                }, t.prototype.getPlayerState = function() {
                    return null === this.webPlayer ? P.UNINITIALIZED : this.webPlayer.getState()
                }, t.prototype.isEqualWithoutPosition = function(t, e) {
                    return w.isEqual(w.omit(t, "position"), w.omit(e, "position"))
                }, t)
            }();
        e.exports = N
    }, {
        17: 17,
        231: 231,
        24: 24,
        281: 281,
        284: 284,
        294: 294,
        3: 3,
        42: 42,
        43: 43,
        44: 44,
        45: 45,
        46: 46,
        82: 82,
        93: 93
    }],
    48: [function(t, e, i) {
        "use strict";
        var n = "com.widevine.alpha",
            r = "com.microsoft.playready",
            o = "cenc",
            s = function() {
                function t() {}
                return (t.prototype.getDrmSystems = function() {
                    return [{
                        keySystem: r,
                        configurations: [
                            [{
                                initDataTypes: [o],
                                audioCapabilities: [{
                                    contentType: 'audio/mp4; codecs="mp4a.40.2"'
                                }],
                                videoCapabilities: [{
                                    contentType: 'video/mp4; codecs="avc1.4D401E"',
                                    robustness: "HW_SECURE_DECODE"
                                }, {
                                    contentType: 'video/mp4; codecs="avc1.4D401E"',
                                    robustness: "SW_SECURE_DECODE"
                                }]
                            }]
                        ]
                    }, {
                        keySystem: n,
                        configurations: [
                            [{
                                initDataTypes: [o],
                                videoCapabilities: [{
                                    contentType: 'video/mp4; codecs="avc1.4D401E"',
                                    robustness: "HW_SECURE_DECODE"
                                }, {
                                    contentType: 'video/mp4; codecs="avc1.4D401E"',
                                    robustness: "SW_SECURE_DECODE"
                                }]
                            }],
                            [{
                                initDataTypes: [o],
                                videoCapabilities: [{
                                    contentType: 'video/mp4; codecs="avc1.640028"'
                                }]
                            }],
                            [{
                                initDataTypes: [o]
                            }]
                        ]
                    }]
                }, t)
            }();
        e.exports = s
    }, {}],
    49: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t[t.BROWSER_OUT_OF_DATE = 0] = "BROWSER_OUT_OF_DATE", t[t.MISSING_CODEC = 1] = "MISSING_CODEC", t[t.MISSING_CDM = 2] = "MISSING_CDM", t[t.UNSUPPORTED_BROWSER = 3] = "UNSUPPORTED_BROWSER", t[t.UNSUPPORTED_OS = 4] = "UNSUPPORTED_OS"
        }(n || (n = {})), e.exports = n
    }, {}],
    50: [function(t, e, i) {
        "use strict";
        var n = t(93),
            r = t(281),
            o = t(284),
            s = t(294),
            a = r.of("WebPlayerFactorySelector"),
            l = o.get("WebPlayerFactorySelector"),
            c = function() {
                function t() {
                    this.sortedPlayerFactories = null
                }
                return (t.prototype.initialize = function(t, e, i, n, r, o) {
                    this.sortedPlayerFactories = a(t, "factoryList").exists(), a(i, "weblabs").exists(), s.forEach(this.sortedPlayerFactories, function(t) {
                        t.initialize(e, i, n, r, o)
                    })
                }, t.prototype.reset = function() {
                    this.sortedPlayerFactories = null
                }, t.prototype.selectFactory = function(t, e, i) {
                    a(this.sortedPlayerFactories, "this.sortedPlayerFactories").exists();
                    var r = s.clone(this.sortedPlayerFactories);
                    if (!n.isNullOrUndefined(i)) {
                        var o = i.toLowerCase(),
                            c = s.findIndex(r, function(t) {
                                return t.getPlayerName() === o
                            });
                        if (c === -1) l.warn("Cannot find preferred player factory.");
                        else {
                            var u = r.splice(c, 1);
                            r.splice(0, 0, u[0])
                        }
                    }
                    this.findPlayerFactory(r, 0, t, e)
                }, t.prototype.findPlayerFactory = function(t, e, i, n, r, o) {
                    var s = this;
                    void 0 === r && (r = ""), void 0 === o && (o = null), this.isFactorySupported(t[e], function(a, l, c, u) {
                        void 0 === c && (c = "");
                        var p = r + c;
                        null === o && (o = u), a ? i(t[e], l, p) : e !== t.length - 1 ? s.findPlayerFactory(t, e + 1, i, n, p, o) : i(null, null, p, o)
                    }, n)
                }, t.prototype.selectFactoryWithOverride = function(t, e) {
                    a(e, "override").is.a.string(), a(this.sortedPlayerFactories, "this.sortedPlayerFactories").exists();
                    var i = e.toLowerCase(),
                        n = s.find(this.sortedPlayerFactories, function(t) {
                            return t.getPlayerName() === i
                        });
                    return s.isUndefined(n) ? (l.error("Overridden player '" + e + "' does not exist."), void t(null)) : void this.isFactorySupported(n, function(i, r) {
                        i || l.warn("Overridden player '" + e + "' is not supported on this platform. Playback may not function."), t(n, r)
                    })
                }, t.prototype.isFactorySupported = function(t, e, i) {
                    t.getPlayerCapabilities(function(t, i, n) {
                        e(t.supportsWebPlayback || t.supportsNativePlayback, t, i, n)
                    }, i)
                }, t)
            }();
        e.exports = c
    }, {
        281: 281,
        284: 284,
        294: 294,
        93: 93
    }],
    51: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t.Unloaded = "Unloaded", t.Waiting = "Waiting", t.Ready = "Ready", t.Error = "Error"
        }(n || (n = {})), e.exports = n
    }, {}],
    52: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t.Paused = "Paused", t.Playing = "Playing"
        }(n || (n = {})), e.exports = n
    }, {}],
    53: [function(t, e, i) {
        "use strict";
        var n = t(281),
            r = t(284),
            o = t(93),
            s = t(80),
            a = s.DeviceTypeId,
            l = t(82),
            c = l.BasicEventEmitter,
            u = t(231),
            p = u.DiagnosticsState,
            h = u.Features,
            f = u.AbortEvent,
            d = u.AsinChangedEvent,
            y = u.EndOfContentEvent,
            g = u.InitializedEvent,
            m = u.PausedEvent,
            v = u.PlayingEvent,
            E = u.PreparedEvent,
            _ = u.StoppingEvent,
            S = t(51),
            T = t(52),
            b = n.of("WrappedXpPlayer"),
            w = r.get("WrappedXpPlayer"),
            I = function() {
                function t(t, e) {
                    void 0 === e && (e = new c);
                    var i = this;
                    this.Features = h, this.pendingFeatureRequests = [], this.currentTitleId = null, this.onContentStateChange = function(t) {
                        t === S.Unloaded ? i.eventEmitter.emit(g) : t === S.Ready && i.eventEmitter.emit(E)
                    }, this.onPlaybackStateChange = function(t) {
                        t === T.Paused ? i.eventEmitter.emit(m) : t === T.Playing && i.eventEmitter.emit(v)
                    }, this.onTimeDataChange = function(t) {
                        var e = i.player.timeline.contentInfos[i.player.timeline.items[t.currentTimelineItemIndex].contentId];
                        null !== i.currentTitleId && i.currentTitleId !== e.titleId && i.eventEmitter.emit(d, new d(e.titleId)), i.currentTitleId = e.titleId
                    }, this.onTimelineEnded = function() {
                        i.eventEmitter.emit(y)
                    }, this.onError = function(t) {
                        i.emitError(t)
                    }, this.onContentError = function(t) {
                        i.emitError(t)
                    }, this.webPlayerSdkType = t, this.eventEmitter = e
                }
                return (t.prototype.initialize = function(t) {
                    var e = this;
                    o.isNullOrUndefined(this.webPlayerSdk) && (this.webPlayerSdk = new this.webPlayerSdkType({
                        marketplaceId: t.marketplaceId,
                        debug: t.diagnostics === p.Enabled || t.diagnostics === p.Auto
                    }));
                    var i = {
                        container: t.domElement,
                        titleDecorationScheme: "primary-content"
                    };
                    this.webPlayerSdk.getFeature(this.webPlayerSdk.Features.AmazonVideoPlayer, i).then(function(t) {
                        e.player = t, e.attachEventListeners(e.player), e.attachPendingFeatureRequests(), e.eventEmitter.emit(g)
                    })["catch"](function(t) {
                        w.error("Couldn't load player.", t), e.emitError(t)
                    })
                }, t.prototype.prepare = function(t) {
                    b(this.player, "player").exists(), this.sdkContentConfig = {
                        titleId: t.asin,
                        videoMaterialType: t.videoType
                    }, o.exists(t.position) && (this.sdkContentConfig.position = t.position), this.player.load(this.sdkContentConfig)
                }, t.prototype.prepareCache = function(t) {}, t.prototype.play = function(t) {
                    b(this.player, "player").exists(), this.player.start(this.sdkContentConfig)
                }, t.prototype.playbackInitiated = function() {}, t.prototype.stop = function() {
                    b(this.player, "player").exists(), this.player.unload(), this.eventEmitter.emit(_)
                }, t.prototype.seek = function(t) {
                    b(this.player, "player").exists(), this.player.seek(t)
                }, t.prototype.once = function(t, e) {
                    this.eventEmitter.once(t, e)
                }, t.prototype.on = function(t, e) {
                    this.eventEmitter.on(t, e)
                }, t.prototype.off = function(t, e) {
                    this.eventEmitter.off(t, e)
                }, t.prototype.getPosition = function() {
                    return (b(this.player, "player").exists(), this.player.currentTime.currentPosition)
                }, t.prototype.getDuration = function() {
                    b(this.player, "player").exists();
                    var t = this.player.timeline.items[this.player.currentTime.currentTimelineItemIndex];
                    return null === t.startTime || null === t.endTime ? 0 : t.endTime - t.startTime
                }, t.prototype.getDeviceTypeId = function() {
                    return a.HTML5
                }, t.prototype.validatePIN = function(t) {
                    throw new Error("WrappedXpPlayer doesn't implement validatePIN.")
                }, t.prototype.getFeature = function(t, e, i) {
                    return o.exists(this.player) ? t === h.volume ? void this.player.getFeature(this.player.Features.Volume).then(e)["catch"](i) : void i(new Error("WrappedXpPlayer doesn't support the requested feature.")) : void this.pendingFeatureRequests.push({
                        feature: t,
                        onAvailable: e,
                        onError: i
                    })
                }, t.prototype.emitError = function(t) {
                    this.eventEmitter.emit(f, new f(t.name, t))
                }, t.prototype.attachEventListeners = function(t) {
                    t.on(t.Events.ContentError, this.onContentError), t.on(t.Events.ContentStateChange, this.onContentStateChange), t.on(t.Events.Error, this.onError), t.on(t.Events.PlaybackStateChange, this.onPlaybackStateChange), t.on(t.Events.TimeDataChange, this.onTimeDataChange), t.on(t.Events.TimelineEnded, this.onTimelineEnded)
                }, t.prototype.attachPendingFeatureRequests = function() {
                    for (; this.pendingFeatureRequests.length > 0;) {
                        var t = this.pendingFeatureRequests.shift();
                        this.getFeature(t.feature, t.onAvailable, t.onError)
                    }
                }, t)
            }();
        e.exports = I
    }, {
        231: 231,
        281: 281,
        284: 284,
        51: 51,
        52: 52,
        80: 80,
        82: 82,
        93: 93
    }],
    54: [function(t, e, i) {
        "use strict";
        var n = t(231),
            r = n.ErrorSeverity,
            o = t(187),
            s = t(281),
            a = t(284),
            l = t(93),
            c = t(294),
            u = t(250),
            p = u.JavaScriptLoader,
            h = u.ScriptType,
            f = t(53),
            d = s.of("WrappedXpPlayerLoader"),
            y = a.get("WrappedXpPlayerLoader"),
            g = "XpJavaScriptDownloadTime",
            m = "XpJavaScriptDownloadError",
            v = "XpJavaScriptCacheHit",
            E = "XpJavaScriptCacheMiss",
            _ = "XpJavaScriptDownloadInfo",
            S = function() {
                function t(t, e, i) {
                    void 0 === e && (e = new p), void 0 === i && (i = f), this.qosReporter = d(t, "qosReporter").exists(), this.javaScriptLoader = e, this.wrappedXpPlayerType = i
                }
                return (t.prototype.createWebPlayer = function(t, e) {
                    var i = this,
                        n = function(t) {
                            var i = t && c.isFunction(t.toString) ? t.toString() : "Unknown Error";
                            e(m, i, r.Fatal)
                        };
                    if (l.exists(this.javaScriptLoader)) {
                        var s = {
                            crc32: null,
                            url: "https://cloudfront.xp-assets.aiv-cdn.net/packages/ATVWebPlayerSDK-1.0/prod/WebPlayerSDK.js",
                            name: "WebPlayerSDK",
                            type: h.JAVASCRIPT,
                            version: "0.0.0.0"
                        };
                        this.javaScriptLoader.get(s, function(e) {
                            var r = JSON.stringify(e);
                            o.putMetric(g, e.totalMs, "ms"), o.putMetric(e.cached ? v : E, 1), i.qosReporter.reportInformation(_, r, e.totalMs);
                            var s;
                            try {
                                s = new i.wrappedXpPlayerType(window.WebPlayerSDK)
                            } catch (t) {
                                return void n(t)
                            }
                            t(s)
                        }, function(t, e) {
                            var n = t && c.isFunction(t.toString) ? t.toString() : "Unknown Error",
                                o = JSON.stringify(e);
                            y.error(n), i.qosReporter.reportError(m, r.NonFatal, n, o)
                        }, n)
                    }
                }, t)
            }();
        e.exports = S
    }, {
        187: 187,
        231: 231,
        250: 250,
        281: 281,
        284: 284,
        294: 294,
        53: 53,
        93: 93
    }],
    55: [function(t, e, i) {
        "use strict";

        function n(t) {
            var e = new r(t);
            this.Features = e.Features, this.initialize = function(t) {
                e.initialize(t)
            }, this.prepare = function(t, i) {
                e.prepare(t, i)
            }, this.play = function(t, i, n) {
                e.play(t, i, n)
            }, this.on = function(t, i) {
                e.on(t, i)
            }, this.once = function(t, i) {
                e.once(t, i)
            }, this.off = function(t, i) {
                e.off(t, i)
            }, this.getFeature = function(t, i, n) {
                e.getFeature(t, i, n)
            }
        }
        var r = t(47);
        "undefined" != typeof window && null !== window && (window.ATVWebPlayer = n), e.exports = n
    }, {
        47: 47
    }],
    56: [function(t, e, i) {
        "use strict";
        var n = t(113),
            r = n.LocalStorage,
            o = t(178),
            s = t(252),
            a = t(281),
            l = t(80),
            c = t(159),
            u = s.ExponentialBackoffRetry,
            p = o.HttpRequest,
            h = t(284),
            f = l.MarketplaceID,
            d = t(93),
            y = t(57),
            g = t(294),
            m = a.of("OAuthTokenClient"),
            v = h.get("OAuthTokenClient"),
            E = function() {
                function t(t, e, i, n, o, s) {
                    void 0 === n && (n = new r), void 0 === o && (o = p), void 0 === s && (s = g.now), this.callbacks = [], this.requestInProgress = !1, this.config = t, this.onSuccessMetric = e, this.onErrorMetric = i, this.storage = n, this.httpRequest = o, this.now = s, d.isNullOrUndefined(this.config.token) || (this.token = this.config.token)
                }
                return (t.prototype.getToken = function(e, i) {
                    var n = this;
                    if (m(e, "onSuccess").exists(), m(i, "onError").exists(), this.callbacks.push({
                            onSuccess: e,
                            onError: i
                        }), !this.requestInProgress) {
                        this.requestInProgress = !0;
                        var r = this.now();
                        if (d.isNullOrUndefined(this.token)) {
                            var o = JSON.parse(this.storage.get(t.STORAGE_KEY));
                            this.validateStoredToken(o) && (this.token = o)
                        }
                        d.isNullOrUndefined(this.token) || d.isNullOrUndefined(this.token.refresh) ? this.getNewToken(function(t, e) {
                            return (void 0 === e && (e = !1), n.onGetTokenSuccess(t, n.now() - r, e))
                        }, function(t) {
                            return n.onGetTokenError(t)
                        }) : this.refreshAndGetToken(this.token, function(t, e) {
                            return (void 0 === e && (e = !1), n.onGetTokenSuccess(t, n.now() - r, e))
                        }, function(t) {
                            return n.onGetTokenError(t)
                        })
                    }
                }, t.prototype.getType = function() {
                    return y.OAUTH
                }, t.prototype.onGetTokenSuccess = function(e, i, n) {
                    void 0 === n && (n = !1), this.token = e, this.storage.set(t.STORAGE_KEY, JSON.stringify(this.token));
                    for (var r = 0, o = this.callbacks; r < o.length; r++) {
                        var s = o[r];
                        s.onSuccess({
                            token: this.token.access,
                            type: y.OAUTH
                        })
                    }
                    this.callbacks = [], this.requestInProgress = !1, n || d.isNullOrUndefined(this.onSuccessMetric) || this.onSuccessMetric(i)
                }, t.prototype.onGetTokenError = function(t) {
                    for (var e = 0, i = this.callbacks; e < i.length; e++) {
                        var n = i[e];
                        n.onError(t)
                    }
                    this.callbacks = [], this.requestInProgress = !1, d.isNullOrUndefined(this.onErrorMetric) || this.onErrorMetric(t)
                }, t.prototype.refreshAndGetToken = function(e, i, n) {
                    var r = this;
                    if (!this.tokenHasExpired(e)) return void i(e, !0);
                    var o = {
                            app_name: this.config.appName,
                            app_version: this.config.appVersion,
                            requested_token_type: t.ACCESS_TOKEN_TYPE,
                            source_token: this.token.refresh,
                            source_token_type: t.REFRESH_TOKEN_TYPE
                        },
                        s = function(t) {
                            var e = r.validateTokenResponse(t);
                            return d.isNullOrUndefined(e) ? void i({
                                access: t.access_token,
                                expireTime: r.now() + 1e3 * parseInt(t.expires_in),
                                refresh: r.token.refresh
                            }) : void n(e)
                        };
                    this.sendRequest(t.REFRESH_API, o, s, n)
                }, t.prototype.getNewToken = function(e, i) {
                    var n = this;
                    if (!d.isNullOrUndefined(this.token) && !this.tokenHasExpired(this.token)) return void e(this.token, !0);
                    var r = {
                            app_name: this.config.appName,
                            app_version: this.config.appVersion,
                            scope: [t.TOKEN_SCOPE]
                        },
                        o = function(t) {
                            var r = n.validateTokenResponse(t);
                            return d.isNullOrUndefined(r) ? void e({
                                access: t.access_token,
                                expireTime: n.now() + 1e3 * parseInt(t.expires_in)
                            }) : void i(r)
                        };
                    this.sendRequest(t.COOKIES_API, r, o, i)
                }, t.prototype.tokenHasExpired = function(t) {
                    return t.expireTime - this.now() < 0
                }, t.prototype.validateTokenResponse = function(e) {
                    return d.isNullOrUndefined(e.access_token) ? c.newError(t.OAUTH_ERROR, "access_token was not in response.") : d.isNullOrUndefined(e.expires_in) ? c.newError(t.OAUTH_ERROR, "expires_in was not in response.") : d.isNullOrUndefined(e.token_type) || e.token_type !== t.BEARER_TOKEN_TYPE ? c.newError(t.OAUTH_ERROR, "token_type was not in response or the wrong type.") : null
                }, t.prototype.validateStoredToken = function(t) {
                    return !d.isNullOrUndefined(t) && !d.isNullOrUndefined(t.access) && !d.isNullOrUndefined(t.expireTime)
                }, t.prototype.getEndpointForMarketplace = function(e) {
                    for (var i in t.ENDPOINTS)
                        if (t.ENDPOINTS.hasOwnProperty(i) && g.contains(t.ENDPOINTS[i], e)) return i;
                    return null
                }, t.prototype.sendRequest = function(e, i, n, r) {
                    var o = this,
                        s = this.getEndpointForMarketplace(this.config.marketplaceId);
                    if (d.isNullOrUndefined(s)) return void r(c.newError(t.OAUTH_ERROR, "Invalid marketplace ID: " + this.config.marketplaceId));
                    var a = s + e;
                    (new u).withMaxAttempts(t.MAX_ATTEMPTS).withInitialIntervalMs(500).withExponentialFactor(2).withRandomizationFactor(200).onSuccess(n).onError(r).onAttempt(function(e, n, r, s) {
                        o.httpRequest.post(a).accept("application/json").json(i).onError(function(i) {
                            v.error("Attempt " + (e + 1) + " of " + t.MAX_ATTEMPTS + ": " + i.message), n(i)
                        }).onLoad(function(e) {
                            var i, n = e.getText();
                            if (!d.isNullOrUndefined(n)) try {
                                i = JSON.parse(n)
                            } catch (e) {
                                return void s(c.newError(t.OAUTH_ERROR, "An error occurred while trying to parse JSON response: " + e))
                            }
                            var o = d.nestedValue(i, "response.error");
                            if (!d.isNullOrUndefined(o)) {
                                var a = d.isNullOrUndefined(o.detail) ? o.message : o.message + " (" + o.detail + ")";
                                return void s(c.newError(t.OAUTH_ERROR, "An error was returned by the service. " + o.code + ": " + a))
                            }
                            return d.isNullOrUndefined(i.error) && d.isNullOrUndefined(i.error_description) ? void r(i) : void s(c.newError(t.OAUTH_ERROR, "An error was returned by the service. " + i.error + ": " + i.error_description))
                        }).withCredentials().send()
                    }).execute()
                }, t.TOKEN_SCOPE = "aiv:full", t.MAX_ATTEMPTS = 4, t.OAUTH_ERROR = "OAuthError", t.STORAGE_KEY = "atvwebplayer_token", t.ACCESS_TOKEN_TYPE = "access_token", t.BEARER_TOKEN_TYPE = "bearer", t.REFRESH_TOKEN_TYPE = "refresh_token", t.ENDPOINTS = {
                    "https://api.amazon.de/auth/": [f.DE],
                    "https://api.amazon.co.jp/auth/": [f.JP, f.ROW_FE],
                    "https://api.amazon.co.uk/auth/": [f.UK, f.ROE_EU, f.ROW_EU],
                    "https://api.amazon.com/auth/": [f.ROW_NA, f.US]
                }, t.REFRESH_API = "token", t.COOKIES_API = "token/cookies", t)
            }();
        e.exports = E
    }, {
        113: 113,
        159: 159,
        178: 178,
        252: 252,
        281: 281,
        284: 284,
        294: 294,
        57: 57,
        80: 80,
        93: 93
    }],
    57: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t[t.OAUTH = 0] = "OAUTH"
        }(n || (n = {})), e.exports = n
    }, {}],
    58: [function(t, e, i) {
        "use strict";
        var n = t(56),
            r = t(57),
            o = {
                OAuthTokenClient: n,
                TokenType: r
            };
        e.exports = o
    }, {
        56: 56,
        57: 57
    }],
    59: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(60),
            o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (n(e, t), e.PlayStream = new e("PlayStream"), e.PlayTrailer = new e("PlayTrailer"), e)
            }(r);
        e.exports = o
    }, {
        60: 60
    }],
    60: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t(t) {
                this.name = t
            }
            return (t.prototype.toString = function() {
                return this.name
            }, t)
        }();
        e.exports = n
    }, {}],
    61: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(60),
            o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (n(e, t), e.PageHit = new e("PageHit"), e.PageTouch = new e("PageTouch"), e)
            }(r);
        e.exports = o
    }, {
        60: 60
    }],
    62: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(60),
            o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (n(e, t), e.Player = new e("Player"), e)
            }(r);
        e.exports = o
    }, {
        60: 60
    }],
    63: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(60),
            o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (n(e, t), e.ASIN = new e("ASIN"), e)
            }(r);
        e.exports = o
    }, {
        60: 60
    }],
    64: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(60),
            o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (n(e, t), e.Pin = new e("Pin"), e.PinError = new e("PinError"), e.Player = new e("Player"), e)
            }(r);
        e.exports = o
    }, {
        60: 60
    }],
    65: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t[t.plr_hd_on = 0] = "plr_hd_on", t[t.plr_hd_off = 1] = "plr_hd_off", t[t.plr_nxt_ep = 2] = "plr_nxt_ep", t[t.plr_pin_ok = 3] = "plr_pin_ok", t[t.plr_b_fscrn_on = 4] = "plr_b_fscrn_on", t[t.plr_b_fscrn_off = 5] = "plr_b_fscrn_off"
        }(n || (n = {})), e.exports = n
    }, {}],
    66: [function(t, e, i) {
        "use strict";
        var n = t(59),
            r = t(60),
            o = t(61),
            s = t(62),
            a = t(63),
            l = t(65),
            c = t(64),
            u = {
                Action: n,
                ClickstreamParameter: r,
                HitType: o,
                PageType: s,
                PageTypeIdSource: a,
                RefMarker: l,
                SubPageType: c
            };
        e.exports = u
    }, {
        59: 59,
        60: 60,
        61: 61,
        62: 62,
        63: 63,
        64: 64,
        65: 65
    }],
    67: [function(t, e, i) {
        "use strict";
        var n = t(281),
            r = t(80),
            o = r.MarketplaceID,
            s = t(93),
            a = t(58),
            l = a.TokenType,
            c = t(178),
            u = c.HttpRequest,
            p = t(159),
            h = n.of("ClickstreamClient"),
            f = function() {
                function t(e, i, n, r, o, s, a, l) {
                    void 0 === l && (l = u), h(e, "partnerServiceEndpoint").exists(), this.clickstreamSessionId = h(i, "clickstreamSessionId").exists(), this.marketplaceId = h(n, "marketplaceId").exists(), this.customerId = h(r, "customerId").exists(), this.deviceId = h(o, "deviceId").exists(), this.deviceTypeId = h(s, "deviceTypeId").exists(), this.tokenClient = a, this.httpRequest = l, this.url = e.replace(//$/, "") + t.URL_PATH
                }
                return (t.isSupported = function(t) {
                    return (void 0 === t && (t = u), t.isSupported())
                }, t.prototype.report = function(e, i, n) {
                    h(e, "event").exists();
                    var r = {
                            gascEnabled: !o.isClassic(this.marketplaceId),
                            deviceID: this.deviceId,
                            deviceTypeID: this.deviceTypeId,
                            firmware: "1"
                        },
                        a = {
                            EntryList: [e]
                        },
                        c = this.httpRequest.post(this.url).withCredentials().header("x-atv-session-id", this.clickstreamSessionId).header("x-retry-count", "0").header("x-request-priority", "NOTIFICATION").accept("application/json").timeout(t.HTTP_REQUEST_TIMEOUT_MS).json(a);
                    s.isNullOrUndefined(i) || c.onLoad(function(t) {
                        i(t.getLatencyMs())
                    }), s.isNullOrUndefined(n) || c.onError(function(t, e) {
                        s.isNullOrUndefined(e) ? n(t) : n(t, e.getLatencyMs())
                    }), s.exists(this.tokenClient) ? this.tokenClient.getToken(function(t) {
                        t.type === l.OAUTH && c.bearerToken(t.token), c.query(r).send()
                    }, function(e) {
                        n(p.newError(t.CLICKSTREAM_ERROR, "An auth token error occured while trying to report clickstream: " + e))
                    }) : c.query(r).send()
                }, t.CLICKSTREAM_ERROR = "ClickstreamError", t.HTTP_REQUEST_TIMEOUT_MS = 4e3, t.URL_PATH = "/cdp/usage/Clickstream", t)
            }();
        e.exports = f
    }, {
        159: 159,
        178: 178,
        281: 281,
        58: 58,
        80: 80,
        93: 93
    }],
    68: [function(t, e, i) {
        "use strict";
        var n = t(80),
            r = n.WeblabTreatment,
            o = t(294),
            s = function() {
                function t() {
                    this.event = {}
                }
                return (t.prototype.withAction = function(t) {
                    return (this.event.action = t.toString(), this)
                }, t.prototype.withHitType = function(t) {
                    return (this.event.hitType = t.toString(), this)
                }, t.prototype.withPageType = function(t) {
                    return (this.event.pageType = t.toString(), this)
                }, t.prototype.withPageTypeId = function(t) {
                    return (this.event.pageTypeId = t, this)
                }, t.prototype.withPageTypeIdSource = function(t) {
                    return (this.event.pageTypeIdSource = t.toString(), this)
                }, t.prototype.withRefMarker = function(t) {
                    return (this.event.refMarker = t, this)
                }, t.prototype.withSubPageType = function(t) {
                    return (this.event.subPageType = t.toString(), this)
                }, t.prototype.withWeblabs = function(t) {
                    return (this.event.Weblabs = o.chain(t).keys().map(function(e) {
                        return {
                            weblabName: e,
                            treatmentName: r[t[e]]
                        }
                    }).value(), o.isEmpty(this.event.Weblabs) && delete this.event.Weblabs, this)
                }, t.prototype.withAnalyticsMap = function(t) {
                    return (this.event = t, this)
                }, t.prototype.build = function() {
                    return this.event.refMarker && this.event.pageType ? this.event : null
                }, t)
            }();
        e.exports = s
    }, {
        294: 294,
        80: 80
    }],
    69: [function(t, e, i) {
        "use strict";
        var n = t(67),
            r = t(68),
            o = {
                ClickstreamClient: n,
                ClickstreamEventBuilder: r
            };
        e.exports = o
    }, {
        67: 67,
        68: 68
    }],
    70: [function(t, e, i) {
        "use strict";
        var n = t(281),
            r = n.of("Arrays"),
            o = function() {
                function t() {}
                return (t.binarySearchIndexOf = function(t, e) {
                    return this.binarySearch(t, e, !1)
                }, t.binarySearchIndexOfClosestBelow = function(t, e) {
                    return this.binarySearch(t, e, !0)
                }, t.binarySearch = function(t, e, i) {
                    r(t, "array").exists(), r(e, "compare").exists();
                    for (var n, o, s = 0, a = t.length - 1; s <= a;) {
                        if (n = Math.floor((a + s) / 2), o = e(t[n]), 0 === o) return n;
                        o < 0 ? a = n - 1 : s = n + 1
                    }
                    return i ? Math.max(a, 0) : -1
                }, t.indexOfMinimum = function(t, e) {
                    r(t, "array").exists(), r(t.length > 0, "length > 0").is["true"](), r(e, "compare").exists();
                    for (var i = 0, n = t[0], o = 1; o < t.length; ++o) e(t[o], n) < 0 && (n = t[o], i = o);
                    return i
                }, t.indexOfMaximum = function(e, i) {
                    return (r(e, "array").exists(), r(e.length > 0, "length > 0").is["true"](), r(i, "compare").exists(), t.indexOfMinimum(e, function(t, e) {
                        return -1 * i(t, e)
                    }))
                }, t)
            }();
        e.exports = o
    }, {
        281: 281
    }],
    71: [function(t, e, i) {
        "use strict";
        var n = t(74),
            r = function() {
                function t() {}
                return (t.isAmazon = function(e, i) {
                    return (void 0 === i && (i = window), e = null === e || "undefined" == typeof e ? i.location.hostname : e, t.AMAZON_REGEX.test(e))
                }, t.fromMarketplaceId = function(e) {
                    switch (e) {
                        case n.DE:
                            return t.DE;
                        case n.JP:
                            return t.JP;
                        case n.UK:
                            return t.UK;
                        case n.ROE_EU:
                        case n.ROW_EU:
                        case n.ROW_FE:
                        case n.ROW_NA:
                            return t.PRIME_VIDEO;
                        case n.US:
                            return t.US;
                        default:
                            throw new Error("Can't get AmazonFQDN for unknown MarketplaceId! Received: " + e)
                    }
                }, t.AMAZON_REGEX = /((.*.|^)amazon..*|(.*.|^)primevideo..*)/, t.DE = "www.amazon.de", t.JP = "www.amazon.co.jp", t.UK = "www.amazon.co.uk", t.US = "www.amazon.com", t.PRIME_VIDEO = "www.primevideo.com", t)
            }();
        e.exports = r
    }, {
        74: 74
    }],
    72: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t() {}
            return (t.SILVERLIGHT_PC = "A63V4FRV3YUP9", t.SILVERLIGHT_MAC = "A2G17C9GWLWFKO", t.HTML5 = "AOAGZA014O5RE", t)
        }();
        e.exports = n
    }, {}],
    73: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t() {}
            return (t.BACKSPACE = 8, t.DELETE = 46, t.ESC = 27, t.SHIFT = 16, t.SPACE = 32, t.TAB = 9, t.LEFT_ARROW = 37, t.UP_ARROW = 38, t.RIGHT_ARROW = 39, t.DOWN_ARROW = 40, t.START_OF_NUMBER = 48, t.END_OF_NUMBER = 57, t.START_OF_NUMPAD = 96, t.END_OF_NUMPAD = 105, t.C = 67, t.F = 70, t.M = 77, t)
        }();
        e.exports = n
    }, {}],
    74: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t() {}
            return (t.isClassic = function(e) {
                switch (e) {
                    case t.DE:
                    case t.JP:
                    case t.UK:
                    case t.US:
                        return !0
                }
                return !1
            }, t.ROE_EU = "A3K6Y4MI8GDYMT", t.ROW_EU = "A2MFUE2XK8ZSSY", t.ROW_FE = "A15PK738MTQHSO", t.ROW_NA = "ART4WZ8MWBX2Y", t.DE = "A1PA6795UKMFR9", t.JP = "A1VC38T7YXB528", t.UK = "A1F83G8C2ARO7P", t.US = "ATVPDKIKX0DER", t)
        }();
        e.exports = n
    }, {}],
    75: [function(t, e, i) {
        "use strict";
        var n = t(74),
            r = function() {
                function t() {}
                return (t.fromMarketplaceId = function(e, i, n) {
                    void 0 === i && (i = !0), void 0 === n && (n = window);
                    var r = t.getDomain(e, i, n);
                    return t.PROTOCOL + t.getSubdomain(e, r) + r
                }, t.getDomain = function(e, i, r) {
                    if (i) {
                        var o = r.location.host.match(t.DOMAIN_REGEX);
                        if (null !== o) return o[1];
                        if (e === n.US && (o = r.location.host.match(t.IMDB_REGEX), null !== o)) return o[1]
                    }
                    return t.getDomainFromMarketplaceId(e)
                }, t.getSubdomain = function(e, i) {
                    if (i === t.IMDB_DOMAIN) return t.IMDB_SUBDOMAIN;
                    switch (e) {
                        case n.ROW_NA:
                        case n.US:
                            return t.US_SUBDOMAIN;
                        case n.ROE_EU:
                        case n.ROW_EU:
                        case n.UK:
                        case n.DE:
                            return t.EU_SUBDOMAIN;
                        case n.ROW_FE:
                        case n.JP:
                            return t.JP_SUBDOMAIN;
                        default:
                            throw new Error("Can't get PartnerServiceEndpoint for unknown MarketplaceId! Received: " + e)
                    }
                }, t.getDomainFromMarketplaceId = function(t) {
                    switch (t) {
                        case n.ROW_NA:
                        case n.ROE_EU:
                        case n.ROW_EU:
                        case n.ROW_FE:
                            return ".primevideo.com";
                        case n.DE:
                            return ".amazon.de";
                        case n.JP:
                            return ".amazon.co.jp";
                        case n.UK:
                            return ".amazon.co.uk";
                        default:
                            return ".amazon.com"
                    }
                }, t.EU_SUBDOMAIN = "atv-ps-eu", t.JP_SUBDOMAIN = "atv-ps-fe", t.US_SUBDOMAIN = "atv-ps", t.IMDB_DOMAIN = ".imdb.com", t.IMDB_SUBDOMAIN = "primevideo-dp-na", t.DOMAIN_REGEX = /.*(.(amazon|primevideo)..*)/, t.IMDB_REGEX = /.*(.imdb.com)/, t.PROTOCOL = "https://", t)
            }();
        e.exports = r
    }, {
        74: 74
    }],
    76: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t() {}
            return (t.DiagnosticsEndpointKey = "diagnostics_url", t)
        }();
        e.exports = n
    }, {}],
    77: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t() {}
            return (t.EXTRA_SMALL_SCREEN_MAX_WIDTH = 479, t.SMALL_SCREEN_MIN_WIDTH = 480, t.MEDIUM_SCREEN_MIN_WIDTH = 640, t.LARGE_SCREEN_MIN_WIDTH = 1200, t.EXTRA_LARGE_SCREEN_MIN_WIDTH = 1921, t.SCALE_FACTOR_EXTRA_SMALL = 1, t.SCALE_FACTOR_SMALL = 100 / t.SMALL_SCREEN_MIN_WIDTH, t.SCALE_FACTOR_MEDIUM = 100 / t.MEDIUM_SCREEN_MIN_WIDTH, t.SCALE_FACTOR_LARGE = 100 / t.LARGE_SCREEN_MIN_WIDTH, t.SCALE_FACTOR_EXTRA_LARGE = 100 / t.EXTRA_LARGE_SCREEN_MIN_WIDTH, t.SCREEN_EXTRA_SMALL_MEDIA_QUERY = "(max-width: " + t.EXTRA_SMALL_SCREEN_MAX_WIDTH + "px)", t.SCREEN_SMALL_MEDIA_QUERY = "(min-width: " + t.SMALL_SCREEN_MIN_WIDTH + "px)", t.SCREEN_MEDIUM_MEDIA_QUERY = "(min-width: " + t.MEDIUM_SCREEN_MIN_WIDTH + "px)", t.SCREEN_LARGE_MEDIA_QUERY = "(min-width: " + t.LARGE_SCREEN_MIN_WIDTH + "px)", t.SCREEN_EXTRA_LARGE_MEDIA_QUERY = "(min-width: " + t.EXTRA_LARGE_SCREEN_MIN_WIDTH + "px)", t)
        }();
        e.exports = n
    }, {}],
    78: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t[t.C = 0] = "C", t[t.T1 = 1] = "T1", t[t.T2 = 2] = "T2", t[t.T3 = 3] = "T3", t[t.T4 = 4] = "T4", t[t.T5 = 5] = "T5", t[t.T6 = 6] = "T6", t[t.T7 = 7] = "T7", t[t.T8 = 8] = "T8", t[t.T9 = 9] = "T9", t[t.T10 = 10] = "T10", t[t.T11 = 11] = "T11", t[t.T12 = 12] = "T12", t[t.T13 = 13] = "T13", t[t.T14 = 14] = "T14", t[t.T15 = 15] = "T15", t[t.T16 = 16] = "T16", t[t.T17 = 17] = "T17", t[t.T18 = 18] = "T18", t[t.T19 = 19] = "T19", t[t.T20 = 20] = "T20"
        }(n || (n = {})), e.exports = n
    }, {}],
    79: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t() {}
            return (t.getActiveWeblabs = function() {
                return [t.ATV_WEB_PLAYER_OAUTH, t.HTML5_HEVC, t.DISABLE_SILVERLIGHT, t.HTML5_SAFARI_CVBR, t.HTML5_NETWORK_SEED, t.HTML5_NETWORK_STATUS_TOAST, t.HTML5_REMOVE_BUFFER_SIZE_RATIO, t.HTML5_CAROUSEL, t.DISABLE_VMP_VALIDATION_CACHING]
            }, t.ATV_WEB_PLAYER_OAUTH = "ATV_WEB_PLAYER_OAUTH_74228", t.HTML5_HEVC = "AIV_HTML5_HEVC_79711", t.DISABLE_SILVERLIGHT = "AIV_WEB_PLAYER_DISABLE_SILVERLIGHT_91138", t.HTML5_SAFARI_CVBR = "AIV_HTML5_SAFARI_CVBR_93874", t.HTML5_NETWORK_SEED = "AIV_HTML5_NETWORK_SEED_95840", t.HTML5_NETWORK_STATUS_TOAST = "AIV_HTML5_NETWORK_STATUS_TOAST_98636", t.HTML5_REMOVE_BUFFER_SIZE_RATIO = "AIV_HTML5_REMOVE_BUFFER_SIZE_RATIO_99314", t.HTML5_CAROUSEL = "AIV_HTML5_MIRO_CAROUSEL_196734", t.DISABLE_VMP_VALIDATION_CACHING = "AIV_WEB_PLAYER_DISABLE_VMP_VALIDATION_CACHING_217275", t)
        }();
        e.exports = n
    }, {}],
    80: [function(t, e, i) {
        "use strict";
        var n = t(71),
            r = t(72),
            o = t(73),
            s = t(74),
            a = t(75),
            l = t(76),
            c = t(77),
            u = t(79),
            p = t(78),
            h = {
                AmazonFQDN: n,
                DeviceTypeId: r,
                KeyCode: o,
                MarketplaceID: s,
                PartnerServiceEndpoint: a,
                StorageKeys: l,
                Styling: c,
                Weblabs: u,
                WeblabTreatment: p
            };
        e.exports = h
    }, {
        71: 71,
        72: 72,
        73: 73,
        74: 74,
        75: 75,
        76: 76,
        77: 77,
        78: 78,
        79: 79
    }],
    81: [function(t, e, i) {
        "use strict";
        var n = t(281),
            r = t(283),
            o = n.of("BasicEventEmitter"),
            s = function() {
                function t() {
                    this.eventEmitter = new r.EventEmitter2
                }
                return (t.prototype.on = function(t, e) {
                    var i = this.getKey(t);
                    this.eventEmitter.on(i, e)
                }, t.prototype.onAny = function(t) {
                    this.eventEmitter.onAny(t)
                }, t.prototype.once = function(t, e) {
                    var i = this.getKey(t);
                    this.eventEmitter.once(i, e)
                }, t.prototype.many = function(t, e, i) {
                    var n = this.getKey(t);
                    this.eventEmitter.many(n, e, i)
                }, t.prototype.off = function(t, e) {
                    var i = this.getKey(t);
                    this.eventEmitter.off(i, e)
                }, t.prototype.offAny = function(t) {
                    this.eventEmitter.offAny(t)
                }, t.prototype.emit = function(t, e) {
                    var i = this.getKey(t),
                        n = "undefined" != typeof e ? e : t;
                    this.eventEmitter.emit(i, n)
                }, t.prototype.getKey = function(t) {
                    return (o(t, "eventType").exists(), o(t.toString, "toString").is.a["function"](), t.toString())
                }, t)
            }();
        e.exports = s
    }, {
        281: 281,
        283: 283
    }],
    82: [function(t, e, i) {
        "use strict";
        var n = t(81),
            r = {
                BasicEventEmitter: n
            };
        e.exports = r
    }, {
        81: 81
    }],
    83: [function(t, e, i) {
        "use strict";
        var n = t(284),
            r = t(294),
            o = n.get("FiniteStateMachine"),
            s = function() {
                function t(t) {
                    this.currentState = t, this.states = {}, this.transitionCallbacks = [], this.transitionsInProgress = 0, this.illegalTransitionCallbacks = [], this.stateCallbacks = {}
                }
                return (t.prototype.addTransition = function(t, e) {
                    this.states[e] = r.union(this.states[e], [t]), r.isUndefined(this.stateCallbacks[e]) && (this.stateCallbacks[e] = [])
                }, t.prototype.onTransition = function(t) {
                    this.transitionCallbacks = r.union(this.transitionCallbacks, [t])
                }, t.prototype.onIllegalTransition = function(t) {
                    this.illegalTransitionCallbacks = r.union(this.illegalTransitionCallbacks, [t])
                }, t.prototype.onTransitionTo = function(t, e) {
                    this.stateCallbacks[t] = r.union(this.stateCallbacks[t], [e])
                }, t.prototype.transitionTo = function(t, e, i, n) {
                    if (r.isUndefined(this.states[t]) || !r.contains(this.states[t], this.currentState)) return (this.callCallbacks(this.illegalTransitionCallbacks, this.currentState, t), !1);
                    if (this.transitionsInProgress > 0 && o.warn("Requesting state transition to nextState: " + t + " while " + this.transitionsInProgress + " transitions are already in progress."), this.transitionsInProgress++, !r.isUndefined(i) && !r.isNull(i) && !i()) return (this.transitionsInProgress--, !1);
                    var s = this.currentState;
                    return (this.currentState = t, r.isUndefined(n) || r.isNull(n) || n() ? (this.callCallbacks(this.transitionCallbacks, s, t, e), this.callCallbacks(this.stateCallbacks[t], s, t, e), this.transitionsInProgress--, !0) : (this.transitionsInProgress--, this.currentState = s, !1))
                }, t.prototype.canTransitionTo = function(t) {
                    return !r.isUndefined(this.states[t]) && r.contains(this.states[t], this.currentState)
                }, t.prototype.getCurrentState = function() {
                    return this.currentState
                }, t.prototype.callCallbacks = function(t) {
                    for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                    r.each(t, function(t) {
                        t.apply(null, e)
                    })
                }, t)
            }();
        e.exports = s
    }, {
        284: 284,
        294: 294
    }],
    84: [function(t, e, i) {
        "use strict";
        var n = t(281),
            r = n.of("CappedGeometricSequence"),
            o = function() {
                function t(t) {
                    void 0 === t && (t = Math.random), this.initialValue = 0, this.exponentialFactor = 1, this.randomizationFactor = 0, this.maxValue = -1, this.random = t
                }
                return (t.prototype.withInitialValue = function(t) {
                    return (r(t).exists(), r(t >= 0, "initialValue >= 0").is["true"](), this.initialValue = t, this)
                }, t.prototype.withExponentialFactor = function(t) {
                    return (r(t > 0, "exponentialFactor > 0").is["true"](), this.exponentialFactor = t, this)
                }, t.prototype.withRandomizationFactor = function(t) {
                    return (r(t).exists(), r(t >= 0, "randomizationFactor >= 0").is["true"](), this.randomizationFactor = t, this)
                }, t.prototype.withMaxValue = function(t) {
                    return (r(t > 0, "maxValue > 0").is["true"](), this.maxValue = t, this)
                }, t.prototype.getValue = function(t) {
                    r(t > 0, "n > 0").is["true"]();
                    var e = this.initialValue * Math.pow(this.exponentialFactor, t - 1) + Math.floor(this.random() * this.randomizationFactor * t);
                    return (this.maxValue !== -1 && e > this.maxValue && (e = this.maxValue), e)
                }, t)
            }();
        e.exports = o
    }, {
        281: 281
    }],
    85: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t(t) {
                this.itemHeap = [], this.comparator = t
            }
            return (t.prototype.push = function(t) {
                this.itemHeap.push(t), this["float"](this.itemHeap.length - 1)
            }, t.prototype.remove = function(t) {
                var e = this.itemHeap.indexOf(t);
                return e !== -1 && (e === this.itemHeap.length - 1 ? (this.itemHeap.pop(), !0) : (this.itemHeap[e] = this.itemHeap.pop(), this.comparator(this.itemHeap[e], t) ? this["float"](e) : this.sink(e), !0))
            }, t.prototype.pop = function() {
                if (0 === this.itemHeap.length) return null;
                if (1 === this.itemHeap.length) return this.itemHeap.pop();
                var t = this.itemHeap[0];
                return (this.itemHeap[0] = this.itemHeap.pop(), this.sink(0), t)
            }, t.prototype.size = function() {
                return this.itemHeap.length
            }, t.prototype["float"] = function(e) {
                if (0 !== e) {
                    var i = t.parent(e),
                        n = this.itemHeap[i];
                    this.comparator(this.itemHeap[e], n) && (this.itemHeap[i] = this.itemHeap[e], this.itemHeap[e] = n, this["float"](i))
                }
            }, t.prototype.sink = function(e) {
                if (e !== this.itemHeap.length - 1) {
                    var i = t.leftChild(e);
                    if (!(i >= this.itemHeap.length)) {
                        var n = this.itemHeap[i];
                        this.comparator(n, this.itemHeap[e]) && (this.itemHeap[i] = this.itemHeap[e], this.itemHeap[e] = n, this.sink(i))
                    }
                }
            }, t.leftChild = function(t) {
                return 2 * t + 1
            }, t.parent = function(t) {
                return t % 2 === 1 ? (t - 1) / 2 : t / 2
            }, t)
        }();
        e.exports = n
    }, {}],
    86: [function(t, e, i) {
        "use strict";
        var n = t(281),
            r = t(90),
            o = n.of("LinearRegressionCalculator"),
            s = function() {
                function t(t) {
                    this.APPRX_ZERO = 1e-6, o(t > 0, "maxSamples > 0").is["true"](), this.xSampleAggregator = new r(t), this.ySampleAggregator = new r(t)
                }
                return (t.prototype.addPoint = function(t, e) {
                    o(t, "x").exists(), o(e, "y").exists(), this.xSampleAggregator.addSample(t), this.ySampleAggregator.addSample(e)
                }, t.prototype.reset = function() {
                    this.xSampleAggregator.reset(), this.ySampleAggregator.reset()
                }, t.prototype.linearRegression = function(t) {
                    o(t >= 2, "windowSize >= 2.").is["true"]();
                    var e = this.xSampleAggregator.getSamplesInWindow(t),
                        i = this.ySampleAggregator.getSamplesInWindow(t);
                    o(e.length === i.length, "sample length equal").is["true"]();
                    var n = e.length;
                    if (n < 2) return {
                        slope: 0,
                        yIntercept: 0,
                        determinationCoefficient: 0
                    };
                    for (var r = this.xSampleAggregator.getAverage(n), s = this.ySampleAggregator.getAverage(n), a = this.xSampleAggregator.getStdDev(n), l = this.ySampleAggregator.getStdDev(n), c = 0, u = 0, p = 0; p < n; ++p) {
                        var h = e[p] - r,
                            f = i[p] - s;
                        c += h * f, u += h * h
                    }
                    if (0 === u) return {
                        slope: 0,
                        yIntercept: 0,
                        determinationCoefficient: 0
                    };
                    var d, y = c / u,
                        g = s - y * r;
                    return (d = Math.abs(l) < this.APPRX_ZERO ? 0 : y / (l / a), {
                        slope: y,
                        yIntercept: g,
                        determinationCoefficient: d * d
                    })
                }, t)
            }();
        e.exports = s
    }, {
        281: 281,
        90: 90
    }],
    87: [function(t, e, i) {
        "use strict";
        var n = t(281),
            r = t(70),
            o = t(93),
            s = n.of("NumberLine"),
            a = function() {
                function t(t) {
                    void 0 === t && (t = Number.MIN_VALUE), this.intervals = [], this.epsilon = t
                }
                return (t.prototype.add = function(t) {
                    var e = this;
                    s(t, "interval").exists(), s(t.start < t.end, "interval.start(" + t.start + ") < interval.end(" + t.end + ")").is["true"]();
                    var i = r.binarySearchIndexOfClosestBelow(this.intervals, function(i) {
                        return e.compare(t.start, i.start)
                    });
                    for (i < this.intervals.length && this.compare(t.start, this.intervals[i].start) > 0 && i++, this.intervals.splice(i, 0, {
                            start: t.start,
                            end: t.end
                        }), i > 0 && this.compare(this.intervals[i - 1].end, this.intervals[i].start) >= 0 && i--; i + 1 < this.intervals.length && this.compare(this.intervals[i + 1].start, this.intervals[i].end) <= 0;) this.intervals[i].end = Math.max(this.intervals[i].end, this.intervals[i + 1].end), this.intervals.splice(i + 1, 1)
                }, t.prototype.remove = function(t) {
                    var e = this;
                    s(t, "interval").exists(), s(t.start < t.end, "interval.start > interval.end").is["true"]();
                    for (var i = r.binarySearchIndexOfClosestBelow(this.intervals, function(i) {
                            return e.compare(t.start, i.start)
                        }); i < this.intervals.length && this.compare(this.intervals[i].start, t.end) < 0;) {
                        var n = this.intervalDifference(this.intervals[i], t);
                        (o = this.intervals).splice.apply(o, [i, 1].concat(n)), i += n.length
                    }
                    var o
                }, t.prototype.find = function(t) {
                    var e = this;
                    s(t, "point").exists();
                    var i = r.binarySearchIndexOf(this.intervals, function(i) {
                        return e.compare(t, i.start) < 0 ? -1 : e.compare(t, i.end) > 0 ? 1 : 0
                    });
                    return i === -1 ? null : this.intervals[i]
                }, t.prototype.union = function(e) {
                    s(e, "other").exists();
                    for (var i = new t(this.epsilon), n = 0, r = 0, o = -1; n < e.intervals.length || r < this.intervals.length;) {
                        var a = null;
                        a = r >= this.intervals.length || n < e.intervals.length && this.compare(e.intervals[n].start, this.intervals[r].start) < 0 ? e.intervals[n++] : this.intervals[r++], o === -1 || this.compare(i.intervals[o].end, a.start) < 0 ? (i.intervals.push({
                            start: a.start,
                            end: a.end
                        }), o++) : i.intervals[o].end = Math.max(i.intervals[o].end, a.end)
                    }
                    return i
                }, t.prototype.intersection = function(e) {
                    s(e, "other").exists();
                    for (var i = new t(this.epsilon), n = 0, r = 0; n < this.intervals.length && r < e.intervals.length;) {
                        var a = this.intervalIntersection(this.intervals[n], e.intervals[r]);
                        o.exists(a) && i.intervals.push(a), this.compare(this.intervals[n].end, e.intervals[r].end) > 0 ? r++ : n++
                    }
                    return i
                }, t.prototype.shift = function(e) {
                    s(e, "value").exists();
                    for (var i = new t(this.epsilon), n = 0, r = this.intervals; n < r.length; n++) {
                        var o = r[n];
                        i.add({
                            start: o.start + e,
                            end: o.end + e
                        })
                    }
                    return i
                }, t.prototype.getIntervals = function() {
                    return this.intervals
                }, t.prototype.intervalIntersection = function(t, e) {
                    return this.compare(t.end, e.start) <= 0 ? null : this.compare(t.start, e.end) >= 0 ? null : {
                        start: Math.max(t.start, e.start),
                        end: Math.min(t.end, e.end)
                    }
                }, t.prototype.intervalDifference = function(t, e) {
                    return this.compare(t.start, e.end) >= 0 || this.compare(t.end, e.start) < 0 ? [t] : this.compare(t.start, e.start) >= 0 && this.compare(t.end, e.end) <= 0 ? [] : this.compare(t.start, e.start) < 0 && this.compare(t.end, e.end) > 0 ? [{
                        start: t.start,
                        end: e.start
                    }, {
                        start: e.end,
                        end: t.end
                    }] : this.compare(t.start, e.start) < 0 ? [{
                        start: t.start,
                        end: e.start
                    }] : this.compare(t.end, e.end) > 0 ? [{
                        start: e.end,
                        end: t.end
                    }] : void 0
                }, t.prototype.compare = function(t, e) {
                    var i = t - e;
                    return i < -this.epsilon ? -1 : i > this.epsilon ? 1 : 0
                }, t)
            }();
        e.exports = a
    }, {
        281: 281,
        70: 70,
        93: 93
    }],
    88: [function(t, e, i) {
        "use strict";
        var n = t(281),
            r = n.of("SampleAggregator"),
            o = function() {
                function t() {}
                return (t.average = function(t) {
                    r(t, "values").exists(), r(t.length > 0, "length > 0").is["true"]();
                    var e = t.reduce(function(t, e) {
                        return t + e
                    }, 0);
                    return e / t.length
                }, t.stdDev = function(e) {
                    r(e, "values").exists(), r(e.length > 0, "length > 0").is["true"]();
                    var i = t.average(e),
                        n = e.reduce(function(t, e) {
                            return t + (e - i) * (e - i)
                        }, 0);
                    return Math.sqrt(n / e.length)
                }, t.lerp = function(t, e, i) {
                    return (r(t, "start").exists(), r(e, "end").exists(), r(i, "amount").exists(), t + (e - t) * Math.min(Math.max(i, 0), 1))
                }, t.exponentialInterp = function(e, i, n, o) {
                    return (r(e, "exponentialFactor").exists(), r(0 !== e, "exponentialFactor !== 0").is["true"](), r(i, "start").exists(), r(n, "end").exists(), r(o, "amount").exists(), t.lerp(i, n, (Math.exp(e * Math.min(Math.max(o, 0), 1)) - 1) / (Math.exp(e) - 1)))
                }, t.sinInterp = function(t, e, i) {
                    return (r(t, "start").exists(), r(e, "end").exists(), r(i, "amount").exists(), t + (e - t) * Math.sin(Math.PI / 2 * i))
                }, t.isApprxEqual = function(t, e, i) {
                    return (r(t, "value").exists(), r(e, "expected").exists(), r(i, "delta").exists(), r(i >= 0, "delta >= 0").is["true"](), Math.abs(e - t) <= i)
                }, t)
            }();
        e.exports = o
    }, {
        281: 281
    }],
    89: [function(t, e, i) {
        "use strict";
        var n = t(281),
            r = t(294),
            o = t(88),
            s = n.of("PiecewiseLinearFunction"),
            a = function() {
                function t(t) {
                    s(t, "coordinates").exists(), s(t.length > 0, "length > 0").is["true"]();
                    var e = r.unzip(t);
                    this.xCoords = e[0], this.yCoords = e[1];
                    for (var i = 0; i < this.xCoords.length - 1; ++i) s(this.xCoords[i] < this.xCoords[i + 1], "x coordinates must be ordered and unique.").is["true"]()
                }
                return (t.prototype.evaluate = function(t) {
                    if (s(t, "xValue").exists(), t >= this.xCoords[this.xCoords.length - 1]) return this.yCoords[this.xCoords.length - 1];
                    for (var e = this.xCoords.length - 2; e >= 0; --e)
                        if (t >= this.xCoords[e]) return o.lerp(this.yCoords[e], this.yCoords[e + 1], (t - this.xCoords[e]) / (this.xCoords[e + 1] - this.xCoords[e]));
                    return this.yCoords[0]
                }, t)
            }();
        e.exports = a
    }, {
        281: 281,
        294: 294,
        88: 88
    }],
    90: [function(t, e, i) {
        "use strict";
        var n = t(281),
            r = t(88),
            o = t(294),
            s = n.of("SampleAggregator"),
            a = function() {
                function t(t) {
                    s(t > 0, "maxSamples > 0.").is["true"](), this.maxSamples = t, this.reset()
                }
                return (t.prototype.addSample = function(t) {
                    s(t, "sample").exists(), this.samples.length >= this.maxSamples && this.samples.shift(), this.samples.push(t)
                }, t.prototype.reset = function() {
                    this.samples = []
                }, t.prototype.getAverage = function(t) {
                    s(t > 0, "windowSize > 0").is["true"]();
                    var e = this.getSamplesInWindow(t);
                    return 0 === e.length ? 0 : r.average(e)
                }, t.prototype.getStdDev = function(t) {
                    s(t > 0, "windowSize > 0").is["true"]();
                    var e = this.getSamplesInWindow(t);
                    return 0 === e.length ? 0 : r.stdDev(e)
                }, t.prototype.getSum = function(t) {
                    s(t > 0, "windowSize > 0").is["true"]();
                    var e = this.getSamplesInWindow(t);
                    return 0 === e.length ? 0 : e.reduce(function(t, e) {
                        return t + e
                    }, 0)
                }, t.prototype.getMinimum = function(t) {
                    s(t > 0, "windowSize > 0").is["true"]();
                    var e = this.getSamplesInWindow(t);
                    return 0 === e.length ? 0 : o.min(e)
                }, t.prototype.getSamplesInWindow = function(t) {
                    return o.last(this.samples, Math.min(this.maxSamples, t))
                }, t)
            }();
        e.exports = a
    }, {
        281: 281,
        294: 294,
        88: 88
    }],
    91: [function(t, e, i) {
        "use strict";
        var n = t(281),
            r = t(294),
            o = n.of("SlidingWindowEventTracker"),
            s = function() {
                function t(t, e) {
                    void 0 === e && (e = r.now), this.eventTimestamps = [], o(t > 0, "windowLengthMs > 0").is["true"](), this.windowLengthMs = t, this.now = e
                }
                return (t.prototype.recordEvent = function(t) {
                    (r.isNull(t) || r.isUndefined(t)) && (t = this.now()), o(t > 0, "eventTimestamp > 0").is["true"](), this.eventTimestamps.push(t)
                }, t.prototype.getEventCountInWindow = function() {
                    return (this.purgeRecordsOutsideWindow(), this.eventTimestamps.length)
                }, t.prototype.purgeRecordsOutsideWindow = function() {
                    var t = this,
                        e = this.now();
                    this.eventTimestamps = r.filter(this.eventTimestamps, function(i) {
                        return e - i <= t.windowLengthMs
                    })
                }, t)
            }();
        e.exports = s
    }, {
        281: 281,
        294: 294
    }],
    92: [function(t, e, i) {
        "use strict";
        var n = t(88),
            r = t(84),
            o = t(86),
            s = t(87),
            a = t(89),
            l = t(85),
            c = t(90),
            u = t(91),
            p = {
                CappedGeometricSequence: r,
                LinearRegressionCalculator: o,
                NumberLine: s,
                PiecewiseLinearFunction: a,
                PriorityQueue: l,
                SampleAggregator: c,
                SlidingWindowEventTracker: u,
                stdDev: n.stdDev,
                average: n.average,
                lerp: n.lerp,
                exponentialInterp: n.exponentialInterp,
                isApprxEqual: n.isApprxEqual,
                sinInterp: n.sinInterp
            };
        e.exports = p
    }, {
        84: 84,
        85: 85,
        86: 86,
        87: 87,
        88: 88,
        89: 89,
        90: 90,
        91: 91
    }],
    93: [function(t, e, i) {
        "use strict";
        var n = t(281),
            r = t(294),
            o = n.of("Objects"),
            s = function() {
                function t() {}
                return (t.withDefault = function(t, e) {
                    return this.isNullOrUndefined(t) ? e : t
                }, t.exists = function(t) {
                    return null !== t && "undefined" != typeof t
                }, t.isNullOrUndefined = function(t) {
                    return null === t || "undefined" == typeof t
                }, t.isUndefined = function(t) {
                    return "undefined" == typeof t
                }, t.isPropertyNullOrUndefined = function(t, e) {
                    return (o(e, "propertyName").exists(), this.isNullOrUndefined(t) || this.isNullOrUndefined(t[e]))
                }, t.nestedValue = function(e, i, n) {
                    void 0 === n && (n = null), o(i, "keys").exists();
                    var s;
                    if (s = "string" == typeof i ? i.split(".") : i, 0 === s.length) return n;
                    var a = r.reduce(s, function(e, i) {
                        return t.isNullOrUndefined(e) ? null : e[i]
                    }, e);
                    return t.isNullOrUndefined(a) ? n : a
                }, t.deepTraverse = function(e, i) {
                    for (var n in e) e.hasOwnProperty(n) && (i(e, n, e[n]), t.exists(e[n]) && "object" == typeof e[n] && t.deepTraverse(e[n], i))
                }, t.deepExtend = function(e, i) {
                    if (t.isNullOrUndefined(i)) return t.withDefault(r.clone(e), null);
                    if (t.isNullOrUndefined(e)) return r.clone(i);
                    for (var n = {}, o = r.union(r.keys(e), r.keys(i)), s = 0, a = o; s < a.length; s++) {
                        var l = a[s];
                        r.isUndefined(e[l]) ? n[l] = r.clone(i[l]) : r.isObject(e[l]) && r.isObject(i[l]) && !r.isArray(e[l]) && !r.isArray(i[l]) ? n[l] = this.deepExtend(e[l], i[l]) : n[l] = i.hasOwnProperty(l) ? i[l] : e[l]
                    }
                    return n
                }, t)
            }();
        e.exports = s
    }, {
        281: 281,
        294: 294
    }],
    94: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t(t, e) {
                void 0 === t && (t = Date), this.dateConstructor = t, this.performanceRef = "undefined" == typeof e && "undefined" != typeof performance ? performance : e
            }
            return (t.prototype.getHighResRelativeTimeMs = function() {
                return "undefined" == typeof this.performanceRef ? (new this.dateConstructor).getTime() : this.performanceRef.now()
            }, t)
        }();
        e.exports = n
    }, {}],
    95: [function(t, e, i) {
        "use strict";
        var n = t(281),
            r = t(94),
            o = n.of("Time"),
            s = {
                TimeProvider: r,
                millisecondsToHoursMinutesSeconds: function(t) {
                    if (t <= 0) return {
                        hours: 0,
                        minutes: 0,
                        seconds: 0
                    };
                    if (t <= 1e3) return {
                        hours: 0,
                        minutes: 0,
                        seconds: 1
                    };
                    var e = Math.floor(t / 36e5),
                        i = Math.floor(t % 36e5 / 6e4),
                        n = Math.round(t % 6e4 / 1e3);
                    return (60 === n && (n = 0, i++, 60 === i && (i = 0, e++)), {
                        hours: e,
                        minutes: i,
                        seconds: n
                    })
                },
                unixTimestampToHoursMinutesSeconds: function(t) {
                    if (t <= 0) return {
                        hours: 0,
                        minutes: 0,
                        seconds: 0
                    };
                    var e = new Date(t);
                    return {
                        hours: e.getHours(),
                        minutes: e.getMinutes(),
                        seconds: e.getSeconds()
                    }
                },
                isoToMillis: function(t) {
                    o(t, "isoString").exists(), o(t).is.a.string(), o(t.length > 3, "length > 3").is["true"]();
                    var e = new RegExp("PT([0-9]*H)*([0-9]*M)*((?!0\d)\d*(\.\d+)?S)*");
                    if (!e.test(t)) throw new Error("Invalid ISO Time String passed into isoToMillis");
                    t = t.substring(2);
                    var i = t.indexOf("H"),
                        n = t.indexOf("M"),
                        r = t.indexOf("S"),
                        s = i > 0 ? Number(t.substring(0, i)) : 0,
                        a = n > 0 ? Number(t.substring(i + 1, n)) : 0,
                        l = r > 0 ? Number(t.substring(Math.max(i, n) + 1, r)) : 0;
                    return Math.round(1e3 * (60 * s * 60 + 60 * a + l))
                },
                formatTime: function(t, e) {
                    void 0 === e && (e = !1), o(t, "hms").exists();
                    var i = t.minutes < 10 ? "0" + t.minutes : t.minutes.toString(),
                        n = t.seconds < 10 ? "0" + t.seconds : t.seconds.toString();
                    return t.hours > 0 || e === !0 ? t.hours + ":" + i + ":" + n : i + ":" + n
                },
                dateTimeToString: function(t) {
                    var e = function(t, e) {
                        return (e + t).slice(-e.length)
                    };
                    return e(t.getFullYear(), "0000") + "-" + e(t.getMonth() + 1, "00") + "-" + e(t.getDate(), "00") + " " + e(t.getHours(), "00") + ":" + e(t.getMinutes(), "00") + ":" + e(t.getSeconds(), "00") + "." + e(t.getMilliseconds(), "000")
                }
            };
        e.exports = s
    }, {
        281: 281,
        94: 94
    }],
    96: [function(t, e, i) {
        "use strict";
        var n = t(281),
            r = t(294),
            o = t(71),
            s = n.of("AmazonUrlCreator"),
            a = function() {
                function t(t, e, i) {
                    void 0 === i && (i = window), this.marketplaceId = null, this.csUrlPathMap = null, this.marketplaceId = s(t, "marketplaceId").exists(), this.csUrlPathMap = s(e, "csUrlPathMap").exists(), this.windowRef = s(i, "windowRef").exists()
                }
                return (t.prototype.createCSUrl = function(e) {
                    s(this.csUrlPathMap[e], "csUrlPathMap[csUrlPathKey]").exists();
                    var i = this.windowRef.location.hostname,
                        n = i,
                        a = this.csUrlPathMap[e][n];
                    (r.isNull(a) || r.isUndefined(a)) && (i = o.fromMarketplaceId(this.marketplaceId), n = this.marketplaceId);
                    var l = this.csUrlPathMap[e][n];
                    return ((r.isNull(l) || r.isUndefined(l)) && (n = t.DEFAULT_ID), i + this.csUrlPathMap[e][n])
                }, t.prototype.createDetailPageUrl = function(e) {
                    var i = this.windowRef.location.hostname;
                    return (o.isAmazon(i, this.windowRef) || (i = o.fromMarketplaceId(this.marketplaceId)), i + t.DETAIL_PAGE_BASE + e)
                }, t.DEFAULT_ID = "*", t.DETAIL_PAGE_BASE = "/dp/", t)
            }();
        e.exports = a
    }, {
        281: 281,
        294: 294,
        71: 71
    }],
    97: [function(t, e, i) {
        "use strict";
        var n = t(281),
            r = n.of("DOMUtils"),
            o = function() {
                function t() {}
                return (t.getAttributeOrThrow = function(t, e) {
                    r(t, "element").exists(), r(e, "attribute").exists();
                    var i = t.getAttribute(e);
                    if (null === i) throw new Error("Unable to get attribute '" + e + "'");
                    return i
                }, t.querySelectOrThrow = function(t, e) {
                    r(t, "element").exists(), r(e, "query").exists();
                    var i = t.querySelector(e);
                    if (null === i) throw new Error("Unable to querySelect '" + e + "'");
                    return i
                }, t.querySelectAllOrThrow = function(t, e) {
                    r(t, "element").exists(), r(e, "query").exists();
                    var i = t.querySelectorAll(e);
                    if (null === i || 0 === i.length) throw new Error("Unable to querySelectAll '" + e + "'");
                    return i;
                }, t.getAttributesInNamespace = function(t, e) {
                    var i = [];
                    if (e += ":", t.hasAttributes())
                        for (var n = 0; n < t.attributes.length; n++) t.attributes[n].name.substr(0, e.length) === e && i.push(t.attributes[n].name);
                    return i
                }, t.getAttributeWithoutNamespace = function(t) {
                    var e = /.*:(.*)/,
                        i = t.match(e);
                    return null === i || i.length < 2 ? t : i[1]
                }, t)
            }();
        e.exports = o
    }, {
        281: 281
    }],
    98: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t() {}
            return (t.getPlayerSize = function(t, e, i) {
                return (void 0 === i && (i = 1), {
                    width: t * i,
                    height: e * i
                })
            }, t)
        }();
        e.exports = n
    }, {}],
    99: [function(t, e, i) {
        "use strict";
        var n = t(284),
            r = t(294),
            o = n.get("EnumUtils"),
            s = function() {
                function t() {}
                return (t.getEnumValue = function(t, e) {
                    if (null === t || void 0 === t) return null;
                    if (!r.isString(t)) return (o.warn("Value must be a string but was " + t), null);
                    if (r.isEmpty(t)) return (o.warn("Value cannot be an empty string"), null);
                    var i = [];
                    for (var n in e) r.isNumber(e[n]) && i.push(n);
                    var s = r.find(i, function(e) {
                        return e.toLowerCase() === t.toLowerCase()
                    });
                    return null === s || void 0 === s ? (o.warn("Value must be one of [" + i.join(",") + "], but was " + t), null) : e[s]
                }, t)
            }();
        e.exports = s
    }, {
        284: 284,
        294: 294
    }],
    100: [function(t, e, i) {
        "use strict";
        var n = t(294),
            r = t(284),
            o = function() {
                function t(t) {
                    this.ephemeralIds = [], this.logger = r.get(t)
                }
                return (t.prototype.setLevel = function(t) {
                    this.logger.setLevel(t)
                }, t.prototype.enabledFor = function(t) {
                    return this.logger.enabledFor(t)
                }, t.prototype.log = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    (i = this.logger).log.apply(i, [this.getId()].concat(t));
                    var i
                }, t.prototype.debug = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    (i = this.logger).debug.apply(i, [this.getId()].concat(t));
                    var i
                }, t.prototype.info = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    (i = this.logger).info.apply(i, [this.getId()].concat(t));
                    var i
                }, t.prototype.warn = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    (i = this.logger).warn.apply(i, [this.getId()].concat(t));
                    var i
                }, t.prototype.error = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    (i = this.logger).error.apply(i, [this.getId()].concat(t));
                    var i
                }, t.prototype.setId = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this.ephemeralIds = t
                }, t.prototype.getId = function() {
                    return n.map(this.ephemeralIds, function(t) {
                        return "[" + t + "]"
                    }).join(" ")
                }, t)
            }();
        e.exports = o
    }, {
        284: 284,
        294: 294
    }],
    101: [function(t, e, i) {
        "use strict";
        var n = t(294),
            r = t(281),
            o = r.of("HTMLElementUtils"),
            s = function() {
                function t() {}
                return (t.addClass = function(t, e) {
                    if ("undefined" != typeof t.className) {
                        var i = t.className.split(" "),
                            r = n.find(i, function(t) {
                                return t === e
                            });
                        "undefined" == typeof r && (t.className += " " + e)
                    }
                }, t.removeClass = function(t, e) {
                    if ("undefined" != typeof t.className) {
                        var i = t.className.split(" "),
                            r = n.find(i, function(t) {
                                return t === e
                            });
                        "undefined" != typeof r && (i = n.filter(i, function(t) {
                            return t !== e
                        }), t.className = i.join(" "))
                    }
                }, t.getElementsByClassName = function(t, e) {
                    var i;
                    return i = n.isUndefined(t.getElementsByClassName) ? t.querySelectorAll("." + e) : t.getElementsByClassName(e)
                }, t.clickedInElement = function(t, e) {
                    o(t, "element").exists(), o(e, "event").exists();
                    var i = t.getBoundingClientRect();
                    return i.left < e.clientX && i.left + t.offsetWidth > e.clientX && i.top < e.clientY && i.top + t.offsetHeight > e.clientY
                }, t.isScrollable = function(e) {
                    return e.scrollHeight > e.offsetHeight + t.SCROLLABLE_MARGIN_OF_ERROR_PX
                }, t.SCROLLABLE_MARGIN_OF_ERROR_PX = 1, t)
            }();
        e.exports = s
    }, {
        281: 281,
        294: 294
    }],
    102: [function(t, e, i) {
        "use strict";
        var n = "(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))",
            r = new RegExp("^" + n + "\." + n + "\." + n + "\." + n + "$"),
            o = function() {
                function t() {}
                return (t.isValidIPv4Address = function(t) {
                    return r.test(t)
                }, t)
            }();
        e.exports = o
    }, {}],
    103: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t(t) {
                this.EXTENSION_REGEX = /(?:.([^.]+))?$/, this.timeoutMillis = 12e4, t > 0 && (this.timeoutMillis = t)
            }
            return (t.prototype.acquire = function(t, e) {
                var i = this.getFileExtension(t);
                if ("js" === i) this.acquireJavaScript(t, e);
                else {
                    if ("css" !== i) throw new Error("Unable to acquire non-JavaScript or CSS resource: " + t);
                    this.acquireCSS(t, e)
                }
            }, t.prototype.getFileExtension = function(t) {
                return this.EXTENSION_REGEX.exec(t)[1]
            }, t.prototype.acquireJavaScript = function(t, e) {
                var i = this,
                    n = document.createElement("script"),
                    r = null,
                    o = function(t) {
                        clearTimeout(r), n && (n.onload = n.onerror = null), "function" == typeof e && e(t)
                    };
                r = setTimeout(function() {
                    o(new Error("Timed out acquiring resource after " + i.timeoutMillis + "ms: " + t))
                }, this.timeoutMillis), n.src = t, n.onload = function() {
                    o()
                }, n.onerror = function(e) {
                    o(new Error("Error acquiring resource (probably doesn't exist): " + t))
                }, document.getElementsByTagName("head")[0].appendChild(n)
            }, t.prototype.acquireCSS = function(t, e) {
                var i = document.createElement("link");
                i.setAttribute("rel", "stylesheet"), i.setAttribute("type", "text/css"), i.setAttribute("href", t), document.getElementsByTagName("head")[0].appendChild(i), "function" == typeof e && e()
            }, t)
        }();
        e.exports = n
    }, {}],
    104: [function(t, e, i) {
        "use strict";
        var n = t(284),
            r = t(294),
            o = n.get("CookieStorage"),
            s = function() {
                function t(t) {
                    void 0 === t && (t = document), this.document = t
                }
                return (t.prototype.get = function(t) {
                    try {
                        if (r.isUndefined(this.document.cookie) || r.isNull(this.document.cookie)) return (o.warn("Cookie is unavailable."), null);
                        var e = r.map(this.document.cookie.split(";"), function(t) {
                                return t.split("=")
                            }),
                            i = r.find(e, function(e) {
                                return e[0].trim() === t
                            });
                        return r.isUndefined(i) || r.isNull(i) ? (o.warn("Cannot find key " + t + " in storage"), null) : (i.shift(), decodeURIComponent(i.join("=")))
                    } catch (e) {
                        return (o.warn("Failed to retrieve key " + t + " from storage", e), null)
                    }
                }, t)
            }();
        e.exports = s
    }, {
        284: 284,
        294: 294
    }],
    105: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(107),
            o = function(t) {
                function e(e) {
                    void 0 === e && (e = window);
                    var i = this,
                        n = e.localStorage;
                    return ("undefined" == typeof n && (n = null), i = t.call(this, n) || this)
                }
                return (n(e, t), e)
            }(r);
        e.exports = o
    }, {
        107: 107
    }],
    106: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(107),
            o = function(t) {
                function e(e) {
                    void 0 === e && (e = window);
                    var i = this,
                        n = e.sessionStorage;
                    return ("undefined" == typeof n && (n = null), i = t.call(this, n) || this)
                }
                return (n(e, t), e)
            }(r);
        e.exports = o
    }, {
        107: 107
    }],
    107: [function(t, e, i) {
        "use strict";
        var n = t(284),
            r = n.get("WebStorage"),
            o = function() {
                function t(t) {
                    void 0 === t && (t = null), this.storage = t
                }
                return (t.prototype.set = function(t, e) {
                    if (null === this.storage) return void r.warn("Storage is unavailable.");
                    try {
                        this.storage.setItem(t, e)
                    } catch (e) {
                        r.warn("Failed to save key " + t + " to storage", e)
                    }
                }, t.prototype.get = function(t) {
                    if (null === this.storage) return (r.warn("Storage is unavailable."), null);
                    try {
                        return this.storage.getItem(t)
                    } catch (e) {
                        return (r.warn("Failed to retrieve key " + t + " from storage", e), null)
                    }
                }, t.prototype.remove = function(t) {
                    if (null === this.storage) return void r.warn("Storage is unavailable.");
                    try {
                        this.storage.removeItem(t)
                    } catch (e) {
                        r.warn("Failed to remove key " + t + " from storage", e)
                    }
                }, t.prototype.removeAll = function() {
                    if (null === this.storage) return void r.warn("Storage is unavailable.");
                    try {
                        this.storage.clear()
                    } catch (t) {
                        r.warn("Failed to clear storage", t)
                    }
                }, t)
            }();
        e.exports = o
    }, {
        284: 284
    }],
    108: [function(t, e, i) {
        "use strict";
        var n = t(281),
            r = n.of("ThrottledEventListener"),
            o = function() {
                function t() {
                    var t = this;
                    this.callback = null, this.listenerType = null, this.eventTarget = null, this.pollingInterval = null, this.executeThrottledEvent = function() {
                        t.eventTarget.removeEventListener(t.listenerType, t.executeThrottledEvent), setTimeout(function() {
                            t.callback(), t.eventTarget.addEventListener(t.listenerType, t.executeThrottledEvent)
                        }, t.pollingInterval)
                    }
                }
                return (t.prototype.attachThrottledListener = function(t, e, i, n) {
                    r(t, "eventTarget").exists(), r(e, "listenerType").exists(), this.eventTarget = t, this.listenerType = e, this.pollingInterval = i, this.callback = n, t.addEventListener(e, this.executeThrottledEvent)
                }, t.prototype.removeThrottledListener = function() {
                    null !== this.eventTarget && (this.eventTarget.removeEventListener(this.listenerType, this.executeThrottledEvent), this.eventTarget = null, this.listenerType = null, this.pollingInterval = null, this.callback = null)
                }, t)
            }();
        e.exports = o
    }, {
        281: 281
    }],
    109: [function(t, e, i) {
        "use strict";
        var n = !1;
        try {
            var r = new URL("b", "http://a");
            r.pathname = "c%20d", n = "http://a/c%20d" === r.href
        } catch (t) {}
        var o;
        if (n) o = URL;
        else {
            var s = Object.create(null);
            s.ftp = 21, s.file = 0, s.gopher = 70, s.http = 80, s.https = 443, s.ws = 80, s.wss = 443;
            var a = Object.create(null);
            a["%2e"] = ".", a[".%2e"] = "..", a["%2e."] = "..", a["%2e%2e"] = "..";
            var l = function(t) {
                    return void 0 !== s[t]
                },
                c = function() {
                    m.call(this), this._isInvalid = !0
                },
                u = function(t) {
                    return ("" == t && c.call(this), t.toLowerCase())
                },
                p = function(t) {
                    var e = t.charCodeAt(0);
                    return e > 32 && e < 127 && [34, 35, 60, 62, 63, 96].indexOf(e) == -1 ? t : encodeURIComponent(t)
                },
                h = function(t) {
                    var e = t.charCodeAt(0);
                    return e > 32 && e < 127 && [34, 35, 60, 62, 96].indexOf(e) == -1 ? t : encodeURIComponent(t)
                },
                f = void 0,
                d = /[a-zA-Z]/,
                y = /[a-zA-Z0-9+-.]/,
                g = function(t, e, i) {
                    function n(t) {
                        E.push(t)
                    }
                    var r = e || "scheme start",
                        o = 0,
                        g = "",
                        m = !1,
                        v = !1,
                        E = [];
                    t: for (;
                        (t[o - 1] != f || 0 == o) && !this._isInvalid;) {
                        var _ = t[o];
                        switch (r) {
                            case "scheme start":
                                if (!_ || !d.test(_)) {
                                    if (e) {
                                        n("Invalid scheme.");
                                        break t
                                    }
                                    g = "", r = "no scheme";
                                    continue
                                }
                                g += _.toLowerCase(), r = "scheme";
                                break;
                            case "scheme":
                                if (_ && y.test(_)) g += _.toLowerCase();
                                else {
                                    if (":" != _) {
                                        if (e) {
                                            if (f == _) break t;
                                            n("Code point not allowed in scheme: " + _);
                                            break t
                                        }
                                        g = "", o = 0, r = "no scheme";
                                        continue
                                    }
                                    if (this._scheme = g, g = "", e) break t;
                                    l(this._scheme) && (this._isRelative = !0), r = "file" == this._scheme ? "relative" : this._isRelative && i && i._scheme == this._scheme ? "relative or authority" : this._isRelative ? "authority first slash" : "scheme data"
                                }
                                break;
                            case "scheme data":
                                "?" == _ ? (this._query = "?", r = "query") : "#" == _ ? (this._fragment = "#", r = "fragment") : f != _ && "t" != _ && "n" != _ && "r" != _ && (this._schemeData += p(_));
                                break;
                            case "no scheme":
                                if (i && l(i._scheme)) {
                                    r = "relative";
                                    continue
                                }
                                n("Missing scheme."), c.call(this);
                                break;
                            case "relative or authority":
                                if ("/" != _ || "/" != t[o + 1]) {
                                    n("Expected /, got: " + _), r = "relative";
                                    continue
                                }
                                r = "authority ignore slashes";
                                break;
                            case "relative":
                                if (this._isRelative = !0, "file" != this._scheme && (this._scheme = i._scheme), f == _) {
                                    this._host = i._host, this._port = i._port, this._path = i._path.slice(), this._query = i._query, this._username = i._username, this._password = i._password;
                                    break t
                                }
                                if ("/" == _ || "\" == _) "\" == _ && n("\ is an invalid code point."), r = "relative slash";
                                else if ("?" == _) this._host = i._host, this._port = i._port, this._path = i._path.slice(), this._query = "?", this._username = i._username, this._password = i._password, r = "query";
                                else {
                                    if ("#" != _) {
                                        var S = t[o + 1],
                                            T = t[o + 2];
                                        ("file" != this._scheme || !d.test(_) || ":" != S && "|" != S || f != T && "/" != T && "\" != T && "?" != T && "#" != T) && (this._host = i._host, this._port = i._port, this._username = i._username, this._password = i._password, this._path = i._path.slice(), this._path.pop()), r = "relative path";
                                        continue
                                    }
                                    this._host = i._host, this._port = i._port, this._path = i._path.slice(), this._query = i._query, this._fragment = "#", this._username = i._username, this._password = i._password, r = "fragment"
                                }
                                break;
                            case "relative slash":
                                if ("/" != _ && "\" != _) {
                                    "file" != this._scheme && (this._host = i._host, this._port = i._port, this._username = i._username, this._password = i._password), r = "relative path";
                                    continue
                                }
                                "\" == _ && n("\ is an invalid code point."), r = "file" == this._scheme ? "file host" : "authority ignore slashes";
                                break;
                            case "authority first slash":
                                if ("/" != _) {
                                    n("Expected '/', got: " + _), r = "authority ignore slashes";
                                    continue
                                }
                                r = "authority second slash";
                                break;
                            case "authority second slash":
                                if (r = "authority ignore slashes", "/" != _) {
                                    n("Expected '/', got: " + _);
                                    continue
                                }
                                break;
                            case "authority ignore slashes":
                                if ("/" != _ && "\" != _) {
                                    r = "authority";
                                    continue
                                }
                                n("Expected authority, got: " + _);
                                break;
                            case "authority":
                                if ("@" == _) {
                                    m && (n("@ already seen."), g += "%40"), m = !0;
                                    for (var b = 0; b < g.length; b++) {
                                        var w = g[b];
                                        if ("t" != w && "n" != w && "r" != w)
                                            if (":" != w || null !== this._password) {
                                                var I = p(w);
                                                null !== this._password ? this._password += I : this._username += I
                                            } else this._password = "";
                                        else n("Invalid whitespace in authority.")
                                    }
                                    g = ""
                                } else {
                                    if (f == _ || "/" == _ || "\" == _ || "?" == _ || "#" == _) {
                                        o -= g.length, g = "", r = "host";
                                        continue
                                    }
                                    g += _
                                }
                                break;
                            case "file host":
                                if (f == _ || "/" == _ || "\" == _ || "?" == _ || "#" == _) {
                                    2 != g.length || !d.test(g[0]) || ":" != g[1] && "|" != g[1] ? 0 == g.length ? r = "relative path start" : (this._host = u.call(this, g), g = "", r = "relative path start") : r = "relative path";
                                    continue
                                }
                                "t" == _ || "n" == _ || "r" == _ ? n("Invalid whitespace in file host.") : g += _;
                                break;
                            case "host":
                            case "hostname":
                                if (":" != _ || v) {
                                    if (f == _ || "/" == _ || "\" == _ || "?" == _ || "#" == _) {
                                        if (this._host = u.call(this, g), g = "", r = "relative path start", e) break t;
                                        continue
                                    }
                                    "t" != _ && "n" != _ && "r" != _ ? ("[" == _ ? v = !0 : "]" == _ && (v = !1), g += _) : n("Invalid code point in host/hostname: " + _)
                                } else if (this._host = u.call(this, g), g = "", r = "port", "hostname" == e) break t;
                                break;
                            case "port":
                                if (/[0-9]/.test(_)) g += _;
                                else {
                                    if (f == _ || "/" == _ || "\" == _ || "?" == _ || "#" == _ || e) {
                                        if ("" != g) {
                                            var R = parseInt(g, 10);
                                            R != s[this._scheme] && (this._port = R + ""), g = ""
                                        }
                                        if (e) break t;
                                        r = "relative path start";
                                        continue
                                    }
                                    "t" == _ || "n" == _ || "r" == _ ? n("Invalid code point in port: " + _) : c.call(this)
                                }
                                break;
                            case "relative path start":
                                if ("\" == _ && n("'\' not allowed in path."), r = "relative path", "/" != _ && "\" != _) continue;
                                break;
                            case "relative path":
                                if (f != _ && "/" != _ && "\" != _ && (e || "?" != _ && "#" != _)) "t" != _ && "n" != _ && "r" != _ && (g += p(_));
                                else {
                                    "\" == _ && n("\ not allowed in relative path.");
                                    var C;
                                    (C = a[g.toLowerCase()]) && (g = C), ".." == g ? (this._path.pop(), "/" != _ && "\" != _ && this._path.push("")) : "." == g && "/" != _ && "\" != _ ? this._path.push("") : "." != g && ("file" == this._scheme && 0 == this._path.length && 2 == g.length && d.test(g[0]) && "|" == g[1] && (g = g[0] + ":"), this._path.push(g)), g = "", "?" == _ ? (this._query = "?", r = "query") : "#" == _ && (this._fragment = "#", r = "fragment")
                                }
                                break;
                            case "query":
                                e || "#" != _ ? f != _ && "t" != _ && "n" != _ && "r" != _ && (this._query += h(_)) : (this._fragment = "#", r = "fragment");
                                break;
                            case "fragment":
                                f != _ && "t" != _ && "n" != _ && "r" != _ && (this._fragment += _)
                        }
                        o++
                    }
                },
                m = function() {
                    this._scheme = "", this._schemeData = "", this._username = "", this._password = null, this._host = "", this._port = "", this._path = [], this._query = "", this._fragment = "", this._isInvalid = !1, this._isRelative = !1
                };
            if (o = function(t, e) {
                    void 0 === e || e instanceof o || (e = new o(String(e))), this._url = t, m.call(this);
                    var i = t.replace(/^[ trnf]+|[ trnf]+$/g, "");
                    g.call(this, i, null, e)
                }, o.prototype = {
                    toString: function() {
                        return this.href
                    },
                    get href() {
                        if (this._isInvalid) return this._url;
                        var t = "";
                        return ("" == this._username && null == this._password || (t = this._username + (null != this._password ? ":" + this._password : "") + "@"), this.protocol + (this._isRelative ? "//" + t + this.host : "") + this.pathname + this._query + this._fragment)
                    },
                    set href(t) {
                        m.call(this), g.call(this, t)
                    },
                    get protocol() {
                        return this._scheme + ":"
                    },
                    set protocol(t) {
                        this._isInvalid || g.call(this, t + ":", "scheme start")
                    },
                    get host() {
                        return this._isInvalid ? "" : this._port ? this._host + ":" + this._port : this._host
                    },
                    set host(t) {
                        !this._isInvalid && this._isRelative && g.call(this, t, "host")
                    },
                    get hostname() {
                        return this._host
                    },
                    set hostname(t) {
                        !this._isInvalid && this._isRelative && g.call(this, t, "hostname")
                    },
                    get port() {
                        return this._port
                    },
                    set port(t) {
                        !this._isInvalid && this._isRelative && g.call(this, t, "port")
                    },
                    get pathname() {
                        return this._isInvalid ? "" : this._isRelative ? "/" + this._path.join("/") : this._schemeData
                    },
                    set pathname(t) {
                        !this._isInvalid && this._isRelative && (this._path = [], g.call(this, t, "relative path start"))
                    },
                    get search() {
                        return this._isInvalid || !this._query || "?" == this._query ? "" : this._query
                    },
                    set search(t) {
                        !this._isInvalid && this._isRelative && (this._query = "?", "?" == t[0] && (t = t.slice(1)), g.call(this, t, "query"))
                    },
                    get hash() {
                        return this._isInvalid || !this._fragment || "#" == this._fragment ? "" : this._fragment
                    },
                    set hash(t) {
                        this._isInvalid || (this._fragment = "#", "#" == t[0] && (t = t.slice(1)), g.call(this, t, "fragment"))
                    },
                    get origin() {
                        var t;
                        if (this._isInvalid || !this._scheme) return "";
                        switch (this._scheme) {
                            case "data":
                            case "file":
                            case "javascript":
                            case "mailto":
                                return "null"
                        }
                        return (t = this.host, t ? this._scheme + "://" + t : "")
                    }
                }, "undefined" != typeof URL) {
                var v = URL;
                v && (o.createObjectURL = function(t) {
                    return v.createObjectURL.apply(v, arguments)
                }, o.revokeObjectURL = function(t) {
                    v.revokeObjectURL(t)
                })
            }
        }
        e.exports = o
    }, {}],
    110: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t() {}
            return (t.prototype.decode = function(t) {
                for (var e = new Uint8Array(t.buffer, t.byteOffset, t.byteLength), i = [], n = 0; n < e.length;) {
                    var r = 0,
                        o = 0,
                        s = e[n++];
                    if (240 === (248 & s)) r = 3, o = 7 & s;
                    else if (224 === (240 & s)) r = 2, o = 15 & s;
                    else if (192 === (224 & s)) r = 1, o = 31 & s;
                    else {
                        if (0 !== (128 & s)) throw new TypeError("Failed to decode value: " + s.toString(16));
                        r = 0, o = 127 & s
                    }
                    for (; r > 0 && n < e.length;) o <<= 6, o |= 63 & e[n++], r--;
                    if (r > 0) throw new TypeError("Failed to decode value");
                    if (o >= 65536) {
                        o -= 65536;
                        var a = 56320 | 1023 & o,
                            l = 55296 | o >> 10 & 1023;
                        i.push(String.fromCharCode(l, a))
                    } else i.push(String.fromCharCode(o))
                }
                return i.join("")
            }, t)
        }();
        e.exports = n
    }, {}],
    111: [function(t, e, i) {
        "use strict";
        var n, r = t(110);
        n = "undefined" != typeof TextDecoder ? function() {
            return new TextDecoder("utf-8")
        } : r, e.exports = n
    }, {
        110: 110
    }],
    112: [function(t, e, i) {
        "use strict";
        var n = t(294),
            r = t(281),
            o = r.of("Version"),
            s = "unknown",
            a = function() {
                function t(t, e) {
                    o(t, "segments").exists(), o(t.length > 0, "length > 0").is["true"](), o(e, "str").exists(), this.segments = t, this.str = e
                }
                return (t.fromNumber = function(e) {
                    return (o(e, "version").exists(), new t([e], e.toString()))
                }, t.fromString = function(e) {
                    return (o(e, "version").exists(), new t(t.split(e), e))
                }, t.createUnknownVersion = function() {
                    return t.fromString(s)
                }, t.prototype.isUnknownVersion = function() {
                    return this.str === s
                }, t.prototype.toString = function() {
                    return this.str
                }, t.prototype.equals = function(t) {
                    return 0 === this.compareTo(t)
                }, t.prototype.compareTo = function(t) {
                    if (this === t) return 0;
                    if (n.isUndefined(t) || n.isNull(t)) return 1;
                    if (this.str === s && t.str === s) return 0;
                    for (var e = Math.min(this.segments.length, t.segments.length), i = 0; i < e; i++) {
                        if (this.segments[i] < t.segments[i]) return -1;
                        if (this.segments[i] > t.segments[i]) return 1
                    }
                    return this.isGreaterThanZero(t.segments.slice(this.segments.length)) ? -1 : this.isGreaterThanZero(this.segments.slice(t.segments.length)) ? 1 : 0
                }, t.prototype.isGreaterThanZero = function(t) {
                    for (var e = 0; e < t.length; e++)
                        if (n.isString(t[e]) && t[e].length > 0 || n.isNumber(t[e]) && t[e] > 0) return !0
                }, t.split = function(t) {
                    return n.map(t.toLowerCase().match(/d+|[a-z]+/g), function(t) {
                        return /^d+$/.test(t) ? parseInt(t) : t
                    })
                }, t)
            }();
        e.exports = a
    }, {
        281: 281,
        294: 294
    }],
    113: [function(t, e, i) {
        "use strict";
        var n = t(96),
            r = t(104),
            o = t(98),
            s = t(97),
            a = t(99),
            l = t(100),
            c = t(101),
            u = t(102),
            p = t(105),
            h = t(103),
            f = t(106),
            d = t(108),
            y = t(109),
            g = t(111),
            m = t(112),
            v = {
                AmazonUrlCreator: n,
                CookieStorage: r,
                Display: o,
                DOMUtils: s,
                EnumUtils: a,
                EphemeralJSLogger: l,
                HTMLElementUtils: c,
                IPAddress: u,
                LocalStorage: p,
                ResourceAcquirer: h,
                SessionStorage: f,
                ThrottledEventListener: d,
                URL: y,
                Utf8TextDecoder: g,
                Version: m
            };
        e.exports = v
    }, {
        100: 100,
        101: 101,
        102: 102,
        103: 103,
        104: 104,
        105: 105,
        106: 106,
        108: 108,
        109: 109,
        111: 111,
        112: 112,
        96: 96,
        97: 97,
        98: 98,
        99: 99
    }],
    114: [function(t, e, i) {
        "use strict";
        var n = t(163),
            r = n.EventEmitter,
            o = "change",
            s = function() {
                function t(t) {
                    void 0 === t && (t = new r), this.value = null, this.eventEmitter = t
                }
                return (t.prototype.getValue = function() {
                    return this.value
                }, t.prototype.setValue = function(t) {
                    return (this.value = t, this)
                }, t.prototype.commit = function() {
                    this.eventEmitter.emitAsync(o)
                }, t.prototype.onChange = function(t) {
                    this.eventEmitter.on(o, t)
                }, t.prototype.offChange = function(t) {
                    this.eventEmitter.off(o, t)
                }, t.prototype.onceChange = function(t) {
                    this.eventEmitter.once(o, t)
                }, t)
            }();
        e.exports = s
    }, {
        163: 163
    }],
    115: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t(t, e, i) {
                var n = this;
                this.defaultStore = t, this.backingStore = e, this.mergeFunction = i, this.defaultStore.onChange(function() {
                    n.commit()
                })
            }
            return (t.prototype.getValue = function() {
                return this.mergeFunction(this.defaultStore.getValue(), this.backingStore.getValue())
            }, t.prototype.setValue = function(t) {
                return (this.backingStore.setValue(t), this)
            }, t.prototype.commit = function() {
                this.backingStore.commit()
            }, t.prototype.onChange = function(t) {
                this.backingStore.onChange(t)
            }, t.prototype.offChange = function(t) {
                this.backingStore.offChange(t)
            }, t.prototype.onceChange = function(t) {
                this.backingStore.onceChange(t)
            }, t)
        }();
        e.exports = n
    }, {}],
    116: [function(t, e, i) {
        "use strict";
        var n = t(114),
            r = t(115),
            o = {
                BasicStore: n,
                MergingStore: r
            };
        e.exports = o
    }, {
        114: 114,
        115: 115
    }],
    117: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t(t) {
                this.applicationName = t.an, this.applicationVersion = t.av, this.operatingSystem = t.os, this.operatingSystemVersion = t.ov, this.productLine = t.di.pr, this.model = t.di.md, this.modelVersion = t.di.v, this.manufacturer = t.di.mf, this.deviceSerialNumber = t.di.dsn, this.deviceTypeId = t.di.dti, this.serviceProvider = t.di.ca, this.connectionType = t.di.ct, this.displayHeight = t.dm.h, this.displayWidth = t.dm.w
            }
            return (t.prototype.getSimulatedUserAgent = function() {
                return this.applicationName + "/" + this.applicationVersion + " (" + this.operatingSystem + "/" + this.operatingSystemVersion + "/" + this.model + ")"
            }, t)
        }();
        e.exports = n
    }, {}],
    118: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t(t, e, i, n) {
                this.browser = t, this.operatingSystem = e, this.device = i, this.displayInformation = n
            }
            return (t.prototype.equals = function(t) {
                return this.browser.equals(t.browser) && this.operatingSystem.equals(t.operatingSystem) && this.device.equals(t.device) && this.displayInformation.equals(t.displayInformation)
            }, t)
        }();
        e.exports = n
    }, {}],
    119: [function(t, e, i) {
        "use strict";
        var n = t(124),
            r = t(125),
            o = t(93),
            s = t(113),
            a = s.CookieStorage,
            l = function() {
                function t() {}
                return (t.getDeviceInformation = function(t, e) {
                    void 0 === t && (t = window.navigator), void 0 === e && (e = new a);
                    var i = e.get("amzn-app-ctxt");
                    return o.isNullOrUndefined(i) ? r.fromBrowser(t) : n.fromCookie(i)
                }, t)
            }();
        e.exports = l
    }, {
        113: 113,
        124: 124,
        125: 125,
        93: 93
    }],
    120: [function(t, e, i) {
        "use strict";
        var n = t(294),
            r = t(122),
            o = function() {
                function t() {}
                return (t.fromMashCookie = function(e) {
                    var i = new t;
                    return (i.applicationName = e.applicationName, i.applicationVersion = e.applicationVersion, i.productLine = e.productLine, i.model = r.fromMashCookie(e), i.manufacturer = e.manufacturer, i.serialNumber = e.deviceSerialNumber, i.deviceTypeId = e.deviceTypeId, i.serviceProvider = e.serviceProvider, i.connectionType = e.connectionType, i)
                }, t.fromUserAgent = function(e) {
                    var i = new t;
                    return (i.model = r.fromUserAgent(e), i)
                }, t.prototype.equals = function(t) {
                    return n.isEqual(this, t)
                }, t.UNKNOWN = new t, t)
            }();
        e.exports = o
    }, {
        122: 122,
        294: 294
    }],
    121: [function(t, e, i) {
        "use strict";
        var n = t(294),
            r = function() {
                function t(t, e) {
                    this.height = t, this.width = e
                }
                return (t.fromMashCookie = function(e) {
                    return new t(e.displayHeight, e.displayWidth)
                }, t.fromBrowser = function(e) {
                    return (void 0 === e && (e = window.screen), new t(e.height, e.width))
                }, t.prototype.equals = function(t) {
                    return n.isEqual(this, t)
                }, t.UNKNOWN = new t(null, null), t)
            }();
        e.exports = r
    }, {
        294: 294
    }],
    122: [function(t, e, i) {
        "use strict";
        var n = t(93),
            r = t(281),
            o = t(113),
            s = o.Version,
            a = t(123),
            l = r.of("Model"),
            c = function() {
                function t(t, e, i) {
                    this.type = l(t, "type").exists(), this.version = n.isNullOrUndefined(e) ? null : e, this.name = n.isNullOrUndefined(i) ? a[t] : i
                }
                return (t.fromMashCookie = function(e) {
                    var i = n.isNullOrUndefined(e.modelVersion) ? null : s.fromString(e.modelVersion);
                    return n.isNullOrUndefined(a[e.model]) ? new t(a.Unknown, i, e.model) : new t(a[e.model], i)
                }, t.fromUserAgent = function(e) {
                    for (var i = 0; i < t.REGEXES.length; i++) {
                        var n = t.REGEXES[i].regex.exec(e);
                        if (n) {
                            var r = n[1] ? s.fromString(n[1]) : null;
                            return new t(t.REGEXES[i].type, r)
                        }
                    }
                    return new t(a.Unknown)
                }, t.prototype.getType = function() {
                    return this.type
                }, t.prototype.getVersion = function() {
                    return this.version
                }, t.prototype.getModelName = function() {
                    return this.name
                }, t.prototype.toString = function() {
                    var t = this.name;
                    return (null !== this.version && (t += " " + this.version), t)
                }, t.prototype.equals = function(t) {
                    return (this.type === t.type || this.name === t.name) && (null === this.version ? null === t.version : this.version.equals(t.version))
                }, t.UNKNOWN = new t(a.Unknown), t.REGEXES = [{
                    regex: /iPad/,
                    type: a.iPad
                }, {
                    regex: /iPhone/,
                    type: a.iPhone
                }, {
                    regex: /iPod/,
                    type: a.iPod
                }], t)
            }();
        e.exports = c
    }, {
        113: 113,
        123: 123,
        281: 281,
        93: 93
    }],
    123: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t[t.Unknown = 0] = "Unknown", t[t.iPad = 1] = "iPad", t[t.iPhone = 2] = "iPhone", t[t.iPod = 3] = "iPod"
        }(n || (n = {})), e.exports = n
    }, {}],
    124: [function(t, e, i) {
        "use strict";
        var n = t(272),
            r = n.Browser,
            o = n.OperatingSystem,
            s = t(120),
            a = t(118),
            l = t(121),
            c = t(117),
            u = t(284),
            p = u.get("MashDeviceInformationFactory"),
            h = function() {
                function t() {}
                return (t.fromCookie = function(t, e, i, n, u) {
                    void 0 === e && (e = r), void 0 === i && (i = o), void 0 === n && (n = s), void 0 === u && (u = l);
                    try {
                        var h = new c(JSON.parse(t.slice(t.indexOf("{")))),
                            f = e.fromUserAgent(h.getSimulatedUserAgent()),
                            d = i.fromUserAgent(h.getSimulatedUserAgent()),
                            y = n.fromMashCookie(h),
                            g = u.fromMashCookie(h);
                        return new a(f, d, y, g)
                    } catch (e) {
                        return (p.warn("Error parsing the MASH cookie. Returning unknown browser and operating system. Cookie format: " + t, e), new a(r.UNKNOWN, o.UNKNOWN, s.UNKNOWN, l.UNKNOWN))
                    }
                }, t)
            }();
        e.exports = h
    }, {
        117: 117,
        118: 118,
        120: 120,
        121: 121,
        272: 272,
        284: 284
    }],
    125: [function(t, e, i) {
        "use strict";
        var n = t(272),
            r = n.Browser,
            o = n.OperatingSystem,
            s = t(120),
            a = t(118),
            l = t(121),
            c = function() {
                function t() {}
                return (t.fromBrowser = function(t, e, i, n, c, u) {
                    void 0 === t && (t = window.navigator), void 0 === e && (e = window.screen), void 0 === i && (i = r), void 0 === n && (n = o), void 0 === c && (c = s), void 0 === u && (u = l);
                    var p = i.fromUserAgent(t.userAgent),
                        h = n.fromUserAgent(t.userAgent),
                        f = c.fromUserAgent(t.userAgent),
                        d = u.fromBrowser(e);
                    return new a(p, h, f, d)
                }, t)
            }();
        e.exports = c
    }, {
        118: 118,
        120: 120,
        121: 121,
        272: 272
    }],
    126: [function(t, e, i) {
        "use strict";
        var n = t(119),
            r = t(93),
            o = function() {
                function t() {}
                return (t.getInstance = function() {
                    return (r.isNullOrUndefined(this.deviceInformation) && (this.deviceInformation = n.getDeviceInformation()), this.deviceInformation)
                }, t)
            }();
        e.exports = o
    }, {
        119: 119,
        93: 93
    }],
    127: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t(t) {
                this.timestampMs = Date.now(), this.payload = t
            }
            return t
        }();
        e.exports = n
    }, {}],
    128: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(127),
            o = t(147),
            s = t(146),
            a = function(t) {
                function e(e) {
                    var i = t.call(this, e) || this;
                    return (i.type = o.BufferLengthChangedEvent, i.priority = s.RealTime, i.version = "1.0", i)
                }
                return (n(e, t), e)
            }(r);
        e.exports = a
    }, {
        127: 127,
        146: 146,
        147: 147
    }],
    129: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(127),
            o = t(147),
            s = t(146),
            a = function(t) {
                function e(e) {
                    var i = t.call(this, e) || this;
                    return (i.type = o.BufferingStartedEvent, i.priority = s.RealTime, i.version = "1.0", i)
                }
                return (n(e, t), e)
            }(r);
        e.exports = a
    }, {
        127: 127,
        146: 146,
        147: 147
    }],
    130: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(127),
            o = t(147),
            s = t(146),
            a = function(t) {
                function e(e) {
                    var i = t.call(this, e) || this;
                    return (i.type = o.CDNSwitchEvent, i.priority = s.RealTime, i.version = "1.0", i)
                }
                return (n(e, t), e)
            }(r);
        e.exports = a
    }, {
        127: 127,
        146: 146,
        147: 147
    }],
    131: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(127),
            o = t(147),
            s = t(146),
            a = function(t) {
                function e(e) {
                    var i = t.call(this, e) || this;
                    return (i.type = o.ClientVersionReportedEvent, i.priority = s.RealTime, i.version = "1.0", i)
                }
                return (n(e, t), e)
            }(r);
        e.exports = a
    }, {
        127: 127,
        146: 146,
        147: 147
    }],
    132: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(127),
            o = t(147),
            s = t(146),
            a = function(t) {
                function e(e) {
                    var i = t.call(this, e) || this;
                    return (i.type = o.DecodeMetricsEmittedEvent, i.priority = s.RealTime, i.version = "1.0", i)
                }
                return (n(e, t), e)
            }(r);
        e.exports = a
    }, {
        127: 127,
        146: 146,
        147: 147
    }],
    133: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(127),
            o = t(147),
            s = t(146),
            a = function(t) {
                function e(e) {
                    var i = t.call(this, e) || this;
                    return (i.type = o.DiagnosticsSessionInformationEvent, i.priority = s.RealTime, i.version = "1.0", i)
                }
                return (n(e, t), e)
            }(r);
        e.exports = a
    }, {
        127: 127,
        146: 146,
        147: 147
    }],
    134: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(127),
            o = t(147),
            s = t(146),
            a = function(t) {
                function e(e, i) {
                    var n = t.call(this, i) || this;
                    return (n.type = o.FragmentDownloadFailedEvent, n.priority = s.RealTime, n.version = "1.0", n.fragmentType = e, n.isSuccessful = !1, n)
                }
                return (n(e, t), e)
            }(r);
        e.exports = a
    }, {
        127: 127,
        146: 146,
        147: 147
    }],
    135: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(127),
            o = t(147),
            s = t(146),
            a = function(t) {
                function e(e, i) {
                    var n = t.call(this, i) || this;
                    return (n.type = o.FragmentDownloadedEvent, n.priority = s.RealTime, n.version = "1.0", n.fragmentType = e, n.bandwidthBps = i.sizeBytes / i.downloadTransferTimeMs * 1e3 * 8, n.isSuccessful = !0, n)
                }
                return (n(e, t), e)
            }(r);
        e.exports = a
    }, {
        127: 127,
        146: 146,
        147: 147
    }],
    136: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(127),
            o = t(147),
            s = t(146),
            a = t(149),
            l = function(t) {
                function e(e, i) {
                    void 0 === i && (i = a.INFO);
                    var n = t.call(this, e) || this;
                    return (n.type = o.LogEvent, n.version = "1.0", n.priority = s.RealTime, n.logLevel = i, n)
                }
                return (n(e, t), e)
            }(r);
        e.exports = l
    }, {
        127: 127,
        146: 146,
        147: 147,
        149: 149
    }],
    137: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(127),
            o = t(147),
            s = t(146),
            a = function(t) {
                function e(e) {
                    var i = t.call(this, e) || this;
                    return (i.type = o.MaxBufferSelectedEvent, i.priority = s.RealTime, i.version = "1.0", i)
                }
                return (n(e, t), e)
            }(r);
        e.exports = a
    }, {
        127: 127,
        146: 146,
        147: 147
    }],
    138: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e;
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(127),
            o = t(147),
            s = t(146),
            a = function(t) {
                function e(e) {
                    var i = t.call(this, e) || this;
                    return (i.type = o.OriginSwitchEvent, i.priority = s.RealTime, i.version = "1.0", i)
                }
                return (n(e, t), e)
            }(r);
        e.exports = a
    }, {
        127: 127,
        146: 146,
        147: 147
    }],
    139: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(127),
            o = t(147),
            s = t(146),
            a = function(t) {
                function e(e) {
                    var i = t.call(this, e) || this;
                    return (i.type = o.PositionChangedEvent, i.priority = s.RealTime, i.version = "1.0", i)
                }
                return (n(e, t), e)
            }(r);
        e.exports = a
    }, {
        127: 127,
        146: 146,
        147: 147
    }],
    140: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(127),
            o = t(147),
            s = t(146),
            a = function(t) {
                function e(e) {
                    var i = t.call(this, e) || this;
                    return (i.type = o.PrepareAsinEvent, i.priority = s.RealTime, i.version = "1.0", i)
                }
                return (n(e, t), e)
            }(r);
        e.exports = a
    }, {
        127: 127,
        146: 146,
        147: 147
    }],
    141: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(127),
            o = t(147),
            s = t(146),
            a = function(t) {
                function e(e, i, n, r) {
                    var a = t.call(this, r) || this;
                    return (a.type = o.QualityLevelChangedEvent, a.priority = s.RealTime, a.version = "1.0", a.fragmentType = e, a.bandwidths = i, a.streamId = n, a)
                }
                return (n(e, t), e)
            }(r);
        e.exports = a
    }, {
        127: 127,
        146: 146,
        147: 147
    }],
    142: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(127),
            o = t(147),
            s = t(146),
            a = function(t) {
                function e(e) {
                    var i = t.call(this, e) || this;
                    return (i.type = o.StateChangedEvent, i.priority = s.RealTime, i.version = "1.0", i)
                }
                return (n(e, t), e)
            }(r);
        e.exports = a
    }, {
        127: 127,
        146: 146,
        147: 147
    }],
    143: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(127),
            o = t(147),
            s = t(146),
            a = function(t) {
                function e(e) {
                    var i = t.call(this, e) || this;
                    return (i.type = o.VolumeChangedEvent, i.version = "1.0", i.priority = s.RealTime, i)
                }
                return (n(e, t), e)
            }(r);
        e.exports = a
    }, {
        127: 127,
        146: 146,
        147: 147
    }],
    144: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t[t.Expected = 0] = "Expected", t[t.Unexpected = 1] = "Unexpected"
        }(n || (n = {})), e.exports = n
    }, {}],
    145: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t() {}
            return t
        }();
        e.exports = n
    }, {}],
    146: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t[t.RealTime = 0] = "RealTime", t[t.Storage = 1] = "Storage"
        }(n || (n = {})), e.exports = n
    }, {}],
    147: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t[t.BufferLengthChangedEvent = 0] = "BufferLengthChangedEvent", t[t.BufferingStartedEvent = 1] = "BufferingStartedEvent", t[t.ClientVersionReportedEvent = 2] = "ClientVersionReportedEvent", t[t.CDNSwitchEvent = 3] = "CDNSwitchEvent", t[t.DecodeMetricsEmittedEvent = 4] = "DecodeMetricsEmittedEvent", t[t.DiagnosticsSessionInformationEvent = 5] = "DiagnosticsSessionInformationEvent", t[t.FragmentDownloadedEvent = 6] = "FragmentDownloadedEvent", t[t.FragmentDownloadFailedEvent = 7] = "FragmentDownloadFailedEvent", t[t.LogEvent = 8] = "LogEvent", t[t.MaxBufferSelectedEvent = 9] = "MaxBufferSelectedEvent", t[t.OriginSwitchEvent = 10] = "OriginSwitchEvent", t[t.PositionChangedEvent = 11] = "PositionChangedEvent", t[t.PrepareAsinEvent = 12] = "PrepareAsinEvent", t[t.QualityLevelChangedEvent = 13] = "QualityLevelChangedEvent", t[t.StateChangedEvent = 14] = "StateChangedEvent", t[t.VolumeChangedEvent = 15] = "VolumeChangedEvent"
        }(n || (n = {})), e.exports = n
    }, {}],
    148: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t[t.Audio = 0] = "Audio", t[t.Video = 1] = "Video"
        }(n || (n = {})), e.exports = n
    }, {}],
    149: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t[t.DEBUG = 0] = "DEBUG", t[t.INFO = 1] = "INFO", t[t.WARN = 2] = "WARN", t[t.ERROR = 3] = "ERROR"
        }(n || (n = {})), e.exports = n
    }, {}],
    150: [function(t, e, i) {
        "use strict";
        var n = t(136),
            r = t(149),
            o = t(146),
            s = t(147),
            a = t(144),
            l = t(148),
            c = t(145),
            u = t(129),
            p = t(128),
            h = t(130),
            f = t(131),
            d = t(132),
            y = t(133),
            g = t(135),
            m = t(134),
            v = t(137),
            E = t(138),
            _ = t(139),
            S = t(140),
            T = t(141),
            b = t(142),
            w = t(143),
            I = {
                BufferingStartedEvent: u,
                BufferingType: a,
                BufferLengthChangedEvent: p,
                CDNSwitchEvent: h,
                ClientVersionReportedEvent: f,
                DecodeMetricsEmittedEvent: d,
                DiagnosticsSessionData: c,
                DiagnosticsSessionInformationEvent: y,
                EventPriority: o,
                EventType: s,
                FragmentDownloadedEvent: g,
                FragmentDownloadFailedEvent: m,
                FragmentType: l,
                LogEvent: n,
                LogLevels: r,
                MaxBufferSelectedEvent: v,
                OriginSwitchEvent: E,
                PositionChangedEvent: _,
                PrepareAsinEvent: S,
                QualityLevelChangedEvent: T,
                StateChangedEvent: b,
                VolumeChangedEvent: w
            };
        e.exports = I
    }, {
        128: 128,
        129: 129,
        130: 130,
        131: 131,
        132: 132,
        133: 133,
        134: 134,
        135: 135,
        136: 136,
        137: 137,
        138: 138,
        139: 139,
        140: 140,
        141: 141,
        142: 142,
        143: 143,
        144: 144,
        145: 145,
        146: 146,
        147: 147,
        148: 148,
        149: 149
    }],
    151: [function(t, e, i) {
        "use strict";
        var n = t(231),
            r = n.DiagnosticsProtocol,
            o = t(157),
            s = t(156),
            a = function() {
                function t(t, e) {
                    void 0 === t && (t = o), void 0 === e && (e = s), this.postMessageHandlerType = t, this.httpMessageHandlerType = e
                }
                return (t.prototype.getHandler = function(t) {
                    var e = t.getValue().diagnosticsSessionConfiguration;
                    switch (e.protocol) {
                        case r.PostMessage:
                            return new this.postMessageHandlerType(t);
                        case r.Http:
                            return new this.httpMessageHandlerType(t);
                        default:
                            throw new Error("The selected diagnostics protocol is not implemented")
                    }
                }, t)
            }();
        e.exports = a
    }, {
        156: 156,
        157: 157,
        231: 231
    }],
    152: [function(t, e, i) {
        "use strict";
        var n = t(288),
            r = t(93),
            o = t(150),
            s = o.DiagnosticsSessionInformationEvent,
            a = t(153),
            l = t(151),
            c = t(155),
            u = function() {
                function t(t, e, i, r) {
                    void 0 === t && (t = new l), void 0 === e && (e = []), void 0 === i && (i = n.v4()), void 0 === r && (r = new c), this.handlerFactory = t, this.telemetrySessionId = i, this.reportQueue = e, this.isHandlerConnected = !1, this.sessionMap = r
                }
                return (t.prototype.initialize = function(t) {
                    var e = this;
                    this.reportHandler = this.handlerFactory.getHandler(t), this.reportHandler.on(a.Connect, function() {
                        e.isHandlerConnected = !0, e.fireQueuedEvents()
                    }), this.reportHandler.on(a.Disconnect, function() {
                        e.isHandlerConnected = !1
                    })
                }, t.prototype.open = function() {
                    r.exists(this.reportHandler) && this.reportHandler.open()
                }, t.prototype.report = function(t) {
                    t.telemetrySessionId = this.telemetrySessionId, this.sessionMap.setMap(t), this.isHandlerConnected ? this.reportHandler.report(t) : this.queueEvent(t)
                }, t.prototype.queueEvent = function(t) {
                    this.reportQueue.length > 500 && this.reportQueue.shift(), this.reportQueue.push(t)
                }, t.prototype.fireQueuedEvents = function() {
                    var t = this.sessionMap.getSessionData(this.telemetrySessionId),
                        e = new s(t);
                    for (this.report(e); 0 !== this.reportQueue.length;) this.report(this.reportQueue.shift())
                }, t)
            }();
        e.exports = u
    }, {
        150: 150,
        151: 151,
        153: 153,
        155: 155,
        288: 288,
        93: 93
    }],
    153: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t[t.Connect = 0] = "Connect", t[t.Disconnect = 1] = "Disconnect"
        }(n || (n = {})), e.exports = n
    }, {}],
    154: [function(t, e, i) {
        "use strict";
        var n = t(163),
            r = n.EventEmitter,
            o = function() {
                function t(t) {
                    void 0 === t && (t = new r), this.eventEmitter = t, this.errorCount = 0
                }
                return (t.prototype.on = function(t, e) {
                    this.eventEmitter.on(t, e)
                }, t.prototype.emit = function(t, e) {
                    this.eventEmitter.emit(t, e)
                }, t)
            }();
        e.exports = o
    }, {
        163: 163
    }],
    155: [function(t, e, i) {
        "use strict";
        var n = t(93),
            r = t(150),
            o = r.DiagnosticsSessionData,
            s = r.EventType,
            a = r.FragmentType,
            l = function() {
                function t() {
                    this.sessionDataMap = {}
                }
                return (t.prototype.setMap = function(t) {
                    n.isNullOrUndefined(this.sessionDataMap[t.telemetrySessionId]) && (this.sessionDataMap[t.telemetrySessionId] = new o);
                    var e = this.sessionDataMap[t.telemetrySessionId];
                    switch (e.lastUpdatedTimestamp = Date.now(), t.type) {
                        case s.PrepareAsinEvent:
                            var i = t.payload;
                            e.asin = i;
                            break;
                        case s.CDNSwitchEvent:
                            var r = t.payload;
                            e.cdn = r;
                            break;
                        case s.OriginSwitchEvent:
                            var l = t.payload;
                            e.origin = l;
                            break;
                        case s.ClientVersionReportedEvent:
                            var c = t.payload;
                            e.clientVersion = c;
                            break;
                        case s.StateChangedEvent:
                            var u = t.payload.nextState;
                            e.state = u;
                            break;
                        case s.QualityLevelChangedEvent:
                            t.fragmentType === a.Audio ? e.audioQualityLevel = t : t.fragmentType === a.Video && (e.videoQualityLevel = t)
                    }
                }, t.prototype.getSessionData = function(t) {
                    return this.sessionDataMap[t]
                }, t)
            }();
        e.exports = l
    }, {
        150: 150,
        93: 93
    }],
    156: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(178),
            o = r.HttpRequestBuilder,
            s = t(284),
            a = t(154),
            l = t(153),
            c = s.get("HttpMessageHandler"),
            u = function(t) {
                function e(e, i, n) {
                    void 0 === n && (n = o);
                    var r = t.call(this, i) || this;
                    r.configurationStore = e;
                    var s = r.configurationStore.getValue(),
                        a = s.diagnosticsSessionConfiguration.endpointURI;
                    return (r.requestBuilder = n.post(a), r)
                }
                return (n(e, t), e.prototype.open = function() {
                    this.emit(l.Connect)
                }, e.prototype.report = function(t) {
                    try {
                        if (this.errorCount <= e.MAX_RETRY_COUNT) {
                            var i = this.requestBuilder.body(JSON.stringify(t)).build();
                            i.send()
                        } else this.emit(l.Disconnect);
                        this.errorCount = 0
                    } catch (t) {
                        this.errorCount++, c.error("Error Sending Message " + t)
                    }
                }, e.MAX_RETRY_COUNT = 500, e)
            }(a);
        e.exports = u
    }, {
        153: 153,
        154: 154,
        178: 178,
        284: 284
    }],
    157: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(126),
            o = t(272),
            s = o.BrowserType,
            a = t(93),
            l = t(284),
            c = t(154),
            u = t(153),
            p = l.get("PostMessageHandler"),
            h = function(t) {
                function e(e, i, n, o) {
                    void 0 === i && (i = window), void 0 === o && (o = r.getInstance());
                    var s = t.call(this, n) || this;
                    s.configurationStore = e, s.windowRef = i, s.deviceInformationRef = o;
                    var l = s.configurationStore.getValue();
                    return (s.diagnosticsWindow = l.diagnosticsSessionConfiguration.window, a.exists(s.diagnosticsWindow) && !s.diagnosticsWindow.closed && s.emit(u.Connect), s)
                }
                return (n(e, t), e.prototype.open = function() {
                    var t = this;
                    if (a.isNullOrUndefined(this.diagnosticsWindow) || this.diagnosticsWindow.closed) {
                        this.errorCount = 0;
                        var e = this.configurationStore.getValue(),
                            i = e.diagnosticsSessionConfiguration,
                            n = this.deviceInformationRef.browser,
                            r = a.exists(n) && (n.getType() === s.Edge || n.getType() === s.IE);
                        this.diagnosticsWindow = r ? this.windowRef.open("/") : this.windowRef.open(i.endpointURI), e.diagnosticsSessionConfiguration.window = this.diagnosticsWindow, this.configurationStore.setValue(e), this.configurationStore.commit(), a.exists(this.diagnosticsWindow) ? (r && this.diagnosticsWindow.location.assign(i.endpointURI), setTimeout(function() {
                            t.emit(u.Connect)
                        }, 1e3)) : p.error("Diagnostics Error - The diagnostics window did not open correctly.")
                    } else this.emit(u.Connect)
                }, e.prototype.report = function(t) {
                    try {
                        var i = a.isNullOrUndefined(this.diagnosticsWindow) || this.diagnosticsWindow.closed;
                        !i && this.errorCount <= e.MAX_RETRY_COUNT ? this.diagnosticsWindow.postMessage(t, "*") : (this.emit(u.Disconnect), this.diagnosticsWindow = null), this.errorCount = 0
                    } catch (t) {
                        this.errorCount++, p.error("Error Posting Message " + t)
                    }
                }, e.MAX_RETRY_COUNT = 500, e)
            }(c);
        e.exports = h
    }, {
        126: 126,
        153: 153,
        154: 154,
        272: 272,
        284: 284,
        93: 93
    }],
    158: [function(t, e, i) {
        "use strict";
        var n = t(93),
            r = t(152),
            o = function() {
                function t() {}
                return (t.getInstance = function() {
                    return (n.isNullOrUndefined(this.diagnosticsReporter) && (this.diagnosticsReporter = new r), this.diagnosticsReporter)
                }, t)
            }();
        e.exports = o
    }, {
        152: 152,
        93: 93
    }],
    159: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t() {}
            return (t.newError = function(t, e, i) {
                var n = new Error(e);
                return (n.name = t, "undefined" != typeof i && null !== i && (n.cause = i), n)
            }, t.newAuthenticationError = function(e) {
                return t.newError(t.AUTHENTICATION_ERROR_NAME, e)
            }, t.newIllegalArgumentError = function(e) {
                return t.newError(t.ILLEGAL_ARGUMENT_ERROR_NAME, e)
            }, t.newIllegalStateError = function(e) {
                return t.newError(t.ILLEGAL_STATE_ERROR_NAME, e)
            }, t.getAllErrorNames = function(t) {
                for (var e = [t.name]; t.cause instanceof Error;) t = t.cause, e.push(t.name);
                return e
            }, t.AUTHENTICATION_ERROR_NAME = "AuthenticationError", t.ILLEGAL_ARGUMENT_ERROR_NAME = "IllegalArgumentError", t.ILLEGAL_STATE_ERROR_NAME = "IllegalStateError", t)
        }();
        e.exports = n
    }, {}],
    160: [function(t, e, i) {
        "use strict";
        var n = t(187),
            r = t(254),
            o = t(283),
            s = o.EventEmitter2,
            a = t(284),
            l = a.get("EventEmitter"),
            c = function() {
                function t(t, e, i) {
                    void 0 === e && (e = null), void 0 === i && (i = r.getInstance()), this.eventEmitter = null === e ? new s(t) : e, this.immediateExecutor = i
                }
                return (t.prototype.emit = function(e, i) {
                    try {
                        this.eventEmitter.emit(this.getEventString(e), i)
                    } catch (i) {
                        l.error("An error occurred in a listener for the '" + e + "' event: " + i.name + ": " + i.message, i), n.putMetric(t.UNHANDLED_EVENT_LISTENER_ERROR_METRIC)
                    }
                }, t.prototype.emitAsync = function(t, e) {
                    var i = this;
                    this.immediateExecutor.setImmediate(function() {
                        return i.emit(t, e)
                    })
                }, t.prototype.many = function(t, e, i) {
                    this.eventEmitter.many(this.getEventString(t), e, i)
                }, t.prototype.off = function(t, e) {
                    this.eventEmitter.off(this.getEventString(t), e)
                }, t.prototype.offAny = function(t) {
                    this.eventEmitter.offAny(t)
                }, t.prototype.on = function(t, e) {
                    this.eventEmitter.on(this.getEventString(t), e)
                }, t.prototype.onAny = function(t) {
                    this.eventEmitter.onAny(t)
                }, t.prototype.once = function(t, e) {
                    this.eventEmitter.once(this.getEventString(t), e)
                }, t.prototype.removeAllListeners = function(t) {
                    void 0 === t && (t = null), null === t ? this.eventEmitter.removeAllListeners() : this.eventEmitter.removeAllListeners(this.getEventString(t))
                }, t.prototype.setMaxListeners = function(t) {
                    this.eventEmitter.setMaxListeners(t)
                }, t.prototype.listeners = function(t) {
                    return this.eventEmitter.listeners(this.getEventString(t))
                }, t.prototype.listenersAny = function() {
                    return this.eventEmitter.listenersAny()
                }, t.prototype.getEventString = function(t) {
                    return "" + t
                }, t.UNHANDLED_EVENT_LISTENER_ERROR_METRIC = "UnhandledEventListenerError", t)
            }();
        e.exports = c
    }, {
        187: 187,
        254: 254,
        283: 283,
        284: 284
    }],
    161: [function(t, e, i) {
        "use strict";
        var n = t(187),
            r = t(281),
            o = t(284),
            s = t(294),
            a = r.of("MulticastCallback"),
            l = o.get("MulticastCallback"),
            c = function() {
                function t() {
                    this.callbacks = []
                }
                return (t.prototype.add = function(t) {
                    a(t, "callback").exists(), this.callbacks = s.union(this.callbacks, [t])
                }, t.prototype.remove = function(t) {
                    a(t, "callback").exists(), this.callbacks = s.without(this.callbacks, t)
                }, t.prototype.removeAll = function() {
                    this.callbacks = []
                }, t.prototype.invoke = function(e) {
                    for (var i = 0, r = this.callbacks; i < r.length; i++) {
                        var o = r[i];
                        try {
                            o(e)
                        } catch (e) {
                            l.error("An error occurred in a callback", e), n.putMetric(t.UNHANDLED_EVENT_LISTENER_ERROR_METRIC)
                        }
                    }
                }, t.UNHANDLED_EVENT_LISTENER_ERROR_METRIC = "UnhandledEventListenerError", t)
            }();
        e.exports = c
    }, {
        187: 187,
        281: 281,
        284: 284,
        294: 294
    }],
    162: [function(t, e, i) {
        "use strict";
        var n = t(93),
            r = t(281),
            o = t(284),
            s = t(294),
            a = r.of("MultiplexedEventSource"),
            l = o.get("MultiplexedEventSource"),
            c = function() {
                function t(t) {
                    void 0 === t && (t = !1), this.sources = [], this.allListeners = [], this.bufferedCallbacks = [], this.bufferInactiveEvents = t
                }
                return (t.prototype.selectSource = function(t) {
                    a(t, "id").exists();
                    var e = s.find(this.sources, function(e) {
                        return e.id === t
                    });
                    a(e, "entry with id " + t).exists(), this.active = e.source, this.reEmitEventsForSourceId(t)
                }, t.prototype.addSource = function(t, e) {
                    var i = this;
                    a(t, "id").exists(), a(e, "source").exists();
                    var n = s.find(this.sources, function(e) {
                        return e.id === t
                    });
                    a(n, "source with id " + t).not.exists(), this.sources.push({
                        id: t,
                        source: e
                    }), s.each(this.allListeners, function(n) {
                        i.listenDownstream(t, e, n)
                    })
                }, t.prototype.removeSource = function(t) {
                    var e = this;
                    a(t, "id").exists();
                    var i = s.partition(this.sources, function(e) {
                        return e.id === t
                    });
                    a(i[0], "source with id " + t).is.not.empty(), this.sources = i[1];
                    var n = i[0][0];
                    s.each(this.allListeners, function(i) {
                        e.unlistenDownstream(t, n.source, i)
                    }), this.active === n.source && (this.active = null)
                }, t.prototype.on = function(t, e) {
                    a(t, "event").exists(), a(e, "callback").is.a["function"]();
                    var i = {
                        event: t,
                        callback: e,
                        downstreamListeners: []
                    };
                    this.allListeners.push(i), this.listenAllDownstreams(i)
                }, t.prototype.off = function(t, e) {
                    a(t, "event").exists(), a(e, "callback").is.a["function"]();
                    var i = s.findIndex(this.allListeners, function(i) {
                        return i.event === t && i.callback === e
                    });
                    if (i !== -1) {
                        var n = this.allListeners[i];
                        this.allListeners.splice(i, 1), s.each(n.downstreamListeners, function(t) {
                            t.source.off(n.event, t.callback)
                        })
                    }
                }, t.prototype.listenAllDownstreams = function(t) {
                    var e = this;
                    s.each(this.sources, function(i) {
                        e.listenDownstream(i.id, i.source, t)
                    })
                }, t.prototype.listenDownstream = function(t, e, i) {
                    var n = this,
                        r = function() {
                            for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                            var s = function() {
                                return i.callback.apply(n, r)
                            };
                            n.active === e ? s() : n.bufferInactiveEvents && (n.bufferCallbackForId(t, s), l.debug("Received event " + i.event + " from inactive source " + t + ". Buffering for when source is active."))
                        };
                    i.downstreamListeners.push({
                        source: e,
                        callback: r
                    }), e.on(i.event, r)
                }, t.prototype.unlistenDownstream = function(t, e, i) {
                    i.downstreamListeners = s.reject(i.downstreamListeners, function(t) {
                        return t.source === e && (e.off(i.event, t.callback), !0)
                    });
                    var r = this.getBufferedCallbacksForId(t);
                    n.exists(r) && (r.callbacks = [])
                }, t.prototype.bufferCallbackForId = function(t, e) {
                    var i = this.getBufferedCallbacksForId(t);
                    n.isNullOrUndefined(i) && (i = {
                        id: t,
                        callbacks: []
                    }, this.bufferedCallbacks.push(i)), i.callbacks.push(e)
                }, t.prototype.reEmitEventsForSourceId = function(t) {
                    if (this.bufferInactiveEvents) {
                        var e = this.getBufferedCallbacksForId(t);
                        if (n.exists(e) && !s.isEmpty(e.callbacks)) {
                            for (var i = 0, r = e.callbacks; i < r.length; i++) {
                                var o = r[i];
                                o()
                            }
                            e.callbacks = []
                        }
                    }
                }, t.prototype.getBufferedCallbacksForId = function(t) {
                    return s.find(this.bufferedCallbacks, function(e) {
                        return e.id === t
                    })
                }, t)
            }();
        e.exports = c
    }, {
        281: 281,
        284: 284,
        294: 294,
        93: 93
    }],
    163: [function(t, e, i) {
        "use strict";
        var n = t(160),
            r = t(161),
            o = t(162),
            s = {
                EventEmitter: n,
                MulticastCallback: r,
                MultiplexedEventSource: o
            };
        e.exports = s
    }, {
        160: 160,
        161: 161,
        162: 162
    }],
    164: [function(t, e, i) {
        "use strict";
        var n = t(80),
            r = n.MarketplaceID,
            o = t(93),
            s = t(294),
            a = function() {
                function t() {}
                return (t.hasEndpoint = function(e) {
                    return !o.isNullOrUndefined(t.getEndpointForMarketplace(e))
                }, t.getEmptyResponseBaseUrl = function(e, i) {
                    return t.getBaseUrl(e, i) + "OE"
                }, t.getImageResponseBaseUrl = function(e, i) {
                    return t.getBaseUrl(e, i) + "OP"
                }, t.getBaseUrl = function(e, i) {
                    return "https://" + t.getEndpointForMarketplace(e) + "/1/" + i + "/1/"
                }, t.getEndpointForMarketplace = function(e) {
                    for (var i in t.ENDPOINTS)
                        if (s.contains(t.ENDPOINTS[i], e)) return i;
                    return null
                }, t.ENDPOINTS = {
                    "fls-eu.amazon.com": [r.DE, r.ROE_EU, r.ROW_EU, r.UK],
                    "fls-fe.amazon.com": [r.JP, r.ROW_FE],
                    "fls-na.amazon.com": [r.ROW_NA, r.US]
                }, t)
            }();
        e.exports = a
    }, {
        294: 294,
        80: 80,
        93: 93
    }],
    165: [function(t, e, i) {
        "use strict";
        var n, r = t(178),
            o = r.HttpRequest,
            s = t(93),
            a = t(281),
            l = t(285),
            c = t(164);
        ! function(t) {
            t[t.DEBUG = 0] = "DEBUG", t[t.INFO = 1] = "INFO", t[t.WARN = 2] = "WARN", t[t.ERROR = 3] = "ERROR"
        }(n || (n = {}));
        var u = a.of("LogPublisher"),
            p = function() {
                function t(e, i, n, r, s) {
                    void 0 === r && (r = 0), void 0 === s && (s = o), u(e, "marketplaceId").exists(), u(c.hasEndpoint(e), "hasEndpoint(marketplaceId)").is["true"](), this.customerId = u(i, "customerId").exists(), this.sessionId = u(n, "sessionId").exists(), this.url = c.getEmptyResponseBaseUrl(e, t.CHANNEL), this.batchSize = r, this.lines = [], this.httpRequest = s
                }
                return (t.prototype.updateSessionId = function(t) {
                    this.flush(), this.sessionId = u(t, "sessionId").exists()
                }, t.isSupported = function() {
                    return o.isSupported() && "undefined" != typeof Array.isArray && "undefined" != typeof Array.prototype.map && "undefined" != typeof Date.prototype.toISOString && "undefined" != typeof JSON
                }, t.prototype.log = function(t, e) {
                    var i = this;
                    u(t, "level").exists();
                    var r = n[t.toUpperCase()];
                    u(r, "logLevel").exists(), u(e, "message").is.not.empty();
                    var o = e.map(function(t) {
                            return i.stringify(t)
                        }),
                        s = this.escapeNewlines(o.join(" ")),
                        a = "[" + this.customerId + "] [" + this.sessionId + "] [" + this.getTime() + "] [" + n[r] + "] " + s + "n";
                    this.lines.push(a), (this.lines.length >= this.batchSize || r >= n.ERROR) && this.flush()
                }, t.prototype.flush = function() {
                    if (!(this.lines.length < 1)) {
                        var t = this.lines.join("");
                        this.httpRequest.post(this.url).body(t).send(), this.lines = []
                    }
                }, t.prototype.getTime = function() {
                    return (new Date).toISOString()
                }, t.prototype.stringify = function(t) {
                    var e = this;
                    if ("function" == typeof t) return "[function]";
                    if ("object" != typeof t) return "" + t;
                    if (t instanceof Error) {
                        for (var i = t, n = []; i instanceof Error;) {
                            var r = i.toString();
                            s.isNullOrUndefined(i.stack) || (r += " [" + i.stack + "]"), n.push(r), i = i.cause
                        }
                        return n.join(" caused by: ")
                    }
                    return this.hasOverriddenToString(t) ? t.toString() : l(t, function(t, i) {
                        return e.hasOverriddenToString(i) ? i.toString() : i
                    })
                }, t.prototype.hasOverriddenToString = function(e) {
                    return "object" == typeof e && null !== e && !Array.isArray(e) && e.toString() !== t.DEFAULT_OBJECT_STRING
                }, t.prototype.escapeNewlines = function(t) {
                    return t.replace(/r?n/g, "\n")
                }, t.CHANNEL = "aiv-web-player", t.DEFAULT_OBJECT_STRING = (new Object).toString(), t)
            }();
        e.exports = p
    }, {
        164: 164,
        178: 178,
        281: 281,
        285: 285,
        93: 93
    }],
    166: [function(t, e, i) {
        "use strict";
        var n = t(80),
            r = n.MarketplaceID,
            o = t(178),
            s = o.HttpRequest,
            a = t(93),
            l = t(281),
            c = t(294),
            u = t(164),
            p = l.of("MetricsPublisher"),
            h = function() {
                function t(e, i, n, o, a, l, c, h) {
                    void 0 === a && (a = 0), void 0 === l && (l = t.FLUSH_TIMEOUT_MS), void 0 === c && (c = s), void 0 === h && (h = Image), this.batchedMetrics = [], this.marketplaceId = p(e, "marketplaceID").exists(), p(u.hasEndpoint(e), "hasEndpoint(marketplaceID)").is["true"](), this.sessionId = p(i, "sessionId").exists(), this.client = p(o, "client").exists(), this.clientId = p(n, "clientId").exists(), t.MARKETPLACES[r.DE] = "de", t.MARKETPLACES[r.JP] = "jp", t.MARKETPLACES[r.ROE_EU] = "roe_eu", t.MARKETPLACES[r.ROW_EU] = "row_eu", t.MARKETPLACES[r.ROW_FE] = "row_fe", t.MARKETPLACES[r.ROW_NA] = "row_na", t.MARKETPLACES[r.UK] = "uk", t.MARKETPLACES[r.US] = "us", this.batchSize = a, this.flushTimeoutMs = l, c.isSupported() ? (this.baseUrl = u.getEmptyResponseBaseUrl(e, t.CHANNEL) + "/aiv-web-player/action/", this.handler = this.putMetricXhr) : (this.baseUrl = u.getImageResponseBaseUrl(e, t.CHANNEL) + "/aiv-web-player/action/", this.handler = this.putMetricImg), this.httpRequest = c, this.imageType = h
                }
                return (t.prototype.updateSessionId = function(t) {
                    this.sessionId = p(t, "sessionId").exists()
                }, t.prototype.putMetric = function(t, e, i, n) {
                    var r = this;
                    void 0 === i && (i = 1), p(t, "feature").exists(), p(e, "resource").exists();
                    var o = t + ":" + e + "@v=" + i;
                    a.isNullOrUndefined(n) || (o = o + ":u=" + n), this.batchedMetrics.push(o), this.batchedMetrics.length >= this.batchSize ? this.flush() : (clearTimeout(this.flushTimeoutId), this.flushTimeoutId = setTimeout(function() {
                        r.flush()
                    }, this.flushTimeoutMs))
                }, t.prototype.flush = function() {
                    if (!(this.batchedMetrics.length < 1)) {
                        clearTimeout(this.flushTimeoutId);
                        var t = this.baseUrl + this.batchedMetrics.join("/");
                        this.handler(t, !0), this.handler(t, !1), this.batchedMetrics = []
                    }
                }, t.prototype.putMetricImg = function(t, e) {
                    var i = this.createMetricParameters(e),
                        n = c.map(i, function(t, e) {
                            return e + "=" + t
                        }),
                        r = new this.imageType;
                    r.src = t + "?" + n.join("&")
                }, t.prototype.putMetricXhr = function(t, e) {
                    this.httpRequest.get(t).query(this.createMetricParameters(e)).send()
                }, t.prototype.createMetricParameters = function(e) {
                    var i = {
                        instance: this.clientId,
                        marketplace: t.MARKETPLACES[this.marketplaceId],
                        marketplaceId: this.marketplaceId,
                        requestId: 1,
                        service: t.SERVICE_NAME,
                        session: this.sessionId
                    };
                    return (e && (i.client = this.client), i)
                }, t.CHANNEL = "action-impressions", t.SERVICE_NAME = "AIVWebPlayer", t.FLUSH_TIMEOUT_MS = 3e4, t.MARKETPLACES = {}, t)
            }();
        e.exports = h
    }, {
        164: 164,
        178: 178,
        281: 281,
        294: 294,
        80: 80,
        93: 93
    }],
    167: [function(t, e, i) {
        "use strict";
        var n = t(165),
            r = t(166),
            o = {
                LogPublisher: n,
                MetricsPublisher: r
            };
        e.exports = o
    }, {
        165: 165,
        166: 166
    }],
    168: [function(t, e, i) {
        "use strict";
        var n = t(281),
            r = t(294),
            o = t(80),
            s = o.MarketplaceID,
            a = t(93),
            l = t(58),
            c = l.TokenType,
            u = t(178),
            p = t(252),
            h = p.ExponentialBackoffRetry,
            f = u.HttpRequest,
            d = t(159),
            y = t(169),
            g = n.of("GetSectionsClient"),
            m = function() {
                function t(e, i, n, r, o, s, a) {
                    void 0 === s && (s = f), void 0 === a && (a = h), this.authContext = g(o, "authContext").exists(), this.deviceId = g(e, "deviceId").exists(), this.deviceTypeId = g(i, "deviceTypeId").exists(), this.marketplaceId = g(n, "marketplaceId").exists(), this.url = g(r, "partnerServiceUrl").exists().replace(//$/, "") + t.SERVICE_ENDPOINT, this.requestType = s, this.retryType = a
                }
                return (t.prototype.getSections = function(e, i, n, r) {
                    var o = this;
                    g(e, "asin").exists(), g(i, "decorationScheme").exists(), g(n, "onSuccess").exists(), g(r, "onError").exists();
                    var s, l = (new this.retryType).withMaxAttempts(t.MAX_ATTEMPTS).withInitialIntervalMs(t.BASE_RETRY).withExponentialFactor(2).withRandomizationFactor(t.JITTER).onError(function(t) {
                        return o.onFail(r, t)
                    }).onAttempt(function(t, a) {
                        s = o.sendRequest(e, i, t, a, n, r)
                    }).execute();
                    return function() {
                        l.abort(), a.exists(s) && s.abort()
                    }
                }, t.prototype.sendRequest = function(e, i, n, o, l, u) {
                    var p = this,
                        h = this.requestType.get(this.url),
                        f = {
                            deviceID: this.deviceId,
                            deviceTypeID: this.deviceTypeId,
                            marketplaceId: this.marketplaceId,
                            pageId: e,
                            firmware: "1",
                            format: "json",
                            gascEnabled: !s.isClassic(this.marketplaceId),
                            version: "default",
                            sectionTypes: "bottom",
                            pageType: "player",
                            decorationScheme: i
                        };
                    return (h.accept("application/json").withCredentials().header(t.RETRY_COUNT_HEADER, "" + n).header(t.REQUEST_PRIORITY_HEADER, t.PRIORITY_CRITICAL).onLoad(function(t) {
                        p.onLoad(t, o, l, u)
                    }).onError(function(e, i) {
                        var n = "An error occurred while sending GetSections request: " + e,
                            s = d.newError(t.ERROR, n, e);
                        a.isNullOrUndefined(i) || !r.contains(t.UNRETRIABLE_HTTP_ERRORS, i.getStatus()) ? o(s, i) : p.onFail(u, s, i)
                    }), a.exists(this.authContext.tokenClient) ? this.authContext.tokenClient.getToken(function(t) {
                        t.type === c.OAUTH && h.bearerToken(t.token), h.query(f).send()
                    }, u) : h.query(f).send(), h)
                }, t.prototype.onLoad = function(e, i, n, o) {
                    var s = e.getText(),
                        l = e.getLatencyMs();
                    if (null === s) return void i(d.newError(t.ERROR, "GetSections response is null."), e);
                    var c;
                    try {
                        c = JSON.parse(s)
                    } catch (n) {
                        var u = "An error occurred while parsing the GetSections JSON response: " + n;
                        return void i(d.newError(t.ERROR, u, n), e)
                    }
                    var p = a.nestedValue(c, "sections"),
                        h = null;
                    r.isEmpty(p) || (h = new y(c)), n(h, l)
                }, t.prototype.onFail = function(t, e, i) {
                    var n;
                    a.exists(i) && (n = i.getLatencyMs()), t(e, n)
                }, t.MAX_ATTEMPTS = 4, t.JITTER = 200, t.BASE_RETRY = 500, t.UNRETRIABLE_HTTP_ERRORS = [400, 401, 403], t.RETRY_COUNT_HEADER = "x-retry-count", t.REQUEST_PRIORITY_HEADER = "x-request-priority", t.PRIORITY_CRITICAL = "CRITICAL", t.ERROR = "GetSectionsError", t.SERVICE_ENDPOINT = "/cdp/discovery/GetSections", t)
            }();
        e.exports = m
    }, {
        159: 159,
        169: 169,
        178: 178,
        252: 252,
        281: 281,
        294: 294,
        58: 58,
        80: 80,
        93: 93
    }],
    169: [function(t, e, i) {
        "use strict";
        var n = t(93),
            r = t(281),
            o = t(294),
            s = r.of("GetSectionsResponse"),
            a = function() {
                function t(t) {
                    var e = this;
                    this.asin = null, this.episodeImageURL = null, this.episodeNumber = null, this._hasCaptions = !1, this._isPlayable = !1, this.regulatoryRating = null, this.seasonNumber = null, this.seriesTitle = null, this.title = null, this.autoplayEnabled = !1, this.numTitlesToAutoplay = null, this.showAutoplayCard = !1, this.preferredImageName = null, this.inSameSeries = !0, this.recommendationStrategy = null, s(t, "getSectionsJson").exists();
                    var i = n.nestedValue(t, "sections.bottom.collections.collectionList.0.items.itemList.0"),
                        r = n.nestedValue(i, "decoratedTitle"),
                        a = n.nestedValue(t, "sections.bottom.collections.collectionList.0.autoplayConfig"),
                        l = n.nestedValue(i, "metadata");
                    if (this.asin = n.nestedValue(i, "titleId"), this.autoplayEnabled = n.nestedValue(a, "autoplayEnabled") === !0, this.numTitlesToAutoplay = n.nestedValue(a, "numTitlesToAutoplay"), this.showAutoplayCard = n.nestedValue(a, "showAutoplayCard") === !0, this.preferredImageName = n.nestedValue(a, "autoplayCardPreferredImage"), n.exists(l) && (this.recommendationStrategy = n.withDefault(o.find(Object.keys(l), function(t) {
                            return 0 === t.indexOf("source.")
                        }), null), this.inSameSeries = "source.OtherEpisodes" === this.recommendationStrategy), null !== r) {
                        this.episodeImageURL = n.nestedValue(r, "images.imageUrls.next_up"), this.episodeNumber = n.nestedValue(r, "catalog.episodeNumber"), this._hasCaptions = n.nestedValue(r, "computed.simple.CLOSED_CAPTION_BADGE") === !0, this._isPlayable = n.nestedValue(r, "playback.summary.isPlayable") === !0, this.regulatoryRating = n.nestedValue(r, "catalog.regulatoryRating"), this.title = n.nestedValue(r, "catalog.title");
                        var c = n.nestedValue(r, "family.tvAncestors");
                        n.isNullOrUndefined(c) || c.forEach(function(t) {
                            var i = n.nestedValue(t, "catalog.type");
                            "SEASON" === i ? e.seasonNumber = n.nestedValue(t, "catalog.seasonNumber") : "SHOW" === i && (e.seriesTitle = n.nestedValue(t, "catalog.title"))
                        })
                    }
                }
                return (t.prototype.getAsin = function() {
                    return this.asin
                }, t.prototype.getEpisodeImageURL = function() {
                    return this.episodeImageURL
                }, t.prototype.getEpisodeNumber = function() {
                    return this.episodeNumber
                }, t.prototype.getRegulatoryRating = function() {
                    return this.regulatoryRating
                }, t.prototype.getSeasonNumber = function() {
                    return this.seasonNumber
                }, t.prototype.getSeriesTitle = function() {
                    return this.seriesTitle
                }, t.prototype.getTitle = function() {
                    return this.title
                }, t.prototype.hasCaptions = function() {
                    return this._hasCaptions
                }, t.prototype.isPlayable = function() {
                    return this._isPlayable
                }, t.prototype.isAutoplayEnabled = function() {
                    return this.autoplayEnabled
                }, t.prototype.getNumTitlesToAutoplay = function() {
                    return this.numTitlesToAutoplay
                }, t.prototype.getShowAutoplayCard = function() {
                    return this.showAutoplayCard
                }, t.prototype.isInSameSeries = function() {
                    return this.inSameSeries
                }, t.prototype.getPreferredImageName = function() {
                    return this.preferredImageName
                }, t.prototype.getRecommendationStrategy = function() {
                    return this.recommendationStrategy
                }, t)
            }();
        e.exports = a
    }, {
        281: 281,
        294: 294,
        93: 93
    }],
    170: [function(t, e, i) {
        "use strict";
        var n = t(168),
            r = t(169),
            o = {
                GetSectionsClient: n,
                GetSectionsResponse: r
            };
        e.exports = o
    }, {
        168: 168,
        169: 169
    }],
    171: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t[t.GET = 0] = "GET", t[t.POST = 1] = "POST", t[t.PUT = 2] = "PUT", t[t.DELETE = 3] = "DELETE", t[t.HEAD = 4] = "HEAD", t[t.OPTIONS = 5] = "OPTIONS"
        }(n || (n = {})), e.exports = n
    }, {}],
    172: [function(t, e, i) {
        "use strict";
        var n = t(294),
            r = t(93),
            o = t(281),
            s = t(275),
            a = t(171),
            l = t(174),
            c = t(175),
            u = t(176),
            p = t(177),
            h = o.of("HttpRequest"),
            f = function() {
                function t(t, e, i, r) {
                    void 0 === i && (i = window.performance), this.queryString = null, this.xhrData = null, this.xhrFields = [], this.xhrRequestHeaders = {}, this.xhrResponseType = null, this.xhrTimeout = 0, this.xhrWithCredentials = !1, this.latencyTimeoutId = null, this.latencyTimeoutMs = 0, this.startTime = null, this.delayMs = 0, this.delayTimeoutId = null, this.sent = !1, this.isAborted = !1, this.abortXhr = null, this.loadCallbacks = [], this.errorCallbacks = [], this.timeoutCallbacks = [], this.abortCallbacks = [], this.progressCallbacks = [], this.eventListeners = [], this.method = h(t, "method").exists(), this.url = h(e, "url").exists(), this.performance = i, this.xhrType = n.isUndefined(r) && "undefined" != typeof XMLHttpRequest ? XMLHttpRequest : r
                }
                return (t.isSupported = function(t) {
                    if (n.isUndefined(t) && "undefined" != typeof XMLHttpRequest && (t = XMLHttpRequest), "undefined" == typeof JSON || "undefined" == typeof t || n.isUndefined(Array.prototype.forEach)) return !1;
                    var e = new t;
                    return !(n.isUndefined(e.abort) || n.isUndefined(e.addEventListener) || n.isUndefined(e.getAllResponseHeaders) || n.isUndefined(e.open) || n.isUndefined(e.readyState) || n.isUndefined(e.removeEventListener) || n.isUndefined(e.response) || n.isUndefined(e.responseText) || n.isUndefined(e.responseType) || n.isUndefined(e.send) || n.isUndefined(e.setRequestHeader) || n.isUndefined(e.status) || n.isUndefined(e.timeout) || n.isUndefined(e.withCredentials))
                }, t.get = function(e) {
                    return (h(e, "url").exists(), new t(a.GET, e))
                }, t.post = function(e) {
                    return (h(e, "url").exists(), new t(a.POST, e))
                }, t.prototype.header = function(t, e) {
                    return (h(t, "header").exists(), h(e, "value").exists(), h(this.sent, "this.sent").is["false"](), this.xhrRequestHeaders[t] = e, this)
                }, t.prototype.headers = function(t) {
                    return (h(t, "headers").exists(), h(this.sent, "this.sent").is["false"](), n.extend(this.xhrRequestHeaders, t), this)
                }, t.prototype.contentType = function(t) {
                    return (h(t, "mimeType").exists(), h(this.sent, "this.sent").is["false"](), this.header("Content-Type", t), this)
                }, t.prototype.accept = function(t) {
                    return (h(t, "mimeType").exists(), h(this.sent, "this.sent").is["false"](), this.header("Accept", t), this)
                }, t.prototype.responseType = function(t) {
                    return (h(t, "type").exists(), h(this.sent, "this.sent").is["false"](), this.xhrResponseType = t, this)
                }, t.prototype.delay = function(t) {
                    return (h(t, "delayMs").exists(), h(this.sent, "this.sent").is["false"](), this.delayMs = t, this)
                }, t.prototype.timeout = function(t, e) {
                    return (h(t, "timeoutMs").exists(), h(this.sent, "this.sent").is["false"](), e === u.LATENCY ? this.latencyTimeoutMs = t : this.xhrTimeout = t, this)
                }, t.prototype.withCredentials = function() {
                    return (h(this.sent, "this.sent").is["false"](), this.xhrWithCredentials = !0, this)
                }, t.prototype.query = function(t) {
                    return (h(t, "parameters").exists(), h(this.sent, "this.sent").is["false"](), this.queryString = p.toUriEncodedString(n.map(t, function(t, e) {
                        return new p(e, t)
                    })), this)
                }, t.prototype.body = function(t) {
                    return (h(t, "data").exists(), h(this.sent, "this.sent").is["false"](), h(this.xhrFields, "this.xhrFields").is.empty(), this.xhrData = t, this)
                }, t.prototype.json = function(t) {
                    return (h(t, "data").exists(), h(this.sent, "this.sent").is["false"](), h(this.xhrFields, "this.xhrFields").is.empty(), this.xhrData = JSON.stringify(t), this.contentType("application/json"), this)
                }, t.prototype.field = function(t, e) {
                    return (h(t, "name").exists(), h(e, "value").exists(), h(this.sent, "this.sent").is["false"](), h(this.xhrData, "this.xhrData").is["null"](), this.xhrFields.push(new p(t, e)), this.contentType("application/x-www-form-urlencoded"), this)
                }, t.prototype.fields = function(t) {
                    var e = this;
                    return (h(t, "fields").exists(), h(this.sent, "this.sent").is["false"](), h(this.xhrData, "this.xhrData").is["null"](), n.each(t, function(t, i) {
                        e.xhrFields.push(new p(i, t))
                    }), this.contentType("application/x-www-form-urlencoded"), this)
                }, t.prototype.bearerToken = function(t) {
                    return (h(t, "token").exists(), h(this.sent, "this.sent").is["false"](), this.header("Authorization", "Bearer " + t), this)
                }, t.prototype.onLoad = function(t) {
                    return (h(t, "callback").exists(), h(this.sent, "this.sent").is["false"](), this.loadCallbacks = n.union(this.loadCallbacks, [t]), this)
                }, t.prototype.onProgress = function(t) {
                    return (h(t, "callback").exists(), h(this.sent, "this.sent").is["false"](), this.progressCallbacks = n.union(this.progressCallbacks, [t]), this)
                }, t.prototype.onError = function(t) {
                    return (h(t, "callback").exists(), h(this.sent, "this.sent").is["false"](), this.errorCallbacks = n.union(this.errorCallbacks, [t]), this)
                }, t.prototype.onTimeout = function(t) {
                    return (h(t, "callback").exists(), h(this.sent, "this.sent").is["false"](), this.timeoutCallbacks = n.union(this.timeoutCallbacks, [t]), this)
                }, t.prototype.onAbort = function(t) {
                    return (h(t, "callback").exists(), h(this.sent, "this.sent").is["false"](), this.abortCallbacks = n.union(this.abortCallbacks, [t]), this)
                }, t.prototype.abort = function() {
                    this.isAborted = !0, null !== this.delayTimeoutId && (s.clearTimeout(this.delayTimeoutId), this.delayTimeoutId = null, this.handleAbort({
                        requestStarted: !1,
                        responseReceived: !1,
                        loadedBytes: 0,
                        totalBytes: 0,
                        latencyMs: 0,
                        downloadMs: 0,
                        totalMs: 0
                    })), null !== this.abortXhr && (this.abortXhr(), this.abortXhr = null)
                }, t.prototype.send = function() {
                    var t = this;
                    return (this.delayMs > 0 ? this.delayTimeoutId = s.setTimeout(function() {
                        t.delayTimeoutId = null, t.sendRequest()
                    }, this.delayMs) : this.sendRequest(), this)
                }, t.prototype.sendRequest = function() {
                    var t = this;
                    this.sent = !0;
                    var e = a[this.method],
                        i = n.isEmpty(this.queryString) ? this.url : this.url + "?" + this.queryString,
                        r = new this.xhrType;
                    (this.loadCallbacks.length > 0 || this.progressCallbacks.length > 0 || this.errorCallbacks.length > 0 || this.timeoutCallbacks.length > 0 || this.abortCallbacks.length > 0) && this.addEventListeners(r), r.open(e, i, !0), n.each(this.xhrRequestHeaders, function(t, e) {
                        r.setRequestHeader(e, t)
                    }), null !== this.xhrResponseType && (r.responseType = c[this.xhrResponseType].toLowerCase()), this.xhrTimeout > 0 && (r.timeout = this.xhrTimeout), this.latencyTimeoutMs > 0 && (this.latencyTimeoutMs < this.xhrTimeout || 0 === this.xhrTimeout) && (this.latencyTimeoutId = s.setTimeout(function() {
                        t.removeAllListeners(r), null !== t.abortXhr && t.abortXhr(), t.abortXhr = null, t.handleTimeout(t.createTimeoutEvent(t.latencyTimeoutMs, t.startTime, null, u.LATENCY))
                    }, this.latencyTimeoutMs)), this.xhrWithCredentials && (r.withCredentials = !0), this.abortXhr = function() {
                        r.abort()
                    }, null !== this.xhrData ? (r.send(this.xhrData), this.xhrData = null) : n.isEmpty(this.xhrFields) ? r.send() : (r.send(p.toWwwFormUrlEncodedString(this.xhrFields)), this.xhrFields.length = 0)
                }, t.prototype.addEventListeners = function(t) {
                    var e = this,
                        i = null;
                    this.addEventListener(t, "loadstart", function(t) {
                        e.startTime = e.correctXHREventTimeStamp(t.timeStamp)
                    });
                    var n = function(r) {
                        t.readyState === e.xhrType.HEADERS_RECEIVED && (i = e.correctXHREventTimeStamp(r.timeStamp), t.removeEventListener("readystatechange", n), s.clearTimeout(e.latencyTimeoutId))
                    };
                    this.addEventListener(t, "readystatechange", n), (this.loadCallbacks.length > 0 || this.errorCallbacks.length > 0) && this.addEventListener(t, "load", function(n) {
                        if (e.abortXhr = null, e.removeAllListeners(t), e.isAborted) e.handleAbort(e.createAbortEvent(e.startTime, i, n));
                        else {
                            var r = e.createLoadEvent(e.startTime, i, n);
                            e.handleLoad(l.createFromXMLHttpRequest(t, r))
                        }
                    }), this.progressCallbacks.length > 0 && this.addEventListener(t, "progress", function(t) {
                        e.isAborted || e.handleProgress(e.createProgressEvent(e.startTime, i, t))
                    }), this.errorCallbacks.length > 0 && this.addEventListener(t, "error", function(n) {
                        e.abortXhr = null, e.removeAllListeners(t), e.isAborted ? e.handleAbort(e.createAbortEvent(e.startTime, i, n)) : e.handleError()
                    }), (this.timeoutCallbacks.length > 0 || this.errorCallbacks.length > 0) && this.addEventListener(t, "timeout", function(n) {
                        e.abortXhr = null, e.removeAllListeners(t), e.isAborted ? e.handleAbort(e.createAbortEvent(e.startTime, i, n)) : e.handleTimeout(e.createTimeoutEvent(t.timeout, e.startTime, i, u.DEFAULT, n))
                    }), this.abortCallbacks.length > 0 && this.addEventListener(t, "abort", function(n) {
                        e.abortXhr = null, e.removeAllListeners(t), e.handleAbort(e.createAbortEvent(e.startTime, i, n))
                    })
                }, t.prototype.addEventListener = function(t, e, i) {
                    this.eventListeners.push({
                        type: e,
                        listener: i
                    }), t.addEventListener(e, i)
                }, t.prototype.removeAllListeners = function(t) {
                    this.eventListeners.forEach(function(e) {
                        t.removeEventListener(e.type, e.listener)
                    }), this.eventListeners.length = 0
                }, t.prototype.handleLoad = function(t) {
                    if (t.getStatus() >= 200 && t.getStatus() < 400) this.loadCallbacks.forEach(function(e) {
                        e(t)
                    });
                    else {
                        var e = new Error("Request to " + this.url + " resulted in HTTP status code " + t.getStatus());
                        this.errorCallbacks.forEach(function(i) {
                            i(e, t)
                        })
                    }
                    this.clearCallbacks()
                }, t.prototype.handleProgress = function(t) {
                    this.progressCallbacks.forEach(function(e) {
                        e(t)
                    })
                }, t.prototype.handleError = function() {
                    var t = new Error("An unknown network error occurred while attempting a request to " + this.url + " with query string " + this.queryString);
                    this.errorCallbacks.forEach(function(e) {
                        e(t)
                    }), s.clearTimeout(this.latencyTimeoutId), this.clearCallbacks()
                }, t.prototype.handleTimeout = function(t) {
                    if (this.timeoutCallbacks.length > 0) this.timeoutCallbacks.forEach(function(e) {
                        e(t)
                    });
                    else {
                        var e = new Error("Request to " + this.url + " timed out after " + t.timeoutMs + " ms");
                        this.errorCallbacks.forEach(function(t) {
                            t(e)
                        })
                    }
                    this.clearCallbacks()
                }, t.prototype.handleAbort = function(t) {
                    this.abortCallbacks.forEach(function(e) {
                        e(t)
                    }), s.clearTimeout(this.latencyTimeoutId), this.clearCallbacks()
                }, t.prototype.createProgressEvent = function(t, e, i) {
                    return n.extend({
                        lengthComputable: i.lengthComputable
                    }, this.createHttpEvent(t, e, i))
                }, t.prototype.createAbortEvent = function(t, e, i) {
                    return n.extend({
                        requestStarted: !0
                    }, this.createHttpEvent(t, e, i))
                }, t.prototype.createTimeoutEvent = function(t, e, i, r, o) {
                    return n.extend({
                        timeoutMs: t,
                        timeoutType: r
                    }, this.createHttpEvent(e, i, o))
                }, t.prototype.createLoadEvent = function(t, e, i) {
                    return n.extend({}, this.createHttpEvent(t, e, i), {
                        lengthComputable: !0,
                        loadedBytes: i.loaded,
                        totalBytes: i.loaded
                    })
                }, t.prototype.createHttpEvent = function(t, e, i) {
                    var n = r.exists(i) && i.lengthComputable;
                    return {
                        responseReceived: null !== e,
                        loadedBytes: n ? i.loaded : 0,
                        totalBytes: n ? i.total : 0,
                        latencyMs: null !== e ? e - t : 0,
                        downloadMs: r.exists(i) && null !== e ? this.correctXHREventTimeStamp(i.timeStamp) - e : 0,
                        totalMs: r.exists(i) && null !== t ? this.correctXHREventTimeStamp(i.timeStamp) - t : 0
                    }
                }, t.prototype.clearCallbacks = function() {
                    this.loadCallbacks.length = 0, this.errorCallbacks.length = 0, this.timeoutCallbacks.length = 0, this.abortCallbacks.length = 0, this.progressCallbacks.length = 0
                }, t.prototype.correctXHREventTimeStamp = function(t) {
                    return r.isNullOrUndefined(this.performance) ? t : t - this.performance.now() <= 1e3 ? t : this.performance.now()
                }, t)
            }();
        e.exports = f
    }, {
        171: 171,
        174: 174,
        175: 175,
        176: 176,
        177: 177,
        275: 275,
        281: 281,
        294: 294,
        93: 93
    }],
    173: [function(t, e, i) {
        "use strict";
        var n = t(281),
            r = t(294),
            o = t(171),
            s = t(172),
            a = n.of("HttpRequestBuilder"),
            l = function() {
                function t(t, e, i) {
                    void 0 === i && (i = s), this.parameters = {}, this.xhrFields = {}, this.xhrRequestHeaders = {}, this.xhrResponseType = null, this.xhrWithCredentials = !1, this.bodyData = null, this.jsonData = null, this.timeoutMs = 0, this.timeoutType = null, this.method = a(t, "method").exists(), this.url = a(e, "url").exists(), this.httpRequestType = i
                }
                return (t.prototype.build = function() {
                    var t = new this.httpRequestType(this.method, this.url);
                    return (r.isEmpty(this.parameters) || t.query(this.parameters), r.isEmpty(this.xhrFields) || t.fields(this.xhrFields), r.isEmpty(this.xhrRequestHeaders) || t.headers(this.xhrRequestHeaders), null !== this.xhrResponseType && t.responseType(this.xhrResponseType), this.xhrWithCredentials && t.withCredentials(), null !== this.bodyData && t.body(this.bodyData), null !== this.jsonData && t.json(this.jsonData), 0 !== this.timeoutMs && t.timeout(this.timeoutMs, this.timeoutType), t)
                }, t.get = function(e, i) {
                    return (void 0 === i && (i = s), a(e, "url").exists(), new t(o.GET, e, i))
                }, t.post = function(e, i) {
                    return (void 0 === i && (i = s), a(e, "url").exists(), new t(o.POST, e, i))
                }, t.prototype.header = function(t, e) {
                    return (a(t, "header").exists(), a(e, "value").exists(), this.xhrRequestHeaders[t] = e, this)
                }, t.prototype.headers = function(t) {
                    return (a(t, "headers").exists(), r.extend(this.xhrRequestHeaders, t), this)
                }, t.prototype.contentType = function(t) {
                    return (a(t, "mimeType").exists(), this.header("Content-Type", t), this)
                }, t.prototype.accept = function(t) {
                    return (a(t, "mimeType").exists(), this.header("Accept", t), this)
                }, t.prototype.responseType = function(t) {
                    return (this.xhrResponseType = a(t, "type").exists(), this)
                }, t.prototype.timeout = function(t, e) {
                    return (this.timeoutMs = a(t, "timeoutMs").exists(), this.timeoutType = e, this)
                }, t.prototype.withCredentials = function() {
                    return (this.xhrWithCredentials = !0, this)
                }, t.prototype.query = function(t) {
                    return (this.parameters = a(t, "parameters").exists(), this)
                }, t.prototype.body = function(t) {
                    return (this.bodyData = a(t, "data").exists(), this)
                }, t.prototype.json = function(t) {
                    return (this.jsonData = a(t, "data").exists(), this)
                }, t.prototype.field = function(t, e) {
                    return (a(t, "name").exists(), a(e, "value").exists(), this.xhrFields[t] = e, this)
                }, t.prototype.fields = function(t) {
                    return (a(t, "fields").exists(), r.extend(this.xhrFields, t), this)
                }, t.prototype.bearerToken = function(t) {
                    return (a(t, "token").exists(), this.header("Authorization", "Bearer " + t), this)
                }, t)
            }();
        e.exports = l
    }, {
        171: 171,
        172: 172,
        281: 281,
        294: 294
    }],
    174: [function(t, e, i) {
        "use strict";
        var n = t(294),
            r = t(93),
            o = function() {
                function t(t, e, i, o, s, a, l, c) {
                    var u = this;
                    this.sizeBytes = 0, this.status = t, this.headers = {}, Object.keys(e).forEach(function(t) {
                        u.headers[t.toLowerCase()] = e[t]
                    }), this.arrayBuffer = i, this.blob = o, this.text = s, this.document = a, this.latencyMs = l.latencyMs, this.downloadMs = l.downloadMs, this.totalMs = l.totalMs, this.responseUrl = c;
                    var p = parseInt(this.getHeader("Content-Length"));
                    r.isNullOrUndefined(this.arrayBuffer) ? n.isNaN(p) ? this.sizeBytes = l.loadedBytes : this.sizeBytes = p : this.sizeBytes = this.arrayBuffer.byteLength
                }
                return (t.createFromXMLHttpRequest = function(e, i) {
                    var o = t.parseHeaders(e.getAllResponseHeaders()),
                        s = null;
                    n.isUndefined(e.responseURL) || (s = e.responseURL);
                    var a = r.withDefault(e.responseType, "");
                    switch (a.toLowerCase()) {
                        case "arraybuffer":
                            return new t(e.status, o, e.response, null, null, null, i, s);
                        case "blob":
                            return new t(e.status, o, null, e.response, null, null, i, s);
                        case "document":
                            return new t(e.status, o, null, null, null, e.response, i, s);
                        default:
                            return new t(e.status, o, null, null, e.responseText, null, i, s)
                    }
                }, t.prototype.getStatus = function() {
                    return this.status
                }, t.prototype.getHeader = function(t) {
                    var e = this.headers[t.toLowerCase()];
                    return n.isUndefined(e) ? null : e
                }, t.prototype.getHeaders = function() {
                    return n.clone(this.headers)
                }, t.prototype.getArrayBuffer = function() {
                    return this.arrayBuffer
                }, t.prototype.getBlob = function() {
                    return this.blob
                }, t.prototype.getText = function() {
                    return this.text
                }, t.prototype.getDocument = function() {
                    return this.document
                }, t.prototype.getLatencyMs = function() {
                    return this.latencyMs
                }, t.prototype.getDownloadMs = function() {
                    return this.downloadMs
                }, t.prototype.getTotalMs = function() {
                    return this.totalMs
                }, t.prototype.getResponseUrl = function() {
                    return this.responseUrl
                }, t.prototype.getMetrics = function() {
                    return {
                        requestStarted: !0,
                        responseReceived: !0,
                        loadedBytes: this.sizeBytes,
                        totalBytes: this.sizeBytes,
                        latencyMs: this.latencyMs,
                        downloadMs: this.downloadMs,
                        totalMs: this.totalMs
                    }
                }, t.parseHeaders = function(e) {
                    var i = {};
                    return (e.split(/r?n/).forEach(function(e) {
                        var n = t.HEADER_REGEX.exec(e);
                        n && (i[n[1]] = n[2])
                    }), i)
                }, t.HEADER_REGEX = /^s*(.+?)s*:s*(.+?)s*$/, t)
            }();
        e.exports = o
    }, {
        294: 294,
        93: 93
    }],
    175: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t[t.ArrayBuffer = 0] = "ArrayBuffer", t[t.Blob = 1] = "Blob", t[t.Text = 2] = "Text", t[t.Document = 3] = "Document"
        }(n || (n = {})), e.exports = n
    }, {}],
    176: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t[t.DEFAULT = 1] = "DEFAULT", t[t.LATENCY = 2] = "LATENCY"
        }(n || (n = {})), e.exports = n
    }, {}],
    177: [function(t, e, i) {
        "use strict";
        var n = t(281),
            r = t(294),
            o = n.of("KeyValuePair"),
            s = function() {
                function t(t, e) {
                    this.key = o(t, "key").exists(), this.value = o(e, "value").exists()
                }
                return (t.toUriEncodedString = function(t) {
                    return r.map(t, function(t) {
                        return t.toUriEncodedString()
                    }).join("&")
                }, t.toWwwFormUrlEncodedString = function(t) {
                    return r.map(t, function(t) {
                        return t.toWwwFormUrlEncodedString()
                    }).join("&")
                }, t.prototype.toUriEncodedString = function() {
                    return encodeURIComponent(this.key) + "=" + encodeURIComponent(this.value)
                }, t.prototype.toWwwFormUrlEncodedString = function() {
                    return this.encodeWwwFormUrlComponent(this.key) + "=" + this.encodeWwwFormUrlComponent(this.value)
                }, t.prototype.encodeWwwFormUrlComponent = function(t) {
                    return encodeURIComponent(t).replace(/%20/g, "+")
                }, t)
            }();
        e.exports = s
    }, {
        281: 281,
        294: 294
    }],
    178: [function(t, e, i) {
        "use strict";
        var n = t(171),
            r = t(172),
            o = t(173),
            s = t(174),
            a = t(175),
            l = t(176),
            c = {
                HttpMethod: n,
                HttpRequest: r,
                HttpRequestBuilder: o,
                HttpResponse: s,
                HttpResponseType: a,
                HttpTimeoutType: l
            };
        e.exports = c
    }, {
        171: 171,
        172: 172,
        173: 173,
        174: 174,
        175: 175,
        176: 176
    }],
    179: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t(e, i) {
                void 0 === i && (i = window);
                var n = this;
                this.VERSION = 1, this.pendingDbOperations = [], this.tryInitialize = function(e) {
                    n.database || !t.isSupported(n.windowRef) ? e() : (n.pendingDbOperations.push(e), n.dbOpenRequest || n.initialize(function() {
                        for (var t = 0; t < n.pendingDbOperations.length; t++) {
                            var e = n.pendingDbOperations[t];
                            "function" == typeof e && n.pendingDbOperations[t]()
                        }
                        n.dbOpenRequest = null, n.pendingDbOperations = []
                    }))
                }, this.initialize = function(t) {
                    try {
                        var e = n.windowRef.indexedDB.open(n.dbName, n.VERSION);
                        e.onsuccess = function(e) {
                            try {
                                n.database = e.target.result
                            } catch (t) {}
                            t()
                        }, e.onupgradeneeded = function(t) {
                            t.oldVersion < 1 && (n.database = t.target.result, n.database.createObjectStore(n.dbName))
                        }, e.onerror = function(e) {
                            e.preventDefault(), t()
                        }
                    } catch (e) {
                        t()
                    }
                }, this.dbName = e, this.windowRef = i
            }
            return (t.prototype.get = function(t, e) {
                var i = this;
                this.tryInitialize(function() {
                    try {
                        if (!i.database) return e(null);
                        var n = (new Date).getTime(),
                            r = i.database.transaction([i.dbName], "readonly").objectStore(i.dbName).get(t);
                        r.onsuccess = function(t) {
                            try {
                                var i = t.target.result;
                                e(i, (new Date).getTime() - n)
                            } catch (t) {
                                e(null)
                            }
                        }, r.onerror = function() {
                            e(null)
                        }
                    } catch (t) {
                        e(null)
                    }
                })
            }, t.prototype.set = function(t, e) {
                var i = this;
                this.tryInitialize(function() {
                    try {
                        i.database && i.database.transaction([i.dbName], "readwrite").objectStore(i.dbName).put(e, t)
                    } catch (t) {}
                })
            }, t.prototype.clear = function() {
                var t = this;
                this.tryInitialize(function() {
                    try {
                        t.database && t.database.transaction([t.dbName], "readwrite").objectStore(t.dbName).clear()
                    } catch (t) {}
                })
            }, t.isSupported = function(t) {
                return (void 0 === t && (t = window), "undefined" != typeof t.indexedDB)
            }, t)
        }();
        e.exports = n
    }, {}],
    180: [function(t, e, i) {
        "use strict";
        var n = t(179),
            r = {
                IndexedDBStorage: n
            };
        e.exports = r
    }, {
        179: 179
    }],
    181: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t(t) {
                this.languageCode = t
            }
            return (t.prototype.getLanguageCode = function() {
                return this.languageCode
            }, t.toString = function() {
                return "LANGUAGE_CHANGED_EVENT"
            }, t)
        }();
        e.exports = n
    }, {}],
    182: [function(t, e, i) {
        "use strict";
        var n = t(281),
            r = n.of("LanguageCodes"),
            o = function() {
                function t() {}
                return (t.getIso639_1LanguageCode = function(e) {
                    for (var i = 0; i < t.LANGUAGE_MAP.length; ++i) {
                        var n = t.LANGUAGE_MAP[i];
                        if (n["iso639-2t"] === e) return n["iso639-1"]
                    }
                    return null
                }, t.getIso639_2tLanguageCode = function(e) {
                    for (var i = 0; i < t.LANGUAGE_MAP.length; ++i) {
                        var n = t.LANGUAGE_MAP[i];
                        if (n["iso639-1"] === e) return n["iso639-2t"]
                    }
                    return null
                }, t.getLanguageCodeFromLocale = function(t) {
                    return (r(t, "locale").exists(), t = t.replace("_", "-"), t.split("-")[0])
                }, t.LANGUAGE_MAP = [{
                    "iso639-1": "ab",
                    "iso639-2t": "abk"
                }, {
                    "iso639-1": "aa",
                    "iso639-2t": "aar"
                }, {
                    "iso639-1": "af",
                    "iso639-2t": "afr"
                }, {
                    "iso639-1": "ak",
                    "iso639-2t": "aka"
                }, {
                    "iso639-1": "sq",
                    "iso639-2t": "sqi"
                }, {
                    "iso639-1": "am",
                    "iso639-2t": "amh"
                }, {
                    "iso639-1": "ar",
                    "iso639-2t": "ara"
                }, {
                    "iso639-1": "an",
                    "iso639-2t": "arg"
                }, {
                    "iso639-1": "hy",
                    "iso639-2t": "hye"
                }, {
                    "iso639-1": "as",
                    "iso639-2t": "asm"
                }, {
                    "iso639-1": "av",
                    "iso639-2t": "ava"
                }, {
                    "iso639-1": "ae",
                    "iso639-2t": "ave"
                }, {
                    "iso639-1": "ay",
                    "iso639-2t": "aym"
                }, {
                    "iso639-1": "az",
                    "iso639-2t": "aze"
                }, {
                    "iso639-1": "bm",
                    "iso639-2t": "bam"
                }, {
                    "iso639-1": "ba",
                    "iso639-2t": "bak"
                }, {
                    "iso639-1": "eu",
                    "iso639-2t": "eus"
                }, {
                    "iso639-1": "be",
                    "iso639-2t": "bel"
                }, {
                    "iso639-1": "bn",
                    "iso639-2t": "ben"
                }, {
                    "iso639-1": "bh",
                    "iso639-2t": "bih"
                }, {
                    "iso639-1": "bi",
                    "iso639-2t": "bis"
                }, {
                    "iso639-1": "bs",
                    "iso639-2t": "bos"
                }, {
                    "iso639-1": "br",
                    "iso639-2t": "bre"
                }, {
                    "iso639-1": "bg",
                    "iso639-2t": "bul"
                }, {
                    "iso639-1": "my",
                    "iso639-2t": "mya"
                }, {
                    "iso639-1": "ca",
                    "iso639-2t": "cat"
                }, {
                    "iso639-1": "ch",
                    "iso639-2t": "cha"
                }, {
                    "iso639-1": "ce",
                    "iso639-2t": "che"
                }, {
                    "iso639-1": "ny",
                    "iso639-2t": "nya"
                }, {
                    "iso639-1": "zh",
                    "iso639-2t": "zho"
                }, {
                    "iso639-1": "cv",
                    "iso639-2t": "chv"
                }, {
                    "iso639-1": "kw",
                    "iso639-2t": "cor"
                }, {
                    "iso639-1": "co",
                    "iso639-2t": "cos"
                }, {
                    "iso639-1": "cr",
                    "iso639-2t": "cre"
                }, {
                    "iso639-1": "hr",
                    "iso639-2t": "hrv"
                }, {
                    "iso639-1": "cs",
                    "iso639-2t": "ces"
                }, {
                    "iso639-1": "da",
                    "iso639-2t": "dan"
                }, {
                    "iso639-1": "dv",
                    "iso639-2t": "div"
                }, {
                    "iso639-1": "nl",
                    "iso639-2t": "nld"
                }, {
                    "iso639-1": "dz",
                    "iso639-2t": "dzo"
                }, {
                    "iso639-1": "en",
                    "iso639-2t": "eng"
                }, {
                    "iso639-1": "eo",
                    "iso639-2t": "epo"
                }, {
                    "iso639-1": "et",
                    "iso639-2t": "est"
                }, {
                    "iso639-1": "ee",
                    "iso639-2t": "ewe"
                }, {
                    "iso639-1": "fo",
                    "iso639-2t": "fao"
                }, {
                    "iso639-1": "fj",
                    "iso639-2t": "fij"
                }, {
                    "iso639-1": "fi",
                    "iso639-2t": "fin"
                }, {
                    "iso639-1": "fr",
                    "iso639-2t": "fra"
                }, {
                    "iso639-1": "ff",
                    "iso639-2t": "ful"
                }, {
                    "iso639-1": "gl",
                    "iso639-2t": "glg"
                }, {
                    "iso639-1": "ka",
                    "iso639-2t": "kat"
                }, {
                    "iso639-1": "de",
                    "iso639-2t": "deu"
                }, {
                    "iso639-1": "el",
                    "iso639-2t": "ell"
                }, {
                    "iso639-1": "gn",
                    "iso639-2t": "grn"
                }, {
                    "iso639-1": "gu",
                    "iso639-2t": "guj"
                }, {
                    "iso639-1": "ht",
                    "iso639-2t": "hat"
                }, {
                    "iso639-1": "ha",
                    "iso639-2t": "hau"
                }, {
                    "iso639-1": "he",
                    "iso639-2t": "heb"
                }, {
                    "iso639-1": "hz",
                    "iso639-2t": "her"
                }, {
                    "iso639-1": "hi",
                    "iso639-2t": "hin"
                }, {
                    "iso639-1": "ho",
                    "iso639-2t": "hmo"
                }, {
                    "iso639-1": "hu",
                    "iso639-2t": "hun"
                }, {
                    "iso639-1": "ia",
                    "iso639-2t": "ina"
                }, {
                    "iso639-1": "id",
                    "iso639-2t": "ind"
                }, {
                    "iso639-1": "ie",
                    "iso639-2t": "ile"
                }, {
                    "iso639-1": "ga",
                    "iso639-2t": "gle"
                }, {
                    "iso639-1": "ig",
                    "iso639-2t": "ibo"
                }, {
                    "iso639-1": "ik",
                    "iso639-2t": "ipk"
                }, {
                    "iso639-1": "io",
                    "iso639-2t": "ido"
                }, {
                    "iso639-1": "is",
                    "iso639-2t": "isl"
                }, {
                    "iso639-1": "it",
                    "iso639-2t": "ita"
                }, {
                    "iso639-1": "iu",
                    "iso639-2t": "iku"
                }, {
                    "iso639-1": "ja",
                    "iso639-2t": "jpn"
                }, {
                    "iso639-1": "jv",
                    "iso639-2t": "jav"
                }, {
                    "iso639-1": "kl",
                    "iso639-2t": "kal"
                }, {
                    "iso639-1": "kn",
                    "iso639-2t": "kan"
                }, {
                    "iso639-1": "kr",
                    "iso639-2t": "kau"
                }, {
                    "iso639-1": "ks",
                    "iso639-2t": "kas"
                }, {
                    "iso639-1": "kk",
                    "iso639-2t": "kaz"
                }, {
                    "iso639-1": "km",
                    "iso639-2t": "khm"
                }, {
                    "iso639-1": "ki",
                    "iso639-2t": "kik"
                }, {
                    "iso639-1": "rw",
                    "iso639-2t": "kin"
                }, {
                    "iso639-1": "ky",
                    "iso639-2t": "kir"
                }, {
                    "iso639-1": "kv",
                    "iso639-2t": "kom"
                }, {
                    "iso639-1": "kg",
                    "iso639-2t": "kon"
                }, {
                    "iso639-1": "ko",
                    "iso639-2t": "kor"
                }, {
                    "iso639-1": "ku",
                    "iso639-2t": "kur"
                }, {
                    "iso639-1": "kj",
                    "iso639-2t": "kua"
                }, {
                    "iso639-1": "la",
                    "iso639-2t": "lat"
                }, {
                    "iso639-1": "lb",
                    "iso639-2t": "ltz"
                }, {
                    "iso639-1": "lg",
                    "iso639-2t": "lug"
                }, {
                    "iso639-1": "li",
                    "iso639-2t": "lim"
                }, {
                    "iso639-1": "ln",
                    "iso639-2t": "lin"
                }, {
                    "iso639-1": "lo",
                    "iso639-2t": "lao"
                }, {
                    "iso639-1": "lt",
                    "iso639-2t": "lit"
                }, {
                    "iso639-1": "lu",
                    "iso639-2t": "lub"
                }, {
                    "iso639-1": "lv",
                    "iso639-2t": "lav"
                }, {
                    "iso639-1": "gv",
                    "iso639-2t": "glv"
                }, {
                    "iso639-1": "mk",
                    "iso639-2t": "mkd"
                }, {
                    "iso639-1": "mg",
                    "iso639-2t": "mlg"
                }, {
                    "iso639-1": "ms",
                    "iso639-2t": "msa"
                }, {
                    "iso639-1": "ml",
                    "iso639-2t": "mal"
                }, {
                    "iso639-1": "mt",
                    "iso639-2t": "mlt"
                }, {
                    "iso639-1": "mi",
                    "iso639-2t": "mri"
                }, {
                    "iso639-1": "mr",
                    "iso639-2t": "mar"
                }, {
                    "iso639-1": "mh",
                    "iso639-2t": "mah"
                }, {
                    "iso639-1": "mn",
                    "iso639-2t": "mon"
                }, {
                    "iso639-1": "na",
                    "iso639-2t": "nau"
                }, {
                    "iso639-1": "nv",
                    "iso639-2t": "nav"
                }, {
                    "iso639-1": "nd",
                    "iso639-2t": "nde"
                }, {
                    "iso639-1": "ne",
                    "iso639-2t": "nep"
                }, {
                    "iso639-1": "ng",
                    "iso639-2t": "ndo"
                }, {
                    "iso639-1": "nb",
                    "iso639-2t": "nob"
                }, {
                    "iso639-1": "nn",
                    "iso639-2t": "nno"
                }, {
                    "iso639-1": "no",
                    "iso639-2t": "nor"
                }, {
                    "iso639-1": "ii",
                    "iso639-2t": "iii"
                }, {
                    "iso639-1": "nr",
                    "iso639-2t": "nbl"
                }, {
                    "iso639-1": "oc",
                    "iso639-2t": "oci"
                }, {
                    "iso639-1": "oj",
                    "iso639-2t": "oji"
                }, {
                    "iso639-1": "cu",
                    "iso639-2t": "chu"
                }, {
                    "iso639-1": "om",
                    "iso639-2t": "orm"
                }, {
                    "iso639-1": "or",
                    "iso639-2t": "ori"
                }, {
                    "iso639-1": "os",
                    "iso639-2t": "oss"
                }, {
                    "iso639-1": "pa",
                    "iso639-2t": "pan"
                }, {
                    "iso639-1": "pi",
                    "iso639-2t": "pli"
                }, {
                    "iso639-1": "fa",
                    "iso639-2t": "fas"
                }, {
                    "iso639-1": "pl",
                    "iso639-2t": "pol"
                }, {
                    "iso639-1": "ps",
                    "iso639-2t": "pus"
                }, {
                    "iso639-1": "pt",
                    "iso639-2t": "por"
                }, {
                    "iso639-1": "qu",
                    "iso639-2t": "que"
                }, {
                    "iso639-1": "rm",
                    "iso639-2t": "roh"
                }, {
                    "iso639-1": "rn",
                    "iso639-2t": "run"
                }, {
                    "iso639-1": "ro",
                    "iso639-2t": "ron"
                }, {
                    "iso639-1": "ru",
                    "iso639-2t": "rus"
                }, {
                    "iso639-1": "sa",
                    "iso639-2t": "san"
                }, {
                    "iso639-1": "sc",
                    "iso639-2t": "srd"
                }, {
                    "iso639-1": "sd",
                    "iso639-2t": "snd"
                }, {
                    "iso639-1": "se",
                    "iso639-2t": "sme"
                }, {
                    "iso639-1": "sm",
                    "iso639-2t": "smo"
                }, {
                    "iso639-1": "sg",
                    "iso639-2t": "sag"
                }, {
                    "iso639-1": "sr",
                    "iso639-2t": "srp"
                }, {
                    "iso639-1": "gd",
                    "iso639-2t": "gla"
                }, {
                    "iso639-1": "sn",
                    "iso639-2t": "sna"
                }, {
                    "iso639-1": "si",
                    "iso639-2t": "sin"
                }, {
                    "iso639-1": "sk",
                    "iso639-2t": "slk"
                }, {
                    "iso639-1": "sl",
                    "iso639-2t": "slv"
                }, {
                    "iso639-1": "so",
                    "iso639-2t": "som"
                }, {
                    "iso639-1": "st",
                    "iso639-2t": "sot"
                }, {
                    "iso639-1": "es",
                    "iso639-2t": "spa"
                }, {
                    "iso639-1": "su",
                    "iso639-2t": "sun"
                }, {
                    "iso639-1": "sw",
                    "iso639-2t": "swa"
                }, {
                    "iso639-1": "ss",
                    "iso639-2t": "ssw"
                }, {
                    "iso639-1": "sv",
                    "iso639-2t": "swe"
                }, {
                    "iso639-1": "ta",
                    "iso639-2t": "tam"
                }, {
                    "iso639-1": "te",
                    "iso639-2t": "tel"
                }, {
                    "iso639-1": "tg",
                    "iso639-2t": "tgk"
                }, {
                    "iso639-1": "th",
                    "iso639-2t": "tha"
                }, {
                    "iso639-1": "ti",
                    "iso639-2t": "tir"
                }, {
                    "iso639-1": "bo",
                    "iso639-2t": "bod"
                }, {
                    "iso639-1": "tk",
                    "iso639-2t": "tuk"
                }, {
                    "iso639-1": "tl",
                    "iso639-2t": "tgl"
                }, {
                    "iso639-1": "tn",
                    "iso639-2t": "tsn"
                }, {
                    "iso639-1": "to",
                    "iso639-2t": "ton"
                }, {
                    "iso639-1": "tr",
                    "iso639-2t": "tur"
                }, {
                    "iso639-1": "ts",
                    "iso639-2t": "tso"
                }, {
                    "iso639-1": "tt",
                    "iso639-2t": "tat"
                }, {
                    "iso639-1": "tw",
                    "iso639-2t": "twi"
                }, {
                    "iso639-1": "ty",
                    "iso639-2t": "tah"
                }, {
                    "iso639-1": "ug",
                    "iso639-2t": "uig"
                }, {
                    "iso639-1": "uk",
                    "iso639-2t": "ukr"
                }, {
                    "iso639-1": "ur",
                    "iso639-2t": "urd"
                }, {
                    "iso639-1": "uz",
                    "iso639-2t": "uzb"
                }, {
                    "iso639-1": "ve",
                    "iso639-2t": "ven"
                }, {
                    "iso639-1": "vi",
                    "iso639-2t": "vie"
                }, {
                    "iso639-1": "vo",
                    "iso639-2t": "vol"
                }, {
                    "iso639-1": "wa",
                    "iso639-2t": "wln"
                }, {
                    "iso639-1": "cy",
                    "iso639-2t": "cym"
                }, {
                    "iso639-1": "wo",
                    "iso639-2t": "wol"
                }, {
                    "iso639-1": "fy",
                    "iso639-2t": "fry"
                }, {
                    "iso639-1": "xh",
                    "iso639-2t": "xho"
                }, {
                    "iso639-1": "yi",
                    "iso639-2t": "yid"
                }, {
                    "iso639-1": "yo",
                    "iso639-2t": "yor"
                }, {
                    "iso639-1": "za",
                    "iso639-2t": "zha"
                }, {
                    "iso639-1": "zu",
                    "iso639-2t": "zul"
                }], t)
            }();
        e.exports = o
    }, {
        281: 281
    }],
    183: [function(t, e, i) {
        "use strict";
        var n, r = t(80),
            o = r.MarketplaceID,
            s = t(93),
            a = t(281),
            l = t(182),
            c = a.of("Locales"),
            u = function() {
                function t() {}
                return (t.getStandardizedLocale = function(e) {
                    if (s.isNullOrUndefined(e)) return null;
                    var i = t[e.replace("-", "_").toUpperCase()];
                    return s.withDefault(i, null)
                }, t.getLocaleFromMarketplaceId = function(e) {
                    c(e, "marketplaceId").exists();
                    var i = t.MARKETPLACE_LOCALE_MAP[e];
                    return s.withDefault(i, null)
                }, t.getClosestLocale = function(t, e) {
                    c(t, "requestedLocale").exists(), c(e, "availableLocales").exists(), c(e, "availableLocales").is.not.empty();
                    for (var i = l.getLanguageCodeFromLocale(t), n = null, r = 0; r < e.length; ++r) {
                        var o = e[r],
                            s = l.getLanguageCodeFromLocale(o);
                        if (t === o) return o;
                        null === n && (n = i === s ? o : null)
                    }
                    return n
                }, t.DA_DK = "da-DK", t.DE_DE = "de-DE", t.EN_GB = "en-GB", t.EN_US = "en-US", t.ES_ES = "es-ES", t.ES_MX = "es-MX", t.FI_FI = "fi-FI", t.FR_FR = "fr-FR", t.HI_IN = "hi-IN", t.ID_ID = "id-ID", t.IT_IT = "it-IT", t.JA_JP = "ja-JP", t.NB_NO = "nb-NO", t.NL_NL = "nl-NL", t.PL_PL = "pl-PL", t.PT_BR = "pt-BR", t.RU_RU = "ru-RU", t.SV_SE = "sv-SE", t.TA_IN = "ta-IN", t.TE_IN = "te-IN", t.TR_TR = "tr-TR", t.ZH_CN = "zh-CN", t.ZH_TW = "zh-TW", t.MARKETPLACE_LOCALE_MAP = (n = {}, n[o.US] = t.EN_US, n[o.UK] = t.EN_GB, n[o.DE] = t.DE_DE, n[o.JP] = t.JA_JP, n), t)
            }();
        e.exports = u
    }, {
        182: 182,
        281: 281,
        80: 80,
        93: 93
    }],
    184: [function(t, e, i) {
        "use strict";
        var n = t(250),
            r = t(284),
            o = t(93),
            s = n.ScriptType,
            a = n.TransparentCachingScriptLoader,
            l = t(294),
            c = r.get("LocalizationAcquirer"),
            u = function() {
                function t(t) {
                    void 0 === t && (t = new a), this.loader = t
                }
                return (t.prototype.initialize = function(t, e, i, n) {
                    void 0 === n && (n = !0), this.version = t, this.name = e, this.sources = i, this.cacheEnabled = n, this.cacheEnabled || c.info("Localization caching disabled for " + this.name + ".")
                }, t.prototype.acquire = function(e, i, n) {
                    if (l.isEmpty(this.sources)) return void n(new Error(t.NO_SOURCES_ERROR));
                    if (o.isNullOrUndefined(this.version)) return void n(new Error(t.NO_VERSION_ERROR));
                    var r = this.sources[e];
                    if (o.isNullOrUndefined(r)) return void n(new Error("URL not found for " + e));
                    var a = {
                        url: r,
                        name: this.name + "-" + e,
                        type: s.JSON,
                        version: this.version
                    };
                    this.loader.get(a, function(e) {
                        var r = e.payload;
                        return l.isEmpty(r) ? void n(new Error(t.EMPTY_LOCALIZATION_ERROR)) : void i(r, e.totalMs, e.cached)
                    }, function(t) {
                        c.warn("A non-fatal error occurred while trying to download " + e + " at " + r, t)
                    }, n, this.cacheEnabled)
                }, t.EMPTY_LOCALIZATION_ERROR = "Acquired localization object is empty.", t.NO_SOURCES_ERROR = "No sources are defined. LocalizationAcquirer may not have been initialized.", t.NO_VERSION_ERROR = "No version is defined. LocalizationAcquirer may not have been initialized.", t)
            }();
        e.exports = u
    }, {
        250: 250,
        284: 284,
        294: 294,
        93: 93
    }],
    185: [function(t, e, i) {
        "use strict";
        var n = t(82),
            r = n.BasicEventEmitter,
            o = t(181),
            s = t(184),
            a = t(284),
            l = t(93),
            c = t(294),
            u = a.get("LocalizationStore"),
            p = function() {
                function t(t, e, i, n, o, a, l) {
                    void 0 === o && (o = !0), void 0 === a && (a = new s), void 0 === l && (l = new r);
                    var p = this;
                    this.loadedLanguages = {}, this.localizationAcquirer = a, this.eventEmitter = l;
                    var h = {};
                    c.chain(i).keys().forEach(function(t) {
                        c.isString(i[t]) ? h[t] = i[t] : p.loadedLanguages[t] = i[t]
                    }), this.localizationAcquirer.initialize(t, e, h, o), u.info("Pre-loaded languages: " + c.keys(this.loadedLanguages).join(", ")), u.info("Not loaded languages: " + c.keys(h).join(", ")), c.isEmpty(n) || (c.contains(c.keys(this.loadedLanguages), n) ? (this.defaultLanguageCode = n, u.info("Default language code set to " + this.defaultLanguageCode + ".")) : u.warn("Default language code set to " + n + " but will be ignored because its localization object was not provided."))
                }
                return (t.prototype.setLanguage = function(t, e, i) {
                    var n = this;
                    return l.exists(this.loadedLanguages[t]) ? void this.onAcquireSuccess(t, this.loadedLanguages[t], 0, !0, e) : void this.localizationAcquirer.acquire(t, function(i, r, o) {
                        n.onAcquireSuccess(t, i, r, o, e)
                    }, function(r) {
                        n.onAcquireError(t, r, e, i)
                    })
                }, t.prototype.getLocalization = function() {
                    return this.loadedLanguages[this.currentLanguageCode]
                }, t.prototype.getCurrentLanguage = function() {
                    return this.currentLanguageCode
                }, t.prototype.onLanguageChanged = function(t) {
                    this.eventEmitter.on(o, t)
                }, t.prototype.offLanguageChanged = function(t) {
                    this.eventEmitter.off(o, t)
                }, t.prototype.onAcquireSuccess = function(t, e, i, n, r) {
                    u.info("Acquired localization for " + t + " in " + i + "ms" + (n ? " from cache" : "") + "."), this.currentLanguageCode = t, this.loadedLanguages[this.currentLanguageCode] = e, this.eventEmitter.emit(o, new o(this.currentLanguageCode)), l.exists(r) && r(e, i, n)
                }, t.prototype.onAcquireError = function(t, e, i, n) {
                    u.error("An error occurred while trying to acquire " + t + ".", e), l.exists(n) && n(e), l.isNullOrUndefined(this.currentLanguageCode) && !c.isEmpty(this.defaultLanguageCode) && (u.info("Falling back to " + this.defaultLanguageCode + "."), this.setLanguage(this.defaultLanguageCode, i, n))
                }, t)
            }();
        e.exports = p
    }, {
        181: 181,
        184: 184,
        284: 284,
        294: 294,
        82: 82,
        93: 93
    }],
    186: [function(t, e, i) {
        "use strict";
        var n = t(181),
            r = t(182),
            o = t(183),
            s = t(185),
            a = {
                LanguageChangedEvent: n,
                LanguageCodes: r,
                Locales: o,
                LocalizationStore: s
            };
        e.exports = a
    }, {
        181: 181,
        182: 182,
        183: 183,
        185: 185
    }],
    187: [function(t, e, i) {
        "use strict";
        var n = t(281),
            r = t(284),
            o = t(188),
            s = n.of("Metrics"),
            a = r.get("Metrics"),
            l = function() {
                function t() {}
                return (t.setHandler = function(e) {
                    t.handler = s(e, "handler").exists()
                }, t.setFlusher = function(e) {
                    t.flusher = s(e, "flusher").exists()
                }, t.putMetric = function(e, i, n) {
                    s(e, "name").exists();
                    try {
                        t.handler(e, i, n)
                    } catch (t) {
                        a.error("An error occurred while publishing metric " + e + ": " + t.name + ": " + t.message, t)
                    }
                }, t.flush = function() {
                    try {
                        t.flusher()
                    } catch (t) {
                        a.error("An error occurred while flushing metrics", t)
                    }
                }, t.startTimer = function(e) {
                    return new o(t, e)
                }, t.MILLISECONDS = "ms", t.handler = function() {}, t.flusher = function() {}, t)
            }();
        e.exports = l
    }, {
        188: 188,
        281: 281,
        284: 284
    }],
    188: [function(t, e, i) {
        "use strict";
        var n = t(281),
            r = t(284),
            o = n.of("Timer"),
            s = r.get("Timer"),
            a = function() {
                function t(e, i) {
                    this.metrics = o(e, "metrics").exists(), this.metricName = o(i, "metricName").exists(), this.startTime = t.now(), this.elapsedTime = null
                }
                return (t.prototype.end = function() {
                    if (null === this.elapsedTime) {
                        this.elapsedTime = t.now() - this.startTime;
                        try {
                            this.metrics.putMetric(this.metricName, this.elapsedTime, t.UNIT)
                        } catch (t) {
                            s.error("An error occurred while stopping the timer for metric " + this.metricName + ": " + t.name + ": " + t.message, t)
                        }
                        s.info(this.metricName + " was " + this.elapsedTime + " " + t.UNIT)
                    }
                    return this.elapsedTime
                }, t.UNIT = "ms", t.now = "undefined" != typeof Date.now ? Date.now : function() {
                    return (new Date).getTime()
                }, t)
            }();
        e.exports = a
    }, {
        281: 281,
        284: 284
    }],
    189: [function(t, e, i) {
        "use strict";
        var n = t(93),
            r = t(281),
            o = t(294),
            s = r.of("NotificationManager"),
            a = function() {
                function t() {
                    this.initialized = !1
                }
                return (t.prototype.initialize = function(t, e, i) {
                    void 0 === i && (i = 1), s(!this.initialized, "!this.initialized").is["true"](), this.onShowNotification = s(t, "onShowNotification").exists(), this.onCloseNotification = s(e, "onCloseNotification").exists(), this.currentNotifications = [], this.maxNotificationsAtOnce = i, this.queuedNotifications = [], this.initialized = !0
                }, t.prototype.addNotification = function(t, e) {
                    void 0 === e && (e = !0), s(this.initialized, "this.initialized").is["true"](), s(t, "notification").exists(), this.queuedNotifications.push(t), e && this.runNotification()
                }, t.prototype.hasQueuedNotifications = function() {
                    return 0 !== this.queuedNotifications.length
                }, t.prototype.showQueuedNotifications = function() {
                    this.runNotification()
                }, t.prototype.cancelNotification = function(t) {
                    var e = this;
                    s(this.initialized, "this.initialized").is["true"](), s(t, "notification").exists();
                    var i = o.some(this.currentNotifications, function(i) {
                        if (i.notification === t) return (e.closeNotification(t), !0)
                    });
                    i || o.some(this.queuedNotifications, function(i, n) {
                        if (i === t) return (e.queuedNotifications.splice(n, 1), !0)
                    })
                }, t.prototype.closeNotification = function(t) {
                    o.some(this.currentNotifications, function(e) {
                        if (e.notification === t && !n.isNullOrUndefined(e.timeoutID)) return (clearTimeout(e.timeoutID), !0)
                    }), this.runNextNotification(t)
                }, t.prototype.runNotification = function() {
                    var t = this;
                    if (this.currentNotifications.length !== this.maxNotificationsAtOnce) {
                        var e = {
                            notification: this.queuedNotifications.shift()
                        };
                        n.isNullOrUndefined(e.notification) || (this.currentNotifications.push(e),
                            this.onShowNotification(e.notification), n.exists(e.notification.getDisplayTimeSeconds()) && (e.timeoutID = setTimeout(function() {
                                t.runNextNotification(e.notification)
                            }, 1e3 * e.notification.getDisplayTimeSeconds())))
                    }
                }, t.prototype.runNextNotification = function(t) {
                    var e = this;
                    this.onCloseNotification(t), o.some(this.currentNotifications, function(i, n) {
                        if (i.notification === t) return (e.currentNotifications.splice(n, 1), !0)
                    }), this.queuedNotifications.length > 0 && this.runNotification()
                }, t)
            }();
        e.exports = a
    }, {
        281: 281,
        294: 294,
        93: 93
    }],
    190: [function(t, e, i) {
        "use strict";
        var n = t(189),
            r = {
                NotificationManager: n
            };
        e.exports = r
    }, {
        189: 189
    }],
    191: [function(t, e, i) {
        "use strict";
        var n = t(93),
            r = t(294),
            o = function() {
                function t() {}
                return (t.prototype.convert = function(t) {
                    for (var e = t.avCdnUrlSets, i = {}, o = r.isEmpty(e) ? null : e[0].urlSetId, s = r.isEmpty(e) ? null : e[0].avUrlInfoList[0].cacheKey, a = 0; a < e.length; a++) {
                        var l = e[a],
                            c = l.urlSetId,
                            u = n.withDefault(e[a + 1], e[0]).urlSetId;
                        i[c] = {
                            urlSetId: c,
                            urls: {
                                manifest: {
                                    url: l.avUrlInfoList[0].url,
                                    audioFormat: null,
                                    videoQuality: l.avUrlInfoList[0].videoQuality,
                                    audioTrackId: l.audioTrackId,
                                    cdn: l.cdn,
                                    origin: l.avUrlInfoList[0].origin,
                                    drm: l.drm,
                                    dynamicRange: l.hdrFormat,
                                    compressionStandard: l.encode,
                                    streamingTechnology: l.streamingTechnology
                                },
                                adsTrackingEndpoint: l.avUrlInfoList[0].adsTrackingEndpoint
                            },
                            failover: {
                                cdn: {
                                    urlSetId: u,
                                    mode: "seamless"
                                },
                                "default": {
                                    urlSetId: u,
                                    mode: "seamless"
                                }
                            }
                        }
                    }
                    return {
                        audioTracks: t.audioTrackMetadata,
                        cacheKey: s,
                        defaultAudioTrackId: t.defaultAudioTrackId,
                        defaultUrlSetId: o,
                        urlSets: i
                    }
                }, t)
            }();
        e.exports = o
    }, {
        294: 294,
        93: 93
    }],
    192: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t() {}
            return (t.AD_SUPPORTED_ENTITLEMENT_TYPE_ERROR = "AdSupportedEntitlementTypeError", t.MISSING_PLAYBACK_RESOURCE_ERROR = "MissingPlaybackResourceError", t.NO_URL_SET_ERROR = "NoUrlSetError", t.PAYMENT_FAILURE_ERROR = "PaymentFailureError", t.UNHANDLED_PLAYBACK_RESOURCE_ERROR = "UnhandledPlaybackResourceError", t)
        }();
        e.exports = n
    }, {}],
    193: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n;
        ! function(t) {
            t[t.asin = 0] = "asin", t[t.audioTrackId = 1] = "audioTrackId", t[t.clientId = 2] = "clientId", t[t.consumptionType = 3] = "consumptionType", t[t.customerID = 4] = "customerID", t[t.desiredAudioQuality = 5] = "desiredAudioQuality", t[t.desiredResources = 6] = "desiredResources", t[t.deviceAudioQualityOverride = 7] = "deviceAudioQualityOverride", t[t.deviceBitrateAdaptationsOverride = 8] = "deviceBitrateAdaptationsOverride", t[t.deviceDrmOverride = 9] = "deviceDrmOverride", t[t.deviceID = 10] = "deviceID", t[t.deviceProtocolOverride = 11] = "deviceProtocolOverride", t[t.deviceStreamingTechnologyOverride = 12] = "deviceStreamingTechnologyOverride", t[t.deviceTypeID = 13] = "deviceTypeID", t[t.deviceVideoCodecOverride = 14] = "deviceVideoCodecOverride", t[t.deviceVideoQualityOverride = 15] = "deviceVideoQualityOverride", t[t.firmware = 16] = "firmware", t[t.gascEnabled = 17] = "gascEnabled", t[t.languageFeature = 18] = "languageFeature", t[t.linearRestrictionEnd = 19] = "linearRestrictionEnd", t[t.linearRestrictionStart = 20] = "linearRestrictionStart", t[t.liveManifestType = 21] = "liveManifestType", t[t.liveScheduleConfigToken = 22] = "liveScheduleConfigToken", t[t.marketplaceID = 23] = "marketplaceID", t[t.operatingSystemName = 24] = "operatingSystemName", t[t.operatingSystemVersion = 25] = "operatingSystemVersion", t[t.playbackSettingsFormatVersion = 26] = "playbackSettingsFormatVersion", t[t.resourceUsage = 27] = "resourceUsage", t[t.siteSectionId = 28] = "siteSectionId", t[t.subtitleFormat = 29] = "subtitleFormat", t[t.supportedDRMKeyScheme = 30] = "supportedDRMKeyScheme", t[t.titleDecorationScheme = 31] = "titleDecorationScheme", t[t.token = 32] = "token", t[t.userWatchSessionId = 33] = "userWatchSessionId", t[t.uxLocale = 34] = "uxLocale", t[t.videoMaterialType = 35] = "videoMaterialType", t[t.videoMinBitrate = 36] = "videoMinBitrate", t[t.xrayDeviceClass = 37] = "xrayDeviceClass", t[t.xrayPlaybackMode = 38] = "xrayPlaybackMode", t[t.xrayToken = 39] = "xrayToken"
        }(n = i.QueryStringParameter || (i.QueryStringParameter = {}));
        var r;
        ! function(t) {
            t[t.playReadyChallenge = 0] = "playReadyChallenge", t[t.playReadyKeyId = 1] = "playReadyKeyId", t[t.fairPlayChallenge = 2] = "fairPlayChallenge", t[t.fairPlayKeyId = 3] = "fairPlayKeyId", t[t.widevine2Challenge = 4] = "widevine2Challenge", t[t.includeHdcpTestKeyInLicense = 5] = "includeHdcpTestKeyInLicense"
        }(r = i.PostBodyParameter || (i.PostBodyParameter = {}));
        var o;
        ! function(t) {
            t[t.AudioVideoUrls = 0] = "AudioVideoUrls", t[t.CatalogMetadata = 1] = "CatalogMetadata", t[t.CuepointPlaylist = 2] = "CuepointPlaylist", t[t.DevicePlaybackConfiguration = 3] = "DevicePlaybackConfiguration", t[t.FairPlayApplicationCertificate = 4] = "FairPlayApplicationCertificate", t[t.FairPlayLicense = 5] = "FairPlayLicense", t[t.ForcedNarratives = 6] = "ForcedNarratives", t[t.LinearRestrictions = 7] = "LinearRestrictions", t[t.LiveSchedule = 8] = "LiveSchedule", t[t.PlaybackSettings = 9] = "PlaybackSettings", t[t.PlaybackUrls = 10] = "PlaybackUrls", t[t.PlayReadyLicense = 11] = "PlayReadyLicense", t[t.SubtitlePresets = 12] = "SubtitlePresets", t[t.SubtitleUrls = 13] = "SubtitleUrls", t[t.TransitionTimecodes = 14] = "TransitionTimecodes", t[t.TrickplayUrls = 15] = "TrickplayUrls", t[t.Widevine2License = 16] = "Widevine2License", t[t.WhisperSyncBookmark = 17] = "WhisperSyncBookmark", t[t.XRayMetadata = 18] = "XRayMetadata"
        }(o = i.DesiredResources || (i.DesiredResources = {}));
        var s;
        ! function(t) {
            t[t.ImmediateConsumption = 0] = "ImmediateConsumption", t[t.CacheResources = 1] = "CacheResources", t[t.OptimisticFulfillment = 2] = "OptimisticFulfillment"
        }(s = i.ResourceUsage || (i.ResourceUsage = {}));
        var a;
        ! function(t) {
            t[t.Feature = 0] = "Feature", t[t.Trailer = 1] = "Trailer", t[t.LiveStreaming = 2] = "LiveStreaming", t[t.External = 3] = "External", t[t.VideoAds = 4] = "VideoAds"
        }(a = i.VideoMaterialType || (i.VideoMaterialType = {}));
        var l;
        ! function(t) {
            t[t.TTML = 0] = "TTML", t[t.TTMLv2 = 1] = "TTMLv2"
        }(l = i.SubtitleFormat || (i.SubtitleFormat = {}));
        var c;
        ! function(t) {
            t[t.MLFv2 = 0] = "MLFv2"
        }(c = i.LanguageFeature || (i.LanguageFeature = {}))
    }, {}],
    194: [function(t, e, i) {
        "use strict";
        var n = t(281),
            r = t(93),
            o = t(196),
            s = n.of("PlaybackResourceClient"),
            a = function() {
                function t(e, i, n, a, l, c, u) {
                    void 0 === u && (u = o), this.deviceId = s(e, "deviceId").exists(), this.deviceTypeId = s(i, "deviceTypeId").exists(), this.marketplaceId = s(n, "marketplaceId").exists(), s(a, "partnerServiceUrl").exists(), r.exists(l) && (s(l.customerId).exists(), this.authContext = l), r.exists(c) && (this.clientId = c), this.url = a.replace(//$/, "") + t.SERVICE_ENDPOINT, this.playbackResourceRequestType = u
                }
                return (t.prototype.createRequest = function(t, e, i, n, r, o) {
                    s(t, "asin").exists(), s(e, "consumptionType").exists(), s(i, "desiredResources").exists(), s(i.length > 0, "desiredResources.length > 0").is["true"](), s(n, "resourceUsage").exists(), s(r, "videoMaterialType").exists(), s(o, "userWatchSessionId").exists();
                    var a = {
                        asin: t,
                        consumptionType: e,
                        desiredResources: i,
                        deviceId: this.deviceId,
                        deviceTypeId: this.deviceTypeId,
                        marketplaceId: this.marketplaceId,
                        resourceUsage: n,
                        userWatchSessionId: o,
                        videoMaterialType: r
                    };
                    return new this.playbackResourceRequestType(a, this.url, this.authContext, this.clientId)
                }, t.SERVICE_ENDPOINT = "/cdp/catalog/GetPlaybackResources", t)
            }();
        e.exports = a
    }, {
        196: 196,
        281: 281,
        93: 93
    }],
    195: [function(t, e, i) {
        "use strict";
        var n = t(159),
            r = t(93),
            o = t(200),
            s = t(294),
            a = function() {
                function t() {}
                return (t.createError = function(e) {
                    var i = o.PRSError,
                        s = t.ERROR_MAPPING[e.type];
                    r.isNullOrUndefined(s) || (i = s);
                    var a = t.ERROR_CODE_MAPPING[e.errorCode];
                    r.isNullOrUndefined(a) || (i = a);
                    var l = n.newError(o[i], e.message);
                    return (l.errorCode = e.errorCode, r.exists(e.downstreamReason) && (l.downstreamReason = e.downstreamReason), l)
                }, t.createPRSError = function(t, e) {
                    return n.newError(o[o.PRSError], t, e)
                }, t.convertResourceExceptions = function(e) {
                    return r.isNullOrUndefined(e) ? e : s.object(s.map(e, function(e, i) {
                        return [i, t.createError(e)]
                    }))
                }, t.convertRightsException = function(e) {
                    if (r.isNullOrUndefined(e)) return e;
                    var i = r.nestedValue(e, "selectedEntitlement.rightsException");
                    return (null !== i && (e.selectedEntitlement.rightsException = t.createError(i)), e)
                }, t.ERROR_MAPPING = {
                    PRSConcurrencyException: o.PRSConcurrencyError,
                    PRSGeoIpException: o.PRSGeoIpError,
                    PRSOwnershipException: o.PRSOwnershipError,
                    PRSException: o.PRSError,
                    PRSDependencyException: o.PRSError,
                    PRSInvalidRequestException: o.PRSError,
                    PRSRightsAndPoliciesException: o.PRSError,
                    PRSWidevine2LicenseDeniedException: o.PRSError
                }, t.ERROR_CODE_MAPPING = {
                    "PRS.NoRights.AnonymizerIP": o.PRSHttpProxyError
                }, t)
            }();
        e.exports = a
    }, {
        159: 159,
        200: 200,
        294: 294,
        93: 93
    }],
    196: [function(t, e, i) {
        "use strict";
        var n = t(58),
            r = n.TokenType,
            o = t(178),
            s = o.HttpRequest,
            a = t(252),
            l = a.ExponentialBackoffRetry,
            c = t(159),
            u = t(203),
            p = u.AudioQuality,
            h = u.BitrateAdaptation,
            f = u.ConsumptionType,
            d = u.ContentProtection,
            y = u.DrmKeyScheme,
            g = u.Protocol,
            m = u.StreamingTechnology,
            v = u.VideoCodec,
            E = u.VideoQuality,
            _ = t(272),
            S = t(80),
            T = S.MarketplaceID,
            b = t(93),
            w = t(281),
            I = t(195),
            R = t(193),
            C = R.DesiredResources,
            P = R.LanguageFeature,
            A = R.PostBodyParameter,
            O = R.QueryStringParameter,
            N = R.ResourceUsage,
            x = R.SubtitleFormat,
            M = R.VideoMaterialType,
            k = t(294),
            L = w.of("PlaybackResourceRequest"),
            D = function() {
                function t(t, e, i, n, r, o, a) {
                    void 0 === r && (r = s), void 0 === o && (o = l), void 0 === a && (a = _.getOperatingSystem()), this.retry = null, this.request = null, L(t, "options").exists(), L(e, "url").exists(), b.exists(i) && (L(i.customerId, "customerId").exists(), this.authContext = i), this.httpRequest = r, this.retryType = o, this.url = e, this.formFields = null, this.queryParams = {}, this.addQueryParam(O.asin, t.asin), this.addQueryParam(O.consumptionType, f[t.consumptionType]), this.addQueryParam(O.desiredResources, t.desiredResources.map(function(t) {
                        return C[t]
                    }).join()), this.addQueryParam(O.deviceID, t.deviceId), this.addQueryParam(O.deviceTypeID, t.deviceTypeId), this.addQueryParam(O.firmware, "1"), this.addQueryParam(O.gascEnabled, !T.isClassic(t.marketplaceId)), this.addQueryParam(O.marketplaceID, t.marketplaceId), this.addQueryParam(O.resourceUsage, N[t.resourceUsage]), this.addQueryParam(O.userWatchSessionId, t.userWatchSessionId), this.addQueryParam(O.videoMaterialType, M[t.videoMaterialType]), b.exists(n) && this.addQueryParam(O.clientId, n);
                    var c = a.getFamilyName();
                    null !== c && this.addQueryParam(O.operatingSystemName, c);
                    var u = a.getKernelVersion();
                    null !== u && this.addQueryParam(O.operatingSystemVersion, u), this.resourceUsage = t.resourceUsage
                }
                return (t.prototype.withAudioTrackId = function(t) {
                    return (L(t, "trackId").exists(), this.addQueryParam(O.audioTrackId, t), this)
                }, t.prototype.withDesiredAudioQuality = function(t) {
                    return (L(t, "audioQuality").exists(), this.addQueryParam(O.desiredAudioQuality, p[t]), this)
                }, t.prototype.withDeviceAudioQualityOverride = function(t) {
                    return (L(t, "deviceAudioQuality").exists(), this.addQueryParam(O.deviceAudioQualityOverride, p[t]), this)
                }, t.prototype.withDeviceBitrateAdaptationsOverride = function(t) {
                    L(t, "deviceBitrateAdaptations").exists(), L(t.length > 0, "deviceBitrateAdaptations").is["true"]();
                    var e = t.map(function(t) {
                        return h[t]
                    });
                    return (this.addQueryParam(O.deviceBitrateAdaptationsOverride, e.join(",")), this)
                }, t.prototype.withDeviceDrmOverride = function(t) {
                    return (L(t, "deviceDrm").exists(), this.addQueryParam(O.deviceDrmOverride, d[t]), this)
                }, t.prototype.withDeviceProtocolOverride = function(t) {
                    return (L(t, "deviceProtocol").exists(), this.addQueryParam(O.deviceProtocolOverride, g[t]), this)
                }, t.prototype.withDeviceStreamingTechnologyOverride = function(t) {
                    return (L(t, "streamingTechnology").exists(), this.addQueryParam(O.deviceStreamingTechnologyOverride, m[t]), this)
                }, t.prototype.withDeviceVideoCodecOverride = function(t) {
                    L(t, "videoCodecs").exists(), L(t.length > 0, "videoCodecs must").is["true"]();
                    var e = t.map(function(t) {
                        return v[t]
                    });
                    return (this.addQueryParam(O.deviceVideoCodecOverride, e.join(",")), this)
                }, t.prototype.withDeviceVideoQualityOverride = function(t) {
                    return (L(t, "deviceVideoQuality").exists(), this.addQueryParam(O.deviceVideoQualityOverride, E[t]), this)
                }, t.prototype.withLiveScheduleConfigToken = function(t) {
                    return (L(t, "token").exists(), this.addQueryParam(O.liveScheduleConfigToken, t), this)
                }, t.prototype.withPlayReadyChallenge = function(t, e) {
                    return (L(t, "challenge").exists(), this.addPostBodyParam(A.playReadyChallenge, t), b.isNullOrUndefined(e) || this.addPostBodyParam(A.playReadyKeyId, e), this)
                }, t.prototype.withFairPlayChallenge = function(t, e) {
                    return (L(t, "challenge").exists(), L(e, "keyId").exists(), this.addPostBodyParam(A.fairPlayChallenge, t), this.addPostBodyParam(A.fairPlayKeyId, e), this)
                }, t.prototype.withWidevine2Challenge = function(t, e) {
                    return (void 0 === e && (e = !1), L(t, "challenge").exists(), this.addPostBodyParam(A.widevine2Challenge, t), this.addPostBodyParam(A.includeHdcpTestKeyInLicense, e), this)
                }, t.prototype.withTitleDecorationScheme = function(t) {
                    return (L(t, "titleDecorationScheme").exists(), this.addQueryParam(O.titleDecorationScheme, t), this)
                }, t.prototype.withUserWatchSessionId = function(t) {
                    return (L(t, "userWatchSessionId").exists(), this.addQueryParam(O.userWatchSessionId, t), this)
                }, t.prototype.withVideoMinBitrate = function(t) {
                    return (L(t, "bitrate").exists(), this.addQueryParam(O.videoMinBitrate, t), this)
                }, t.prototype.withSubtitleFormat = function(t) {
                    return (L(t, "format").exists(), t !== x.TTML && this.addQueryParam(O.subtitleFormat, x[t]), this)
                }, t.prototype.withLanguageFeature = function(t) {
                    return (L(t, "languageFeature").exists(), this.addQueryParam(O.languageFeature, P[t]), this)
                }, t.prototype.withSiteSectionId = function(t) {
                    return (L(t, "siteSectionId").exists(), this.addQueryParam(O.siteSectionId, t), this)
                }, t.prototype.withPlaybackSettingsFormatVersion = function(t) {
                    return (L(t, "formatVersion").exists(), this.addQueryParam(O.playbackSettingsFormatVersion, t), this)
                }, t.prototype.withSupportedDrmKeyScheme = function(t) {
                    return (L(t, "drmKeyScheme").exists(), this.addQueryParam(O.supportedDRMKeyScheme, y[t]), this)
                }, t.prototype.withUxLocale = function(t) {
                    return (L(t, "uxLocale").exists(), this.addQueryParam(O.uxLocale, t.replace("-", "_")), this)
                }, t.prototype.withXrayParameters = function(t, e, i) {
                    return (L(t, "xrayDeviceClass").exists(), L(e, "xrayPlaybackMode").exists(), L(i, "xrayToken").exists(), this.addQueryParam(O.xrayDeviceClass, t), this.addQueryParam(O.xrayPlaybackMode, e), this.addQueryParam(O.xrayToken, i), this)
                }, t.prototype.withLinearRestrictionsWindow = function(t, e) {
                    return (L(this.hasDesiredResource(C.LinearRestrictions), "request has LinearRestrictions").is["true"](), L(t, "startTimeMins").exists(), L(e, "endTimeMins").exists(), L(t < e, "startTimeMins < endTimeMins").is["true"](), this.addQueryParam(O.linearRestrictionStart, t), this.addQueryParam(O.linearRestrictionEnd, e), this)
                }, t.prototype.withLiveManifestTypes = function(t) {
                    return (L(t, "liveManifestTypes").is.not.empty(), this.addQueryParam(O.liveManifestType, t.join(",")), this)
                }, t.prototype.send = function(e, i, n) {
                    var r = this;
                    L(e, "onSuccess").exists(), L(i, "onError").exists(), L(this.request, "request").is["null"](), this.retry = (new this.retryType).withMaxAttempts(t.MAX_ATTEMPTS).withInitialIntervalMs(t.BASE_RETRY).withExponentialFactor(2).withRandomizationFactor(t.JITTER).onSuccess(e).onError(i).onAttempt(function(t, e, i, o) {
                        r.sendRequest(t, e, i, o, n)
                    }).execute()
                }, t.prototype.abort = function() {
                    null !== this.retry && (this.retry.abort(), this.retry = null), null !== this.request && (this.request.abort(), this.request = null)
                }, t.prototype.sendRequest = function(e, i, n, o, s) {
                    var a = this,
                        l = this.resourceUsage === N.ImmediateConsumption ? t.PRIORITY_CRITICAL : t.PRIORITY_BACKGROUND;
                    this.request = this.httpRequest.post(this.url).accept("application/json").timeout(t.HTTP_REQUEST_TIMEOUT_MS).onError(function(e, n) {
                        a.request = null;
                        var r = "Error executing playback resource request.",
                            l = I.createPRSError(r, e);
                        b.isNullOrUndefined(n) || !k.contains(t.UNRETRIABLE_HTTP_ERRORS, n.getStatus()) ? (a.provideMetrics(n, s), i(l)) : (b.exists(n) && 403 === n.getStatus() && (l = c.newAuthenticationError(r)), o(l))
                    }).onLoad(function(e) {
                        a.request = null, a.provideMetrics(e, s);
                        var r = e.getText();
                        if (b.isNullOrUndefined(r)) return void i(I.createPRSError("PlaybackResourceResponse is null or undefined."));
                        var l;
                        try {
                            if (l = JSON.parse(r), b.exists(l.error)) {
                                var c = I.createError(l.error);
                                return void(k.contains(t.RETRIABLE_PRS_ERRORS, l.error.type) ? i(c) : o(c))
                            }
                            l.errorsByResource = I.convertResourceExceptions(l.errorsByResource), l.returnedTitleRendition = I.convertRightsException(l.returnedTitleRendition)
                        } catch (t) {
                            return void i(I.createPRSError("Error parsing json response", t))
                        }
                        n(l)
                    }).onAbort(function(t) {
                        a.request = null
                    }).withCredentials(), 0 !== e && this.request.header(t.RETRY_COUNT_HEADER, "" + e).header(t.REQUEST_PRIORITY_HEADER, l), null !== this.formFields && this.request.fields(this.formFields), b.exists(this.authContext) && b.exists(this.authContext.tokenClient) ? this.authContext.tokenClient.getToken(function(t) {
                        t.type === r.OAUTH && a.request.bearerToken(t.token), a.request.query(a.queryParams).send()
                    }, o) : this.request.query(this.queryParams).send()
                }, t.prototype.provideMetrics = function(t, e) {
                    b.isNullOrUndefined(t) || b.isNullOrUndefined(e) || e({
                        downloadMs: t.getDownloadMs(),
                        latencyMs: t.getLatencyMs(),
                        totalMs: t.getTotalMs()
                    })
                }, t.prototype.addQueryParam = function(t, e) {
                    this.queryParams[O[t]] = e
                }, t.prototype.addPostBodyParam = function(t, e) {
                    null === this.formFields && (this.formFields = {}), this.formFields[A[t]] = e
                }, t.prototype.hasDesiredResource = function(t) {
                    var e = b.withDefault(this.queryParams[O[O.desiredResources]], "");
                    return b.exists(e.match("(^|,)" + C[t] + "($|,)"))
                }, t.MAX_ATTEMPTS = 4, t.JITTER = 200, t.BASE_RETRY = 500, t.UNRETRIABLE_HTTP_ERRORS = [400, 401, 403], t.RETRIABLE_PRS_ERRORS = ["PRSDependencyException"], t.RETRY_COUNT_HEADER = "x-retry-count", t.REQUEST_PRIORITY_HEADER = "x-request-priority", t.PRIORITY_CRITICAL = "CRITICAL", t.PRIORITY_BACKGROUND = "BACKGROUND", t.HTTP_REQUEST_TIMEOUT_MS = 6e3, t)
            }();
        e.exports = D
    }, {
        159: 159,
        178: 178,
        193: 193,
        195: 195,
        203: 203,
        252: 252,
        272: 272,
        281: 281,
        294: 294,
        58: 58,
        80: 80,
        93: 93
    }],
    197: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t() {}
            return (t.AD_SUPPORTED = "AD_SUPPORTED", t.PRIME_SUBSCRIPTION = "PRIME_SUBSCRIPTION", t.THIRD_PARTY_SUBSCRIPTION = "THIRD_PARTY_SUBSCRIPTION", t)
        }();
        e.exports = n
    }, {}],
    198: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t() {}
            return (t.NONE = "HDCP_NONE", t.V1 = "HDCP_V1", t.V2 = "HDCP_V2", t.V2_1 = "HDCP_V2_1", t.V2_2 = "HDCP_V2_2", t)
        }();
        e.exports = n
    }, {}],
    199: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t() {}
            return (t.CONTENT = "CONTENT", t.HDCP_TEST = "HDCP_TEST", t.SERVICE_CERTIFICATE = "SERVICE_CERTIFICATE", t)
        }();
        e.exports = n
    }, {}],
    200: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t[t.PRSError = 0] = "PRSError", t[t.PRSConcurrencyError = 1] = "PRSConcurrencyError", t[t.PRSGeoIpError = 2] = "PRSGeoIpError", t[t.PRSHttpProxyError = 3] = "PRSHttpProxyError", t[t.PRSOwnershipError = 4] = "PRSOwnershipError"
        }(n || (n = {})), e.exports = n
    }, {}],
    201: [function(t, e, i) {
        "use strict";
        var n = t(159),
            r = t(93),
            o = t(284),
            s = t(192),
            a = t(294),
            l = o.get("PRSResponseValidator"),
            c = function() {
                function t() {}
                return (t.prototype.validateResponse = function(t) {
                    var e = this.validateTitleRendition(t);
                    if (null !== e) return e;
                    var i = this.validateAudioVideoUrls(t);
                    return null !== i ? i : (this.logNonFatalErrorsByResource(t.errorsByResource), null)
                }, t.prototype.validateTitleRendition = function(e) {
                    var i = r.nestedValue(e, "returnedTitleRendition.selectedEntitlement");
                    if (null === i) return n.newError(s.MISSING_PLAYBACK_RESOURCE_ERROR, "selectedEntitlement does not exist.");
                    var o = i.rightsException;
                    return r.isNullOrUndefined(o) ? null : o.downstreamReason === t.PAYMENT_FAILURE_DOWNSTREAM_REASON ? n.newError(s.PAYMENT_FAILURE_ERROR, "Payment failed.", o) : o
                }, t.prototype.validateAudioVideoUrls = function(e) {
                    var i = r.nestedValue(e, "errorsByResource.AudioVideoUrls");
                    return (null === i && (i = r.nestedValue(e, "errorsByResource.PlaybackUrls")), null !== i ? i.message.indexOf("UrlVendingService has no urls") > -1 ? n.newError(s.NO_URL_SET_ERROR, "No url sets returned from PRS.", i) : i.downstreamReason === t.PAYMENT_FAILURE_DOWNSTREAM_REASON ? n.newError(s.PAYMENT_FAILURE_ERROR, "Payment failed.", i) : i : null === r.nestedValue(e, "audioVideoUrls.avCdnUrlSets") && null === r.nestedValue(e, "playbackUrls.urlSets") ? n.newError(s.MISSING_PLAYBACK_RESOURCE_ERROR, "neither avCdnUrlSets nor urlSets exist.") : null)
                }, t.prototype.logNonFatalErrorsByResource = function(t) {
                    r.isNullOrUndefined(t) || a.each(t, function(t, e) {
                        l.error(e + " resource error occurred with name: " + t.name + ", errorCode: " + t.errorCode + ", message: " + t.message + ", downstreamReason: " + t.downstreamReason)
                    })
                }, t.PAYMENT_FAILURE_DOWNSTREAM_REASON = "PAYMENT_FAILURE", t)
            }();
        e.exports = c
    }, {
        159: 159,
        192: 192,
        284: 284,
        294: 294,
        93: 93
    }],
    202: [function(t, e, i) {
        "use strict";
        var n = t(191),
            r = t(197),
            o = t(198),
            s = t(199),
            a = t(193),
            l = t(194),
            c = t(196),
            u = t(192),
            p = t(201),
            h = {
                AudioVideoUrlsConverter: n,
                DesiredResources: a.DesiredResources,
                EntitlementTypes: r,
                HdcpVersions: o,
                KeyTypes: s,
                LanguageFeature: a.LanguageFeature,
                PlaybackResourceClient: l,
                PlaybackResourceRequest: c,
                PRSErrors: u,
                PRSResponseValidator: p,
                ResourceUsage: a.ResourceUsage,
                SubtitleFormat: a.SubtitleFormat,
                VideoMaterialType: a.VideoMaterialType
            };
        e.exports = h
    }, {
        191: 191,
        192: 192,
        193: 193,
        194: 194,
        196: 196,
        197: 197,
        198: 198,
        199: 199,
        201: 201
    }],
    203: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t[t.Streaming = 0] = "Streaming", t[t.Download = 1] = "Download"
        }(n || (n = {}));
        var r;
        ! function(t) {
            t[t.Stereo = 0] = "Stereo", t[t.AC3 = 1] = "AC3"
        }(r || (r = {}));
        var o;
        ! function(t) {
            t[t.CBR = 0] = "CBR", t[t.CVBR = 1] = "CVBR"
        }(o || (o = {}));
        var s;
        ! function(t) {
            t[t.SINGLE_KEY = 0] = "SINGLE_KEY", t[t.DUAL_KEY = 1] = "DUAL_KEY"
        }(s || (s = {}));
        var a;
        ! function(t) {
            t[t.PlayReady = 0] = "PlayReady", t[t.Widevine2 = 1] = "Widevine2", t[t.NONE = 2] = "NONE", t[t.WMRM = 3] = "WMRM", t[t.Marlin = 4] = "Marlin", t[t.FairPlay = 5] = "FairPlay", t[t.CENC = 6] = "CENC"
        }(a || (a = {}));
        var l;
        ! function(t) {
            t[t.Http = 0] = "Http", t[t.Https = 1] = "Https", t[t.Rtmpe = 2] = "Rtmpe"
        }(l || (l = {}));
        var c;
        ! function(t) {
            t[t.H264 = 0] = "H264", t[t.H265 = 1] = "H265"
        }(c || (c = {}));
        var u;
        ! function(t) {
            t[t.UHD = 0] = "UHD", t[t.HD = 1] = "HD", t[t.SD = 2] = "SD"
        }(u || (u = {}));
        var p;
        ! function(t) {
            t[t.DASH = 0] = "DASH", t[t.SmoothStreaming = 1] = "SmoothStreaming", t[t.HLS = 2] = "HLS", t[t.MP4 = 3] = "MP4", t[t.WMV = 4] = "WMV", t[t.MPEGPS = 5] = "MPEGPS", t[t.MPEGTS = 6] = "MPEGTS"
        }(p || (p = {}));
        var h;
        ! function(t) {
            t.Accumulating = "accumulating", t.Live = "live"
        }(h || (h = {}));
        var f = {
            AudioQuality: r,
            BitrateAdaptation: o,
            ConsumptionType: n,
            ContentProtection: a,
            DrmKeyScheme: s,
            LiveManifestType: h,
            Protocol: l,
            StreamingTechnology: p,
            VideoCodec: c,
            VideoQuality: u
        };
        e.exports = f
    }, {}],
    204: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t[t.High = 0] = "High", t[t.Medium = 1] = "Medium", t[t.Low = 2] = "Low"
        }(n || (n = {})), e.exports = n
    }, {}],
    205: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t[t.CacheMiss = 0] = "CacheMiss", t[t.CachePartialHit = 1] = "CachePartialHit", t[t.CacheHit = 2] = "CacheHit"
        }(n || (n = {})), e.exports = n
    }, {}],
    206: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t[t.PostMessage = 0] = "PostMessage", t[t.Http = 1] = "Http"
        }(n || (n = {})), e.exports = n
    }, {}],
    207: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t[t.Enabled = 0] = "Enabled", t[t.Auto = 1] = "Auto", t[t.Disabled = 2] = "Disabled"
        }(n || (n = {})), e.exports = n
    }, {}],
    208: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t[t.Crash = 1] = "Crash", t[t.Fatal = 2] = "Fatal", t[t.NonFatal = 3] = "NonFatal", t[t.Retriable = 4] = "Retriable", t[t.NoImpact = 5] = "NoImpact"
        }(n || (n = {})), e.exports = n
    }, {}],
    209: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(93),
            o = t(281),
            s = t(228),
            a = t(208),
            l = o.of("AbortEvent"),
            c = function(t) {
                function e(e, i, n, o) {
                    void 0 === n && (n = a.Fatal);
                    var s = t.call(this) || this;
                    return (s.errorName = l(e, "errorName").exists(), l(i, "errorOrErrorMessage").exists(), s.errorName = e, s.errorSeverity = n, s.template = r.isUndefined(o) ? null : o, i instanceof Error ? (s.errorMessage = i.message, s.error = i) : (s.errorMessage = i, s.error = null), s)
                }
                return (n(e, t), e.prototype.getErrorName = function() {
                    return this.errorName
                }, e.prototype.getErrorMessage = function() {
                    return this.errorMessage
                }, e.prototype.getErrorSeverity = function() {
                    return this.errorSeverity
                }, e.prototype.getTemplate = function() {
                    return this.template
                }, e.prototype.getError = function() {
                    return this.error
                }, e.toString = function() {
                    return "abort"
                }, e)
            }(s);
        e.exports = c
    }, {
        208: 208,
        228: 228,
        281: 281,
        93: 93
    }],
    210: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t() {}
            return (t.toString = function() {
                return "aborted"
            }, t)
        }();
        e.exports = n
    }, {}],
    211: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(281),
            o = t(228),
            s = r.of("AsinChangedEvent"),
            a = function(t) {
                function e(e) {
                    var i = t.call(this) || this;
                    return (i.asin = s(e, "asin").exists(), i)
                }
                return (n(e, t), e.toString = function() {
                    return "asinChanged"
                }, e)
            }(o);
        e.exports = a
    }, {
        228: 228,
        281: 281
    }],
    212: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(228),
            o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (n(e, t), e.toString = function() {
                    return "close"
                }, e)
            }(r);
        e.exports = o
    }, {
        228: 228
    }],
    213: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(228),
            o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (n(e, t), e.toString = function() {
                    return "contentEnd"
                }, e)
            }(r);
        e.exports = o
    }, {
        228: 228
    }],
    214: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(228),
            o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (n(e, t), e.toString = function() {
                    return "firstFrame"
                }, e)
            }(r);
        e.exports = o
    }, {
        228: 228
    }],
    215: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(228),
            o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (n(e, t), e.toString = function() {
                    return "initialized"
                }, e)
            }(r);
        e.exports = o
    }, {
        228: 228
    }],
    216: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(281),
            o = t(228),
            s = r.of("NotificationCancelEvent"),
            a = function(t) {
                function e(e) {
                    var i = t.call(this) || this;
                    return (i.notification = s(e, "notification").exists(), i)
                }
                return (n(e, t), e.prototype.getNotification = function() {
                    return this.notification
                }, e.toString = function() {
                    return "notificationCancel"
                }, e)
            }(o);
        e.exports = a
    }, {
        228: 228,
        281: 281
    }],
    217: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(281),
            o = t(228),
            s = r.of("NotificationEvent"),
            a = function(t) {
                function e(e, i, n, r, o) {
                    void 0 === n && (n = !1), void 0 === r && (r = 5);
                    var a = t.call(this) || this;
                    return (a.messageTemplate = s(e, "messageTemplate").exists(), a.expandedMessageTemplate = i, a.closable = n, a.displayTimeSeconds = r, a.onDontShowAgain = o, a)
                }
                return (n(e, t), e.prototype.getMessageTemplate = function() {
                    return this.messageTemplate
                }, e.prototype.getExpandedMessageTemplate = function() {
                    return this.expandedMessageTemplate
                }, e.prototype.getClosable = function() {
                    return this.closable
                }, e.prototype.getDisplayTimeSeconds = function() {
                    return this.displayTimeSeconds
                }, e.prototype.getOnDontShowAgain = function() {
                    return this.onDontShowAgain
                }, e.toString = function() {
                    return "notification"
                }, e)
            }(o);
        e.exports = a
    }, {
        228: 228,
        281: 281
    }],
    218: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(221),
            o = function(t) {
                function e(e) {
                    var i = t.call(this) || this;
                    return (i.pinValidationStartTimeMs = e, i)
                }
                return (n(e, t), e.prototype.getPinValidationStartTimeMs = function() {
                    return this.pinValidationStartTimeMs
                }, e.toString = function() {
                    return "pinAccepted"
                }, e)
            }(r);
        e.exports = o
    }, {
        221: 221
    }],
    219: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(221),
            o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (n(e, t), e.toString = function() {
                    return "pinDeclined"
                }, e)
            }(r);
        e.exports = o
    }, {
        221: 221
    }],
    220: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(221),
            o = function(t) {
                function e(e) {
                    var i = t.call(this) || this;
                    return (i.errorName = e, i)
                }
                return (n(e, t), e.prototype.getErrorName = function() {
                    return this.errorName
                }, e.toString = function() {
                    return "pinError"
                }, e)
            }(r);
        e.exports = o
    }, {
        221: 221
    }],
    221: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t() {}
            return t
        }();
        e.exports = n
    }, {}],
    222: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(221),
            o = function(t) {
                function e(e, i, n, r) {
                    void 0 === i && (i = !1), void 0 === n && (n = !1), void 0 === r && (r = !1);
                    var o = t.call(this) || this;
                    return (o.pinLength = e, o.requiresPINSetup = i, o.hidePlayer = r, o.requiresAgeVerification = n, o)
                }
                return (n(e, t), e.prototype.getHidePlayer = function() {
                    return this.hidePlayer
                }, e.prototype.getPINLength = function() {
                    return this.pinLength
                }, e.prototype.getRequiresAgeVerification = function() {
                    return this.requiresAgeVerification
                }, e.prototype.getRequiresPINSetup = function() {
                    return this.requiresPINSetup
                }, e.toString = function() {
                    return "pinRequired"
                }, e)
            }(r);
        e.exports = o
    }, {
        221: 221
    }],
    223: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(228),
            o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (n(e, t), e.toString = function() {
                    return "paused"
                }, e)
            }(r);
        e.exports = o
    }, {
        228: 228
    }],
    224: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(281),
            o = t(228),
            s = r.of("PlayerCapabilitiesEvent"),
            a = function(t) {
                function e(e) {
                    var i = t.call(this) || this;
                    return (i.capabilities = s(e, "playerCapabilities").exists(), i)
                }
                return (n(e, t), e.toString = function() {
                    return "playerCapabilities"
                }, e)
            }(o);
        e.exports = a
    }, {
        228: 228,
        281: 281
    }],
    225: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(228),
            o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (n(e, t), e.toString = function() {
                    return "playing"
                }, e)
            }(r);
        e.exports = o
    }, {
        228: 228
    }],
    226: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(228),
            o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (n(e, t), e.toString = function() {
                    return "prepared"
                }, e)
            }(r);
        e.exports = o
    }, {
        228: 228
    }],
    227: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(228),
            o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (n(e, t), e.toString = function() {
                    return "stopping"
                }, e)
            }(r);
        e.exports = o
    }, {
        228: 228
    }],
    228: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t() {}
            return t
        }();
        e.exports = n
    }, {}],
    229: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t[t.volume = 0] = "volume"
        }(n || (n = {})), e.exports = n
    }, {}],
    230: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t[t.Feature = 0] = "Feature", t[t.Trailer = 1] = "Trailer", t[t.Live = 2] = "Live", t[t.External = 3] = "External", t[t.VideoAds = 4] = "VideoAds"
        }(n || (n = {})), e.exports = n
    }, {}],
    231: [function(t, e, i) {
        "use strict";
        var n = t(209),
            r = t(210),
            o = t(211),
            s = t(205),
            a = t(204),
            l = t(212),
            c = t(207),
            u = t(206),
            p = t(213),
            h = t(208),
            f = t(229),
            d = t(214),
            y = t(215),
            g = t(216),
            m = t(217),
            v = t(218),
            E = t(219),
            _ = t(221),
            S = t(220),
            T = t(222),
            b = t(223),
            w = t(224),
            I = t(225),
            R = t(226),
            C = t(227),
            P = t(230),
            A = t(228),
            O = {
                AbortEvent: n,
                AbortedEvent: r,
                AsinChangedEvent: o,
                CacheType: s,
                CachePriority: a,
                CloseEvent: l,
                DiagnosticsState: c,
                DiagnosticsProtocol: u,
                EndOfContentEvent: p,
                ErrorSeverity: h,
                Features: f,
                FirstFrameEvent: d,
                InitializedEvent: y,
                NotificationCancelEvent: g,
                NotificationEvent: m,
                PINAcceptedEvent: v,
                PINDeclinedEvent: E,
                PINEvent: _,
                PINErrorEvent: S,
                PINRequiredEvent: T,
                PausedEvent: b,
                PlayerCapabilitiesEvent: w,
                PlayingEvent: I,
                PreparedEvent: R,
                StoppingEvent: C,
                VideoType: P,
                WebPlayerEvent: A
            };
        e.exports = O
    }, {
        204: 204,
        205: 205,
        206: 206,
        207: 207,
        208: 208,
        209: 209,
        210: 210,
        211: 211,
        212: 212,
        213: 213,
        214: 214,
        215: 215,
        216: 216,
        217: 217,
        218: 218,
        219: 219,
        220: 220,
        221: 221,
        222: 222,
        223: 223,
        224: 224,
        225: 225,
        226: 226,
        227: 227,
        228: 228,
        229: 229,
        230: 230
    }],
    232: [function(t, e, i) {
        "use strict";
        var n = t(93),
            r = t(281),
            o = t(290),
            s = t(294),
            a = r.of("QueryString"),
            l = function() {
                function t() {}
                return (t.getParameter = function(e, i) {
                    a(e, "name").exists();
                    var n = t.getQueryString(i);
                    return n.hasOwnProperty(e) ? n[e] : null
                }, t.getQueryString = function(e) {
                    if (n.isNullOrUndefined(e)) {
                        if ("undefined" == typeof location || "undefined" == typeof location.search) return {};
                        e = location.search
                    }
                    try {
                        var i = o.parse(e.replace(/^?/, ""));
                        return t.parseStrings(i)
                    } catch (t) {
                        return {}
                    }
                }, t.parseStrings = function(e) {
                    if (s.isString(e)) return !!/^true$/i.test(e) || !/^false$/i.test(e) && (/^null$/i.test(e) ? null : /^undefined$/i.test(e) ? t.UNDEFINED : /^d+$/.test(e) ? parseInt(e, 10) : e);
                    if (s.isArray(e) || s.isObject(e)) {
                        var i = s.isArray(e) ? [] : {};
                        for (var n in e) e.hasOwnProperty(n) && (i[n] = this.parseStrings(e[n]));
                        return i
                    }
                    return e
                }, t.UNDEFINED = void 0, t)
            }();
        e.exports = l
    }, {
        281: 281,
        290: 290,
        294: 294,
        93: 93
    }],
    233: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t() {}
            return (t.prototype.fatalErrorOccurred = function(t) {}, t.prototype.nonFatalErrorOccurred = function(t) {}, t.prototype.appLoadStarted = function() {}, t.prototype.appLoadCompleted = function() {
                return 0
            }, t.prototype.playerInitializationStarted = function() {}, t.prototype.playerInitializationCompleted = function() {}, t.prototype.contentPreparationStarted = function(t, e) {}, t.prototype.contentPreparationSucceeded = function() {}, t.prototype.contentPreparationFailed = function() {}, t.prototype.playbackInitiated = function(t) {}, t.prototype.playbackStarted = function(t) {
                return 0
            }, t.prototype.pinDialogDisplayed = function() {}, t.prototype.pinSubmitted = function() {}, t.prototype.pinAccepted = function() {}, t.prototype.pinDeclined = function() {}, t.prototype.seekInitiated = function() {}, t.prototype.seekCompleted = function() {}, t.prototype.nextTitlePlaybackInitiated = function() {}, t.prototype.hdToggled = function(t) {}, t.prototype.manifestDownloadStarted = function() {}, t.prototype.manifestDownloaded = function() {}, t.prototype.bufferingStarted = function(t, e) {}, t.prototype.bufferingComplete = function(t) {}, t.prototype.reportInitialBufferCompleted = function(t) {}, t.prototype.prepareClickstream = function(t, e) {}, t.prototype.clickstreamNextTitle = function() {}, t.prototype.clickstreamPlaybackStarted = function(t) {}, t.prototype.reportClickstream = function(t) {}, t.prototype.fullScreenToggled = function(t, e, i) {}, t.prototype.prePlaybackModalStarted = function(t) {}, t.prototype.prePlaybackModalClosed = function(t) {}, t)
        }();
        e.exports = n
    }, {}],
    234: [function(t, e, i) {
        "use strict";
        var n = t(242),
            r = t(95),
            o = 2e5,
            s = function() {
                function t(t, e, i) {
                    void 0 === t && (t = null), void 0 === e && (e = null), void 0 === i && (i = n), this.bufferMaxBytes = o, this.viewIndex = 0, this.autoFlush = !1, this.isEnabled = !0, this.isFullyWritten = !1;
                    try {
                        null === t || null === e ? (this.logBuffer = new ArrayBuffer(o), this.bufferView = new Uint8Array(this.logBuffer)) : (this.bufferMaxBytes = e.buffer.byteLength, this.logBuffer = t, this.bufferView = e), this.typedArrayDownloader = i
                    } catch (t) {
                        this.isEnabled = !1
                    }
                }
                return (t.prototype.setAutoFlush = function(t) {
                    this.isEnabled && (this.autoFlush = t)
                }, t.prototype.log = function(t) {
                    if (this.isEnabled)
                        for (var e = 0; e < t.length; e++) this.bufferView.set([t.charCodeAt(e)], this.viewIndex), ++this.viewIndex >= this.bufferMaxBytes && (this.viewIndex %= this.bufferMaxBytes, this.isFullyWritten = !0, this.autoFlush && this.flushLogs(!1))
                }, t.prototype.manuallyDownloadLogs = function() {
                    this.isEnabled && this.flushLogs(!0)
                }, t.prototype.flushLogs = function(t) {
                    var e, i;
                    t ? (e = this.formatManualView(), i = "manualDownload.txt") : (e = this.bufferView, i = r.dateTimeToString(new Date) + ".txt"), this.typedArrayDownloader.downloadUint8(e, i)
                }, t.prototype.formatManualView = function() {
                    var t = new Uint8Array(this.logBuffer, 0, this.viewIndex);
                    if (this.isFullyWritten) {
                        var e = new Uint8Array(this.logBuffer, this.viewIndex, this.logBuffer.byteLength - this.viewIndex),
                            i = new Uint8Array(this.logBuffer.byteLength);
                        return (i.set(e), i.set(t, e.byteLength), i)
                    }
                    return t
                }, t)
            }();
        e.exports = s
    }, {
        242: 242,
        95: 95
    }],
    235: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t[t.Ad = 0] = "Ad", t[t.Main = 1] = "Main"
        }(n || (n = {})), e.exports = n
    }, {}],
    236: [function(t, e, i) {
        "use strict";
        var n = t(66),
            r = n.Action,
            o = n.PageType,
            s = n.RefMarker,
            a = n.SubPageType,
            l = n.HitType,
            c = t(69),
            u = c.ClickstreamEventBuilder,
            p = t(187),
            h = t(93),
            f = t(281),
            d = t(284),
            y = t(235),
            g = f.of("DefaultMetricsContext"),
            m = d.get("MetricsContext"),
            v = function() {
                function t(t, e, i) {
                    void 0 === i && (i = p), this.createClickstreamClient = g(t, "createClickstreamClient").exists(), this.now = h.exists(e) ? e : Date.now ? Date.now : function() {
                        return (new Date).getTime()
                    }, this.metricReporter = i, this.clickstreamClient = null, this.asin = null, this.refMarker = null, this.appLoadStartTime = null, this.contentPreparationStartTime = null, this.nextTitlePlaybackInitiatedTime = null, this.manifestDownloadStartTime = null, this.pinDialogDisplayedTime = null, this.pinEntryTime = 0, this.playbackInitiatedTime = null, this.playerInitializationStartTime = null, this.prePlaybackModalStartedTime = null, this.prePlaybackModalClosedTime = null, this.seekInitiatedTime = null, this.bufferReasons = {}, this.bufferReasons[y.Ad] = null, this.bufferReasons[y.Main] = null, this.bufferTimers = {}, this.bufferTimers[y.Ad] = null, this.bufferTimers[y.Main] = null
                }
                return (t.prototype.fatalErrorOccurred = function(e) {
                    this.nonFatalErrorOccurred(e), this.putMetric(t.FATAL_ERROR_METRIC)
                }, t.prototype.nonFatalErrorOccurred = function(t) {
                    g(t, "error").exists(), t instanceof Error ? this.putMetric(t.name) : this.putMetric(t)
                }, t.prototype.appLoadStarted = function() {
                    return null !== this.appLoadStartTime ? void m.error("appLoadStarted called when app load is already in progress") : void(this.appLoadStartTime = this.now())
                }, t.prototype.appLoadCompleted = function() {
                    if (null === this.appLoadStartTime) return void m.error("appLoadCompleted called when app load is not in progress");
                    var e = this.now() - this.appLoadStartTime;
                    return (this.putTime(t.APP_LOAD_TIME_METRIC, e), this.appLoadStartTime = null, e)
                }, t.prototype.playerInitializationStarted = function() {
                    return null !== this.playerInitializationStartTime ? void m.error("playerInitializationStarted called when player initialization is already in progress") : (this.reportRateBasedMetrics(), void(this.playerInitializationStartTime = this.now()))
                }, t.prototype.playerInitializationCompleted = function() {
                    if (null === this.playerInitializationStartTime) return void m.error("playerInitializationCompleted called when player initialization is not in progress");
                    var e = this.now() - this.playerInitializationStartTime;
                    this.putTime(t.INITIALIZE_TIME_METRIC, e), this.playerInitializationStartTime = null
                }, t.prototype.contentPreparationStarted = function(t, e) {
                    return (this.asin = g(t, "asin").exists(), this.isTrailer = g(e, "isTrailer").exists(), null !== this.contentPreparationStartTime ? void m.error("contentPreparationStarted called when content preparation is already in progress") : (this.contentPreparationStartTime = this.now(), void(this.pinDialogDisplayedTime = null)))
                }, t.prototype.contentPreparationSucceeded = function() {
                    if (null === this.contentPreparationStartTime) return void m.error("contentPreparationSucceeded called when content preparation is not in progress");
                    var e = this.now() - this.contentPreparationStartTime;
                    this.putTime(t.PREPARE_TIME_METRIC, e), this.contentPreparationStartTime = null
                }, t.prototype.contentPreparationFailed = function() {
                    return null === this.contentPreparationStartTime ? void m.error("contentPreparationFailed called when content preparation is not in progress") : void(this.contentPreparationStartTime = null)
                }, t.prototype.playbackInitiated = function(e) {
                    return (g(e, "playbackInitiatedTime").exists(), null === this.asin || null === this.isTrailer ? void m.error("playbackStarted called without first preparing content") : null !== this.playbackInitiatedTime ? void m.error("playbackInitiated called when playback has already been initiated") : (this.putMetric(t.PLAY_METRIC), void(this.playbackInitiatedTime = e)))
                }, t.prototype.playbackStarted = function(e) {
                    if (void 0 === e && (e = !1), null === this.playbackInitiatedTime && null === this.nextTitlePlaybackInitiatedTime) return void m.error("playbackStarted called when neither initial playback or next title playback has been initiated");
                    if (null !== this.playbackInitiatedTime && null !== this.nextTitlePlaybackInitiatedTime) return void m.error("playbackStarted called when both playback and next title playback have been initiated");
                    var i = h.exists(this.playbackInitiatedTime) ? t.TTFF_METRIC : t.NEXT_TITLE_TTFF_METRIC,
                        n = this.calculateTimeToFirstFrame(h.withDefault(this.playbackInitiatedTime, this.nextTitlePlaybackInitiatedTime), e);
                    return (this.putTime(i, n), n)
                }, t.prototype.pinDialogDisplayed = function() {
                    return null !== this.pinDialogDisplayedTime ? void m.error("pinDialogDisplayed called when PIN dialog is already displayed") : (this.pinDialogDisplayedTime = this.now(), void this.reportClickstreamPageType(o.Player, a.Pin))
                }, t.prototype.pinSubmitted = function() {
                    return null === this.pinDialogDisplayedTime ? void m.error("pinSubmitted called when PIN dialog is not displayed") : void(this.refMarker = s[s.plr_pin_ok])
                }, t.prototype.pinAccepted = function() {
                    return null === this.pinDialogDisplayedTime ? void m.error("pinAccepted called when PIN dialog is not displayed") : (this.pinEntryTime = this.now() - this.pinDialogDisplayedTime, this.putTime(t.PIN_ENTRY_TIME_METRIC, this.pinEntryTime), void(this.pinDialogDisplayedTime = null))
                }, t.prototype.pinDeclined = function() {
                    return null === this.pinDialogDisplayedTime ? void m.error("pinDeclined called when PIN dialog is not displayed") : void this.reportClickstreamPageType(o.Player, a.PinError)
                }, t.prototype.seekInitiated = function() {
                    this.seekInitiatedTime = this.now()
                }, t.prototype.seekCompleted = function() {
                    if (null === this.seekInitiatedTime) return void m.error("seekCompleted called when seek is not in progress");
                    var e = this.now() - this.seekInitiatedTime;
                    this.putTime(t.SEEK_TIME_METRIC, e), this.seekInitiatedTime = null
                }, t.prototype.nextTitlePlaybackInitiated = function(t) {
                    return (g(t, "playbackInitiatedTime").exists(), null !== this.nextTitlePlaybackInitiatedTime ? void m.error("nextTitlePlaybackInitiated called when next title playback has already been initiated") : void(this.nextTitlePlaybackInitiatedTime = t))
                }, t.prototype.hdToggled = function(t) {
                    var e = (new u).withPageTypeId(this.asin).withRefMarker(t ? s[s.plr_hd_on] : s[s.plr_hd_off]).withPageType(o.Player).withSubPageType(a.Player).build();
                    this.reportClickstream(e)
                }, t.prototype.fullScreenToggled = function(t, e, i) {
                    var n = (new u).withPageTypeId(this.asin).withRefMarker(t ? s[s.plr_b_fscrn_on] : s[s.plr_b_fscrn_off]).withPageType(e).withSubPageType(i).withHitType(l.PageTouch).build();
                    this.reportClickstream(n)
                }, t.prototype.manifestDownloadStarted = function() {
                    this.manifestDownloadStartTime = this.now()
                }, t.prototype.manifestDownloaded = function() {
                    if (null === this.manifestDownloadStartTime) return void m.error("manifestDownloaded called when manifest download has not been started");
                    var e = this.now() - this.manifestDownloadStartTime;
                    this.putTime(t.MANIFEST_DOWNLOAD_TIME_METRIC, e), this.manifestDownloadStartTime = null
                }, t.prototype.bufferingStarted = function(t, e) {
                    return h.isNullOrUndefined(t) ? void m.error("bufferingStarted called but no contentType was provided") : h.isNullOrUndefined(e) ? void m.error("bufferingStarted called but no bufferReason was provided") : (this.bufferReasons[t] = e, void(this.bufferTimers[t] = this.now()))
                }, t.prototype.bufferingComplete = function(e) {
                    if (h.isNullOrUndefined(e)) return void m.error("bufferingComplete called but no contentType was provided");
                    var i = this.bufferReasons[e],
                        n = this.bufferTimers[e];
                    if (null !== n) {
                        var r = this.now() - n;
                        this.putTime("" + y[e] + t.BUFFER_TIME_METRIC + "." + i, r), this.bufferTimers[e] = null, this.bufferReasons[e] = null
                    }
                }, t.prototype.reportInitialBufferCompleted = function(e) {
                    this.putMetric(t.INITIAL_BUFFER_COMPLETED, e)
                }, t.prototype.prepareClickstream = function(e, i) {
                    h.isNullOrUndefined(e) ? (m.error("No clickstreamSessionId was provided; Clickstream events will not be reported"), this.putMetric(t.MISSING_CLICKSTREAM_SESSION_ID_ERROR_METRIC)) : h.isNullOrUndefined(i) ? (m.error("No clickstreamRefMarker was provided; Clickstream events will not be reported"), this.putMetric(t.MISSING_CLICKSTREAM_REF_MARKER_ERROR_METRIC)) : (this.clickstreamClient = this.createClickstreamClient(e), this.refMarker = i)
                }, t.prototype.clickstreamNextTitle = function() {
                    this.refMarker = s[s.plr_nxt_ep]
                }, t.prototype.clickstreamPlaybackStarted = function(t) {
                    var e = this.isTrailer ? r.PlayTrailer : r.PlayStream;
                    this.reportClickstreamAction(e, o.Player, t)
                }, t.prototype.reportClickstream = function(e) {
                    var i = this;
                    if (null === this.clickstreamClient) return void m.error("Attempted to report a Clickstream page with a null Clickstream client reference");
                    if (null === e) return void m.error("Attempted to report a Clickstream page type with a null event");
                    if (null === e.refMarker) return void m.error("Attempted to report a Clickstream page type without a ref marker");
                    if (null === e.pageTypeId) return void m.error("Attempted to report Clickstream with no pageTypeId");
                    m.debug("Reporting Clickstream event for Action '" + e.action + "'n            with page type '" + e.pageType + "' SubPageType '" + e.subPageType + "' and ref markern            '" + e.refMarker + "' for pageTypeId '" + e.pageTypeId + "'");
                    try {
                        this.clickstreamClient.report(e, function(e) {
                            i.putTime(t.CLICKSTREAM_TIME_METRIC, e)
                        }, function(e, n) {
                            m.error("Unable to send Clickstream event: " + e, e), i.putMetric(t.CLICKSTREAM_ERROR_METRIC), h.isNullOrUndefined(n) || i.putTime(t.CLICKSTREAM_TIME_METRIC, n)
                        })
                    } catch (t) {
                        m.error("Failed to send ClickStream event: " + t, t)
                    }
                }, t.prototype.prePlaybackModalStarted = function(t) {
                    g(t, "startTimeMs").exists(), this.prePlaybackModalStartedTime = h.withDefault(this.prePlaybackModalStartedTime, t)
                }, t.prototype.prePlaybackModalClosed = function(t) {
                    g(t, "closeTimeMs").exists(), h.isNullOrUndefined(this.prePlaybackModalClosedTime) && h.exists(this.prePlaybackModalStartedTime) && (this.prePlaybackModalClosedTime = t)
                }, t.prototype.reportRateBasedMetrics = function() {
                    this.putMetric(t.PLAYBACK_STUCK_METRIC, 0), this.putMetric(t.FATAL_ERROR_METRIC, 0)
                }, t.prototype.putMetric = function(t, e) {
                    try {
                        this.metricReporter.putMetric(t, e)
                    } catch (i) {
                        m.error("An error occurred while publishing metric " + t + ": " + i.name + ": " + (h.exists(e) ? e + ":" : "") + " " + i.message, i)
                    }
                }, t.prototype.putTime = function(e, i) {
                    m.debug(e + " was " + i + " ms");
                    try {
                        this.metricReporter.putMetric(e, i, t.MILLISECONDS)
                    } catch (t) {
                        m.error("An error occurred while publishing metric " + e + ": " + t.name + ": " + t.message, t)
                    }
                }, t.prototype.reportClickstreamAction = function(t, e, i) {
                    var n = (new u).withAction(t).withPageType(e).withRefMarker(this.refMarker).withSubPageType(a.Player).withPageTypeId(this.asin).withWeblabs(i).build();
                    this.refMarker = null, this.reportClickstream(n)
                }, t.prototype.reportClickstreamPageType = function(t, e) {
                    if (null !== this.clickstreamClient) {
                        var i = (new u).withPageType(t).withSubPageType(e).withRefMarker(this.refMarker).withPageTypeId(this.asin).build();
                        this.refMarker = null, this.reportClickstream(i)
                    }
                }, t.prototype.calculateTimeToFirstFrame = function(t, e) {
                    var i = this.now() - (e ? this.pinEntryTime : 0);
                    return (h.isNullOrUndefined(this.prePlaybackModalClosedTime) ? i -= t : this.playbackInitiatedTime < this.prePlaybackModalStartedTime ? i += this.prePlaybackModalStartedTime - t - this.prePlaybackModalClosedTime : i -= this.prePlaybackModalClosedTime, this.nextTitlePlaybackInitiatedTime = null, this.pinEntryTime = 0, this.playbackInitiatedTime = null, this.prePlaybackModalStartedTime = null, this.prePlaybackModalClosedTime = null, i)
                }, t.MILLISECONDS = "ms", t.APP_LOAD_TIME_METRIC = "AppLoadTime", t.BUFFER_TIME_METRIC = "BufferTime", t.CLICKSTREAM_ERROR_METRIC = "ClickstreamError", t.CLICKSTREAM_TIME_METRIC = "ClickstreamTime", t.FATAL_ERROR_METRIC = "FatalError", t.INITIAL_BUFFER_COMPLETED = "InitialBufferCompleted", t.INITIALIZE_TIME_METRIC = "InitializeTime", t.MANIFEST_DOWNLOAD_TIME_METRIC = "ManifestDownloadTime", t.MISSING_CLICKSTREAM_REF_MARKER_ERROR_METRIC = "MissingClickstreamRefMarkerError", t.MISSING_CLICKSTREAM_SESSION_ID_ERROR_METRIC = "MissingClickstreamSessionIdError", t.NEXT_TITLE_TTFF_METRIC = "NextTitleTTFF", t.PIN_ENTRY_TIME_METRIC = "PinEntryTime", t.PLAY_METRIC = "Play", t.PLAYBACK_STUCK_METRIC = "PlaybackStuck", t.PREPARE_TIME_METRIC = "PrepareTime", t.SEEK_TIME_METRIC = "SeekTime", t.TTFF_METRIC = "TTFF", t)
            }();
        e.exports = v
    }, {
        187: 187,
        235: 235,
        281: 281,
        284: 284,
        66: 66,
        69: 69,
        93: 93
    }],
    237: [function(t, e, i) {
        "use strict";
        var n = t(93),
            r = function() {
                function t() {
                    this.capturedLogs = []
                }
                return (t.prototype.getHandler = function() {
                    var t = this;
                    return function(e, i) {
                        t.capturedLogs.push({
                            messages: e,
                            context: i
                        })
                    }
                }, t.prototype.flushTo = function(t, e) {
                    for (var i = 0; i < this.capturedLogs.length; i++)(n.isNullOrUndefined(e) || this.capturedLogs[i].context.level.value >= e.value) && t(this.capturedLogs[i].messages, this.capturedLogs[i].context);
                    this.capturedLogs.length = 0
                }, t)
            }();
        e.exports = r
    }, {
        93: 93
    }],
    238: [function(t, e, i) {
        "use strict";
        var n = t(158),
            r = t(231),
            o = r.DiagnosticsState,
            s = t(150),
            a = s.LogEvent,
            l = s.LogLevels,
            c = t(284),
            u = t(93),
            p = t(281),
            h = t(95),
            f = t(234),
            d = p.of("Logging"),
            y = function() {
                function t() {}
                return (t.parseLevel = function(e) {
                    d(e, "level").exists();
                    var i = t.LEVELS[e.toLowerCase()];
                    return u.isUndefined(i) ? t.DEFAULT_LOG_LEVEL : i
                }, t.setBufferFilter = function(e) {
                    t.bufferedLogFilterLevel = t.parseLevel(e)
                }, t.createHandler = function(e, i, r, s) {
                    var c = this;
                    void 0 === i && (i = o.Disabled), void 0 === s && (s = n.getInstance()), u.isNullOrUndefined(r) && "undefined" != typeof console && (r = console);
                    var p = [];
                    return (i !== o.Disabled && "undefined" != typeof r && p.push(function(e, i) {
                        try {
                            var n = [h.dateTimeToString(new Date)].concat(i),
                                o = t.getConsoleMethodForLevel(e, r);
                            Function.prototype.apply.call(o, r, n)
                        } catch (t) {}
                    }), u.isNullOrUndefined(e) || p.push(function(t, i) {
                        try {
                            e.log(t.name, i)
                        } catch (t) {}
                    }), i !== o.Disabled && (this.bufferedLogger = new f, p.push(function(e, i) {
                        try {
                            var n = [h.dateTimeToString(new Date), e.name].concat(i),
                                r = n.join(" ") + "n";
                            e.value >= t.bufferedLogFilterLevel.value && c.bufferedLogger.log(r)
                        } catch (t) {}
                    }), this.realTimeLogger = s, p.push(function(t, e) {
                        try {
                            var i = [h.dateTimeToString(new Date), t.name].concat(e),
                                n = i.join(" ") + "n";
                            c.realTimeLogger.report(new a(n, l[t.name.toUpperCase()]))
                        } catch (t) {}
                    })), 0 === p.length ? function(t, e) {} : function(t, e) {
                        if (0 !== t.length) {
                            var i = Array.prototype.slice.call(t);
                            u.isNullOrUndefined(e.name) || i.unshift("[" + e.name + "]");
                            for (var n = 0; n < p.length; n++) p[n](e.level, i)
                        }
                    })
                }, t.getConsoleMethodForLevel = function(t, e) {
                    var i = e[t.name.toLowerCase()];
                    return u.isUndefined(i) ? e.log : i
                }, t.DEFAULT_LOG_LEVEL = c.INFO, t.bufferedLogger = null, t.bufferedLogFilterLevel = c.INFO, t.LEVELS = {
                    debug: c.DEBUG,
                    info: c.INFO,
                    warn: c.WARN,
                    error: c.ERROR
                }, t)
            }();
        e.exports = y
    }, {
        150: 150,
        158: 158,
        231: 231,
        234: 234,
        281: 281,
        284: 284,
        93: 93,
        95: 95
    }],
    239: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t() {
                this.capturedMetrics = []
            }
            return (t.prototype.getHandler = function() {
                var t = this;
                return function(e, i, n) {
                    t.capturedMetrics.push({
                        name: e,
                        value: i,
                        unit: n
                    })
                }
            }, t.prototype.flushTo = function(t) {
                for (var e = 0; e < this.capturedMetrics.length; e++) t(this.capturedMetrics[e].name, this.capturedMetrics[e].value, this.capturedMetrics[e].unit);
                this.capturedMetrics.length = 0
            }, t)
        }();
        e.exports = n
    }, {}],
    240: [function(t, e, i) {
        "use strict";
        var n = t(69),
            r = n.ClickstreamClient,
            o = t(93),
            s = t(281),
            a = t(236),
            l = s.of("MetricsContextFactory"),
            c = function() {
                function t() {}
                return (t.prototype.createMetricsContext = function(t, e, i, n, s, c) {
                    l(t, "partnerServiceEndpoint").exists(), l(e, "deviceId").exists(), l(i, "deviceTypeId").exists(), l(n, "marketplaceId").exists();
                    var u = function(a) {
                        return r.isSupported() && o.exists(s) ? new r(t, a, n, s, e, i, c) : null
                    };
                    return new a(u)
                }, t)
            }();
        e.exports = c
    }, {
        236: 236,
        281: 281,
        69: 69,
        93: 93
    }],
    241: [function(t, e, i) {
        "use strict";
        var n = t(167),
            r = n.LogPublisher,
            o = n.MetricsPublisher,
            s = t(272),
            a = s.BrowserType,
            l = t(231),
            c = l.DiagnosticsState,
            u = t(187),
            p = t(158),
            h = t(284),
            f = t(93),
            d = t(281),
            y = t(237),
            g = t(238),
            m = t(239),
            v = d.of("Reporter"),
            E = h.get("Reporter"),
            _ = function() {
                function t(t) {
                    void 0 === t && (t = window), this.isLoggingInitialized = !1, this.areMetricsPreInitialized = !1, this.areMetricsInitialized = !1, this.logCaptor = null, this.metricsCaptor = null, this.logPublisher = null, this.metricsFeature = null, this.metricsPublisher = null, this.flushLogs = null, this.flushMetrics = null, this._window = t
                }
                return (t.prototype.preInitializeLogging = function() {
                    this.isLoggingInitialized || (this.logCaptor = new y, h.setLevel(h.DEBUG), h.setHandler(this.logCaptor.getHandler()))
                }, t.prototype.initializeLogging = function(t, e, i, n, o, s, a) {
                    var l = this;
                    void 0 === s && (s = 0), void 0 === a && (a = c.Disabled), v(t, "marketplaceId").exists(), v(e, "customerId").exists(), v(i, "sessionId").exists();
                    var u = g.DEFAULT_LOG_LEVEL;
                    if (a !== c.Disabled) {
                        u = h.INFO;
                        var d = p.getInstance();
                        d.initialize(n)
                    }
                    if (f.isNullOrUndefined(o) || (u = g.parseLevel(o)), h.setLevel(u), !r.isSupported()) return void h.setHandler(g.createHandler(null, a));
                    this.logPublisher = new r(t, e, i, s);
                    var y = g.createHandler(this.logPublisher, a);
                    h.setHandler(y), this.flushLogs = function() {
                        try {
                            l.logPublisher.flush()
                        } catch (t) {}
                    }, this.addBeforeUnloadListener(this.flushLogs), null !== this.logCaptor && (this.logCaptor.flushTo(y, u), this.logCaptor = null), this.isLoggingInitialized = !0
                }, t.prototype.updateLoggingSessionId = function(t) {
                    v(t, "sessionId").exists(), null !== this.logPublisher && this.logPublisher.updateSessionId(t)
                }, t.prototype.preInitializeMetrics = function(e, i, n, r, s, a) {
                    void 0 === a && (a = 0), v(!this.areMetricsPreInitialized, "!this.areMetricsPreInitialized").is["true"](), v(e, "marketplaceId").exists(), v(i, "sessionId").exists(), v(r, "metricsFeature").exists(), v(s, "browser").exists();
                    var l = this.getClient(s);
                    n = f.withDefault(n, t.DEFAULT_CLIENT_ID), this.metricsFeature = r, this.metricsPublisher = new o(e, i, n, l, a), this.metricsCaptor = new m, u.setHandler(this.metricsCaptor.getHandler()), this.areMetricsPreInitialized = !0
                }, t.prototype.initializeMetrics = function(t) {
                    v(this.areMetricsPreInitialized, "this.areMetricsPreInitialized").is["true"](), v(t, "metricsFeature").exists(), this.metricsFeature = t, this.areMetricsInitialized = !0, this.setMetricsHandlerAndFlusher()
                }, t.prototype.updateMetricsSessionId = function(t) {
                    v(t, "sessionId").exists(), null !== this.metricsPublisher && this.metricsPublisher.updateSessionId(t)
                }, t.prototype.flush = function() {
                    this.areMetricsPreInitialized && !this.areMetricsInitialized && this.setMetricsHandlerAndFlusher(), null !== this.flushLogs && this.flushLogs(), null !== this.flushMetrics && this.flushMetrics()
                }, t.prototype.setMetricsHandlerAndFlusher = function() {
                    var t = this,
                        e = function(e, i, n) {
                            t.metricsPublisher.putMetric(t.metricsFeature, "." + e, i, n)
                        };
                    u.setHandler(e), this.flushMetrics = function() {
                        try {
                            t.metricsPublisher.flush()
                        } catch (t) {
                            E.warn(t)
                        }
                    }, u.setFlusher(this.flushMetrics), this.addBeforeUnloadListener(this.flushMetrics), null !== this.metricsCaptor && (this.metricsCaptor.flushTo(e), this.metricsCaptor = null)
                }, t.prototype.addBeforeUnloadListener = function(t) {
                    "undefined" != typeof this._window.addEventListener ? this._window.addEventListener("beforeunload", t) : "undefined" != typeof this._window.attachEvent && this._window.attachEvent("onbeforeunload", t)
                }, t.prototype.removeBeforeUnloadListener = function(t) {
                    "undefined" != typeof this._window.addEventListener ? this._window.removeEventListener("beforeunload", t) : "undefined" != typeof this._window.attachEvent && this._window.detachEvent("onbeforeunload", t)
                }, t.prototype.getClient = function(t) {
                    return a[t.getType()]
                }, t.DEFAULT_CLIENT_ID = "NONE", t)
            }();
        e.exports = _
    }, {
        158: 158,
        167: 167,
        187: 187,
        231: 231,
        237: 237,
        238: 238,
        239: 239,
        272: 272,
        281: 281,
        284: 284,
        93: 93
    }],
    242: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t() {}
            return (t.downloadUint8 = function(t, e) {
                try {
                    var i = new Blob([t], {
                            type: "text/plain"
                        }),
                        n = window.URL.createObjectURL(i),
                        r = document.createElement("a");
                    r.setAttribute("download", e), r.setAttribute("href", n), r.setAttribute("target", "_blank"), document.body.appendChild(r), r.click(), document.body.removeChild(r)
                } catch (t) {}
            }, t)
        }();
        e.exports = n
    }, {}],
    243: [function(t, e, i) {
        "use strict";
        var n = t(233),
            r = t(235),
            o = t(240),
            s = t(238),
            a = t(241),
            l = t(234),
            c = {
                BlackHoleMetricsContext: n,
                ContentType: r,
                MetricsContextFactory: o,
                Logging: s,
                Reporter: a,
                BufferedLogger: l
            };
        e.exports = c
    }, {
        233: 233,
        234: 234,
        235: 235,
        238: 238,
        240: 240,
        241: 241
    }],
    244: [function(t, e, i) {
        "use strict";
        var n = t(180),
            r = n.IndexedDBStorage,
            o = t(245),
            s = t(247),
            a = t(248),
            l = function() {
                function t(t, e, i, n) {
                    void 0 === t && (t = new o), void 0 === e && (e = new a), void 0 === i && (i = new r("ScriptStore"));
                    var l = this;
                    this.SCRIPT_TYPES_XHR_REQUIRED = [s.JSON], this.XHR_TIMEOUT_MS = 12e4, this.XHR_RETRIES = 2, this.loadJsonFromString = function(t, e, i) {
                        try {
                            var n = (new Date).getTime();
                            i.payload = JSON.parse(e), i.parseMs = (new Date).getTime() - n, i.totalMs = l.calculateTotalLoadMs(i), t.onLoad(i)
                        } catch (e) {
                            l.onError(t, e)
                        }
                    }, this.loadJavaScriptFromString = function(t, e, i) {
                        try {
                            var n = new Blob([e], {
                                    type: "application/javascript"
                                }),
                                r = {
                                    url: l.createObjectURL(n),
                                    name: t.scriptInfo.name,
                                    type: t.scriptInfo.type,
                                    version: t.scriptInfo.version
                                };
                            l.javaScriptLoader.get(r, function(e) {
                                i.parseMs = e.downloadMs, i.totalMs = l.calculateTotalLoadMs(i), t.onLoad(i)
                            }, t.onNonFatal, function(e) {
                                return l.onError(t, e)
                            })
                        } catch (e) {
                            l.onError(t, e)
                        }
                    }, this.loadJavaScriptFromOrigin = function(t) {
                        l.javaScriptLoader.get(t.scriptInfo, t.onLoad, t.onNonFatal, t.onFatal, !0)
                    }, this.loadJsonFromOrigin = function(t) {
                        l.urlAcquirer.get(t.scriptInfo.url, t.scriptInfo.crc32, l.XHR_TIMEOUT_MS, l.XHR_RETRIES, function(e, i) {
                            l.loadFromString(t, e, i)
                        }, function(e) {
                            t.onNonFatal(e)
                        }, function(e) {
                            t.onFatal(e)
                        })
                    }, this.javaScriptLoader = t, this.urlAcquirer = e, this.offlineStorage = i, this.loadFromStringFunctions = {}, this.loadFromStringFunctions[s.JAVASCRIPT] = this.loadJavaScriptFromString, this.loadFromStringFunctions[s.JSON] = this.loadJsonFromString, this.loadFromOriginFunctions = {}, this.loadFromOriginFunctions[s.JAVASCRIPT] = this.loadJavaScriptFromOrigin, this.loadFromOriginFunctions[s.JSON] = this.loadJsonFromOrigin, !this.isDefined(n) && this.isDefined(window.URL) ? this.createObjectURL = URL.createObjectURL : this.createObjectURL = n
                }
                return (t.prototype.getContent = function(t, e) {
                    var i = this.requiresUrlAcquirer(t.scriptInfo.type);
                    i && !this.urlAcquirer.isSupported() ? t.onFatal(new Error("URLAcquirer not supported but " + s[t.scriptInfo.type] + " requires it.")) : !i && this.onlySupportsOrigin() ? this.loadFromOrigin(t) : this.offlineStorage.get(t.scriptInfo.name, e)
                }, t.prototype.loadFromString = function(t, e, i) {
                    var n = this.loadFromStringFunctions[t.scriptInfo.type];
                    return this.isDefined(n) ? void n(t, e, i) : void t.onFatal(new Error("No loadFromString function found for " + s[t.scriptInfo.type]))
                }, t.prototype.loadFromOrigin = function(t) {
                    var e = this.loadFromOriginFunctions[t.scriptInfo.type];
                    return this.isDefined(e) ? void e(t) : void t.onFatal(new Error("No loadFromOrigin function found for " + s[t.scriptInfo.type]))
                }, t.prototype.acquireNewAsset = function(t, e) {
                    var i = this;
                    this.urlAcquirer.get(t.scriptInfo.url, t.scriptInfo.crc32, this.XHR_TIMEOUT_MS, this.XHR_RETRIES, function(n, r) {
                        i.offlineStorage.set(t.scriptInfo.name, {
                            version: t.scriptInfo.version,
                            data: n
                        }), e && i.loadFromString(t, n, r)
                    }, function(e, i) {
                        t.onNonFatal(e, i)
                    }, function(n, r) {
                        e && i.onError(t, n, r)
                    })
                }, t.prototype.onError = function(t, e, i) {
                    t.onNonFatal(e, i), this.loadFromOrigin(t)
                }, t.prototype.requiresUrlAcquirer = function(t) {
                    return this.SCRIPT_TYPES_XHR_REQUIRED.indexOf(t) !== -1
                }, t.prototype.onlySupportsOrigin = function() {
                    return !(this.isDefined(window.Blob) && this.urlAcquirer.isSupported())
                }, t.prototype.isDefined = function(t) {
                    return "undefined" != typeof t
                }, t.prototype.nonNumberToZero = function(t) {
                    return "number" == typeof t ? t : 0
                }, t.prototype.calculateTotalLoadMs = function(t) {
                    return this.nonNumberToZero(t.cacheLoadMs) + this.nonNumberToZero(t.latencyMs) + this.nonNumberToZero(t.downloadMs) + this.nonNumberToZero(t.verifyMs) + this.nonNumberToZero(t.parseMs)
                }, t)
            }();
        e.exports = l
    }, {
        180: 180,
        245: 245,
        247: 247,
        248: 248
    }],
    245: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t(t, e, i) {
                void 0 === t && (t = 12e4), void 0 === e && (e = 2), void 0 === i && (i = document);
                var n = this;
                this.scriptErrorCount = 0, this.scriptLoaded = !1, this.onScriptError = function(t, e, i) {
                    t && (t.onload = t.onerror = t.onreadystatechange = null), clearTimeout(n.scriptTimerId), n.objectExists(n.scriptInfo.name) || (++n.scriptErrorCount < n.maxAttempts ? (n.onNonFatal(e), n.setScript(i)) : n.onFatal(e))
                }, this.scriptTimeoutMs = t, this.maxAttempts = e, this.documentInstance = i
            }
            return (t.prototype.get = function(t, e, i, n, r) {
                void 0 === r && (r = !1), this.scriptInfo = t, this.onLoad = e, this.onNonFatal = i, this.onFatal = n, this.scriptErrorCount = 0, this.scriptLoaded = !1, this.bustCache = r, clearTimeout(this.scriptTimerId), this.setScript(this.scriptInfo.url)
            }, t.prototype.setScript = function(t) {
                var e = this,
                    i = this.documentInstance.createElement("script");
                this.scriptTimerId = setTimeout(function() {
                    e.onScriptError(i, new Error("Script load timed out. " + e.scriptInfo.name + " for " + t), t)
                }, this.scriptTimeoutMs);
                var n = (new Date).getTime();
                i.setAttribute("crossorigin", "anonymous"), i.onload = i.onreadystatechange = function() {
                    if (!e.scriptLoaded && ("undefined" == typeof i.readyState || "loaded" === i.readyState || "complete" === i.readyState))
                        if (e.objectExists(e.scriptInfo.name)) {
                            clearTimeout(e.scriptTimerId), e.scriptLoaded = !0;
                            var r = (new Date).getTime() - n;
                            i.onload = i.onerror = i.onreadystatechange = null, e.onLoad({
                                cached: !1,
                                downloadMs: r,
                                totalMs: r
                            })
                        } else e.onScriptError(i, new Error("Script loaded but missing result object. Expected " + e.scriptInfo.name + " for " + t), t)
                }, i.onerror = function() {
                    e.onScriptError(i, new Error("Script onerror fired: " + e.scriptInfo.name + " for " + t), t)
                };
                var r = this.bustCache ? "?t=" + (new Date).getTime() : "";
                i.src = t + r, this.documentInstance.getElementsByTagName("head")[0].appendChild(i)
            }, t.prototype.objectExists = function(t) {
                return "undefined" != typeof window[t]
            }, t)
        }();
        e.exports = n
    }, {}],
    246: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(244),
            o = function(t) {
                function e(e, i, n, r) {
                    return t.call(this, e, i, n, r) || this
                }
                return (n(e, t), e.prototype.get = function(t, e, i, n) {
                    var r = this,
                        o = {
                            scriptInfo: t,
                            onLoad: e,
                            onNonFatal: i,
                            onFatal: n
                        };
                    this.getContent(o, function(e, i) {
                        e ? (r.loadFromString(o, e.data, {
                            cached: !0,
                            cacheLoadMs: i
                        }), e.version !== t.version && r.acquireNewAsset(o, !1)) : r.acquireNewAsset(o, !0)
                    })
                }, e)
            }(r);
        e.exports = o
    }, {
        244: 244
    }],
    247: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t[t.JAVASCRIPT = 0] = "JAVASCRIPT", t[t.JSON = 1] = "JSON"
        }(n || (n = {})), e.exports = n
    }, {}],
    248: [function(t, e, i) {
        "use strict";
        var n = t(282),
            r = "X-Server-IP",
            o = function() {
                function t(t, e) {
                    void 0 === t && (t = XMLHttpRequest), void 0 === e && (e = n.str);
                    var i = this;
                    this.makeXHRRequest = function(t, e, n, o, s, a, l, c) {
                        void 0 === c && (c = 0);
                        var u = new i.XHR,
                            p = function(p) {
                                p || (p = {
                                    type: "unknown error"
                                });
                                var h = new Error("XHR " + p.type + " for " + t + ". Status: " + u.status + ", readyState: " + u.readyState),
                                    f = {
                                        attempt: c,
                                        contentLength: p.contentLength,
                                        contentHash: p.contentHash,
                                        serverIP: u.getResponseHeader(r),
                                        contentLengthHeader: u.getResponseHeader("Content-Length")
                                    };
                                o > 0 ? (a(h, f), i.makeXHRRequest(t, e, n, --o, s, a, l, c + 1)) : l(h, f)
                            },
                            h = i.now(),
                            f = h;
                        u.addEventListener("readystatechange", function() {
                            2 === u.readyState && (f = i.now())
                        }), u.addEventListener("load", function() {
                            if (200 === u.status) {
                                var t = u.responseText,
                                    n = i.now(),
                                    o = !0,
                                    a = null,
                                    l = "(not checked)";
                                if (e) {
                                    var c = i.now();
                                    l = "" + i.toCRC32(t), o = l === e, a = i.now() - c
                                }
                                if (o) s(t, {
                                    cached: !1,
                                    latencyMs: f - h,
                                    downloadMs: n - f,
                                    verifyMs: a,
                                    serverIP: u.getResponseHeader(r)
                                });
                                else {
                                    var d = t ? t.length : 0,
                                        y = d > 0 ? "[" + t.substr(0, 15) + "]" : "(empty)";
                                    p({
                                        type: "verify failed " + y,
                                        contentLength: d,
                                        contentHash: l
                                    })
                                }
                            } else p({
                                type: "bad response"
                            })
                        }), u.addEventListener("error", p), u.addEventListener("timeout", p);
                        var d = 0 === c ? "" : "?t=" + i.now();
                        u.open("GET", t + d), u.timeout = n, u.send()
                    }, this.XHR = t, this.toCRC32 = e
                }
                return (t.prototype.isSupported = function() {
                    return "withCredentials" in new this.XHR
                }, t.prototype.get = function(t, e, i, n, r, o, s) {
                    this.makeXHRRequest(t, e, i, n, r, o, s)
                }, t.prototype.now = function() {
                    return (new Date).getTime()
                }, t)
            }();
        e.exports = o
    }, {
        282: 282
    }],
    249: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(244),
            o = function(t) {
                function e(e, i, n, r) {
                    return t.call(this, e, i, n, r) || this
                }
                return (n(e, t), e.prototype.get = function(t, e, i, n, r) {
                    var o = this;
                    void 0 === r && (r = !0);
                    var s = {
                        scriptInfo: t,
                        onLoad: e,
                        onNonFatal: i,
                        onFatal: n
                    };
                    r ? this.getContent(s, function(e, i) {
                        e && e.version === t.version ? o.loadFromString(s, e.data, {
                            cached: !0,
                            cacheLoadMs: i
                        }) : o.acquireNewAsset(s, !0)
                    }) : this.loadFromOrigin(s)
                }, e)
            }(r);
        e.exports = o
    }, {
        244: 244
    }],
    250: [function(t, e, i) {
        "use strict";
        var n = t(246),
            r = t(249),
            o = t(245),
            s = t(247),
            a = {
                LazyCachingScriptLoader: n,
                TransparentCachingScriptLoader: r,
                JavaScriptLoader: o,
                ScriptType: s
            };
        e.exports = a
    }, {
        245: 245,
        246: 246,
        247: 247,
        249: 249
    }],
    251: [function(t, e, i) {
        "use strict";
        var n = t(92),
            r = n.CappedGeometricSequence,
            o = t(284),
            s = t(93),
            a = t(281),
            l = t(294),
            c = a.of("ExponentialBackoffRetry"),
            u = o.get("ExponentialBackoffRetry"),
            p = function() {
                function t(t) {
                    void 0 === t && (t = new r);
                    var e = this;
                    this.isAborted = !1, this.handleRetry = function(t, i) {
                        if (e.isAborted) return void u.error("Attempted to retry after aborted");
                        if (e.currentAttempt++, e.canStillRetry()) {
                            var n = e.delaySequence.getValue(e.currentAttempt);
                            0 !== n ? e.retryTimeoutId = setTimeout(function() {
                                return e.executeCode()
                            }, n) : e.executeCode()
                        } else s.isNullOrUndefined(t) && (t = new Error("Reached retries limit, and callable did not specify a more specific error")), e.handleFail(t, i)
                    }, this.handleSuccess = function(t) {
                        return e.isAborted ? void u.error("Attempted to succeed after aborted") : void l.forEach(e.successCallbacks, function(e) {
                            e(t)
                        })
                    }, this.handleFail = function(t, i) {
                        return e.isAborted ? void u.error("Attempted to fail after aborted") : void l.forEach(e.errorCallbacks, function(e) {
                            e(t, i)
                        })
                    }, this.maxAttempts = -1, this.maxElapsedTimeMs = -1, this.delaySequence = t, this.started = !1, this.currentAttempt = 0, this.successCallbacks = [], this.errorCallbacks = []
                }
                return (t.prototype.withMaxAttempts = function(t) {
                    return (c(!this.started, "!this.started").is["true"](), c(t, "maxAttempts").exists(), c(t >= 1, "maxAttempts >= 1").is["true"](), this.maxAttempts = t, this)
                }, t.prototype.withMaxElapsedTimeMs = function(t) {
                    return (c(!this.started, "!this.started").is["true"](), c(t, "maxElapsedTimeMs").exists(), c(t > 0, "maxElapsedTimeMs > 0").is["true"](), this.maxElapsedTimeMs = t, this)
                }, t.prototype.withInitialIntervalMs = function(t) {
                    return (c(!this.started, "!this.started").is["true"](), c(t, "initialIntervalMs").exists(), c(t >= 0, "initialIntervalMs >= 0").is["true"](), this.delaySequence.withInitialValue(t), this)
                }, t.prototype.withExponentialFactor = function(t) {
                    return (c(!this.started, "!this.started").is["true"](), c(t, "exponentialFactor").exists(), c(t > 0, "exponentialFactor > 0").is["true"](), this.delaySequence.withExponentialFactor(t), this)
                }, t.prototype.withRandomizationFactor = function(t) {
                    return (c(!this.started, "!this.started").is["true"](), c(t, "randomizationFactor").exists(), c(t >= 0, "randomizationFactor >= 0").is["true"](), this.delaySequence.withRandomizationFactor(t), this)
                }, t.prototype.withMaxDelayMs = function(t) {
                    return (c(!this.started, "!this.started").is["true"](), c(t, "maxDelayMs").exists(), c(t > 0, "maxDelayMs > 0").is["true"](), this.delaySequence.withMaxValue(t), this)
                }, t.prototype.onSuccess = function(t) {
                    return (c(!this.started, "!this.started").is["true"](), c(t, "callback").exists(), this.successCallbacks = l.union(this.successCallbacks, [t]), this)
                }, t.prototype.onError = function(t) {
                    return (c(!this.started, "!this.started").is["true"](), c(t, "callback").exists(), this.errorCallbacks = l.union(this.errorCallbacks, [t]), this)
                }, t.prototype.onAttempt = function(t) {
                    return (c(!this.started, "!this.started").is["true"](), c(t, "callable").exists(), this.callable = t, this)
                }, t.prototype.execute = function() {
                    return (c(!this.started, "!this.started").is["true"](), c(this.callable, "this.callable").exists(), this.started = !0, this.startTime = (new Date).getTime(), this.executeCode(), this)
                }, t.prototype.abort = function() {
                    this.isAborted = !0, clearTimeout(this.retryTimeoutId)
                }, t.prototype.executeCode = function() {
                    try {
                        this.callable(this.currentAttempt, this.handleRetry, this.handleSuccess, this.handleFail)
                    } catch (t) {
                        this.handleFail(t)
                    }
                }, t.prototype.canStillRetry = function() {
                    return !(this.maxAttempts !== -1 && this.currentAttempt >= this.maxAttempts || this.maxElapsedTimeMs !== -1 && (new Date).getTime() - this.startTime >= this.maxElapsedTimeMs)
                }, t)
            }();
        e.exports = p
    }, {
        281: 281,
        284: 284,
        294: 294,
        92: 92,
        93: 93
    }],
    252: [function(t, e, i) {
        "use strict";
        var n = t(251),
            r = {
                ExponentialBackoffRetry: n
            };
        e.exports = r
    }, {
        251: 251
    }],
    253: [function(t, e, i) {
        "use strict";
        var n = t(294),
            r = function() {
                function t(e, i, r, o, s, a, l, c, u, p) {
                    void 0 === e && (e = window.setImmediate), void 0 === i && (i = window.clearImmediate), void 0 === r && (r = window.msSetImmediate), void 0 === o && (o = window.msClearImmediate), void 0 === s && (s = window.postMessage), void 0 === a && (a = window.addEventListener), void 0 === l && (l = window.setTimeout), void 0 === c && (c = window.clearTimeout), void 0 === u && (u = "setImmediate-" + Math.random()), void 0 === p && (p = window.location);
                    var h = this;
                    if (this.pendingHandles = {}, this.nextId = 0, this.postMessageSetImmediate = function(t) {
                            for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                            if (n.isFunction(t)) {
                                var r = h.nextId++;
                                return (h.pendingHandles[r] = h.wrapHandler(t, e), h.postMessage.call(window, h.messageIdentifier + r, h.origin), r)
                            }
                        }, this.postMessageClearImmediate = function(t) {
                            delete h.pendingHandles[t]
                        }, this.onPostMessage = function(t) {
                            if (n.isString(t.data) && 0 === t.data.indexOf(h.messageIdentifier)) {
                                var e = t.data.substr(h.messageIdentifier.length),
                                    i = h.pendingHandles[e];
                                i && i(), h.postMessageClearImmediate(+e)
                            }
                        }, this.timeoutSetImmediate = function(t) {
                            for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                            return h.setTimeout(h.wrapHandler(t, e), 0)
                        }, this.timeoutClearImmediate = function(t) {
                            return h.clearTimeout(t)
                        }, e && i) this.setImmediate = e.bind(window), this.clearImmediate = i.bind(window);
                    else if (r && o) this.setImmediate = r.bind(window), this.clearImmediate = o.bind(window);
                    else if (s && a) {
                        if (this.messageIdentifier = u, this.postMessage = s, p.origin) this.origin = p.origin;
                        else {
                            var f = p.port ? ":" + p.port : "";
                            this.origin = p.protocol + "//" + p.hostname + f
                        }
                        a(t.MESSAGE_EVENT, this.onPostMessage), this.setImmediate = this.postMessageSetImmediate, this.clearImmediate = this.postMessageClearImmediate
                    } else this.setTimeout = l, this.clearTimeout = c, this.setImmediate = this.timeoutSetImmediate, this.clearImmediate = this.timeoutClearImmediate
                }
                return (t.prototype.wrapHandler = function(t, e) {
                    return function() {
                        return t.apply(void 0, e)
                    }
                }, t.MESSAGE_EVENT = "message", t)
            }();
        e.exports = r
    }, {
        294: 294
    }],
    254: [function(t, e, i) {
        "use strict";
        var n = t(253),
            r = function() {
                function t() {}
                return (t.getInstance = function() {
                    return (this.immediateExecutor || (this.immediateExecutor = new n), this.immediateExecutor)
                }, t)
            }();
        e.exports = r
    }, {
        253: 253
    }],
    255: [function(t, e, i) {
        "use strict";
        var n = t(231),
            r = n.NotificationEvent,
            o = t(113),
            s = o.LocalStorage,
            a = function() {
                function t(e) {
                    void 0 === e && (e = new s);
                    var i = this;
                    this.setDontShowAgain = function() {
                        i.storage.set(t.DONT_SHOW_AGAIN_KEY, "true")
                    }, this.storage = e
                }
                return (t.prototype.createNotification = function() {
                    return new r(this.getTemplate(), null, !0, null, this.setDontShowAgain)
                }, t.prototype.shouldShowNotification = function() {
                    return "true" !== this.storage.get(t.DONT_SHOW_AGAIN_KEY)
                }, t.prototype.getTemplate = function() {
                    return {
                        renderString: function(e, i) {
                            return e[t.MESSAGE_KEY]
                        }
                    }
                }, t.MESSAGE_KEY = "silverlightForcedNarratives", t.DONT_SHOW_AGAIN_KEY = "dont_show_forced_narratives", t)
            }();
        e.exports = a
    }, {
        113: 113,
        231: 231
    }],
    256: [function(t, e, i) {
        "use strict";
        var n = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            r = t(113),
            o = r.Version,
            s = t(272),
            a = s.BrowserType,
            l = t(287),
            c = t(231),
            u = c.NotificationEvent,
            p = function(t) {
                function e(i) {
                    void 0 === i && (i = s.getBrowser());
                    var n = this,
                        r = null,
                        o = !1;
                    return (e.isSafari10OrHigher(i) || (r = e.getDetailsTemplate(i), o = !0), n = t.call(this, e.getSubjectTemplate(i), r, o, null) || this)
                }
                return (n(e, t), e.getSubjectTemplate = function(t) {
                    return {
                        renderString: function(i, n) {
                            if (e.isSafari10OrHigher(t)) return l.render(i[e.SAFARI_10_KEY], n);
                            var r = "{{{message}}}";
                            return l.render(r, i[e.MESSAGE_KEY])
                        }
                    }
                }, e.getDetailsTemplate = function(t) {
                    var i = e.isChrome(t.getType());
                    return {
                        renderString: function(t, n) {
                            var r = t[e.MESSAGE_KEY],
                                o = r[e.CHROME_UNBLOCK_KEY],
                                s = l.render(r[e.TROUBLESHOOT_KEY], n),
                                a = "{{#isChrome}}" + ("{{{" + e.CHROME_UNBLOCK_KEY + "}}}<br />") + "{{/isChrome}}" + ("{{{" + e.TROUBLESHOOT_KEY + "}}}");
                            return l.render(a, (c = {
                                isChrome: i
                            }, c[e.CHROME_UNBLOCK_KEY] = o, c[e.TROUBLESHOOT_KEY] = s, c));
                            var c
                        }
                    }
                }, e.isChrome = function(t) {
                    return t === a.Chrome || t === a.Chromium
                }, e.isSafari10OrHigher = function(t) {
                    return t.getType() === a.Safari && t.getVersion().compareTo(o.fromNumber(e.SAFARI_10_VERSION)) >= 0
                }, e.CHROME_UNBLOCK_KEY = "chromeUnblock", e.MESSAGE_KEY = "silverlightBlocked", e.SAFARI_10_KEY = "silverlightBlockedSafari10", e.TROUBLESHOOT_KEY = "troubleshoot", e.SAFARI_10_VERSION = 10, e)
            }(u);
        e.exports = p
    }, {
        113: 113,
        231: 231,
        272: 272,
        287: 287
    }],
    257: [function(t, e, i) {
        "use strict";
        var n = t(231),
            r = n.NotificationEvent,
            o = t(126),
            s = t(272),
            a = s.BrowserType,
            l = s.OperatingSystem,
            c = s.OperatingSystemFamily,
            u = function() {
                function t(t) {
                    void 0 === t && (t = o.getInstance()), this.deviceInformation = t, this.isFirefoxAvailable = this.isFirefoxHTML5Available(this.deviceInformation)
                }
                return (t.prototype.createNotification = function() {
                    return new r(this.getTemplate(this.isFirefoxAvailable), null, !0, null, null)
                }, t.prototype.shouldShow = function(t) {
                    var e = this.deviceInformation.operatingSystem;
                    return !t && !e.equals(l.WINDOWS_XP) && !e.equals(l.WINDOWS_VISTA)
                }, t.prototype.getTemplate = function(e) {
                    return {
                        renderString: function(i, n) {
                            return i[e ? t.FIREFOX_MESSAGE_KEY : t.MESSAGE_KEY]
                        }
                    }
                }, t.prototype.isFirefoxHTML5Available = function(t) {
                    var e = t.browser,
                        i = t.operatingSystem;
                    return !(i.getFamily() !== c.Windows && i.getFamily() !== c.Mac || e.getType() !== a.Firefox && e.getType() !== a.Firefox64)
                }, t.MESSAGE_KEY = "switchToHtml5", t.FIREFOX_MESSAGE_KEY = "updateFirefox", t)
            }();
        e.exports = u
    }, {
        126: 126,
        231: 231,
        272: 272
    }],
    258: [function(t, e, i) {
        "use strict";
        var n = {};
        n._silverlightCount = 0, n.createObject = function(t, e, i, r, o, s, a) {
            var l = new Object,
                c = r,
                u = o;
            l.version = c.version, c.source = t, l.alt = c.alt, s && (c.initParams = s), c.isWindowless && !c.windowless && (c.windowless = c.isWindowless), c.framerate && !c.maxFramerate && (c.maxFramerate = c.framerate), i && !c.id && (c.id = i), delete c.ignoreBrowserVer, delete c.inplaceInstallPrompt, delete c.version, delete c.isWindowless, delete c.framerate, delete c.data, delete c.src, delete c.alt;
            for (var p in u)
                if (u[p]) {
                    if ("onLoad" === p && "function" == typeof u[p] && 1 !== u[p].length) {
                        var h = u[p];
                        u[p] = function(t) {
                            return h(document.getElementById(i), a, t)
                        }
                    }
                    var f = n.__getHandlerName(u[p]);
                    if (null === f) throw "typeof events." + p + " must be 'function' or 'string'";
                    c[p] = f, u[p] = null
                } var d = n.buildHTML(c);
            return e ? void(e.innerHTML = d) : d
        }, n.buildHTML = function(t) {
            var e = [];
            e.push('<object type="application/x-silverlight" data="data:application/x-silverlight,"'), null !== t.id && e.push(' id="' + n.HtmlAttributeEncode(t.id) + '"'), null !== t.width && e.push(' width="' + t.width + '"'), null !== t.height && e.push(' height="' + t.height + '"'), e.push(" >"), delete t.id, delete t.width, delete t.height;
            for (var i in t) t[i] && e.push('<param name="' + n.HtmlAttributeEncode(i) + '" value="' + n.HtmlAttributeEncode(t[i]) + '" />');
            return (e.push("</object>"), e.join(""))
        }, n.createObjectEx = function(t) {
            var e = t,
                i = n.createObject(e.source, e.parentElement, e.id, e.properties, e.events, e.initParams, e.context);
            if (null === e.parentElement) return i
        }, n.HtmlAttributeEncode = function(t) {
            var e, i = "";
            if (null === t) return null;
            for (var n = 0; n < t.length; n++) e = t.charCodeAt(n), e > 96 && e < 123 || e > 64 && e < 91 || e > 43 && e < 58 && 47 !== e || 95 === e ? i += String.fromCharCode(e) : i = i + "&#" + e + ";";
            return i
        }, n.__cleanup = function() {
            for (var t = n._silverlightCount - 1; t >= 0; t--) window["__slEvent" + t] = null;
            n._silverlightCount = 0, window.removeEventListener ? window.removeEventListener("unload", n.__cleanup, !1) : window.detachEvent("onunload", n.__cleanup)
        }, n.__getHandlerName = function(t) {
            var e = "";
            if ("string" == typeof t) e = t;
            else if ("function" == typeof t) {
                0 === n._silverlightCount && (window.addEventListener ? window.addEventListener("unload", n.__cleanup, !1) : window.attachEvent("onunload", n.__cleanup));
                var i = n._silverlightCount++;
                e = "__slEvent" + i, window[e] = t
            } else e = null;
            return e
        }, e.exports = n
    }, {}],
    259: [function(t, e, i) {
        "use strict";
        var n = t(82),
            r = t(284),
            o = t(281),
            s = t(258),
            a = t(262),
            l = t(261),
            c = t(260),
            u = o.of("SilverlightInitializer"),
            p = r.get("SilverlightInitializer"),
            h = function() {
                function t() {
                    var e = this;
                    this.monitoringTimer = null, this.pluginId = null, this.complete = !1, this.onMonitorCheck = function() {
                        e.isSilverlightPluginLoaded() && (e.clearMonitor(), e.eventEmitter.emit(a, new a), e.monitoringTimer = setTimeout(e.onXapLoadTimeout, t.PLAYER_LOAD_TIMEOUT))
                    }, this.onPlayerLoad = function() {
                        e.clearMonitor(), e.complete = !0, p.info("The XAP has successfully loaded"), e.eventEmitter.emit(l, new l)
                    }, this.onPlayerError = function(t, i) {
                        p.info("A fatal error has occurred during XAP initialization", i), e.complete || (e.clearMonitor(), e.complete = !0, e.eventEmitter.emit(c, new c(i.errorCode, i.errorType, i.errorMessage)))
                    }, this.onXapLoadTimeout = function() {
                        e.onPlayerError(null, {
                            errorCode: c.LOAD_TIMEOUT_ERROR_CODE
                        })
                    }, u(s, "Silverlight").exists(), this.eventEmitter = new n.BasicEventEmitter
                }
                return (t.prototype.initialize = function(e, i, n, r, o, a) {
                    u(e, "parentElement").exists(), u(i, "id").exists(), u(n, "xapUrl").exists(), u(r, "minVersion").exists(), u(o, "windowless").exists(), this.pluginId = i, this.complete = !1, this.clearMonitor();
                    var l = this.generateInitParamString(a);
                    this.monitoringTimer = setInterval(this.onMonitorCheck, t.SILVERLIGHT_PLUGIN_LOAD_POLL_INTERVAL), s.createObjectEx({
                        source: n,
                        parentElement: e,
                        id: i,
                        properties: {
                            windowless: "" + o,
                            width: "100%",
                            height: "100%",
                            minRuntimeVersion: r,
                            enableGPUAcceleration: "true",
                            background: "#000000",
                            enableHtmlAccess: "true"
                        },
                        initParams: l,
                        events: {
                            onLoad: this.onPlayerLoad,
                            onError: this.onPlayerError
                        }
                    })
                }, t.prototype.on = function(t, e) {
                    this.eventEmitter.on(t, e)
                }, t.prototype.once = function(t, e) {
                    this.eventEmitter.once(t, e)
                }, t.prototype.off = function(t, e) {
                    this.eventEmitter.off(t, e)
                }, t.prototype.stop = function() {
                    this.clearMonitor()
                }, t.prototype.clearMonitor = function() {
                    clearInterval(this.monitoringTimer), clearTimeout(this.monitoringTimer), this.monitoringTimer = null
                }, t.prototype.isSilverlightPluginLoaded = function() {
                    var t = document.getElementById(this.pluginId);
                    return null !== t && "undefined" != typeof t.isVersionSupported
                }, t.prototype.generateInitParamString = function(t) {
                    var e = new Array;
                    for (var i in t) t.hasOwnProperty(i) && "string" == typeof t[i] && null !== t[i] && e.push(i + "=" + t[i]);
                    return e.join(",")
                }, t.SILVERLIGHT_PLUGIN_LOAD_POLL_INTERVAL = 500, t.PLAYER_LOAD_TIMEOUT = 6e4, t)
            }();
        e.exports = h
    }, {
        258: 258,
        260: 260,
        261: 261,
        262: 262,
        281: 281,
        284: 284,
        82: 82
    }],
    260: [function(t, e, i) {
        "use strict";
        var n = t(294),
            r = function() {
                function t(t, e, i) {
                    this.errorCode = t, this.errorType = e, this.errorMessage = i
                }
                return (t.toString = function() {
                    return "silverlightPlayerLoadError"
                }, t.prototype.getErrorCode = function() {
                    return this.errorCode
                }, t.prototype.getErrorType = function() {
                    return this.errorType
                }, t.prototype.getErrorMessage = function() {
                    return this.errorMessage
                }, t.prototype.isCorruptionError = function() {
                    return n.contains([2103, 2104, 2105, 2150, 2152, 2153, t.LOAD_TIMEOUT_ERROR_CODE], this.errorCode)
                }, t.LOAD_TIMEOUT_ERROR_CODE = "sl_timeout", t)
            }();
        e.exports = r
    }, {
        294: 294
    }],
    261: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t() {}
            return (t.toString = function() {
                return "silverlightPlayerLoaded"
            }, t)
        }();
        e.exports = n
    }, {}],
    262: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t() {}
            return (t.toString = function() {
                return "silverlightPluginLoaded"
            }, t)
        }();
        e.exports = n
    }, {}],
    263: [function(t, e, i) {
        "use strict";
        var n = t(203),
            r = n.ConsumptionType,
            o = n.Protocol,
            s = t(202),
            a = s.DesiredResources,
            l = s.LanguageFeature,
            c = s.PRSResponseValidator,
            u = s.ResourceUsage,
            p = s.VideoMaterialType,
            h = t(281),
            f = t(159),
            d = t(284),
            y = t(93),
            g = t(294),
            m = h.of("SilverlightResourceAcquirer"),
            v = d.get("SilverlightResourceAcquirer"),
            E = function() {
                function t(t, e, i, n) {
                    void 0 === i && (i = function(t) {
                        return btoa(t)
                    }), void 0 === n && (n = new c), this.encodeB64 = null, this.playbackResourceClient = m(t, "playbackResourceClient").exists(), this.configurationStore = m(e, "configurationStore").exists(), this.encodeB64 = i, this.prsResponseValidator = n
                }
                return (t.prototype.acquireLicense = function(t, e, i, n) {
                    var o = this;
                    m(t, "licenseChallenge").exists(), m(e, "asin").exists(), m(i, "onSuccess").exists(), m(n, "onError").exists();
                    var s = this.encodeB64(t);
                    this.request = this.playbackResourceClient.createRequest(e, r.Streaming, [a.PlayReadyLicense], u.ImmediateConsumption, p.Feature, this.configurationStore.getValue().userWatchSessionId).withPlayReadyChallenge(s), v.info("Requesting PlayReady license from PRS."), this.request.send(function(t) {
                        v.info("Got license from PRS."), o.request = null;
                        var e = o.validateLicenseResponse(t);
                        return null !== e ? (v.error("Bad license response.", e), void n(JSON.stringify(e))) : void i(t.playReadyLicense.encodedLicenseResponse)
                    }, function(t) {
                        v.error("Failed to retrieve license.", t), o.request = null, n(JSON.stringify(t))
                    })
                }, t.prototype.acquireResources = function(e, i, n, s) {
                    var a = this;
                    m(e, "asin").exists(), m(i, "videoMaterialType").exists(), m(n, "onSuccess").exists(), m(s, "onError").exists(), this.request = this.playbackResourceClient.createRequest(e, r.Streaming, t.DESIRED_RESOURCES, u.ImmediateConsumption, i, this.configurationStore.getValue().userWatchSessionId).withAudioTrackId(t.AUDIO_TRACK_ALL).withDeviceProtocolOverride(o.Https).withLanguageFeature(l.MLFv2).withTitleDecorationScheme(t.PLAYER_TITLE_DECORATION_SCHEME), v.info("Requesting playback resources from PRS."), this.request.send(function(t) {
                        v.info("Got desired playback resources from PRS."), a.request = null;
                        var e = a.prsResponseValidator.validateResponse(t);
                        return null !== e ? void s(JSON.stringify(e)) : void n(JSON.stringify(t), !g.isEmpty(t.forcedNarratives))
                    }, function(t) {
                        v.error("Failed to retrieve playback resources from PRS.", t), a.request = null, s(JSON.stringify(t))
                    })
                }, t.prototype.acquireNextEpisodeResources = function(e, i, n, s) {
                    var l = this;
                    m(e, "asin").exists(), m(i, "videoMaterialType").exists(), m(n, "onSuccess").exists(), m(s, "onError").exists(), this.request = this.playbackResourceClient.createRequest(e, r.Streaming, [a.CatalogMetadata], u.ImmediateConsumption, i, this.configurationStore.getValue().userWatchSessionId).withDeviceProtocolOverride(o.Https).withTitleDecorationScheme(t.PLAYER_TITLE_DECORATION_SCHEME), v.info("Requesting playback resources for next episode from PRS."), this.request.send(function(t) {
                        v.info("Got desired playback resources for next episode from PRS."), l.request = null, n(JSON.stringify(t))
                    }, function(t) {
                        v.error("Failed to retrieve playback resources for next episode from PRS.", t), l.request = null, s(JSON.stringify(t))
                    })
                }, t.prototype.abort = function() {
                    y.isNullOrUndefined(this.request) || this.request.abort()
                }, t.prototype.validateLicenseResponse = function(e) {
                    var i = y.nestedValue(e, "errorsByResource.PlayReadyLicense");
                    if (null !== i) return f.newError(t.DRM_ERROR, JSON.stringify(i));
                    if (null === y.nestedValue(e, "playReadyLicense.encodedLicenseResponse") || "" === e.playReadyLicense.encodedLicenseResponse) {
                        var n = y.nestedValue(e, "playReadyLicense.asinResponse.message");
                        return null === n ? f.newError(t.DRM_ERROR, "PlayReady license is missing from PRS response") : f.newError(t.DRM_ERROR, n)
                    }
                    return null
                }, t.AUDIO_TRACK_ALL = "all", t.DESIRED_RESOURCES = [a.AudioVideoUrls, a.CatalogMetadata, a.CuepointPlaylist, a.ForcedNarratives, a.SubtitlePresets, a.SubtitleUrls], t.DRM_ERROR = "DrmError", t.PLAYER_TITLE_DECORATION_SCHEME = "primary-content", t)
            }();
        e.exports = E
    }, {
        159: 159,
        202: 202,
        203: 203,
        281: 281,
        284: 284,
        294: 294,
        93: 93
    }],
    264: [function(t, e, i) {
        "use strict";
        var n = t(58),
            r = n.TokenType,
            o = t(231),
            s = o.AbortEvent,
            a = o.AsinChangedEvent,
            l = o.CloseEvent,
            c = o.DiagnosticsState,
            u = o.ErrorSeverity,
            p = o.Features,
            h = o.FirstFrameEvent,
            f = o.InitializedEvent,
            d = o.PINAcceptedEvent,
            y = o.PINDeclinedEvent,
            g = o.PINErrorEvent,
            m = o.PINRequiredEvent,
            v = o.PlayingEvent,
            E = o.PreparedEvent,
            _ = o.NotificationCancelEvent,
            S = o.NotificationEvent,
            T = o.VideoType,
            b = t(243),
            w = b.MetricsContextFactory,
            I = t(187),
            R = t(272),
            C = R.OperatingSystemFamily,
            P = t(265),
            A = t(80),
            O = A.DeviceTypeId,
            N = t(82),
            x = t(93),
            M = t(281),
            k = t(284),
            L = t(255),
            D = t(256),
            U = t(259),
            F = t(261),
            W = t(260),
            H = t(262),
            B = t(263),
            V = t(257),
            q = t(113),
            j = q.LocalStorage,
            z = t(202),
            G = z.PlaybackResourceClient,
            Y = z.VideoMaterialType,
            K = t(170),
            X = K.GetSectionsClient,
            Q = t(288),
            J = t(294),
            Z = M.of("SilverlightWebPlayer"),
            $ = k.get("SilverlightWebPlayer"),
            tt = "xap/ATVSilverlightWebPlayer.xap",
            et = 2e3,
            it = "SilverlightAuthError",
            nt = "SilverlightCorruptionError",
            rt = "PluginLoadBlocked",
            ot = "silverlightCorruptionMac",
            st = "silverlightCorruptionWindows",
            at = "SilverlightStartupError",
            lt = "SilverlightUnsupportedFeatureError",
            ct = "<ol>{{#steps}}<li>{{{.}}}</li>{{/steps}}</ol>",
            ut = "GetPlaybackResourcesError",
            pt = "GetPlaybackResourcesTime",
            ht = "GetSectionsError",
            ft = "GetSectionsTime",
            dt = "none",
            yt = "amazon",
            gt = "5.1",
            mt = !1,
            vt = "THIRD_PARTY_SUBSCRIPTION",
            Et = function() {
                function t(t, e, i, n, r, o, s, a, l) {
                    void 0 === r && (r = new U), void 0 === o && (o = new w), void 0 === s && (s = X), void 0 === a && (a = new j), void 0 === l && (l = document), this.Features = p, this.playerConfig = null, this.customerId = null, this.partnerServiceUrl = null, this.domElement = null, this.xapUrl = null, this.diagnostics = null, this.asin = null, this.startPosition = null, this.playTrailer = null, this.pinRequired = null, this.pinVerified = null, this.pluginBridge = null, this.currentPosition = 0, this.contentDuration = 1, this.spinnerPanel = null, this.getSectionsClient = null, this.playbackResourceClient = null, this.resourceAcquirer = null, this.tokenClient = null, this.loaderConfig = Z(t, "loaderConfig").exists(), this.qosReporter = Z(e, "qosReporter").exists(), this.spinnerPanel = i, this.createModalTemplate = n, this.initializer = r, this.metricsContextFactory = o, this.getSectionsClientType = s, this.eventEmitter = new N.BasicEventEmitter, this.storage = a, this.documentRef = l, this.os = R.getOperatingSystem(), this.browser = R.getBrowser(), this.isInitialized = !1, this.isPrepared = !1, this.isPluginLoading = !1, this.pluginBlockedNotification = null, this.silverlightWaitTimer = null, this.pluginLoadedCallback = null, this.playerLoadedCallback = null, this.playerLoadErrorCallback = null
                }
                return (t.prototype.initialize = function(t) {
                    this.playerConfig = Z(t, "playerConfig").exists(), Z(t.marketplaceId, "playerConfig.marketplaceId").exists(), Z(t.partnerServiceEndpoint, "playerConfig.partnerServiceEndpoint").exists(), Z(t.domElement, "playerConfig.domElement").exists(), Z(t.domElement.id, "playerConfig.domElement.id").exists(), Z(t.locale, "playerConfig.locale").exists(), Z(t.deviceId, "playerConfig.deviceId").exists(), Z(t.weblabs, "playerConfig.weblabs").exists(), this.customerId = x.withDefault(t.customerId, null), this.tokenClient = x.withDefault(t.tokenClient, null), this.partnerServiceUrl = t.partnerServiceEndpoint.replace(//$/, "") + "/cdp/", this.domElement = this.documentRef.createElement("div"), this.domElement.className = "webPlayerElement", this.diagnostics = t.diagnostics !== c.Disabled;
                    var e = this.loaderConfig.dependencies.ATVWebPlayer,
                        i = this.loaderConfig.assetsRoot + "/" + e.name + "/" + e.version,
                        n = this.loaderConfig.dependencies.DVWebGlobalPlayer;
                    this.xapUrl = this.loaderConfig.assetsRoot + "/" + n.name + "/" + n.version + "/" + tt, 0 === location.protocol.indexOf("http:") && (this.xapUrl = this.xapUrl.replace("https:", "http:")), t.domElement.innerHTML = "", t.domElement.appendChild(this.domElement), this.spinnerPanel.initialize(t.domElement, i, !0, this.domElement), this.metricsContext = this.metricsContextFactory.createMetricsContext(t.partnerServiceEndpoint, t.deviceId, this.getDeviceTypeId(), t.marketplaceId, t.customerId, this.tokenClient), this.getSectionsClient = this.createGetSectionsClient(t), this.playbackResourceClient = new G(t.deviceId, this.getDeviceTypeId(), t.marketplaceId, t.partnerServiceEndpoint, this.createAuthenticationContext(t)), this.resourceAcquirer = new B(this.playbackResourceClient, t.configurationStore), this.isInitialized = !0, this.pinRequired = !1, this.pinVerified = !1, this.eventEmitter.emit(f)
                }, t.prototype.prepareCache = function(t) {}, t.prototype.prepare = function(t) {
                    Z(this.isInitialized, "this.isInitialized").is["true"](), Z(t, "contentConfig").exists(), Z(t.asin, "contentConfig.asin").exists(), this.asin = t.asin, this.startPosition = "number" == typeof t.position ? t.position : 0, this.playTrailer = t.videoType === T[T.Trailer], this.isPrepared = !0, this.qosReporter.setAsin(t.asin), this.metricsContext.contentPreparationStarted(this.asin, this.playTrailer), this.metricsContext.contentPreparationSucceeded(), this.eventEmitter.emit(E, new E)
                }, t.prototype.play = function(t) {
                    return (Z(t, "playbackConfig").exists(), Z(t.playbackInitiatedTime, "playbackConfig.playbackInitiatedTime").exists(), this.isPrepared ? null !== this.pluginBridge || this.isPluginLoading ? void $.warn("Ignoring call to play: play has already been called") : (this.metricsContext.prepareClickstream(this.playerConfig.sessionId, t.clickstreamRefMarker), this.metricsContext.playbackInitiated(t.playbackInitiatedTime), t = x.exists(t) ? t : {}, void this.loadPlugin(t.audioTrackId)) : void $.warn("Ignoring call to play: SilverlightWebPlayer has not been prepared"))
                }, t.prototype.playbackInitiated = function() {}, t.prototype.stop = function() {
                    this.isPluginLoading && (this.stopWaitingForSilverlight(), this.initializer.stop(), this.isPluginLoading = !1), null !== this.pluginBridge && ("function" == typeof this.pluginBridge.exitVideoPlayer && this.pluginBridge.exitVideoPlayer(), this.pluginBridge = null), null !== this.pluginLoadedCallback && (this.initializer.off(H, this.pluginLoadedCallback), this.pluginLoadedCallback = null), null !== this.playerLoadedCallback && (this.initializer.off(F, this.playerLoadedCallback), this.playerLoadedCallback = null), null !== this.playerLoadErrorCallback && (this.initializer.off(W, this.playerLoadErrorCallback), this.playerLoadErrorCallback = null), null !== this.domElement && (this.domElement.innerHTML = ""), this.asin = null, this.startPosition = null, this.playTrailer = null, this.isPrepared = !1, this.pinRequired = !1, this.pinVerified = !1, this.eventEmitter.emit(f)
                }, t.prototype.seek = function(t) {
                    Z(t, "position").exists(), Z(t >= 0, "position >= 0").is["true"](), null === this.pluginBridge ? this.isPrepared ? this.startPosition = t : $.warn("Player is not initialized, ignoring call to Seek") : this.pluginBridge.PositionSyncRequest(t + "")
                }, t.prototype.on = function(t, e) {
                    this.eventEmitter.on(t, e)
                }, t.prototype.once = function(t, e) {
                    this.eventEmitter.once(t, e)
                }, t.prototype.off = function(t, e) {
                    this.eventEmitter.off(t, e)
                }, t.prototype.getPosition = function() {
                    return this.currentPosition
                }, t.prototype.getDuration = function() {
                    return this.contentDuration
                }, t.prototype.getDeviceTypeId = function() {
                    return this.os.getFamily() === C.Mac ? O.SILVERLIGHT_MAC : O.SILVERLIGHT_PC
                }, t.prototype.validatePIN = function(t) {
                    "undefined" != typeof this.pluginBridge ? (this.metricsContext.pinSubmitted(), this.pluginBridge.ValidatePIN(t)) : $.warn("Player is not initialized, ignoring call to ValidatePin")
                }, t.prototype.getFeature = function(t, e, i) {
                    i(new Error("The Silverlight player does not support any features."))
                }, t.prototype.generateInitParameters = function(t) {
                    var e = {};
                    return (e.host = yt, e.customer = this.customerId, e.marketplace = this.playerConfig.marketplaceId, e.culture = this.playerConfig.locale, e.deviceId = this.playerConfig.deviceId, e.partnerService = this.partnerServiceUrl, e.diag = "" + this.diagnostics, e.auto_play = "false", e.userAgent = this.browser.toString(), e.asin = this.asin, e.v2api = "true", e.playTrailer = this.playTrailer ? "1" : "0", e.timeCode = "" + this.startPosition, e.clientVersion = this.loaderConfig.dependencies.DVWebGlobalPlayer.version, e.weblabs = P.stringify(this.playerConfig.weblabs), e.userWatchSessionId = this.playerConfig.configurationStore.getValue().userWatchSessionId, e.primitiveSessionId = this.playerConfig.configurationStore.getValue().primitiveSessionId, e.amazonSessionId = this.playerConfig.sessionId, "string" == typeof t && (e.audiotrackid = t), e)
                }, t.prototype.createPluginEventListeners = function() {
                    var t = this;
                    this.pluginBridge.OnAcquireLicense = function(e, i, n) {
                        t.onAcquireLicense(e, i, n)
                    }, this.pluginBridge.OnChangeASIN = function(e) {
                        t.onASINChange(e)
                    }, this.pluginBridge.OnClosePlayer = function() {
                        t.onPlayerClose()
                    }, this.pluginBridge.OnContentPrepared = function(e, i) {
                        t.onContentPrepared(e, i)
                    }, this.pluginBridge.OnFirstFrame = function() {
                        return t.onFirstFrame()
                    }, this.pluginBridge.OnGetNextEpisodePlaybackResources = function(e, i, n) {
                        t.onGetNextPlaybackResources(e, i, n)
                    }, this.pluginBridge.OnGetPlaybackResources = function(e, i, n) {
                        t.onGetPlaybackResources(e, i, n)
                    }, this.pluginBridge.OnGetSections = function(e, i, n) {
                        t.onGetSections(e, i, n)
                    }, this.pluginBridge.OnMediaStateChanged = function(e) {
                        t.onMediaStateChanged(e)
                    }, this.pluginBridge.OnPINRequired = function(e, i, n) {
                        t.onPINRequired(e, i, n)
                    }, this.pluginBridge.OnPINAccepted = function() {
                        t.onPINAccepted()
                    }, this.pluginBridge.OnPINDeclined = function() {
                        t.onPINDeclined()
                    }, this.pluginBridge.OnPINError = function() {
                        t.onPINError()
                    }, this.pluginBridge.OnPlayerEvent = function(e, i) {
                        t.onPlayerEvent(e, i)
                    }, this.pluginBridge.OnTokenRequired = function(e) {
                        t.onTokenRequired(e)
                    }, this.pluginBridge.OnReloadPlayer = function() {
                        document.location.reload(!0)
                    }
                }, t.prototype.onTokenRequired = function(t) {
                    var e = this;
                    return ($.info("The Silverlight player emitted a TokenRequired event"), x.isNullOrUndefined(this.tokenClient) ? void t(null, null) : void this.tokenClient.getToken(function(e) {
                        t(e.token, e.type === r.OAUTH ? "oauth" : "website")
                    }, function(t) {
                        e.abort(it, "An error occurred while trying to acquire an auth token: " + t, u.Fatal)
                    }))
                }, t.prototype.onPINError = function() {
                    $.info("Emitted a PINError event"), this.eventEmitter.emit(g)
                }, t.prototype.onPINRequired = function(t, e, i) {
                    $.info("Emitted a PINRequired event"), this.pinVerified ? $.info("Ignoring PINRequired event as the PIN has already been verified") : (this.pluginBridge.HideLoadingScreen(), this.pinRequired = !0, this.metricsContext.pinDialogDisplayed(),
                        this.eventEmitter.emit(m, new m(t, e, i, !0)))
                }, t.prototype.onPINAccepted = function() {
                    $.info("Emitted a PINAccepted event"), this.metricsContext.pinAccepted(), this.pinRequired = !1, this.pinVerified = !0, this.pluginBridge.Play(), this.eventEmitter.emit(d), this.pluginBridge.ShowLoadingScreen()
                }, t.prototype.onPINDeclined = function() {
                    $.info("Emitted a PINDeclined event"), this.metricsContext.pinDeclined(), this.eventEmitter.emit(y)
                }, t.prototype.onPlayerEvent = function(t, e) {
                    "position" === t && "number" == typeof e ? this.currentPosition = e : "loaded" === t && "undefined" != typeof e && "number" == typeof e.duration && (this.contentDuration = e.duration)
                }, t.prototype.onMediaStateChanged = function(t) {
                    switch ($.info("Changed state to " + t), t) {
                        case "Playing":
                            this.eventEmitter.emit(v);
                            break;
                        case "Buffering":
                            break;
                        case "Paused":
                            break;
                        case "Ended":
                            this.eventEmitter.emit(l)
                    }
                }, t.prototype.onASINChange = function(t) {
                    $.info("Changed ASIN to " + t), "string" == typeof t && t.length > 0 && null !== this.pluginBridge ? (this.metricsContext.nextTitlePlaybackInitiated(J.now()), this.metricsContext.clickstreamNextTitle(), this.metricsContext.contentPreparationStarted(t, !1), this.metricsContext.contentPreparationSucceeded(), this.asin = t, this.eventEmitter.emit(a, new a(t))) : $.error("Unable to change to asin: " + t)
                }, t.prototype.onPlayerClose = function() {
                    $.info("Emitted a Close event"), this.eventEmitter.emit(l)
                }, t.prototype.loadPlugin = function(t) {
                    var e = this;
                    this.isPluginLoading = !0;
                    var i = this.generateInitParameters(t);
                    $.info("Initialization parameters:", i);
                    var n = "silverlight_player_" + Math.floor(1e4 * Math.random());
                    this.silverlightWaitTimer = setTimeout(function() {
                        return e.notifySilverlightNotLoaded()
                    }, et), this.pluginLoadedCallback = function() {
                        e.onSilverlightLoaded()
                    }, this.playerLoadedCallback = function() {
                        e.onPluginLoaded(n)
                    }, this.playerLoadErrorCallback = function(t) {
                        e.onPluginError(t)
                    }, this.initializer.on(H, this.pluginLoadedCallback), this.initializer.on(F, this.playerLoadedCallback), this.initializer.on(W, this.playerLoadErrorCallback), this.hideSpinner(), this.metricsContext.appLoadStarted(), this.initializer.initialize(this.domElement, n, this.xapUrl, gt, mt, i)
                }, t.prototype.showSpinner = function() {
                    this.spinnerPanel.show()
                }, t.prototype.hideSpinner = function() {
                    this.spinnerPanel.hide()
                }, t.prototype.notifySilverlightNotLoaded = function() {
                    this.isPluginLoading && (this.pluginBlockedNotification = new D, this.eventEmitter.emit(S, this.pluginBlockedNotification), this.qosReporter.reportError(rt, u.NonFatal, "Silverlight plugin blocked or possibly corrupted"))
                }, t.prototype.stopWaitingForSilverlight = function() {
                    null !== this.pluginBlockedNotification && (this.eventEmitter.emit(_, new _(this.pluginBlockedNotification)), this.pluginBlockedNotification = null), null !== this.silverlightWaitTimer && (clearInterval(this.silverlightWaitTimer), this.silverlightWaitTimer = null)
                }, t.prototype.onSilverlightLoaded = function() {
                    this.isPluginLoading && (this.stopWaitingForSilverlight(), this.showSpinner())
                }, t.prototype.onPluginLoaded = function(t) {
                    this.isPluginLoading = !1;
                    var e = this.metricsContext.appLoadCompleted();
                    this.stopWaitingForSilverlight(), this.hideSpinner();
                    var i = document.getElementById(t);
                    if (x.isNullOrUndefined(i)) return void this.abort(at, "Unable to access the Silverlight plugin through the JavaScript bridge", u.Fatal);
                    var n = i.content;
                    if (x.isNullOrUndefined(n) || x.isNullOrUndefined(n.Bridge)) return void this.abort(at, "Unable to access the Silverlight plugin through the JavaScript bridge", u.Fatal);
                    var r = new V;
                    r.shouldShow(this.playTrailer) && this.eventEmitter.emit(S, r.createNotification()), $.info("Successfully initialized"), this.pluginBridge = n.Bridge, this.createPluginEventListeners(), x.exists(e) ? this.pluginBridge.Prepare('{"playerLoadTime": ' + e + " }", !0) : this.pluginBridge.Prepare()
                }, t.prototype.onContentPrepared = function(t, e) {
                    $.info("Prepared ASIN " + t + " and is ready to play it."), this.pinRequired && !this.pinVerified || this.pluginBridge.Play()
                }, t.prototype.onPluginError = function(t) {
                    this.stopWaitingForSilverlight();
                    var e;
                    if (t.isCorruptionError()) {
                        e = "Unable to load Silverlight plugin: code: " + t.getErrorCode() + ", type: " + t.getErrorType() + ", message: " + t.getErrorMessage();
                        var i = void 0,
                            n = void 0;
                        this.os.getFamily() === C.Mac ? (i = ot, n = ct) : (i = st, n = this.createWindowsExtraText()), this.abort(nt, e, u.Fatal, this.createModalTemplate(i, n))
                    } else e = "Unable to load Silverlight plugin: code: " + t.getErrorCode() + ", type: " + t.getErrorType() + ", message: " + t.getErrorMessage(), this.abort(at, e, u.Fatal)
                }, t.prototype.createWindowsExtraText = function() {
                    var t = "manual_repair_steps_" + Q.v4().replace(/-/g, ""),
                        e = "(function () {const e = document.getElementById('" + t + "');e.style.display = e.style.display === 'none' ? '' : 'none';})();";
                    return '<ol>{{#fixItToolSteps}}<li>{{{.}}}</li>{{/fixItToolSteps}}</ol>{{#manualRepairSteps}}{{{preLinkText}}}<a href="javascript:' + e + '">{{{linkText}}}</a>{{{postLinkText}}}<ol id="' + t + '" style="display:none;">{{#steps}}<li>{{{.}}}</li>{{/steps}}</ol>{{/manualRepairSteps}}'
                }, t.prototype.onFirstFrame = function() {
                    $.info("Emitted a FirstFrame event"), this.metricsContext.clickstreamPlaybackStarted();
                    var t = this.metricsContext.playbackStarted(!0);
                    return (this.eventEmitter.emit(h), {
                        ttff: t
                    })
                }, t.prototype.onAcquireLicense = function(t, e, i) {
                    $.info("Acquiring DRM license"), this.resourceAcquirer.acquireLicense(t, this.asin, function(t) {
                        e(t)
                    }, function(t) {
                        i(t)
                    })
                }, t.prototype.onGetNextPlaybackResources = function(t, e, i) {
                    var n = this;
                    $.info("Acquiring playback resources for the next episode"), this.acquireResourcesTimer = I.startTimer(pt), this.resourceAcquirer.acquireNextEpisodeResources(t, Y.Feature, function(t) {
                        n.qosReporter.reportInformation(pt, null, n.acquireResourcesTimer.end()), e(t)
                    }, function(t) {
                        I.putMetric(ut), i(t)
                    })
                }, t.prototype.hasUnsupportedFeature = function(t) {
                    var e = {};
                    try {
                        e = JSON.parse(t)
                    } catch (t) {}
                    var i = x.nestedValue(e, "returnedTitleRendition.timeShift"),
                        n = x.nestedValue(e, "cuepointPlaylist.encodedManifest"),
                        r = x.nestedValue(e, "returnedTitleRendition.selectedEntitlement"),
                        o = r.entitlementType === vt;
                    return o && x.exists(n) || J.some(i, function(t) {
                        return t.enabled === !1
                    })
                }, t.prototype.onGetPlaybackResources = function(t, e, i) {
                    var n = this;
                    $.info("Acquiring playback resources"), this.acquireResourcesTimer = I.startTimer(pt), this.resourceAcquirer.acquireResources(t, this.playTrailer ? Y.Trailer : Y.Feature, function(t, i) {
                        if (n.qosReporter.reportInformation(pt, null, n.acquireResourcesTimer.end()), n.hasUnsupportedFeature(t)) return void n.abort(lt, "Title requires a feature which Silverlight doesn't support.", u.NonFatal);
                        if (i) {
                            n.pluginBridge.ToggleCaptions(!0);
                            var r = new L;
                            r.shouldShowNotification() && n.eventEmitter.emit(S, r.createNotification())
                        }
                        e(t)
                    }, function(t) {
                        I.putMetric(ut), i(t)
                    })
                }, t.prototype.onGetSections = function(t, e, i) {
                    $.info("Calling GetSections"), this.getSectionsClient.getSections(t, dt, function(t, i) {
                        I.putMetric(ft, i, I.MILLISECONDS), e(JSON.stringify(t))
                    }, function(t, e) {
                        I.putMetric(ht), x.exists(e) && I.putMetric(ft, e, I.MILLISECONDS), i(JSON.stringify(t))
                    })
                }, t.prototype.abort = function(t, e, i, n) {
                    this.eventEmitter.emit(s, new s(t, e, i, n))
                }, t.prototype.createAuthenticationContext = function(t) {
                    if (x.isNullOrUndefined(t.customerId)) return null;
                    var e = {
                        customerId: t.customerId,
                        tokenClient: t.tokenClient
                    };
                    return e
                }, t.prototype.createGetSectionsClient = function(t) {
                    return x.isNullOrUndefined(t.customerId) ? null : new this.getSectionsClientType(t.deviceId, this.getDeviceTypeId(), t.marketplaceId, t.partnerServiceEndpoint, {
                        customerId: t.customerId,
                        tokenClient: t.tokenClient
                    })
                }, t)
            }();
        e.exports = Et
    }, {
        113: 113,
        170: 170,
        187: 187,
        202: 202,
        231: 231,
        243: 243,
        255: 255,
        256: 256,
        257: 257,
        259: 259,
        260: 260,
        261: 261,
        262: 262,
        263: 263,
        265: 265,
        272: 272,
        281: 281,
        284: 284,
        288: 288,
        294: 294,
        58: 58,
        80: 80,
        82: 82,
        93: 93
    }],
    265: [function(t, e, i) {
        "use strict";
        var n = t(93),
            r = t(281),
            o = t(80),
            s = o.WeblabTreatment,
            a = r.of("WeblabStringifier"),
            l = function() {
                function t() {}
                return (t.stringify = function(t) {
                    a(t, "weblabs").exists();
                    var e = [];
                    for (var i in t)
                        if (t.hasOwnProperty(i)) {
                            var r = t[i],
                                o = n.isNullOrUndefined(r) ? "C" : s[r];
                            e.push(i + ":" + o)
                        } return e.join(" ")
                }, t)
            }();
        e.exports = l
    }, {
        281: 281,
        80: 80,
        93: 93
    }],
    266: [function(t, e, i) {
        "use strict";
        var n = t(264),
            r = {
                SilverlightWebPlayer: n
            };
        e.exports = r
    }, {
        264: 264
    }],
    267: [function(t, e, i) {
        "use strict";
        var n = t(93),
            r = t(281),
            o = t(113),
            s = o.Version,
            a = t(268),
            l = r.of("Browser"),
            c = function() {
                function t(t, e) {
                    this.type = l(t, "type").exists(), this.version = n.isNullOrUndefined(e) ? null : e
                }
                return (t.fromUserAgent = function(e) {
                    for (var i = 0; i < t.REGEXES.length; i++) {
                        var n = t.REGEXES[i].regex.exec(e);
                        if (n) {
                            var r = n[1] ? s.fromString(n[1]) : null;
                            return new t(t.REGEXES[i].type, r)
                        }
                    }
                    return new t(a.Unknown)
                }, t.prototype.getType = function() {
                    return this.type
                }, t.prototype.getVersion = function() {
                    return this.version
                }, t.prototype.toString = function() {
                    var t = a[this.type];
                    return (null !== this.version && (t += " " + this.version), t)
                }, t.prototype.equals = function(t) {
                    return this.type === t.type && (null === this.version ? null === t.version : this.version.equals(t.version))
                }, t.UNKNOWN = new t(a.Unknown), t.REGEXES = [{
                    regex: /(?:Camino|Chimera|hpwOS|webOS|Play[Ss]tation)//,
                    type: a.Unknown
                }, {
                    regex: /Silk/(d+[.0-9-]+)/,
                    type: a.Silk
                }, {
                    regex: /(?:BlackBerry|BB10).*Version/(d+[.0-9]*)/,
                    type: a.BlackBerry
                }, {
                    regex: /(?:OPR/|Opera |Opera.*Version/)(d+[.0-9]*)/,
                    type: a.Opera
                }, {
                    regex: /(?:Edg)/(d+[.0-9]*)/,
                    type: a.EdgeNext
                }, {
                    regex: /(?:Edge)/(d+[.0-9]*)/,
                    type: a.Edge
                }, {
                    regex: /(?:MSIE |Trident.*rv:)(d+[.0-9]*)/,
                    type: a.IE
                }, {
                    regex: /Chromium/(d+[.0-9]*)/,
                    type: a.Chromium
                }, {
                    regex: /(?:Chrome|CriOS)/(d+[.0-9]*)/,
                    type: a.Chrome
                }, {
                    regex: /SeaMonkey/(d+[.0-9]*)/,
                    type: a.SeaMonkey
                }, {
                    regex: /x64;.*Firefox/(d+[.0-9]*)/,
                    type: a.Firefox64
                }, {
                    regex: /Firefox/(d+[.0-9]*)/,
                    type: a.Firefox
                }, {
                    regex: /(?:Amazon.com|Windowshop|Amazon)/(d+[.0-9]*)/,
                    type: a.AmazonWebView
                }, {
                    regex: /Android[ -/](d+[.0-9a-z-]*)/,
                    type: a.Android
                }, {
                    regex: /Version/(d+[.0-9]*).*Safari/,
                    type: a.Safari
                }, {
                    regex: /AppleWebKit/(d+[.0-9]*)/,
                    type: a.AppleWebKit
                }], t)
            }();
        e.exports = c
    }, {
        113: 113,
        268: 268,
        281: 281,
        93: 93
    }],
    268: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t[t.Unknown = 0] = "Unknown", t[t.AmazonWebView = 1] = "AmazonWebView", t[t.Android = 2] = "Android", t[t.AppleWebKit = 3] = "AppleWebKit", t[t.BlackBerry = 4] = "BlackBerry", t[t.Chrome = 5] = "Chrome", t[t.Chromium = 6] = "Chromium", t[t.Edge = 7] = "Edge", t[t.EdgeNext = 8] = "EdgeNext", t[t.Firefox = 9] = "Firefox", t[t.Firefox64 = 10] = "Firefox64", t[t.IE = 11] = "IE", t[t.Opera = 12] = "Opera", t[t.Safari = 13] = "Safari", t[t.SeaMonkey = 14] = "SeaMonkey", t[t.Silk = 15] = "Silk"
        }(n || (n = {})), e.exports = n
    }, {}],
    269: [function(t, e, i) {
        "use strict";
        var n, r = t(93),
            o = t(281),
            s = t(113),
            a = s.Version,
            l = t(270),
            c = t(271),
            u = (n = {}, n[l.Unknown] = "Unknown", n[l.Android] = "Android", n[l.BlackBerry] = "BlackBerry", n[l.ChromeOS] = "Chrome OS", n[l.FirefoxOS] = "Firefox OS", n[l.GoogleTV] = "Google TV", n[l.iOS] = "iOS", n[l.Linux] = "Linux", n[l.Mac] = "Mac OS X", n[l.MacPPC] = "Mac OS PPC", n[l.Windows] = "Windows", n[l.WindowsPhone] = "Windows Phone", n[l.WindowsRT] = "Windows RT", n[l.XboxOne] = "Xbox One", n),
            p = o.of("OperatingSystem"),
            h = function() {
                function t(t, e, i) {
                    this.family = p(t, "family").exists(), this.version = r.isNullOrUndefined(e) ? a.createUnknownVersion() : e, this.kernelVersion = r.isNullOrUndefined(i) ? this.version : i
                }
                return (t.fromUserAgent = function(e) {
                    for (var i = 0; i < t.REGEXES.length; i++) {
                        var n = t.REGEXES[i].regex.exec(e);
                        if (n) return t.REGEXES[i].handler(n)
                    }
                    return new t(l.Unknown)
                }, t.prototype.getFamily = function() {
                    return this.family
                }, t.prototype.getFamilyName = function() {
                    return u[this.family] || null
                }, t.prototype.getVersion = function() {
                    return this.version
                }, t.prototype.getKernelVersion = function() {
                    return this.kernelVersion
                }, t.prototype.toString = function() {
                    var t = u[this.family];
                    return (null === this.version || this.version.isUnknownVersion() || (t += " " + this.version), t)
                }, t.prototype.equals = function(t) {
                    return this.family === t.family && (null === this.version ? null === t.version : this.version.equals(t.version))
                }, t.UNKNOWN = new t(l.Unknown), t.MAC_OS_X_YOSEMITE = new t(l.Mac, a.fromString("10.10")), t.WINDOWS_2000 = new t(l.Windows, c.WINDOWS_2000), t.WINDOWS_XP = new t(l.Windows, c.WINDOWS_XP), t.WINDOWS_VISTA = new t(l.Windows, c.WINDOWS_VISTA), t.WINDOWS_7 = new t(l.Windows, c.WINDOWS_7), t.WINDOWS_8 = new t(l.Windows, c.WINDOWS_8), t.WINDOWS_8_1 = new t(l.Windows, c.WINDOWS_8_1), t.WINDOWS_10 = new t(l.Windows, c.WINDOWS_10), t.REGEXES = [{
                    regex: /Windows ?Mobile|Xbox(?!.*One)|Play[Ss]tation/,
                    handler: function() {
                        return new t(l.Unknown)
                    }
                }, {
                    regex: /Windows Phone(?: (?:OS[ /])?(d+[.0-9]*))?/,
                    handler: function(e) {
                        var i = e[1] ? a.fromString(e[1]) : null;
                        return new t(l.WindowsPhone, i)
                    }
                }, {
                    regex: /Xbox One(?: (?:OS[ /])?(d+[.0-9]*))?/,
                    handler: function(e) {
                        var i = e[1] ? a.fromString(e[1]) : null;
                        return new t(l.XboxOne, i)
                    }
                }, {
                    regex: /(?:BB10|BlackBerry)(?:.*Version/(d+[.0-9]*))?/,
                    handler: function(e) {
                        var i = e[1] ? a.fromString(e[1]) : null;
                        return new t(l.BlackBerry, i)
                    }
                }, {
                    regex: /GoogleTV(?:[ /]([0-9a-b]+[.0-9]*))?/,
                    handler: function(e) {
                        var i = e[1] ? a.fromString(e[1]) : null;
                        return new t(l.GoogleTV, i)
                    }
                }, {
                    regex: /Android(?:[ -/](d+[.0-9a-z-]*))?|bSilkb/,
                    handler: function(e) {
                        var i = e[1] ? a.fromString(e[1]) : null;
                        return new t(l.Android, i)
                    }
                }, {
                    regex: /CrOS(?: i686 (d+[.0-9]*))?/,
                    handler: function(e) {
                        var i = e[1] ? a.fromString(e[1]) : null;
                        return new t(l.ChromeOS, i)
                    }
                }, {
                    regex: /(?:iPad|iPhone|iPod)(?:.*OS (d+[_.0-9]*))?/,
                    handler: function(e) {
                        var i = e[1] ? a.fromString(e[1].replace(/_/g, ".")) : null;
                        return new t(l.iOS, i)
                    }
                }, {
                    regex: /Intel Mac OS X(?: (d+[_.0-9]*))?/,
                    handler: function(e) {
                        var i = e[1] ? a.fromString(e[1].replace(/_/g, ".")) : null;
                        return new t(l.Mac, i)
                    }
                }, {
                    regex: /PPC Mac OS(?: X)?(?: (d+[_.0-9]*))?/,
                    handler: function(e) {
                        var i = e[1] ? a.fromString(e[1].replace(/_/g, ".")) : null;
                        return new t(l.MacPPC, i)
                    }
                }, {
                    regex: /Windows NT(?: (5.[012]|6.[01234]))?.*ARM/,
                    handler: function(e) {
                        var i = e[1],
                            n = i ? c.fromKernelVersion(i) : null,
                            r = i ? a.fromString(i) : null;
                        return new t(l.WindowsRT, n, r)
                    }
                }, {
                    regex: /Windows NT(?: (5.[012]|6.[01234]|10.[012]))?/,
                    handler: function(e) {
                        var i = e[1],
                            n = i ? c.fromKernelVersion(i) : null,
                            r = i ? a.fromString(i) : null;
                        return new t(l.Windows, n, r)
                    }
                }, {
                    regex: /Linux/,
                    handler: function() {
                        return new t(l.Linux)
                    }
                }, {
                    regex: /Mozilla/5.0 ((?:Mobile|Tablet); (?:[0-9A-Za-z .-]+; )?rv:d+[.0-9]*) Gecko/d+[.0-9]* Firefox/d+[.0-9]*/,
                    handler: function() {
                        return new t(l.FirefoxOS)
                    }
                }], t)
            }();
        e.exports = h
    }, {
        113: 113,
        270: 270,
        271: 271,
        281: 281,
        93: 93
    }],
    270: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t[t.Unknown = 0] = "Unknown", t[t.Android = 1] = "Android", t[t.BlackBerry = 2] = "BlackBerry", t[t.ChromeOS = 3] = "ChromeOS", t[t.FirefoxOS = 4] = "FirefoxOS", t[t.GoogleTV = 5] = "GoogleTV", t[t.iOS = 6] = "iOS", t[t.Linux = 7] = "Linux", t[t.Mac = 8] = "Mac", t[t.MacPPC = 9] = "MacPPC", t[t.Windows = 10] = "Windows", t[t.WindowsPhone = 11] = "WindowsPhone", t[t.WindowsRT = 12] = "WindowsRT", t[t.XboxOne = 13] = "XboxOne"
        }(n || (n = {})), e.exports = n
    }, {}],
    271: [function(t, e, i) {
        "use strict";
        var n, r = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = t(281),
            s = t(113),
            a = s.Version;
        ! function(t) {
            t[t.Windows2000 = 0] = "Windows2000", t[t.WindowsXP = 1] = "WindowsXP", t[t.WindowsVista = 2] = "WindowsVista", t[t.Windows7 = 3] = "Windows7", t[t.Windows8 = 4] = "Windows8", t[t.Windows8_1 = 5] = "Windows8_1", t[t.Windows10 = 6] = "Windows10"
        }(n || (n = {}));
        var l, c = {
                "5.0": n.Windows2000,
                5.1: n.WindowsXP,
                5.2: n.WindowsXP,
                "6.0": n.WindowsVista,
                6.1: n.Windows7,
                6.2: n.Windows8,
                6.3: n.Windows8_1,
                6.4: n.Windows10,
                "10.0": n.Windows10,
                10.1: n.Windows10,
                10.2: n.Windows10
            },
            u = (l = {}, l[n.Windows2000] = "2000", l[n.WindowsXP] = "XP", l[n.WindowsVista] = "Vista", l[n.Windows7] = "7", l[n.Windows8] = "8", l[n.Windows8_1] = "8.1", l[n.Windows10] = "10", l),
            p = o.of("WindowsVersion"),
            h = function(t) {
                function e(e) {
                    return t.call(this, [e], u[e]) || this
                }
                return (r(e, t), e.fromKernelVersion = function(t) {
                    return (p(t, "kernelVersion").exists(), p(c[t], "WINDOWS_NUMERICAL_VERSIONS[" + t + "]").exists(), new e(c[t]))
                }, e.WINDOWS_2000 = new e(n.Windows2000), e.WINDOWS_XP = new e(n.WindowsXP), e.WINDOWS_VISTA = new e(n.WindowsVista), e.WINDOWS_7 = new e(n.Windows7), e.WINDOWS_8 = new e(n.Windows8), e.WINDOWS_8_1 = new e(n.Windows8_1), e.WINDOWS_10 = new e(n.Windows10), e)
            }(a);
        e.exports = h
    }, {
        113: 113,
        281: 281
    }],
    272: [function(t, e, i) {
        "use strict";
        var n = t(267),
            r = t(268),
            o = t(269),
            s = t(270),
            a = t(271),
            l = {
                Browser: n,
                BrowserType: r,
                OperatingSystem: o,
                OperatingSystemFamily: s,
                WindowsVersion: a,
                getBrowser: function(t) {
                    return (void 0 === t && (t = navigator.userAgent), n.fromUserAgent(t))
                },
                getOperatingSystem: function(t) {
                    return (void 0 === t && (t = navigator.userAgent), o.fromUserAgent(t))
                }
            };
        e.exports = l
    }, {
        267: 267,
        268: 268,
        269: 269,
        270: 270,
        271: 271
    }],
    273: [function(t, e, i) {
        "use strict";
        var n;
        ! function(t) {
            t[t.TIMEOUT = 0] = "TIMEOUT", t[t.INTERVAL = 1] = "INTERVAL", t[t.CLEAR = 2] = "CLEAR"
        }(n || (n = {})), e.exports = n
    }, {}],
    274: [function(t, e, i) {
        "use strict";
        var n = t(284),
            r = n.get("WebWorkerBasedTimerClient"),
            o = t(294),
            s = t(273),
            a = '!function e(t,r,i){function n(o,a){if(!r[o]){if(!t[o]){var u="function"==typeof require&&require;if(!a&&u)return u(o,!0);if(s)return s(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var f=r[o]={exports:{}};t[o][0].call(f.exports,function(e){var r=t[o][1][e];return n(r?r:e)},f,f.exports,e,t,r,i)}return r[o].exports}for(var s="function"==typeof require&&require,o=0;o<i.length;o++)n(i[o]);return n}({1:[function(e,t,r){"use strict";var i;!function(e){e[e.TIMEOUT=0]="TIMEOUT",e[e.INTERVAL=1]="INTERVAL",e[e.CLEAR=2]="CLEAR"}(i||(i={})),t.exports=i},{}],2:[function(e,t,r){"use strict";var i=e(1),n=function(){function e(e){var t=this;this.timerMap={},this.onMessage=function(e){var r=e.data;r.type===i.CLEAR?t.clearTimer(r.id):r.type===i.INTERVAL?t.setWorkerInterval(r):r.type===i.TIMEOUT?t.setWorkerTimeout(r):console.warn("Received unknown message "+r)},this.clearTimer=function(e){var t=this.timerMap[e];clearTimeout(t),delete this.timerMap[e]},this.sendMessage=function(e){t.postMessageOverride?t.postMessageOverride(e):postMessage(e)},this.setWorkerTimeout=function(e){var t=this,r=setTimeout(function(){t.sendMessage(e),delete t.timerMap[e.id]},e.timeout);this.timerMap[e.id]=r},this.setWorkerInterval=function(e){var t=this,r=setInterval(function(){t.sendMessage(e)},e.timeout);this.timerMap[e.id]=r},this.postMessageOverride=e}return e}();t.exports=n},{1:1}],3:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=e(2),n=new i;onmessage=n.onMessage},{2:2}]},{},[3]);',
            l = function() {
                function t() {
                    var t = this;
                    this.callbackMap = {}, this.lastId = 0, this.worker = null, this.onMessage = function(e) {
                        var i = e.data,
                            n = t.callbackMap[i.id];
                        o.isFunction(n) && n(), i.type === s.TIMEOUT && delete t.callbackMap[i.id]
                    }
                }
                return (t.prototype.initialize = function(t) {
                    if (o.isUndefined(t)) try {
                        var e = new Blob([a], {
                            type: "application/javascript"
                        });
                        this.worker = new Worker(URL.createObjectURL(e))
                    } catch (t) {
                        r.warn("Unable to create a WebWorkerTimer, failing over to window timers.")
                    } else this.worker = t;
                    null !== this.worker && this.worker.addEventListener("message", this.onMessage)
                }, t.prototype.setTimeout = function(t, e) {
                    return this.setTimer(t, e, s.TIMEOUT)
                }, t.prototype.setInterval = function(t, e) {
                    return this.setTimer(t, e, s.INTERVAL)
                }, t.prototype.clearTimeout = function(t) {
                    this.clearTimer(t)
                }, t.prototype.clearInterval = function(t) {
                    this.clearTimer(t)
                }, t.prototype.clearTimer = function(t) {
                    this.worker ? (delete this.callbackMap[t], this.worker.postMessage({
                        type: s.CLEAR,
                        id: t
                    })) : clearTimeout(t)
                }, t.prototype.setTimer = function(t, e, i) {
                    if (this.worker) {
                        var n = {
                            type: i,
                            id: ++this.lastId,
                            timeout: e
                        };
                        return (this.callbackMap[n.id] = t, this.worker.postMessage(n), n.id)
                    }
                    return i === s.INTERVAL ? setInterval(t, e) : i === s.TIMEOUT ? setTimeout(t, e) : void 0
                }, t)
            }();
        e.exports = l
    }, {
        273: 273,
        284: 284,
        294: 294
    }],
    275: [function(t, e, i) {
        "use strict";
        var n = t(274),
            r = new n;
        r.initialize(), e.exports = r
    }, {
        274: 274
    }],
    276: [function(t, e, i) {
        "use strict";
        var n = t(294),
            r = t(93),
            o = t(113),
            s = o.LocalStorage,
            a = "html5_web_player_weblab_cache",
            l = 6e5,
            c = function() {
                function t(t, e) {
                    void 0 === t && (t = new s), void 0 === e && (e = n.now), this.localStorage = t, this.now = e
                }
                return (t.prototype.cacheWeblabs = function(t) {
                    var e = {
                        weblabs: t,
                        cacheTimeMs: this.now()
                    };
                    this.localStorage.set(a, JSON.stringify(e))
                }, t.prototype.getCachedWeblabs = function() {
                    var t = this.localStorage.get(a),
                        e = JSON.parse(t);
                    return this.isValidCache(e) ? e.weblabs : (this.localStorage.remove(a), null)
                }, t.prototype.isValidCache = function(t) {
                    return r.exists(t) && t.cacheTimeMs + l > this.now()
                }, t)
            }();
        e.exports = c
    }, {
        113: 113,
        294: 294,
        93: 93
    }],
    277: [function(t, e, i) {
        "use strict";
        var n = t(58),
            r = n.TokenType,
            o = t(284),
            s = t(93),
            a = t(281),
            l = t(294),
            c = t(80),
            u = c.MarketplaceID,
            p = c.WeblabTreatment,
            h = t(178),
            f = h.HttpRequest,
            d = t(276),
            y = a.of("WeblabClient"),
            g = o.get("WeblabClient"),
            m = function() {
                function t(t, e) {
                    void 0 === t && (t = f), void 0 === e && (e = new d), this.httpRequest = t, this.weblabCache = e
                }
                return (t.prototype.initialize = function(e, i, n, r, o, s) {
                    this.deviceId = y(r, "deviceId").exists(), this.deviceTypeId = y(n, "deviceTypeId").exists(), this.marketplaceId = y(i, "marketplaceId").exists(), this.authContext = s, this.sessionId = o, this.url = y(e, "partnerServiceUrl").exists().replace(//$/, "") + t.SERVICE_ENDPOINT, this.initialized = !0
                }, t.prototype.getWeblabs = function(e, i, n) {
                    var o = this;
                    y(this.initialized, "initialized").is["true"](), y(e, "weblabs").exists(), y(i, "onSuccess").exists(), y(n, "onError").exists();
                    var a = this.weblabCache.getCachedWeblabs();
                    if (s.exists(a)) return (g.info("Using cached weblabs: ", a), void i(a));
                    if (0 !== e.length && this.httpRequest.isSupported()) {
                        var c = this.url,
                            p = {},
                            h = {
                                gascEnabled: u.isClassic(this.marketplaceId) ? "false" : "true",
                                firmware: "1",
                                deviceId: this.deviceId,
                                deviceTypeId: this.deviceTypeId,
                                marketplaceId: this.marketplaceId
                            };
                        s.exists(this.sessionId) && (p[t.SESSION_ID_HEADER] = this.sessionId);
                        var f = this.httpRequest.post(c).accept("application/json").timeout(t.HTTP_REQUEST_TIMEOUT_MS).headers(p).body(this.createBody(e)).onError(function(t, e) {
                            s.exists(e) ? n(t, e.getLatencyMs()) : n(t)
                        }).onLoad(function(t) {
                            var e = {},
                                r = t.getText();
                            if (s.exists(r)) {
                                var a = void 0;
                                try {
                                    a = JSON.parse(r)
                                } catch (e) {
                                    return void n(e, t.getLatencyMs())
                                }
                                if (s.exists(a) && s.exists(a.TreatmentList)) {
                                    var c = a.TreatmentList;
                                    g.info("Received Weblabs.", c), l.forEach(c, function(t) {
                                        var i = o.getTreatmentFromName(t.treatmentName);
                                        s.exists(i) && (e[t.weblabName] = i)
                                    })
                                }
                            }
                            o.weblabCache.cacheWeblabs(e), i(e, t.getLatencyMs())
                        }).withCredentials();
                        s.exists(this.authContext) && s.exists(this.authContext.tokenClient) ? this.authContext.tokenClient.getToken(function(t) {
                            t.type === r.OAUTH && f.bearerToken(t.token), f.query(h).send()
                        }, function(t) {
                            n(t)
                        }) : f.query(h).send()
                    } else i({})
                }, t.prototype.createBody = function(t) {
                    var e = "<WeblabTreatmentRequest><WeblabList>";
                    return (l.forEach(t, function(t) {
                        e += "<member>" + t + "</member>"
                    }), e + "</WeblabList></WeblabTreatmentRequest>")
                }, t.prototype.getTreatmentFromName = function(t) {
                    return s.withDefault(p[t], null)
                }, t.SESSION_ID_HEADER = "x-atv-session-id", t.SERVICE_ENDPOINT = "/cdp/usage/GetWeblabTreatment", t.HTTP_REQUEST_TIMEOUT_MS = 4e3, t)
            }();
        e.exports = m
    }, {
        178: 178,
        276: 276,
        281: 281,
        284: 284,
        294: 294,
        58: 58,
        80: 80,
        93: 93
    }],
    278: [function(t, e, i) {
        "use strict";
        var n = t(277),
            r = {
                WeblabClient: n
            };
        e.exports = r
    }, {
        277: 277
    }],
    279: [function(t, e, i) {
        "use strict";
        var n = function() {
            function t(e, i, n, r) {
                this.is = this, this.a = this, this.an = this, this.baseName = e, this.target = i, this.targetName = n, this.negated = r, r || (this.not = new t(e, i, n, !0))
            }
            return (t.prototype["function"] = function() {
                return this.checkType("Function")
            }, t.prototype.object = function() {
                return this.checkType("Object")
            }, t.prototype.number = function() {
                return this.checkType("Number")
            }, t.prototype.string = function() {
                return this.checkType("String")
            }, t.prototype.array = function() {
                return this.checkType("Array")
            }, t.prototype["null"] = function() {
                return this.verify(null === this.target, "null")
            }, t.prototype.undefined = function() {
                return this.verify("undefined" == typeof this.target, "undefined")
            }, t.prototype.empty = function() {
                return this.verify(null === this.target || "undefined" == typeof this.target || "" === this.target || this.isType("Array") && 0 === this.target.length || this.isType("Object") && !this.hasProperties(), "empty")
            }, t.prototype.exists = function() {
                return this.verify("undefined" != typeof this.target && null !== this.target, "defined and non-null")
            }, t.prototype["true"] = function() {
                return this.verify(this.target === !0, "true")
            }, t.prototype["false"] = function() {
                return this.verify(this.target === !1, "false")
            }, t.prototype.checkType = function(t) {
                return this.verify(this.isType(t), "a " + t)
            }, t.prototype.isType = function(t) {
                return Object.prototype.toString.call(this.target) === "[object " + t + "]"
            }, t.prototype.hasProperties = function() {
                for (var t in this.target)
                    if (this.target.hasOwnProperty(t)) return !0;
                return !1
            }, t.prototype.verify = function(t, e) {
                if (this.negated ? t : !t) {
                    var i = this.baseName ? "[" + this.baseName + "] " : "",
                        n = this.targetName ? this.targetName + " (" + this.target + ")" : "" + this.target;
                    throw new Error(i + "Check failed: " + n + " was " + (this.negated ? "" : "not ") + e)
                }
                return this.target
            }, t)
        }();
        e.exports = n
    }, {}],
    280: [function(t, e, i) {
        "use strict";
        var n = t(279),
            r = function(t) {
                return (void 0 === t && (t = n), {
                    of: function(e) {
                        return function(i, n) {
                            return new t(e, i, n)
                        }
                    },
                    check: function(e, i) {
                        return new t(null, e, i)
                    }
                })
            };
        e.exports = r
    }, {
        279: 279
    }],
    281: [function(t, e, i) {
        "use strict";
        var n = t(280);
        e.exports = n()
    }, {
        280: 280
    }],
    282: [function(t, e, i) {
        var n;
        ! function(t) {
            "undefined" == typeof DO_NOT_EXPORT_CRC ? "object" == typeof i ? t(i) : "function" == typeof define && define.amd ? define(function() {
                var e = {};
                return (t(e), e)
            }) : t(n = {}) : t(n = {})
        }(function(t) {
            function e() {
                for (var t = 0, e = new Array(256), i = 0; 256 != i; ++i) t = i, t = 1 & t ? -306674912 ^ t >>> 1 : t >>> 1, t = 1 & t ? -306674912 ^ t >>> 1 : t >>> 1, t = 1 & t ? -306674912 ^ t >>> 1 : t >>> 1, t = 1 & t ? -306674912 ^ t >>> 1 : t >>> 1, t = 1 & t ? -306674912 ^ t >>> 1 : t >>> 1, t = 1 & t ? -306674912 ^ t >>> 1 : t >>> 1, t = 1 & t ? -306674912 ^ t >>> 1 : t >>> 1, t = 1 & t ? -306674912 ^ t >>> 1 : t >>> 1, e[i] = t;
                return "undefined" != typeof Int32Array ? new Int32Array(e) : e
            }

            function i(t) {
                if (t.length > 32768 && a) return r(new Buffer(t));
                for (var e = -1, i = t.length - 1, n = 0; n < i;) e = s[255 & (e ^ t.charCodeAt(n++))] ^ e >>> 8, e = s[255 & (e ^ t.charCodeAt(n++))] ^ e >>> 8;
                return (n === i && (e = e >>> 8 ^ s[255 & (e ^ t.charCodeAt(n))]), e ^ -1)
            }

            function n(t) {
                if (t.length > 1e4) return r(t);
                for (var e = -1, i = 0, n = t.length - 3; i < n;) e = e >>> 8 ^ s[255 & (e ^ t[i++])], e = e >>> 8 ^ s[255 & (e ^ t[i++])], e = e >>> 8 ^ s[255 & (e ^ t[i++])], e = e >>> 8 ^ s[255 & (e ^ t[i++])];
                for (; i < n + 3;) e = e >>> 8 ^ s[255 & (e ^ t[i++])];
                return e ^ -1
            }

            function r(t) {
                for (var e = -1, i = 0, n = t.length - 7; i < n;) e = e >>> 8 ^ s[255 & (e ^ t[i++])], e = e >>> 8 ^ s[255 & (e ^ t[i++])], e = e >>> 8 ^ s[255 & (e ^ t[i++])], e = e >>> 8 ^ s[255 & (e ^ t[i++])], e = e >>> 8 ^ s[255 & (e ^ t[i++])], e = e >>> 8 ^ s[255 & (e ^ t[i++])], e = e >>> 8 ^ s[255 & (e ^ t[i++])], e = e >>> 8 ^ s[255 & (e ^ t[i++])];
                for (; i < n + 7;) e = e >>> 8 ^ s[255 & (e ^ t[i++])];
                return e ^ -1
            }

            function o(t) {
                for (var e, i, n = -1, r = 0, o = t.length; r < o;) e = t.charCodeAt(r++), e < 128 ? n = n >>> 8 ^ s[255 & (n ^ e)] : e < 2048 ? (n = n >>> 8 ^ s[255 & (n ^ (192 | e >> 6 & 31))], n = n >>> 8 ^ s[255 & (n ^ (128 | 63 & e))]) : e >= 55296 && e < 57344 ? (e = (1023 & e) + 64, i = 1023 & t.charCodeAt(r++), n = n >>> 8 ^ s[255 & (n ^ (240 | e >> 8 & 7))], n = n >>> 8 ^ s[255 & (n ^ (128 | e >> 2 & 63))], n = n >>> 8 ^ s[255 & (n ^ (128 | i >> 6 & 15 | (3 & e) << 4))], n = n >>> 8 ^ s[255 & (n ^ (128 | 63 & i))]) : (n = n >>> 8 ^ s[255 & (n ^ (224 | e >> 12 & 15))], n = n >>> 8 ^ s[255 & (n ^ (128 | e >> 6 & 63))], n = n >>> 8 ^ s[255 & (n ^ (128 | 63 & e))]);
                return n ^ -1
            }
            t.version = "0.4.0";
            var s = e(),
                a = "undefined" != typeof Buffer;
            t.table = s, t.bstr = i, t.buf = n, t.str = o
        })
    }, {}],
    283: [function(t, e, i) {
        ! function(t) {
            function e() {
                this._events = {}, this._conf && n.call(this, this._conf)
            }

            function n(t) {
                t && (this._conf = t, t.delimiter && (this.delimiter = t.delimiter), t.maxListeners && (this._events.maxListeners = t.maxListeners), t.wildcard && (this.wildcard = t.wildcard), t.newListener && (this.newListener = t.newListener), this.wildcard && (this.listenerTree = {}))
            }

            function r(t) {
                this._events = {}, this.newListener = !1, n.call(this, t)
            }

            function o(t, e, i, n) {
                if (!i) return [];
                var r, s, a, l, c, u, p, h = [],
                    f = e.length,
                    d = e[n],
                    y = e[n + 1];
                if (n === f && i._listeners) {
                    if ("function" == typeof i._listeners) return (t && t.push(i._listeners), [i]);
                    for (r = 0, s = i._listeners.length; r < s; r++) t && t.push(i._listeners[r]);
                    return [i]
                }
                if ("*" === d || "**" === d || i[d]) {
                    if ("*" === d) {
                        for (a in i) "_listeners" !== a && i.hasOwnProperty(a) && (h = h.concat(o(t, e, i[a], n + 1)));
                        return h
                    }
                    if ("**" === d) {
                        p = n + 1 === f || n + 2 === f && "*" === y, p && i._listeners && (h = h.concat(o(t, e, i, f)));
                        for (a in i) "_listeners" !== a && i.hasOwnProperty(a) && ("*" === a || "**" === a ? (i[a]._listeners && !p && (h = h.concat(o(t, e, i[a], f))), h = h.concat(o(t, e, i[a], n))) : h = a === y ? h.concat(o(t, e, i[a], n + 2)) : h.concat(o(t, e, i[a], n)));
                        return h
                    }
                    h = h.concat(o(t, e, i[d], n + 1))
                }
                if (l = i["*"], l && o(t, e, l, n + 1), c = i["**"])
                    if (n < f) {
                        c._listeners && o(t, e, c, f);
                        for (a in c) "_listeners" !== a && c.hasOwnProperty(a) && (a === y ? o(t, e, c[a], n + 2) : a === d ? o(t, e, c[a], n + 1) : (u = {}, u[a] = c[a], o(t, e, {
                            "**": u
                        }, n + 1)))
                    } else c._listeners ? o(t, e, c, f) : c["*"] && c["*"]._listeners && o(t, e, c["*"], f);
                return h
            }

            function s(t, e) {
                t = "string" == typeof t ? t.split(this.delimiter) : t.slice();
                for (var i = 0, n = t.length; i + 1 < n; i++)
                    if ("**" === t[i] && "**" === t[i + 1]) return;
                for (var r = this.listenerTree, o = t.shift(); o;) {
                    if (r[o] || (r[o] = {}), r = r[o], 0 === t.length) {
                        if (r._listeners) {
                            if ("function" == typeof r._listeners) r._listeners = [r._listeners, e];
                            else if (a(r._listeners) && (r._listeners.push(e), !r._listeners.warned)) {
                                var s = l;
                                "undefined" != typeof this._events.maxListeners && (s = this._events.maxListeners), s > 0 && r._listeners.length > s && (r._listeners.warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", r._listeners.length), console.trace())
                            }
                        } else r._listeners = e;
                        return !0
                    }
                    o = t.shift()
                }
                return !0
            }
            var a = Array.isArray ? Array.isArray : function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                },
                l = 10;
            r.prototype.delimiter = ".", r.prototype.setMaxListeners = function(t) {
                this._events || e.call(this), this._events.maxListeners = t, this._conf || (this._conf = {}), this._conf.maxListeners = t
            }, r.prototype.event = "", r.prototype.once = function(t, e) {
                return (this.many(t, 1, e), this)
            }, r.prototype.many = function(t, e, i) {
                function n() {
                    0 === --e && r.off(t, n), i.apply(this, arguments)
                }
                var r = this;
                if ("function" != typeof i) throw new Error("many only accepts instances of Function");
                return (n._origin = i, this.on(t, n), r)
            }, r.prototype.emit = function() {
                this._events || e.call(this);
                var t = arguments[0];
                if ("newListener" === t && !this.newListener && !this._events.newListener) return !1;
                if (this._all) {
                    for (var i = arguments.length, n = new Array(i - 1), r = 1; r < i; r++) n[r - 1] = arguments[r];
                    for (r = 0, i = this._all.length; r < i; r++) this.event = t, this._all[r].apply(this, n)
                }
                if ("error" === t && !(this._all || this._events.error || this.wildcard && this.listenerTree.error)) throw arguments[1] instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
                var s;
                if (this.wildcard) {
                    s = [];
                    var a = "string" == typeof t ? t.split(this.delimiter) : t.slice();
                    o.call(this, s, a, this.listenerTree, 0)
                } else s = this._events[t];
                if ("function" == typeof s) {
                    if (this.event = t, 1 === arguments.length) s.call(this);
                    else if (arguments.length > 1) switch (arguments.length) {
                        case 2:
                            s.call(this, arguments[1]);
                            break;
                        case 3:
                            s.call(this, arguments[1], arguments[2]);
                            break;
                        default:
                            for (var i = arguments.length, n = new Array(i - 1), r = 1; r < i; r++) n[r - 1] = arguments[r];
                            s.apply(this, n)
                    }
                    return !0
                }
                if (s) {
                    for (var i = arguments.length, n = new Array(i - 1), r = 1; r < i; r++) n[r - 1] = arguments[r];
                    for (var l = s.slice(), r = 0, i = l.length; r < i; r++) this.event = t, l[r].apply(this, n);
                    return l.length > 0 || !!this._all
                }
                return !!this._all
            }, r.prototype.on = function(t, i) {
                if ("function" == typeof t) return (this.onAny(t), this);
                if ("function" != typeof i) throw new Error("on only accepts instances of Function");
                if (this._events || e.call(this), this.emit("newListener", t, i), this.wildcard) return (s.call(this, t, i), this);
                if (this._events[t]) {
                    if ("function" == typeof this._events[t]) this._events[t] = [this._events[t], i];
                    else if (a(this._events[t]) && (this._events[t].push(i), !this._events[t].warned)) {
                        var n = l;
                        "undefined" != typeof this._events.maxListeners && (n = this._events.maxListeners), n > 0 && this._events[t].length > n && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), console.trace())
                    }
                } else this._events[t] = i;
                return this
            }, r.prototype.onAny = function(t) {
                if ("function" != typeof t) throw new Error("onAny only accepts instances of Function");
                return (this._all || (this._all = []), this._all.push(t), this)
            }, r.prototype.addListener = r.prototype.on, r.prototype.off = function(t, e) {
                if ("function" != typeof e) throw new Error("removeListener only takes instances of Function");
                var i, n = [];
                if (this.wildcard) {
                    var r = "string" == typeof t ? t.split(this.delimiter) : t.slice();
                    n = o.call(this, null, r, this.listenerTree, 0)
                } else {
                    if (!this._events[t]) return this;
                    i = this._events[t], n.push({
                        _listeners: i
                    })
                }
                for (var s = 0; s < n.length; s++) {
                    var l = n[s];
                    if (i = l._listeners, a(i)) {
                        for (var c = -1, u = 0, p = i.length; u < p; u++)
                            if (i[u] === e || i[u].listener && i[u].listener === e || i[u]._origin && i[u]._origin === e) {
                                c = u;
                                break
                            } if (c < 0) continue;
                        return (this.wildcard ? l._listeners.splice(c, 1) : this._events[t].splice(c, 1), 0 === i.length && (this.wildcard ? delete l._listeners : delete this._events[t]), this)
                    }(i === e || i.listener && i.listener === e || i._origin && i._origin === e) && (this.wildcard ? delete l._listeners : delete this._events[t])
                }
                return this
            }, r.prototype.offAny = function(t) {
                var e, i = 0,
                    n = 0;
                if (t && this._all && this._all.length > 0) {
                    for (e = this._all, i = 0, n = e.length; i < n; i++)
                        if (t === e[i]) return (e.splice(i, 1), this)
                } else this._all = [];
                return this
            }, r.prototype.removeListener = r.prototype.off, r.prototype.removeAllListeners = function(t) {
                if (0 === arguments.length) return (!this._events || e.call(this), this);
                if (this.wildcard)
                    for (var i = "string" == typeof t ? t.split(this.delimiter) : t.slice(), n = o.call(this, null, i, this.listenerTree, 0), r = 0; r < n.length; r++) {
                        var s = n[r];
                        s._listeners = null
                    } else {
                        if (!this._events[t]) return this;
                        this._events[t] = null
                    }
                return this
            }, r.prototype.listeners = function(t) {
                if (this.wildcard) {
                    var i = [],
                        n = "string" == typeof t ? t.split(this.delimiter) : t.slice();
                    return (o.call(this, i, n, this.listenerTree, 0), i)
                }
                return (this._events || e.call(this), this._events[t] || (this._events[t] = []), a(this._events[t]) || (this._events[t] = [this._events[t]]), this._events[t])
            }, r.prototype.listenersAny = function() {
                return this._all ? this._all : []
            }, "function" == typeof define && define.amd ? define(function() {
                return r
            }) : "object" == typeof i ? i.EventEmitter2 = r : window.EventEmitter2 = r
        }()
    }, {}],
    284: [function(t, e, i) {
        ! function(t) {
            "use strict";
            var i = {};
            i.VERSION = "0.9.14";
            var n, r = {},
                o = function(t, e) {
                    return function() {
                        return e.apply(t, arguments)
                    }
                },
                s = function() {
                    var t, e, i = arguments,
                        n = i[0];
                    for (e = 1; e < i.length; e++)
                        for (t in i[e]) t in n || !i[e].hasOwnProperty(t) || (n[t] = i[e][t]);
                    return n
                },
                a = function(t, e) {
                    return {
                        value: t,
                        name: e
                    }
                };
            i.DEBUG = a(1, "DEBUG"), i.INFO = a(2, "INFO"), i.WARN = a(4, "WARN"), i.ERROR = a(8, "ERROR"), i.OFF = a(99, "OFF");
            var l = function(t) {
                this.context = t, this.setLevel(t.filterLevel), this.log = this.info
            };
            l.prototype = {
                setLevel: function(t) {
                    t && "value" in t && (this.context.filterLevel = t)
                },
                enabledFor: function(t) {
                    var e = this.context.filterLevel;
                    return t.value >= e.value
                },
                debug: function() {
                    this.invoke(i.DEBUG, arguments)
                },
                info: function() {
                    this.invoke(i.INFO, arguments)
                },
                warn: function() {
                    this.invoke(i.WARN, arguments)
                },
                error: function() {
                    this.invoke(i.ERROR, arguments)
                },
                invoke: function(t, e) {
                    n && this.enabledFor(t) && n(e, s({
                        level: t
                    }, this.context))
                }
            };
            var c = new l({
                filterLevel: i.OFF
            });
            ! function() {
                var t = i;
                t.enabledFor = o(c, c.enabledFor), t.debug = o(c, c.debug), t.info = o(c, c.info), t.warn = o(c, c.warn), t.error = o(c, c.error), t.log = t.info
            }(), i.setHandler = function(t) {
                n = t
            }, i.setLevel = function(t) {
                c.setLevel(t);
                for (var e in r) r.hasOwnProperty(e) && r[e].setLevel(t)
            }, i.get = function(t) {
                return r[t] || (r[t] = new l(s({
                    name: t
                }, c.context)))
            }, i.useDefaults = function(t) {
                "undefined" != typeof console && (i.setLevel(t || i.DEBUG), i.setHandler(function(t, e) {
                    var n = console.log;
                    e.name && (t[0] = "[" + e.name + "] " + t[0]), e.level === i.WARN && console.warn ? n = console.warn : e.level === i.ERROR && console.error ? n = console.error : e.level === i.INFO && console.info && (n = console.info), Function.prototype.apply.call(n, console, t)
                }))
            }, "function" == typeof define && define.amd ? define(i) : "undefined" != typeof e && e.exports ? e.exports = i : (i._prevLogger = t.Logger, i.noConflict = function() {
                return (t.Logger = i._prevLogger, i)
            }, t.Logger = i)
        }(this)
    }, {}],
    285: [function(t, e, i) {
        function n(t, e, i, n) {
            return JSON.stringify(t, r(e, n), i)
        }

        function r(t, e) {
            var i = [],
                n = [];
            return (null == e && (e = function(t, e) {
                return i[0] === e ? "[Circular ~]" : "[Circular ~." + n.slice(0, i.indexOf(e)).join(".") + "]"
            }), function(r, o) {
                if (i.length > 0) {
                    var s = i.indexOf(this);
                    ~s ? i.splice(s + 1) : i.push(this), ~s ? n.splice(s, 1 / 0, r) : n.push(r), ~i.indexOf(o) && (o = e.call(this, r, o))
                } else i.push(o);
                return null == t ? o : t.call(this, r, o)
            })
        }
        i = e.exports = n, i.getSerialize = r
    }, {}],
    286: [function(t, e, i) {
        ! function(t) {
            function n(t, e, i) {
                var n = 0,
                    r = [0],
                    p = "",
                    h = null,
                    p = i || "UTF8";
                if ("UTF8" !== p && "UTF16" !== p) throw "encoding must be UTF8 or UTF16";
                if ("HEX" === e) {
                    if (0 !== t.length % 2) throw "srcString of HEX type must be in byte increments";
                    h = s(t), n = h.binLen, r = h.value
                } else if ("ASCII" === e || "TEXT" === e) h = o(t, p), n = h.binLen, r = h.value;
                else {
                    if ("B64" !== e) throw "inputFormat must be HEX, TEXT, ASCII, or B64";
                    h = a(t), n = h.binLen, r = h.value
                }
                this.getHash = function(t, e, i, o) {
                    var s, a = null,
                        p = r.slice(),
                        h = n;
                    if (3 === arguments.length ? "number" != typeof i && (o = i, i = 1) : 2 === arguments.length && (i = 1), i !== parseInt(i, 10) || 1 > i) throw "numRounds must a integer >= 1";
                    switch (e) {
                        case "HEX":
                            a = l;
                            break;
                        case "B64":
                            a = c;
                            break;
                        default:
                            throw "format must be HEX or B64"
                    }
                    if ("SHA-1" === t)
                        for (s = 0; s < i; s++) p = k(p, h), h = 160;
                    else if ("SHA-224" === t)
                        for (s = 0; s < i; s++) p = L(p, h, t), h = 224;
                    else if ("SHA-256" === t)
                        for (s = 0; s < i; s++) p = L(p, h, t), h = 256;
                    else if ("SHA-384" === t)
                        for (s = 0; s < i; s++) p = L(p, h, t), h = 384;
                    else {
                        if ("SHA-512" !== t) throw "Chosen SHA variant is not supported";
                        for (s = 0; s < i; s++) p = L(p, h, t), h = 512
                    }
                    return a(p, u(o))
                }, this.getHMAC = function(t, e, i, h, f) {
                    var d, y, g, m, v = [],
                        E = [];
                    switch (d = null, h) {
                        case "HEX":
                            h = l;
                            break;
                        case "B64":
                            h = c;
                            break;
                        default:
                            throw "outputFormat must be HEX or B64"
                    }
                    if ("SHA-1" === i) y = 64, m = 160;
                    else if ("SHA-224" === i) y = 64, m = 224;
                    else if ("SHA-256" === i) y = 64, m = 256;
                    else if ("SHA-384" === i) y = 128, m = 384;
                    else {
                        if ("SHA-512" !== i) throw "Chosen SHA variant is not supported";
                        y = 128, m = 512
                    }
                    if ("HEX" === e) d = s(t), g = d.binLen, d = d.value;
                    else if ("ASCII" === e || "TEXT" === e) d = o(t, p), g = d.binLen, d = d.value;
                    else {
                        if ("B64" !== e) throw "inputFormat must be HEX, TEXT, ASCII, or B64";
                        d = a(t), g = d.binLen, d = d.value
                    }
                    for (t = 8 * y, e = y / 4 - 1, y < g / 8 ? (d = "SHA-1" === i ? k(d, g) : L(d, g, i), d[e] &= 4294967040) : y > g / 8 && (d[e] &= 4294967040), y = 0; y <= e; y += 1) v[y] = 909522486 ^ d[y], E[y] = 1549556828 ^ d[y];
                    return (i = "SHA-1" === i ? k(E.concat(k(v.concat(r), t + n)), t + m) : L(E.concat(L(v.concat(r), t + n, i)), t + m, i), h(i, u(f)))
                }
            }

            function r(t, e) {
                this.a = t, this.b = e
            }

            function o(t, e) {
                var i, n, r = [],
                    o = [],
                    s = 0;
                if ("UTF8" === e)
                    for (n = 0; n < t.length; n += 1)
                        for (i = t.charCodeAt(n), o = [], 2048 < i ? (o[0] = 224 | (61440 & i) >>> 12, o[1] = 128 | (4032 & i) >>> 6, o[2] = 128 | 63 & i) : 128 < i ? (o[0] = 192 | (1984 & i) >>> 6, o[1] = 128 | 63 & i) : o[0] = i, i = 0; i < o.length; i += 1) r[s >>> 2] |= o[i] << 24 - s % 4 * 8, s += 1;
                else if ("UTF16" === e)
                    for (n = 0; n < t.length; n += 1) r[s >>> 2] |= t.charCodeAt(n) << 16 - s % 4 * 8, s += 2;
                return {
                    value: r,
                    binLen: 8 * s
                }
            }

            function s(t) {
                var e, i, n = [],
                    r = t.length;
                if (0 !== r % 2) throw "String of HEX type must be in byte increments";
                for (e = 0; e < r; e += 2) {
                    if (i = parseInt(t.substr(e, 2), 16), isNaN(i)) throw "String of HEX type contains invalid characters";
                    n[e >>> 3] |= i << 24 - e % 8 * 4
                }
                return {
                    value: n,
                    binLen: 4 * r
                }
            }

            function a(t) {
                var e, i, n, r, o, s = [],
                    a = 0;
                if (-1 === t.search(/^[a-zA-Z0-9=+/]+$/)) throw "Invalid character in base-64 string";
                if (e = t.indexOf("="), t = t.replace(/=/g, ""), -1 !== e && e < t.length) throw "Invalid '=' found in base-64 string";
                for (i = 0; i < t.length; i += 4) {
                    for (o = t.substr(i, 4), n = r = 0; n < o.length; n += 1) e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(o[n]), r |= e << 18 - 6 * n;
                    for (n = 0; n < o.length - 1; n += 1) s[a >> 2] |= (r >>> 16 - 8 * n & 255) << 24 - a % 4 * 8, a += 1
                }
                return {
                    value: s,
                    binLen: 8 * a
                }
            }

            function l(t, e) {
                var i, n, r = "",
                    o = 4 * t.length;
                for (i = 0; i < o; i += 1) n = t[i >>> 2] >>> 8 * (3 - i % 4), r += "0123456789abcdef".charAt(n >>> 4 & 15) + "0123456789abcdef".charAt(15 & n);
                return e.outputUpper ? r.toUpperCase() : r
            }

            function c(t, e) {
                var i, n, r, o = "",
                    s = 4 * t.length;
                for (i = 0; i < s; i += 3)
                    for (r = (t[i >>> 2] >>> 8 * (3 - i % 4) & 255) << 16 | (t[i + 1 >>> 2] >>> 8 * (3 - (i + 1) % 4) & 255) << 8 | t[i + 2 >>> 2] >>> 8 * (3 - (i + 2) % 4) & 255, n = 0; 4 > n; n += 1) o = 8 * i + 6 * n <= 32 * t.length ? o + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(r >>> 6 * (3 - n) & 63) : o + e.b64Pad;
                return o
            }

            function u(t) {
                var e = {
                    outputUpper: !1,
                    b64Pad: "="
                };
                try {
                    t.hasOwnProperty("outputUpper") && (e.outputUpper = t.outputUpper), t.hasOwnProperty("b64Pad") && (e.b64Pad = t.b64Pad)
                } catch (t) {}
                if ("boolean" != typeof e.outputUpper) throw "Invalid outputUpper formatting option";
                if ("string" != typeof e.b64Pad) throw "Invalid b64Pad formatting option";
                return e
            }

            function p(t, e) {
                return t << e | t >>> 32 - e
            }

            function h(t, e) {
                return t >>> e | t << 32 - e
            }

            function f(t, e) {
                var i = null,
                    i = new r(t.a, t.b);
                return i = 32 >= e ? new r(i.a >>> e | i.b << 32 - e & 4294967295, i.b >>> e | i.a << 32 - e & 4294967295) : new r(i.b >>> e - 32 | i.a << 64 - e & 4294967295, i.a >>> e - 32 | i.b << 64 - e & 4294967295)
            }

            function d(t, e) {
                var i = null;
                return i = 32 >= e ? new r(t.a >>> e, t.b >>> e | t.a << 32 - e & 4294967295) : new r(0, t.a >>> e - 32)
            }

            function y(t, e, i) {
                return t ^ e ^ i
            }

            function g(t, e, i) {
                return t & e ^ ~t & i
            }

            function m(t, e, i) {
                return new r(t.a & e.a ^ ~t.a & i.a, t.b & e.b ^ ~t.b & i.b)
            }

            function v(t, e, i) {
                return t & e ^ t & i ^ e & i
            }

            function E(t, e, i) {
                return new r(t.a & e.a ^ t.a & i.a ^ e.a & i.a, t.b & e.b ^ t.b & i.b ^ e.b & i.b)
            }

            function _(t) {
                return h(t, 2) ^ h(t, 13) ^ h(t, 22)
            }

            function S(t) {
                var e = f(t, 28),
                    i = f(t, 34);
                return (t = f(t, 39), new r(e.a ^ i.a ^ t.a, e.b ^ i.b ^ t.b))
            }

            function T(t) {
                return h(t, 6) ^ h(t, 11) ^ h(t, 25)
            }

            function b(t) {
                var e = f(t, 14),
                    i = f(t, 18);
                return (t = f(t, 41), new r(e.a ^ i.a ^ t.a, e.b ^ i.b ^ t.b))
            }

            function w(t) {
                return h(t, 7) ^ h(t, 18) ^ t >>> 3
            }

            function I(t) {
                var e = f(t, 1),
                    i = f(t, 8);
                return (t = d(t, 7), new r(e.a ^ i.a ^ t.a, e.b ^ i.b ^ t.b))
            }

            function R(t) {
                return h(t, 17) ^ h(t, 19) ^ t >>> 10
            }

            function C(t) {
                var e = f(t, 19),
                    i = f(t, 61);
                return (t = d(t, 6), new r(e.a ^ i.a ^ t.a, e.b ^ i.b ^ t.b))
            }

            function P(t, e) {
                var i = (65535 & t) + (65535 & e);
                return ((t >>> 16) + (e >>> 16) + (i >>> 16) & 65535) << 16 | 65535 & i
            }

            function A(t, e, i, n) {
                var r = (65535 & t) + (65535 & e) + (65535 & i) + (65535 & n);
                return ((t >>> 16) + (e >>> 16) + (i >>> 16) + (n >>> 16) + (r >>> 16) & 65535) << 16 | 65535 & r
            }

            function O(t, e, i, n, r) {
                var o = (65535 & t) + (65535 & e) + (65535 & i) + (65535 & n) + (65535 & r);
                return ((t >>> 16) + (e >>> 16) + (i >>> 16) + (n >>> 16) + (r >>> 16) + (o >>> 16) & 65535) << 16 | 65535 & o
            }

            function N(t, e) {
                var i, n, o;
                return (i = (65535 & t.b) + (65535 & e.b), n = (t.b >>> 16) + (e.b >>> 16) + (i >>> 16), o = (65535 & n) << 16 | 65535 & i, i = (65535 & t.a) + (65535 & e.a) + (n >>> 16), n = (t.a >>> 16) + (e.a >>> 16) + (i >>> 16), new r((65535 & n) << 16 | 65535 & i, o))
            }

            function x(t, e, i, n) {
                var o, s, a;
                return (o = (65535 & t.b) + (65535 & e.b) + (65535 & i.b) + (65535 & n.b), s = (t.b >>> 16) + (e.b >>> 16) + (i.b >>> 16) + (n.b >>> 16) + (o >>> 16), a = (65535 & s) << 16 | 65535 & o, o = (65535 & t.a) + (65535 & e.a) + (65535 & i.a) + (65535 & n.a) + (s >>> 16), s = (t.a >>> 16) + (e.a >>> 16) + (i.a >>> 16) + (n.a >>> 16) + (o >>> 16), new r((65535 & s) << 16 | 65535 & o, a))
            }

            function M(t, e, i, n, o) {
                var s, a, l;
                return (s = (65535 & t.b) + (65535 & e.b) + (65535 & i.b) + (65535 & n.b) + (65535 & o.b), a = (t.b >>> 16) + (e.b >>> 16) + (i.b >>> 16) + (n.b >>> 16) + (o.b >>> 16) + (s >>> 16), l = (65535 & a) << 16 | 65535 & s, s = (65535 & t.a) + (65535 & e.a) + (65535 & i.a) + (65535 & n.a) + (65535 & o.a) + (a >>> 16), a = (t.a >>> 16) + (e.a >>> 16) + (i.a >>> 16) + (n.a >>> 16) + (o.a >>> 16) + (s >>> 16), new r((65535 & a) << 16 | 65535 & s, l))
            }

            function k(t, e) {
                var i, n, r, o, s, a, l, c, u, h = [],
                    f = g,
                    d = y,
                    m = v,
                    E = p,
                    _ = P,
                    S = O,
                    T = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
                for (t[e >>> 5] |= 128 << 24 - e % 32, t[(e + 65 >>> 9 << 4) + 15] = e, u = t.length, l = 0; l < u; l += 16) {
                    for (i = T[0], n = T[1], r = T[2], o = T[3], s = T[4], c = 0; 80 > c; c += 1) h[c] = 16 > c ? t[c + l] : E(h[c - 3] ^ h[c - 8] ^ h[c - 14] ^ h[c - 16], 1), a = 20 > c ? S(E(i, 5), f(n, r, o), s, 1518500249, h[c]) : 40 > c ? S(E(i, 5), d(n, r, o), s, 1859775393, h[c]) : 60 > c ? S(E(i, 5), m(n, r, o), s, 2400959708, h[c]) : S(E(i, 5), d(n, r, o), s, 3395469782, h[c]), s = o, o = r, r = E(n, 30), n = i, i = a;
                    T[0] = _(i, T[0]), T[1] = _(n, T[1]), T[2] = _(r, T[2]), T[3] = _(o, T[3]), T[4] = _(s, T[4])
                }
                return T
            }

            function L(t, e, i) {
                var n, o, s, a, l, c, u, p, h, f, d, y, k, L, D, U, F, W, H, B, V, q, j, z, G, Y, K = [],
                    X = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
                if (f = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428], o = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], "SHA-224" === i || "SHA-256" === i) d = 64, n = (e + 65 >>> 9 << 4) + 15, L = 16, D = 1, G = Number, U = P, F = A, W = O, H = w, B = R, V = _, q = T, z = v, j = g, f = "SHA-224" === i ? f : o;
                else {
                    if ("SHA-384" !== i && "SHA-512" !== i) throw "Unexpected error in SHA-2 implementation";
                    d = 80, n = (e + 128 >>> 10 << 5) + 31, L = 32, D = 2, G = r, U = N, F = x, W = M, H = I, B = C, V = S, q = b, z = E, j = m, X = [new G(X[0], 3609767458), new G(X[1], 602891725), new G(X[2], 3964484399), new G(X[3], 2173295548), new G(X[4], 4081628472), new G(X[5], 3053834265), new G(X[6], 2937671579), new G(X[7], 3664609560), new G(X[8], 2734883394), new G(X[9], 1164996542), new G(X[10], 1323610764), new G(X[11], 3590304994), new G(X[12], 4068182383), new G(X[13], 991336113), new G(X[14], 633803317), new G(X[15], 3479774868), new G(X[16], 2666613458), new G(X[17], 944711139), new G(X[18], 2341262773), new G(X[19], 2007800933), new G(X[20], 1495990901), new G(X[21], 1856431235), new G(X[22], 3175218132), new G(X[23], 2198950837), new G(X[24], 3999719339), new G(X[25], 766784016), new G(X[26], 2566594879), new G(X[27], 3203337956), new G(X[28], 1034457026), new G(X[29], 2466948901), new G(X[30], 3758326383), new G(X[31], 168717936), new G(X[32], 1188179964), new G(X[33], 1546045734), new G(X[34], 1522805485), new G(X[35], 2643833823), new G(X[36], 2343527390), new G(X[37], 1014477480), new G(X[38], 1206759142), new G(X[39], 344077627), new G(X[40], 1290863460), new G(X[41], 3158454273), new G(X[42], 3505952657), new G(X[43], 106217008), new G(X[44], 3606008344), new G(X[45], 1432725776), new G(X[46], 1467031594), new G(X[47], 851169720), new G(X[48], 3100823752), new G(X[49], 1363258195), new G(X[50], 3750685593), new G(X[51], 3785050280), new G(X[52], 3318307427), new G(X[53], 3812723403), new G(X[54], 2003034995), new G(X[55], 3602036899), new G(X[56], 1575990012), new G(X[57], 1125592928), new G(X[58], 2716904306), new G(X[59], 442776044), new G(X[60], 593698344), new G(X[61], 3733110249), new G(X[62], 2999351573), new G(X[63], 3815920427), new G(3391569614, 3928383900), new G(3515267271, 566280711), new G(3940187606, 3454069534), new G(4118630271, 4000239992), new G(116418474, 1914138554), new G(174292421, 2731055270), new G(289380356, 3203993006), new G(460393269, 320620315), new G(685471733, 587496836), new G(852142971, 1086792851), new G(1017036298, 365543100), new G(1126000580, 2618297676), new G(1288033470, 3409855158), new G(1501505948, 4234509866), new G(1607167915, 987167468), new G(1816402316, 1246189591)], f = "SHA-384" === i ? [new G(3418070365, f[0]), new G(1654270250, f[1]), new G(2438529370, f[2]), new G(355462360, f[3]), new G(1731405415, f[4]), new G(41048885895, f[5]), new G(3675008525, f[6]), new G(1203062813, f[7])] : [new G(o[0], 4089235720), new G(o[1], 2227873595), new G(o[2], 4271175723), new G(o[3], 1595750129), new G(o[4], 2917565137), new G(o[5], 725511199), new G(o[6], 4215389547), new G(o[7], 327033209)]
                }
                for (t[e >>> 5] |= 128 << 24 - e % 32, t[n] = e, Y = t.length, y = 0; y < Y; y += L) {
                    for (e = f[0], n = f[1], o = f[2], s = f[3], a = f[4], l = f[5], c = f[6], u = f[7], k = 0; k < d; k += 1) K[k] = 16 > k ? new G(t[k * D + y], t[k * D + y + 1]) : F(B(K[k - 2]), K[k - 7], H(K[k - 15]), K[k - 16]), p = W(u, q(a), j(a, l, c), X[k], K[k]), h = U(V(e), z(e, n, o)), u = c, c = l, l = a, a = U(s, p), s = o, o = n, n = e, e = U(p, h);
                    f[0] = U(e, f[0]), f[1] = U(n, f[1]), f[2] = U(o, f[2]), f[3] = U(s, f[3]), f[4] = U(a, f[4]), f[5] = U(l, f[5]), f[6] = U(c, f[6]), f[7] = U(u, f[7])
                }
                if ("SHA-224" === i) t = [f[0], f[1], f[2], f[3], f[4], f[5], f[6]];
                else if ("SHA-256" === i) t = f;
                else if ("SHA-384" === i) t = [f[0].a, f[0].b, f[1].a, f[1].b, f[2].a, f[2].b, f[3].a, f[3].b, f[4].a, f[4].b, f[5].a, f[5].b];
                else {
                    if ("SHA-512" !== i) throw "Unexpected error in SHA-2 implementation";
                    t = [f[0].a, f[0].b, f[1].a, f[1].b, f[2].a, f[2].b, f[3].a, f[3].b, f[4].a, f[4].b, f[5].a, f[5].b, f[6].a, f[6].b, f[7].a, f[7].b]
                }
                return t
            }
            "function" != typeof define || (define.amd, 0) ? "undefined" != typeof i ? "undefined" != typeof e && e.exports ? e.exports = i = n : i = n : t.jsSHA = n : define(function() {
                return n
            })
        }(this)
    }, {}],
    287: [function(t, e, i) {
        ! function(t, e) {
            if ("object" == typeof i && i) e(i);
            else {
                var n = {};
                e(n), "function" == typeof define && define.amd ? define(n) : t.Mustache = n
            }
        }(this, function(t) {
            function e(t, e) {
                return f.call(t, e)
            }

            function i(t) {
                return !e(d, t)
            }

            function n(t) {
                return "function" == typeof t
            }

            function r(t) {
                return t.replace(/[-[]{}()*+?.,\^$|#s]/g, "\$&")
            }

            function o(t) {
                return String(t).replace(/[&<>"'/]/g, function(t) {
                    return m[t]
                })
            }

            function s(t) {
                if (!g(t) || 2 !== t.length) throw new Error("Invalid tags: " + t);
                return [new RegExp(r(t[0]) + "\s*"), new RegExp("\s*" + r(t[1]))]
            }

            function a(e, n) {
                function o() {
                    if (R && !C)
                        for (; I.length;) delete w[I.pop()];
                    else I = [];
                    R = !1, C = !1
                }
                n = n || t.tags, e = e || "", "string" == typeof n && (n = n.split(E));
                for (var a, p, h, f, d, y, g = s(n), m = new u(e), b = [], w = [], I = [], R = !1, C = !1; !m.eos();) {
                    if (a = m.pos, h = m.scanUntil(g[0]))
                        for (var P = 0, A = h.length; P < A; ++P) f = h.charAt(P), i(f) ? I.push(w.length) : C = !0, w.push(["text", f, a, a + 1]), a += 1, "n" === f && o();
                    if (!m.scan(g[0])) break;
                    if (R = !0, p = m.scan(T) || "name", m.scan(v), "=" === p ? (h = m.scanUntil(_), m.scan(_), m.scanUntil(g[1])) : "{" === p ? (h = m.scanUntil(new RegExp("\s*" + r("}" + n[1]))), m.scan(S), m.scanUntil(g[1]), p = "&") : h = m.scanUntil(g[1]), !m.scan(g[1])) throw new Error("Unclosed tag at " + m.pos);
                    if (d = [p, h, a, m.pos], w.push(d), "#" === p || "^" === p) b.push(d);
                    else if ("/" === p) {
                        if (y = b.pop(), !y) throw new Error('Unopened section "' + h + '" at ' + a);
                        if (y[1] !== h) throw new Error('Unclosed section "' + y[1] + '" at ' + a)
                    } else "name" === p || "{" === p || "&" === p ? C = !0 : "=" === p && (g = s(n = h.split(E)))
                }
                if (y = b.pop()) throw new Error('Unclosed section "' + y[1] + '" at ' + m.pos);
                return c(l(w))
            }

            function l(t) {
                for (var e, i, n = [], r = 0, o = t.length; r < o; ++r) e = t[r], e && ("text" === e[0] && i && "text" === i[0] ? (i[1] += e[1], i[3] = e[3]) : (n.push(e), i = e));
                return n
            }

            function c(t) {
                for (var e, i, n = [], r = n, o = [], s = 0, a = t.length; s < a; ++s) switch (e = t[s], e[0]) {
                    case "#":
                    case "^":
                        r.push(e), o.push(e), r = e[4] = [];
                        break;
                    case "/":
                        i = o.pop(), i[5] = e[2], r = o.length > 0 ? o[o.length - 1][4] : n;
                        break;
                    default:
                        r.push(e)
                }
                return n
            }

            function u(t) {
                this.string = t, this.tail = t, this.pos = 0
            }

            function p(t, e) {
                this.view = null == t ? {} : t, this.cache = {
                    ".": this.view
                }, this.parent = e
            }

            function h() {
                this.cache = {}
            }
            var f = RegExp.prototype.test,
                d = /S/,
                y = Object.prototype.toString,
                g = Array.isArray || function(t) {
                    return "[object Array]" === y.call(t)
                },
                m = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#x2F;"
                },
                v = /s*/,
                E = /s+/,
                _ = /s*=/,
                S = /s*}/,
                T = /#|^|/|>|{|&|=|!/;
            u.prototype.eos = function() {
                return "" === this.tail
            }, u.prototype.scan = function(t) {
                var e = this.tail.match(t);
                if (e && 0 === e.index) {
                    var i = e[0];
                    return (this.tail = this.tail.substring(i.length), this.pos += i.length, i)
                }
                return ""
            }, u.prototype.scanUntil = function(t) {
                var e, i = this.tail.search(t);
                switch (i) {
                    case -1:
                        e = this.tail, this.tail = "";
                        break;
                    case 0:
                        e = "";
                        break;
                    default:
                        e = this.tail.substring(0, i), this.tail = this.tail.substring(i)
                }
                return (this.pos += e.length, e)
            }, p.prototype.push = function(t) {
                return new p(t, this)
            }, p.prototype.lookup = function(t) {
                var e;
                if (t in this.cache) e = this.cache[t];
                else {
                    for (var i = this; i;) {
                        if (t.indexOf(".") > 0) {
                            e = i.view;
                            for (var r = t.split("."), o = 0; null != e && o < r.length;) e = e[r[o++]]
                        } else e = i.view[t];
                        if (null != e) break;
                        i = i.parent
                    }
                    this.cache[t] = e
                }
                return (n(e) && (e = e.call(this.view)), e)
            }, h.prototype.clearCache = function() {
                this.cache = {}
            }, h.prototype.parse = function(t, e) {
                var i = this.cache,
                    n = i[t];
                return (null == n && (n = i[t] = a(t, e)), n)
            }, h.prototype.render = function(t, e, i) {
                var n = this.parse(t),
                    r = e instanceof p ? e : new p(e);
                return this.renderTokens(n, r, i, t)
            }, h.prototype.renderTokens = function(e, i, r, o) {
                function s(t) {
                    return u.render(t, i, r)
                }
                for (var a, l, c = "", u = this, p = 0, h = e.length; p < h; ++p) switch (a = e[p], a[0]) {
                    case "#":
                        if (l = i.lookup(a[1]), !l) continue;
                        if (g(l))
                            for (var f = 0, d = l.length; f < d; ++f) c += this.renderTokens(a[4], i.push(l[f]), r, o);
                        else if ("object" == typeof l || "string" == typeof l) c += this.renderTokens(a[4], i.push(l), r, o);
                        else if (n(l)) {
                            if ("string" != typeof o) throw new Error("Cannot use higher-order sections without the original template");
                            l = l.call(i.view, o.slice(a[3], a[5]), s), null != l && (c += l)
                        } else c += this.renderTokens(a[4], i, r, o);
                        break;
                    case "^":
                        l = i.lookup(a[1]), (!l || g(l) && 0 === l.length) && (c += this.renderTokens(a[4], i, r, o));
                        break;
                    case ">":
                        if (!r) continue;
                        l = n(r) ? r(a[1]) : r[a[1]], null != l && (c += this.renderTokens(this.parse(l), i, r, l));
                        break;
                    case "&":
                        l = i.lookup(a[1]), null != l && (c += l);
                        break;
                    case "name":
                        l = i.lookup(a[1]), null != l && (c += t.escape(l));
                        break;
                    case "text":
                        c += a[1]
                }
                return c
            }, t.name = "mustache.js", t.version = "0.8.1", t.tags = ["{{", "}}"];
            var b = new h;
            t.clearCache = function() {
                return b.clearCache()
            }, t.parse = function(t, e) {
                return b.parse(t, e)
            }, t.render = function(t, e, i) {
                return b.render(t, e, i)
            }, t.to_html = function(e, i, r, o) {
                var s = t.render(e, i, r);
                return n(o) ? void o(s) : s
            }, t.escape = o, t.Scanner = u, t.Context = p, t.Writer = h
        })
    }, {}],
    288: [function(t, e, i) {
        (function() {
            function i(t, e, i) {
                var n = e && i || 0,
                    r = 0;
                for (e = e || [], t.toLowerCase().replace(/[0-9a-f]{2}/g, function(t) {
                        r < 16 && (e[n + r++] = f[t])
                    }); r < 16;) e[n + r++] = 0;
                return e
            }

            function n(t, e) {
                var i = e || 0,
                    n = h;
                return n[t[i++]] + n[t[i++]] + n[t[i++]] + n[t[i++]] + "-" + n[t[i++]] + n[t[i++]] + "-" + n[t[i++]] + n[t[i++]] + "-" + n[t[i++]] + n[t[i++]] + "-" + n[t[i++]] + n[t[i++]] + n[t[i++]] + n[t[i++]] + n[t[i++]] + n[t[i++]]
            }

            function r(t, e, i) {
                var r = e && i || 0,
                    o = e || [];
                t = t || {};
                var s = null != t.clockseq ? t.clockseq : m,
                    a = null != t.msecs ? t.msecs : (new Date).getTime(),
                    l = null != t.nsecs ? t.nsecs : E + 1,
                    c = a - v + (l - E) / 1e4;
                if (c < 0 && null == t.clockseq && (s = s + 1 & 16383), (c < 0 || a > v) && null == t.nsecs && (l = 0), l >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                v = a, E = l, m = s, a += 122192928e5;
                var u = (1e4 * (268435455 & a) + l) % 4294967296;
                o[r++] = u >>> 24 & 255, o[r++] = u >>> 16 & 255, o[r++] = u >>> 8 & 255, o[r++] = 255 & u;
                var p = a / 4294967296 * 1e4 & 268435455;
                o[r++] = p >>> 8 & 255, o[r++] = 255 & p, o[r++] = p >>> 24 & 15 | 16, o[r++] = p >>> 16 & 255, o[r++] = s >>> 8 | 128, o[r++] = 255 & s;
                for (var h = t.node || g, f = 0; f < 6; f++) o[r + f] = h[f];
                return e ? e : n(o)
            }

            function o(t, e, i) {
                var r = e && i || 0;
                "string" == typeof t && (e = "binary" == t ? new p(16) : null, t = null), t = t || {};
                var o = t.random || (t.rng || s)();
                if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, e)
                    for (var a = 0; a < 16; a++) e[r + a] = o[a];
                return e || n(o)
            }
            var s, a = this;
            if ("function" == typeof t) try {
                var l = t("crypto").randomBytes;
                s = l && function() {
                    return l(16)
                }
            } catch (t) {}
            if (!s && a.crypto && crypto.getRandomValues) {
                var c = new Uint8Array(16);
                s = function() {
                    return (crypto.getRandomValues(c), c)
                }
            }
            if (!s) {
                var u = new Array(16);
                s = function() {
                    for (var t, e = 0; e < 16; e++) 0 === (3 & e) && (t = 4294967296 * Math.random()), u[e] = t >>> ((3 & e) << 3) & 255;
                    return u
                }
            }
            for (var p = "function" == typeof Buffer ? Buffer : Array, h = [], f = {}, d = 0; d < 256; d++) h[d] = (d + 256).toString(16).substr(1), f[h[d]] = d;
            var y = s(),
                g = [1 | y[0], y[1], y[2], y[3], y[4], y[5]],
                m = 16383 & (y[6] << 8 | y[7]),
                v = 0,
                E = 0,
                _ = o;
            if (_.v1 = r, _.v4 = o, _.parse = i, _.unparse = n, _.BufferClass = p, "function" == typeof define && define.amd) define(function() {
                return _
            });
            else if ("undefined" != typeof e && e.exports) e.exports = _;
            else {
                var S = a.uuid;
                _.noConflict = function() {
                    return (a.uuid = S, _)
                }, a.uuid = _
            }
        }).call(this)
    }, {
        undefined: void 0
    }],
    289: [function(t, e, i) {
        ! function(t) {
            "use strict";
            if ("function" == typeof bootstrap) bootstrap("promise", t);
            else if ("object" == typeof i && "object" == typeof e) e.exports = t();
            else if ("function" == typeof define && define.amd) define(t);
            else if ("undefined" != typeof ses) {
                if (!ses.ok()) return;
                ses.makeQ = t
            } else {
                if ("undefined" == typeof window && "undefined" == typeof self) throw new Error("This environment was not anticipated by Q. Please file a bug.");
                var n = "undefined" != typeof window ? window : self,
                    r = n.Q;
                n.Q = t(), n.Q.noConflict = function() {
                    return (n.Q = r, this)
                }
            }
        }(function() {
            "use strict";

            function t(t) {
                return function() {
                    return Y.apply(t, arguments)
                }
            }

            function e(t) {
                return t === Object(t)
            }

            function i(t) {
                return "[object StopIteration]" === et(t) || t instanceof q
            }

            function n(t, e) {
                if (B && e.stack && "object" == typeof t && null !== t && t.stack && t.stack.indexOf(it) === -1) {
                    for (var i = [], n = e; n; n = n.source) n.stack && i.unshift(n.stack);
                    i.unshift(t.stack);
                    var o = i.join("n" + it + "n");
                    t.stack = r(o)
                }
            }

            function r(t) {
                for (var e = t.split("n"), i = [], n = 0; n < e.length; ++n) {
                    var r = e[n];
                    a(r) || o(r) || !r || i.push(r)
                }
                return i.join("n")
            }

            function o(t) {
                return t.indexOf("(module.js:") !== -1 || t.indexOf("(node.js:") !== -1
            }

            function s(t) {
                var e = /at .+ ((.+):(d+):(?:d+))$/.exec(t);
                if (e) return [e[1], Number(e[2])];
                var i = /at ([^ ]+):(d+):(?:d+)$/.exec(t);
                if (i) return [i[1], Number(i[2])];
                var n = /.*@(.+):(d+)$/.exec(t);
                return n ? [n[1], Number(n[2])] : void 0
            }

            function a(t) {
                var e = s(t);
                if (!e) return !1;
                var i = e[0],
                    n = e[1];
                return i === V && n >= j && n <= at
            }

            function l() {
                if (B) try {
                    throw new Error
                } catch (n) {
                    var t = n.stack.split("n"),
                        e = t[0].indexOf("@") > 0 ? t[1] : t[2],
                        i = s(e);
                    if (!i) return;
                    return (V = i[0], i[1])
                }
            }

            function c(t, e, i) {
                return function() {
                    return ("undefined" != typeof console && "function" == typeof console.warn && console.warn(e + " is deprecated, use " + i + " instead.", new Error("").stack), t.apply(t, arguments))
                }
            }

            function u(t) {
                return t instanceof d ? t : v(t) ? C(t) : R(t)
            }

            function p() {
                function t(t) {
                    e = t, o.source = t, X(i, function(e, i) {
                        u.nextTick(function() {
                            t.promiseDispatch.apply(t, i)
                        })
                    }, void 0), i = void 0, n = void 0
                }
                var e, i = [],
                    n = [],
                    r = Z(p.prototype),
                    o = Z(d.prototype);
                if (o.promiseDispatch = function(t, r, o) {
                        var s = K(arguments);
                        i ? (i.push(s), "when" === r && o[1] && n.push(o[1])) : u.nextTick(function() {
                            e.promiseDispatch.apply(e, s)
                        })
                    }, o.valueOf = function() {
                        if (i) return o;
                        var t = g(e);
                        return (m(t) && (e = t), t)
                    }, o.inspect = function() {
                        return e ? e.inspect() : {
                            state: "pending"
                        }
                    }, u.longStackSupport && B) try {
                    throw new Error
                } catch (t) {
                    o.stack = t.stack.substring(t.stack.indexOf("n") + 1)
                }
                return (r.promise = o, r.resolve = function(i) {
                    e || t(u(i))
                }, r.fulfill = function(i) {
                    e || t(R(i))
                }, r.reject = function(i) {
                    e || t(I(i))
                }, r.notify = function(t) {
                    e || X(n, function(e, i) {
                        u.nextTick(function() {
                            i(t)
                        })
                    }, void 0)
                }, r)
            }

            function h(t) {
                if ("function" != typeof t) throw new TypeError("resolver must be a function.");
                var e = p();
                try {
                    t(e.resolve, e.reject, e.notify)
                } catch (t) {
                    e.reject(t)
                }
                return e.promise
            }

            function f(t) {
                return h(function(e, i) {
                    for (var n = 0, r = t.length; n < r; n++) u(t[n]).then(e, i)
                })
            }

            function d(t, e, i) {
                void 0 === e && (e = function(t) {
                    return I(new Error("Promise does not support operation: " + t))
                }), void 0 === i && (i = function() {
                    return {
                        state: "unknown"
                    }
                });
                var n = Z(d.prototype);
                if (n.promiseDispatch = function(i, r, o) {
                        var s;
                        try {
                            s = t[r] ? t[r].apply(n, o) : e.call(n, r, o)
                        } catch (t) {
                            s = I(t)
                        }
                        i && i(s)
                    }, n.inspect = i, i) {
                    var r = i();
                    "rejected" === r.state && (n.exception = r.reason), n.valueOf = function() {
                        var t = i();
                        return "pending" === t.state || "rejected" === t.state ? n : t.value
                    }
                }
                return n
            }

            function y(t, e, i, n) {
                return u(t).then(e, i, n)
            }

            function g(t) {
                if (m(t)) {
                    var e = t.inspect();
                    if ("fulfilled" === e.state) return e.value
                }
                return t
            }

            function m(t) {
                return t instanceof d
            }

            function v(t) {
                return e(t) && "function" == typeof t.then
            }

            function E(t) {
                return m(t) && "pending" === t.inspect().state
            }

            function _(t) {
                return !m(t) || "fulfilled" === t.inspect().state
            }

            function S(t) {
                return m(t) && "rejected" === t.inspect().state
            }

            function T() {
                nt.length = 0, rt.length = 0, st || (st = !0)
            }

            function b(t, e) {
                st && ("object" == typeof process && "function" == typeof process.emit && u.nextTick.runAfter(function() {
                    Q(rt, t) !== -1 && (process.emit("unhandledRejection", e, t), ot.push(t))
                }), rt.push(t), e && "undefined" != typeof e.stack ? nt.push(e.stack) : nt.push("(no stack) " + e))
            }

            function w(t) {
                if (st) {
                    var e = Q(rt, t);
                    e !== -1 && ("object" == typeof process && "function" == typeof process.emit && u.nextTick.runAfter(function() {
                        var i = Q(ot, t);
                        i !== -1 && (process.emit("rejectionHandled", nt[e], t), ot.splice(i, 1))
                    }), rt.splice(e, 1), nt.splice(e, 1))
                }
            }

            function I(t) {
                var e = d({
                    when: function(e) {
                        return (e && w(this), e ? e(t) : this)
                    }
                }, function() {
                    return this
                }, function() {
                    return {
                        state: "rejected",
                        reason: t
                    }
                });
                return (b(e, t), e)
            }

            function R(t) {
                return d({
                    when: function() {
                        return t
                    },
                    get: function(e) {
                        return t[e]
                    },
                    set: function(e, i) {
                        t[e] = i
                    },
                    "delete": function(e) {
                        delete t[e]
                    },
                    post: function(e, i) {
                        return null === e || void 0 === e ? t.apply(void 0, i) : t[e].apply(t, i)
                    },
                    apply: function(e, i) {
                        return t.apply(e, i)
                    },
                    keys: function() {
                        return tt(t)
                    }
                }, void 0, function() {
                    return {
                        state: "fulfilled",
                        value: t
                    }
                })
            }

            function C(t) {
                var e = p();
                return (u.nextTick(function() {
                    try {
                        t.then(e.resolve, e.reject, e.notify)
                    } catch (t) {
                        e.reject(t)
                    }
                }), e.promise)
            }

            function P(t) {
                return d({
                    isDef: function() {}
                }, function(e, i) {
                    return k(t, e, i)
                }, function() {
                    return u(t).inspect()
                })
            }

            function A(t, e, i) {
                return u(t).spread(e, i)
            }

            function O(t) {
                return function() {
                    function e(t, e) {
                        var s;
                        if ("undefined" == typeof StopIteration) {
                            try {
                                s = n[t](e)
                            } catch (t) {
                                return I(t)
                            }
                            return s.done ? u(s.value) : y(s.value, r, o)
                        }
                        try {
                            s = n[t](e)
                        } catch (t) {
                            return i(t) ? u(t.value) : I(t)
                        }
                        return y(s, r, o)
                    }
                    var n = t.apply(this, arguments),
                        r = e.bind(e, "next"),
                        o = e.bind(e, "throw");
                    return r()
                }
            }

            function N(t) {
                u.done(u.async(t)())
            }

            function x(t) {
                throw new q(t)
            }

            function M(t) {
                return function() {
                    return A([this, L(arguments)], function(e, i) {
                        return t.apply(e, i)
                    })
                }
            }

            function k(t, e, i) {
                return u(t).dispatch(e, i)
            }

            function L(t) {
                return y(t, function(t) {
                    var e = 0,
                        i = p();
                    return (X(t, function(n, r, o) {
                        var s;
                        m(r) && "fulfilled" === (s = r.inspect()).state ? t[o] = s.value : (++e, y(r, function(n) {
                            t[o] = n, 0 === --e && i.resolve(t)
                        }, i.reject, function(t) {
                            i.notify({
                                index: o,
                                value: t
                            })
                        }))
                    }, void 0), 0 === e && i.resolve(t), i.promise)
                })
            }

            function D(t) {
                if (0 === t.length) return u.resolve();
                var e = u.defer(),
                    i = 0;
                return (X(t, function(n, r, o) {
                    function s(t) {
                        e.resolve(t)
                    }

                    function a() {
                        i--, 0 === i && e.reject(new Error("Can't get fulfillment value from any promise, all promises were rejected."))
                    }

                    function l(t) {
                        e.notify({
                            index: o,
                            value: t
                        })
                    }
                    var c = t[o];
                    i++, y(c, s, a, l)
                }, void 0), e.promise)
            }

            function U(t) {
                return y(t, function(t) {
                    return (t = J(t, u), y(L(J(t, function(t) {
                        return y(t, z, z)
                    })), function() {
                        return t
                    }))
                })
            }

            function F(t) {
                return u(t).allSettled()
            }

            function W(t, e) {
                return u(t).then(void 0, void 0, e)
            }

            function H(t, e) {
                return u(t).nodeify(e)
            }
            var B = !1;
            try {
                throw new Error
            } catch (t) {
                B = !!t.stack
            }
            var V, q, j = l(),
                z = function() {},
                G = function() {
                    function t() {
                        for (var t, n; i.next;) i = i.next, t = i.task, i.task = void 0, n = i.domain, n && (i.domain = void 0, n.enter()), e(t, n);
                        for (; a.length;) t = a.pop(), e(t);
                        r = !1
                    }

                    function e(e, i) {
                        try {
                            e()
                        } catch (e) {
                            if (s) throw (i && i.exit(), setTimeout(t, 0), i && i.enter(), e);
                            setTimeout(function() {
                                throw e
                            }, 0)
                        }
                        i && i.exit()
                    }
                    var i = {
                            task: void 0,
                            next: null
                        },
                        n = i,
                        r = !1,
                        o = void 0,
                        s = !1,
                        a = [];
                    if (G = function(t) {
                            n = n.next = {
                                task: t,
                                domain: s && process.domain,
                                next: null
                            }, r || (r = !0, o())
                        }, "object" == typeof process && "[object process]" === process.toString() && process.nextTick) s = !0, o = function() {
                        process.nextTick(t)
                    };
                    else if ("function" == typeof setImmediate) o = "undefined" != typeof window ? setImmediate.bind(window, t) : function() {
                        setImmediate(t)
                    };
                    else if ("undefined" != typeof MessageChannel) {
                        var l = new MessageChannel;
                        l.port1.onmessage = function() {
                            o = c, l.port1.onmessage = t, t()
                        };
                        var c = function() {
                            l.port2.postMessage(0)
                        };
                        o = function() {
                            setTimeout(t, 0), c()
                        }
                    } else o = function() {
                        setTimeout(t, 0)
                    };
                    return (G.runAfter = function(t) {
                        a.push(t), r || (r = !0, o())
                    }, G)
                }(),
                Y = Function.call,
                K = t(Array.prototype.slice),
                X = t(Array.prototype.reduce || function(t, e) {
                    var i = 0,
                        n = this.length;
                    if (1 === arguments.length)
                        for (;;) {
                            if (i in this) {
                                e = this[i++];
                                break
                            }
                            if (++i >= n) throw new TypeError
                        }
                    for (; i < n; i++) i in this && (e = t(e, this[i], i));
                    return e
                }),
                Q = t(Array.prototype.indexOf || function(t) {
                    for (var e = 0; e < this.length; e++)
                        if (this[e] === t) return e;
                    return -1
                }),
                J = t(Array.prototype.map || function(t, e) {
                    var i = this,
                        n = [];
                    return (X(i, function(r, o, s) {
                        n.push(t.call(e, o, s, i))
                    }, void 0), n)
                }),
                Z = Object.create || function(t) {
                    function e() {}
                    return (e.prototype = t, new e)
                },
                $ = t(Object.prototype.hasOwnProperty),
                tt = Object.keys || function(t) {
                    var e = [];
                    for (var i in t) $(t, i) && e.push(i);
                    return e
                },
                et = t(Object.prototype.toString);
            q = "undefined" != typeof ReturnValue ? ReturnValue : function(t) {
                this.value = t
            };
            var it = "From previous event:";
            u.resolve = u, u.nextTick = G, u.longStackSupport = !1, "object" == typeof process && process && process.env && process.env.Q_DEBUG && (u.longStackSupport = !0), u.defer = p, p.prototype.makeNodeResolver = function() {
                var t = this;
                return function(e, i) {
                    e ? t.reject(e) : arguments.length > 2 ? t.resolve(K(arguments, 1)) : t.resolve(i)
                }
            }, u.Promise = h, u.promise = h, h.race = f, h.all = L, h.reject = I, h.resolve = u, u.passByCopy = function(t) {
                return t
            }, d.prototype.passByCopy = function() {
                return this
            }, u.join = function(t, e) {
                return u(t).join(e)
            }, d.prototype.join = function(t) {
                return u([this, t]).spread(function(t, e) {
                    if (t === e) return t;
                    throw new Error("Can't join: not the same: " + t + " " + e)
                })
            }, u.race = f, d.prototype.race = function() {
                return this.then(u.race)
            }, u.makePromise = d, d.prototype.toString = function() {
                return "[object Promise]"
            }, d.prototype.then = function(t, e, i) {
                function r(e) {
                    try {
                        return "function" == typeof t ? t(e) : e
                    } catch (t) {
                        return I(t)
                    }
                }

                function o(t) {
                    if ("function" == typeof e) {
                        n(t, a);
                        try {
                            return e(t)
                        } catch (t) {
                            return I(t)
                        }
                    }
                    return I(t)
                }

                function s(t) {
                    return "function" == typeof i ? i(t) : t
                }
                var a = this,
                    l = p(),
                    c = !1;
                return (u.nextTick(function() {
                    a.promiseDispatch(function(t) {
                        c || (c = !0, l.resolve(r(t)))
                    }, "when", [function(t) {
                        c || (c = !0, l.resolve(o(t)))
                    }])
                }), a.promiseDispatch(void 0, "when", [void 0, function(t) {
                    var e, i = !1;
                    try {
                        e = s(t)
                    } catch (t) {
                        if (i = !0, !u.onerror) throw t;
                        u.onerror(t)
                    }
                    i || l.notify(e)
                }]), l.promise)
            }, u.tap = function(t, e) {
                return u(t).tap(e)
            }, d.prototype.tap = function(t) {
                return (t = u(t), this.then(function(e) {
                    return t.fcall(e).thenResolve(e)
                }))
            }, u.when = y, d.prototype.thenResolve = function(t) {
                return this.then(function() {
                    return t
                })
            }, u.thenResolve = function(t, e) {
                return u(t).thenResolve(e)
            }, d.prototype.thenReject = function(t) {
                return this.then(function() {
                    throw t
                })
            }, u.thenReject = function(t, e) {
                return u(t).thenReject(e)
            }, u.nearer = g, u.isPromise = m, u.isPromiseAlike = v, u.isPending = E, d.prototype.isPending = function() {
                return "pending" === this.inspect().state
            }, u.isFulfilled = _, d.prototype.isFulfilled = function() {
                return "fulfilled" === this.inspect().state
            }, u.isRejected = S, d.prototype.isRejected = function() {
                return "rejected" === this.inspect().state
            };
            var nt = [],
                rt = [],
                ot = [],
                st = !0;
            u.resetUnhandledRejections = T, u.getUnhandledReasons = function() {
                return nt.slice()
            }, u.stopUnhandledRejectionTracking = function() {
                T(), st = !1
            }, T(), u.reject = I, u.fulfill = R, u.master = P, u.spread = A, d.prototype.spread = function(t, e) {
                return this.all().then(function(e) {
                    return t.apply(void 0, e)
                }, e)
            }, u.async = O, u.spawn = N, u["return"] = x, u.promised = M, u.dispatch = k, d.prototype.dispatch = function(t, e) {
                var i = this,
                    n = p();
                return (u.nextTick(function() {
                    i.promiseDispatch(n.resolve, t, e)
                }), n.promise)
            }, u.get = function(t, e) {
                return u(t).dispatch("get", [e])
            }, d.prototype.get = function(t) {
                return this.dispatch("get", [t])
            }, u.set = function(t, e, i) {
                return u(t).dispatch("set", [e, i])
            }, d.prototype.set = function(t, e) {
                return this.dispatch("set", [t, e])
            }, u.del = u["delete"] = function(t, e) {
                return u(t).dispatch("delete", [e])
            }, d.prototype.del = d.prototype["delete"] = function(t) {
                return this.dispatch("delete", [t])
            }, u.mapply = u.post = function(t, e, i) {
                return u(t).dispatch("post", [e, i])
            }, d.prototype.mapply = d.prototype.post = function(t, e) {
                return this.dispatch("post", [t, e])
            }, u.send = u.mcall = u.invoke = function(t, e) {
                return u(t).dispatch("post", [e, K(arguments, 2)])
            }, d.prototype.send = d.prototype.mcall = d.prototype.invoke = function(t) {
                return this.dispatch("post", [t, K(arguments, 1)])
            }, u.fapply = function(t, e) {
                return u(t).dispatch("apply", [void 0, e])
            }, d.prototype.fapply = function(t) {
                return this.dispatch("apply", [void 0, t])
            }, u["try"] = u.fcall = function(t) {
                return u(t).dispatch("apply", [void 0, K(arguments, 1)])
            }, d.prototype.fcall = function() {
                return this.dispatch("apply", [void 0, K(arguments)])
            }, u.fbind = function(t) {
                var e = u(t),
                    i = K(arguments, 1);
                return function() {
                    return e.dispatch("apply", [this, i.concat(K(arguments))])
                }
            }, d.prototype.fbind = function() {
                var t = this,
                    e = K(arguments);
                return function() {
                    return t.dispatch("apply", [this, e.concat(K(arguments))])
                }
            }, u.keys = function(t) {
                return u(t).dispatch("keys", [])
            }, d.prototype.keys = function() {
                return this.dispatch("keys", [])
            }, u.all = L, d.prototype.all = function() {
                return L(this)
            }, u.any = D, d.prototype.any = function() {
                return D(this)
            }, u.allResolved = c(U, "allResolved", "allSettled"), d.prototype.allResolved = function() {
                return U(this)
            }, u.allSettled = F, d.prototype.allSettled = function() {
                return this.then(function(t) {
                    return L(J(t, function(t) {
                        function e() {
                            return t.inspect()
                        }
                        return (t = u(t), t.then(e, e))
                    }))
                })
            }, u.fail = u["catch"] = function(t, e) {
                return u(t).then(void 0, e)
            }, d.prototype.fail = d.prototype["catch"] = function(t) {
                return this.then(void 0, t)
            }, u.progress = W, d.prototype.progress = function(t) {
                return this.then(void 0, void 0, t)
            }, u.fin = u["finally"] = function(t, e) {
                return u(t)["finally"](e)
            }, d.prototype.fin = d.prototype["finally"] = function(t) {
                return (t = u(t), this.then(function(e) {
                    return t.fcall().then(function() {
                        return e
                    })
                }, function(e) {
                    return t.fcall().then(function() {
                        throw e
                    })
                }))
            }, u.done = function(t, e, i, n) {
                return u(t).done(e, i, n)
            }, d.prototype.done = function(t, e, i) {
                var r = function(t) {
                        u.nextTick(function() {
                            if (n(t, o), !u.onerror) throw t;
                            u.onerror(t)
                        })
                    },
                    o = t || e || i ? this.then(t, e, i) : this;
                "object" == typeof process && process && process.domain && (r = process.domain.bind(r)), o.then(void 0, r)
            }, u.timeout = function(t, e, i) {
                return u(t).timeout(e, i)
            }, d.prototype.timeout = function(t, e) {
                var i = p(),
                    n = setTimeout(function() {
                        e && "string" != typeof e || (e = new Error(e || "Timed out after " + t + " ms"), e.code = "ETIMEDOUT"), i.reject(e)
                    }, t);
                return (this.then(function(t) {
                    clearTimeout(n), i.resolve(t)
                }, function(t) {
                    clearTimeout(n), i.reject(t)
                }, i.notify), i.promise)
            }, u.delay = function(t, e) {
                return (void 0 === e && (e = t, t = void 0), u(t).delay(e))
            }, d.prototype.delay = function(t) {
                return this.then(function(e) {
                    var i = p();
                    return (setTimeout(function() {
                        i.resolve(e)
                    }, t), i.promise)
                })
            }, u.nfapply = function(t, e) {
                return u(t).nfapply(e)
            }, d.prototype.nfapply = function(t) {
                var e = p(),
                    i = K(t);
                return (i.push(e.makeNodeResolver()), this.fapply(i).fail(e.reject), e.promise)
            }, u.nfcall = function(t) {
                var e = K(arguments, 1);
                return u(t).nfapply(e)
            }, d.prototype.nfcall = function() {
                var t = K(arguments),
                    e = p();
                return (t.push(e.makeNodeResolver()), this.fapply(t).fail(e.reject), e.promise)
            }, u.nfbind = u.denodeify = function(t) {
                var e = K(arguments, 1);
                return function() {
                    var i = e.concat(K(arguments)),
                        n = p();
                    return (i.push(n.makeNodeResolver()), u(t).fapply(i).fail(n.reject), n.promise)
                }
            }, d.prototype.nfbind = d.prototype.denodeify = function() {
                var t = K(arguments);
                return (t.unshift(this), u.denodeify.apply(void 0, t))
            }, u.nbind = function(t, e) {
                var i = K(arguments, 2);
                return function() {
                    function n() {
                        return t.apply(e, arguments)
                    }
                    var r = i.concat(K(arguments)),
                        o = p();
                    return (r.push(o.makeNodeResolver()), u(n).fapply(r).fail(o.reject), o.promise)
                }
            }, d.prototype.nbind = function() {
                var t = K(arguments, 0);
                return (t.unshift(this), u.nbind.apply(void 0, t))
            }, u.nmapply = u.npost = function(t, e, i) {
                return u(t).npost(e, i)
            }, d.prototype.nmapply = d.prototype.npost = function(t, e) {
                var i = K(e || []),
                    n = p();
                return (i.push(n.makeNodeResolver()), this.dispatch("post", [t, i]).fail(n.reject), n.promise)
            }, u.nsend = u.nmcall = u.ninvoke = function(t, e) {
                var i = K(arguments, 2),
                    n = p();
                return (i.push(n.makeNodeResolver()), u(t).dispatch("post", [e, i]).fail(n.reject), n.promise)
            }, d.prototype.nsend = d.prototype.nmcall = d.prototype.ninvoke = function(t) {
                var e = K(arguments, 1),
                    i = p();
                return (e.push(i.makeNodeResolver()), this.dispatch("post", [t, e]).fail(i.reject), i.promise)
            }, u.nodeify = H, d.prototype.nodeify = function(t) {
                return t ? void this.then(function(e) {
                    u.nextTick(function() {
                        t(null, e)
                    })
                }, function(e) {
                    u.nextTick(function() {
                        t(e)
                    })
                }) : this
            }, u.noConflict = function() {
                throw new Error("Q.noConflict only works when Q is used as a global")
            };
            var at = l();
            return u
        })
    }, {}],
    290: [function(t, e, i) {
        var n = t(292),
            r = t(291);
        e.exports = {
            stringify: n,
            parse: r
        }
    }, {
        291: 291,
        292: 292
    }],
    291: [function(t, e, i) {
        var n = t(293),
            r = {
                delimiter: "&",
                depth: 5,
                arrayLimit: 20,
                parameterLimit: 1e3,
                strictNullHandling: !1,
                plainObjects: !1,
                allowPrototypes: !1,
                allowDots: !1
            };
        r.parseValues = function(t, e) {
            for (var i = {}, r = t.split(e.delimiter, e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit), o = 0, s = r.length; o < s; ++o) {
                var a = r[o],
                    l = a.indexOf("]=") === -1 ? a.indexOf("=") : a.indexOf("]=") + 1;
                if (l === -1) i[n.decode(a)] = "", e.strictNullHandling && (i[n.decode(a)] = null);
                else {
                    var c = n.decode(a.slice(0, l)),
                        u = n.decode(a.slice(l + 1));
                    Object.prototype.hasOwnProperty.call(i, c) ? i[c] = [].concat(i[c]).concat(u) : i[c] = u
                }
            }
            return i
        }, r.parseObject = function(t, e, i) {
            if (!t.length) return e;
            var n, o = t.shift();
            if ("[]" === o) n = [], n = n.concat(r.parseObject(t, e, i));
            else {
                n = i.plainObjects ? Object.create(null) : {};
                var s = "[" === o[0] && "]" === o[o.length - 1] ? o.slice(1, o.length - 1) : o,
                    a = parseInt(s, 10),
                    l = "" + a;
                !isNaN(a) && o !== s && l === s && a >= 0 && i.parseArrays && a <= i.arrayLimit ? (n = [], n[a] = r.parseObject(t, e, i)) : n[s] = r.parseObject(t, e, i)
            }
            return n
        }, r.parseKeys = function(t, e, i) {
            if (t) {
                i.allowDots && (t = t.replace(/.([^.[]+)/g, "[$1]"));
                var n = /^([^[]]*)/,
                    o = /([[^[]]*])/g,
                    s = n.exec(t),
                    a = [];
                if (s[1]) {
                    if (!i.plainObjects && Object.prototype.hasOwnProperty(s[1]) && !i.allowPrototypes) return;
                    a.push(s[1])
                }
                for (var l = 0; null !== (s = o.exec(t)) && l < i.depth;) ++l, (i.plainObjects || !Object.prototype.hasOwnProperty(s[1].replace(/[|]/g, "")) || i.allowPrototypes) && a.push(s[1]);
                return (s && a.push("[" + t.slice(s.index) + "]"), r.parseObject(a, e, i))
            }
        }, e.exports = function(t, e) {
            if (e = e || {}, e.delimiter = "string" == typeof e.delimiter || n.isRegExp(e.delimiter) ? e.delimiter : r.delimiter, e.depth = "number" == typeof e.depth ? e.depth : r.depth, e.arrayLimit = "number" == typeof e.arrayLimit ? e.arrayLimit : r.arrayLimit, e.parseArrays = e.parseArrays !== !1, e.allowDots = "boolean" == typeof e.allowDots ? e.allowDots : r.allowDots, e.plainObjects = "boolean" == typeof e.plainObjects ? e.plainObjects : r.plainObjects, e.allowPrototypes = "boolean" == typeof e.allowPrototypes ? e.allowPrototypes : r.allowPrototypes, e.parameterLimit = "number" == typeof e.parameterLimit ? e.parameterLimit : r.parameterLimit, e.strictNullHandling = "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : r.strictNullHandling, "" === t || null === t || "undefined" == typeof t) return e.plainObjects ? Object.create(null) : {};
            for (var i = "string" == typeof t ? r.parseValues(t, e) : t, o = e.plainObjects ? Object.create(null) : {}, s = Object.keys(i), a = 0, l = s.length; a < l; ++a) {
                var c = s[a],
                    u = r.parseKeys(c, i[c], e);
                o = n.merge(o, u, e)
            }
            return n.compact(o)
        }
    }, {
        293: 293
    }],
    292: [function(t, e, i) {
        var n = t(293),
            r = {
                delimiter: "&",
                arrayPrefixGenerators: {
                    brackets: function(t, e) {
                        return t + "[]"
                    },
                    indices: function(t, e) {
                        return t + "[" + e + "]"
                    },
                    repeat: function(t, e) {
                        return t
                    }
                },
                strictNullHandling: !1,
                skipNulls: !1,
                encode: !0
            };
        r.stringify = function(t, e, i, o, s, a, l, c) {
            if ("function" == typeof l) t = l(e, t);
            else if (n.isBuffer(t)) t = t.toString();
            else if (t instanceof Date) t = t.toISOString();
            else if (null === t) {
                if (o) return a ? n.encode(e) : e;
                t = ""
            }
            if ("string" == typeof t || "number" == typeof t || "boolean" == typeof t) return a ? [n.encode(e) + "=" + n.encode(t)] : [e + "=" + t];
            var u = [];
            if ("undefined" == typeof t) return u;
            var p;
            if (Array.isArray(l)) p = l;
            else {
                var h = Object.keys(t);
                p = c ? h.sort(c) : h
            }
            for (var f = 0, d = p.length; f < d; ++f) {
                var y = p[f];
                s && null === t[y] || (u = Array.isArray(t) ? u.concat(r.stringify(t[y], i(e, y), i, o, s, a, l)) : u.concat(r.stringify(t[y], e + "[" + y + "]", i, o, s, a, l)))
            }
            return u
        }, e.exports = function(t, e) {
            e = e || {};
            var i, n, o = "undefined" == typeof e.delimiter ? r.delimiter : e.delimiter,
                s = "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : r.strictNullHandling,
                a = "boolean" == typeof e.skipNulls ? e.skipNulls : r.skipNulls,
                l = "boolean" == typeof e.encode ? e.encode : r.encode,
                c = "function" == typeof e.sort ? e.sort : null;
            "function" == typeof e.filter ? (n = e.filter, t = n("", t)) : Array.isArray(e.filter) && (i = n = e.filter);
            var u = [];
            if ("object" != typeof t || null === t) return "";
            var p;
            p = e.arrayFormat in r.arrayPrefixGenerators ? e.arrayFormat : "indices" in e ? e.indices ? "indices" : "repeat" : "indices";
            var h = r.arrayPrefixGenerators[p];
            i || (i = Object.keys(t)), c && i.sort(c);
            for (var f = 0, d = i.length; f < d; ++f) {
                var y = i[f];
                a && null === t[y] || (u = u.concat(r.stringify(t[y], y, h, s, a, l, n, c)))
            }
            return u.join(o)
        }
    }, {
        293: 293
    }],
    293: [function(t, e, i) {
        var n = {};
        n.hexTable = new Array(256);
        for (var r = 0; r < 256; ++r) n.hexTable[r] = "%" + ((r < 16 ? "0" : "") + r.toString(16)).toUpperCase();
        i.arrayToObject = function(t, e) {
            for (var i = e.plainObjects ? Object.create(null) : {}, n = 0, r = t.length; n < r; ++n) "undefined" != typeof t[n] && (i[n] = t[n]);
            return i
        }, i.merge = function(t, e, n) {
            if (!e) return t;
            if ("object" != typeof e) return (Array.isArray(t) ? t.push(e) : "object" == typeof t ? t[e] = !0 : t = [t, e], t);
            if ("object" != typeof t) return t = [t].concat(e);
            Array.isArray(t) && !Array.isArray(e) && (t = i.arrayToObject(t, n));
            for (var r = Object.keys(e), o = 0, s = r.length; o < s; ++o) {
                var a = r[o],
                    l = e[a];
                Object.prototype.hasOwnProperty.call(t, a) ? t[a] = i.merge(t[a], l, n) : t[a] = l
            }
            return t
        }, i.decode = function(t) {
            try {
                return decodeURIComponent(t.replace(/+/g, " "))
            } catch (e) {
                return t
            }
        }, i.encode = function(t) {
            if (0 === t.length) return t;
            "string" != typeof t && (t = "" + t);
            for (var e = "", i = 0, r = t.length; i < r; ++i) {
                var o = t.charCodeAt(i);
                45 === o || 46 === o || 95 === o || 126 === o || o >= 48 && o <= 57 || o >= 65 && o <= 90 || o >= 97 && o <= 122 ? e += t[i] : o < 128 ? e += n.hexTable[o] : o < 2048 ? e += n.hexTable[192 | o >> 6] + n.hexTable[128 | 63 & o] : o < 55296 || o >= 57344 ? e += n.hexTable[224 | o >> 12] + n.hexTable[128 | o >> 6 & 63] + n.hexTable[128 | 63 & o] : (++i, o = 65536 + ((1023 & o) << 10 | 1023 & t.charCodeAt(i)), e += n.hexTable[240 | o >> 18] + n.hexTable[128 | o >> 12 & 63] + n.hexTable[128 | o >> 6 & 63] + n.hexTable[128 | 63 & o])
            }
            return e
        }, i.compact = function(t, e) {
            if ("object" != typeof t || null === t) return t;
            e = e || [];
            var n = e.indexOf(t);
            if (n !== -1) return e[n];
            if (e.push(t), Array.isArray(t)) {
                for (var r = [], o = 0, s = t.length; o < s; ++o) "undefined" != typeof t[o] && r.push(t[o]);
                return r
            }
            var a = Object.keys(t);
            for (o = 0, s = a.length; o < s; ++o) {
                var l = a[o];
                t[l] = i.compact(t[l], e)
            }
            return t
        }, i.isRegExp = function(t) {
            return "[object RegExp]" === Object.prototype.toString.call(t)
        }, i.isBuffer = function(t) {
            return null !== t && "undefined" != typeof t && !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
        }
    }, {}],
    294: [function(t, e, i) {
        (function() {
            function t(t) {
                function e(e, i, n, r, o, s) {
                    for (; o >= 0 && o < s; o += t) {
                        var a = r ? r[o] : o;
                        n = i(n, e[a], a, e)
                    }
                    return n
                }
                return function(i, n, r, o) {
                    n = S(n, o, 4);
                    var s = !P(i) && _.keys(i),
                        a = (s || i).length,
                        l = t > 0 ? 0 : a - 1;
                    return (arguments.length < 3 && (r = i[s ? s[l] : l], l += t), e(i, n, r, s, l, a))
                }
            }

            function n(t) {
                return function(e, i, n) {
                    i = T(i, n);
                    for (var r = C(e), o = t > 0 ? 0 : r - 1; o >= 0 && o < r; o += t)
                        if (i(e[o], o, e)) return o;
                    return -1
                }
            }

            function r(t, e, i) {
                return function(n, r, o) {
                    var s = 0,
                        a = C(n);
                    if ("number" == typeof o) t > 0 ? s = o >= 0 ? o : Math.max(o + a, s) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1;
                    else if (i && o && a) return (o = i(n, r), n[o] === r ? o : -1);
                    if (r !== r) return (o = e(h.call(n, s, a), _.isNaN), o >= 0 ? o + s : -1);
                    for (o = t > 0 ? s : a - 1; o >= 0 && o < a; o += t)
                        if (n[o] === r) return o;
                    return -1
                }
            }

            function o(t, e) {
                var i = M.length,
                    n = t.constructor,
                    r = _.isFunction(n) && n.prototype || c,
                    o = "constructor";
                for (_.has(t, o) && !_.contains(e, o) && e.push(o); i--;) o = M[i], o in t && t[o] !== r[o] && !_.contains(e, o) && e.push(o)
            }
            var s = this,
                a = s._,
                l = Array.prototype,
                c = Object.prototype,
                u = Function.prototype,
                p = l.push,
                h = l.slice,
                f = c.toString,
                d = c.hasOwnProperty,
                y = Array.isArray,
                g = Object.keys,
                m = u.bind,
                v = Object.create,
                E = function() {},
                _ = function(t) {
                    return t instanceof _ ? t : this instanceof _ ? void(this._wrapped = t) : new _(t)
                };
            "undefined" != typeof i ? ("undefined" != typeof e && e.exports && (i = e.exports = _), i._ = _) : s._ = _, _.VERSION = "1.8.3";
            var S = function(t, e, i) {
                    if (void 0 === e) return t;
                    switch (null == i ? 3 : i) {
                        case 1:
                            return function(i) {
                                return t.call(e, i)
                            };
                        case 2:
                            return function(i, n) {
                                return t.call(e, i, n)
                            };
                        case 3:
                            return function(i, n, r) {
                                return t.call(e, i, n, r)
                            };
                        case 4:
                            return function(i, n, r, o) {
                                return t.call(e, i, n, r, o)
                            }
                    }
                    return function() {
                        return t.apply(e, arguments)
                    }
                },
                T = function(t, e, i) {
                    return null == t ? _.identity : _.isFunction(t) ? S(t, e, i) : _.isObject(t) ? _.matcher(t) : _.property(t)
                };
            _.iteratee = function(t, e) {
                return T(t, e, 1 / 0)
            };
            var b = function(t, e) {
                    return function(i) {
                        var n = arguments.length;
                        if (n < 2 || null == i) return i;
                        for (var r = 1; r < n; r++)
                            for (var o = arguments[r], s = t(o), a = s.length, l = 0; l < a; l++) {
                                var c = s[l];
                                e && void 0 !== i[c] || (i[c] = o[c])
                            }
                        return i
                    }
                },
                w = function(t) {
                    if (!_.isObject(t)) return {};
                    if (v) return v(t);
                    E.prototype = t;
                    var e = new E;
                    return (E.prototype = null, e)
                },
                I = function(t) {
                    return function(e) {
                        return null == e ? void 0 : e[t]
                    }
                },
                R = Math.pow(2, 53) - 1,
                C = I("length"),
                P = function(t) {
                    var e = C(t);
                    return "number" == typeof e && e >= 0 && e <= R
                };
            _.each = _.forEach = function(t, e, i) {
                e = S(e, i);
                var n, r;
                if (P(t))
                    for (n = 0, r = t.length; n < r; n++) e(t[n], n, t);
                else {
                    var o = _.keys(t);
                    for (n = 0, r = o.length; n < r; n++) e(t[o[n]], o[n], t)
                }
                return t
            }, _.map = _.collect = function(t, e, i) {
                e = T(e, i);
                for (var n = !P(t) && _.keys(t), r = (n || t).length, o = Array(r), s = 0; s < r; s++) {
                    var a = n ? n[s] : s;
                    o[s] = e(t[a], a, t)
                }
                return o
            }, _.reduce = _.foldl = _.inject = t(1), _.reduceRight = _.foldr = t(-1), _.find = _.detect = function(t, e, i) {
                var n;
                if (n = P(t) ? _.findIndex(t, e, i) : _.findKey(t, e, i), void 0 !== n && n !== -1) return t[n]
            }, _.filter = _.select = function(t, e, i) {
                var n = [];
                return (e = T(e, i), _.each(t, function(t, i, r) {
                    e(t, i, r) && n.push(t)
                }), n)
            }, _.reject = function(t, e, i) {
                return _.filter(t, _.negate(T(e)), i)
            }, _.every = _.all = function(t, e, i) {
                e = T(e, i);
                for (var n = !P(t) && _.keys(t), r = (n || t).length, o = 0; o < r; o++) {
                    var s = n ? n[o] : o;
                    if (!e(t[s], s, t)) return !1
                }
                return !0
            }, _.some = _.any = function(t, e, i) {
                e = T(e, i);
                for (var n = !P(t) && _.keys(t), r = (n || t).length, o = 0; o < r; o++) {
                    var s = n ? n[o] : o;
                    if (e(t[s], s, t)) return !0
                }
                return !1
            }, _.contains = _.includes = _.include = function(t, e, i, n) {
                return (P(t) || (t = _.values(t)), ("number" != typeof i || n) && (i = 0), _.indexOf(t, e, i) >= 0)
            }, _.invoke = function(t, e) {
                var i = h.call(arguments, 2),
                    n = _.isFunction(e);
                return _.map(t, function(t) {
                    var r = n ? e : t[e];
                    return null == r ? r : r.apply(t, i)
                })
            }, _.pluck = function(t, e) {
                return _.map(t, _.property(e))
            }, _.where = function(t, e) {
                return _.filter(t, _.matcher(e))
            }, _.findWhere = function(t, e) {
                return _.find(t, _.matcher(e))
            }, _.max = function(t, e, i) {
                var n, r, o = -(1 / 0),
                    s = -(1 / 0);
                if (null == e && null != t) {
                    t = P(t) ? t : _.values(t);
                    for (var a = 0, l = t.length; a < l; a++) n = t[a], n > o && (o = n)
                } else e = T(e, i), _.each(t, function(t, i, n) {
                    r = e(t, i, n), (r > s || r === -(1 / 0) && o === -(1 / 0)) && (o = t, s = r)
                });
                return o
            }, _.min = function(t, e, i) {
                var n, r, o = 1 / 0,
                    s = 1 / 0;
                if (null == e && null != t) {
                    t = P(t) ? t : _.values(t);
                    for (var a = 0, l = t.length; a < l; a++) n = t[a], n < o && (o = n)
                } else e = T(e, i), _.each(t, function(t, i, n) {
                    r = e(t, i, n), (r < s || r === 1 / 0 && o === 1 / 0) && (o = t, s = r)
                });
                return o
            }, _.shuffle = function(t) {
                for (var e, i = P(t) ? t : _.values(t), n = i.length, r = Array(n), o = 0; o < n; o++) e = _.random(0, o), e !== o && (r[o] = r[e]), r[e] = i[o];
                return r
            }, _.sample = function(t, e, i) {
                return null == e || i ? (P(t) || (t = _.values(t)), t[_.random(t.length - 1)]) : _.shuffle(t).slice(0, Math.max(0, e))
            }, _.sortBy = function(t, e, i) {
                return (e = T(e, i), _.pluck(_.map(t, function(t, i, n) {
                    return {
                        value: t,
                        index: i,
                        criteria: e(t, i, n)
                    }
                }).sort(function(t, e) {
                    var i = t.criteria,
                        n = e.criteria;
                    if (i !== n) {
                        if (i > n || void 0 === i) return 1;
                        if (i < n || void 0 === n) return -1
                    }
                    return t.index - e.index
                }), "value"))
            };
            var A = function(t) {
                return function(e, i, n) {
                    var r = {};
                    return (i = T(i, n), _.each(e, function(n, o) {
                        var s = i(n, o, e);
                        t(r, n, s)
                    }), r)
                }
            };
            _.groupBy = A(function(t, e, i) {
                _.has(t, i) ? t[i].push(e) : t[i] = [e]
            }), _.indexBy = A(function(t, e, i) {
                t[i] = e
            }), _.countBy = A(function(t, e, i) {
                _.has(t, i) ? t[i]++ : t[i] = 1
            }), _.toArray = function(t) {
                return t ? _.isArray(t) ? h.call(t) : P(t) ? _.map(t, _.identity) : _.values(t) : []
            }, _.size = function(t) {
                return null == t ? 0 : P(t) ? t.length : _.keys(t).length
            }, _.partition = function(t, e, i) {
                e = T(e, i);
                var n = [],
                    r = [];
                return (_.each(t, function(t, i, o) {
                    (e(t, i, o) ? n : r).push(t)
                }), [n, r])
            }, _.first = _.head = _.take = function(t, e, i) {
                if (null != t) return null == e || i ? t[0] : _.initial(t, t.length - e)
            }, _.initial = function(t, e, i) {
                return h.call(t, 0, Math.max(0, t.length - (null == e || i ? 1 : e)))
            }, _.last = function(t, e, i) {
                if (null != t) return null == e || i ? t[t.length - 1] : _.rest(t, Math.max(0, t.length - e))
            }, _.rest = _.tail = _.drop = function(t, e, i) {
                return h.call(t, null == e || i ? 1 : e)
            }, _.compact = function(t) {
                return _.filter(t, _.identity)
            };
            var O = function(t, e, i, n) {
                for (var r = [], o = 0, s = n || 0, a = C(t); s < a; s++) {
                    var l = t[s];
                    if (P(l) && (_.isArray(l) || _.isArguments(l))) {
                        e || (l = O(l, e, i));
                        var c = 0,
                            u = l.length;
                        for (r.length += u; c < u;) r[o++] = l[c++]
                    } else i || (r[o++] = l)
                }
                return r
            };
            _.flatten = function(t, e) {
                return O(t, e, !1)
            }, _.without = function(t) {
                return _.difference(t, h.call(arguments, 1))
            }, _.uniq = _.unique = function(t, e, i, n) {
                _.isBoolean(e) || (n = i, i = e, e = !1), null != i && (i = T(i, n));
                for (var r = [], o = [], s = 0, a = C(t); s < a; s++) {
                    var l = t[s],
                        c = i ? i(l, s, t) : l;
                    e ? (s && o === c || r.push(l), o = c) : i ? _.contains(o, c) || (o.push(c), r.push(l)) : _.contains(r, l) || r.push(l)
                }
                return r
            }, _.union = function() {
                return _.uniq(O(arguments, !0, !0))
            }, _.intersection = function(t) {
                for (var e = [], i = arguments.length, n = 0, r = C(t); n < r; n++) {
                    var o = t[n];
                    if (!_.contains(e, o)) {
                        for (var s = 1; s < i && _.contains(arguments[s], o); s++);
                        s === i && e.push(o)
                    }
                }
                return e
            }, _.difference = function(t) {
                var e = O(arguments, !0, !0, 1);
                return _.filter(t, function(t) {
                    return !_.contains(e, t)
                })
            }, _.zip = function() {
                return _.unzip(arguments)
            }, _.unzip = function(t) {
                for (var e = t && _.max(t, C).length || 0, i = Array(e), n = 0; n < e; n++) i[n] = _.pluck(t, n);
                return i
            }, _.object = function(t, e) {
                for (var i = {}, n = 0, r = C(t); n < r; n++) e ? i[t[n]] = e[n] : i[t[n][0]] = t[n][1];
                return i
            }, _.findIndex = n(1), _.findLastIndex = n(-1), _.sortedIndex = function(t, e, i, n) {
                i = T(i, n, 1);
                for (var r = i(e), o = 0, s = C(t); o < s;) {
                    var a = Math.floor((o + s) / 2);
                    i(t[a]) < r ? o = a + 1 : s = a
                }
                return o
            }, _.indexOf = r(1, _.findIndex, _.sortedIndex), _.lastIndexOf = r(-1, _.findLastIndex), _.range = function(t, e, i) {
                null == e && (e = t || 0, t = 0), i = i || 1;
                for (var n = Math.max(Math.ceil((e - t) / i), 0), r = Array(n), o = 0; o < n; o++, t += i) r[o] = t;
                return r
            };
            var N = function(t, e, i, n, r) {
                if (!(n instanceof e)) return t.apply(i, r);
                var o = w(t.prototype),
                    s = t.apply(o, r);
                return _.isObject(s) ? s : o
            };
            _.bind = function(t, e) {
                if (m && t.bind === m) return m.apply(t, h.call(arguments, 1));
                if (!_.isFunction(t)) throw new TypeError("Bind must be called on a function");
                var i = h.call(arguments, 2),
                    n = function() {
                        return N(t, n, e, this, i.concat(h.call(arguments)))
                    };
                return n
            }, _.partial = function(t) {
                var e = h.call(arguments, 1),
                    i = function() {
                        for (var n = 0, r = e.length, o = Array(r), s = 0; s < r; s++) o[s] = e[s] === _ ? arguments[n++] : e[s];
                        for (; n < arguments.length;) o.push(arguments[n++]);
                        return N(t, i, this, this, o)
                    };
                return i
            }, _.bindAll = function(t) {
                var e, i, n = arguments.length;
                if (n <= 1) throw new Error("bindAll must be passed function names");
                for (e = 1; e < n; e++) i = arguments[e], t[i] = _.bind(t[i], t);
                return t
            }, _.memoize = function(t, e) {
                var i = function(n) {
                    var r = i.cache,
                        o = "" + (e ? e.apply(this, arguments) : n);
                    return (_.has(r, o) || (r[o] = t.apply(this, arguments)), r[o])
                };
                return (i.cache = {}, i)
            }, _.delay = function(t, e) {
                var i = h.call(arguments, 2);
                return setTimeout(function() {
                    return t.apply(null, i)
                }, e)
            }, _.defer = _.partial(_.delay, _, 1), _.throttle = function(t, e, i) {
                var n, r, o, s = null,
                    a = 0;
                i || (i = {});
                var l = function() {
                    a = i.leading === !1 ? 0 : _.now(), s = null, o = t.apply(n, r), s || (n = r = null)
                };
                return function() {
                    var c = _.now();
                    a || i.leading !== !1 || (a = c);
                    var u = e - (c - a);
                    return (n = this, r = arguments, u <= 0 || u > e ? (s && (clearTimeout(s), s = null), a = c, o = t.apply(n, r), s || (n = r = null)) : s || i.trailing === !1 || (s = setTimeout(l, u)), o)
                }
            }, _.debounce = function(t, e, i) {
                var n, r, o, s, a, l = function() {
                    var c = _.now() - s;
                    c < e && c >= 0 ? n = setTimeout(l, e - c) : (n = null, i || (a = t.apply(o, r), n || (o = r = null)))
                };
                return function() {
                    o = this, r = arguments, s = _.now();
                    var c = i && !n;
                    return (n || (n = setTimeout(l, e)), c && (a = t.apply(o, r), o = r = null), a)
                }
            }, _.wrap = function(t, e) {
                return _.partial(e, t)
            }, _.negate = function(t) {
                return function() {
                    return !t.apply(this, arguments)
                }
            }, _.compose = function() {
                var t = arguments,
                    e = t.length - 1;
                return function() {
                    for (var i = e, n = t[e].apply(this, arguments); i--;) n = t[i].call(this, n);
                    return n
                }
            }, _.after = function(t, e) {
                return function() {
                    if (--t < 1) return e.apply(this, arguments)
                }
            }, _.before = function(t, e) {
                var i;
                return function() {
                    return (--t > 0 && (i = e.apply(this, arguments)), t <= 1 && (e = null), i)
                }
            }, _.once = _.partial(_.before, 2);
            var x = !{
                    toString: null
                }.propertyIsEnumerable("toString"),
                M = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
            _.keys = function(t) {
                if (!_.isObject(t)) return [];
                if (g) return g(t);
                var e = [];
                for (var i in t) _.has(t, i) && e.push(i);
                return (x && o(t, e), e)
            }, _.allKeys = function(t) {
                if (!_.isObject(t)) return [];
                var e = [];
                for (var i in t) e.push(i);
                return (x && o(t, e), e)
            }, _.values = function(t) {
                for (var e = _.keys(t), i = e.length, n = Array(i), r = 0; r < i; r++) n[r] = t[e[r]];
                return n
            }, _.mapObject = function(t, e, i) {
                e = T(e, i);
                for (var n, r = _.keys(t), o = r.length, s = {}, a = 0; a < o; a++) n = r[a], s[n] = e(t[n], n, t);
                return s
            }, _.pairs = function(t) {
                for (var e = _.keys(t), i = e.length, n = Array(i), r = 0; r < i; r++) n[r] = [e[r], t[e[r]]];
                return n
            }, _.invert = function(t) {
                for (var e = {}, i = _.keys(t), n = 0, r = i.length; n < r; n++) e[t[i[n]]] = i[n];
                return e
            }, _.functions = _.methods = function(t) {
                var e = [];
                for (var i in t) _.isFunction(t[i]) && e.push(i);
                return e.sort()
            }, _.extend = b(_.allKeys), _.extendOwn = _.assign = b(_.keys), _.findKey = function(t, e, i) {
                e = T(e, i);
                for (var n, r = _.keys(t), o = 0, s = r.length; o < s; o++)
                    if (n = r[o], e(t[n], n, t)) return n
            }, _.pick = function(t, e, i) {
                var n, r, o = {},
                    s = t;
                if (null == s) return o;
                _.isFunction(e) ? (r = _.allKeys(s), n = S(e, i)) : (r = O(arguments, !1, !1, 1), n = function(t, e, i) {
                    return e in i
                }, s = Object(s));
                for (var a = 0, l = r.length; a < l; a++) {
                    var c = r[a],
                        u = s[c];
                    n(u, c, s) && (o[c] = u)
                }
                return o
            }, _.omit = function(t, e, i) {
                if (_.isFunction(e)) e = _.negate(e);
                else {
                    var n = _.map(O(arguments, !1, !1, 1), String);
                    e = function(t, e) {
                        return !_.contains(n, e)
                    }
                }
                return _.pick(t, e, i)
            }, _.defaults = b(_.allKeys, !0), _.create = function(t, e) {
                var i = w(t);
                return (e && _.extendOwn(i, e), i)
            }, _.clone = function(t) {
                return _.isObject(t) ? _.isArray(t) ? t.slice() : _.extend({}, t) : t
            }, _.tap = function(t, e) {
                return (e(t), t)
            }, _.isMatch = function(t, e) {
                var i = _.keys(e),
                    n = i.length;
                if (null == t) return !n;
                for (var r = Object(t), o = 0; o < n; o++) {
                    var s = i[o];
                    if (e[s] !== r[s] || !(s in r)) return !1
                }
                return !0
            };
            var k = function(t, e, i, n) {
                if (t === e) return 0 !== t || 1 / t === 1 / e;
                if (null == t || null == e) return t === e;
                t instanceof _ && (t = t._wrapped), e instanceof _ && (e = e._wrapped);
                var r = f.call(t);
                if (r !== f.call(e)) return !1;
                switch (r) {
                    case "[object RegExp]":
                    case "[object String]":
                        return "" + t == "" + e;
                    case "[object Number]":
                        return +t !== +t ? +e !== +e : 0 === +t ? 1 / +t === 1 / e : +t === +e;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +t === +e
                }
                var o = "[object Array]" === r;
                if (!o) {
                    if ("object" != typeof t || "object" != typeof e) return !1;
                    var s = t.constructor,
                        a = e.constructor;
                    if (s !== a && !(_.isFunction(s) && s instanceof s && _.isFunction(a) && a instanceof a) && "constructor" in t && "constructor" in e) return !1
                }
                i = i || [], n = n || [];
                for (var l = i.length; l--;)
                    if (i[l] === t) return n[l] === e;
                if (i.push(t), n.push(e), o) {
                    if (l = t.length, l !== e.length) return !1;
                    for (; l--;)
                        if (!k(t[l], e[l], i, n)) return !1
                } else {
                    var c, u = _.keys(t);
                    if (l = u.length, _.keys(e).length !== l) return !1;
                    for (; l--;)
                        if (c = u[l], !_.has(e, c) || !k(t[c], e[c], i, n)) return !1
                }
                return (i.pop(), n.pop(), !0)
            };
            _.isEqual = function(t, e) {
                return k(t, e)
            }, _.isEmpty = function(t) {
                return null == t || (P(t) && (_.isArray(t) || _.isString(t) || _.isArguments(t)) ? 0 === t.length : 0 === _.keys(t).length)
            }, _.isElement = function(t) {
                return !(!t || 1 !== t.nodeType)
            }, _.isArray = y || function(t) {
                return "[object Array]" === f.call(t)
            }, _.isObject = function(t) {
                var e = typeof t;
                return "function" === e || "object" === e && !!t
            }, _.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(t) {
                _["is" + t] = function(e) {
                    return f.call(e) === "[object " + t + "]"
                }
            }), _.isArguments(arguments) || (_.isArguments = function(t) {
                return _.has(t, "callee")
            }), "function" != typeof /./ && "object" != typeof Int8Array && (_.isFunction = function(t) {
                return "function" == typeof t || !1
            }), _.isFinite = function(t) {
                return isFinite(t) && !isNaN(parseFloat(t))
            }, _.isNaN = function(t) {
                return _.isNumber(t) && t !== +t
            }, _.isBoolean = function(t) {
                return t === !0 || t === !1 || "[object Boolean]" === f.call(t)
            }, _.isNull = function(t) {
                return null === t
            }, _.isUndefined = function(t) {
                return void 0 === t
            }, _.has = function(t, e) {
                return null != t && d.call(t, e)
            }, _.noConflict = function() {
                return (s._ = a, this)
            }, _.identity = function(t) {
                return t
            }, _.constant = function(t) {
                return function() {
                    return t
                }
            }, _.noop = function() {}, _.property = I, _.propertyOf = function(t) {
                return null == t ? function() {} : function(e) {
                    return t[e]
                }
            }, _.matcher = _.matches = function(t) {
                return (t = _.extendOwn({}, t), function(e) {
                    return _.isMatch(e, t)
                })
            }, _.times = function(t, e, i) {
                var n = Array(Math.max(0, t));
                e = S(e, i, 1);
                for (var r = 0; r < t; r++) n[r] = e(r);
                return n
            }, _.random = function(t, e) {
                return (null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1)))
            }, _.now = Date.now || function() {
                return (new Date).getTime()
            };
            var L = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                },
                D = _.invert(L),
                U = function(t) {
                    var e = function(e) {
                            return t[e]
                        },
                        i = "(?:" + _.keys(t).join("|") + ")",
                        n = RegExp(i),
                        r = RegExp(i, "g");
                    return function(t) {
                        return (t = null == t ? "" : "" + t, n.test(t) ? t.replace(r, e) : t)
                    }
                };
            _.escape = U(L), _.unescape = U(D), _.result = function(t, e, i) {
                var n = null == t ? void 0 : t[e];
                return (void 0 === n && (n = i), _.isFunction(n) ? n.call(t) : n)
            };
            var F = 0;
            _.uniqueId = function(t) {
                var e = ++F + "";
                return t ? t + e : e
            }, _.templateSettings = {
                evaluate: /<%([sS]+?)%>/g,
                interpolate: /<%=([sS]+?)%>/g,
                escape: /<%-([sS]+?)%>/g
            };
            var W = /(.)^/,
                H = {
                    "'": "'",
                    "\": "\",
                    "r": "r",
                    "n": "n",
                    "u2028": "u2028",
                    "u2029": "u2029"
                },
                B = /\|'|r|n|u2028|u2029/g,
                V = function(t) {
                    return "\" + H[t]
                };
            _.template = function(t, e, i) {
                !e && i && (e = i), e = _.defaults({}, e, _.templateSettings);
                var n = RegExp([(e.escape || W).source, (e.interpolate || W).source, (e.evaluate || W).source].join("|") + "|$", "g"),
                    r = 0,
                    o = "__p+='";
                t.replace(n, function(e, i, n, s, a) {
                    return (o += t.slice(r, a).replace(B, V), r = a + e.length, i ? o += "'+n((__t=(" + i + "))==null?'':_.escape(__t))+n'" : n ? o += "'+n((__t=(" + n + "))==null?'':__t)+n'" : s && (o += "';n" + s + "n__p+='"), e)
                }), o += "';n", e.variable || (o = "with(obj||{}){n" + o + "}n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};n" + o + "return __p;n";
                try {
                    var s = new Function(e.variable || "obj", "_", o)
                } catch (t) {
                    throw (t.source = o, t)
                }
                var a = function(t) {
                        return s.call(this, t, _)
                    },
                    l = e.variable || "obj";
                return (a.source = "function(" + l + "){n" + o + "}", a)
            }, _.chain = function(t) {
                var e = _(t);
                return (e._chain = !0, e)
            };
            var q = function(t, e) {
                return t._chain ? _(e).chain() : e
            };
            _.mixin = function(t) {
                _.each(_.functions(t), function(e) {
                    var i = _[e] = t[e];
                    _.prototype[e] = function() {
                        var t = [this._wrapped];
                        return (p.apply(t, arguments), q(this, i.apply(_, t)))
                    }
                })
            }, _.mixin(_), _.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
                var e = l[t];
                _.prototype[t] = function() {
                    var i = this._wrapped;
                    return (e.apply(i, arguments), "shift" !== t && "splice" !== t || 0 !== i.length || delete i[0], q(this, i))
                }
            }), _.each(["concat", "join", "slice"], function(t) {
                var e = l[t];
                _.prototype[t] = function() {
                    return q(this, e.apply(this._wrapped, arguments))
                }
            }), _.prototype.value = function() {
                return this._wrapped
            }, _.prototype.valueOf = _.prototype.toJSON = _.prototype.value, _.prototype.toString = function() {
                return "" + this._wrapped
            }, "function" == typeof define && define.amd && define("underscore", [], function() {
                return _
            })
        }).call(this)
    }, {}]
}, {}, [55]);
/* ******************************************************************************

This software incorporates the following open-source software:

check-preconditions
https://github.com/pnann/check-preconditions

The MIT License (MIT)

Copyright (c) 2015 Paul Nann

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

EventEmitter2
https://github.com/asyncly/EventEmitter2

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


jQuery
http://jquery.com/

Copyright 2005, 2014 jQuery Foundation and other contributors,
https://jquery.org/

This software consists of voluntary contributions made by many
individuals. For exact contribution history, see the revision history
available at https://github.com/jquery/jquery

The following license applies to all parts of this software except as
documented below:

====

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

====

All files located in the node_modules and external directories are
externally maintained libraries used by this software which have their
own licenses; we recommend you read them, as their terms may differ from
the terms above.


js-logger
https://github.com/jonnyreeves/js-logger

Copyright (c) 2012 Jonny Reeves, http://jonnyreeves.co.uk/

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


json-stringify-safe
https://github.com/isaacs/json-stringify-safe

Copyright (c) Isaac Z. Schlueter ("Author")
All rights reserved.

The BSD License

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:

1. Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright
   notice, this list of conditions and the following disclaimer in the
   documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS
BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN
IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


jsSHA
https://github.com/Caligatio/jsSHA

Copyright (c) 2008-2013, Brian Turek
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.
 * The names of the contributors may not be used to endorse or promote products
   derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
ANDANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIEDWARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED.IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT,INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING,BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 LOSS OF USE,DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OFLIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCEOR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISEDOF THE POSSIBILITY OF SUCH DAMAGE.


mustache.js
https://github.com/janl/mustache.js

The MIT License

Copyright (c) 2009 Chris Wanstrath (Ruby)
Copyright (c) 2010-2014 Jan Lehnardt (JavaScript)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


node-uuid
https://github.com/broofa/node-uuid

Copyright (c) 2010-2012 Robert Kieffer
MIT License - http://opensource.org/licenses/mit-license.php


qs
https://github.com/hapijs/qs

Copyright (c) 2014 Nathan LaFreniere and other contributors.
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * The names of any contributors may not be used to endorse or promote
      products derived from this software without specific prior written
      permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDERS AND CONTRIBUTORS BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

                                  *   *   *

The complete list of contributors can be found at: https://github.com/hapijs/qs/graphs/contributors


Silverlight.js

This file is provided by Microsoft as a helper file for websites that
incorporate Silverlight Objects. This file is provided under the Microsoft
Public License available at
http://code.msdn.microsoft.com/silverlightjs/Project/License.aspx.
You may not use or distribute this file or the code in this file except as
expressly permitted under that license.

Copyright (c) Microsoft Corporation. All rights reserved.


Underscore.js
http://underscorejs.org

Copyright (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative
Reporters & Editors

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

****************************************************************************** */
