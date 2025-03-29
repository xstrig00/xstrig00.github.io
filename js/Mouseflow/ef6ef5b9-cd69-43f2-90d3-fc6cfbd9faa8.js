var mouseflowDisableKeyLogging = true;
if (typeof mouseflow === 'undefined' && typeof mouseflowPlayback === 'undefined') {
    (function() {
        var _436 = true;
        var _462 = false;
        var _470 = [];
        var _471 = [];
        var _47 = 'https://eu.mouseflow.com';
        const _407 = window.location.search.slice(1).split('&').map(a => a.split('=', 2)).filter(a => a[0]).reduce( (acc, cur) => (acc[cur[0]] = cur[1] ?? null,
        acc), {});
        function _7(_154, _14) {
            _14 = (typeof _14 !== 'undefined' ? _14 : '');
            if (_3.debug)
                console.log('MF' + (_3.includeDebugTime ? ' - ' + _14 : '') + ': ' + _154)
        }
        var _28 = new _1019(window);
        var _25 = new _1020(window);
        var _11 = new _1008(window,Math,JSON,_28);
        var _23 = new _1053(_28,_11);
        var _55 = new _740('local',window,_11,_7);
        var _184 = new _740('session',window,_11,_7);
        var _410 = new _1024(window);
        var _3 = new _1063(window,_55,_436,_462);
        _3._260();
        _3._408 = [];
        _3._412 = [];
        _3._278 = [];
        _3._413 = [];
        _3._686 = [];
        _3._673 = [];
        _3._49 = 'ef6ef5b9-cd69-43f2-90d3-fc6cfbd9faa8';
        _3._446 = true;
        _3._377 = true;
        _3._1180 = '5242000';
        _3._409('appUrl', _47);
        var _283 = new _1047(window,_11,_3,_7);
        function _560(_2, _105, _28, _3, _25, _11, _23, _88, _272, _55, _184, _218, _484, _7, _410, _283, _120) {
            var _1142 = false;
            var _175 = 'https://eu01.rec.mouseflow.com/';
            var _241 = 100.0;
            var _178 = [];
            var _862 = [];
            var _921 = [];
            var _269 = ["xstrig00.github.io"];
            var _748 = false;
            var _1145 = false;
            var _979 = '2025-03-27T18:07:41.8022544Z';
            var _197 = '18.26';
            var _176 = false;
            var _750 = false;
            var _101 = false;
            var _243 = false;
            var _525 = false;
            var _766 = /\[(\d+)\]_mf$/;
            var _12 = _2.document;
            var _72 = _2.location;
            var _15 = _934();
            var _0 = _605();
            var _364 = _11._495(_3);
            var _77 = {
                _762: 100,
                _849: 250,
                _853: 10000,
                _677: 1336,
                _517: 1800000,
                _1164: 3600000,
                _851: 100,
                _1167: 2000,
                _731: 8000,
                _702: 100000,
                _796: 2048,
                _868: 200,
                _945: 5000
            };
            var _420, _421, _425, _305, _280, _287, _469, _360, _115, _842 = [], _780 = [], _561 = [], _516 = [], _823 = [], _368 = new Map(), _240 = new Map();
            var _8 = {
                _380: 0,
                _378: 1,
                _379: 2,
                _343: 3,
                _342: 4,
                _247: 5,
                _262: 6,
                _350: 7,
                _499: 8,
                _362: 9,
                _302: 10,
                _572: 11,
                _570: 12,
                _345: 13,
                _754: 14,
                _67: 15,
                _1194: 16,
                _1192: 17,
                _94: 18,
                _450: 19,
                _902: 20,
                _497: 21,
                _465: 22,
                _381: 23,
                _494: 24,
                _433: 25,
                _432: 26,
                _429: 27,
                _428: 28,
                _619: 29,
                _427: 30,
                _621: 31,
                _426: 32,
                _372: 33,
                _782: 34,
                _245: 35,
                _556: 36,
                _557: 37,
                _37: 38,
                _501: 39,
                _1100: 40,
                _331: 41,
                _73: 42,
                _1186: 43,
                _594: 44,
                _252: 45
            };
            var _90 = {
                _666: {
                    _22: 'bounce',
                    _5: 2,
                    _36: 1,
                    _129: 1000
                },
                _352: {
                    _22: 'click-rage',
                    _5: 5,
                    _36: 2,
                    _129: 2000
                },
                _645: {
                    _22: 'click-error',
                    _5: 2,
                    _36: 3,
                    _129: 20
                },
                _611: {
                    _22: 'speed-browsing',
                    _5: 1,
                    _36: 6,
                    _129: 1000
                },
                _245: {
                    _22: 'submit-failure',
                    _5: 3,
                    _36: 7,
                    _129: 20
                },
                _527: {
                    _22: '404',
                    _5: 5,
                    _36: 8,
                    _129: 20
                },
                _358: {
                    _22: 'dead-click',
                    _5: 1,
                    _36: 9,
                    _129: 1000
                }
            };
            var _695 = /[\x20\r\n]+/g;
            var _910 = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@/;
            var _886 = /^\d{12,19}$/;
            var _877 = /^(onbeforeunload|onblur|onchange|onclick|onfocus|oninput|onkeydown|onkeypress|onkeyup|onload|onmousedown|onmouseenter|onmouseleave|onmousemove|onmouseout|onmouseover|onmouseup|onresize|onsubmit|ontouchcancel|ontouchend|ontouchenter|ontouchleave|ontouchmove|ontouchstart|onunload)$/;
            var _882 = /checkbox|radio|button|submit|file|image|reset/;
            var _888 = [{
                name: 'VISA',
                patternRegex: /^4(\d{15}|\d{17,18})$/
            }, {
                name: 'Mastercard',
                patternRegex: /^(222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720|5[1-5]\d\d)\d{12}$/
            }, {
                name: 'American Express',
                patternRegex: /^3[47]\d{13}$/
            }, {
                name: 'Diners Club',
                patternRegex: /^3(0[0-5]|[689]\d)(\d{11}|\d{13}|\d{16})$/
            }, {
                name: 'Discover',
                patternRegex: /^(6011|64[456789]\d|65\d{2})(\d{12}|\d{15})$/
            }, {
                name: 'JCB',
                patternRegex: /^(352[89]|35[3-8]\d|2131|1800)\d{12,15}$/
            }, {
                name: 'China UnionPay',
                patternRegex: /^(62[03456]\d{3}]|6210\d\d|621[1-7]\d\d|6218[0-2]\d|6218[4-9]\d|6219[0-7]\d|6220[0-579]\d|62201\d|6220[2-9]\d|622[1-9]\d{2}|622018|627[026]\d\d|62770\d|6277[1-7]\d|62778[1-9]|62779\d|628[2-9]\d\d|629[12]\d\d|810\d\d\d|811\d\d\d|81[2-6]\d\d\d|817[01]\d\d)\d{8,13}$/
            }, {
                name: 'Maestro',
                patternRegex: /^((493698|50000\d|5000[1-9]\d|500[1-9]\d{2}|50[1-3]\d{3}|5040\d{2}|5041[0-6]\d|50417[0-4]|50417[6-9]|5041[89]\d|504[2-9]\d{2}|505\d{3}|506[0-5]\d{2}|5066[0-8]\d|50669[0-8]|506779|5067[89]\d|506[89]\d{2}|50[78]\d{3})\d{6,13}|(5[6-9]|63|67|6\d)\d{10,17})$/
            }, {
                name: 'Elo',
                patternRegex: /^(40117[89]|438935|457631|457632|431274|451416|457393|504175|506699|5067[0-6]\d|50677[0-8]|50900\d|5090[1-9]\d|509[1-9]\d{2}|627780|636297|636368|65003[1-3]|65003[5-9]|65004\d|65005[01]|65040[5-9]|6504[1-3]\d|65048[5-9]|65049\d|6505[0-2]\d|65053[0-8]|65054[1-9]|6505[5-8]\d|65059[0-8]|65070\d|65071[0-8]|65072[0-7]|65090[1-9]|6509[1-6]\d|65097[0-8]|65165[2-9]|6516[67]\d|65500\d|65501\d|65502[1-9]|6550[34]\d|65505[0-8])\d{10}$/
            }, {
                name: 'Hiper',
                patternRegex: /^(637095|63737423|63743358|637568|637599|637609|637612)\d{10}$/
            }, {
                name: 'Hipercard',
                patternRegex: /^(606282)\d{10}$/
            }, {
                name: 'Dankort',
                patternRegex: /^5019\d{12}$/
            }, {
                name: 'VISA Dankort',
                patternRegex: /^4571\d{12}$/
            }];
            const _624 = _1080();
            const _277 = new WeakMap();
            const _267 = 'mf-dead-click';
            let _487 = false;
            var _887 = (function(_869) {
                return function(_658) {
                    var _654 = _658.length, _562 = 1, _478 = 0, _199;
                    while (_654) {
                        _199 = parseInt(_658.charAt(--_654), 10);
                        _562 ^= 1;
                        _478 += _562 ? _869[_199] : _199
                    }
                    return _478 && _478 % 10 === 0
                }
            }([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]));
            // Copyright 2011 Google Inc.
            //
            // Licensed under the Apache License, Version 2.0 (the "License");
            // you may not use this file except in compliance with the License.
            // You may obtain a copy of the License at
            //
            //     http://www.apache.org/licenses/LICENSE-2.0
            //
            // Unless required by applicable law or agreed to in writing, software
            // distributed under the License is distributed on an "AS IS" BASIS,
            // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            // See the License for the specific language governing permissions and
            // limitations under the License.
            //
            // This component contains modifications carried out by Mouseflow ApS.
            var __extends = this.__extends || function(d, b) {
                for (var p in b)
                    if (Object.prototype.hasOwnProperty.call(b, p))
                        d[p] = b[p];
                function __() {
                    this.constructor = d
                }
                __.prototype = b.prototype;
                d.prototype = new __()
            }
            ;
            var MutationObserverCtor;
            if (typeof WebKitMutationObserver !== 'undefined')
                MutationObserverCtor = WebKitMutationObserver;
            else if (typeof MutationObserver !== 'undefined')
                MutationObserverCtor = MutationObserver;
            if (MutationObserverCtor === undefined) {
                _7('DOM Mutation Observers not supported.', _14())
            }
            var NodeMap = (function() {
                function NodeMap() {
                    this.nodes = [];
                    this.values = []
                }
                NodeMap.prototype.isIndex = function(s) {
                    return +s === s >>> 0
                }
                ;
                NodeMap.prototype.nodeId = function(node) {
                    var id = node[NodeMap.ID_PROP];
                    if (!id)
                        id = node[NodeMap.ID_PROP] = NodeMap.nextId_++;
                    return id
                }
                ;
                NodeMap.prototype.set = function(node, value) {
                    var id = this.nodeId(node);
                    this.nodes[id] = node;
                    this.values[id] = value
                }
                ;
                NodeMap.prototype.get = function(node) {
                    var id = this.nodeId(node);
                    return this.values[id]
                }
                ;
                NodeMap.prototype.has = function(node) {
                    return this.nodeId(node)in this.nodes
                }
                ;
                NodeMap.prototype.deleteNode = function(node) {
                    var id = this.nodeId(node);
                    delete this.nodes[id];
                    this.values[id] = undefined
                }
                ;
                NodeMap.prototype.keys = function() {
                    var nodes = [];
                    for (var id in this.nodes) {
                        if (!this.isIndex(id))
                            continue;
                        nodes.push(this.nodes[id])
                    }
                    return nodes
                }
                ;
                NodeMap.ID_PROP = '__mouseflow_node_map_id__';
                NodeMap.nextId_ = 1;
                return NodeMap
            }
            )();
            var Movement;
            (function(Movement) {
                Movement[Movement['STAYED_OUT'] = 0] = 'STAYED_OUT';
                Movement[Movement['ENTERED'] = 1] = 'ENTERED';
                Movement[Movement['STAYED_IN'] = 2] = 'STAYED_IN';
                Movement[Movement['REPARENTED'] = 3] = 'REPARENTED';
                Movement[Movement['REORDERED'] = 4] = 'REORDERED';
                Movement[Movement['EXITED'] = 5] = 'EXITED'
            }
            )(Movement || (Movement = {}));
            function enteredOrExited(changeType) {
                return changeType === Movement.ENTERED || changeType === Movement.EXITED
            }
            var NodeChange = (function() {
                function NodeChange(node, childList, attributes, characterData, oldParentNode, added, attributeOldValues, characterDataOldValue) {
                    if (childList === void 0) {
                        childList = false
                    }
                    if (attributes === void 0) {
                        attributes = false
                    }
                    if (characterData === void 0) {
                        characterData = false
                    }
                    if (oldParentNode === void 0) {
                        oldParentNode = null
                    }
                    if (added === void 0) {
                        added = false
                    }
                    if (attributeOldValues === void 0) {
                        attributeOldValues = null
                    }
                    if (characterDataOldValue === void 0) {
                        characterDataOldValue = null
                    }
                    this.node = node;
                    this.childList = childList;
                    this.attributes = attributes;
                    this.characterData = characterData;
                    this.oldParentNode = oldParentNode;
                    this.added = added;
                    this.attributeOldValues = attributeOldValues;
                    this.characterDataOldValue = characterDataOldValue;
                    this.isCaseInsensitive = this.node.nodeType === 1 && this.node instanceof HTMLElement && typeof (HTMLDocument) !== 'undefined' && this.node.ownerDocument instanceof HTMLDocument
                }
                NodeChange.prototype.getAttributeOldValue = function(name) {
                    if (!this.attributeOldValues)
                        return undefined;
                    if (this.isCaseInsensitive)
                        name = name.toLowerCase();
                    return this.attributeOldValues[name]
                }
                ;
                NodeChange.prototype.getAttributeNamesMutated = function() {
                    var names = [];
                    if (!this.attributeOldValues)
                        return names;
                    for (var name in this.attributeOldValues) {
                        names.push(name)
                    }
                    return names
                }
                ;
                NodeChange.prototype.attributeMutated = function(name, oldValue) {
                    this.attributes = true;
                    this.attributeOldValues = this.attributeOldValues || {};
                    if (name in this.attributeOldValues)
                        return;
                    this.attributeOldValues[name] = oldValue
                }
                ;
                NodeChange.prototype.characterDataMutated = function(oldValue) {
                    if (this.characterData)
                        return;
                    this.characterData = true;
                    this.characterDataOldValue = oldValue
                }
                ;
                NodeChange.prototype.removedFromParent = function(parent) {
                    this.childList = true;
                    if (this.added || this.oldParentNode)
                        this.added = false;
                    else
                        this.oldParentNode = parent
                }
                ;
                NodeChange.prototype.insertedIntoParent = function() {
                    this.childList = true;
                    this.added = true
                }
                ;
                NodeChange.prototype.getOldParent = function() {
                    if (this.childList) {
                        if (this.oldParentNode)
                            return this.oldParentNode;
                        if (this.added)
                            return null
                    }
                    return _28._89(this.node)
                }
                ;
                return NodeChange
            }
            )();
            var ChildListChange = (function() {
                function ChildListChange() {
                    this.added = new NodeMap();
                    this.removed = new NodeMap();
                    this.maybeMoved = new NodeMap();
                    this.oldPrevious = new NodeMap();
                    this.moved = undefined
                }
                return ChildListChange
            }
            )();
            var TreeChanges = (function(_623) {
                __extends(TreeChanges, _623);
                function TreeChanges(rootNode, mutations) {
                    _623.call(this);
                    this.rootNode = rootNode;
                    this.reachableCache = undefined;
                    this.wasReachableCache = undefined;
                    this.anyParentsChanged = false;
                    this.anyAttributesChanged = false;
                    this.anyCharacterDataChanged = false;
                    for (var m = 0; m < mutations.length; m++) {
                        var mutation = mutations[m];
                        switch (mutation.type) {
                        case 'childList':
                            this.anyParentsChanged = true;
                            for (let i = 0; i < mutation.removedNodes.length; i++) {
                                let node = mutation.removedNodes[i];
                                this.getChange(node).removedFromParent(mutation.target)
                            }
                            for (let i = 0; i < mutation.addedNodes.length; i++) {
                                let node = mutation.addedNodes[i];
                                this.getChange(node).insertedIntoParent()
                            }
                            break;
                        case 'attributes':
                            this.anyAttributesChanged = true;
                            this.getChange(mutation.target).attributeMutated(mutation.attributeName, mutation.oldValue);
                            break;
                        case 'characterData':
                            this.anyCharacterDataChanged = true;
                            this.getChange(mutation.target).characterDataMutated(mutation.oldValue);
                            break
                        }
                    }
                }
                TreeChanges.prototype.getChange = function(node) {
                    var change = this.get(node);
                    if (!change) {
                        change = new NodeChange(node);
                        this.set(node, change)
                    }
                    return change
                }
                ;
                TreeChanges.prototype.getOldParent = function(node) {
                    var change = this.get(node);
                    return change ? change.getOldParent() : _28._89(node)
                }
                ;
                TreeChanges.prototype.getIsReachable = function(node) {
                    if (node === this.rootNode)
                        return true;
                    if (!node)
                        return false;
                    this.reachableCache = this.reachableCache || new NodeMap();
                    var isReachable = this.reachableCache.get(node);
                    if (isReachable === undefined) {
                        isReachable = this.getIsReachable(_28._89(node));
                        this.reachableCache.set(node, isReachable)
                    }
                    return isReachable
                }
                ;
                TreeChanges.prototype.getWasReachable = function(node) {
                    if (node === this.rootNode)
                        return true;
                    if (!node)
                        return false;
                    this.wasReachableCache = this.wasReachableCache || new NodeMap();
                    var wasReachable = this.wasReachableCache.get(node);
                    if (wasReachable === undefined) {
                        wasReachable = this.getWasReachable(this.getOldParent(node));
                        this.wasReachableCache.set(node, wasReachable)
                    }
                    return wasReachable
                }
                ;
                TreeChanges.prototype.reachabilityChange = function(node) {
                    if (this.getIsReachable(node)) {
                        return this.getWasReachable(node) ? Movement.STAYED_IN : Movement.ENTERED
                    }
                    return this.getWasReachable(node) ? Movement.EXITED : Movement.STAYED_OUT
                }
                ;
                return TreeChanges
            }
            )(NodeMap);
            var MutationProjection = (function() {
                function MutationProjection(rootNode, mutations, selectors, calcReordered, calcOldPreviousSibling) {
                    this.rootNode = rootNode;
                    this.mutations = mutations;
                    this.selectors = selectors;
                    this.calcReordered = calcReordered;
                    this.calcOldPreviousSibling = calcOldPreviousSibling;
                    this.treeChanges = new TreeChanges(rootNode,mutations);
                    this.entered = [];
                    this.exited = [];
                    this.stayedIn = new NodeMap();
                    this.visited = new NodeMap();
                    this.childListChangeMap = undefined;
                    this.characterDataOnly = undefined;
                    this.matchCache = undefined;
                    this.processMutations()
                }
                MutationProjection.prototype.processMutations = function() {
                    if (!this.treeChanges.anyParentsChanged && !this.treeChanges.anyAttributesChanged)
                        return;
                    var changedNodes = this.treeChanges.keys();
                    for (var i = 0; i < changedNodes.length; i++) {
                        this.visitNode(changedNodes[i], undefined)
                    }
                }
                ;
                MutationProjection.prototype.visitNode = function(node, parentReachable) {
                    if (this.visited.has(node))
                        return;
                    this.visited.set(node, true);
                    var change = this.treeChanges.get(node);
                    var reachable = parentReachable;
                    if ((change && change.childList) || reachable == undefined)
                        reachable = this.treeChanges.reachabilityChange(node);
                    if (reachable === Movement.STAYED_OUT)
                        return;
                    this.matchabilityChange(node);
                    if (reachable === Movement.ENTERED) {
                        this.entered.push(node)
                    } else if (reachable === Movement.EXITED) {
                        this.exited.push(node);
                        this.ensureHasOldPreviousSiblingIfNeeded(node)
                    } else if (reachable === Movement.STAYED_IN) {
                        var movement = Movement.STAYED_IN;
                        if (change && change.childList) {
                            if (change.oldParentNode !== _28._89(node)) {
                                movement = Movement.REPARENTED;
                                this.ensureHasOldPreviousSiblingIfNeeded(node)
                            } else if (this.calcReordered && this.wasReordered(node)) {
                                movement = Movement.REORDERED
                            }
                        }
                        this.stayedIn.set(node, movement)
                    }
                    if (reachable === Movement.STAYED_IN)
                        return;
                    for (var child = _28._191(node); child; child = _28._167(child)) {
                        this.visitNode(child, reachable)
                    }
                }
                ;
                MutationProjection.prototype.ensureHasOldPreviousSiblingIfNeeded = function(node) {
                    if (!this.calcOldPreviousSibling)
                        return;
                    this.processChildlistChanges();
                    var parentNode = _28._89(node);
                    var nodeChange = this.treeChanges.get(node);
                    if (nodeChange && nodeChange.oldParentNode)
                        parentNode = nodeChange.oldParentNode;
                    var change = this.childListChangeMap.get(parentNode);
                    if (!change) {
                        change = new ChildListChange();
                        this.childListChangeMap.set(parentNode, change)
                    }
                    if (!change.oldPrevious.has(node)) {
                        change.oldPrevious.set(node, node.previousSibling)
                    }
                }
                ;
                MutationProjection.prototype.getChanged = function(summary, selectors, characterDataOnly) {
                    this.selectors = selectors;
                    this.characterDataOnly = characterDataOnly;
                    for (let i = 0; i < this.entered.length; i++) {
                        let node = this.entered[i];
                        let matchable = this.matchabilityChange(node);
                        if (matchable === Movement.ENTERED || matchable === Movement.STAYED_IN)
                            summary.added.push(node)
                    }
                    var stayedInNodes = this.stayedIn.keys();
                    for (let i = 0; i < stayedInNodes.length; i++) {
                        let node = stayedInNodes[i];
                        let matchable = this.matchabilityChange(node);
                        if (matchable === Movement.ENTERED) {
                            summary.added.push(node)
                        } else if (matchable === Movement.EXITED) {
                            summary.removed.push(node)
                        } else if (matchable === Movement.STAYED_IN && (summary.reparented || summary.reordered)) {
                            var movement = this.stayedIn.get(node);
                            if (summary.reparented && movement === Movement.REPARENTED)
                                summary.reparented.push(node);
                            else if (summary.reordered && movement === Movement.REORDERED)
                                summary.reordered.push(node)
                        }
                    }
                    for (var i = 0; i < this.exited.length; i++) {
                        var node = this.exited[i];
                        var matchable = this.matchabilityChange(node);
                        if (matchable === Movement.EXITED || matchable === Movement.STAYED_IN)
                            summary.removed.push(node)
                    }
                }
                ;
                MutationProjection.prototype.getOldParentNode = function(node) {
                    var change = this.treeChanges.get(node);
                    if (change && change.childList)
                        return change.oldParentNode ? change.oldParentNode : null;
                    var reachabilityChange = this.treeChanges.reachabilityChange(node);
                    if (reachabilityChange === Movement.STAYED_OUT || reachabilityChange === Movement.ENTERED)
                        throw Error('getOldParentNode requested on invalid node.');
                    return _28._89(node)
                }
                ;
                MutationProjection.prototype.getOldPreviousSibling = function(node) {
                    var parentNode = _28._89(node);
                    var nodeChange = this.treeChanges.get(node);
                    if (nodeChange && nodeChange.oldParentNode)
                        parentNode = nodeChange.oldParentNode;
                    var change = this.childListChangeMap.get(parentNode);
                    if (!change)
                        throw Error('getOldPreviousSibling requested on invalid node.');
                    return change.oldPrevious.get(node)
                }
                ;
                MutationProjection.prototype.getOldAttribute = function(element, attrName) {
                    var change = this.treeChanges.get(element);
                    if (!change || !change.attributes)
                        throw Error('getOldAttribute requested on invalid node.');
                    var value = change.getAttributeOldValue(attrName);
                    if (value === undefined)
                        throw Error('getOldAttribute requested for unchanged attribute name.');
                    return value
                }
                ;
                MutationProjection.prototype.attributeChangedNodes = function(includeAttributes) {
                    if (!this.treeChanges.anyAttributesChanged)
                        return {};
                    var attributeFilter;
                    var caseInsensitiveFilter;
                    if (includeAttributes) {
                        attributeFilter = {};
                        caseInsensitiveFilter = {};
                        for (let i = 0; i < includeAttributes.length; i++) {
                            let attrName = includeAttributes[i];
                            attributeFilter[attrName] = true;
                            caseInsensitiveFilter[attrName.toLowerCase()] = attrName
                        }
                    }
                    var result = {};
                    var nodes = this.treeChanges.keys();
                    for (let i = 0; i < nodes.length; i++) {
                        var node = nodes[i];
                        var change = this.treeChanges.get(node);
                        if (!change.attributes)
                            continue;
                        if (Movement.STAYED_IN !== this.treeChanges.reachabilityChange(node) || Movement.STAYED_IN !== this.matchabilityChange(node)) {
                            continue
                        }
                        var element = node;
                        var changedAttrNames = change.getAttributeNamesMutated();
                        for (var j = 0; j < changedAttrNames.length; j++) {
                            let attrName = changedAttrNames[j];
                            if (attributeFilter && !attributeFilter[attrName] && !(change.isCaseInsensitive && caseInsensitiveFilter[attrName])) {
                                continue
                            }
                            var oldValue = change.getAttributeOldValue(attrName);
                            if (oldValue === element.getAttribute(attrName))
                                continue;
                            if (caseInsensitiveFilter && change.isCaseInsensitive)
                                attrName = caseInsensitiveFilter[attrName];
                            result[attrName] = result[attrName] || [];
                            result[attrName].push(element)
                        }
                    }
                    return result
                }
                ;
                MutationProjection.prototype.getOldCharacterData = function(node) {
                    var change = this.treeChanges.get(node);
                    if (!change || !change.characterData)
                        throw Error('getOldCharacterData requested on invalid node.');
                    return change.characterDataOldValue
                }
                ;
                MutationProjection.prototype.getCharacterDataChanged = function() {
                    if (!this.treeChanges.anyCharacterDataChanged)
                        return [];
                    var nodes = this.treeChanges.keys();
                    var result = [];
                    for (var i = 0; i < nodes.length; i++) {
                        var target = nodes[i];
                        if (Movement.STAYED_IN !== this.treeChanges.reachabilityChange(target))
                            continue;
                        var change = this.treeChanges.get(target);
                        if (!change.characterData || target.textContent == change.characterDataOldValue)
                            continue;
                        result.push(target)
                    }
                    return result
                }
                ;
                MutationProjection.prototype.computeMatchabilityChange = function(selector, el) {
                    if (!this.matchCache)
                        this.matchCache = [];
                    if (!this.matchCache[selector.uid])
                        this.matchCache[selector.uid] = new NodeMap();
                    var cache = this.matchCache[selector.uid];
                    var result = cache.get(el);
                    if (result === undefined) {
                        result = selector.matchabilityChange(el, this.treeChanges.get(el));
                        cache.set(el, result)
                    }
                    return result
                }
                ;
                MutationProjection.prototype.matchabilityChange = function(node) {
                    var _44 = this;
                    if (this.characterDataOnly) {
                        switch (node.nodeType) {
                        case 8:
                        case 3:
                            return Movement.STAYED_IN;
                        default:
                            return Movement.STAYED_OUT
                        }
                    }
                    if (!this.selectors)
                        return Movement.STAYED_IN;
                    if (node.nodeType !== 1)
                        return Movement.STAYED_OUT;
                    var el = node;
                    var matchChanges = this.selectors.map(function(selector) {
                        return _44.computeMatchabilityChange(selector, el)
                    });
                    var accum = Movement.STAYED_OUT;
                    var i = 0;
                    while (accum !== Movement.STAYED_IN && i < matchChanges.length) {
                        switch (matchChanges[i]) {
                        case Movement.STAYED_IN:
                            accum = Movement.STAYED_IN;
                            break;
                        case Movement.ENTERED:
                            if (accum === Movement.EXITED)
                                accum = Movement.STAYED_IN;
                            else
                                accum = Movement.ENTERED;
                            break;
                        case Movement.EXITED:
                            if (accum === Movement.ENTERED)
                                accum = Movement.STAYED_IN;
                            else
                                accum = Movement.EXITED;
                            break
                        }
                        i++
                    }
                    return accum
                }
                ;
                MutationProjection.prototype.getChildlistChange = function(el) {
                    var change = this.childListChangeMap.get(el);
                    if (!change) {
                        change = new ChildListChange();
                        this.childListChangeMap.set(el, change)
                    }
                    return change
                }
                ;
                MutationProjection.prototype.processChildlistChanges = function() {
                    if (this.childListChangeMap)
                        return;
                    this.childListChangeMap = new NodeMap();
                    for (var i = 0; i < this.mutations.length; i++) {
                        var mutation = this.mutations[i];
                        if (mutation.type != 'childList')
                            continue;
                        if (this.treeChanges.reachabilityChange(mutation.target) !== Movement.STAYED_IN && !this.calcOldPreviousSibling)
                            continue;
                        var change = this.getChildlistChange(mutation.target);
                        var oldPrevious = mutation.previousSibling;
                        for (let j = 0; j < mutation.removedNodes.length; j++) {
                            let node = mutation.removedNodes[j];
                            recordOldPrevious(node, oldPrevious, change);
                            if (change.added.has(node)) {
                                change.added.deleteNode(node)
                            } else {
                                change.removed.set(node, true);
                                change.maybeMoved.deleteNode(node)
                            }
                            oldPrevious = node
                        }
                        recordOldPrevious(mutation.nextSibling, oldPrevious, change);
                        for (let j = 0; j < mutation.addedNodes.length; j++) {
                            let node = mutation.addedNodes[j];
                            if (change.removed.has(node)) {
                                change.removed.deleteNode(node);
                                change.maybeMoved.set(node, true)
                            } else {
                                change.added.set(node, true)
                            }
                        }
                    }
                }
                ;
                MutationProjection.prototype.wasReordered = function(node) {
                    if (!this.treeChanges.anyParentsChanged)
                        return false;
                    this.processChildlistChanges();
                    var parentNode = _28._89(node);
                    var nodeChange = this.treeChanges.get(node);
                    if (nodeChange && nodeChange.oldParentNode)
                        parentNode = nodeChange.oldParentNode;
                    var change = this.childListChangeMap.get(parentNode);
                    if (!change)
                        return false;
                    if (change.moved)
                        return change.moved.get(node);
                    change.moved = new NodeMap();
                    var pendingMoveDecision = new NodeMap();
                    function isMoved(node) {
                        if (!node)
                            return false;
                        if (!change.maybeMoved.has(node))
                            return false;
                        var didMove = change.moved.get(node);
                        if (didMove !== undefined)
                            return didMove;
                        if (pendingMoveDecision.has(node)) {
                            didMove = true
                        } else {
                            pendingMoveDecision.set(node, true);
                            didMove = getPrevious(node) !== getOldPrevious(node)
                        }
                        if (pendingMoveDecision.has(node)) {
                            pendingMoveDecision.deleteNode(node);
                            change.moved.set(node, didMove)
                        } else {
                            didMove = change.moved.get(node)
                        }
                        return didMove
                    }
                    var oldPreviousCache = new NodeMap();
                    function getOldPrevious(node) {
                        var oldPrevious = oldPreviousCache.get(node);
                        if (oldPrevious !== undefined)
                            return oldPrevious;
                        oldPrevious = change.oldPrevious.get(node);
                        while (oldPrevious && (change.removed.has(oldPrevious) || isMoved(oldPrevious))) {
                            oldPrevious = getOldPrevious(oldPrevious)
                        }
                        if (oldPrevious === undefined)
                            oldPrevious = node.previousSibling;
                        oldPreviousCache.set(node, oldPrevious);
                        return oldPrevious
                    }
                    var previousCache = new NodeMap();
                    function getPrevious(node) {
                        if (previousCache.has(node))
                            return previousCache.get(node);
                        var previous = node.previousSibling;
                        while (previous && (change.added.has(previous) || isMoved(previous)))
                            previous = previous.previousSibling;
                        previousCache.set(node, previous);
                        return previous
                    }
                    change.maybeMoved.keys().forEach(isMoved);
                    return change.moved.get(node)
                }
                ;
                return MutationProjection
            }
            )();
            function recordOldPrevious(node, previous, change) {
                if (!node || change.oldPrevious.has(node) || change.added.has(node) || change.maybeMoved.has(node))
                    return;
                if (previous && (change.added.has(previous) || change.maybeMoved.has(previous)))
                    return;
                change.oldPrevious.set(node, previous)
            }
            var Summary = (function() {
                function Summary(projection, query) {
                    var _44 = this;
                    this.projection = projection;
                    this.added = [];
                    this.removed = [];
                    this.reparented = query.all || query.element || query.characterData ? [] : undefined;
                    this.reordered = query.all ? [] : undefined;
                    projection.getChanged(this, query.elementFilter, query.characterData);
                    if (query.all || query.attribute || query.attributeList) {
                        var filter = query.attribute ? [query.attribute] : query.attributeList;
                        var attributeChanged = projection.attributeChangedNodes(filter);
                        if (query.attribute) {
                            this.valueChanged = attributeChanged[query.attribute] || []
                        } else {
                            this.attributeChanged = attributeChanged;
                            if (query.attributeList) {
                                query.attributeList.forEach(function(attrName) {
                                    if (Object.prototype.hasOwnProperty.call(!_44.attributeChanged, attrName))
                                        _44.attributeChanged[attrName] = []
                                })
                            }
                        }
                    }
                    if (query.all || query.characterData) {
                        var characterDataChanged = projection.getCharacterDataChanged();
                        if (query.characterData)
                            this.valueChanged = characterDataChanged;
                        else
                            this.characterDataChanged = characterDataChanged
                    }
                    if (this.reordered)
                        this.getOldPreviousSibling = projection.getOldPreviousSibling.bind(projection)
                }
                Summary.prototype.getOldParentNode = function(node) {
                    return this.projection.getOldParentNode(node)
                }
                ;
                Summary.prototype.getOldAttribute = function(node, name) {
                    return this.projection.getOldAttribute(node, name)
                }
                ;
                Summary.prototype.getOldCharacterData = function(node) {
                    return this.projection.getOldCharacterData(node)
                }
                ;
                Summary.prototype.getOldPreviousSibling = function(node) {
                    return this.projection.getOldPreviousSibling(node)
                }
                ;
                return Summary
            }
            )();
            var validNameInitialChar = /[a-zA-Z_]+/;
            var validNameNonInitialChar = /[a-zA-Z0-9_-]+/;
            function escapeQuotes(value) {
                return '"' + value.replace(/"/g, '\\"') + '"'
            }
            var Qualifier = (function() {
                function Qualifier() {}
                Qualifier.prototype.matches = function(oldValue) {
                    if (oldValue === null)
                        return false;
                    if (this.attrValue === undefined)
                        return true;
                    if (!this.contains)
                        return this.attrValue == oldValue;
                    var tokens = oldValue.split(' ');
                    for (var i = 0; i < tokens.length; i++) {
                        if (this.attrValue === tokens[i])
                            return true
                    }
                    return false
                }
                ;
                Qualifier.prototype.toString = function() {
                    if (this.attrName === 'class' && this.contains)
                        return '.' + this.attrValue;
                    if (this.attrName === 'id' && !this.contains)
                        return '#' + this.attrValue;
                    if (this.contains)
                        return '[' + this.attrName + '~=' + escapeQuotes(this.attrValue) + ']';
                    if ('attrValue'in this)
                        return '[' + this.attrName + '=' + escapeQuotes(this.attrValue) + ']';
                    return '[' + this.attrName + ']'
                }
                ;
                return Qualifier
            }
            )();
            var Selector = (function() {
                function Selector() {
                    this.uid = Selector.nextUid++;
                    this.qualifiers = []
                }
                try {
                    Object.defineProperty(Selector.prototype, 'caseInsensitiveTagName', {
                        get: function() {
                            return this.tagName.toUpperCase()
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(Selector.prototype, 'selectorString', {
                        get: function() {
                            return this.tagName + this.qualifiers.join('')
                        },
                        enumerable: true,
                        configurable: true
                    })
                } catch (e) {}
                Selector.prototype.isMatching = function(el) {
                    return el[Selector.matchesSelector](this.selectorString)
                }
                ;
                Selector.prototype.wasMatching = function(el, change, isMatching) {
                    if (!change || !change.attributes)
                        return isMatching;
                    var tagName = change.isCaseInsensitive ? this.caseInsensitiveTagName : this.tagName;
                    if (tagName !== '*' && tagName !== el.tagName)
                        return false;
                    var attributeOldValues = [];
                    var anyChanged = false;
                    for (let i = 0; i < this.qualifiers.length; i++) {
                        let qualifier = this.qualifiers[i];
                        let oldValue = change.getAttributeOldValue(qualifier.attrName);
                        attributeOldValues.push(oldValue);
                        anyChanged = anyChanged || (oldValue !== undefined)
                    }
                    if (!anyChanged)
                        return isMatching;
                    for (let i = 0; i < this.qualifiers.length; i++) {
                        let qualifier = this.qualifiers[i];
                        let oldValue = attributeOldValues[i];
                        if (oldValue === undefined)
                            oldValue = el.getAttribute(qualifier.attrName);
                        if (!qualifier.matches(oldValue))
                            return false
                    }
                    return true
                }
                ;
                Selector.prototype.matchabilityChange = function(el, change) {
                    var isMatching = this.isMatching(el);
                    if (isMatching)
                        return this.wasMatching(el, change, isMatching) ? Movement.STAYED_IN : Movement.ENTERED;
                    else
                        return this.wasMatching(el, change, isMatching) ? Movement.EXITED : Movement.STAYED_OUT
                }
                ;
                Selector.parseSelectors = function(input) {
                    var selectors = [];
                    var currentSelector;
                    var currentQualifier;
                    function newSelector() {
                        if (currentSelector) {
                            if (currentQualifier) {
                                currentSelector.qualifiers.push(currentQualifier);
                                currentQualifier = undefined
                            }
                            selectors.push(currentSelector)
                        }
                        currentSelector = new Selector()
                    }
                    function newQualifier() {
                        if (currentQualifier)
                            currentSelector.qualifiers.push(currentQualifier);
                        currentQualifier = new Qualifier()
                    }
                    var WHITESPACE = /\s/;
                    var valueQuoteChar;
                    var SYNTAX_ERROR = 'Invalid or unsupported selector syntax.';
                    var SELECTOR = 1;
                    var TAG_NAME = 2;
                    var QUALIFIER = 3;
                    var QUALIFIER_NAME_FIRST_CHAR = 4;
                    var QUALIFIER_NAME = 5;
                    var ATTR_NAME_FIRST_CHAR = 6;
                    var ATTR_NAME = 7;
                    var EQUIV_OR_ATTR_QUAL_END = 8;
                    var EQUAL = 9;
                    var ATTR_QUAL_END = 10;
                    var VALUE_FIRST_CHAR = 11;
                    var VALUE = 12;
                    var QUOTED_VALUE = 13;
                    var SELECTOR_SEPARATOR = 14;
                    var state = SELECTOR;
                    var i = 0;
                    while (i < input.length) {
                        var c = input[i++];
                        switch (state) {
                        case SELECTOR:
                            if (c.match(validNameInitialChar)) {
                                newSelector();
                                currentSelector.tagName = c;
                                state = TAG_NAME;
                                break
                            }
                            if (c == '*') {
                                newSelector();
                                currentSelector.tagName = '*';
                                state = QUALIFIER;
                                break
                            }
                            if (c == '.') {
                                newSelector();
                                newQualifier();
                                currentSelector.tagName = '*';
                                currentQualifier.attrName = 'class';
                                currentQualifier.contains = true;
                                state = QUALIFIER_NAME_FIRST_CHAR;
                                break
                            }
                            if (c == '#') {
                                newSelector();
                                newQualifier();
                                currentSelector.tagName = '*';
                                currentQualifier.attrName = 'id';
                                state = QUALIFIER_NAME_FIRST_CHAR;
                                break
                            }
                            if (c == '[') {
                                newSelector();
                                newQualifier();
                                currentSelector.tagName = '*';
                                currentQualifier.attrName = '';
                                state = ATTR_NAME_FIRST_CHAR;
                                break
                            }
                            if (c.match(WHITESPACE))
                                break;
                            throw Error(SYNTAX_ERROR);
                        case TAG_NAME:
                            if (c.match(validNameNonInitialChar)) {
                                currentSelector.tagName += c;
                                break
                            }
                            if (c == '.') {
                                newQualifier();
                                currentQualifier.attrName = 'class';
                                currentQualifier.contains = true;
                                state = QUALIFIER_NAME_FIRST_CHAR;
                                break
                            }
                            if (c == '#') {
                                newQualifier();
                                currentQualifier.attrName = 'id';
                                state = QUALIFIER_NAME_FIRST_CHAR;
                                break
                            }
                            if (c == '[') {
                                newQualifier();
                                currentQualifier.attrName = '';
                                state = ATTR_NAME_FIRST_CHAR;
                                break
                            }
                            if (c.match(WHITESPACE)) {
                                state = SELECTOR_SEPARATOR;
                                break
                            }
                            if (c == ',') {
                                state = SELECTOR;
                                break
                            }
                            throw Error(SYNTAX_ERROR);
                        case QUALIFIER:
                            if (c == '.') {
                                newQualifier();
                                currentQualifier.attrName = 'class';
                                currentQualifier.contains = true;
                                state = QUALIFIER_NAME_FIRST_CHAR;
                                break
                            }
                            if (c == '#') {
                                newQualifier();
                                currentQualifier.attrName = 'id';
                                state = QUALIFIER_NAME_FIRST_CHAR;
                                break
                            }
                            if (c == '[') {
                                newQualifier();
                                currentQualifier.attrName = '';
                                state = ATTR_NAME_FIRST_CHAR;
                                break
                            }
                            if (c.match(WHITESPACE)) {
                                state = SELECTOR_SEPARATOR;
                                break
                            }
                            if (c == ',') {
                                state = SELECTOR;
                                break
                            }
                            throw Error(SYNTAX_ERROR);
                        case QUALIFIER_NAME_FIRST_CHAR:
                            if (c.match(validNameInitialChar)) {
                                currentQualifier.attrValue = c;
                                state = QUALIFIER_NAME;
                                break
                            }
                            throw Error(SYNTAX_ERROR);
                        case QUALIFIER_NAME:
                            if (c.match(validNameNonInitialChar)) {
                                currentQualifier.attrValue += c;
                                break
                            }
                            if (c == '.') {
                                newQualifier();
                                currentQualifier.attrName = 'class';
                                currentQualifier.contains = true;
                                state = QUALIFIER_NAME_FIRST_CHAR;
                                break
                            }
                            if (c == '#') {
                                newQualifier();
                                currentQualifier.attrName = 'id';
                                state = QUALIFIER_NAME_FIRST_CHAR;
                                break
                            }
                            if (c == '[') {
                                newQualifier();
                                state = ATTR_NAME_FIRST_CHAR;
                                break
                            }
                            if (c.match(WHITESPACE)) {
                                state = SELECTOR_SEPARATOR;
                                break
                            }
                            if (c == ',') {
                                state = SELECTOR;
                                break
                            }
                            throw Error(SYNTAX_ERROR);
                        case ATTR_NAME_FIRST_CHAR:
                            if (c.match(validNameInitialChar)) {
                                currentQualifier.attrName = c;
                                state = ATTR_NAME;
                                break
                            }
                            if (c.match(WHITESPACE))
                                break;
                            throw Error(SYNTAX_ERROR);
                        case ATTR_NAME:
                            if (c.match(validNameNonInitialChar)) {
                                currentQualifier.attrName += c;
                                break
                            }
                            if (c.match(WHITESPACE)) {
                                state = EQUIV_OR_ATTR_QUAL_END;
                                break
                            }
                            if (c == '~') {
                                currentQualifier.contains = true;
                                state = EQUAL;
                                break
                            }
                            if (c == '=') {
                                currentQualifier.attrValue = '';
                                state = VALUE_FIRST_CHAR;
                                break
                            }
                            if (c == ']') {
                                state = QUALIFIER;
                                break
                            }
                            throw Error(SYNTAX_ERROR);
                        case EQUIV_OR_ATTR_QUAL_END:
                            if (c == '~') {
                                currentQualifier.contains = true;
                                state = EQUAL;
                                break
                            }
                            if (c == '=') {
                                currentQualifier.attrValue = '';
                                state = VALUE_FIRST_CHAR;
                                break
                            }
                            if (c == ']') {
                                state = QUALIFIER;
                                break
                            }
                            if (c.match(WHITESPACE))
                                break;
                            throw Error(SYNTAX_ERROR);
                        case EQUAL:
                            if (c == '=') {
                                currentQualifier.attrValue = '';
                                state = VALUE_FIRST_CHAR;
                                break
                            }
                            throw Error(SYNTAX_ERROR);
                        case ATTR_QUAL_END:
                            if (c == ']') {
                                state = QUALIFIER;
                                break
                            }
                            if (c.match(WHITESPACE))
                                break;
                            throw Error(SYNTAX_ERROR);
                        case VALUE_FIRST_CHAR:
                            if (c.match(WHITESPACE))
                                break;
                            if (c == '"' || c == "'") {
                                valueQuoteChar = c;
                                state = QUOTED_VALUE;
                                break
                            }
                            currentQualifier.attrValue += c;
                            state = VALUE;
                            break;
                        case VALUE:
                            if (c.match(WHITESPACE)) {
                                state = ATTR_QUAL_END;
                                break
                            }
                            if (c == ']') {
                                state = QUALIFIER;
                                break
                            }
                            if (c == "'" || c == '"')
                                throw Error(SYNTAX_ERROR);
                            currentQualifier.attrValue += c;
                            break;
                        case QUOTED_VALUE:
                            if (c == valueQuoteChar) {
                                state = ATTR_QUAL_END;
                                break
                            }
                            currentQualifier.attrValue += c;
                            break;
                        case SELECTOR_SEPARATOR:
                            if (c.match(WHITESPACE))
                                break;
                            if (c == ',') {
                                state = SELECTOR;
                                break
                            }
                            throw Error(SYNTAX_ERROR)
                        }
                    }
                    switch (state) {
                    case SELECTOR:
                    case TAG_NAME:
                    case QUALIFIER:
                    case QUALIFIER_NAME:
                    case SELECTOR_SEPARATOR:
                        newSelector();
                        break;
                    default:
                        throw Error(SYNTAX_ERROR)
                    }
                    if (!selectors.length)
                        throw Error(SYNTAX_ERROR);
                    return selectors
                }
                ;
                Selector.nextUid = 1;
                Selector.matchesSelector = (function() {
                    var element = _12.createElement('div');
                    if (typeof element['webkitMatchesSelector'] === 'function')
                        return 'webkitMatchesSelector';
                    if (typeof element['mozMatchesSelector'] === 'function')
                        return 'mozMatchesSelector';
                    if (typeof element['msMatchesSelector'] === 'function')
                        return 'msMatchesSelector';
                    return 'matchesSelector'
                }
                )();
                return Selector
            }
            )();
            var attributeFilterPattern = /^([a-zA-Z:_]+[a-zA-Z0-9_\-:.]*)$/;
            function validateAttribute(attribute) {
                if (typeof attribute != 'string')
                    throw Error('Invalid request opion. attribute must be a non-zero length string.');
                attribute = attribute.trim();
                if (!attribute)
                    throw Error('Invalid request opion. attribute must be a non-zero length string.');
                if (!attribute.match(attributeFilterPattern))
                    throw Error('Invalid request option. invalid attribute name: ' + attribute);
                return attribute
            }
            function validateElementAttributes(attribs) {
                if (!attribs.trim().length)
                    throw Error('Invalid request option: elementAttributes must contain at least one attribute.');
                var lowerAttributes = {};
                var attributes = {};
                var tokens = attribs.split(/\s+/);
                for (var i = 0; i < tokens.length; i++) {
                    let name = tokens[i];
                    if (!name)
                        continue;
                    name = validateAttribute(name);
                    var nameLower = name.toLowerCase();
                    if (lowerAttributes[nameLower])
                        throw Error('Invalid request option: observing multiple case variations of the same attribute is not supported.');
                    attributes[name] = true;
                    lowerAttributes[nameLower] = true
                }
                return Object.keys(attributes)
            }
            function elementFilterAttributes(selectors) {
                var attributes = {};
                selectors.forEach(function(selector) {
                    selector.qualifiers.forEach(function(qualifier) {
                        attributes[qualifier.attrName] = true
                    })
                });
                return Object.keys(attributes)
            }
            var MutationSummary = (function() {
                function MutationSummary(opts) {
                    var _44 = this;
                    this.connected = false;
                    this.options = MutationSummary.validateOptions(opts);
                    this.observerOptions = MutationSummary.createObserverOptions(this.options.queries);
                    this.root = this.options.rootNode;
                    this.callback = this.options.callback;
                    this.elementFilter = Array.prototype.concat.apply([], this.options.queries.map(function(query) {
                        return query.elementFilter ? query.elementFilter : []
                    }));
                    if (!this.elementFilter.length)
                        this.elementFilter = undefined;
                    this.calcReordered = this.options.queries.some(function(query) {
                        return query.all
                    });
                    this.queryValidators = [];
                    if (MutationSummary.createQueryValidator) {
                        this.queryValidators = this.options.queries.map(function(query) {
                            return MutationSummary.createQueryValidator(_44.root, query)
                        })
                    }
                    this.observedMutations = [];
                    this.observer = MutationObserverCtor ? new MutationObserverCtor(function(mutations) {
                        _44.observedMutations.push(mutations);
                        _2.setTimeout( () => {
                            if (!_44.observedMutations.length)
                                return;
                            _44.observerCallback(_44.observedMutations.flat());
                            _44.observedMutations = []
                        }
                        , 1)
                    }
                    ) : {
                        observe: function() {}
                    };
                    this.reconnect()
                }
                MutationSummary.createObserverOptions = function(queries) {
                    var observerOptions = {
                        childList: true,
                        subtree: true
                    };
                    var attributeFilter;
                    function observeAttributes(attributes) {
                        if (observerOptions.attributes && !attributeFilter)
                            return;
                        observerOptions.attributes = true;
                        observerOptions.attributeOldValue = true;
                        if (!attributes) {
                            attributeFilter = undefined;
                            return
                        }
                        attributeFilter = attributeFilter || {};
                        attributes.forEach(function(attribute) {
                            attributeFilter[attribute] = true;
                            attributeFilter[attribute.toLowerCase()] = true
                        })
                    }
                    queries.forEach(function(query) {
                        if (query.characterData) {
                            observerOptions.characterData = true;
                            observerOptions.characterDataOldValue = true;
                            return
                        }
                        if (query.all) {
                            observeAttributes();
                            observerOptions.characterData = true;
                            observerOptions.characterDataOldValue = true;
                            return
                        }
                        if (query.attribute) {
                            observeAttributes([query.attribute.trim()]);
                            return
                        }
                        var attributes = elementFilterAttributes(query.elementFilter).concat(query.attributeList || []);
                        if (attributes.length)
                            observeAttributes(attributes)
                    });
                    if (attributeFilter)
                        observerOptions.attributeFilter = Object.keys(attributeFilter);
                    return observerOptions
                }
                ;
                MutationSummary.validateOptions = function(options) {
                    for (var prop in options) {
                        if (!(prop in MutationSummary.optionKeys))
                            throw Error('Invalid option: ' + prop)
                    }
                    if (typeof options.callback !== 'function')
                        throw Error('Invalid options: callback is required and must be a function');
                    if (!options.queries || !options.queries.length)
                        throw Error('Invalid options: queries must contain at least one query request object.');
                    var opts = {
                        callback: options.callback,
                        rootNode: options.rootNode || _12,
                        observeOwnChanges: !!options.observeOwnChanges,
                        oldPreviousSibling: !!options.oldPreviousSibling,
                        queries: []
                    };
                    for (var i = 0; i < options.queries.length; i++) {
                        var request = options.queries[i];
                        if (request.all) {
                            if (Object.keys(request).length > 1)
                                throw Error('Invalid request option. all has no options.');
                            opts.queries.push({
                                all: true
                            });
                            continue
                        }
                        if ('attribute'in request) {
                            let query = {
                                attribute: validateAttribute(request.attribute)
                            };
                            query.elementFilter = Selector.parseSelectors('*[' + query.attribute + ']');
                            if (Object.keys(request).length > 1)
                                throw Error('Invalid request option. attribute has no options.');
                            opts.queries.push(query);
                            continue
                        }
                        if ('element'in request) {
                            var requestOptionCount = Object.keys(request).length;
                            let query = {
                                element: request.element,
                                elementFilter: Selector.parseSelectors(request.element)
                            };
                            if (Object.prototype.hasOwnProperty.call(request, 'elementAttributes')) {
                                query.attributeList = validateElementAttributes(request.elementAttributes);
                                requestOptionCount--
                            }
                            if (requestOptionCount > 1)
                                throw Error('Invalid request option. element only allows elementAttributes option.');
                            opts.queries.push(query);
                            continue
                        }
                        if (request.characterData) {
                            if (Object.keys(request).length > 1)
                                throw Error('Invalid request option. characterData has no options.');
                            opts.queries.push({
                                characterData: true
                            });
                            continue
                        }
                        throw Error('Invalid request option. Unknown query request.')
                    }
                    return opts
                }
                ;
                MutationSummary.prototype.createSummaries = function(mutations) {
                    if (!mutations || !mutations.length)
                        return [];
                    var projection = new MutationProjection(this.root,mutations,this.elementFilter,this.calcReordered,this.options.oldPreviousSibling);
                    var summaries = [];
                    for (var i = 0; i < this.options.queries.length; i++) {
                        summaries.push(new Summary(projection,this.options.queries[i]))
                    }
                    return summaries
                }
                ;
                MutationSummary.prototype.checkpointQueryValidators = function() {
                    this.queryValidators.forEach(function(validator) {
                        if (validator)
                            validator.recordPreviousState()
                    })
                }
                ;
                MutationSummary.prototype.runQueryValidators = function(summaries) {
                    this.queryValidators.forEach(function(validator, index) {
                        if (validator)
                            validator.validate(summaries[index])
                    })
                }
                ;
                MutationSummary.prototype.changesToReport = function(summaries) {
                    return summaries.some(function(summary) {
                        var summaryProps = ['added', 'removed', 'reordered', 'reparented', 'valueChanged', 'characterDataChanged'];
                        if (summaryProps.some(function(prop) {
                            return summary[prop] && summary[prop].length
                        }))
                            return true;
                        if (summary.attributeChanged) {
                            var attrNames = Object.keys(summary.attributeChanged);
                            var attrsChanged = attrNames.some(function(attrName) {
                                return !!summary.attributeChanged[attrName].length
                            });
                            if (attrsChanged)
                                return true
                        }
                        return false
                    })
                }
                ;
                MutationSummary.prototype.observerCallback = function(mutations) {
                    if (!this.options.observeOwnChanges)
                        this.observer.disconnect();
                    var summaries = this.createSummaries(mutations);
                    this.runQueryValidators(summaries);
                    if (this.options.observeOwnChanges)
                        this.checkpointQueryValidators();
                    if (this.changesToReport(summaries))
                        this.callback(summaries);
                    if (!this.options.observeOwnChanges && this.connected) {
                        this.checkpointQueryValidators();
                        this.observer.observe(this.root, this.observerOptions)
                    }
                }
                ;
                MutationSummary.prototype.reconnect = function() {
                    if (this.connected)
                        throw Error('Already connected');
                    this.observer.observe(this.root, this.observerOptions);
                    this.connected = true;
                    this.checkpointQueryValidators()
                }
                ;
                MutationSummary.prototype.takeSummaries = function() {
                    if (!this.connected)
                        throw Error('Not connected');
                    var summaries = this.createSummaries(this.observer.takeRecords());
                    return this.changesToReport(summaries) ? summaries : undefined
                }
                ;
                MutationSummary.prototype.disconnect = function() {
                    var summaries = this.takeSummaries();
                    this.observer.disconnect();
                    this.connected = false;
                    return summaries
                }
                ;
                MutationSummary.NodeMap = NodeMap;
                MutationSummary.parseElementFilter = Selector.parseSelectors;
                MutationSummary.optionKeys = {
                    'callback': true,
                    'queries': true,
                    'rootNode': true,
                    'oldPreviousSibling': true,
                    'observeOwnChanges': true
                };
                return MutationSummary
            }
            )();
            var TreeMirrorClient = (function() {
                function TreeMirrorClient(target, mirror, testingQueries) {
                    var _44 = this;
                    this.target = target;
                    this.mirror = mirror;
                    this.nextId = 1;
                    this.knownNodes = new MutationSummary.NodeMap();
                    this.mutationSummaries = [];
                    _452();
                    var serializedRoot = this.serializeNode(target, true);
                    var rootId = serializedRoot.id;
                    this.mirror.initialize(rootId, [serializedRoot]);
                    var queries = [{
                        all: true
                    }];
                    if (testingQueries)
                        queries = queries.concat(testingQueries);
                    this.mutationSummaries.push(new MutationSummary({
                        rootNode: target,
                        callback: function(summaries) {
                            _44.applyChanged(summaries)
                        },
                        queries: queries
                    }))
                }
                TreeMirrorClient.prototype.addShadowRoot = function(shadow) {
                    if (!this.isKnownNode(shadow)) {
                        var data = this.serializeNode(shadow, true);
                        if (data) {
                            data.parentNode = this.serializeNode(shadow.host);
                            this.mirror.applyChanged({
                                removed: [],
                                addedOrMoved: [data],
                                attributes: [],
                                text: []
                            })
                        }
                    }
                    var _44 = this;
                    this.mutationSummaries.push(new MutationSummary({
                        rootNode: shadow,
                        callback: function(summaries) {
                            _44.applyChanged(summaries)
                        },
                        queries: [{
                            all: true
                        }]
                    }))
                }
                ;
                TreeMirrorClient.prototype.disconnect = function() {
                    this.mutationSummaries.forEach(function(mutationSummary) {
                        mutationSummary.disconnect()
                    });
                    this.mutationSummaries = []
                }
                ;
                TreeMirrorClient.prototype.rememberNode = function(node) {
                    var id = this.nextId++;
                    this.knownNodes.set(node, id);
                    return id
                }
                ;
                TreeMirrorClient.prototype.forgetNode = function(node) {
                    this.knownNodes.deleteNode(node)
                }
                ;
                TreeMirrorClient.prototype.isKnownNode = function(node) {
                    return !!this.knownNodes.get(node)
                }
                ;
                TreeMirrorClient.prototype.serializeNode = function(node, isInitial) {
                    if (node === null)
                        return null;
                    if (_255(node, _273))
                        return null;
                    if (_255(node, _282))
                        return null;
                    var id = this.knownNodes.get(node);
                    if (id !== undefined) {
                        if (isInitial)
                            return _7('Found duplicated node during initial DOM: ' + id, _14());
                        return {
                            id: id
                        }
                    }
                    var data = {
                        nodeType: node.nodeType,
                        id: this.rememberNode(node)
                    };
                    var parent = _28._89(node);
                    if (_11._187(node, 'data-mf-replace') || _11._187(node, 'data-mf-replace-inner'))
                        return null;
                    var _468 = _441(node)
                      , _568 = !!_255(parent, _273);
                    if (_468 || _568) {
                        _7('CSS Blacklist blocked node. NodeType: ' + node.nodeType + '. ' + (node.nodeType === 1 ? 'Tag: ' + node.tagName : ''), _14());
                        _275(node, _273, true);
                        if (isInitial && node.childNodes.length) {
                            let _38;
                            for (_38 = _28._191(node); _38; _38 = _28._167(_38))
                                this.serializeNode(_38, true)
                        }
                        if (_568)
                            return null
                    }
                    var _466 = _506(node)
                      , _581 = !!_255(parent, _282);
                    if (_466 || _581) {
                        _7('CSS Masked blocked node. NodeType: ' + node.nodeType + '. ' + (node.nodeType === 1 ? 'Tag: ' + node.tagName : ''), _14());
                        _275(node, _282, true);
                        if (isInitial && node.childNodes.length) {
                            let _38;
                            for (_38 = _28._191(node); _38; _38 = _28._167(_38))
                                this.serializeNode(_38, true)
                        }
                        if (_581)
                            return null
                    }
                    //LOOK INTO - toto bude funkcia ktora bude rozradzovat co s nodeom
                    switch (data.nodeType) {
                    case 9:
                        this.serializeAdoptedStyleSheets(node, data);
                        if (isInitial)
                            this.serializeChildNodes(node, data);
                        break;
                    case 11:
                        data.isShadowRoot = _28._1023(node);
                        this.serializeAdoptedStyleSheets(node, data);
                        if (isInitial)
                            this.serializeChildNodes(node, data);
                        break;
                    case 10:
                        data.name = node.name;
                        data.publicId = node.publicId;
                        data.systemId = node.systemId;
                        break;
                    case 8:
                    case 3:
                        if (node.nodeType === 8 && node.textContent.indexOf('[if') !== 0 && node.textContent.indexOf('<![endif]') !== 0)
                            break;
                        data.textContent = _706(node);
                        if (_695.test(data.textContent) && !_1155(parent))
                            data.textContent = data.textContent.replace(_695, ' ');
                        if (parent && parent.tagName === 'STYLE' && /^\s*$/.test(node.textContent)) {
                            data.textContent = _394(parent.sheet)
                        }
                        break;
                    case 1:
                        if (node.tagName === 'IFRAME' && parent && parent.tagName === 'HEAD') {
                            data.nodeType = 8;
                            data.textContent = '';
                            break
                        }
                        data.tagName = node.tagName;
                        if (node.attributes['data-mf-replace']) {
                            let _299 = node.attributes['data-mf-replace'].value;
                            data = _812.call(this, _299, function(_18) {
                                var _10 = this.serializeNode(_18, true);
                                _10.id = data.id;
                                this.knownNodes.set(_18, _10.id);
                                return _10
                            })[0];
                            break
                        }
                        if (node.tagName === 'SCRIPT') {
                            if (/\/?aura_prod\.js(\?.+)?$/.test(node.src)) {
                                _7('Salesforce Aura script added');
                                _1098();
                                _1123()
                            }
                            break
                        }
                        data.attributes = {};
                        var _874 = _468 || _466;
                        if (_874) {
                            _875(node, data)
                        } else {
                            _943(node, data)
                        }
                        // LOOK INTO
                        if (_468) {
                            //CHANGE
                            //data.attributes.class = node.className + ' mf-excluded';
                            //break
                        }
                        if (_466) {
                            //CHANGE
                            //data.attributes.class = node.className + ' mf-masked'
                        }
                        if (node === _364)
                            data.attributes.class = (data.attributes.class || '') + ' mf-scroll-main';
                        if (_561.indexOf(node) !== -1)
                            data.attributes.class = (data.attributes.class || '') + ' mf-listen';
                        if (node.tagName === 'IFRAME' && node.offsetWidth <= 1 && node.offsetHeight <= 1)
                            data.attributes.src = '';
                        if (isInitial && node.tagName === 'INPUT') {
                            if (!data.attributes.value && node.value)
                                data.attributes.value = _232(node);
                            if (!data.attributes.checked && node.checked)
                                data.attributes.checked = node.checked
                        }
                        if (isInitial && node.tagName === 'OPTION' && !data.attributes.selected && node.selected)
                            data.attributes.selected = node.selected;
                        if (node.tagName === 'INPUT' && node.type === 'hidden' && data.attributes.value)
                            data.attributes.value = '';
                        if (node.attributes['data-mf-replace-inner']) {
                            let _299 = node.attributes['data-mf-replace-inner'].value;
                            data.childNodes = _812.call(this, _299, function(_18) {
                                return this.serializeNode(_18, true)
                            });
                            break
                        }
                        if (isInitial) {
                            this.serializeChildNodes(node, data);
                            if (node.shadowRoot) {
                                if (!data.childNodes)
                                    data.childNodes = [];
                                var shadowRootData = this.serializeNode(node.shadowRoot, true);
                                if (shadowRootData)
                                    data.childNodes.push(shadowRootData)
                            }
                            var cssDomain = node.tagName === 'LINK' ? node.href.split('/')[2] : '-1';
                            var cssGetAllowed = _12.domain.indexOf(cssDomain) !== -1;
                            var _920 = node.tagName === 'LINK' && node.href && cssGetAllowed && (node.href.indexOf('blob:') === 0 || _3.enableCssRecording);
                            var _919 = node.tagName === 'STYLE' && !node.textContent;
                            var cssRules = _920 || _919 ? _394(node.sheet) : null;
                            if (cssRules) {
                                data.childNodes = [{
                                    nodeType: 3,
                                    textContent: cssRules
                                }];
                                data.tagName = 'STYLE';
                                data.href = undefined;
                                data.rel = undefined
                            }
                        }
                        break
                    }
                    return data
                }
                ;
                TreeMirrorClient.prototype.serializeAddedAndMoved = function(added, reparented, reordered) {
                    var _44 = this;
                    var all = added.concat(reparented).concat(reordered);
                    var parentMap = new MutationSummary.NodeMap();
                    all.forEach(function(node) {
                        var parent = _28._89(node);
                        var children = parentMap.get(parent);
                        if (!children) {
                            children = new MutationSummary.NodeMap();
                            parentMap.set(parent, children)
                        }
                        children.set(node, true)
                    });
                    var moved = [];
                    parentMap.keys().forEach(function(parent) {
                        var children = parentMap.get(parent);
                        var keys = children.keys();
                        while (keys.length) {
                            var node = keys[0];
                            while (node.previousSibling && children.has(node.previousSibling))
                                node = node.previousSibling;
                            var _196 = false;
                            while (node && children.has(node)) {
                                if (_834(node))
                                    _196 = true;
                                else if (_845(node.previousSibling))
                                    _196 = false;
                                if (!_196) {
                                    var data = _44.serializeNode(node);
                                    if (data) {
                                        var _389 = node.previousSibling;
                                        while (_389 && !data.previousSibling) {
                                            data.previousSibling = _44.serializeNode(_389);
                                            _389 = _389.previousSibling
                                        }
                                        data.parentNode = _44.serializeNode(_28._89(node));
                                        if (data.parentNode)
                                            moved.push(data)
                                    }
                                }
                                children.deleteNode(node);
                                node = _28._167(node)
                            }
                            keys = children.keys()
                        }
                    });
                    return moved
                }
                ;
                TreeMirrorClient.prototype.serializeAttributeChanges = function(attributeChanged) {
                    var _44 = this;
                    var map = new MutationSummary.NodeMap();
                    Object.keys(attributeChanged).forEach(function(attrName) {
                        attributeChanged[attrName].forEach(function(element) {
                            if (element.hasAttribute && element.hasAttribute('data-mf-replace') || _11._187(element, 'data-mf-replace') || _11._187(element, 'data-mf-replace-inner')) {
                                return
                            }
                            if (_441(element))
                                _275(element, _273, true, true);
                            if (_507(element))
                                _275(element, _282, true, true);
                            var record = map.get(element);
                            if (!record) {
                                record = _44.serializeNode(element);
                                if (record) {
                                    record.attributes = {};
                                    map.set(element, record)
                                }
                            }
                            if (record) {
                                if (attrName.toLowerCase() === 'value' && element.tagName === 'INPUT')
                                    record.attributes.value = _232(element);
                                else if (attrName === 'mf_adoptedStyleSheets')
                                    _44.serializeAdoptedStyleSheets(element, record);
                                else
                                    record.attributes[attrName] = element.getAttribute(attrName)
                            }
                        })
                    });
                    return map.keys().map(function(node) {
                        return map.get(node)
                    })
                }
                ;
                TreeMirrorClient.prototype.serializeTextChanges = function(textChanges) {
                    var _44 = this;
                    return textChanges.map(function(node) {
                        var data = _44.serializeNode(node);
                        if (data) {
                            if (node.tagName === 'STYLE' && /^\s*$/.test(node.textContent))
                                data.textContent = _394(node.sheet);
                            else
                                data.textContent = _706(node)
                        }
                        return data
                    })
                }
                ;
                TreeMirrorClient.prototype.applyChanged = function(summaries) {
                    _452();
                    var summary = summaries[0];
                    ['removed', 'added', 'reparented', 'reordered', 'attributeChanged', 'characterDataChanged'].forEach(function(key) {
                        if (!summary[key])
                            summary[key] = []
                    });
                    var _44 = this;
                    var removed = summary.removed.map(function(node) {
                        return _44.serializeNode(node)
                    });
                    var moved = this.serializeAddedAndMoved(summary.added, summary.reparented, summary.reordered);
                    var attributes = this.serializeAttributeChanges(summary.attributeChanged);
                    var text = this.serializeTextChanges(summary.characterDataChanged);
                    this.mirror.applyChanged({
                        removed: _396(removed),
                        addedOrMoved: _396(moved),
                        attributes: _396(attributes),
                        text: _396(text)
                    });
                    summary.removed.forEach(function(node) {
                        _44.forgetNode(node)
                    });
                    summary.added.forEach(function(node) {
                        _353(node)
                    })
                }
                ;
                TreeMirrorClient.prototype.serializeChildNodes = function(node, data) {
                    if (!node.childNodes.length)
                        return;
                    data.childNodes = [];
                    var _196 = false;
                    for (var child = _28._191(node); child; child = _28._167(child)) {
                        if (_834(child))
                            _196 = true;
                        else if (_845(child.previousSibling))
                            _196 = false;
                        if (_196)
                            continue;
                        var serializedChild = this.serializeNode(child, true);
                        if (serializedChild) {
                            data.childNodes.push(serializedChild)
                        }
                    }
                }
                ;
                TreeMirrorClient.prototype.serializeAdoptedStyleSheets = function(_18, _10) {
                    if (!_18.adoptedStyleSheets)
                        return;
                    var _44 = this;
                    _10.css = _18.adoptedStyleSheets.map(function(_140) {
                        var _385 = {
                            id: _44.knownNodes.get(_140)
                        };
                        if (!_385.id) {
                            _385.id = _44.rememberNode(_140);
                            _385.text = _394(_140)
                        }
                        return _385
                    })
                }
                ;
                return TreeMirrorClient
            }
            )();
            function _396(_927) {
                return _927.filter(function(_74) {
                    return _74
                })
            }
            function _943(node, data) {
                for (var i = 0; i < node.attributes.length; i++) {
                    var attr = node.attributes[i];
                    if (_878(attr.name.toLowerCase()))
                        continue;
                    if (attr.name.toLowerCase() === 'value' && node.tagName === 'INPUT')
                        data.attributes.value = _232(node);
                    else
                        data.attributes[attr.name] = attr.value
                }
            }
            function _452() {
                _292(_842, _3._408);
                _292(_780, _3._412);
                _292(_561, _3._278);
                _292(_823, _3._413);
                _292(_516, ['.mf-form']);
                _942();
                _941()
            }
            function _292(_566, _565) {
                _566.length = 0;
                if (!_565.length)
                    return;
                try {
                    var _307 = _145(_565.join(','), _12);
                    for (var i = 0; i < _307.length; i++) {
                        _566.push(_307[i])
                    }
                } catch (e) {}
            }
            function _942() {
                if (!_3.freezeElementIds)
                    return;
                _3.freezeElementIds.forEach(function(_9) {
                    try {
                        var _307 = _145(_9, _12);
                        _307.forEach(function(_18) {
                            if (_368.has(_18))
                                return;
                            if (_307.length > 1)
                                _9 = _59(_18);
                            _368.set(_18, _9)
                        })
                    } catch (e) {}
                })
            }
            function _941() {
                _240.clear();
                const _939 = _88._131();
                for (const _200 of _3._673) {
                    if (_200._324 && _200._324 != _939)
                        continue;
                    let _256;
                    if (_200._1187) {
                        const _598 = _145(_200._21, _12);
                        if (!_598?.length)
                            continue;
                        _256 = _598
                    } else {
                        const _603 = _228(_200._21, false);
                        if (!_603)
                            continue;
                        _256 = [_603]
                    }
                    if (_200._358) {
                        const _669 = _240.get(_90._358._22);
                        if (_669)
                            _256.forEach(_18 => _669.add(_18));
                        else
                            _240.set(_90._358._22, new Set(_256))
                    }
                    if (_200._352) {
                        const _816 = _240.get(_90._352._22);
                        if (_816)
                            _256.forEach(_18 => _816.add(_18));
                        else
                            _240.set(_90._352._22, new Set(_256))
                    }
                }
            }
            function _145(_9, _33) {
                try {
                    var _56 = [];
                    _9.split(',').forEach(function(_9) {
                        var _48 = _9.split(' > :document-fragment: > ', 1);
                        _33.querySelectorAll(_48[0]).forEach(function(_1) {
                            if (_48[1] && _1.shadowRoot) {
                                _145(_48[1], _1.shadowRoot).forEach(function(_1) {
                                    _56.push(_1)
                                })
                            } else {
                                _56.push(_1)
                            }
                        })
                    });
                    return _56
                } catch (_57) {
                    _7('Could not get element from selector: ' + _57.message)
                }
            }
            function _812(_299, _890) {
                var _10 = [];
                var _448 = _12.createElement('div');
                _448.innerHTML = _299;
                for (var i = 0; i < _448.childNodes.length; i++) {
                    var _885 = _448.childNodes[i];
                    var _880 = _890.call(this, _885);
                    _10.push(_880)
                }
                return _10
            }
            function _834(_18) {
                return _18 && _18.nodeType === 8 && _18.textContent.trim().toLowerCase().indexOf('mouseflowexcludestart') === 0
            }
            function _845(_18) {
                return _18 && _18.nodeType === 8 && _18.textContent.trim().toLowerCase().indexOf('mouseflowexcludeend') === 0
            }
            function _878(_511) {
                return _877.test(_511)
            }
            function _394(_140) {
                var _229 = '';
                try {
                    if (!_140 || !_140.cssRules)
                        return _229
                } catch (e) {
                    return _229
                }
                for (var _4 = 0; _4 < _140.cssRules.length; _4++) {
                    _229 += _140.cssRules[_4].cssText
                }
                return _229
            }
            function _1144() {
                _147({
                    _19: _175 + 'install?websiteId=' + _3._49,
                    _135: function() {
                        _7('Website installed signal sent.', _14())
                    },
                    _67: function() {
                        _7('Error in transmitCrossDomain - could not signal that website was installed.', _14())
                    }
                })
            }
            function _1143(_66) {
                _147({
                    _19: _175 + 'config?websiteId=' + _3._49,
                    _135: function(_84) {
                        var _881 = _11._285(_84._340);
                        _3.keyLogging = _881.enableKeystrokes;
                        _7('Fetched recording script configuration.');
                        _66()
                    },
                    _67: function() {
                        _7('Error in transmitCrossDomain - could not fetch recording script configuration.');
                        _66()
                    }
                })
            }
            function _35() {
                if (_101) {
                    _7('Recording script is already started', _14());
                    return
                }
                if (!_750) {
                    _7('Recording not started - recording script is not initialized', _14());
                    return
                }
                _7('Recording starting, version ' + _197 + (_3.gdprEnabled ? ', GDPR mode enabled' : '') + (_3._446 ? ', privacy enforced' : ''), _14());
                if (!_781())
                    return;
                _101 = true;
                _870();
                _452();
                _15._75 = _938(_0._578);
                if (_906())
                    _905();
                _0._233 = _197;
                _892()
            }
            function _892() {
                var _713 = _1150();
                var _19 = _175 + 'init?v=' + _197 + '&p=' + _3._49 + '&s=' + _15._60 + '&page=' + _15._75 + '&ret=' + (_15._268 ? '1' : '0') + '&u=' + _15._186 + '&href={href}' + '&url=' + _108(_88._131()) + '&ref={referrer}' + '&title=' + _108(_12.title) + '&res=' + _2.screen.width + 'x' + _2.screen.height + '&tz=' + _947() + '&to=' + _15._764 + '&dnt=' + _15._769 + '&ori=' + (typeof _2.orientation != 'undefined' ? _2.orientation : '') + '&dw=' + _12.documentElement.clientWidth + '&dh=' + _12.documentElement.clientHeight + '&time=' + _1092() + '&pxr=' + (typeof _2.devicePixelRatio != 'undefined' ? _2.devicePixelRatio : 1) + (_713.length > 0 ? '&fw=' + _713.join(',') : '') + '&gdpr=' + (_3.gdprEnabled ? 1 : 0);
                _19 = _19.replace('{href}', _1154(_19.length)).replace('{referrer}', _108(_3.referrer));
                _1151();
                if (_3.hasCustomHref)
                    _120._722(['tag', 'mf_secret_custom-href']);
                var _717 = _897(_77._796 - _19.length - 6);
                _19 += _884(_717);
                _147({
                    _19: _19,
                    _135: function(_84) {
                        if (_84._340 === 'Recording blocked') {
                            _7('Recording not started - mf_block cookie set to 1', _14());
                            return
                        }
                        const _714 = parseInt(_84._340, 10);
                        if (isNaN(_714)) {
                            _7('Recording not started - init failed', _14());
                            return
                        }
                        _0._793 = _714;
                        _717.forEach(function(_143) {
                            _744(_143.key, _143.value)
                        });
                        _243 = true;
                        _894();
                        _218._35(_15, _0, _375);
                        _120._35();
                        _912();
                        _911();
                        _937()
                    },
                    _1170: true,
                    _67: function() {
                        _7('Error in transmitCrossDomain - recording not starting.', _14())
                    }
                });
                _696();
                _0._113 = null;
                _1099();
                _0._104 = {
                    x: _2.pageXOffset,
                    y: _2.pageYOffset
                };
                if (_0._104.x !== 0 && _0._104.y !== 0)
                    _622();
                _0._300 = 1;
                _449();
                _7('Recording started. Session: ' + _15._60 + ', Page: ' + _15._75 + ', Last page: ' + _15._348, _14())
            }
            function _906() {
                return !_15._60 || !_854() || (_0._233 && _0._233 !== '0' && _0._233 !== _197) || (+new Date() - _0._349) > _77._517
            }
            function _905() {
                _7('Starting new session');
                var _904 = _15._60;
                _15._60 = _424();
                _0._159 = [];
                _15._303 = 0;
                if (_15._60 === _904)
                    throw Error('New session ID is identical to the old session ID. This might be because Math.random has been overwritten.')
            }
            function _65(_903) {
                if (!_101)
                    return;
                _896();
                _176 = false;
                _802();
                _120._707();
                _25._203(_420);
                _25._203(_421);
                _25._203(_425);
                _25._146(_305);
                if (_287) {
                    _25._146(_287);
                    _790()
                }
                if (_280) {
                    _25._146(_280);
                    _795()
                }
                _860();
                if (!_903)
                    _29(_8._902, {});
                _371();
                _243 = false;
                if (_115)
                    _115.disconnect();
                _218._65();
                _449();
                _0 = _605();
                _7('Recording stopped', _14());
                _101 = false;
                _525 = false
            }
            function _549(_26, _72, _898) {
                if (_14() < 100) {
                    var _907 = !_26 || _26.toString() === _3.path;
                    var _900 = (_72 || _2.location).href === _3.location.href;
                    if (_907 && _900)
                        return
                }
                if (_101)
                    _65();
                _3.htmlDelay = _3.newPageViewHtmlDelay;
                _3._486(_26, _72);
                _3.forcePath = !!_898;
                _15._75 = '';
                _0._932 = true;
                _35();
                _548(0)
            }
            function _896() {
                if (_0._142) {
                    if (+new Date() - _0._142 < _3.registerSubmitTimeout) {
                        _7('Registering formSubmit', _14())
                    } else {
                        _7('Not registering formSubmit. Timeout exceeded.', _14());
                        _0._113 = null
                    }
                }
            }
            function _1068() {
                _65();
                _1138('mf_' + _3._49);
                if (_2.name && ((_2.name.length === 35 && _2.name.indexOf('mf_') === 0) || (_3.crossDomainSupport && _2.name.indexOf('mf_' + _3._49) === 0)))
                    _2.name = ''
            }
            function _894() {
                if (_3.htmlFetchMode === 'post') {
                    _25._71(function() {
                        _893()
                    }, _3.htmlDelay)
                } else {
                    _7('Html not sent due to mouseflowHtmlFecthMode setting', _14())
                }
            }
            function _893() {
                if (_115)
                    _115.disconnect();
                var _53 = {
                    _49: _3._49,
                    _60: _15._60,
                    _75: _15._75
                };
                _115 = new TreeMirrorClient(_12,{
                    initialize: function(rootId, children) {
                        if (_53._75 === _15._75)
                            _176 = true;
                        _2.setTimeout(function() {
                            _1179({
                                _53: _53,
                                _10: {
                                    f: 'initialize',
                                    args: [rootId, children]
                                },
                                _172: _12.documentElement.innerHTML.length
                            })
                        }, 1)
                    },
                    applyChanged: function(summary) {
                        if (_14() - _0._459 < 30000) {
                            if (summary.removed.length || summary.addedOrMoved.length || summary.attributes.length || summary.text.length) {
                                _1175({
                                    _53: _53,
                                    _10: {
                                        f: 'applyChanged',
                                        args: [summary.removed, summary.addedOrMoved, summary.attributes, summary.text]
                                    }
                                })
                            }
                        }
                    }
                })
            }
            function _1066(_16, _5, _940, _759) {
                if (!_101)
                    return;
                if (!_704(_16, _5))
                    return;
                if (!_744(_16, _5)) {
                    _7('Variable already set to same value, not triggering callback.', _14());
                    return
                }
                var _10 = {
                    key: _16.toString(),
                    value: _5.toString() || '',
                    scope: _940 || 'session',
                    overwrite: _759 === undefined ? true : _759
                };
                _0._151.push(_10);
                _25._146(_280);
                _280 = _25._71(_795, 1000)
            }
            function _704(_16, _5) {
                if (!_16 || !_5) {
                    _7('Variable key and value cannot be empty', _14());
                    return false
                }
                if (_16.includes('=')) {
                    _7('Variable key cannot contain "="', _14());
                    return false
                }
                if (_16.length > 100) {
                    _7('Variable key cannot be more than 100 characters', _14());
                    return false
                }
                if (_5.length > 2000) {
                    _7('Variable value cannot be more than 2000 characters', _14());
                    return false
                }
                return true
            }
            function _897(limit) {
                var _82 = _120._1052();
                if (!_82.length)
                    return [];
                var _151 = [];
                var _723 = 0;
                for (var _50 = 0; _50 < _82.length; _50++) {
                    var _54 = _82[_50];
                    if (!_54 || !_54.length || _54[0] !== 'setVariable')
                        continue;
                    if ((_54.length > 3 && _54[3] !== 'session') || (_54.length > 4 && _54[4] !== true))
                        continue;
                    var _16 = _54[1];
                    var _5 = _54[2];
                    if (!_704(_16, _5))
                        continue;
                    if (_742(_16) !== -1)
                        continue;
                    var _876 = _108(_16) + '=' + _108(_5);
                    _723 += _876.length + 1;
                    if (_723 - 1 >= limit)
                        break;
                    _151.push({
                        key: _16,
                        value: _5
                    });
                    _82.splice(_50, 1);
                    _50--
                }
                return _151
            }
            function _884(_151) {
                var _398 = _151.map(function(_143) {
                    return _108(_143.key) + '=' + _108(_143.value)
                }).join('&');
                return _398 ? '&vars=' + _108(_398) : ''
            }
            function _795() {
                _280 = 0;
                for (var _4 = 0; _4 < _0._151.length; _4++) {
                    var _143 = _0._151[_4];
                    _7('Setting custom variable: ' + _143.key + ' = ' + _143.value + ', overwrite: ' + (_143.overwrite === undefined ? true : _143.overwrite), _14())
                }
                _375('variable', _0._151);
                _0._151 = []
            }
            function _94(_929) {
                _29(_8._94, {
                    target: _929
                })
            }
            function _1093() {
                _29(_8._94, {
                    target: '*'
                })
            }
            function _1065(_930) {
                if (!_101)
                    return;
                if (_3.gdprEnabled || _3._446) {
                    _7('User identification not allowed (privacy enforced in script)', _14());
                    return
                }
                _375('identify', {
                    userId: _15._186,
                    userName: _930
                })
            }
            function _1067(_45) {
                if (!_101)
                    return;
                _45 = _529(_45);
                _7('Registering form submit attempt on this page', _14());
                _483(_45)
            }
            function _526(_45) {
                if (!_101)
                    return;
                _45 = _529(_45);
                var _546 = _14();
                if (_0._113 === _119(_3.path || _3.location.pathname) || _546 > 5000) {
                    _7('Registering form submit success on this page', _14());
                    if (!_0._113)
                        _29(_8._345, {
                            target: _45
                        });
                    _29(_8._782, {});
                    _0._142 = undefined;
                    _0._113 = undefined
                } else {
                    _2.setTimeout(function() {
                        _7('Registering form submit success on previous page', _14());
                        _513([{
                            _20: _8._782
                        }], _615())
                    }, _671())
                }
            }
            function _620(_45) {
                if (!_101)
                    return;
                _45 = _529(_45);
                var _546 = _14();
                if (_0._113 === _119(_3.path || _3.location.pathname) || _546 > 5000) {
                    _7('Registering form submit failure on this page', _14());
                    if (!_0._113)
                        _29(_8._345, {
                            target: _45
                        });
                    _29(_8._245, {});
                    _156(_90._245);
                    _0._142 = undefined;
                    _0._113 = undefined
                } else {
                    _2.setTimeout(function() {
                        _7('Registering form submit failure on previous page', _14());
                        _513([{
                            _20: _8._245
                        }, {
                            _20: _8._73,
                            _24: {
                                x: _90._245._5,
                                y: 0
                            }
                        }, {
                            _20: _8._94,
                            _24: {
                                target: _90._245._22
                            }
                        }], _615())
                    }, _671())
                }
            }
            function _615() {
                const _544 = _15._110.find(_53 => _53._36 === _15._348)?._76;
                if (_0._142 && _544 && _0._142 > _544 && _0._142 < _0._76) {
                    return _0._142 - _544
                }
                return 0
            }
            function _671() {
                var _690 = 1000;
                var _665 = new Date() - _0._142;
                return _665 > _690 ? 0 : _690 - _665
            }
            function _529(_45) {
                if (typeof (_45) === 'object')
                    return _59(_45);
                var _21 = _921.filter(function(_530) {
                    return _530._62 === _45
                }).map(function(_530) {
                    return _530._21
                })[0];
                return _21 || _45
            }
            function _483(_62) {
                if (!_101 || !_62 || _347(_228(_62)))
                    return;
                if ((+new Date()) - _0._813 < 20)
                    return;
                _0._813 = +new Date();
                _29(_8._345, {
                    target: _62
                });
                if (!_0._540[_62]) {
                    _0._540[_62] = _509(_62)
                } else {
                    _928(_62, _509(_62), _0._540[_62])
                }
                _926(_62);
                _879(_62);
                _0._142 = +new Date();
                _0._113 = _119(_3.path || _3.location.pathname);
                _696()
            }
            function _696() {
                if (!_0._113)
                    return;
                var _209 = _908();
                if (_209.length) {
                    _861(_209);
                    return
                }
                if (_0._113 !== _119(_3.path || _3.location.pathname)) {
                    _526()
                }
            }
            function _861(_209) {
                var _817 = _209.filter(function(_3) {
                    return !_3.target
                })[0];
                if (_817) {
                    _720(_817);
                    return
                }
                _858(function() {
                    var _718 = _209.filter(function(_3) {
                        return _3.target && _871(_3.target)
                    })[0];
                    if (!_718)
                        return false;
                    _720(_718);
                    return true
                }, _77._868, _77._945)
            }
            function _908() {
                if (!_3.forms)
                    return [];
                var _209 = _3.forms.filter(function(_383) {
                    if (_383.formPath && _119(_383.formPath) !== _0._113)
                        return false;
                    if (_383.redirectPath && _383.redirectPath !== _3.location.pathname)
                        return false;
                    return true
                });
                return _209
            }
            function _871(_21) {
                var _1 = _12.querySelector(_21.selector);
                if (!_1)
                    return false;
                if (!_21.text)
                    return true;
                return _1.textContent.toLowerCase().includes(_21.text.toLowerCase())
            }
            function _720(_3) {
                if (_3.result === 'success') {
                    _526()
                } else if (_3.result === 'failure') {
                    _620()
                }
            }
            function _858(_66, _592, _855) {
                var _76 = new Date();
                var _846 = function() {
                    var _865 = new Date() - _76;
                    if (_865 < _855 && !_66())
                        _2.setTimeout(_846, _592)
                };
                _2.setTimeout(_846, _592)
            }
            function _156(_73, _21) {
                if (!_101 || !_73)
                    return;
                const _308 = _944(_73, _21);
                const _335 = _543(_73, _21, _308);
                if (!_335)
                    return;
                _29(_8._73, _335);
                if (!_308)
                    _218._1029(_73._22)
            }
            function _543(_73, _21, _308) {
                let _309 = +_73._5;
                let _22 = _73._22 || 'custom-friction' + (_73._617 ? ('-' + _73._617) : '');
                if (_308)
                    _22 += '__MUTED';
                const _554 = _0._341.findIndex(e => e._22 === _22 && e._21 === _21);
                const _555 = _554 > -1 ? _0._341[_554] : null;
                if (_555) {
                    const _866 = new Date() - _555._111;
                    if (_866 < _73._129)
                        return;
                    _0._341.splice(_554, 1)
                }
                _0._341.push({
                    _22: _22,
                    _21: _21,
                    _111: new Date()
                });
                if ((_308 || _555) && !_22.includes('custom-friction'))
                    _309 = 0;
                const _335 = {
                    value: _22,
                    target: _21 ? _21 : '',
                    x: _309 > 0 ? _309 : 0,
                    y: _309 < 0 ? _309 * -1 : 0,
                };
                return _335
            }
            function _944(_73, _21) {
                if (!_21 || !_73 || !_3._673.length)
                    return false;
                const _633 = _240.get(_73._22);
                if (!_633)
                    return false;
                const _922 = _228(_21);
                if (_321(_922, (_915) => _633.has(_915)))
                    return true;
                return false
            }
            function _912() {
                if (_15._110.length < 2)
                    return;
                var _237 = _15._110[_15._110.length - 2];
                var _317 = _15._110[_15._110.length - 1];
                var _215 = _119(_3.path || _3.location.pathname);
                if (_237._215 === _215 && _237._215 !== _317._215 && _0._76 - _317._76 < 10000) {
                    _513([{
                        _20: _8._73,
                        _24: _543(_90._666)
                    }, {
                        _20: _8._94,
                        _24: {
                            target: _90._666._22
                        }
                    }])
                }
            }
            function _911() {
                if (_15._110.length < 4)
                    return;
                var _679 = _15._110[_15._110.length - 5];
                var _237 = _15._110[_15._110.length - 4];
                if (_0._76 - _237._76 < 30000) {
                    if (_679 && _237._76 - _679._76 < 30000)
                        return;
                    _670(_237._36, [{
                        _20: _8._73,
                        _24: _543(_90._611)
                    }, {
                        _20: _8._94,
                        _24: {
                            target: _90._611._22
                        }
                    }])
                }
            }
            function _937() {
                const _246 = _504();
                const _936 = _246.responseStatus;
                if (_936 === 404) {
                    _156(_90._527);
                    return
                }
                const _935 = _3.notFoundIdentifiers.map(a => new RegExp(a,'i')).some(a => a.test(_12.title));
                if (_935) {
                    _156(_90._527);
                    return
                }
            }
            function _476() {
                if (!_101)
                    return;
                _218._476.apply(_218, arguments)
            }
            function _934() {
                return {
                    _60: '',
                    _75: '',
                    _186: '',
                    _268: false,
                    _764: +('ontouchstart'in _2 && _3.touchEvents),
                    _769: (navigator.doNotTrack === 'yes' || navigator.doNotTrack == 1 || window.doNotTrack == 1 || navigator.msDoNotTrack == 1) ? 1 : 0,
                    _303: 0,
                    _348: '',
                    _110: [],
                    _265: [],
                    _382: _184._805(),
                    _192: null
                }
            }
            function _605() {
                return {
                    _578: new Date(),
                    _76: +new Date(),
                    _793: null,
                    _306: +new Date(),
                    _349: +new Date(),
                    _932: false,
                    _10: [],
                    _130: [],
                    _51: [],
                    _264: [],
                    _569: [],
                    _177: [],
                    _128: [],
                    _157: [],
                    _653: 0,
                    _655: 0,
                    _193: 0,
                    _657: '',
                    _813: 0,
                    _226: [],
                    _341: [],
                    _153: {
                        x: 0,
                        y: 0
                    },
                    _608: {
                        x: 0,
                        y: 0
                    },
                    _602: {
                        x: 0,
                        y: 0
                    },
                    _741: -100,
                    _104: {
                        x: 0,
                        y: 0
                    },
                    _301: {
                        x: 0,
                        y: 0
                    },
                    _235: {},
                    _415: -100,
                    _435: -100,
                    _190: {
                        x: 0,
                        y: 0
                    },
                    _595: {
                        x: 1,
                        y: 1
                    },
                    _599: {
                        x: 0,
                        y: 0
                    },
                    _440: [],
                    _1184: 0,
                    _204: [],
                    _151: [],
                    _300: 1,
                    _459: 0,
                    _700: 0,
                    _540: {},
                    _159: [],
                    _815: 0,
                    _799: 0,
                    _797: 0,
                    _265: [],
                    _271: 0,
                    _205: 0,
                    _168: null,
                    _148: _873(),
                    _730: 0,
                    _703: 0,
                    _800: false,
                    _453: false,
                    _233: 0,
                    _688: false,
                    _656: false
                }
            }
            function _848(_18, _52) {
                var _165 = [];
                if (!_18.childNodes || !_18.childNodes.length)
                    return _165;
                for (var _38 = _28._191(_18); _38; _38 = _28._167(_38)) {
                    if (_52 && _52(_38))
                        _165.push(_38);
                    _165 = _165.concat(_848(_38, _52))
                }
                return _165
            }
            function _726(_45, _52) {
                return _45.elements ? Array.from(_45.elements).filter(_52) : _848(_45, _52)
            }
            function _509(_62) {
                var _45 = _228(_62);
                var _32 = {};
                if (!_45) {
                    _7('Form not found: ' + _62, _14());
                    return _32
                }
                var _165 = _726(_45, function(_6) {
                    return /input|select|textarea/i.test(_6.tagName) && !/hidden|submit|reset|image|button/i.test(_6.type)
                });
                _165.forEach(function(_6) {
                    var _5 = _261(_6);
                    var _36 = _59(_6);
                    if (!_32[_36])
                        _32[_36] = _5;
                    else if (_5)
                        _32[_36] += ', ' + _5
                });
                return _32
            }
            function _879(_62) {
                var _45 = _228(_62);
                if (!_45 || !_15._382)
                    return;
                var _165 = _726(_45, function(_6) {
                    return /input|textarea/i.test(_6.tagName) && !/hidden|submit|reset|image|file|button|password/i.test(_6.type)
                });
                _165.forEach(function(_6) {
                    var _5 = _261(_6);
                    if (!_5 || _5.length <= 3 || _263(_5) || _444(_6))
                        return;
                    var _114 = _743(_5);
                    if (_114.length === 0)
                        return;
                    var _194 = [];
                    for (let _4 = 0; _4 < _114.length; _4++) {
                        _194.push(_114[_4]._122)
                    }
                    var _222 = false;
                    for (let _4 = 0; _4 < _0._148.length; _4++) {
                        var _312 = _0._148[_4];
                        _222 = _194.length === _312.length && _765(_312, _194) === 0;
                        if (_222)
                            break
                    }
                    if (!_222)
                        _0._148.push(_194)
                });
                if (_0._148.length) {
                    _0._148 = _0._148.slice(-100);
                    _899(_0._148)
                }
            }
            function _899(_51) {
                _55._253('mf_replaceHashes', _51)
            }
            function _873() {
                return _55._231('mf_replaceHashes') || []
            }
            function _891(_5) {
                if (_0._148.length === 0)
                    return _5;
                var _114 = _743(_5);
                for (var _4 = 0; _4 < _0._148.length; _4++) {
                    var _312 = _0._148[_4];
                    var _212;
                    do {
                        var _132 = _212 !== undefined ? _212 + 1 : 0;
                        _212 = _765(_114, _312, _132);
                        if (_212 !== -1) {
                            var _35 = _114[_212]._35;
                            var _234 = _114[_212 + _312.length - 1]._234;
                            var _895 = _1153('*', _234 - _35);
                            _5 = _5.slice(0, _35) + _895 + _5.slice(_234)
                        }
                    } while (_212 !== -1)
                }
                return _5
            }
            function _743(_5) {
                var _194 = [];
                var _35;
                function _776(_234) {
                    if (_35 === undefined)
                        return;
                    var _760 = _5.slice(_35, _234);
                    _194.push({
                        _35: _35,
                        _234: _35 + _760.length,
                        _122: _119(_760)
                    });
                    _35 = undefined
                }
                for (var _4 = 0; _4 < _5.length; _4++) {
                    var _541 = _5[_4];
                    if (_1152(_541)) {
                        if (_35 === undefined) {
                            _35 = _4
                        }
                    } else {
                        _776(_4)
                    }
                }
                _776();
                return _194
            }
            function _765(_236, _114, _132) {
                for (var _4 = _132 || 0; _4 < _236.length; _4++) {
                    if (_4 + _114.length > _236.length)
                        break;
                    if (_901(_236, _114, _4))
                        return _4
                }
                return -1
            }
            function _901(_236, _114, _132) {
                var _222 = false;
                for (var _4 = _132 || 0, _127 = 0; _4 < _236.length && _127 < _114.length; _4++,
                _127++) {
                    _222 = _236[_4]._122 === _114[_127];
                    if (!_222)
                        break
                }
                return _222
            }
            function _261(_1) {
                var _5 = '';
                if (_1.type && /radio|checkbox/.test(_1.type.toLowerCase()))
                    _5 = _1.checked ? _1.value : '';
                else if (_1.tagName && /select/.test(_1.tagName.toLowerCase()) && _1.options)
                    for (var j = 0; j < _1.options.length; j++) {
                        var _199 = _1.options[j].selected ? _1.options[j].value : '';
                        if (_199 && _199 != '')
                            _5 += (_5 && _5 != '' ? ',' : '') + _199
                    }
                else
                    _5 = _1.value;
                return _5 || ''
            }
            function _232(_1) {
                //CHANGE
                /*if (_1.type === 'password')
                    return '*';*/
                var _5 = _261(_1);
                /*if (_600(_1)) {
                    _5 = _5.replace(/./g, _809(_1.type))
                } else if (_593(_1) && !_444(_1)) {
                    _5 = _5.slice(0, 2) + _5.slice(2).replace(/./g, _809(_1.type))
                }*/
                return _5
            }
            function _706(_1) {
                var _257 = _1.textContent;
                if (_1.nodeType === 3 && _28._89(_1))
                    _1 = _28._89(_1);
                var _738 = _891(_257);
                if (_738 !== _257 && _3.replaceLastFormValues)
                    _257 = _738;
                //CHANGE
                //if (_889(_1))
                //    _257 = _257.replace(/./g, '*');
                return _257
            }
            function _875(_18, _10) {
                var _768 = _712(_18);
                if (_18.id)
                    _10.attributes.id = _18.id;
                if (_18.name)
                    _10.attributes.name = _18.name;
                _10.attributes.style = (_18.style ? _18.style.cssText + '; ' : '') + 'width: ' + _768.width + 'px; height: ' + _768.height + 'px;' + (_2.getComputedStyle(_18).display === 'inline' ? ' display: inline-block;' : '')
            }
            function _444(_1) {
                return _11._171(_1, 'mouseflow') || _780.indexOf(_1) !== -1
            }
            function _347(_1) {
                if (!_1)
                    return false;
                if (_1[NodeMap.ID_PROP])
                    return !!_255(_1, _273);
                if (_321(_1, _441))
                    return true;
                return false
            }
            function _507(_1) {
                if (!_1)
                    return false;
                if (_1[NodeMap.ID_PROP])
                    return !!_255(_1, _282);
                if (_321(_1, _506))
                    return true;
                return false
            }
            function _441(_1) {
                return _842.indexOf(_1) !== -1 || _11._171(_1, 'no-mouseflow-dom') || _11._171(_1, 'mf-excluded')
            }
            function _506(_1) {
                return false //CHANGE _823.indexOf(_1) !== -1 || _11._171(_1, 'mf-masked')
            }
            function _847(_1) {
                return _11._171(_1, 'no-mouseflow') || (!_3.keyLogging && !_444(_1)) || _347(_1) || _507(_1)
            }
            function _600(_1) {
                return (_847(_1) || _263(_261(_1)) || _883(_1)) && _811(_1) && !_882.test(_1.type)
            }
            function _889(_1) {
                return (_1.isContentEditable || _1.tagName === 'TEXTAREA') && _847(_1)
            }
            function _883(_1) {
                return (_3.gdprEnabled || _3._446) && (_909(_1) || _931(_1))
            }
            function _263(_5) {
                var _447 = _5.replace(/[-\s]+/g, '');
                if (!_886.test(_447) || !_887.call(this, _447))
                    return false;
                return !_888.every(function(_788) {
                    if (_788.patternRegex.test(_447)) {
                        _7("Identified credit card " + _788.name);
                        return false
                    }
                    return true
                })
            }
            function _909(_1) {
                return /email/i.test(_1.type) || _910.test(_1.value)
            }
            function _931(_1) {
                return /tel/i.test(_1.type)
            }
            function _593(_1) {
                return _811(_1) && /^\d{3}[^a-z]*$/i.test(_1.value)
            }
            function _811(_1) {
                return _1.tagName === 'INPUT' || _1.tagName === 'TEXTAREA'
            }
            function _809(_933) {
                return /number/i.test(_933) ? '0' : '*'
            }
            function _1101(_41) {
                return _600(_41.target) || _593(_41.target) ? '191' : (_41.which && _41.which.toString()) || ''
            }
            function _1102(_1) {
                /*CHANGE var _357 = _59(_1);
                var _363 = _0._569[_357];
                var _344 = _232(_1);
                var _32 = _344;
                if (_363 && _363.length > 3 && _344.indexOf(_363) === 0)
                    _32 = '+||' + _344.substring(_363.length);
                _0._569[_357] = _344;
                return _32*/
                return _232(_1); //this wasn't here
            }
            function _928(_62, _503, _502) {
                try {
                    var _288 = [];
                    for (let _80 in _503) {
                        if (typeof _502[_80] == 'undefined' || _503[_80] != _502[_80])
                            _288.push(_80)
                    }
                    for (let _80 in _502) {
                        if (typeof _503[_80] == 'undefined' && _288.indexOf(_80) === -1)
                            _288.push(_80)
                    }
                    for (var i = 0; i < _288.length; i++) {
                        _29(_8._557, {
                            target: _288[i]
                        })
                    }
                } catch (_57) {
                    _7('Error in _addChangedFieldEvents: ' + _57.message, _14())
                }
            }
            function _926(_62) {
                try {
                    var _327 = _917(_62);
                    for (var i = 0; i < _327.length; i++) {
                        _29(_8._556, {
                            target: _327[i]
                        })
                    }
                } catch (_57) {
                    _7('Error in getBlankFields: ' + _57.message, _14())
                }
            }
            function _917(_62) {
                var _327 = [];
                var _51 = _509(_62);
                for (var _80 in _51)
                    if (_51[_80] == '')
                        _327.push(_80);
                return _327
            }
            function _455(_1) {
                if (_516.includes(_1))
                    return null;
                return _1.form || _516.filter(function(_45) {
                    return _45.contains(_1)
                })[0] || null
            }
            function _864() {
                _913();
                _916()
            }
            function _449() {
                _914();
                _841()
            }
            function _913() {
                var _698 = _775('mf_user').split('|');
                for (var _4 = 0; _4 < _698.length; _4++) {
                    var _93 = _698[_4];
                    switch (_4) {
                    case 0:
                        _15._186 = _93;
                        break;
                    case 1:
                        _15._265 = _93 !== '' ? _93.split(/[$,]+/) : [];
                        break
                    }
                }
                _15._268 = _15._186 !== '';
                if (_15._186 === '' || _15._186 === '1')
                    _15._186 = _424();
                _0._688 = true
            }
            function _914() {
                if (!_0._688)
                    return;
                _774('mf_user', [_15._186, _15._265.join('$')].join('|'), 1, _11._310(_72, _3))
            }
            function _916() {
                var _638 = _775('mf_' + _3._49).split('|');
                for (var _4 = 0; _4 < _638.length; _4++) {
                    var _93 = _638[_4];
                    switch (_4) {
                    case 0:
                        _15._60 = _93;
                        break;
                    case 1:
                        _15._110 = _923(_93, _15._75);
                        break;
                    case 2:
                        _0._349 = parseInt(_93, 10);
                        break;
                    case 3:
                        _0._159 = _93 !== '' ? _93.split('.') : [];
                        break;
                    case 4:
                        _15._303 = parseInt(_93, 10);
                        break;
                    case 5:
                        _0._113 = _93;
                        break;
                    case 6:
                        _0._142 = parseInt(_93, 10);
                        break;
                    case 7:
                        _0._265 = _93 !== '' ? _93.split(/[$,]+/) : [];
                        break;
                    case 8:
                        _15._268 = _93 === '1';
                        break;
                    case 9:
                        _0._233 = _93;
                        break;
                    case 10:
                        _15._192 = parseFloat(_93);
                        break
                    }
                }
                if (!_15._60)
                    _15._60 = _3.sessionId || _918();
                if (!_15._192)
                    _15._192 = _925();
                var _317 = _15._110[_15._110.length - 1];
                if (_317)
                    _15._348 = _317._36;
                _0._656 = true
            }
            function _918() {
                var sessionId = _629();
                return sessionId && sessionId.length === 32 ? sessionId : null
            }
            function _925() {
                var recordingRate = _629();
                return /^\d+\.\d+$/.test(recordingRate) ? parseFloat(recordingRate) : null
            }
            function _629() {
                return _3.crossDomainSupport && _2.name && _2.name.indexOf('mf_' + _3._49) === 0 ? _2.name.split('=')[1] : null
            }
            function _841() {
                if (!_0._656)
                    return;
                _774('mf_' + _3._49, [_15._60, _924(), _0._349, _0._159.join('.'), _15._303, _0._113 || '', _0._142 || '', _0._265.join('$'), _15._268 ? '1' : '0', _0._233, _15._192].join('|'), 0, _11._310(_72, _3));
                if (_3.crossDomainSupport)
                    _2.name = 'mf_' + _3._49 + '=' + (_15._60 || _15._192)
            }
            function _923(_5, _75) {
                return _5.split(/[$,]+/).map(function(_53) {
                    var _51 = _53.split('.');
                    return {
                        _36: _51[0],
                        _215: _51[1],
                        _76: +_51[2]
                    }
                }).filter(function(p) {
                    return p._36 !== _75
                }).slice(-5)
            }
            function _924() {
                var _472 = _15._110;
                if (_15._75) {
                    _472 = _472.concat([{
                        _36: _15._75,
                        _215: _119(_3.path || _3.location.pathname),
                        _76: _0._76
                    }]).slice(-6)
                }
                return _472.map(function(_53) {
                    return _53._36 + '.' + _53._215 + '.' + _53._76
                }).join('$')
            }
            //LOOK INTO
            var _355 = '__mouseflow_properties__';
            var _273 = 'is-blacklisted';
            var _282 = 'is-masked';
            function _255(_18, _16) {
                //CHANGE
                /*if (!_18)
                    return null;
                var _251 = _18[_355];
                return _251 ? _251[_16] : null*/
            }
            function _275(_18, _16, _5, _857) {
                /*CHANGE var _251 = _18[_355];
                if (!_251)
                    _251 = _18[_355] = {};
                _251[_16] = _5;
                if (_857 && _18.childNodes && _18.childNodes.length) {
                    for (var _38 = _28._191(_18); _38; _38 = _28._167(_38)) {
                        _275(_38, _16, _5, true)
                    }
                }*/
            }
            function _591(_18) {
                delete _18[_355];
                if (_18.childNodes && _18.childNodes.length) {
                    for (var _38 = _28._191(_18); _38; _38 = _28._167(_38)) {
                        _591(_38)
                    }
                }
            }
            function _860() {
                _591(_12.body)
            }
            function _870() {
                _0._76 = +new Date();
                _0._306 = +new Date();
                _420 = _25._397(_622, _77._762);
                _421 = _25._397(_1163, _77._849);
                _425 = _25._397(_450, _77._853);
                _305 = _25._71(_129, _77._517)
            }
            function _1141() {
                if (!_763(_3.location.hostname))
                    return false;
                if (_746()) {
                    _7('Recording not started - browser is IE8 or older');
                    return false
                }
                return _781()
            }
            function _781() {
                _864();
                if (_3.forceStart)
                    return true;
                if (_867()) {
                    _7('Recording not started - session ID is invalid.', _14());
                    return false
                }
                if (_872()) {
                    _7('Recording not started - honored "do not track" browser setting.', _14());
                    return false
                }
                if (_863()) {
                    _7('Recording not started - the browser was identified as a bot.', _14());
                    return false
                }
                if (!_272._437(_178)) {
                    _7('Recording not started - page does not match page rules', _14());
                    return false
                }
                var _356 = _862.filter(function(_69) {
                    return _272._230(_69)
                }).sort(_852)[0];
                if (_356) {
                    _241 = _356._241;
                    _7('Recording rate set from page recording rule: ' + _356._20 + ', "' + _356._5 + '"', _14())
                }
                if (!_15._192)
                    _15._192 = _859();
                var _822 = _15._60 || _15._192 <= _241;
                if (!_822)
                    _7('Recording not started - recordingRate or blocked', _14());
                _841();
                return _822
            }
            function _852(_856, _850) {
                return _850._241 - _856._241
            }
            function _859() {
                return _105.round(_105.random() * 10000000) / 100000
            }
            function _872() {
                return _3.honorDoNotTrack && _15._769
            }
            function _867() {
                return _15._60 && _15._60.length != 32
            }
            function _863() {
                if (_3.enableBots)
                    return false;
                return _2.navigator.webdriver || /ptst|headlesschrome|lighthouse/i.test(_2.navigator.userAgent)
            }
            function _854() {
                return (_15._303 < _77._851)
            }
            function _938(_111) {
                return _384(_111.getMonth() + 1, 2) + _384(_111.getDate(), 2) + _384(_111.getSeconds(), 2) + _384(_111.getMilliseconds(), 3).slice(1) + _424()
            }
            function _384(_978, _214) {
                return (new Array(_214 + 1).join('0') + _978).slice(-_214)
            }
            function _947() {
                var _749 = new Date();
                return _105.max(new Date(_749.getFullYear(),0,1).getTimezoneOffset(), new Date(_749.getFullYear(),6,1).getTimezoneOffset())
            }
            var _724 = false;
            function _1099() {
                try {
                    _480(_12);
                    _103(_12, 'mousemove', function(_6) {
                        _0._153 = {
                            x: _6.pageX,
                            y: _6.pageY
                        }
                    });
                    _482(_12.documentElement, 'mouseleave', function() {
                        _29(_8._1100, {});
                        _94('mouse-out')
                    });
                    _103(_12, 'mousedown', function(_6) {
                        _1072(_6, _6.target)
                    });
                    _103(_12, 'mouseup', function(_6) {
                        _1073(_6, _6.target)
                    });
                    _639(_12, 'click', _624, function(_6) {
                        _1074(_6, _6.delegatedTarget || _6.target);
                        if (!_6.delegatedTarget) {
                            const stylesBeforePotentialMutation = {
                                ..._678(_6.target)
                            };
                            if (_3.enableDeadClick)
                                _25._71( () => _1105(_6, stylesBeforePotentialMutation), 1)
                        }
                    });
                    try {
                        var _492 = _1082();
                        if (_492) {
                            _482(_12, 'mouseenter', _492, function(_6) {
                                var _210 = _351(_8._262).filter(function(_74) {
                                    return _6.delegatedTarget && _6.delegatedTarget.matches(_74._9)
                                })[0];
                                if (_210)
                                    _94(_210._94);
                                _29(_8._262, {
                                    x: _6.pageX,
                                    y: _6.pageY,
                                    target: _59(_6.target)
                                })
                            });
                            _482(_12, 'mouseleave', _492, function(_6) {
                                _29(_8._350, {
                                    x: _6.pageX,
                                    y: _6.pageY,
                                    target: _59(_6.target)
                                })
                            })
                        }
                    } catch (_57) {
                        _7('Error in getHoverSelectors: ' + _57.message, _14())
                    }
                    _103(_12, 'focus', 'input,textarea,select,button', function(_6) {
                        _29(_8._572, {
                            target: _59(_6.target)
                        })
                    });
                    _103(_12, 'blur', 'input,textarea,select,button', function(_6) {
                        _29(_8._570, {
                            target: _59(_6.target)
                        })
                    });
                    _103(_12, 'keypress', 'input,textarea,select', function(_6) {
                        if (_6.target && _6.target.type !== 'password') {
                            _29(_8._499, {
                                target: _59(_6.target)
                            })
                        }
                    });
                    _103(_12, 'keydown', 'input,textarea,select', function(_6) {
                        if (_6.target && _6.target.type !== 'password') {
                            _29(_8._372, {
                                target: _59(_6.target),
                                value: _1101(_6)
                            })
                        }
                    });
                    _103(_12, 'keyup', 'input,textarea,select', function(_6) {
                        if (_6.target && _6.target.type !== 'password') {
                            _29(_8._362, {
                                target: _59(_6.target),
                                value: _1102(_6.target)
                            });
                            if (_263(_261(_6.target)) && _3.autoTagPayments)
                                _94('payment')
                        }
                    });
                    _103(_12, 'change', 'input,textarea,select', function(_6) {
                        _29(_8._302, {
                            target: _59(_6.target),
                            value: _232(_6.target)
                        });
                        if (_6.target && ['password', 'file'].indexOf(_6.target.type) === -1 && _263(_261(_6.target)) && _3.autoTagPayments)
                            _94('payment')
                    });
                    _479(_12);
                    if (_15._764) {
                        _103(_12, 'touchstart', function(_6) {
                            var _99 = _6.touches;
                            if (_99.length > 0) {
                                _29(_8._497, {
                                    x: _99[0].pageX,
                                    y: _99[0].pageY
                                })
                            }
                            if (_99.length > 1) {
                                _29(_8._433, {
                                    x: _99[1].pageX,
                                    y: _99[1].pageY
                                })
                            }
                        });
                        _103(_12, 'touchmove', function(_6) {
                            var _99 = _6.touches;
                            var _359 = _14();
                            var _491 = _359 - _77._762;
                            if (_99.length > 0 && _0._741 < _491) {
                                _29(_8._465, {
                                    x: _99[0].pageX,
                                    y: _99[0].pageY
                                });
                                if (_99.length > 1) {
                                    _29(_8._432, {
                                        x: _99[1].pageX,
                                        y: _99[1].pageY
                                    })
                                }
                                _0._741 = _359;
                                var _1103 = !_185(_370(), _0._190);
                                if (_1103) {
                                    _0._190 = _370();
                                    _29(_8._380, _0._190);
                                    if (_0._435 < _491) {
                                        _29(_8._380, _0._190);
                                        _0._435 = _359
                                    }
                                }
                                _0._104 = {
                                    x: _2.pageXOffset,
                                    y: _2.pageYOffset
                                };
                                if (_0._415 < _491 && !_185(_0._104, _0._301)) {
                                    _0._301 = _0._104;
                                    _29(_8._378, _0._104);
                                    _0._415 = _359
                                }
                            }
                        });
                        _103(_12, 'touchend', function(_6) {
                            var _99 = _6.touches;
                            if (_99.length === 0)
                                _29(_8._381, {
                                    x: 0,
                                    y: 0
                                });
                            if (_99.length > 1)
                                _29(_8._429, {
                                    x: 0,
                                    y: 0
                                })
                        });
                        if (_2.screen.orientation) {
                            _103(_2.screen.orientation, 'change', function() {
                                _29(_8._494, {
                                    x: _2.screen.orientation.angle,
                                    y: 0
                                })
                            })
                        }
                    }
                    _103(_2, _1146(), function() {
                        _65()
                    });
                    var _728 = _2.onerror;
                    _2.onerror = function(_154, _19, _474, _473, _488) {
                        var _1104 = new Date() - _0._205;
                        if (_1104 > 1000 && _0._271 < 50) {
                            _0._205 = +new Date();
                            var _489 = 'Malformed error';
                            if (_154 && _154.message)
                                _489 = _154.message;
                            else if (typeof _154 === 'string')
                                _489 = _154;
                            _0._168 = {
                                _154: _489,
                                _19: typeof _19 === 'string' ? _19 : 'Malformed URL',
                                _474: '' + _474,
                                _473: '' + _473,
                                _1097: _488 && _488.stack && _488.stack.substring(0, 800),
                                _1190: _0._205
                            };
                            if (_0._193 !== 0 && _0._205 - _0._193 < 100) {
                                _156(_90._645, _0._657);
                                _644()
                            }
                        }
                        if (_728)
                            _728.apply(this, arguments)
                    }
                    ;
                    if (!_724) {
                        if (_3.proxyAttachShadow)
                            _361();
                        _601();
                        _1121();
                        if (_3.enableSpa) {
                            _410.proxyPushState(_549)
                        }
                        if (_3.proxyValueSetter)
                            _618();
                        _724 = true
                    }
                    if (_3.keyLogging)
                        _1096()
                } catch (_57) {
                    _7('Error in bindDomEvents: ' + _57.message, _14())
                }
            }
            function _1105(_6, _821) {
                if (_786(_6))
                    return;
                if (_485(_6.target))
                    return;
                const _1106 = _2.getSelection();
                const _1107 = (_609(_6.target) || _1116(_821) || _485(_6.target) || _1115(_6.target) || _786(_6) || _1106.type === 'Range');
                if (_1107)
                    return;
                if (_1117(_6.target, _821) || _1118(_6.target, _6.clientX, _6.clientY) || _1114(_6.target)) {
                    _836(_6.target);
                    return
                }
                const _206 = _584(_6.target);
                if (_206) {
                    _836(_6.target, _206)
                }
            }
            function _836(_21, _1108=null) {
                const _357 = _59(_21);
                _156(_90._358, _357);
                _1109(_1108 ?? _21)
            }
            function _1109(_1110) {
                if (!_3.debugDeadClick) {
                    if (_487) {
                        for (const _1 of _12.getElementsByClassName(_267)) {
                            _1.classList.remove(_267)
                        }
                    }
                    return
                }
                if (!_487) {
                    const _58 = _12.createElement('style');
                    _58.textContent = `.${_267}{outline:solid red}`;
                    _12.head.append(_58);
                    _487 = true
                }
                const _56 = new Set([..._12.getElementsByClassName(_267), _1110]);
                for (const _1 of _56) {
                    _1.classList.toggle(_267)
                }
            }
            function _784(_787) {
                return _787 === 'true' || _787 === 'plaintext-only'
            }
            function _786(_6) {
                const _1111 = _6.target.getAttribute('contenteditable');
                if (_784(_1111)) {
                    return true
                }
                const _1112 = _6.target.closest('[contenteditable]');
                const _1113 = _1112?.getAttribute('contenteditable');
                if (_784(_1113)) {
                    return true
                }
            }
            function _1114(_1) {
                return _1 && _1.tagName === 'I'
            }
            function _485(_1) {
                return _1 && _1.tagName === 'LABEL' && _1.control && _609(_1.control)
            }
            function _1115(_1) {
                const _607 = _1.closest('label');
                return _607 && _485(_607)
            }
            function _609(_1) {
                return _1.matches(_624)
            }
            function _1116(_270) {
                return _270.cursor && _270.cursor !== 'default' && _270.cursor !== 'auto'
            }
            function _1117(_1, _270) {
                return _1.tagName === 'IMG' || _1 instanceof SVGElement || _270.backgroundImage?.startsWith('url')
            }
            function _1118(_1, x, y) {
                for (const node of _1.childNodes) {
                    if (node.nodeType !== Node.TEXT_NODE) {
                        continue
                    }
                    const _567 = _12.createRange();
                    _567.selectNodeContents(node);
                    for (const rect of _567.getClientRects()) {
                        if (rect.left < x && rect.right > x && rect.top < y && rect.bottom > y) {
                            return true
                        }
                    }
                }
                return false
            }
            function _584(_1, _577=1) {
                if (!_1 || _577 > 5)
                    return null;
                const _58 = _678(_1);
                const _1119 = parseInt(_58.borderWidth, 10);
                const _1120 = parseInt(_58.outlineWidth, 10);
                if (_1119 > 0 || _1120 > 0)
                    return _1;
                return _584(_1.parentElement, _577 + 1)
            }
            function _678(_1) {
                let _58 = _277.get(_1);
                if (_58)
                    return _58;
                _58 = _2.getComputedStyle(_1);
                _277.set(_1, _58);
                if (_277.size > 100)
                    _277.delete(_277.keys().next().value);
                return _58
            }
            function _480(_33) {
                _639(_33, 'scroll', 'body,div,section,main,article,ul,.mf-scroll-listen', function(_6) {
                    if (_6.target === _12) {
                        _0._104 = {
                            x: _2.pageXOffset,
                            y: _2.pageYOffset
                        }
                    } else if (_6.target === _364) {
                        _0._104 = {
                            x: _6.target.scrollLeft,
                            y: _6.target.scrollTop
                        }
                    } else {
                        _1075(_59(_6.target), _6.target.scrollLeft, _6.target.scrollTop)
                    }
                })
            }
            function _479(_33) {
                _103(_33, 'click', '.mf-form-button', function(_6) {
                    _483(_59(_455(_6.target)))
                });
                _103(_33, 'submit', 'form', function(_6) {
                    _483(_59(_6.target))
                })
            }
            function _103(_21, _8, _52, _66) {
                _23._39(_21, _8, _52, _66, {
                    _86: true
                })
            }
            function _482(_21, _8, _52, _66) {
                _23._39(_21, _8, _52, _66, {
                    _86: true,
                    _386: true
                })
            }
            function _639(_21, _8, _52, _66) {
                _23._39(_21, _8, _52, _66, {
                    _86: true,
                    _1054: true
                })
            }
            function _1121() {
                var _1122 = CSSStyleSheet.prototype.insertRule;
                var _630;
                var _238 = [];
                CSSStyleSheet.prototype.insertRule = function() {
                    _1122.apply(this, arguments);
                    if (!_176)
                        return;
                    var _18 = this.ownerNode;
                    if (_238.indexOf(_18) < 0)
                        _238.push(_18);
                    _25._146(_630);
                    _630 = _25._71(function() {
                        _238 = _238.filter(function(_18) {
                            return _18 && _115.isKnownNode(_18)
                        });
                        _115.applyChanged([{
                            characterDataChanged: _238
                        }]);
                        _238 = []
                    }, 200)
                }
            }
            var _481 = HTMLElement.prototype.attachShadow;
            var _354 = false;
            function _1123() {
                var _76 = new Date();
                var _1125 = _2.setInterval(function() {
                    var _1124 = new Date() - _76;
                    if (HTMLElement.prototype.attachShadow !== _481 || _1124 > 10000) {
                        _2.clearInterval(_1125);
                        _361()
                    }
                }, 200)
            }
            function _1098() {
                if (!_354 || HTMLElement.prototype.attachShadow !== _660)
                    return;
                _7('Resetting "attach shadow" proxy');
                delete HTMLElement.prototype.attachShadow;
                _354 = false
            }
            function _361() {
                if (_354)
                    return;
                if (!_176) {
                    _2.setTimeout(_361, 200);
                    return
                }
                _7('Setting up "attach shadow" proxy');
                _353(_12.body);
                _481 = HTMLElement.prototype.attachShadow;
                HTMLElement.prototype.attachShadow = _660;
                _354 = true
            }
            function _660() {
                var _116 = _481.apply(this, arguments);
                if (_176 && _115.isKnownNode(this)) {
                    _480(_116);
                    _479(_116);
                    _115.addShadowRoot(_116)
                }
                return _116
            }
            function _353(_1) {
                for (; _1; _1 = _1.nextElementSibling) {
                    if (_1.shadowRoot) {
                        _480(_1.shadowRoot);
                        _479(_1.shadowRoot);
                        _115.addShadowRoot(_1.shadowRoot);
                        _353(_1.shadowRoot.firstElementChild)
                    }
                    _353(_1.firstElementChild)
                }
            }
            function _601() {
                if (!_176) {
                    _2.setTimeout(_601, 200);
                    return
                }
                _276(Document.prototype, 'adoptedStyleSheets', {
                    _126: _597
                });
                _276(ShadowRoot.prototype, 'adoptedStyleSheets', {
                    _126: _597
                })
            }
            function _597() {
                if (!_176)
                    return;
                _115.applyChanged([{
                    attributeChanged: {
                        'mf_adoptedStyleSheets': [this]
                    }
                }])
            }
            function _618() {
                if (!_176) {
                    _2.setTimeout(_618, 200);
                    return
                }
                _276(HTMLInputElement.prototype, 'value', {
                    _126: _477
                });
                _276(HTMLTextAreaElement.prototype, 'value', {
                    _126: _477
                });
                _276(HTMLSelectElement.prototype, 'value', {
                    _126: _477
                })
            }
            function _477() {
                if (!_115.isKnownNode(this))
                    return;
                _115.applyChanged([{
                    attributeChanged: {
                        'value': [this]
                    }
                }])
            }
            function _276(_18, _571, _274) {
                var _475 = Object.getOwnPropertyDescriptor(_18, _571);
                if (!_274 || !_475)
                    return;
                Object.defineProperty(_18, _571, {
                    get: function() {
                        var _5 = _475.get.apply(this, arguments);
                        if (_274._158)
                            _274._158.apply(this, arguments);
                        return _5
                    },
                    set: function() {
                        _475.set.apply(this, arguments);
                        if (_274._126)
                            _274._126.apply(this, arguments)
                    }
                })
            }
            function _644() {
                if (_0._168) {
                    _0._271++;
                    var _10 = {
                        seq: _0._271,
                        errorMsg: _0._168._154,
                        url: _0._168._19,
                        line: _0._168._474,
                        col: _0._168._473,
                        stack: _0._168._1097,
                        errorTime: _0._205
                    };
                    _29(_8._67, {
                        x: _0._271,
                        y: 0
                    });
                    _7('JS error ' + _0._271 + ', msg: ' + _0._168._154, _14());
                    _375('error', _10);
                    _0._168 = null
                }
            }
            function _802() {
                _23._843();
                if (_469)
                    _25._203(_469)
            }
            function _1096() {
                _0._264 = _635();
                _469 = _25._397(function() {
                    _1071(_1070(_635(), _0._264))
                }, 200)
            }
            //LOOK INTO
            function _635() {
                var _661 = _12.querySelectorAll('input,textarea,select');
                var _659 = {};
                for (var i = 0; i < _661.length; i++) {
                    var _80 = _661[i];
                    if (_11._171(_80, 'no-mouseflow'))
                        continue;
                    if (!_1081(_80, ['text', 'textarea', 'select-one']))
                        continue;
                    _659[_59(_80)] = _232(_80)
                }
                return _659
            }
            function _1081(_80, _1069) {
                return _80.type && new RegExp(_1069.join('|'),'i').test(_80.type)
            }
            function _1070(_264, _650) {
                var _281 = [];
                for (var _16 in _264) {
                    var _5 = _264[_16];
                    var _649 = _650[_16];
                    if (_649 !== undefined && _649 !== _5)
                        _281.push({
                            id: _16,
                            value: _5
                        });
                    _650[_16] = _5
                }
                return _281
            }
            function _1071(_281) {
                if (_14() - _0._700 > 100) {
                    for (var i = 0; i < _281.length; i++) {
                        var _43 = _281[i];
                        _29(_8._302, {
                            target: _43.id,
                            value: _43.value
                        })
                    }
                }
            }
            function _1072(_6, _1) {
                if ((+new Date()) - _0._653 < 20)
                    return;
                _0._653 = +new Date();
                _29(_8._343, {
                    x: _6.pageX,
                    y: _6.pageY,
                    target: _59(_1)
                })
            }
            function _1073(_6, _1) {
                if ((+new Date()) - _0._655 < 20)
                    return;
                _0._655 = +new Date();
                var _166 = _417(_1, _6.pageX, _6.pageY);
                if (!_166 && _1.firstElementChild)
                    _166 = _417(_1.firstElementChild, _6.pageX, _6.pageY);
                if (_166)
                    _29(_8._342, {
                        x: _166.x,
                        y: _166.y,
                        target: _59(_1)
                    })
            }
            function _1074(_6, _1) {
                if ((+new Date()) - _0._193 < 20)
                    return;
                var _21 = _59(_1);
                _0._193 = +new Date();
                _0._657 = _21;
                _29(_8._247, {
                    x: _6.pageX,
                    y: _6.pageY,
                    target: _21
                });
                _0._226.push(_0._193);
                _0._226 = _0._226.slice(-5);
                if (_0._226[4] - _0._226[0] < 1000) {
                    _156(_90._352, _21);
                    _0._226 = []
                }
                if (_0._193 !== 0 && _0._205 !== 0 && _0._193 - _0._205 < 100) {
                    _156(_90._645, _21);
                    _644()
                }
                var _210 = _351(_8._247).filter(function(_74) {
                    return _1.matches(_74._9)
                })[0];
                if (_210) {
                    _94(_210._94);
                    if (_210._664)
                        setTimeout( () => _549(_210._664, null, true), 1)
                }
            }
            function _1075(_36, _1076, _1077) {
                _0._235[_36] = {
                    x: _1076,
                    y: _1077
                };
                if (_360)
                    return;
                _360 = _25._71(_636, 100);
                function _636() {
                    _360 = null;
                    var _632 = true;
                    for (var _21 in _0._235) {
                        if (Object.prototype.hasOwnProperty.call(_0._235, _21)) {
                            _29(_8._501, {
                                x: _0._235[_21].x,
                                y: _0._235[_21].y,
                                target: _21
                            });
                            _632 = false
                        }
                    }
                    if (!_632) {
                        _0._235 = {};
                        _360 = _25._71(_636, 100)
                    }
                }
            }
            function _417(_18, _1078, _1079) {
                var _46 = _712(_18);
                if (_46 == null || !_46.height || !_46.width)
                    return null;
                return {
                    x: parseInt((_1078 - _0._104.x - _46.x) / parseFloat(_46.width) * 65535),
                    y: parseInt((_1079 - _0._104.y - _46.y) / parseFloat(_46.height) * 65535)
                }
            }
            function _1080() {
                const _34 = ['a', 'input', 'select', 'button', 'textarea', '.mf-listen-click'];
                _34.push.apply(_34, _691(_351(_8._247)));
                return _34.slice(0, 1000).join(',')
            }
            function _1082() {
                var _662 = {};
                var _642 = /[^(]:hover/;
                if (_3.useAllHoverSelectors) {
                    for (var _4 = 0; _4 < _12.styleSheets.length; _4++) {
                        var _155 = _12.styleSheets[_4];
                        try {
                            var _229 = _155.cssRules ? _155.cssRules : _155.rules;
                            for (var _127 = 0; _127 < _229.length; _127++) {
                                var _640 = _155.cssRules[_127];
                                if (!_642.test(_640.selectorText))
                                    continue;
                                let _34 = _640.selectorText.split(',');
                                var _9;
                                for (var _496 = 0; _496 < _34.length; _496++) {
                                    _9 = _34[_496].replace(/^\s+|\s+$/g, '');
                                    if (_642.test(_9)) {
                                        _9 = _9.substring(0, _9.indexOf(':hover'));
                                        _9 = _1084(_9);
                                        _662[_9] = true
                                    }
                                }
                            }
                        } catch (_57) {
                            _7('Cannot inspect external css file, :hover support may fail: ' + _155.href)
                        }
                    }
                }
                let _34 = ['a', 'input', 'select', 'button', 'textarea', 'li', 'canvas', '.mf-listen'];
                for (_9 in _662) {
                    _9 = _9.replace(/^\s+|\s+$/g, '');
                    if (_9 != '' && _9 != 'a' && !_284(_9, ' a') && !_284(_9, ' select') && !_284(_9, ' submit') && !_284(_9, ' textarea') && !_284(_9, ' li'))
                        _34.push(_9)
                }
                _34.push.apply(_34, _3._278);
                _34.push.apply(_34, _691(_351(_8._262)));
                return _34.slice(0, 1000).join(',')
            }
            function _351(_1083) {
                var _1095 = {
                    5: 'Click',
                    6: 'Mouseover'
                };
                let _685 = _88._131();
                var _689 = _3._686.filter(function(_523) {
                    return _523._664 === _685
                }).map(function(_523) {
                    return _523._324
                });
                _689.push(_685);
                var _521 = _3._686.filter(function(_74) {
                    return _74._41 === _1095[_1083] && (!_74._324 || _74._324 === _3.location.href || _689.includes(_74._324))
                });
                return _521
            }
            function _691(_521) {
                return _521.map(function(_74) {
                    return _74._9
                })
            }
            function _321(_18, _520, _519, _326) {
                if (!_18 || !_520)
                    return null;
                if (_520(_18))
                    return _18;
                if (!_326)
                    _326 = 0;
                _326 += 1;
                if (_519 && _326 >= _519)
                    return null;
                return _321(_28._89(_18), _520, _519, _326)
            }
            function _1084(_43) {
                var _697 = [/:active/g, /:visited/g, /::before/g, /:before/g, /::after/g, /:after/g, /::first-letter/g, /::first-line/g, /::selection/g];
                for (var _4 = 0; _4 < _697.length; _4++)
                    _43 = _43.replace(_697[_4], '');
                return _43
            }
            function _108(_1085) {
                try {
                    return _2.encodeURIComponent(_1085)
                } catch (_57) {
                    _7('Encode error: ' + _57.message, _14());
                    return ''
                }
            }
            function _1178(_5) {
                return _5.replace(/%/g, '%25').replace(/\|{3}/g, '%7C%7C%7C')
            }
            function _29(_20, _24) {
                if (!_101)
                    return;
                if (_0._10.length === 0)
                    _0._306 = +new Date();
                var _40 = _676(_20, _24, _0._177, _0._51, _708());
                if (!_40)
                    return;
                if (_1130(_20)) {
                    _25._146(_305);
                    _305 = _25._71(_129, _77._517);
                    _0._459 = _14();
                    _0._349 = +new Date()
                }
                if (_588(_20))
                    _0._700 = _14();
                if (_1086(_40)) {
                    _371();
                    if (_40._5 !== undefined)
                        _40._10[_40._10.length - 1] = 0;
                    _0._10 = _40._10;
                    _0._10[0] = 0;
                    _0._10[1] = 0;
                    if (_40._141 !== undefined)
                        _0._128.push(_40._141);
                    if (_40._5 !== undefined)
                        _0._51.push(_40._5);
                    if (_40._170 !== undefined)
                        _0._157.push(_40._170)
                } else {
                    _0._10 = _0._10.concat(_40._10);
                    if (_40._141 !== undefined)
                        _0._128.push(_40._141);
                    if (_40._5 !== undefined)
                        _0._51.push(_40._5);
                    if (_40._170 !== undefined)
                        _0._157.push(_40._170);
                    if (_20 === _8._381) {
                        _371()
                    }
                }
            }
            function _1086(_40) {
                const _1087 = _773(_0._128) + (_40._141 ? _366.encode(_40._141).length : 0);
                const _1088 = _773(_0._51) + (_40._5 ? _366.encode(_40._5).length : 0);
                const _1089 = _0._10.length + _40._10.length + _1087 + _1088;
                return _1089 > _77._677
            }
            function _513(_512, _189) {
                _670(_15._348, _512, _189)
            }
            function _670(_75, _512, _189=0) {
                var _10 = []
                  , _177 = []
                  , _128 = []
                  , _51 = []
                  , _157 = [];
                let _510 = 0;
                _512.forEach(function(_41, _50) {
                    if (!_41._24)
                        _41._24 = {};
                    _510 = _50 + 1;
                    var _40 = _676(_41._20, _41._24, _177, _51, _510);
                    if (!_40)
                        return;
                    _10 = _10.concat(_40._10);
                    if (_40._141 !== undefined)
                        _128.push(_40._141);
                    if (_40._5 !== undefined)
                        _51.push(_40._5);
                    if (_40._170 !== undefined)
                        _157.push(_40._170)
                });
                const _162 = _806(_189, _10, _128, _51, _157);
                const _1090 = _189 + _510;
                const _508 = {
                    _19: _175 + 'events?w=' + _3._49 + '&s=' + _15._60 + '&p=' + _75 + '&v=' + _197 + '&pst=' + _279() + '&li=' + _1090 + '&lh=0&ls=0'
                };
                if (_3._377) {
                    _508._10 = 'd=' + _162
                } else {
                    _508._19 += '&d=' + _162
                }
                _147(_508)
            }
            function _676(_20, _24, _177, _51, _1091) {
                var _141;
                var _5 = _24.value;
                var _170;
                var _346 = -1;
                var _10 = [];
                _10._771 = false;
                if (_1128(_20) && !_1094(_24))
                    return null;
                if (_24.value && _24.value.length > _77._677) {
                    _7('Event, type: ' + _20 + ', skipping due to large value, details: ' + _11._121(_24), _14());
                    return null
                }
                _144(2, _1091, _10);
                _144(1, _20, _10);
                if (_24.x < 0)
                    _24.x = 0;
                if (_24.y < 0)
                    _24.y = 0;
                if (_24.x > 65534)
                    _24.x = 65534;
                if (_24.y > 65534)
                    _24.y = 65534;
                if (_24.x != undefined)
                    _144(2, _24.x, _10);
                if (_24.y != undefined)
                    _144(2, _24.y, _10);
                if (_24.target != undefined) {
                    if (typeof _24.target == 'object' && _24.target.id != undefined)
                        _24.target = _24.target.id;
                    if (_20 !== _8._94 && _24.target && _24.target.indexOf('||') === -1) {
                        var _1 = _228(_24.target);
                        if (_1) {
                            if (_347(_1))
                                return null;
                            if (_507(_1)) {
                                _24.target = _59(_321(_1, _506))
                            }
                            var _45 = _455(_1);
                            if (_45 && !_347(_45))
                                _24.target = _59(_45) + '||' + _24.target
                        }
                    }
                    for (var _4 = 0; _4 < _177.length; _4++) {
                        if (_177[_4] === _24.target) {
                            _346 = _4;
                            break
                        }
                    }
                }
                if (_1126(_20)) {
                    if (!_24.target) {
                        _144(2, 65535, _10)
                    } else if (_346 === -1) {
                        var _625 = _177.length;
                        _144(2, _625, _10);
                        _141 = _625 + ':' + _24.target;
                        _177.push(_24.target)
                    } else {
                        _144(2, _346, _10);
                        _170 = _346 + ':' + _24.target
                    }
                }
                if (_20 !== _8._379 && _20 !== _8._331)
                    _7('Event, type: ' + _20 + ', time: ' + _14() + ', details: ' + _11._121(_24), _14());
                if (_1127(_20)) {
                    if (_5 instanceof Array)
                        _5 = _5.join(', ');
                    _144(1, _51.length, _10)
                }
                if (_10._771) {
                    _7('Event, type: ' + _20 + ', skipping due to overflow in temp data, details: ' + _11._121(_24), _14());
                    return null
                }
                return {
                    _10: _10,
                    _141: _141,
                    _5: _5,
                    _170: _3._377 ? _170 : undefined
                }
            }
            function _708() {
                return +new Date() - _0._306
            }
            function _1092() {
                const _246 = _504();
                const _311 = _0._578 - (_246.domLoading ?? 0);
                return Math.ceil(_311)
            }
            function _803() {
                const _246 = _504();
                const _311 = (_246.loadEventStart ?? 0) - (_246.fetchStart ?? 0);
                return Math.ceil(_311)
            }
            function _504() {
                const _582 = _2.performance.getEntriesByType('navigation');
                return _582[_582.length - 1] ?? {}
            }
            function _1128(_20) {
                return [_8._380, _8._378, _8._379, _8._343, _8._342, _8._247, _8._262, _8._350, _8._754, _8._67, _8._497, _8._465, _8._381, _8._494, _8._433, _8._432, _8._429, _8._428, _8._619, _8._427, _8._621, _8._426, _8._37, _8._501, _8._331, _8._73, _8._252, _8._594].indexOf(_20) !== -1
            }
            function _1094(_24) {
                return _24.x !== undefined && _24.y !== undefined && !isNaN(_24.x) && !isNaN(_24.y)
            }
            function _1126(_20) {
                return [_8._343, _8._342, _8._247, _8._262, _8._350, _8._499, _8._362, _8._302, _8._572, _8._570, _8._345, _8._94, _8._428, _8._427, _8._426, _8._372, _8._556, _8._557, _8._501, _8._331, _8._73].indexOf(_20) !== -1
            }
            function _1127(_20) {
                return [_8._362, _8._302, _8._372, _8._73].indexOf(_20) !== -1
            }
            function _1130(_20) {
                return _1129(_20) || _588(_20) || _1161(_20)
            }
            function _1129(_20) {
                return [_8._379, _8._343, _8._342, _8._247, _8._378, _8._262, _8._350, _8._331].indexOf(_20) !== -1
            }
            function _588(_20) {
                return [_8._499, _8._362, _8._302, _8._372].indexOf(_20) !== -1
            }
            function _1161(_20) {
                return [_8._497, _8._465, _8._381, _8._494, _8._433, _8._432, _8._429, _8._428, _8._619, _8._427, _8._621, _8._426].indexOf(_20) !== -1
            }
            function _622() {
                if (!_185(_370(), _0._190)) {
                    _0._190 = _370();
                    _29(_8._380, _0._190);
                    _0._435 = _14()
                }
                if (!_185(_0._153, _0._608)) {
                    _0._608 = _0._153;
                    _29(_8._379, _0._153)
                }
                if (!_185(_0._104, _0._301)) {
                    _0._301 = _0._104;
                    _29(_8._378, _0._104);
                    _0._415 = _14()
                }
                var _1162 = _2.visualViewport ? _2.visualViewport.scale : 1;
                var _416 = {
                    x: _105.round(_105.min(_1162, 10) * 1000),
                    y: _105.round(_105.min(_2.devicePixelRatio, 10) * 1000)
                };
                if (!_185(_416, _0._595)) {
                    _29(_8._594, _416);
                    _0._595 = _416
                }
                if (_2.visualViewport) {
                    var _252 = {
                        x: _2.visualViewport.offsetLeft,
                        y: _2.visualViewport.offsetTop
                    };
                    if (!_185(_252, _0._599)) {
                        _29(_8._252, _252);
                        _0._599 = _252
                    }
                }
            }
            function _1163() {
                if (!_185(_0._153, _0._602)) {
                    _0._602 = _0._153;
                    var _727 = _12.elementFromPoint(_0._153.x - _0._104.x, _0._153.y - _0._104.y);
                    var _166 = _417(_727, _0._153.x, _0._153.y);
                    if (_166) {
                        _29(_8._331, {
                            x: _166.x,
                            y: _166.y,
                            target: _59(_727)
                        })
                    }
                }
            }
            function _371() {
                var _189 = _0._306 - _0._76;
                _0._703 += _0._10.length;
                if (_0._703 > _77._702 && !_0._800) {
                    _0._800 = true;
                    _7('Recording event limit of ' + _77._702 + ' reached. Stopping recording.', _14());
                    _65()
                }
                var _162 = _806(_189, _0._10, _0._128, _0._51, _0._157);
                _0._130.push(_162);
                _0._10 = [];
                _0._51 = [];
                _0._128 = [];
                _0._157 = [];
                _0._306 = +new Date();
                if (_14() > _77._1164) {
                    _7('Pageview over max.time, stopping.', _14());
                    _802();
                    _25._203(_420);
                    _25._203(_421);
                    _25._203(_425);
                    _25._146(_305);
                    _243 = false
                } else {
                    _1166()
                }
            }
            function _806(_189, _10, _128, _51, _157) {
                var _304 = [];
                _144(3, _189, _304);
                _144(2, _10.length, _304);
                _304 = _304.concat(_10);
                let _810 = _1139.e(_304) + '.' + _461(_128 || []) + '.' + _461(_51 || []);
                if (_3._377) {
                    const _1165 = [...new Set(_157 || [])].filter(_36 => !_128.includes(_36));
                    _810 += '.' + _461(_1165)
                }
                return _810
            }
            function _1166() {
                if (_243 && _0._130.length > 0) {
                    if (_0._300 == 1) {
                        _15._303++
                    }
                    var _82 = _15._382 ? _451() : [];
                    for (let _4 = 0; _4 < _0._130.length; _4++) {
                        const _460 = {
                            _19: _175 + 'events?w=' + _3._49 + '&s=' + _15._60 + '&p=' + _15._75 + '&v=' + _197 + '&pst=' + _279() + '&q=' + _0._300 + '&li=' + _0._815 + '&lh=' + _0._799 + '&ls=' + _0._797
                        };
                        if (_3._377) {
                            _460._10 = 'd=' + _0._130[_4]
                        } else {
                            _460._19 += '&d=' + _0._130[_4]
                        }
                        _82.push(_460);
                        _0._300++;
                        _0._815 = _0._459;
                        _0._799 = _0._190.y;
                        _0._797 = _0._301.y
                    }
                    _0._130 = [];
                    if (_15._382 && _785(_82.slice(-10))) {
                        _783()
                    } else {
                        for (let _4 = 0; _4 < _82.length; _4++) {
                            _147(_82[_4])
                        }
                    }
                    if (_0._300 > _77._1167)
                        _65()
                }
            }
            function _783() {
                if (_0._453)
                    return;
                var _17 = _451().slice(0, 1)[0];
                if (_17) {
                    _0._453 = true;
                    _17._135 = _17._67 = function() {
                        _785(_451().slice(1));
                        _0._453 = false;
                        _25._71(_783, 1)
                    }
                    ;
                    _147(_17)
                }
            }
            function _451() {
                return (_184._231('mf_transmitQueue') || []).map(a => ({
                    _19: a.url,
                    _10: a.data
                }))
            }
            function _785(_82) {
                return _184._253('mf_transmitQueue', _82.map(a => ({
                    url: a._19,
                    data: a._10
                })))
            }
            function _147(_17) {
                if (!_17?._19) {
                    if (_17?._67)
                        _17._67();
                    return
                }
                _449();
                if (_1176() && _2.XDomainRequest) {
                    _1169(_17)
                } else if (_2.XMLHttpRequest) {
                    if (_17._10 && _17._259) {
                        var _1168 = _3.compressFunction || _259;
                        _1168(_17._10, function(_10) {
                            _17._10 = _10;
                            _17._19 = _376(_17._19, '1');
                            _463(_17)
                        }, function() {
                            _17._19 = _376(_17._19, '0');
                            _463(_17)
                        })
                    } else {
                        _17._19 = _376(_17._19, '0');
                        _463(_17)
                    }
                }
            }
            function _1169(_17) {
                try {
                    _17._19 = _1177(_376(_17._19, '0'));
                    var _134 = new _2.XDomainRequest();
                    _134.open(_17._10 ? 'POST' : 'GET', _17._19);
                    _134.onload = function() {
                        if (_17._135)
                            _17._135(_789(_134))
                    }
                    ;
                    _134.onerror = function() {
                        if (_17._67)
                            _17._67(_789(_134))
                    }
                    ;
                    _134.onprogress = function() {
                        _7('XDR progress:' + _17._19, _14())
                    }
                    ;
                    _134.ontimeout = function() {
                        _7('XDR timeout:' + _17._19, _14())
                    }
                    ;
                    _134.timeout = 20000;
                    _25._71(function() {
                        _134.send(_17._10)
                    }, 500)
                } catch (_57) {
                    _7('Error in transmitCrossDomain (XDomainRequest): ' + _57.message, _14());
                    if (_17._67)
                        _17._67({})
                }
            }
            function _463(_17) {
                try {
                    var _84 = new _2.XMLHttpRequest();
                    _84.onreadystatechange = function() {
                        if (_84.readyState !== 4 || !_84.status)
                            return;
                        if (_1183(_84.status)) {
                            if (_17._135)
                                _17._135(_792(_84))
                        } else {
                            if (_17._67)
                                _17._67(_792(_84))
                        }
                    }
                    ;
                    _84.open(_17._10 ? 'POST' : 'GET', _17._19, true);
                    _84.setRequestHeader('Content-type', 'text/plain');
                    if (_17._1170)
                        _84.withCredentials = true;
                    _84.send(_17._10)
                } catch (_57) {
                    _7('Error in transmitCrossDomain (XMLHttpRequest): ' + _57.message, _14());
                    if (_17._67)
                        _17._67({})
                }
            }
            function _789(_134) {
                return {
                    _340: _134.responseText
                }
            }
            function _792(_84) {
                return {
                    _445: _84.status,
                    _340: _84.response
                }
            }
            function _259(_10, _135, _67) {
                if (!_2.CompressionStream) {
                    if (_67)
                        _67();
                    return
                }
                var _1171 = new _2.TextEncoder();
                var _1174 = new _2.ReadableStream({
                    start(_807) {
                        _807.enqueue(_1171.encode(_10));
                        _807.close()
                    }
                }).pipeThrough(new _2.CompressionStream('gzip'));
                var _1172 = _1174.getReader();
                var _130 = [];
                var _214 = 0;
                _819();
                function _819() {
                    _1172.read().then(function(_162) {
                        if (_162.value) {
                            _130.push(_162.value);
                            _214 += _162.value.length
                        }
                        if (_162.done) {
                            _1173()
                        } else {
                            _819()
                        }
                    }).catch(_67)
                }
                function _1173() {
                    var _32;
                    if (_130.length === 1) {
                        _32 = _130[0]
                    } else {
                        _32 = new Uint8Array(_214);
                        var _840 = 0;
                        _130.forEach(function(_5) {
                            _32.set(_5, _840);
                            _840 += _5.length
                        })
                    }
                    if (_135)
                        _135(_32)
                }
            }
            function _376(_19, _5) {
                return /\/(html|dom)/.test(_19) ? _19 + (_19.indexOf('?') === -1 ? '?' : '&') + 'gz=' + _5 : _19
            }
            function _375(_20, _10) {
                _147({
                    _19: _175 + 'data',
                    _10: 'website=' + _3._49 + '&session=' + _15._60 + '&page=' + _15._75 + '&type=' + _20 + '&pst=' + _279() + '&canonicalPage=' + _88._131() + '&data=' + _108(_11._121(_10))
                })
            }
            function _1183(_445) {
                return _445 >= 200 && _445 < 300
            }
            function _1176() {
                return _12.all && !_2.atob;
            }
            function _746() {
                return _12.all && !_12.addEventListener;
            }
            function _1177(_19) {
                return _19.replace(/^https?:/i, _3.location.protocol)
            }
            function _1179(_37) {
                var _374 = _11._121(_37._10);
                if (_374 && _374.length > _3._1180) {
                    _7('DOM size too big, not sending, size: ' + _11._239(_374.length), _14());
                    _94('mf_secret_html-too-big');
                    return
                }
                var _207 = _108(_374);
                var _1181 = 5242000;
                var _289 = _207.length <= _1181;
                var _17 = {
                    _19: _175 + 'html' + '?website=' + _37._53._49 + '&session=' + _37._53._60 + '&page=' + _37._53._75,
                    _10: 'size=' + _37._172 + '&html=' + _207 + '&pst=' + _279() + '&canonicalPage=' + _108(_88._131()),
                    _259: _3.compress
                };
                if (_15._382 && _289) {
                    var _82 = _835();
                    if (_207 !== '') {
                        _7('Adding initial DOM to queue, size: ' + _11._239(_207.length), _14());
                        _82.push(_17)
                    } else
                        _7('Initial DOM empty, not sending', _14());
                    if (_829(_82.slice(-10)))
                        _830();
                    else {
                        _831(_17, _289, _207.length)
                    }
                } else {
                    if (_207 == '') {
                        _7('Initial DOM empty, not sending', _14());
                        return
                    }
                    _831(_17, _289, _207.length)
                }
            }
            function _830() {
                var _82 = _835();
                var _17 = _82.splice(0, 1)[0];
                if (_17) {
                    _7('Sending initial DOM mutations. Size: ' + _17._10.length, _14());
                    _17._135 = _17._67 = function() {
                        _829(_82);
                        _25._71(_830, 1)
                    }
                    ;
                    _147(_17)
                }
            }
            function _831(_17, _289, _833) {
                if (_289) {
                    _7('Transmitting initial DOM without queue due to no sessionstorage, size: ' + _11._239(_833), _14())
                } else {
                    _7('Transmitting initial DOM without queue due too big html, size: ' + _11._239(_833), _14())
                }
                _147(_17)
            }
            function _835() {
                return (_184._231('mf_initialDomQueue') || []).map(a => ({
                    _19: a.url,
                    _10: a.data,
                    _259: a.compress
                }))
            }
            function _829(_82) {
                return _184._253('mf_initialDomQueue', _82.map(a => ({
                    url: a._19,
                    data: a._10,
                    compress: a._259
                })))
            }
            function _1175(_37) {
                var _180 = _37._10.args[1].some(function(_125) {
                    return _484._180(_125)
                });
                if (_180) {
                    _7('DOM mutation is a duplicate and has not been added.', _14());
                    return
                }
                var _820 = _1160(_37, _0._204);
                if (_820 > -1) {
                    _0._204[_820]._10 = _37._10;
                    _7('Deduplicating DOM mutation', _14());
                    return
                }
                if (_3.domReuse) {
                    var _373 = _1182(_37);
                    var _826 = _1185(_373);
                    if (_826 > -1) {
                        _37.sequence = _826;
                        _7('Reusing already sent DOM mutation, sequence ' + _37.sequence, _14());
                        _29(_8._37, {
                            x: _37.sequence,
                            y: 0
                        });
                        return
                    } else
                        _0._440.push(_373)
                }
                _37.sequence = ++_0._1184;
                _29(_8._37, {
                    x: _37.sequence,
                    y: 0
                });
                _0._204.push(_37);
                if (!_287)
                    _287 = _25._71(_790, 1500)
            }
            function _1185(_373) {
                for (var i = 0; i < _0._440.length; i++)
                    if (_0._440[i] == _373)
                        return i + 1;
                return -1
            }
            function _1182(_37) {
                return _119(_11._121(_37._10))
            }
            function _790() {
                _287 = 0;
                if (_243 && _0._204.length > 0) {
                    var _729 = _0._204.length;
                    var _248 = _0._204.map(function(_37) {
                        return {
                            _53: 'website=' + _37._53._49 + '&session=' + _37._53._60 + '&page=' + _37._53._75 + '&pst=' + _279(),
                            _10: _37.sequence + '.' + _1178(_11._121(_37._10))
                        }
                    }).filter(function(_37) {
                        return _37._10.length
                    }).reduce(function(_248, _37) {
                        var _439 = _248[_37._53];
                        if (!_439)
                            _439 = _248[_37._53] = [];
                        _439.push(_37._10);
                        return _248
                    }, {});
                    _0._204 = [];
                    Object.keys(_248).forEach(function(_53) {
                        var _10 = _248[_53].join('|||');
                        _10 = _53 + '&data=' + _108(_10);
                        _147({
                            _19: _175 + 'dom',
                            _10: _10,
                            _259: _3.compress
                        });
                        _7('Sending DOM mutations: ' + _729 + ', size: ' + _10.length, _14());
                        _0._730 += _729;
                        if (_0._730 > _77._731) {
                            _7('DOM mutation limit of ' + _77._731 + ' reached. Stopping recording.', _14());
                            _65()
                        }
                    })
                }
            }
            function _1160(_91, _732) {
                if (!_3.domDeduplicator)
                    return -1;
                var _102 = _91._10.args;
                var _733 = _735(_102);
                var _734 = _736(_102);
                if (!_733 && !_734)
                    return -1;
                for (var i = 0; i < _732.length; i++) {
                    var _438 = _732[i]._10.args;
                    if (_733 && _735(_438) && _1157(_102[2], _438[2])) {
                        return i
                    } else if (_734 && _736(_438)) {
                        return i
                    }
                }
                return -1
            }
            function _735(_102) {
                return _737(_102) && _102[2].filter(_946).length === _102[2].length
            }
            function _736(_102) {
                return _737(_102) && _102[2].filter(_1158).length === _102[2].length
            }
            function _737(_102) {
                return _102[0].length === 0 && _102[1].length === 0 && _102[2].length > 0 && _102[3].length === 0
            }
            function _946(_328) {
                return _328.attributes.style && _719(_328.attributes) === 1
            }
            function _1158(_328) {
                return _328.attributes.d && _719(_328.attributes) === 1
            }
            function _719(obj) {
                var count = 0;
                for (var prop in obj)
                    if (Object.prototype.hasOwnProperty.call(obj, prop))
                        count++;
                return count
            }
            function _1157(_414, _705) {
                if (_414.length !== _705.length)
                    return false;
                for (var i = 0; i < _414.length; i++) {
                    var _1159 = _414[i]
                      , _1131 = _705[i];
                    if (_1159.id !== _1131.id)
                        return false
                }
                return true
            }
            function _450() {
                if (_0._10.length > 0 && _708() >= 5000) {
                    _29(_8._450, {});
                    _371()
                }
            }
            function _129() {
                _7('Inactivity timeout.', _14());
                _65(true)
            }
            function _185(_139, _710) {
                return _139.x == _710.x && _139.y == _710.y
            }
            function _370() {
                return {
                    x: _2.innerWidth,
                    y: _2.innerHeight
                }
            }
            function _712(_211) {
                if (!_211 || !_211.getBoundingClientRect)
                    return null;
                var _188 = _211.getBoundingClientRect();
                var _325;
                if (!_211.childElementCount && !_188.height && !_188.width)
                    _325 = _1132(_211);
                if (!_325) {
                    return {
                        x: _188.left,
                        y: _188.top,
                        width: _188.width,
                        height: _188.height
                    }
                } else {
                    _325.x += _188.left - _211.offsetLeft;
                    _325.y += _188.top - _211.offsetTop;
                    return _325
                }
            }
            function _1132(_1) {
                var _224 = window.getComputedStyle(_1, [':after']);
                if (!_224)
                    return _224;
                return {
                    x: +_224.left.slice(0, -2),
                    y: +_224.top.slice(0, -2),
                    width: +_224.width.slice(0, -2),
                    height: +_224.height.slice(0, -2)
                }
            }
            function _59(_1) {
                var _330 = _368.get(_1);
                if (_330)
                    return _330;
                try {
                    var _36 = [];
                    while (_1) {
                        var _33 = _1.getRootNode ? _1.getRootNode() : _12;
                        _36.unshift(_1133(_1, _33) || _1134(_1, _33));
                        _1 = _33.host
                    }
                    return _36.join(' > :document-fragment: > ')
                } catch (_57) {
                    _7('Error in getElementPath: ' + _57.message, _14())
                }
                return ''
            }
            function _1133(_1) {
                var name = _1.attributes?.['name'] ? _1.attributes['name'].value : null;
                if (name && _455(_1) && /button|input|select|textarea/.test(_1.tagName.toLowerCase())) {
                    var _369 = _12.getElementsByName(name);
                    if (_369.length === 1)
                        return name;
                    if (_369.length > 1) {
                        for (var _4 = 0; _4 < _369.length; _4++)
                            if (_1 === _369[_4])
                                return name + '[' + _4 + ']_mf'
                    }
                }
                return null
            }
            function _1134(_64, _33) {
                var _26 = [];
                try {
                    while (_64 && _64.nodeType === 1) {
                        var _9 = '';
                        var _78 = _28._89(_64);
                        if (!_78)
                            return '';
                        var _330 = _368.get(_64);
                        if (_330) {
                            _26.unshift(_330);
                            break
                        }
                        if (_64.tagName === 'TABLE' && _26.indexOf('tbody') === -1 && _26.indexOf('thead') === -1)
                            _26.unshift('tbody');
                        if (_64.getAttribute('id') && !_11._187(_64, 'data-mf-ignore-child-ids') && _3.useIdSelectors) {
                            _9 += '#' + _64.getAttribute('id');
                            _26.unshift(_9);
                            break
                        } else {
                            _9 += _64.tagName.toLowerCase();
                            var _367 = ''
                              , _456 = _64
                              , _258 = 1;
                            if (_78 && _78.tagName && _78.tagName.toLowerCase() == 'body') {
                                var _112 = _11._220(_64);
                                _367 = _112.length ? '.' + _112.join('.') : ''
                            }
                            if (_367 !== '' && _33.querySelectorAll(_767('body > ' + _9 + _367)).length === 1)
                                _9 += _367;
                            else {
                                while ((_456 = _456.previousElementSibling)) {
                                    if (_456.tagName.toLowerCase() === _9)
                                        _258++
                                }
                                if (_258 !== 1)
                                    _9 += ':[' + _258 + ']'
                            }
                        }
                        _26.unshift(_9);
                        _64 = _78
                    }
                } catch (_57) {
                    _7('Error in _getCssPath: ' + _57.message, _14())
                }
                return _26.join(' > ').replace('html > body > ', '> ')
            }
            function _228(_36, _1135=true) {
                if (!_36)
                    return null;
                var _1 = _1136(_36);
                if (!_1) {
                    try {
                        var _33 = _12;
                        _767(_36).split(' > :document-fragment: > ').forEach(function(_9) {
                            _1 = _33.querySelector(_9);
                            _33 = _1.shadowRoot
                        })
                    } catch (_57) {
                        if (_1135)
                            _7('Error in _getElementById: ' + _57.message, _14())
                    }
                }
                return _1
            }
            function _1136(_22) {
                if (!_22)
                    return null;
                var _70 = _766.exec(_22);
                if (_70 && _70[1]) {
                    try {
                        var _50 = _2.parseInt(_70[1]);
                        return _12.getElementsByName(_22.replace(_766, ''))[_50]
                    } catch (_57) {}
                }
                var _56 = _12.getElementsByName(_22);
                if (_56 && _56.length === 1)
                    return _56[0];
                return null
            }
            function _767(_26) {
                if (!_26)
                    return null;
                if (_26.substr(0, 1) === '>')
                    _26 = 'html > body ' + _26;
                _26 = _26.replace(/^(\d)/, '\\3$1 ');
                _26 = _26.replace(/#(\d)/, '#\\3$1 ');
                _26 = _26.replace(/#(-\d)/, '#\\$1');
                _26 = _26.replace(/:(?!\[)/g, '\\:');
                _26 = _26.replace(/\\:document-fragment\\:/g, ':document-fragment:');
                _26 = _26.replace(/^#\S+/, function(_70) {
                    return _70.replace(/\./g, '\\.');
                });
                _26 = _26.replace(/:\[([^\]]+)\]/g, ':nth-of-type($1)');
                _26 = _26.replace(/([{}[\]/;%$~@&<*^])/g, '\\$1');
                return _26
            }
            function _144(_1137, _5, _323) {
                for (var _4 = _1137 - 1; _4 > 0; _4--) {
                    var _777 = _105.pow(256, _4);
                    _770(_105.floor(_5 / _777), _323);
                    _5 = _5 % _777
                }
                _770(_5, _323)
            }
            function _770(_772, _323) {
                if (_772 > 255) {
                    _323._771 = true;
                    return
                }
                _323.push(_772)
            }
            function _461(_1) {
                var _32 = '';
                for (var _4 = 0; _4 < _1.length; _4++) {
                    _32 += (_4 > 0 ? ',' : '') + _366.encode('' + _1[_4])
                }
                return _32
            }
            function _773(_1) {
                var _172 = 0;
                for (var _4 = 0; _4 < _1.length; _4++)
                    _172 += _366.encode('' + _1[_4]).length + 1;
                return _172 > 0 ? _172 - 1 : _172
            }
            function _774(_22, _5, _221, _31) {
                if (_3.preferStorageApi)
                    _55._126(_22, _5);
                else
                    _283._126(_22, _5, _221, _31)
            }
            function _775(_22) {
                if (_3.preferStorageApi)
                    return _55._158(_22) || '';
                else
                    return _283._158(_22)
            }
            function _1138(_22) {
                if (_3.preferStorageApi) {
                    _184._254(_22);
                    _55._254(_22)
                } else {
                    _283._254(_22)
                }
            }
            var _1139 = new function() {
                for (var d = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'.split(''), c = 64; c; )
                    --c;
                this.e = function(e) {
                    let a = [], f = 0, b = 0, g, c = e.length, h = c % 3;
                    for (; f < c; )
                        a[b++] = d[(g = e[f++] << 16 | e[f++] << 8 | e[f++]) >> 18 & 63] + d[g >> 12 & 63] + d[g >> 6 & 63] + d[g & 63];
                    if (h)
                        for (a[--b] = a[b].substr(0, a[b].length - (h = 3 - h)); h--; )
                            a[b] += '*';
                    return a.join('')
                }
            }
            ;
            var _366 = {
                _365: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
                encode: function(c) {
                    for (var a = '', d, b, e, i, h, f, g = 0, c = this._1140(c); g < c.length; )
                        d = c.charCodeAt(g++),
                        b = c.charCodeAt(g++),
                        e = c.charCodeAt(g++),
                        i = d >> 2,
                        d = (d & 3) << 4 | b >> 4,
                        h = (b & 15) << 2 | e >> 6,
                        f = e & 63,
                        isNaN(b) ? h = f = 64 : isNaN(e) && (f = 64),
                        a = a + this._365.charAt(i) + this._365.charAt(d) + this._365.charAt(h) + this._365.charAt(f);
                    return a
                },
                _1140: function(c) {
                    for (var c = c.replace(/\r\n/g, '\n'), a = '', d = 0; d < c.length; d++) {
                        var b = c.charCodeAt(d);
                        128 > b ? a += String.fromCharCode(b) : (127 < b && 2048 > b ? a += String.fromCharCode(b >> 6 | 192) : (a += String.fromCharCode(b >> 12 | 224),
                        a += String.fromCharCode(b >> 6 & 63 | 128)),
                        a += String.fromCharCode(b & 63 | 128))
                    }
                    return a
                }
            };
            function _424() {
                var _139 = function() {
                    return ((1 + _105.random()) * 65536 | 0).toString(16).substring(1)
                };
                return _139() + _139() + _139() + _139() + _139() + _139() + _139() + _139()
            }
            var _431 = 0;
            function _804() {
                if (_12.body) {
                    _7('Initializing recorder');
                    if (!_1141())
                        return;
                    if (_1142)
                        _1143(_745);
                    else
                        _745();
                    return
                }
                _431++;
                if (_431 === 1) {
                    _7('Retrying to initialize recorder - document.body is not set', _14())
                } else if (_431 === 25) {
                    _7('Failed to initialize recorder', _14());
                    return
                }
                _25._71(_804, 200)
            }
            function _745() {
                _7('Initializing recorder', _14());
                if (!_763(_3.location.hostname))
                    return;
                if (_746()) {
                    _7('Recording not started - browser is IE8 or older', _14());
                    return
                }
                if (_748)
                    _1144();
                if (_748 || _1145)
                    return;
                _750 = true;
                function _751() {
                    if (!_101 && _3.autoStart && _12.readyState !== 'loading')
                        _35();
                    _548(_803())
                }
                _23._39(_12, 'readystatechange', _751);
                _751()
            }
            function _548(_311) {
                if (_525 || !_101 || _12.readyState !== 'complete')
                    return;
                _29(_8._754, {
                    x: _311,
                    y: _364 ? _364.scrollHeight : _11._515()
                });
                _525 = true
            }
            function _1146() {
                return _3.useUnload ? 'unload' : 'beforeunload'
            }
            function _284(_756, _755) {
                return _756.indexOf(_755, _756.length - _755.length) !== -1
            }
            function _119(_43) {
                var _122 = 0, _747;
                for (var _4 = 0; _4 < _43.length; _4++) {
                    _747 = _43.charCodeAt(_4);
                    _122 = ((_122 << 5) - _122) + _747
                }
                return _122.toString()
            }
            function _742(_16) {
                for (var _4 = 0; _4 < _0._159.length; _4++)
                    if (_0._159[_4].split('_')[0] === _119(_16)) {
                        return _4
                    }
                return -1
            }
            function _744(_16, _5) {
                var _553 = _742(_16);
                var _538 = _119('' + _5);
                if (_553 > -1) {
                    if (_0._159[_553].split('_')[1] === _538) {
                        return false
                    }
                    _0._159[_553] = _119(_16) + '_' + _538
                } else if (_0._159.length < 20) {
                    _0._159.push(_119(_16) + '_' + _538)
                }
                return true
            }
            function _763(_31) {
                var _1147 = _31;
                _31 = _532(_31);
                var _739 = false;
                for (let _4 = 0; _4 < _269.length; _4++) {
                    if (_31 == _532(_269[_4])) {
                        _739 = true;
                        break
                    }
                }
                _31 = _1148(_31);
                var _709 = false;
                for (let _4 = 0; _4 < _269.length; _4++) {
                    if (_31 == _532(_269[_4])) {
                        _709 = true;
                        break
                    }
                }
                var _32 = _739 || _709;
                if (!_32)
                    _7('Domain was blocked: ' + _1147 + ' - domain list: ' + _269, _14());
                return _32
            }
            function _532(_31) {
                if (_31 == null)
                    return '';
                _31 = _31.toLowerCase();
                _31 = _31.replace(/^\s+|\s+$/g, '');
                if (_31.substring(0, 4) == 'www.') {
                    _31 = _31.substring(4, _31.length)
                }
                return _31
            }
            function _1148(_31) {
                if (_3.includeSubDomains) {
                    _31 = _1149(_31)
                }
                return _31
            }
            function _1149(_31) {
                var _137 = _31.split('.');
                if (_137.length <= 2)
                    return _31;
                if (_31.indexOf('.co.') > -1 || _31.indexOf('.com.') > -1 || _31.indexOf('.org.') > -1) {
                    _137 = _137.slice(_137.length - 3, _137.length);
                    return _137.join('.')
                }
                _137 = _137.slice(_137.length - 2, _137.length);
                return _137.join('.')
            }
            function _1150() {
                var _32 = [];
                if (typeof Ember != 'undefined')
                    _32.push('em');
                if (typeof angular != 'undefined')
                    _32.push('an');
                if (typeof Backbone != 'undefined')
                    _32.push('bb');
                return _32
            }
            function _1151() {
                if (_3.autoTagging) {
                    _7('Autotagging session', _14());
                    var _837 = ['utm_source', 'utm_medium', 'utm_term', 'utm_content', 'utm_campaign', 'gclid'];
                    for (var _4 = 0; _4 < _837.length; _4++) {
                        var _539 = _837[_4];
                        var _5 = _828(_3.location.href, _539);
                        if (!_5)
                            _5 = _828(_3.referrer, _539);
                        if (_5)
                            _120._722(['setVariable', _539, _5])
                    }
                }
            }
            function _828(_19, _22) {
                _22 = _22.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
                var regex = new RegExp('[\\?&]' + _22 + '=([^&#]*)')
                  , results = regex.exec(_19);
                return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))
            }
            const nonWordCharactersRegex = /[\s"'.,_\-+/*:=!?@#%&{}[\]\\|]/;
            function _1152(_541) {
                return !nonWordCharactersRegex.test(_541)
            }
            function _1153(_5, _537) {
                var _32 = '';
                for (var _4 = 0; _4 < _537; _4++) {
                    _32 += _5
                }
                return _32
            }
            function _279() {
                return _0._793 || _0._76
            }
            function _14() {
                return +new Date() - _0._76
            }
            function _1154(urlLength) {
                var _201 = _3.location.href;
                var _798 = _77._796 - urlLength - 6;
                if (_108(_201).length > _798)
                    _201 = _201.split('#')[0];
                if (_108(_201).length > _798)
                    _201 = _201.split('?')[0];
                return _108(_201)
            }
            function _1155(_18) {
                var _1156 = _18 instanceof Element;
                if (!_1156)
                    return false;
                var _808 = _2.getComputedStyle(_18);
                var _547 = _808 ? _808['white-space'] : '';
                if (_547 && (_547.indexOf('pre') > -1 || _547 === 'break-spaces'))
                    return true;
                return false
            }
            _804();
            this.start = function() {
                _35();
                _548(_803())
            }
            ;
            this.stop = _65;
            this.newPageView = _549;
            this.stopSession = _1068;
            this.getSessionId = function() {
                return _15._60
            }
            ;
            this.getPageViewId = function() {
                return _15._75
            }
            ;
            this.tag = _94;
            this.star = _1093;
            this.setVariable = _1066;
            this.identify = _1065;
            this.formSubmitAttempt = _1067;
            this.formSubmitSuccess = _526;
            this.formSubmitFailure = _620;
            this.addFriction = function(_5, _22) {
                _156({
                    _5: _5,
                    _617: _22,
                    _129: 0
                })
            }
            ;
            this.isRecording = function() {
                return _243
            }
            ;
            this.isReturningUser = function() {
                return _15._268
            }
            ;
            this.activateFeedback = _476;
            this.proxyAttachShadow = _361;
            this.recordingRate = _241;
            this.version = _197;
            this.lastUpdate = _979;
            this.isCreditCard = _263;
            this.pageNotFound = function() {
                _156(_90._527)
            }
        }
        function _682(_28, _3) {
            var _628 = [];
            function _180(_125) {
                if (!_3.domMutationDetectorEnable || !_125 || _125.nodeType !== 1)
                    return false;
                var _78 = _28._89(_125);
                var _564 = _78 ? _78.id : undefined;
                var _558 = _125.previousSibling ? _125.previousSibling.id : undefined;
                var _980 = _125.tagName;
                var _587 = _125.attributes ? _125.attributes.id : undefined;
                var _585 = _125.attributes ? _125.attributes.class : undefined;
                var _16 = _980;
                if (_3.domMutationUseParentNode && _564)
                    _16 += '_' + _564;
                if (_3.domMutationUsePreviousSibling && _558)
                    _16 += '_' + _558;
                if (_587)
                    _16 += '_' + _587;
                if (_585)
                    _16 += '_' + _585.replace(/\s/g, "_");
                var _675 = +new Date();
                var _91 = _628[_16];
                var _536 = _91 ? _91._537 : 0;
                var _981 = _91 ? ((_675 - _91._982) / 1000) : 0;
                var _580 = _536 < _3.domMutationCountThreshold;
                var _574 = _981 < _3.domMutationTimeThresholdInSeconds;
                var _180 = _91 ? (_580 && _574) : false;
                if (!_580 || !_574)
                    _536 = 0;
                _628[_16] = {
                    _982: _675,
                    _537: _536 + 1
                };
                return _180
            }
            this._180 = _180
        }
        function _1032(_2, _3, _95, _11, _23, _88, _55) {
            var _47, _49, _7, _98;
            var _336 = 'mf_liveHeatmaps';
            var _42;
            var _294 = [];
            var _138;
            var _334 = false;
            function _35(_293, _216, _313, _181) {
                _49 = _293;
                _47 = _313;
                _7 = _216;
                _334 = window.location.search.indexOf('mf_legacy=1') !== -1 ? true : false;
                _7('Live heatmaps starting');
                _98 = _95._225();
                if (!_98) {
                    _7('Live heatmaps not initiated - could not create root HTML element');
                    return
                }
                if (!_2.opener) {
                    _7('Live heatmaps not initiated - window.opener is missing');
                    return
                }
                if (typeof _181 === 'function') {
                    _181(function() {
                        _208()
                    })
                } else {
                    _208()
                }
            }
            function _65() {
                _401()
            }
            function _208() {
                _23._39(_2, 'message', function(_41) {
                    if (_41.origin !== _47)
                        return;
                    _320(_41.data);
                    switch (_41.data.message) {
                    case 'MouseflowLiveHeatmaps_Init_Received':
                        _2.clearInterval(_138);
                        break;
                    case 'MouseflowLiveHeatmaps_Init_Success':
                    case 'MouseflowLiveHeatmaps_Hello':
                        _100(_41.data);
                        _315(_41.data.scripts, function() {
                            var message;
                            if (_334) {
                                message = {
                                    mfCommand: 'settings',
                                    value: {
                                        websiteSettings: _41.data.websiteSettings
                                    }
                                }
                            } else {
                                _646();
                                message = {
                                    mfCommand: 'settings_liveheatmap',
                                    value: _42
                                }
                            }
                            _528(JSON.stringify(message))
                        });
                        break;
                    case 'MouseflowLiveHeatmaps_StreamData_Chunk':
                        _314(_41.data.requestUrl, true)._551(_41.data.dataChunk);
                        break;
                    case 'MouseflowLiveHeatmaps_StreamData_Success':
                        _314(_41.data.requestUrl)._149();
                        break;
                    case 'MouseflowLiveHeatmaps_StreamData_Error':
                        _314(_41.data.requestUrl)._198();
                        break;
                    case 'MouseflowLiveHeatmaps_RequestData_Success':
                        _314(_41.data.requestUrl)._149(_41.data.responseText);
                        break;
                    case 'MouseflowLiveHeatmaps_RequestData_Error':
                        _314(_41.data.requestUrl)._198();
                        break
                    }
                });
                _138 = _2.setInterval(_297, 500);
                _2.setTimeout(function() {
                    _2.clearInterval(_138)
                }, 10000);
                _297()
            }
            function _297() {
                _183({
                    message: 'MouseflowLiveHeatmaps_Init',
                    websiteId: _49,
                    legacy: _334
                })
            }
            function _100(_100) {
                _42 = _694();
                var _319 = _692();
                var _338 = _3.location.search.match(/mf_liveHeatmaps=([^&]+)/);
                var _535 = typeof _2.name === 'string' && _2.name.indexOf('mf_liveHeatmaps') === 0 ? _2.name.slice(15).split('_') : [];
                var _983 = _338 || _535[1] === 'init';
                if (_42 && !_983) {
                    _42.filters.url = _319.url;
                    _87(_42);
                    return
                }
                _42 = {
                    isMinimized: false,
                    appUrlBase: _47,
                    websiteId: _49,
                    filters: _319,
                    minDate: _100.minDate,
                    filteredViews: _100.filteredViews,
                    user: _100.user,
                    website: _100.website,
                    mutedEvents: _100.mutedEvents,
                    muteAvailable: _100.muteAvailable,
                    supportedLanguages: _100.supportedLanguages
                };
                if (_100.filters && _100.filters.view) {
                    _42.selectedFilteredView = _100.filters.view;
                    delete _100.filters.view
                }
                if (_100.filters) {
                    Object.keys(_100.filters).forEach(function(_16) {
                        var _5 = _100.filters[_16];
                        if (_5 instanceof Date)
                            _5 = _332(_5);
                        _42.filters[_16] = _5
                    })
                }
                if (_338 && _338[1] !== '1')
                    _42.filters.maptype = _338[1];
                else if (_535[2])
                    _42.filters.maptype = _535[2];
                _87(_42);
                _2.name = 'mf_liveHeatmaps'
            }
            function _646() {
                _42.devices = _42.filters.device ? _42.filters.device.and || _42.filters.device.or : [];
                _42.mapType = _42.filters.maptype;
                _42.url = _42.filters.url = _88._131();
                _183({
                    message: 'MouseflowLiveHeatmaps_SetSettings',
                    settings: _42
                })
            }
            function _315(_160, _66) {
                if (!_160)
                    return;
                var _217 = 0;
                function _318() {
                    if (_217 >= _160.length) {
                        _66();
                        return
                    }
                    var _68 = _160[_217];
                    _423(_68);
                    _217++;
                    var _161 = document.createElement('script');
                    if (_68.startsWith('/'))
                        _161.src = _47 + _68;
                    else
                        _161.src = _47 + '/' + _68;
                    _161.onload = _318;
                    _98.appendChild(_161)
                }
                _318()
            }
            function _694() {
                return _55._231(_336)
            }
            function _87(_42) {
                if (_7)
                    _7('Live heatmaps saving settings');
                _55._253(_336, _42)
            }
            function _401() {
                if (_7)
                    _7('Live heatmaps removing settings');
                _55._254(_336)
            }
            function _314(_19, _985) {
                var _533 = _294.filter(function(_984) {
                    return _984._19 === _19
                })[0];
                if (!_985 && _533)
                    _294.splice(_294.indexOf(_533), 1);
                return _533
            }
            function _987(_17) {
                if (typeof _17 !== 'object')
                    return;
                _42 = _694();
                var _319 = _692();
                Object.keys(_17).forEach(function(_16) {
                    var _5 = _17[_16];
                    if (_5 instanceof Date)
                        _5 = _332(_5);
                    _42.filters[_16] = _5 || undefined
                });
                Object.keys(_319).forEach(function(_16) {
                    if (!_42.filters[_16])
                        _42.filters[_16] = _319[_16]
                });
                if (_42.filters.view) {
                    _42.selectedFilteredView = _42.filters.view;
                    delete _42.filters.view
                }
                _87(_42)
            }
            function _692() {
                var _227 = new Date();
                _227 = new Date(_227.getFullYear(),_227.getMonth(),_227.getDate());
                var _531 = new Date(_227);
                _531.setDate(_531.getDate() - 29);
                return {
                    maptype: 'click',
                    url: _88._131(),
                    fromdate: _332(_531),
                    todate: _332(_227)
                }
            }
            function _183(_10) {
                _2.opener.postMessage(_10, _47);
                _7('Sent ' + _10.message + (_10.requestUrl ? ', request URL: ' + _10.requestUrl : ''))
            }
            function _528(_10) {
                _2.postMessage(_10, _2.location.origin);
                _7('Sent ' + _10.message + (_10.requestUrl ? ', request URL: ' + _10.requestUrl : ''))
            }
            function _320(_10) {
                if (_10.message && _10.message.indexOf('MouseflowLiveHeatmaps_') === 0)
                    _7('Received ' + _10.message + (_10.requestUrl ? ', request URL: ' + _10.requestUrl : ''))
            }
            function _423(_68) {
                _7('Live heatmaps loading script: ' + _68)
            }
            function _332(_111) {
                return _111.getFullYear() + '-' + _641(_111.getMonth() + 1, '00') + '-' + _641(_111.getDate(), '00')
            }
            function _641(_986, _637) {
                return (_637 + _986).slice(-_637.length)
            }
            this._35 = _35;
            this._65 = _65;
            this._490 = function(_17) {
                _987(_17);
                if (_334) {
                    _528('{"mfCommand":"MouseflowHeatmap_UpdateHeatmap"}')
                } else {
                    _646();
                    var message = {
                        mfCommand: 'settings_change',
                        value: {
                            settings: _42,
                            reloadData: _17 && _17.maptype ? false : true
                        }
                    };
                    _528(JSON.stringify(message))
                }
                _7('Sent postmessage updateheatmap')
            }
            ;
            _2.mouseflowHeatmap = {
                streamData: function(_19, _551, _149, _198) {
                    _294.push({
                        _19: _19,
                        _551: _551 || function() {}
                        ,
                        _149: _149 || function() {}
                        ,
                        _198: _198 || function() {}
                    });
                    _183({
                        message: 'MouseflowLiveHeatmaps_StreamData',
                        requestUrl: _19
                    })
                },
                getData: function(_19, _149, _198) {
                    _294.push({
                        _19: _19,
                        _149: _149 || function() {}
                        ,
                        _198: _198 || function() {}
                    });
                    _183({
                        message: 'MouseflowLiveHeatmaps_RequestData',
                        requestUrl: _19
                    })
                }
            }
        }
        function _1031(_2, _3, _95, _11, _23, _88, _55, _407) {
            const _336 = 'mf_liveHeatmaps';
            let _47, _49, _7, _98;
            let _138;
            const _12 = _2.document;
            function _35(_293, _216, _313, _181) {
                _49 = _293;
                _47 = _313;
                _7 = _216;
                _7('Live heatmaps starting');
                _98 = _95._225();
                if (!_98) {
                    _7('Live heatmaps not initiated - could not create root HTML element');
                    return
                }
                if (!_2.opener) {
                    _7('Live heatmaps not initiated - window.opener is missing');
                    return
                }
                if (typeof _181 === 'function') {
                    _181(function() {
                        _208()
                    })
                } else {
                    _208()
                }
            }
            function _65() {}
            function _208() {
                _23._39(_2, 'message', function(_41) {
                    if (_41.origin !== _47)
                        return;
                    _320(_41.data);
                    switch (_41.data.message) {
                    case 'MouseflowLiveHeatmapsV3_Init_Received':
                        _2.clearInterval(_138);
                        break;
                    case 'MouseflowLiveHeatmapsV3_Init_Success':
                        _315(_41.data.scripts);
                        break
                    }
                });
                _138 = _2.setInterval(_297, 500);
                _2.setTimeout(function() {
                    _2.clearInterval(_138)
                }, 10000);
                _297()
            }
            function _297() {
                _183({
                    message: 'MouseflowLiveHeatmapsV3_Init',
                    websiteId: _49,
                    prod: _407.prod !== undefined
                })
            }
            function _315(_160) {
                for (const _68 of _160) {
                    const _1 = _12.createElement(_68.tagName);
                    if (_68.textContent) {
                        _1.textContent = _68.textContent
                    }
                    for (const _16 in _68.attributes) {
                        if (_16 === 'src')
                            continue;
                        const _5 = _68.attributes[_16];
                        _1.setAttribute(_16, _5)
                    }
                    if (_1.tagName === 'SCRIPT') {
                        _1.async = false
                    }
                    if (_68.attributes.src) {
                        _1.src = _47 + _68.attributes.src
                    }
                    if (_1.tagName === 'SCRIPT' && _1.type === 'importmap') {
                        _1.textContent = _1.textContent.replace(/(:\s*")(\/[^"]+")/g, `$1${_47}$2`)
                    }
                    _98.appendChild(_1)
                }
            }
            function _183(_10) {
                _2.opener.postMessage(_10, _47);
                _7('Sent ' + _10.message + (_10.requestUrl ? ', request URL: ' + _10.requestUrl : ''))
            }
            function _320(_10) {
                if (_10.message && _10.message.indexOf('MouseflowLiveHeatmapsV3_') === 0)
                    _7('Received ' + _10.message + (_10.requestUrl ? ', request URL: ' + _10.requestUrl : ''))
            }
            this._35 = _35;
            this._65 = _65;
            this._490 = function(_17) {}
        }
        function _1030(_2, _95, _28, _25, _11, _23, _55, _3) {
            var _12 = _2.document, _47, _49, _7, _13, _98, _27, _596, _606, _604, _814, _164, _123, _393, _173, _683, _195, _316, _290, _163, _136, _155;
            function _35(_988, _293, _408, _412, _278, _413, _216) {
                _47 = _988;
                _49 = _293;
                _7 = _216;
                _13 = _961() || {
                    _152: false,
                    _63: 'exclude',
                    _85: _408 || [],
                    _83: _412 || [],
                    _106: _278 || [],
                    _107: _413 || []
                };
                _7('Starting privacy tool');
                _98 = _95._225();
                if (!_98) {
                    _7('Privacy tool not initiated - could not create root HTML element');
                    return
                }
                _989();
                _25._71(function() {
                    _991();
                    _87(_13)
                }, 1000);
            }
            function _65() {
                _997();
                _95._422()
            }
            function _989() {
                _23._39(_2, 'message', function(event) {
                    if (event.origin !== _47)
                        return;
                    switch (event.data.message) {
                    case 'MouseflowPrivacyTool_Hello':
                        _7('Privacy tool API ready');
                        _290 = event.source;
                        if (event.data.cssSelectorBlacklist) {
                            _13._85 = event.data.cssSelectorBlacklist;
                            _13._83 = event.data.cssSelectorWhitelist;
                            _13._106 = event.data.cssSelectorTracked;
                            _13._107 = event.data.cssSelectorMasked
                        }
                        _260();
                        break;
                    case 'MouseflowPrivacyTool_Save_Success':
                        _7('Successfully saved CSS lists');
                        if (_163)
                            _163();
                        _163 = undefined;
                        _136 = undefined;
                        break;
                    case 'MouseflowPrivacyTool_Save_Failed':
                        _7('Failed saving CSS lists');
                        if (_136)
                            _136();
                        _163 = undefined;
                        _136 = undefined;
                        _545('Uh oh! We couldn\'t save your changes.<br><br>' + 'Please refresh the page and try again.');
                        break;
                    case 'MouseflowPrivacyTool_Unauthorized':
                        _7('Privacy tool API logged out - cannot save');
                        if (_136)
                            _136();
                        _163 = undefined;
                        _136 = undefined;
                        _545('Uh oh! We couldn\'t save your changes.<br><br>' + 'Please log into Mouseflow and try again.');
                        break
                    }
                });
                if (_2.opener) {
                    _7('Loading privacy tool API using window.opener');
                    _2.opener.postMessage({
                        message: 'MouseflowPrivacyTool_Hello'
                    }, _47)
                }
                _25._71(function() {
                    if (!_290) {
                        _7('Loading privacy tool API using iframe');
                        var _291 = _12.createElement('iframe');
                        _291.style.width = '0px';
                        _291.style.height = '0px';
                        _291.style.display = 'none';
                        _291.src = _47 + '/websites/' + _49 + '/privacytool';
                        _98.appendChild(_291);
                        _25._71(function() {
                            if (!_290) {
                                _7('Loading privacy tool API timed out');
                                _962('We\'re having trouble loading the Privacy Tool on this page. Please try ' + 'refreshing the page or logging in to Mouseflow and reloading the Privacy Tool from there.<br><br>' + 'If you need help, please don\'t hesitate to reach out to us at:  <a class="green" href="mailto:support@mouseflow.com">support@mouseflow.com</a>')
                            }
                        }, 5000)
                    }
                }, 2000)
            }
            function _991() {
                _27 = _964(_13);
                _596 = _27.querySelector('.tool-exclude output');
                _606 = _27.querySelector('.tool-whitelist output');
                _604 = _27.querySelector('.tool-track output');
                _814 = _27.querySelector('.tool-masked output');
                _164 = _27.querySelector('.tool-status-text');
                _123 = _27.querySelector('.btn-widget');
                _393 = _27.querySelector('.tool-loading h2');
                _13._85.forEach(_610);
                _13._83.forEach(_583);
                _13._106.forEach(_818);
                _13._107.forEach(_579);
                _98.appendChild(_27);
                _173 = _965();
                _27.appendChild(_173);
                _11._329(_12.body, 'mf-privacy-tool-opened', !_13._152);
                _1004();
                _260()
            }
            function _260() {
                if (_27 && _290) {
                    _11._61(_27, 'is-loading');
                    _118();
                    _992();
                    _333()
                }
            }
            function _542() {
                _401();
                _65();
                _2.close()
            }
            function _1004() {
                _23._39(_27, 'click', '.mf-tool-close', _542, {
                    _97: true
                })
            }
            function _992() {
                _23._39(_27, 'click', '.mf-tool-toggle', _998, {
                    _97: true
                });
                _23._39(_27, 'click', '.mf-tool-close', _542, {
                    _97: true
                });
                _23._39(_27, 'click', '.mf-tool-exclude', _999, {
                    _97: true
                });
                _23._39(_27, 'click', '.mf-tool-whitelist', _1000, {
                    _97: true
                });
                _23._39(_27, 'click', '.mf-tool-track', _1001, {
                    _97: true
                });
                _23._39(_27, 'click', '.mf-tool-masked', _1002, {
                    _97: true
                });
                _23._39(_27, 'click', '.highlight-excluded', _1003, {
                    _97: true
                });
                _23._39(_27, 'click', '.highlight-whitelisted', _977, {
                    _97: true
                });
                _23._39(_27, 'click', '.highlight-tracked', _990, {
                    _97: true
                });
                _23._39(_27, 'click', '.highlight-masked', _976, {
                    _97: true
                });
                _23._39(_27, 'click', '.mf-remove-excluded', _960, {
                    _97: true
                });
                _23._39(_27, 'click', '.mf-remove-whitelisted', _948, {
                    _97: true
                });
                _23._39(_27, 'click', '.mf-remove-tracked', _949, {
                    _97: true
                });
                _23._39(_27, 'click', '.mf-remove-masked', _950, {
                    _97: true
                });
                _23._39(_27, 'submit', _951, {
                    _97: true
                });
                _23._39(_12, 'mouseover', _952, {
                    _86: true
                });
                _23._39(_12, 'mouseleave', _953, {
                    _86: true
                });
                _23._39(_12, 'mouseup', _954, {
                    _86: true
                });
                _23._39(_12, 'mouseenter', _182, {
                    _86: true
                });
                _23._39(_12, 'mousemove', _182, {
                    _86: true
                });
                _23._39(_12, 'mousedown', _182, {
                    _86: true
                });
                _23._39(_12, 'click', _182, {
                    _86: true
                });
                _23._39(_12, 'mouseout', _182, {
                    _86: true
                });
                _23._39(_12, 'scroll', _118, {
                    _86: true,
                    _386: true
                });
                _23._39(_2, 'resize', _118, {
                    _86: true,
                    _386: true
                });
                var MutationObserver = _2.MutationObserver || _2.WebKitMutationObserver || _2.MozMutationObserver;
                if (MutationObserver) {
                    _316 = new MutationObserver(function(_801) {
                        var _996 = _801.some(function(_91) {
                            if (_91.target.nodeType !== 1 || _11._92(_91.target, '#mouseflow *'))
                                return false;
                            var _993 = _91.oldValue && _91.oldValue.indexOf('mf-highlight') !== -1;
                            var _994 = _91.target.classList.contains('mf-highlight');
                            var _995 = _993 || _994;
                            if (_91.type === 'attributes' && _91.attributeName === 'class' && _995)
                                return false;
                            return true
                        });
                        if (_996)
                            _118();
                        _801.forEach(function(_91) {
                            _91.addedNodes.forEach(function(_18) {
                                if (!_18.shadowRoot)
                                    return;
                                _316.observe(_18.shadowRoot, {
                                    childList: true,
                                    subtree: true
                                });
                                _333(_18)
                            })
                        })
                    }
                    );
                    _316.observe(_12, {
                        attributes: true,
                        childList: true,
                        characterData: true,
                        subtree: true,
                        attributeOldValue: true
                    })
                }
            }
            function _997() {
                _23._843();
                if (_316)
                    _316.disconnect()
            }
            function _333(_78) {
                if (!_155)
                    _155 = _1007();
                if (!_78)
                    _78 = _12;
                for (var _38 = _28._191(_78); _38; _38 = _28._167(_38)) {
                    _333(_38);
                    var _116 = _38.shadowRoot;
                    if (!_116)
                        continue;
                    _333(_116);
                    if (_116.adoptedStyleSheets) {
                        if (_116.adoptedStyleSheets.indexOf(_155) > -1)
                            continue;
                        var _672 = Array.prototype.slice.call(_116.adoptedStyleSheets);
                        _672.push(_155);
                        _116.adoptedStyleSheets = _672
                    } else {
                        if (_116.querySelector('.mf-privacy-tool-style'))
                            continue;
                        var _58 = _12.createElement('style');
                        _58.type = 'text/css';
                        _58.innerHTML = _434();
                        _58.className = 'mf-privacy-tool-style';
                        _116.appendChild(_58)
                    }
                }
            }
            function _998() {
                _13._152 = !_13._152;
                _87(_13);
                _11._329(_27, 'tool-closed', _13._152);
                _11._329(_12.body, 'mf-privacy-tool-opened', !_13._152);
                var _337 = _27.getElementsByClassName('step')[0];
                var _206 = _27.getElementsByClassName('tool-container')[0];
                if (_13._152) {
                    _11._61(_337, 'fade-out');
                    _11._109(_337, 'fade-in');
                    _11._61(_206, 'fade-in');
                    _11._109(_206, 'fade-out')
                } else {
                    _11._61(_337, 'fade-in');
                    _11._109(_337, 'fade-out');
                    _11._61(_206, 'fade-out');
                    _11._109(_206, 'fade-in')
                }
            }
            function _999() {
                /*CHANGE _13._63 = 'exclude';
                _87(_13);
                _339()*/
                return // this wasn't here
            }
            function _1000() {
                _13._63 = 'whitelist';
                _87(_13);
                _339()
            }
            function _1001() {
                _13._63 = 'track';
                _87(_13);
                _339()
            }
            function _1002() {
                /*CHANGE _13._63 = 'masked';
                _87(_13);
                _339()*/
                return //this wasn't here
            }
            function _339() {
                _11._61(_27.getElementsByClassName('mf-tool-exclude')[0], 'active');
                _11._61(_27.getElementsByClassName('tool-exclude')[0], 'active');
                _11._61(_27.getElementsByClassName('mf-tool-whitelist')[0], 'active');
                _11._61(_27.getElementsByClassName('tool-whitelist')[0], 'active');
                _11._61(_27.getElementsByClassName('mf-tool-track')[0], 'active');
                _11._61(_27.getElementsByClassName('tool-track')[0], 'active');
                _11._61(_27.getElementsByClassName('mf-tool-masked')[0], 'active');
                _11._61(_27.getElementsByClassName('tool-masked')[0], 'active');
                _11._109(_27.getElementsByClassName('mf-tool-' + _13._63)[0], 'active');
                _11._109(_27.getElementsByClassName('tool-' + _13._63)[0], 'active')
            }
            function _1003(_6) {
                if (_13._63 === 'exclude') {
                    _667(_6.target.getAttribute('data-target'));
                    _118()
                }
            }
            function _977(_6) {
                if (_13._63 === 'whitelist') {
                    _699(_6.target.getAttribute('data-target'));
                    _118()
                }
            }
            function _990(_6) {
                if (_13._63 === 'track') {
                    _631(_6.target.getAttribute('data-target'));
                    _118()
                }
            }
            function _976(_6) {
                /*CHANGE if (_13._63 === 'masked') {
                    _647(_6.target.getAttribute('data-target'));
                    _118()
                }*/
               return //this wasn't here
            }
            function _960(_6) {
                _667(_6.target.parentNode.getAttribute('data-target'));
                _118()
            }
            function _948(_6) {
                _699(_6.target.parentNode.getAttribute('data-target'));
                _118()
            }
            function _949(_6) {
                _631(_6.target.parentNode.getAttribute('data-target'));
                _118()
            }
            function _950(_6) {
                _647(_6.target.parentNode.getAttribute('data-target'));
                _118()
            }
            function _951() {
                _974();
                _955(_13._85, _13._83, _13._106, _13._107, function() {
                    _616();
                    _123.innerHTML = 'Saved';
                    _401();
                    _25._71(_542, 500)
                }, function() {
                    _616()
                })
            }
            function _952(_6) {
                _25._146(_683);
                var _681 = _12.getElementsByClassName('mf-highlight');
                for (var _4 = 0; _4 < _681.length; _4++) {
                    _11._61(_681[_4], 'mf-highlight')
                }
                _11._109(_173, 'hidden');
                if (_182(_6) || _674(_6.target))
                    return;
                _11._109(_6.target, 'mf-highlight');
                _683 = _25._71(function() {
                    var _46 = _6.target.getBoundingClientRect();
                    _173.style.left = _46.left + _2.pageXOffset + 'px';
                    _173.style.top = _46.top + _2.pageYOffset + 'px';
                    _173.style.width = _46.width + 'px';
                    _173.style.height = _46.height + 'px';
                    _11._61(_173, 'hidden')
                }, 75)
            }
            function _953(_6) {
                if (_182(_6))
                    return;
                if (_6.target === _12) {
                    _11._109(_173, 'hidden')
                }
            }
            function _954(_6) {
                if (_182(_6))
                    return;
                if (_6.button !== 0 || _674(_6.target))
                    return;
                _11._61(_6.target, 'mf-highlight');
                var _9 = _957(_6.target);
                if (_13._63 === 'exclude') {
                    _610(_9)
                } else if (_13._63 === 'whitelist') {
                    _583(_9)
                } else if (_13._63 === 'masked') {
                    _579(_9)
                } else {
                    _818(_9)
                }
                _118()
            }
            function _182(_6) {
                if (_13._152 || _6.target.nodeType !== 1 || _11._92(_6.target, '#mouseflow *'))
                    return true;
                _6.preventDefault();
                _6.stopPropagation();
                return false
            }
            function _674(_1) {
                return _1 === _12.body || _11._92(_1, 'html') || (_13._63 === 'whitelist' && (!/INPUT|TEXTAREA/.test(_1.tagName) || /checkbox|radio|button|submit/.test(_1.type)))
            }
            function _818(_9) {
                if (_9 && _13._106.indexOf(_9) === -1) {
                    _13._106.unshift(_9);
                    _87(_13)
                }
                _179()
            }
            function _610(_9) {
                if (_9 && _13._85.indexOf(_9) === -1) {
                    _13._85.unshift(_9);
                    _87(_13)
                }
                _179()
            }
            function _583(_9) {
                if (_9 && _13._83.indexOf(_9) === -1) {
                    _13._83.unshift(_9);
                    _87(_13)
                }
                _179()
            }
            function _579(_9) {
                if (_9 && _13._107.indexOf(_9) === -1) {
                    _13._107.unshift(_9);
                    _87(_13)
                }
                _179()
            }
            function _667(_9) {
                if (_9 && _13._85.indexOf(_9) !== -1) {
                    _13._85 = _13._85.filter(function(_74) {
                        return _74 !== _9
                    });
                    _87(_13)
                }
                _179()
            }
            function _699(_9) {
                if (_9 && _13._83.indexOf(_9) !== -1) {
                    _13._83 = _13._83.filter(function(_74) {
                        return _74 !== _9
                    });
                    _87(_13)
                }
                _179()
            }
            function _631(_9) {
                if (_9 && _13._106.indexOf(_9) !== -1) {
                    _13._106 = _13._106.filter(function(_74) {
                        return _74 !== _9
                    });
                    _87(_13)
                }
                _179()
            }
            function _647(_9) {
                if (_9 && _13._107.indexOf(_9) !== -1) {
                    _13._107 = _13._107.filter(function(_74) {
                        return _74 !== _9
                    });
                    _87(_13)
                }
                _179()
            }
            function _118() {
                _25._146(_195);
                if (!_195) {
                    _25._71(function() {
                        if (_195) {
                            _25._146(_195);
                            _651();
                            _195 = undefined
                        }
                    }, 200)
                }
                _195 = _25._71(function() {
                    _651();
                    _195 = undefined
                }, 100)
            }
            function _651() {
                var _652 = _27.querySelectorAll('.highlight-excluded,.highlight-whitelisted,.highlight-tracked,.highlight-masked'), _4;
                for (_4 = 0; _4 < _652.length; _4++) {
                    _27.removeChild(_652[_4])
                }
                _13._85.forEach(function(_9) {
                    var _56 = _145(_9, _12);
                    for (_4 = 0; _4 < _56.length; _4++) {
                        _27.appendChild(_966(_9, _56[_4].getBoundingClientRect()))
                    }
                });
                _13._83.forEach(function(_9) {
                    var _56 = _145(_9, _12);
                    for (_4 = 0; _4 < _56.length; _4++) {
                        _27.appendChild(_967(_9, _56[_4].getBoundingClientRect()))
                    }
                });
                _13._106.forEach(function(_9) {
                    var _56 = _145(_9, _12);
                    for (_4 = 0; _4 < _56.length; _4++) {
                        _27.appendChild(_968(_9, _56[_4].getBoundingClientRect()))
                    }
                });
                _13._107.forEach(function(_9) {
                    var _56 = _145(_9, _12);
                    for (_4 = 0; _4 < _56.length; _4++) {
                        _27.appendChild(_969(_9, _56[_4].getBoundingClientRect()))
                    }
                })
            }
            function _145(_9, _33) {
                try {
                    var _56 = [];
                    _9.split(',').forEach(function(_9) {
                        var _48 = _9.split(' > :document-fragment: > ', 1);
                        _33.querySelectorAll(_48[0]).forEach(function(_1) {
                            if (_48[1] && _1.shadowRoot) {
                                _145(_48[1], _1.shadowRoot).forEach(function(_1) {
                                    _56.push(_1)
                                })
                            } else {
                                _56.push(_1)
                            }
                        })
                    });
                    return _56
                } catch (_57) {
                    _7('Could not get element from selector: ' + ex.message)
                }
            }
            function _955(_85, _83, _106, _107, _149, _956) {
                if (_163) {
                    _7('Attempted to save CSS lists while previous save was in progress');
                    return
                }
                _163 = _149;
                _136 = _956;
                _963();
                _290.postMessage({
                    message: 'MouseflowPrivacyTool_Save',
                    blacklist: _85,
                    whitelist: _83,
                    tracked: _106,
                    masked: _107
                }, _47);
                _25._71(function() {
                    if (_163 === _149) {
                        _7('Saving CSS lists timed out');
                        if (_136)
                            _136();
                        _163 = undefined;
                        _136 = undefined;
                        _545('Uh oh! We couldn\'t save your changes.<br><br>' + 'Please log into Mouseflow and try again.')
                    }
                }, 7500)
            }
            function _957(_1) {
                if (_1 == null)
                    return null;
                try {
                    var _36 = [];
                    while (_1) {
                        var _33 = _1.getRootNode ? _1.getRootNode() : _12;
                        var _9 = _693(_1, _33);
                        _36.unshift(_9);
                        _1 = _33.host
                    }
                    return _36.join(' > :document-fragment: > ')
                } catch (ex) {
                    _7('Could not get element selector: ' + ex.message);
                    return null
                }
            }
            function _1188(_1, _33) {
                var _322 = _958(_1, _33);
                if (!_322)
                    return null;
                if (_11._92(_1, _322))
                    return _322;
                var _95 = _33.querySelector(_322);
                var _133 = _1;
                var _48 = [];
                while (_133 && _133 !== _95) {
                    var _34 = _550(_133, _33);
                    if (_34.length === 0)
                        _34.push(_589(_133));
                    _48.unshift(_34);
                    _133 = _133.parentNode
                }
                _48.unshift(_322);
                return _534(_48, _33)
            }
            function _693(_1, _33, _48) {
                if (!_48)
                    _48 = [];
                var _34 = _550(_1, _33);
                _48.unshift(_34);
                var _9 = _534(_48, _33);
                if (_9)
                    return _9;
                if (_34.length === 0) {
                    _34.push(_589(_1));
                    _9 = _534(_48, _33);
                    if (_9)
                        return _9
                }
                return _693(_1.parentNode, _33, _48)
            }
            function _534(_48, _33) {
                var _552 = _48.length > 1 ? _959.apply(this, _48) : _48[0];
                for (var _4 = 0; _4 < _552.length; _4++) {
                    if (_33.querySelectorAll(_552[_4]).length === 1)
                        return _552[_4]
                }
                return null
            }
            function _958(_1, _33) {
                var _133 = _1;
                while (_133) {
                    var _34 = _550(_133, _33);
                    for (var _4 = 0; _4 < _34.length; _4++) {
                        if (_33.querySelectorAll(_34[_4]).length === 1)
                            return _34[_4]
                    }
                    _133 = _133.parentNode
                }
                return null
            }
            function _550(_1, _33) {
                if (_1 === _12.body)
                    return ['body'];
                var _34 = [];
                var _78 = _1.parentNode;
                var _4;
                var _36 = _1.getAttribute('id');
                var _9 = '#' + _11._174(_36);
                if (_36 && _33.querySelectorAll(_9).length === 1 && !_11._187(_1, 'data-mf-ignore-child-ids') && _3.useIdSelectors)
                    return [_9];
                var _22 = _1.getAttribute('name');
                _9 = '[name="' + _11._174(_22) + '"]';
                if (_22) {
                    if (_33.querySelectorAll(_9).length === 1)
                        return [_9];
                    if (_78.querySelectorAll(_9).length === 1)
                        _34.push(_9)
                }
                var _112 = _11._220(_1);
                for (_4 = 0; _4 < _112.length; _4++) {
                    _9 = '.' + _11._174(_112[_4]);
                    if (_33.querySelectorAll(_9).length === 1)
                        return [_9];
                    if (_78.querySelectorAll(_9).length === 1)
                        _34.push(_9)
                }
                for (_4 = 0; _4 < _112.length; _4++) {
                    _9 = _11._174(_1.tagName.toLowerCase()) + '.' + _11._174(_112[_4]);
                    if (_33.querySelectorAll(_9).length === 1)
                        return [_9];
                    if (_78.querySelectorAll(_9).length === 1)
                        _34.push(_9)
                }
                return _34
            }
            function _589(_1) {
                var _9 = _11._174(_1.tagName.toLowerCase());
                if (_1.parentNode.querySelectorAll(_9).length === 1)
                    return _9;
                var _258 = 0;
                var _402 = _1;
                while (_402) {
                    if (_402.tagName === _1.tagName)
                        _258++;
                    _402 = _402.previousElementSibling
                }
                _9 += ':nth-of-type(' + _258 + ')';
                return _9
            }
            function _959() {
                var _34, _249, _250, _4;
                var _132 = 0;
                var _219 = arguments.length - 1;
                var _403 = false;
                var _266 = true;
                while (_132 < _219) {
                    _249 = undefined;
                    for (_4 = 0; _4 <= _132; _4++) {
                        _249 = _249 ? _406(_249, arguments[_4], ' > ') : arguments[_4]
                    }
                    _250 = undefined;
                    for (_4 = arguments.length - 1; _4 >= _219; _4--) {
                        _250 = _250 ? _406(arguments[_4], _250, ' > ') : arguments[_4]
                    }
                    var _390 = (_132 + 1) == _219 ? ' > ' : ' ';
                    _34 = _34 ? _34.concat(_406(_249, _250, _390)) : _406(_249, _250, _390);
                    if (_266 && _403) {
                        _219--;
                        _403 = false;
                        _266 = true
                    } else if (_266) {
                        _219--;
                        _403 = true;
                        _266 = false
                    } else {
                        _132++;
                        if (_132 != _219)
                            _219++;
                        _403 = true;
                        _266 = true
                    }
                }
                return _34
            }
            function _406(_613, _614, _390) {
                var _34 = [];
                for (var _4 = 0; _4 < _613.length; _4++) {
                    for (var _127 = 0; _127 < _614.length; _127++) {
                        _34.push(_613[_4] + _390 + _614[_127])
                    }
                }
                return _34
            }
            function _961() {
                return _55._231('mf_privacyTool') || null
            }
            function _87(_42) {
                _55._253('mf_privacyTool', _42)
            }
            function _401() {
                _55._254('mf_privacyTool')
            }
            function _974() {
                _123.setAttribute('disabled', '');
                _123.setAttribute('original-html', _123.innerHTML);
                _123.innerHTML = '<i>&bull;</i> <i>&bull;</i> <i>&bull;</i> <i>&bull;</i>';
                _11._109(_123, 'loading')
            }
            function _616() {
                _11._61(_123, 'loading');
                _123.innerHTML = _123.getAttribute('original-html');
                _123.removeAttribute('original-html');
                _123.removeAttribute('disabled')
            }
            function _179() {
                _596.innerHTML = _973(_13._85);
                _606.innerHTML = _975(_13._83);
                _604.innerHTML = _1005(_13._106);
                _814.innerHTML = _1006(_13._107);
                _164.innerHTML = _500(_13._85, _13._83, _13._106, _13._107);
                _11._61(_164, 'red')
            }
            function _962(_202) {
                if (!_393)
                    return;
                _393.innerHTML = _202;
                _11._109(_393, 'red')
            }
            function _545(_202) {
                if (!_164)
                    return;
                _164.innerHTML = _202;
                _11._109(_164, 'red')
            }
            function _963() {
                if (!_164)
                    return;
                _164.innerHTML = _500(_13._85, _13._83, _13._106, _13._107);
                _11._61(_164, 'red')
            }
            function _964(_13) {
                var _30 = _12.createElement('div');
                _30.className = 'privacy-tool is-loading';
                _30.innerHTML = _970(_13);
                if (_13._152)
                    _30.className += ' tool-closed';
                var _58 = _12.createElement('style');
                _58.type = 'text/css';
                _58.innerHTML = _434();
                _30.appendChild(_58);
                return _30
            }
            function _965() {
                var _30 = _12.createElement('div');
                _30.className = 'highlight-box';
                return _30
            }
            function _966(_9, _46) {
                var _30 = _12.createElement('div');
                _30.className = 'highlight-box highlight-excluded';
                _30.setAttribute('data-target', _9);
                _30.style.left = _46.left + _2.pageXOffset + 'px';
                _30.style.top = _46.top + _2.pageYOffset + 'px';
                _30.style.width = _46.width + 'px';
                _30.style.height = _46.height + 'px';
                return _30
            }
            function _967(_9, _46) {
                var _30 = _12.createElement('div');
                _30.className = 'highlight-box highlight-whitelisted';
                _30.setAttribute('data-target', _9);
                _30.style.left = _46.left + _2.pageXOffset + 'px';
                _30.style.top = _46.top + _2.pageYOffset + 'px';
                _30.style.width = _46.width + 'px';
                _30.style.height = _46.height + 'px';
                return _30
            }
            function _968(_9, _46) {
                var _30 = _12.createElement('div');
                _30.className = 'highlight-box highlight-tracked';
                _30.setAttribute('data-target', _9);
                _30.style.left = _46.left + _2.pageXOffset + 'px';
                _30.style.top = _46.top + _2.pageYOffset + 'px';
                _30.style.width = _46.width + 'px';
                _30.style.height = _46.height + 'px';
                return _30
            }
            function _969(_9, _46) {
                var _30 = _12.createElement('div');
                _30.className = 'highlight-box highlight-masked';
                _30.setAttribute('data-target', _9);
                _30.style.left = _46.left + _2.pageXOffset + 'px';
                _30.style.top = _46.top + _2.pageYOffset + 'px';
                _30.style.width = _46.width + 'px';
                _30.style.height = _46.height + 'px';
                return _30
            }
            function _970(_13) {
                return ('<form action="#" id="mf_privacy_tool">' + _971(_13) + _972(_13) + '</form>')
            }
            function _971(_13) {
                return ('<div class="step step-block' + (_13._152 ? ' fade-in' : '') + '">' + '<div class="widget-header">' + '<div class="widget-text">Open privacy tool</div>' + '<div class="widget-toggle">' + '<a href="#" class="btn-arrow btn-arrow--up mf-tool-toggle"></a>' + '</div>' + '</div>' + '</div>')
            }
            function _972() {
                return ('<div class="tool-container' + (_13._152 ? '' : ' fade-in') + '">' + '<div class="tool-header">' + '<div class="tool-title">' + '<svg class="logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="37" height="34" viewBox="0 0 37 34"><g id="logomark_dark" transform="translate(0 0.281)"><path id="Path_7123" class="logo-path" data-name="Path 7123" d="M36.916,16.723c0-2.879-2.308-5.423-6.032-7.173.347-4.1-.708-7.367-3.2-8.812S21.832.029,18.452,2.378c-.111-.078-.218-.153-.329-.227-3.4-2.267-6.552-2.768-8.9-1.417C6.735,2.171,5.685,5.444,6.034,9.547,2.308,11.3,0,13.844,0,16.723S2.311,22.149,6.038,23.9c-.013.133-.023.268-.03.4-.268,4.069.878,7.057,3.219,8.408a5.667,5.667,0,0,0,2.877.738,11.533,11.533,0,0,0,6.353-2.379,11.533,11.533,0,0,0,6.353,2.379,5.687,5.687,0,0,0,2.877-.738c2.343-1.352,3.485-4.339,3.222-8.408-.009-.133-.018-.268-.031-.4C34.607,22.149,36.916,19.6,36.916,16.723Zm-12.09-14.7a3.668,3.668,0,0,1,1.855.455c1.548.894,2.363,3.181,2.233,6.268a28.258,28.258,0,0,0-5.13-1.254,27.937,27.937,0,0,0-3.652-3.81A9.132,9.132,0,0,1,24.826,2.024ZM8.217,10.82a24.675,24.675,0,0,1,3.168-.941c-.432.652-.85,1.329-1.261,2.03s-.788,1.417-1.133,2.125a23.11,23.11,0,0,1-.774-3.215ZM22.7,24.077a34.406,34.406,0,0,1-4.243.256,34.365,34.365,0,0,1-4.242-.256c-.992-.123-1.928-.29-2.816-.492a23.143,23.143,0,0,1-3.174-.946,23.7,23.7,0,0,1,.765-3.222c.275-.885.6-1.785.982-2.692a33.8,33.8,0,0,1,1.9-3.811A34.244,34.244,0,0,1,14.2,9.381q.908-1.2,1.842-2.206A23.422,23.422,0,0,1,18.453,4.9a23.659,23.659,0,0,1,2.408,2.278A27.591,27.591,0,0,1,22.7,9.381a34.1,34.1,0,0,1,2.343,3.533,34.039,34.039,0,0,1,1.9,3.811,28.251,28.251,0,0,1,.982,2.692,23.66,23.66,0,0,1,.769,3.225,23.235,23.235,0,0,1-3.179.946C24.626,23.785,23.688,23.952,22.7,24.077Zm-4.243,2.267c.82,0,1.626-.027,2.408-.078a23.788,23.788,0,0,1-2.408,2.281,23.478,23.478,0,0,1-2.408-2.281Q17.228,26.344,18.457,26.344Zm9.468-12.306q-.526-1.071-1.133-2.125T25.53,9.881a24.368,24.368,0,0,1,3.166.939,22.89,22.89,0,0,1-.771,3.219ZM10.235,2.479a3.737,3.737,0,0,1,1.877-.463A9.029,9.029,0,0,1,16.778,3.68a28.033,28.033,0,0,0-3.65,3.812A27.992,27.992,0,0,0,8,8.749C7.866,5.659,8.683,3.373,10.235,2.479ZM2.017,16.723c0-1.928,1.646-3.715,4.31-5.072a27.76,27.76,0,0,0,1.479,5.078,28.156,28.156,0,0,0-1.475,5.066c-2.75-1.429-4.318-3.283-4.318-5.072Zm10.074,14.7a3.684,3.684,0,0,1-1.857-.456C8.661,30.055,7.853,27.78,8,24.7a28.105,28.105,0,0,0,5.122,1.254,28.219,28.219,0,0,0,3.652,3.812A9.118,9.118,0,0,1,12.092,31.42Zm14.592-.456c-1.55.894-3.937.463-6.544-1.2a28.218,28.218,0,0,0,3.652-3.812A28.193,28.193,0,0,0,28.917,24.7c.146,3.081-.662,5.357-2.237,6.265Zm3.909-9.169a28.41,28.41,0,0,0-1.475-5.065A28.321,28.321,0,0,0,30.6,11.651c2.662,1.357,4.308,3.144,4.308,5.072-.007,1.789-1.575,3.642-4.321,5.072Z" transform="translate(0 0)" fill="#0f172f"/><path id="Path_7124" data-name="Path 7124" d="M100,75.4a29.752,29.752,0,0,0-5,10.427l5-2.726,5,2.726A30.653,30.653,0,0,0,100,75.4Z" transform="translate(-81.541 -64.726)" fill="#0f172f"/></g></svg>' + '<h3>Click elements in the interface that you wish to manage</h3>' + '<div class="tool-toggle">' + '<div class="tool-toggle-text">' + '<b> Hide to navigate </b>' + '</div>' + '<div class="tool-toggle-icon">' + '<a href="#" class="btn-arrow btn-arrow--down mf-tool-toggle"></a>' + '</div>' + '</div>' + '<div class="tool-close">' + '<div class="tool-toggle-text">' + 'Close' + '</div>' + '<div class="tool-toggle-icon">' + '<a href="#" class="btn-cross mf-tool-close"></a>' + '</div>' + '</div>' + '</div>' + '</div>' + '<div class="tool-content">' + '<ul class="tool-menu">' + '<li class="tool-menu-item mf-tool-exclude' + (_13._63 === 'exclude' ? ' active' : '') + '">' + 'Excluded content' + '</li>' + '<li class="tool-menu-item mf-tool-masked' + (_13._63 === 'masked' ? ' active' : '') + '">' + 'Masked content' + '</li>' + '<li class="tool-menu-item mf-tool-whitelist' + (_13._63 === 'whitelist' ? ' active' : '') + '">' + 'Whitelisted fields' + '</li>' + '<li class="tool-menu-item mf-tool-track' + (_13._63 === 'track' ? ' active' : '') + '">' + 'Tracked elements' + '</li>' + '</ul>' + '<div class="tool-exclude' + (_13._63 === 'exclude' ? ' active' : '') + '">' + '<h2>Exclude content</h2>' + '<p>' + 'To exclude content from being tracked, click on the element(s) you want to remove. ' + 'The excluded elements and any descendants inside those elements will not be stored or visible in Recordings or Heatmaps.' + 'The CSS selectors of the selected elements will appear in the list below. ' + '</p>' + '<p>' + 'Click "Hide to navigate" to exclude more content or "Save and close" to apply changes. Check our <a href="https://help.mouseflow.com/en/articles/5973120-excluded-whitelisted-tracked-fields" target="_blank">Support Guide</a> for details and best practices.' + '</p>' + '<h3>Excluded content</h3>' + '<div>' + '<output></output>' + '</div>' + '</div>' + '<div class="tool-masked' + (_13._63 === 'masked' ? ' active' : '') + '">' + '<h2>Mask content</h2>' + '<p>' + 'Masking elements in the interface enables you to hide the content from being recorded without loosing interaction data (e.g. clicks, hovers) on that element. ' + 'Click the element in the interface that you would like to mask. ' + 'The CSS selectors of the selected elements will appear in the list below. ' + '</p>' + '<p>' + 'Click "Hide to navigate" to mask more content or "Save and close" to apply changes. Check our <a href="https://help.mouseflow.com/en/articles/5973120-excluded-whitelisted-tracked-fields" target="_blank">Support Guide</a> for details and best practices.' + '</p>' + '<h3>Masked content</h3>' + '<div>' + '<output></output>' + '</div>' + '</div>' + '<div class="tool-whitelist' + (_13._63 === 'whitelist' ? ' active' : '') + '">' + '<h2>Whitelist input fields</h2>' + '<p>' + 'Mouseflow automatically masks all fields to protect personal data. However, you can whitelist specific input fields by clicking on them. ' + 'This allows Mouseflow to record input in those fields. ' + 'The CSS selectors of the selected elements will appear in the list below. ' + '</p>' + '<p>' + ' Click "Hide to navigate" to whitelist more input fields or "Save and close" to apply changes. Check our <a href="https://help.mouseflow.com/en/articles/5973120-excluded-whitelisted-tracked-fields" target="_blank">Support Guide</a> for details and best practices.' + '</p>' + '<h3>Whitelisted fields</h3>' + '<div>' + '<output></output>' + '</div>' + '</div>' + '<div class="tool-track' + (_13._63 === 'track' ? ' active' : '') + '">' + '<h2>Tracked elements</h2>' + '<p>' + 'When viewing a Heatmap, most links show interaction data (e.g. clicks and hovers).' + 'If you&quot;ve found an element that is not being tracked, you can select it here. ' + 'This will ensure the additional metrics are shown in your Heatmaps. ' + 'The CSS selectors of the selected elements will appear in the list below. ' + '</p>' + '<p>' + 'Click "Hide to navigate" or "Save and close" to finish. Check our <a href="https://help.mouseflow.com/en/articles/5973120-excluded-whitelisted-tracked-fields" target="_blank">Support Guide</a> for details and best practices.' + '</p>' + '<h3>Tracked elements</h3>' + '<div>' + '<output></output>' + '</div>' + '</div>' + '<div class="tool-status">' + '<div class="tool-status-text">' + _500(_13._85, _13._83, _13._106, _13._107) + '</div>' + '<div class="tool-status-buttons">' + '<button type="submit" class="btn-widget">Save and close</button>' + '<a href="#" class="green bold mf-tool-close">Close Privacy Tool</a>' + '</div>' + '</div>' + '<div class="tool-loading">' + '<h2 class="loading">Loading the Privacy Tool<i>.</i><i>.</i><i>.</i></h2>' + '</div>' + '<div class="tool-message">' + '<h3>Browser window is to small to load the Privacy Tool</h3>' + '<p>To use Mouseflow\'s Privacy Tool, you need to view the page in a larger browser window.</p>' + '</div>' + '</div>' + '</div>')
            }
            function _973(_48) {
                return _48.map(function(_9) {
                    return ('<div class="tm-tag" data-target="' + _11._150(_9) + '">' + _11._150(_9) + '<a href="#" class="btn-cross mf-remove-excluded"></a>' + '</div>')
                }).join('')
            }
            function _975(_48) {
                return _48.map(function(_9) {
                    return ('<div class="tm-tag" data-target="' + _11._150(_9) + '">' + _11._150(_9) + '<a href="#" class="btn-cross mf-remove-whitelisted"></a>' + '</div>')
                }).join('')
            }
            function _1005(_48) {
                return _48.map(function(_9) {
                    return ('<div class="tm-tag" data-target="' + _11._150(_9) + '">' + _11._150(_9) + '<a href="#" class="btn-cross mf-remove-tracked"></a>' + '</div>')
                }).join('')
            }
            function _1006(_48) {
                return _48.map(function(_9) {
                    return ('<div class="tm-tag" data-target="' + _11._150(_9) + '">' + _11._150(_9) + '<a href="#" class="btn-cross mf-remove-masked"></a>' + '</div>')
                }).join('')
            }
            function _500(_85, _83, _752, _753) {
                return '<p>You have:</p>' + '<p>' + '&nbsp;&bull; excluded <i class="emphasis"> ' + _85.length + '</i> ' + (_85.length === 1 ? 'element' : 'elements') + '<br>' + '&nbsp;&bull; masked <i class="emphasis"> ' + _753.length + '</i> ' + (_753.length === 1 ? 'element' : 'elements') + '<br>' + '&nbsp;&bull; whitelisted <i class="emphasis">' + _83.length + '</i> input ' + (_83.length === 1 ? 'field' : 'fields') + '<br>' + '&nbsp;&bull; tracked <i class="emphasis">' + _752.length + '</i> input ' + (_752.length === 1 ? 'element' : 'elements') + '</p>'
            }
            function _1007() {
                var _140 = new CSSStyleSheet();
                _140.replace(_434());
                return _140
            }
            function _434() {
                return ('@font-face {' + 'font-family: "Open Sans";' + 'font-style: normal;' + 'font-weight: 400;' + 'src: url(https://cdn.mouseflow.com/fonts/opensans/opensans-regular.woff2) format("woff2");' + '}' + '@font-face {' + 'font-family: "Open Sans";' + 'font-style: normal;' + 'font-weight: 700;' + 'src: url(https://cdn.mouseflow.com/fonts/opensans/opensans-bold.woff2) format("woff2");' + '}' + ':root {' + '--deep-ocean: #08163c;' + '--dusty-cloud: #f7f9fc;' + '--dark-border: #bbc8e0;' + '--lighter-navy: #d4dbe3;' + '--dark-mode: #10172D;' + '--serious-business: #0b65e3;' + '--light-blue: #66A7FD;' + '--subtle-warmth: #7162e3;' + '--lighter-aqua: #ebf2fa;' + '--dusty-cloud-darker: #E4E9F2;' + '--deep-ocean-light: #A1B2D3;' + '--redwine-vibes: #cd575f;' + '}' + '.mf-highlight {' + 'cursor: pointer !important;' + '}' + '.mf-privacy-tool-opened iframe {' + 'pointer-events: none;' + '}' + '#mouseflow {' + 'font-weight: 400;' + 'font-family: \'Open Sans\', Arial, sans-serif;' + '}' + '#mouseflow .highlight-box {' + 'background-color: #add8e6;' + 'border: 2px dotted #808080;' + 'position: absolute;' + 'border-radius: 2px;' + 'z-index: 2147483646;' + 'cursor: pointer;' + 'pointer-events: none;' + 'opacity: 0.5;' + '-webkit-transition: opacity .075s linear;' + 'transition: opacity .075s linear;' + '}' + '#mouseflow .highlight-box.hidden,' + '#mouseflow .tool-closed .highlight-box {' + 'opacity: 0;' + '}' + '#mouseflow .highlight-box.highlight-excluded {' + 'background-color: #FFD2CF80;' + 'opacity: 1;' + 'pointer-events: initial;' + '}' + '#mouseflow .highlight-box.highlight-whitelisted {' + 'background-color: #70C59780;' + 'opacity: 1;' + 'pointer-events: initial;' + '}' + '#mouseflow .highlight-box.highlight-tracked {' + 'background-color: #92C6FB80;' + 'opacity: 1;' + 'pointer-events: initial;' + '}' + '#mouseflow .highlight-box.highlight-masked {' + 'background-color: #FFECBD80;' + 'opacity: 1;' + 'pointer-events: initial;' + '}' + '#mouseflow .tool-closed .highlight-box.highlight-excluded,' + '#mouseflow .tool-closed .highlight-box.highlight-whitelisted,' + '#mouseflow .tool-closed .highlight-box.highlight-masked,' + '#mouseflow .tool-closed .highlight-box.highlight-tracked {' + 'pointer-events: none;' + '}' + '#mouseflow .btn-widget {' + 'background: var(--serious-business);' + '}' + '#mouseflow .widget-header {' + 'background: var(--dusty-cloud);' + '}' + '#mouseflow .widget-text,' + '#mouseflow .btn-arrow,' + '#mouseflow .btn-cross {' + 'color: var(--deep-ocean);' + '}' + '#mouseflow .btn-widget {' + 'color: white;' + '}' + '#mouseflow .tm-tag {' + 'margin: 7px 7px 0 0;' + 'padding: 7px;' + 'display: inline-block;' + 'border-radius: 8px;' + 'border: 1px solid var(--dark-border);' + 'background-color: var(--dusty-cloud);' + 'color: var(--deep-ocean);' + 'font-size: 13px;' + '}' + '#mouseflow .step {' + 'visibility: hidden;' + 'opacity: 0;' + 'position: fixed;' + 'bottom: 30px;' + 'right: 30px;' + 'z-index: 2147483647;' + 'width: 300px;' + 'border-radius: 8px;' + 'border: 1px solid var(--deep-ocean);' + 'overflow: hidden;' + '}' + '#mouseflow a:hover {' + 'text-decoration: underline;' + '}' + '#mouseflow h2 {' + 'font-size: 21px;' + 'font-weight: 700;' + 'line-height: 1.4em;' + 'margin-bottom: 6px;' + '}' + '#mouseflow h3 {' + 'font-size: 16px;' + 'font-weight: 700;' + 'line-height: 1.4em;' + 'color: #08163C;' + '}' + '#mouseflow p {' + 'margin-bottom: 8px;' + 'line-height: 1.4em;' + '}' + '#mouseflow .green {' + 'color: var(--deep-ocean);' + '}' + '#mouseflow .red {' + 'color: var(--redwine-vibes);' + '}' + '#mouseflow .emphasis {' + 'color: var(--subtle-warmth);' + 'font-weight: 700;' + '}' + '#mouseflow .bold {' + 'font-weight: 700;' + '}' + '#mouseflow .tool-container {' + 'visibility: visible;' + 'opacity: 0;' + 'position: fixed;' + 'bottom: 0;' + 'left: 0;' + 'width: 100%;' + 'height: 350px;' + 'max-height: 40%;' + 'overflow: hidden;' + 'background-color: white;' + 'box-shadow: 0 0 6px var(--deep-ocean-light);' + 'z-index: 2147483647;' + '}' + '#mouseflow .tool-header {' + 'background-color: var(--dusty-cloud);' + 'height: 58px;' + 'border: 1px solid var(--dusty-cloud-darker);' + '}' + '#mouseflow .tool-title { ' + 'display: flex;' + 'vertical-align: middle;' + 'align-items: center;' + '}' + '#mouseflow .logo {' + 'display: inline;' + 'height: 30px;' + 'margin: 14px 10px;' + 'fill: black;' + '}' + '#mouseflow .tool-toggle,' + '#mouseflow .tool-close {' + 'margin-left: auto;' + 'padding: 18px 24px;' + '}' + '#mouseflow .is-loading .tool-close {' + 'display: block;' + '}' + '#mouseflow .is-loading .tool-toggle,' + '#mouseflow .tool-close {' + 'display: none;' + '}' + '#mouseflow .tool-toggle-text {' + 'display: inline-block;' + 'color: var(--deep-ocean);' + 'font-size: 16px;' + 'font-weight: 700;' + '}' + '#mouseflow .tool-toggle-icon {' + 'width: 23px;' + 'display: inline-block;' + 'position: relative;' + 'top: 0px;' + '}' + '#mouseflow .tool-close .tool-toggle-icon {' + 'top: 4px;' + '}' + '#mouseflow .tool-content {' + 'height: calc(100% - 58px);' + '}' + '#mouseflow .tool-menu {' + 'width: 15%;' + 'height: 100%;' + 'float: left;' + '}' + '#mouseflow .tool-menu-item {' + 'background-color: var(--dusty-cloud);' + 'color: var(--deep-ocean);' + 'cursor: pointer;' + 'height: 40px;' + 'padding: 12px;' + '}' + '#mouseflow .tool-menu-item.active {' + 'position: relative;' + 'background-color: var(--lighter-navy);' + 'color: var(--deep-ocean);' + 'cursor: default;' + '}' + '#mouseflow .tool-exclude,' + '#mouseflow .tool-whitelist,' + '#mouseflow .tool-track,' + '#mouseflow .tool-masked {' + 'display: none;' + 'width: 70%;' + 'height: 100%;' + 'float: left;' + 'color: var(--deep-ocean);' + 'overflow-y: auto;' + 'overflow-x: hidden;' + 'padding: 10px 20px;' + '}' + '#mouseflow .tool-exclude p, #mouseflow .tool-whitelist p, #mouseflow .tool-track p, #mouseflow .tool-masked p {' + 'color: black;' + '}' + '#mouseflow .tool-exclude.active,' + '#mouseflow .tool-whitelist.active,' + '#mouseflow .tool-masked.active,' + '#mouseflow .tool-track.active {' + 'display: block;' + '}' + '#mouseflow .tool-exclude::-webkit-scrollbar,' + '#mouseflow .tool-whitelist::-webkit-scrollbar,' + '#mouseflow .tool-masked::-webkit-scrollbar,' + '#mouseflow .tool-track::-webkit-scrollbar {' + 'width: 8px;' + '}' + '#mouseflow .tool-exclude::-webkit-scrollbar-track,' + '#mouseflow .tool-whitelist::-webkit-scrollbar-track,' + '#mouseflow .tool-masked::-webkit-scrollbar-track,' + '#mouseflow .tool-track::-webkit-scrollbar-track {' + 'border-radius: 10px;' + 'background-color: #F5F5F5;' + '-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);' + '}' + '#mouseflow .tool-exclude::-webkit-scrollbar-thumb,' + '#mouseflow .tool-whitelist::-webkit-scrollbar-thumb,' + '#mouseflow .tool-masked::-webkit-scrollbar-thumb,' + '#mouseflow .tool-track::-webkit-scrollbar-thumb {' + 'border-radius: 10px;' + 'background-color: #a7a7a7;' + '-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);' + '}' + '#mouseflow .tool-status {' + 'width: 15%;' + 'background-color: var(--dusty-cloud);' + 'color: var(--deep-ocean);' + 'height: 100%;' + 'float: left;' + 'position: relative;' + '}' + '#mouseflow .tool-status-text {' + 'font-size: 16px;' + 'font-weight: 300;' + 'text-align: left;' + 'padding: 0 15px;' + 'position: absolute;' + 'top: 40px;' + '}' + '#mouseflow .tool-status-buttons {' + 'width: 100%;' + 'text-align: center;' + 'position: absolute;' + 'padding: 0 30px;' + 'bottom: 40px;' + '}' + '#mouseflow .tool-loading {' + 'width: 100%;' + 'height: calc(100% - 58px);' + 'background-color: white;' + 'color: rgb(71, 64, 62);' + 'position: absolute;' + 'top: 58px;' + 'z-index: 2;' + 'visibility: hidden;' + 'opacity: 0;' + '-webkit-animation: fadeOut .3s linear;' + 'animation: fadeOut .3s linear;' + '}' + '#mouseflow .is-loading .tool-loading {' + 'visibility: visible;' + 'opacity: 1;' + '-webkit-animation: fadeIn .3s linear;' + 'animation: fadeIn .3s linear;' + '}' + '#mouseflow .tool-loading h2 {' + 'position: absolute;' + 'left: 50%;' + 'top: 50%;' + '-webkit-transform: translate(-50%, -50%);' + '-ms-transform: translate(-50%, -50%);' + 'transform: translate(-50%, -50%);' + '}' + '#mouseflow .widget-header {' + 'color: #fff;' + 'padding: 12px 15px;' + 'vertical-align: middle;' + 'overflow: hidden;' + 'position: relative;' + 'z-index: 1;' + '-webkit-transition: opacity .3s linear;' + 'transition: opacity .3s linear;' + '}' + '#mouseflow .widget-header:hover {' + 'background-color: var(--lighter-aqua);' + '}' + '#mouseflow .widget-text {' + 'font-size: 16px;' + 'line-height: 20px;' + 'width: 245px;' + 'display: inline-block;' + 'vertical-align: middle;' + '}' + '#mouseflow .widget-toggle {' + 'width: 20px;' + 'display: inline-block;' + 'vertical-align: middle;' + 'margin: 0;' + '}' + '#mouseflow .btn-arrow,' + '#mouseflow .btn-cross {' + 'float: right;' + 'z-index: 10;' + 'line-height: .5;' + '}' + '#mouseflow .tool-toggle-icon .btn-arrow,' + '#mouseflow .tool-toggle-icon .btn-cross {' + 'font-size: 23px;' + '}' + '#mouseflow .widget-toggle .btn-arrow {' + 'font-size: 23px;' + '}' + '#mouseflow .tm-tag .btn-cross {' + 'margin: 3px 0 0 7px;' + 'font-weight: 700;' + 'font-size: 16px;' + '}' + '#mouseflow .btn-arrow--up {' + '-webkit-transform: rotate(-90deg) scale(1.5, 1.5);' + '-ms-transform: rotate(-90deg) scale(1.5, 1.5);' + 'transform: rotate(-90deg) scale(1.5, 1.5);' + '}' + '#mouseflow .btn-arrow--down {' + '-webkit-transform: rotate(+90deg) scale(1.5, 1.5);' + '-ms-transform: rotate(+90deg) scale(1.5, 1.5);' + 'transform: rotate(+90deg) scale(1.5, 1.5);' + '}' + '#mouseflow .widget-toggle .btn-arrow:before {' + 'content: "";' + 'display: inline;' + 'position: absolute;' + 'top: -185px;' + 'left: -15px;' + 'right: -15px;' + 'bottom: -15px;' + 'display: block;' + '}' + '#mouseflow .tool-toggle-icon .btn-arrow:before {' + 'content: "";' + 'display: inline;' + 'position: absolute;' + 'top: -10px;' + 'left: -15px;' + 'right: -15px;' + 'bottom: -100px;' + 'display: block;' + '}' + '#mouseflow .tool-toggle-icon .btn-cross:before {' + 'content: "";' + 'display: inline;' + 'position: absolute;' + 'top: -25px;' + 'left: -150px;' + 'right: -20px;' + 'bottom: -20px;' + 'display: block;' + '}' + '#mouseflow .btn-arrow:after {' + 'content: "\\203a";' + 'display: inline;' + '}' + '#mouseflow .btn-cross:after {' + 'content: "\\00d7";' + 'display: inline;' + 'top: -4px;' + 'position: relative;' + '}' + '#mouseflow .tm-tag .btn-cross:after {' + 'top: 0px;' + '}' + '#mouseflow .btn-arrow:hover,' + '#mouseflow .btn-cross:hover {' + 'text-decoration: none;' + '}' + '#mouseflow .btn-widget {' + 'width: 100%;' + 'height: 38px;' + 'border: none;' + 'border-radius: 8px;' + 'overflow: hidden;' + 'position: relative;' + 'z-index: 1;' + 'cursor: pointer;' + 'display: block;' + 'padding: 10px;' + 'font-size: 16px;' + 'font-family: inherit;' + 'font-weight: bold;' + 'text-align: center;' + 'outline: none;' + 'color: var(--dusty-cloud);' + 'margin-bottom: 10px;' + '-webkit-transition: background-color .3s linear;' + 'transition: background-color .3s linear;' + '}' + '#mouseflow .btn-widget:hover {' + 'text-decoration: none;' + 'background-color: var(--light-blue);' + '}' + '#mouseflow .privacy-tool {' + 'height: 350px;' + 'max-height: 40%;' + '-webkit-transition: height .5s ease-out;' + 'transition: height .5s ease-out;' + '}' + '#mouseflow .privacy-tool.tool-closed {' + 'height: 0;' + '}' + '#mouseflow .tool-closed .step {' + 'visibility: visible;' + '}' + '#mouseflow .tool-closed .tool-container {' + 'visibility: hidden;' + '}' + '#mouseflow .step.fade-in,' + '#mouseflow .tool-container.fade-in {' + '-webkit-animation: fadeUpIn .8s cubic-bezier(0, 0, 0, 1) both;' + 'animation: fadeUpIn .8s cubic-bezier(0, 0, 0, 1) both;' + '}' + '#mouseflow .step.fade-out,' + '#mouseflow .tool-container.fade-out {' + '-webkit-animation: fadeDownOut .8s cubic-bezier(0, 0, 0, 1);' + 'animation: fadeDownOut .8s cubic-bezier(0, 0, 0, 1);' + '}' + '#mouseflow .btn-widget.loading {' + 'cursor: default;' + '}' + '#mouseflow .btn-widget.loading:before {' + 'display: none;' + '}' + '#mouseflow .loading i {' + 'animation-name: blink;' + 'animation-duration: 1.4s;' + 'animation-iteration-count: infinite;' + 'animation-fill-mode: both;' + '}' + '#mouseflow .loading i:nth-child(2) {' + 'animation-delay: .2s;' + '}' + '#mouseflow .loading i:nth-child(3) {' + 'animation-delay: .4s;' + '}' + '#mouseflow .loading i:nth-child(4) {' + 'animation-delay: .6s;' + '}' + '#mouseflow .tool-message {' + 'width: 100%;' + 'height: calc(100% - 58px);' + 'background-color: white;' + 'color: rgb(71, 64, 62);' + 'position: absolute;' + 'top: 58px;' + 'z-index: 3;' + 'padding: 20px;' + 'overflow-y: auto;' + 'overflow-x: hidden;' + 'visibility: hidden;' + 'opacity: 0;' + '-webkit-animation: fadeOut .3s linear;' + 'animation: fadeOut .3s linear;' + '}' + '#mouseflow .tool-message h3 {' + 'margin-bottom: 20px;' + '}' + '@media (max-width: 1300px) {' + '#mouseflow .tool-exclude,' + '#mouseflow .tool-whitelist,' + '#mouseflow .tool-masked,' + '#mouseflow .tool-track {' + 'width: 60%;' + '}' + '#mouseflow .tool-status {' + 'width: 25%;' + '}' + '#mouseflow .tool-status-buttons {' + 'bottom: 10px;' + '}' + '}' + '@media (max-width: 850px) {' + '#mouseflow .tool-menu-item {' + 'height: 56px;' + '}' + '#mouseflow .tool-status-text {' + 'font-size: 14px;' + '}' + '#mouseflow .btn-widget {' + 'font-size: 12px;' + '}' + '#mouseflow a.mf-tool-close {' + 'font-size: 12px;' + '}' + '}' + '@media (max-height: 800px) {' + '#mouseflow .tool-status-text {' + 'top: 20px;' + '}' + '#mouseflow .tool-status-buttons {' + 'bottom: 20px;' + '}' + '}' + '@media (max-height: 650px) {' + '#mouseflow .tool-status-text {' + 'font-size: 14px;' + '}' + '}' + '@media (max-width: 650px), (max-height: 600px) {' + '#mouseflow .tool-message {' + 'visibility: visible;' + 'opacity: 1;' + '-webkit-animation: fadeIn .3s linear;' + 'animation: fadeIn .3s linear;' + '}' + '}' + '@-webkit-keyframes fadeUpIn {' + '0% {' + '-webkit-transform: translateY(50px);' + '-ms-transform: translateY(50px);' + 'transform: translateY(50px);' + 'opacity: 0;' + '}' + '100% {' + '-webkit-transform: translateY(0);' + '-ms-transform: translateY(0);' + 'transform: translateY(0);' + 'opacity: 1;' + '}' + '}' + '@keyframes fadeUpIn {' + '0% {' + '-webkit-transform: translateY(50px);' + '-ms-transform: translateY(50px);' + 'transform: translateY(50px);' + 'opacity: 0;' + '}' + '100% {' + '-webkit-transform: translateY(0);' + '-ms-transform: translateY(0);' + 'transform: translateY(0);' + 'opacity: 1;' + '}' + '}' + '@-webkit-keyframes fadeDownOut {' + '0% {' + 'visibility: visible;' + '-webkit-transform: translateY(0);' + '-ms-transform: translateY(0);' + 'transform: translateY(0);' + 'opacity: 1;' + '}' + '100% {' + 'visibility: hidden;' + '-webkit-transform: translateY(50px);' + '-ms-transform: translateY(50px);' + 'transform: translateY(50px);' + 'opacity: 0;' + '}' + '}' + '@keyframes fadeDownOut {' + '0% {' + 'visibility: visible;' + '-webkit-transform: translateY(0);' + '-ms-transform: translateY(0);' + 'transform: translateY(0);' + 'opacity: 1;' + '}' + '100% {' + 'visibility: hidden;' + '-webkit-transform: translateY(50px);' + '-ms-transform: translateY(50px);' + 'transform: translateY(50px);' + 'opacity: 0;' + '}' + '}' + '@-webkit-keyframes fadeIn {' + '0% {' + 'visibility: visible;' + 'opacity: 0;' + '}' + '100% {' + 'visibility: visible;' + 'opacity: 1;' + '}' + '}' + '@keyframes fadeIn {' + '0% {' + 'visibility: visible;' + 'opacity: 0;' + '}' + '100% {' + 'visibility: visible;' + 'opacity: 1;' + '}' + '}' + '@-webkit-keyframes fadeOut {' + '0% {' + 'visibility: visible;' + 'opacity: 1;' + '}' + '100% {' + 'visibility: hidden;' + 'opacity: 0;' + '}' + '}' + '@keyframes fadeOut {' + '0% {' + 'visibility: visible;' + 'opacity: 1;' + '}' + '100% {' + 'visibility: hidden;' + 'opacity: 0;' + '}' + '}' + '@keyframes blink {' + '0% {' + 'opacity: .2;' + '}' + '20% {' + 'opacity: 1;' + '}' + '100% {' + 'opacity: .2;' + '}' + '}')
            }
            this._35 = _35;
            this._65 = _65
        }
        function _1033(_2, _95, _25, _11, _23, _3, _88) {
            var _7, _98, _138, _47, _758, _430;
            function _35(_216, _313, _1038, _66) {
                _47 = _313;
                _7 = _216;
                _430 = _66;
                _758 = !!_1038;
                _7('Tagger tool starting');
                _98 = _95._225();
                if (!_98) {
                    _7('Tagger tool not initiated - could not create root HTML element');
                    return
                }
                if (!_2.opener) {
                    _7('Tagger tool not initiated - window.opener is missing');
                    return
                }
                _208()
            }
            function _208() {
                _23._39(_2, 'message', function(_41) {
                    if (_41.origin !== _47)
                        return;
                    _320(_41.data);
                    switch (_41.data.message) {
                    case 'MouseflowTaggerTool_Init_Received':
                        _2.clearInterval(_138);
                        break;
                    case 'MouseflowTaggerTool_Init_Success':
                        _315(_41.data.scripts, function() {
                            taggerToolWidget.start(_88._131());
                            if (typeof _430 === 'function')
                                _430();
                            _7('Tagger tool scripts loaded')
                        });
                        break
                    }
                });
                _138 = _2.setInterval(_757, 500);
                _2.setTimeout(function() {
                    _2.clearInterval(_138)
                }, 10000);
                _757()
            }
            function _757() {
                _183({
                    message: 'MouseflowTaggerTool_Init',
                    startWithHeatMap: _758
                })
            }
            function _315(_160, _66) {
                if (!_160)
                    return;
                var _217 = 0;
                function _318() {
                    if (_217 >= _160.length) {
                        _66();
                        return
                    }
                    var _68 = _160[_217];
                    _423(_68);
                    _217++;
                    var _161 = document.createElement('script');
                    if (_68.startsWith('/'))
                        _161.src = _47 + _68;
                    else
                        _161.src = _47 + '/' + _68;
                    _161.onload = _318;
                    _98.appendChild(_161)
                }
                _318()
            }
            function _423(_68) {
                _7('Tagger tool loading script: ' + _68)
            }
            function _320(_10) {
                if (_10.message && _10.message.indexOf('MouseflowTaggerTool_') === 0)
                    _7('Received ' + _10.message + (_10.requestUrl ? ', request URL: ' + _10.requestUrl : ''))
            }
            function _183(_10) {
                _2.opener.postMessage(_10, _47);
                _7('Sent ' + _10.message + (_10.requestUrl ? ', request URL: ' + _10.requestUrl : ''))
            }
            this._35 = _35
        }
        function _1027(_3, _470, _471) {
            function _131() {
                if (_3.forcePath && _3.path)
                    return _3.path.toLowerCase();
                var _79 = (_3.crossDomainSupport ? _3.location.hostname : '') + (_3.path || (_3.decodePathName ? decodeURIComponent(_3.location.pathname) : _3.location.pathname)).toLowerCase();
                var _122 = (_3.includeHashInPath ? _3.location.hash : '').toLowerCase();
                var _117 = _3.location.search.toLowerCase();
                if (_79 !== '/' && _79.slice(-1) === '/' && (!_3.includeQueryStringInPath && !_3.includeHashInPath))
                    _79 = _79.slice(0, -1);
                return _1039(_79 + (_3.includeQueryStringInPath ? _117 : '') + _122) || _79 + _1040(_117) + _122
            }
            function _1039(_79) {
                return _470.filter(function(_81) {
                    return _1042(_79, _81)
                }).map(function(_81) {
                    return _1043(_81)
                })[0]
            }
            function _1040(_117) {
                if (_117[0] === '?')
                    _117 = _117.slice(1);
                var _70;
                var _458 = [];
                var _1041 = /([^&=]+)=?([^&]*)/g;
                while ((_70 = _1041.exec(_117)) !== null) {
                    var _50 = _471.indexOf(_70[1]);
                    if (_70[2] && _50 > -1)
                        _458[_50] = _70[0]
                }
                return _458.length ? '?' + _458.filter(hasValue).join('&') : (_3.includeQueryStringInPath && _117 ? '?' + _117 : '')
            }
            function _1042(_79, _81) {
                var _761 = _79.indexOf('?');
                if (!_3.includeQueryStringInPath && _761 > -1)
                    _79 = _79.slice(0, _761);
                switch (_81._20) {
                case 'equals':
                    return _79 === _81._5.toLowerCase();
                case 'startsWith':
                    return _79.substr(0, _81._5.length) === _81._5;
                case 'endsWith':
                    return _79.substr(-_81._5.length) === _81._5;
                case 'contains':
                    return _79.includes(_81._5.toLowerCase());
                case 'regex':
                    return new RegExp(_81._5).test(_79);
                default:
                    return false
                }
            }
            function _1043(_81) {
                if (_81._1044)
                    return _81._1044;
                switch (_81._20) {
                case 'startsWith':
                    return _81._5 + '*';
                case 'endsWith':
                    return '*' + _81._5;
                default:
                    return _81._5
                }
            }
            function hasValue(value) {
                return value
            }
            this._131 = _131
        }
        function _740(_20, _2, _11, _7) {
            var _223 = _1046(_20);
            this._158 = function(_16) {
                try {
                    return _223.getItem(_16) || null
                } catch (e) {
                    _7(e);
                    return null
                }
            }
            ;
            this._231 = function(_16) {
                try {
                    return _11._285(this._158(_16)) || null
                } catch (e) {
                    _7(e);
                    return null
                }
            }
            ;
            this._126 = function(_16, _5) {
                try {
                    _223.setItem(_16, _5);
                    return true
                } catch (e) {
                    _7(e);
                    return false
                }
            }
            ;
            this._253 = function(_16, _5) {
                try {
                    return this._126(_16, _11._121(_5))
                } catch (e) {
                    _7(e);
                    return false
                }
            }
            ;
            this._254 = function(_16) {
                try {
                    _223.removeItem(_16)
                } catch (e) {
                    _7(e)
                }
            }
            ;
            this._805 = function() {
                try {
                    var _16 = 'mf_supportsSessionStorage';
                    var _5 = '1';
                    _223.setItem(_16, _5);
                    var _1045 = _223.getItem(_16) === _5;
                    _223.removeItem(_16);
                    return _1045
                } catch (e) {
                    _7(e);
                    return false
                }
            }
            ;
            function _1046(_20) {
                switch (_20) {
                case 'local':
                    return _2.localStorage;
                case 'session':
                    return _2.sessionStorage;
                default:
                    throw Error('Unknown storage type: ' + (_20 || 'null'))
                }
            }
        }
        function _1047(_2, _11, _3, _7) {
            var _12 = _2.document;
            var _72 = _2.location;
            var _1049 = 7776000000;
            this._1048 = function(_22) {
                var _715 = _22 + '=';
                var _716 = _12.cookie.split(';');
                for (var i = 0; i < _716.length; i++) {
                    var c = _716[i];
                    while (c.charAt(0) === ' ') {
                        c = c.substring(1)
                    }
                    if (c.indexOf(_715) === 0) {
                        return c.substring(_715.length, c.length)
                    }
                }
                return ''
            }
            ;
            this._158 = function(_16) {
                try {
                    return this._1048(_16)
                } catch (e) {
                    _7(e);
                    return null
                }
            }
            ;
            this._231 = function(_16) {
                try {
                    return _11._285(this._158(_16)) || null
                } catch (e) {
                    _7(e);
                    return null
                }
            }
            ;
            this._1051 = function(_22, _5, _221, _31) {
                var _711 = '';
                if (_221 == 1) {
                    var _111 = new Date();
                    _111.setTime(_111.getTime() + _1049);
                    _711 = '; expires=' + _111.toGMTString()
                }
                var _1050 = _3.secureCookie ? 'secure;' : '';
                _12.cookie = _22 + '=' + _5 + _711 + '; path=/; domain=' + _31 + ';' + _1050 + 'SameSite=Strict;'
            }
            ;
            this._126 = function(_16, _5, _221, _31) {
                try {
                    this._1051(_16, _5, _221, _31);
                    return true
                } catch (e) {
                    _7(e);
                    return false
                }
            }
            ;
            this._253 = function(_16, _5, _221, _31) {
                try {
                    return this._126(_16, _11._121(_5), _221, _31)
                } catch (e) {
                    _7(e);
                    return false
                }
            }
            ;
            this._254 = function(_16) {
                try {
                    _12.cookie = _16 + '=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/; domain=' + _11._310(_72, _3) + ';'
                } catch (e) {
                    _7(e)
                }
            }
        }
        function _1025(_2, _11, _3, _7) {
            this._707 = function() {
                _2._mfq = []
            }
            ;
            this._260 = function() {
                if (!_2._mfq)
                    this._707();
                for (var _50 = 0; _50 < _2._mfq.length; _50++) {
                    var _54 = _2._mfq[_50];
                    if (_54 && _54.length) {
                        var _721 = true;
                        if (_54[0] === 'config')
                            _3._409.apply(_3, _54.slice(1));
                        else if (_54[0] === 'newPageView')
                            _3._486.apply(_3, _54.slice(1));
                        else
                            _721 = false;
                        if (_721)
                            delete _2._mfq[_50]
                    }
                }
            }
            ;
            this._35 = function() {
                _2._mfq = new _120(_2._mfq)
            }
            ;
            this._722 = function() {
                _2._mfq.push.apply(_2._mfq, arguments)
            }
            ;
            this._1052 = function() {
                return _2._mfq
            }
            ;
            function _120(_405) {
                if (!_405)
                    _405 = [];
                var _44 = this;
                _2.setTimeout(function() {
                    for (var _50 = 0; _50 < _405.length; _50++)
                        _44.push(_405[_50])
                }, 1)
            }
            _120.prototype.push = function(_54) {
                if (!_54)
                    return;
                try {
                    if (typeof _54 === 'object' && _54.length) {
                        _2.mouseflow[_54.slice(0, 1)].apply(_2.mouseflow, _54.slice(1))
                    } else if (typeof _54 === 'function') {
                        _54(_2.mouseflow)
                    }
                } catch (error) {
                    var _202 = 'Failed to execute item on action queue';
                    var _779 = _11._121(_54);
                    if (_779)
                        _202 += '\n' + _779;
                    _202 += '\n' + error;
                    _7(_202)
                }
            }
        }
        function _1053(_28, _11) {
            var _443 = [];
            var _1056 = ['target', 'button', 'pageX', 'pageY', 'which', 'data', 'origin', 'source', 'touches', 'key', 'clientX', 'clientY'];
            function _1057(_21, _8, _52, _442, _17) {
                var _86 = !!_17._86;
                var _778 = function(_6) {
                    var _296 = [];
                    if (_6.composedPath && ((_6.target && _6.target.shadowRoot) || _52))
                        _296 = _6.composedPath();
                    var _725 = _6;
                    _6 = _1055(_6);
                    _6.preventDefault = function() {
                        _725.preventDefault()
                    }
                    ;
                    _6.stopPropagation = function() {
                        _725.stopPropagation()
                    }
                    ;
                    if (_6.target && _6.target.shadowRoot && _296.length)
                        _6.target = _296[0];
                    if (_52) {
                        _6.delegatedTarget = _825(function(_64, _4) {
                            return _296.length ? _296[_4] : (_64 ? _28._89(_64) : _6.target)
                        }, _52);
                        if (!_6.delegatedTarget && !_17._1054)
                            return;
                        if (_17._386 && _6.target !== _6.delegatedTarget)
                            return
                    } else if (_17._386 && _6.target !== _21) {
                        return
                    }
                    if (_17._97)
                        _6.preventDefault();
                    if (_17._1191)
                        _6.stopPropagation();
                    _442.apply(this, arguments)
                };
                _21.addEventListener(_8, _778, {
                    capture: _86
                });
                _443.push({
                    _21: _21,
                    _8: _8,
                    _442: _778,
                    _86: _86
                })
            }
            function _1055(_6) {
                var _832 = {};
                _1056.forEach(function(_16) {
                    if (_6[_16] != undefined)
                        _832[_16] = _6[_16]
                });
                return _832
            }
            function _1058() {
                _443.forEach(function(_23) {
                    _23._21.removeEventListener(_23._8, _23._442, {
                        capture: _23._86
                    })
                });
                _443 = []
            }
            function _825(_824, _52, _21, _50) {
                if (!_50)
                    _50 = 0;
                _21 = _824(_21, _50);
                if (!_21 || !_52)
                    return null;
                if (_11._92(_21, _52))
                    return _21;
                return _825(_824, _52, _21, ++_50)
            }
            this._39 = function(_21, _8, _52, _66, _17) {
                if (typeof _52 === 'function') {
                    _17 = _66;
                    _66 = _52;
                    _52 = null
                }
                _1057(_21, _8, _52, _66, _17 || {})
            }
            ;
            this._843 = _1058
        }
        function _668(_3, _11) {
            function _437(_178, _298) {
                if (!_178 || !_178.length)
                    return true;
                _178 = _178.filter(function(_69) {
                    return _69 && _69._20 && _69._5
                });
                var _839 = _178.filter(function(_69) {
                    return _69._20.indexOf('not') !== 0
                });
                var _1060 = _839.length === 0 || _839.some(function(_69) {
                    return _230(_69, _298)
                });
                var _827 = _178.filter(function(_69) {
                    return _69._20.indexOf('not') === 0
                });
                var _1059 = _827.length === 0 || _827.every(function(_69) {
                    return _230(_69, _298)
                });
                return _1059 && _1060
            }
            function _230(_69, _298) {
                const _79 = _3.path || _3.location.pathname;
                const _122 = _3.includeHashInPath ? _3.location.hash : '';
                const _117 = _3.includeQueryStringInPath ? _3.location.search : '';
                const _26 = (_79 + _117 + _122).toLowerCase();
                const _791 = _298?.toLowerCase();
                const _1061 = _298 && _791 === _69._5?.toLowerCase();
                let _454 = _1061 ? _457(_69, _791) : _457(_69, _26);
                if (!_454 && _3.crossDomainSupport)
                    _454 = _457(_69, _3.location.hostname + _26);
                return _454
            }
            function _457(_69, _26) {
                const _20 = (_69._20 || '').toLowerCase();
                const _5 = (_69._5 || '').toLowerCase();
                const _395 = _11._391(_26, '/');
                const _404 = _11._391(_5, '/');
                const _1062 = {
                    equals: () => _395 === _404,
                    startswith: () => _26.startsWith(_5),
                    endswith: () => _395.endsWith(_404),
                    regex: () => new RegExp(_5).test(_26),
                    contains: () => _26.includes(_5),
                    notequals: () => _395 !== _404,
                    notstartswith: () => !_26.startsWith(_5),
                    notendswith: () => !_395.endsWith(_404),
                    notcontains: () => !_26.includes(_5)
                };
                return _1062[_20]?.() ?? true
            }
            this._437 = _437;
            this._230 = _230
        }
        function _1063(_2, _55, _436, _462) {
            const _72 = _2.location;
            const _12 = _2.document;
            const _1064 = URL.parse ?? _419;
            function _419(_19) {
                var _92 = (_19 || '').match(/^(([^:]+:)?\/?\/?(([^:/?#]+)?:?(\d+)?))(\/.*?)?(\?.*?)?(#.*)?$/);
                return {
                    href: _92[0] || '',
                    origin: _92[1] || '',
                    protocol: _92[2] || '',
                    host: _92[3] || '',
                    hostname: _92[4] || '',
                    port: _92[5] || '',
                    pathname: _92[6] || '',
                    search: _92[7] || '',
                    hash: _92[8] || ''
                }
            }
            function _701(_1037) {
                const _19 = _1064(_1037);
                return _19?.protocol && _19?.origin ? _19.origin : ''
            }
            this.debug = _2.mouseflowDebug || _72.search.indexOf('mf_debug=1') !== -1;
            this.includeDebugTime = false;
            this.forceStart = _72.search.indexOf('mf_force=1') !== -1;
            this.autoStart = _2.mouseflowAutoStart !== false && _72.search.indexOf('mf_autostart=0') === -1;
            this.enableBots = false;
            this.touchEvents = !_2.mouseflowDisableTouch;
            this.htmlDelay = _2.mouseflowHtmlDelay || 1000;
            this.newPageViewHtmlDelay = _2.mouseflowNewPageViewHtmlDelay || 500;
            this.compress = _2.mouseflowCompress !== false && _72.search.indexOf('mf_compress=0') === -1;
            this.compressFunction = null;
            this.autoTagging = _2.mouseflowAutoTagging !== false;
            this.path = _2.mouseflowPath;
            this.forcePath = false;
            this.crossDomainSupport = !!_2.mouseflowCrossDomainSupport;
            this.location = _419(_2.mouseflowHref || _72.href);
            this.hasCustomHref = !!_2.mouseflowHref;
            this.referrer = _701(_2.mouseflowReferrer || _12.referrer);
            this.htmlFetchMode = _2.mouseflowHtmlFetchMode || 'post';
            this.sessionId = _2.mouseflowSessionId;
            this.honorDoNotTrack = _2.mouseflowHonorDoNotTrack || _462;
            this.gdprEnabled = _2.mouseflowForceGdpr || _436;
            this.keyLogging = !_2.mouseflowDisableKeyLogging && !this.gdprEnabled;
            this.domReuse = !_2.mouseflowDisableDomReuse;
            this.domDeduplicator = !_2.mouseflowDisableDomDeduplicator;
            this.includeSubDomains = !_2.mouseflowExcludeSubDomains;
            this.registerSubmitTimeout = _2.mouseflowRegisterSubmitTimeout || 2000;
            this.useUnload = !!_2.mouseflowUseUnload;
            this.replaceLastFormValues = _2.mouseflowReplaceLastFormValues || !this.keyLogging || this.gdprEnabled;
            this.useAllHoverSelectors = !!_2.mouseflowUseAllHoverSelectors;
            this.enableCssRecording = !!_2.mouseflowEnableCssRecording;
            this.secureCookie = !!_2.mouseflowSecureCookie;
            this.enableSpa = true;
            this.includeHashInPath = false;
            this.includeQueryStringInPath = false;
            this.autoTagPayments = true;
            this.preferStorageApi = !!_2.mouseflowPreferStorageApi;
            this.domMutationDetectorEnable = _2.domMutationDetectorEnable !== undefined ? _2.domMutationDetectorEnable : false;
            this.domMutationUseParentNode = _2.domMutationUseParentNode !== undefined ? _2.domMutationUseParentNode : true;
            this.domMutationUsePreviousSibling = _2.domMutationUsePreviousSibling !== undefined ? _2.domMutationUsePreviousSibling : false;
            this.domMutationCountThreshold = _2.domMutationCountThreshold !== undefined ? _2.domMutationCountThreshold : 20;
            this.domMutationTimeThresholdInSeconds = _2.domMutationTimeThresholdInSeconds !== undefined ? _2.domMutationTimeThresholdInSeconds : 10;
            this.liveHeatmapsEnabled = false;
            this.privacyToolEnabled = false;
            this.taggerToolEnabled = false;
            this.useIdSelectors = _2.mouseflowUseIdSelectors !== undefined ? _2.mouseflowUseIdSelectors : true;
            this.proxyAttachShadow = true;
            this.scrollSelector = _2.mouseflowScrollSelector;
            this.autoScrollSelector = _2.mouseflowAutoScrollSelector || false;
            this.freezeElementIds = [];
            this.proxyValueSetter = false;
            this.decodePathName = false;
            this.forms = _2.mouseflowFormsConfiguration || null;
            this.notFoundIdentifiers = _2.mouseflowNotFoundIdentifiers || ["Not Found", "404"];
            this.debugDeadClick = _72.search.indexOf('mf_debugDeadClick=1') !== -1;
            this.enableDeadClick = true;
            this._260 = function() {
                if (!!_2.opener && _72.search.indexOf('mf_liveHeatmaps') !== -1) {
                    this.liveHeatmapsEnabled = true;
                    this.taggerToolEnabled = true;
                    return
                }
                if (_72.search.indexOf('mf_inspect') !== -1) {
                    this.privacyToolEnabled = true;
                    return
                }
                if (!!_2.opener && (typeof _2.name === 'string' && _2.name.indexOf('mf_liveHeatmaps') === 0)) {
                    this.liveHeatmapsEnabled = true;
                    this.taggerToolEnabled = true;
                    return
                }
                if (_2.name === 'mf_privacyTool') {
                    this.privacyToolEnabled = true;
                    return
                }
                if (_2.name.indexOf('mf_tagger_tool') > -1) {
                    this.taggerToolEnabled = true;
                    return
                }
                if (!_55._805())
                    return;
                if (_2.opener) {
                    if (_55._158('mf_privacyTool'))
                        this.privacyToolEnabled = true;
                    else if (_55._158('mf_liveHeatmaps')) {
                        this.liveHeatmapsEnabled = true;
                        this.taggerToolEnabled = true
                    }
                }
            }
            ;
            this._486 = function(_26, _72) {
                this._409('href', _2.location.href);
                this.path = undefined;
                if (_26)
                    this.path = _26.toString();
                if (_72) {
                    this.location = _72;
                    this.hasCustomHref = true
                }
            }
            ;
            this._409 = function(_16, _5) {
                switch (_16) {
                case 'href':
                    this.location = _419(_5);
                    this.hasCustomHref = _5 !== _2.location.href;
                    break;
                case 'keyLogging':
                    this.keyLogging = this.keyLogging && _5;
                    break;
                case 'gdprEnabled':
                    this.gdprEnabled = this.gdprEnabled || _5;
                    break;
                case 'freezeElementIds':
                    this.freezeElementIds = Array.isArray(_5) ? _5 : ['' + _5];
                    break;
                case 'referrer':
                    this.referrer = _701(_5);
                    break;
                case '_cssSelectorBlackList':
                case '_cssSelectorWhiteList':
                case '_cssSelectorTracked':
                case '_cssSelectorMasked':
                case '_websiteId':
                case '_enforcePrivacy':
                case '_isMigrated':
                case '_initialDomLimit':
                case 'hasCustomHref':
                    break;
                default:
                    this[_16] = _5;
                    break
                }
            }
        }
        function _1026(_2) {
            var _12 = _2.document, _213;
            function _225() {
                if (_12.body && !_213) {
                    _213 = _1036();
                    _12.body.appendChild(_213)
                }
                return _213
            }
            function _422() {
                if (_213) {
                    _12.body.removeChild(_213);
                    _213 = undefined
                }
            }
            function _1036() {
                var _30 = _12.createElement('div');
                _30.id = 'mouseflow';
                var _58 = _12.createElement('style');
                _58.type = 'text/css';
                _58.innerHTML = _1035();
                var _418 = _12.createElement('div');
                _418.className = 'load-font';
                _418.innerHTML = 'load font';
                _30.appendChild(_58);
                _30.appendChild(_418);
                return _30
            }
            function _1035() {
                return ('@font-face {' + 'font-family: "Open Sans";' + 'font-style: normal;' + 'font-weight: 400;' + 'src: url(https://cdn.mouseflow.com/fonts/opensans/opensans-regular.woff2) format("woff2");' + '}' + '@font-face {' + 'font-family: "Open Sans";' + 'font-style: normal;' + 'font-weight: 700;' + 'src: url(https://cdn.mouseflow.com/fonts/opensans/opensans-bold.woff2) format("woff2");' + '}' + '#mouseflow :before, #mouseflow :after {' + 'display: none;' + '}' + '#mouseflow,' + '#mouseflow * {' + 'background: transparent;' + 'border: 0;' + 'border-image-outset: 0s;' + 'border-image-repeat: stretch;' + 'border-image-slice: 100%;' + 'border-image-source: none;' + 'border-image-width: 1;' + 'border-color: #000;' + 'border-radius: 0;' + 'border-width: 0;' + 'border-style: none;' + 'box-sizing: border-box;' + 'clip: auto;' + 'float: none;' + 'color: inherit;' + 'font-family: inherit;' + 'font-size: inherit;' + 'font-style: inherit;' + 'font-weight: inherit;' + 'width: auto;' + 'height: auto;' + 'min-width: auto;' + 'min-height: auto;' + 'max-width: auto;' + 'max-height: auto;' + 'letter-spacing: normal;' + 'line-height: normal;' + 'margin: 0;' + 'padding: 0;' + 'text-decoration: none;' + 'text-indent: 0;' + 'text-transform: none;' + 'vertical-align: baseline;' + 'text-align: left;' + 'overflow: visible;' + 'top: auto;' + 'right: auto;' + 'bottom: auto;' + 'left: auto;' + '-webkit-transition: none;' + 'transition: none;' + '}' + '#mouseflow {' + 'font: 400 14px/1.4 "Open Sans", sans-serif;' + 'color: #666;' + '}' + '#mouseflow .load-font {' + 'position: absolute;' + 'visibility: hidden;' + 'width: 0px;' + 'height: 0px;' + 'overflow: hidden;' + '}')
            }
            this._225 = _225;
            this._422 = _422
        }
        function _1020(_2) {
            this._71 = function() {
                return _399('setTimeout').apply(_2, arguments)
            }
            ;
            this._397 = function() {
                return _399('setInterval').apply(_2, arguments)
            }
            ;
            this._146 = function() {
                _399('clearTimeout').apply(_2, arguments)
            }
            ;
            this._203 = function() {
                _399('clearInterval').apply(_2, arguments)
            }
            ;
            function _399(_22) {
                var _612;
                if (_2.Zone && _2.Zone.__symbol__)
                    _612 = _2[_2.Zone.__symbol__(_22)];
                return _612 || _2[_22]
            }
        }
        function _1008(_2, _105, _464, _28) {
            var _12 = _2.document;
            function _171(_1, _96) {
                var _112 = _1.classList;
                if (_112 && _96)
                    return _112.contains(_96);
                var _169 = _220(_1);
                return _169.indexOf(_96) !== -1
            }
            function _109(_1, _96) {
                var _112 = _1.classList;
                if (_112 && _96) {
                    _1.classList.add(_96);
                    return
                }
                var _169 = _220(_1);
                if (_169.indexOf(_96) === -1)
                    _169.push(_96);
                _1.className = _169.join(' ')
            }
            function _61(_1, _96) {
                var _112 = _1.classList;
                if (_112 && _96) {
                    _1.classList.remove(_96);
                    return
                }
                var _169 = _220(_1);
                var _50 = _169.indexOf(_96);
                if (_50 !== -1)
                    _169.splice(_50, 1);
                _1.className = _169.join(' ')
            }
            function _329(_1, _96, _498) {
                if (_498 === undefined)
                    _498 = !_171(_1, _96);
                if (_498) {
                    _109(_1, _96)
                } else {
                    _61(_1, _96)
                }
            }
            function _220(_1) {
                var _590 = typeof _1.className === 'string' ? _1.className.replace(/\s+/g, ' ').trim() : '';
                return _590 !== '' ? _590.split(' ') : []
            }
            function _515() {
                return _105.max((_12.body || {}).scrollHeight || 0, (_12.body || {}).offsetHeight || 0, _12.documentElement.scrollHeight || 0, _12.documentElement.offsetHeight || 0, _12.documentElement.clientHeight || 0)
            }
            function _524() {
                var _242 = null;
                var _1009 = _12.body.scrollHeight;
                _12.querySelectorAll('body *').forEach(function(_64) {
                    if (_64.tagName === 'LINKBAR-CONTAINER')
                        return;
                    if (!_242)
                        _242 = _64;
                    if (_242.scrollHeight < _64.scrollHeight)
                        _242 = _64
                });
                return _242.scrollHeight > _1009 ? _242 : null
            }
            function _495(_3) {
                if (!_3.autoScrollSelector)
                    return _12.querySelector(_3.scrollSelector);
                return _524()
            }
            function _52(_51, _1010) {
                var _32 = [];
                if (!_51)
                    return _32;
                for (var _4 = 0; _4 < _51.length; _4++) {
                    if (_1010(_51[_4], _4))
                        _32.push(_51[_4])
                }
                return _32
            }
            function _239(_172) {
                var _4 = Math.floor(Math.log(_172) / Math.log(1024));
                return (_172 / Math.pow(1024, _4)).toFixed(2) * 1 + ' ' + ['B', 'KB', 'MB', 'GB', 'TB'][_4]
            }
            function _684(_295) {
                var _400 = _295.length;
                while (_400) {
                    var _4 = _105.floor(_105.random() * _400--);
                    var _1011 = _295[_400];
                    _295[_400] = _295[_4];
                    _295[_4] = _1011
                }
            }
            function _150(_43) {
                if (!_43)
                    return _43;
                return _43.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            }
            function _518(_43) {
                if (!_43)
                    return _43;
                return _43.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
            }
            function _522(url) {
                return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(url.trim())
            }
            function _687(_43) {
                return _43.replace(/\[([^\]]+)\]\(([^)]+)\)/g, function(_70, _1012, _19) {
                    _19 = _518(_19);
                    return _522(_19) ? '<a href="' + _19 + '" target="_blank">' + _1012 + '</a>' : _70
                })
            }
            function _174(_5) {
                if (!_5)
                    return _5;
                return _5.replace(/([^a-zA-Z\d-_])/g, '\\$1').replace(/^(-)?(\d)/, '$1\\3$2 ')
            }
            function _285(_5) {
                return _5 ? _464.parse(_5) : undefined
            }
            function _121(_5) {
                var _32;
                if (Array.prototype.toJSON) {
                    var _1013 = Array.prototype.toJSON;
                    delete Array.prototype.toJSON;
                    _32 = _464.stringify(_5);
                    Array.prototype.toJSON = _1013
                } else if (_5) {
                    _32 = _464.stringify(_5)
                }
                return _32
            }
            function _663(_1014, _1015) {
                var _244 = _392(_1014);
                var _43 = _392(_1015);
                var _214 = _105.max(_244.length, _43.length);
                if (_43 == 'NaN' || _244 == 'NaN') {
                    return false
                }
                for (var _4 = 0; _4 < _214; _4++) {
                    _244[_4] = _244[_4] || 0;
                    _43[_4] = _43[_4] || 0;
                    if (_244[_4] == _43[_4]) {
                        continue
                    }
                    return _244[_4] > _43[_4]
                }
                return true
            }
            function _392(_1016) {
                var _563 = _1016.split('.');
                var _586 = [];
                for (var _4 = 0; _4 < _563.length; _4++) {
                    _586.push(parseInt(_563[_4]))
                }
                return _586
            }
            function _391(_43, _1017) {
                var _32 = _43;
                while (_32[_32.length - 1] === (_1017 || ' '))
                    _32 = _32.slice(0, -1);
                return _32
            }
            function _643(_398) {
                var _70;
                var _117 = /([^?&=]+)(?:=([^&]*))?/g;
                var _576 = {};
                while ((_70 = _117.exec(_398)) !== null) {
                    var _16 = _70[1];
                    var _5 = _70[2] ? window.decodeURIComponent(_70[2].replace(/\+/g, ' ')) : null;
                    _576[_16] = _5
                }
                return _576
            }
            const platformRegexes = [{
                family: 'windows',
                regex: [/microsoft (windows) (vista|xp)/i, /(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[/]?([\d.\w]*)/i, /(windows)[/]?([ntce\d.]+\w)(?!.+xbox)/i, /(win(?=3|9|n)|win 9x )([nt\d.]+)/i]
            }, {
                family: 'ios',
                regex: [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[/])([\d.]+)/i, /cfnetwork\/.+darwin/i]
            }, {
                family: 'macos',
                regex: [/(mac os x) ?([\w. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i]
            }, {
                family: 'android',
                regex: [/droid ([\w.]+)\b.+android[- ]x86/i, /(android)[-/]?([\w.]*)/i]
            }, {
                family: 'linux',
                regex: [/\b(joli|palm)\b ?(?:os)?\/?([\w.]*)/i, /(mint)[/()]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-/]?(?!chrom|package)([-\w.]*)/i, /(hurd|linux) ?([\w.]*)/i, /(gnu) ?([\w.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[/]?(?!amd|[ix346]{1,2}86)([\w.]*)/i, /(haiku) (\w+)/i]
            }];
            const browserRegexes = [{
                browser: 'chrome',
                regex: [/\b(?:crmo|crios)\/([\w.]+)/i]
            }, {
                browser: 'edge',
                regex: [/edg(?:e|ios|a)?\/([\w.]+)/i]
            }, {
                browser: 'opera',
                regex: [/(opera mini)\/([-\w.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w.]+)/i, /(opera)(?:.+version\/|[/]+)([\w.]+)/i, /opios[/]+([\w.]+)/i, /\bopr\/([\w.]+)/i]
            }, {
                browser: 'ie',
                regex: [/(?:ms|\()(ie) ([\w.]+)/i, /trident.+rv[: ]([\w.]{1,9})\b.+like gecko/i]
            }, {
                browser: 'firefox',
                regex: [/\bfocus\/([\w.]+)/i, /fxios\/([\w.-]+)/i, /(?:mobile|tablet);.*(firefox)\/([\w.-]+)/i, /mobile vr; rv:([\w.]+)\).+firefox/i, /(firefox)\/([\w.]+)/i]
            }, {
                browser: 'opera',
                regex: [/\bopt\/([\w.]+)/i, /coast\/([\w.]+)/i]
            }, {
                browser: 'samsung',
                regex: [/(samsung)browser\/([\w.]+)/i]
            }, {
                browser: 'chrome',
                regex: [/ wv\).+(chrome)\/([\w.]+)/i, /chrome\/([\w.]+) mobile/i, /(chrome)\/v?([\w.]+)/i]
            }, {
                browser: 'android',
                regex: [/droid.+ version\/([\w.]+)\b.+(?:mobile safari|safari)/i]
            }, {
                browser: 'safari',
                regex: [/version\/([\w.,]+) .*mobile(?:\/\w+ | ?)safari/i, /iphone .*mobile(?:\/\w+ | ?)safari/i, /version\/([\w.,]+) .*(safari)/i, /webkit.+?(mobile ?safari|safari)(\/[\w.]+)/i]
            }];
            function _634(_573) {
                var _627;
                var _680;
                for (let _4 = 0; _4 < platformRegexes.length; _4++) {
                    var _575 = platformRegexes[_4];
                    let _70 = _575.regex.find(function(_505) {
                        return _505.test(_573)
                    });
                    if (_70) {
                        _680 = _575.family;
                        break
                    }
                }
                for (let _4 = 0; _4 < browserRegexes.length; _4++) {
                    var _626 = browserRegexes[_4];
                    let _70 = _626.regex.find(function(_505) {
                        return _505.test(_573)
                    });
                    if (_70) {
                        _627 = _626.browser;
                        break
                    }
                }
                return {
                    browser: _627,
                    os: _680
                }
            }
            function _92(_1, _9) {
                if (_1.nodeType !== 1)
                    return false;
                if (_1.msMatchesSelector)
                    return _1.msMatchesSelector(_9);
                if (_1.matches)
                    return _1.matches(_9);
                return false
            }
            function _187(_64, _511) {
                var _78 = _28._89(_64);
                return _78 && _78.hasAttribute && _78.hasAttribute(_511)
            }
            function _514(ipaddress) {
                if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
                    return (true)
                }
                return (false)
            }
            function _310(_43, _3) {
                if (_514(_43.hostname) || !_3.includeSubDomains)
                    return _43.hostname;
                var _31 = _43.href;
                var _1018 = /\.co\.|\.com\.|\.ac\.|\.org\.|\.gov\.|\.edu\.|\.net\./;
                _31 = _31.replace(/^http(s)?:\/\/?/i, '').replace(/^([^/]+)\/.*/i, '$1').replace(/:[\d]*$/, '');
                if (_1018.test(_31))
                    _31 = _31.replace(/^([^.]+\.){1,}([^.]+\.[^.]+\.[^.]+)$/i, '$2');
                else
                    _31 = _31.replace(/^([^.]+\.){1,}([^.]+\.[^.]+)$/i, '$2');
                return '.' + _31
            }
            this._310 = _310;
            this._514 = _514;
            this._171 = _171;
            this._109 = _109;
            this._61 = _61;
            this._329 = _329;
            this._220 = _220;
            this._515 = _515;
            this._52 = _52;
            this._239 = _239;
            this._684 = _684;
            this._150 = _150;
            this._518 = _518;
            this._522 = _522;
            this._687 = _687;
            this._174 = _174;
            this._285 = _285;
            this._121 = _121;
            this._663 = _663;
            this._392 = _392;
            this._391 = _391;
            this._92 = _92;
            this._187 = _187;
            this._643 = _643;
            this._634 = _634;
            this._524 = _524;
            this._495 = _495
        }
        function _1019(_2) {
            var _388 = _2.Object;
            var _493 = _2.Node;
            var _387;
            var _1021 = _388.getOwnPropertyDescriptor(_493.prototype, 'parentNode');
            var _1034 = _388.getOwnPropertyDescriptor(_493.prototype, 'nextSibling');
            var _1022 = _388.getOwnPropertyDescriptor(_493.prototype, 'firstChild');
            this._89 = function(_1) {
                return _1 ? _1021.get.apply(_1) : null
            }
            ;
            this._167 = function(_1) {
                return _1 ? _1034.get.apply(_1) : null
            }
            ;
            this._191 = function(_1) {
                return _1 ? _1022.get.apply(_1) : null
            }
            ;
            this._1023 = function(_1) {
                if (!_1)
                    return false;
                if (_387 === undefined) {
                    try {
                        _387 = _2.document.createElement('div').attachShadow({
                            mode: 'open'
                        }).constructor
                    } catch (e) {
                        _387 = _2.ShadowRoot
                    }
                }
                var _286 = _1;
                var _5 = null;
                while (_5 === null) {
                    _286 = _388.getPrototypeOf(_286);
                    if (!_286 || _286.constructor === _2.DocumentFragment)
                        _5 = false;
                    if (_286.constructor === _387)
                        _5 = true
                }
                return _5
            }
        }
        function _1024(_2) {
            var _648;
            this.proxyPushState = function(callback) {
                var _467 = _2.history;
                _648 = _467.pushState;
                _467.pushState = function() {
                    _2.setTimeout(callback, 100);
                    return _648.apply(_467, arguments)
                }
                ;
                _2.addEventListener('popstate', function() {
                    _2.setTimeout(callback, 100)
                })
            }
        }
        var _120 = new _1025(window,_11,_3,_7);
        var _95 = new _1026(window);
        var _88 = new _1027(_3,_470,_471);
        var _272 = (typeof _668 === 'function') ? new _668(_3,_11) : {
            _230: function() {}
        };
        var _218 = (typeof _1028 === 'function') ? new _1028(window,_3,_95,_25,_11,_272,_23,_55,_7,_88) : {
            _35: function() {},
            _65: function() {},
            _476: function() {},
            _1189: function() {},
            _1029: function() {},
            _1193: function() {}
        };
        var _484 = (typeof _682 === 'function') ? new _682(_28,_3) : {
            _180: function() {}
        };
        var _794 = new _1030(window,_95,_28,_25,_11,_23,_55,_3);
        var _411 = _407.v3 !== undefined ? new _1031(window,_3,_95,_11,_23,_88,_55,_407) : new _1032(window,_3,_95,_11,_23,_88,_55);
        var _559 = new _1033(window,_95,_25,_11,_23,_3,_88);
        _120._260();
        var shouldRecord = false;
        if (_3.privacyToolEnabled) {
            _794._35(_47, _3._49, _3._408, _3._412, _3._278, _3._413, _7)
        } else if (_3.liveHeatmapsEnabled) {
            var _181;
            if (_3.taggerToolEnabled) {
                _181 = function(_66) {
                    _559._35(_7, _47, true, _66)
                }
            }
            _411._35(_3._49, _7, _47, _181)
        } else if (_3.taggerToolEnabled) {
            _559._35(_7, _47)
        } else if (typeof _560 === 'function') {
            window.mouseflow = new _560(window,Math,_28,_3,_25,_11,_23,_88,_272,_55,_184,_218,_484,_7,_410,_283,_120);
            shouldRecord = true
        }
        function _124() {
            return undefined
        }
        function _838() {
            return null
        }
        function _844() {
            return false
        }
        if (!shouldRecord) {
            window.mouseflow = {
                start: _124,
                stop: function() {
                    if (_3.privacyToolEnabled)
                        _794._65();
                    else if (_3.liveHeatmapsEnabled)
                        _411._65()
                },
                newPageView: function(_26, _72) {
                    _3._486(_26, _72);
                    if (_3.liveHeatmapsEnabled)
                        _411._490()
                },
                stopSession: _124,
                getSessionId: _838,
                getPageViewId: _838,
                tag: _124,
                star: _124,
                setVariable: _124,
                identify: _124,
                formSubmitAttempt: _124,
                formSubmitSuccess: _124,
                formSubmitFailure: _124,
                addFriction: _124,
                isRecording: _844,
                isReturningUser: _844,
                activateFeedback: _124,
                proxyAttachShadow: _124,
                recordingRate: null,
                version: null
            };
            _410.proxyPushState(window.mouseflow.newPageView);
            _120._35()
        }
        window.mouseflow.websiteId = _3._49;
        window.mouseflow.gdprEnabled = _3.gdprEnabled;
        window.mouseflow.updateHeatmap = _411._490;
        window.mouseflow.getDisplayUrl = _88._131;
        window.mouseflow.config = function() {
            return arguments.length === 1 ? _3[arguments[0]] : _3._409.apply(_3, arguments)
        }
        ;
        window.mouseflow.logConfig = function() {
            if (_3.debug)
                console.log(_3)
        }
        ;
        window.mouseflow.debug = function() {
            _3.debug = !_3.debug;
            console.log('MF: Debugging ' + (_3.debug ? 'enabled' : 'disabled'))
        }
    }
    )()
}
