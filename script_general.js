(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('begin', x, this);
                    k['call'](this);
                };
                w['bind']('begin', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R !== undefined) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var T = s != undefined ? S['getObjective'](s, r) : S['get'](r);
                                if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    T += 0x1;
                                return T;
                            } catch (U) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, V) {
        var W = {};
        W['player'] = player;
        W['playList'] = V;
        function X(a0) {
            for (var a1 = 0x0; a1 < a0['length']; ++a1) {
                var a2 = a0[a1];
                if ('id' in a2)
                    player[a2['id']] = a2;
            }
        }
        if (W['questions']) {
            X(W['questions']);
            for (var Y = 0x0; Y < W['questions']['length']; ++Y) {
                var Z = W['questions'][Y];
                X(Z['options']);
            }
        }
        if (W['objectives']) {
            X(W['objectives']);
        }
        if (W['califications']) {
            X(W['califications']);
        }
        if (W['score']) {
            player[W['score']['id']] = W['score'];
        }
        if (W['question']) {
            player[W['question']['id']] = W['question'];
        }
        if (W['timeout']) {
            player[W['timeout']['id']] = W['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return W;
    }
    var d = {"start":"this.playAudioList([this.audio_597A996E_5432_921B_41C6_7AC4FE7BC85F], true); this.init()","scrollBarVisible":"rollOver","horizontalAlign":"left","id":"rootPlayer","width":"100%","layout":"absolute","mediaActivationMode":"window","overflow":"hidden","children":["this.MainViewer"],"borderRadius":0,"scrollBarColor":"#000000","toolTipHorizontalAlign":"center","minHeight":20,"paddingTop":0,"downloadEnabled":false,"scrollBarMargin":2,"paddingLeft":0,"minWidth":20,"borderSize":0,"shadow":false,"scrollBarOpacity":0.5,"paddingBottom":0,"class":"Player","height":"100%","propagateClick":false,"menu":["this.TDVAuthor"],"scrollBarWidth":10,"paddingRight":0,"gap":10,"contentOpaque":false,"verticalAlign":"top","definitions": [{"toolTipFontSize":"1.11vmin","toolTipPaddingLeft":6,"id":"MainViewer","playbackBarHeadWidth":6,"toolTipFontWeight":"normal","progressBackgroundColorRatios":[0],"subtitlesFontSize":"3vmin","toolTipBorderRadius":3,"toolTipFontStyle":"normal","subtitlesPaddingBottom":5,"playbackBarHeadBorderRadius":0,"playbackBarProgressBorderSize":0,"playbackBarHeadBorderColor":"#000000","subtitlesTextShadowColor":"#000000","toolTipPaddingRight":6,"toolTipPaddingBottom":4,"playbackBarBackgroundColorDirection":"vertical","width":"100%","playbackBarRight":0,"playbackBarProgressOpacity":1,"progressOpacity":1,"borderRadius":0,"toolTipShadowColor":"#333333","toolTipTextShadowColor":"#000000","progressBarBorderRadius":0,"subtitlesTextDecoration":"none","firstTransitionDuration":0,"playbackBarBorderSize":0,"progressRight":0,"subtitlesTextShadowBlurRadius":0,"subtitlesTextShadowVerticalLength":1,"subtitlesFontFamily":"Arial","subtitlesBorderColor":"#FFFFFF","progressBarBackgroundColorDirection":"vertical","playbackBarOpacity":1,"minHeight":50,"paddingLeft":0,"minWidth":100,"playbackBarProgressBorderRadius":0,"subtitlesBackgroundOpacity":0.2,"progressBarBackgroundColor":["#3399FF"],"subtitlesPaddingTop":5,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipShadowOpacity":1,"height":"100%","transitionDuration":500,"propagateClick":false,"toolTipShadowVerticalLength":0,"subtitlesGap":0,"subtitlesShadow":false,"paddingRight":0,"progressBorderColor":"#000000","subtitlesBackgroundColor":"#000000","playbackBarBottom":5,"subtitlesHorizontalAlign":"center","toolTipDisplayTime":600,"subtitlesVerticalAlign":"bottom","playbackBarBackgroundOpacity":1,"vrPointerColor":"#FFFFFF","playbackBarProgressBackgroundColorDirection":"vertical","subtitlesOpacity":1,"toolTipBorderSize":1,"toolTipHorizontalAlign":"center","progressBackgroundColor":["#FFFFFF"],"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadShadowHorizontalLength":0,"progressBarBorderColor":"#000000","progressBorderRadius":0,"playbackBarHeadBackgroundColorRatios":[0,1],"progressBarOpacity":1,"progressBarBackgroundColorRatios":[0],"playbackBarHeadBorderSize":0,"subtitlesTextShadowOpacity":1,"playbackBarHeadShadow":true,"progressLeft":0,"subtitlesBorderSize":0,"subtitlesFontColor":"#FFFFFF","progressBottom":0,"toolTipTextShadowOpacity":0,"vrPointerSelectionColor":"#FF6600","playbackBarHeadShadowBlurRadius":3,"playbackBarHeadShadowOpacity":0.7,"toolTipOpacity":1,"subtitlesTextShadowHorizontalLength":1,"progressBarBorderSize":0,"subtitlesFontWeight":"normal","transitionMode":"blending","toolTipShadowSpread":0,"toolTipFontColor":"#606060","toolTipBorderColor":"#767676","toolTipPaddingTop":4,"subtitlesPaddingLeft":5,"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesPaddingRight":5,"subtitlesBottom":50,"progressBackgroundOpacity":1,"toolTipTextShadowBlurRadius":3,"displayTooltipInTouchScreens":true,"playbackBarLeft":0,"toolTipBackgroundColor":"#F6F6F6","progressHeight":10,"paddingTop":0,"playbackBarHeight":10,"vrPointerSelectionTime":2000,"borderSize":0,"playbackBarHeadBackgroundColorDirection":"vertical","shadow":false,"playbackBarHeadHeight":15,"paddingBottom":0,"class":"ViewerArea","progressBackgroundColorDirection":"vertical","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","toolTipShadowBlurRadius":3,"playbackBarHeadShadowVerticalLength":0,"doubleClickAction":"toggle_fullscreen","toolTipFontFamily":"Arial","playbackBarHeadShadowColor":"#000000","toolTipShadowHorizontalLength":0,"playbackBarHeadOpacity":1,"data":{"name":"Main Viewer"},"progressBorderSize":0,"subtitlesTop":0},{"thumbnailUrl":"media/panorama_5F4CAF2A_542E_8E1B_41C8_77933E3BAD46_t.jpg","hfovMax":130,"label":trans('panorama_5F4CAF2A_542E_8E1B_41C8_77933E3BAD46.label'),"class":"Panorama","id":"panorama_5F4CAF2A_542E_8E1B_41C8_77933E3BAD46","overlays":["this.overlay_5851FA82_5433_760B_41C2_779E29B1EFBA"],"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_5F4CAF2A_542E_8E1B_41C8_77933E3BAD46_t.jpg","cube":{"class":"ImageResource","levels":[{"url":"media/panorama_5F4CAF2A_542E_8E1B_41C8_77933E3BAD46_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","rowCount":7,"width":21504,"class":"TiledImageResourceLevel","colCount":42,"height":3584},{"url":"media/panorama_5F4CAF2A_542E_8E1B_41C8_77933E3BAD46_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","rowCount":4,"width":12288,"class":"TiledImageResourceLevel","colCount":24,"height":2048},{"url":"media/panorama_5F4CAF2A_542E_8E1B_41C8_77933E3BAD46_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","rowCount":2,"width":6144,"class":"TiledImageResourceLevel","colCount":12,"height":1024},{"url":"media/panorama_5F4CAF2A_542E_8E1B_41C8_77933E3BAD46_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"rowCount":1,"width":3072,"class":"TiledImageResourceLevel","colCount":6,"height":512},{"url":"media/panorama_5F4CAF2A_542E_8E1B_41C8_77933E3BAD46_0/{face}/vr/0.jpg","tags":"mobilevr","rowCount":1,"width":9216,"class":"TiledImageResourceLevel","colCount":6,"height":1536}]}}],"vfov":180,"hfov":360,"data":{"label":"MAIN PANO"},"partial":false,"pitch":0},{"displayMovements":[{"duration":1000,"class":"TargetRotationalCameraDisplayMovement","easing":"linear"},{"duration":3000,"class":"TargetRotationalCameraDisplayMovement","easing":"cubic_in_out","targetStereographicFactor":0,"targetPitch":0}],"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","id":"panorama_5F4CAF2A_542E_8E1B_41C8_77933E3BAD46_camera","displayOriginPosition":{"stereographicFactor":1,"class":"RotationalCameraDisplayPosition","yaw":0,"pitch":-90,"hfov":165},"initialSequence":"this.sequence_5E269E93_542F_8E09_41D0_1218C4795777"},{"loop":false,"audio":{"oggUrl":"media/audio_597A996E_5432_921B_41C6_7AC4FE7BC85F.ogg","class":"AudioResource","mp3Url":"media/audio_597A996E_5432_921B_41C6_7AC4FE7BC85F.mp3"},"class":"MediaAudio","id":"audio_597A996E_5432_921B_41C6_7AC4FE7BC85F","autoplay":true,"data":{"label":"24697842_upbeat-summer-house_by_frankiejameson_Long_Aeriver"}},{"class":"PlayList","id":"mainPlayList","items":[{"media":"this.panorama_5F4CAF2A_542E_8E1B_41C8_77933E3BAD46","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_5F4CAF2A_542E_8E1B_41C8_77933E3BAD46_camera"}]},{"zoomEnabled":true,"displayPlaybackBar":true,"arrowKeysAction":"translate","mouseControlMode":"drag_rotation","class":"PanoramaPlayer","id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","gyroscopeVerticalDraggingEnabled":true,"touchControlMode":"drag_rotation"},{"label":"Rholand Bucci - 0981 408 400","class":"PlayerMenuItem","id":"TDVAuthor"},{"yaw":89.56,"bleaching":0.7,"pitch":9.11,"class":"LensFlarePanoramaOverlay","id":"overlay_5851FA82_5433_760B_41C2_779E29B1EFBA","bleachingDistance":0.4},{"movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"linear","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","id":"sequence_5E269E93_542F_8E09_41D0_1218C4795777"}],"defaultVRPointer":"laser","mobileMipmappingEnabled":false,"mouseWheelEnabled":true,"data":{"name":"Player520","defaultLocale":"en","textToSpeechConfig":{"speechOnTooltip":false,"speechOnQuizQuestion":false,"rate":1,"speechOnInfoWindow":false,"pitch":1,"volume":1},"locales":{"en":"locale/en.txt"}},"desktopMipmappingEnabled":false,"scripts":{"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getKey":TDV.Tour.Script.getKey,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"isPanorama":TDV.Tour.Script.isPanorama,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"quizStart":TDV.Tour.Script.quizStart,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"playAudioList":TDV.Tour.Script.playAudioList,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"showWindow":TDV.Tour.Script.showWindow,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getOverlays":TDV.Tour.Script.getOverlays,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getPixels":TDV.Tour.Script.getPixels,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"init":TDV.Tour.Script.init,"getComponentByName":TDV.Tour.Script.getComponentByName,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setLocale":TDV.Tour.Script.setLocale,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"quizFinish":TDV.Tour.Script.quizFinish,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setValue":TDV.Tour.Script.setValue,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"cloneCamera":TDV.Tour.Script.cloneCamera,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"resumePlayers":TDV.Tour.Script.resumePlayers,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"unregisterKey":TDV.Tour.Script.unregisterKey,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"historyGoForward":TDV.Tour.Script.historyGoForward,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"registerKey":TDV.Tour.Script.registerKey,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"existsKey":TDV.Tour.Script.existsKey,"translate":TDV.Tour.Script.translate,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"mixObject":TDV.Tour.Script.mixObject,"shareSocial":TDV.Tour.Script.shareSocial,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getMediaByName":TDV.Tour.Script.getMediaByName,"quizShowScore":TDV.Tour.Script.quizShowScore,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setMapLocation":TDV.Tour.Script.setMapLocation,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"initQuiz":TDV.Tour.Script.initQuiz,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"textToSpeech":TDV.Tour.Script.textToSpeech,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"initGA":TDV.Tour.Script.initGA,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"historyGoBack":TDV.Tour.Script.historyGoBack,"openLink":TDV.Tour.Script.openLink,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio},"vrPolyfillScale":0.75,"backgroundPreloadEnabled":true};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.4.15.js.map
//Generated with v2020.4.15, Fri Dec 11 2020
//