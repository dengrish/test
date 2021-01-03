(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"autochic_atlas_", frames: [[0,262,712,143],[202,474,413,65],[202,407,441,65],[896,0,73,190],[714,227,250,200],[448,0,446,225],[0,0,446,260],[645,429,112,112],[0,407,200,200],[759,429,72,141]]}
];


// symbols:



(lib.Bitmap1 = function() {
	this.initialize(ss["autochic_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.initialize(ss["autochic_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.initialize(ss["autochic_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.broken = function() {
	this.initialize(ss["autochic_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.smoke = function() {
	this.initialize(ss["autochic_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.vw1 = function() {
	this.initialize(ss["autochic_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.vw2 = function() {
	this.initialize(ss["autochic_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.wheel = function() {
	this.initialize(ss["autochic_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.wheel1 = function() {
	this.initialize(ss["autochic_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.white = function() {
	this.initialize(ss["autochic_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.white_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// РЎР»РѕР№_1
	this.instance = new lib.white();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.white_1, new cjs.Rectangle(0,0,72,141), null);


(lib.wheel1rotating = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// РЎР»РѕР№_1
	this.instance = new lib.wheel1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wheel1rotating, new cjs.Rectangle(0,0,200,200), null);


(lib.wheelrotating = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// РЎР»РѕР№_1
	this.instance = new lib.wheel();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wheelrotating, new cjs.Rectangle(0,0,112,112), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// РЎР»РѕР№_1_copy
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(-110,-17,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// РЎР»РѕР№_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323232").s().p("Egj7AJYIAAyvMBH3AAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-230,-60,460,120), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// РЎР»РѕР№_1_copy
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-103,-17,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// РЎР»РѕР№_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323232").s().p("Egj7AJYIAAyvMBH3AAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-230,-60,460,120), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// РЎР»РѕР№_1_copy
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-178,-37,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// РЎР»РѕР№_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323232").s().p("Egj7AJYIAAyvMBH3AAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-230,-60,460,120), null);


(lib.smoke_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// РЎР»РѕР№_2
	this.instance = new lib.smoke();
	this.instance.setTransform(3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.smoke_1, new cjs.Rectangle(3,0,250,200), null);


(lib.shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,126.6).s().p("AtzN0QluluAAoGQAAoFFuluQFuluIFAAQIGAAFuFuQFuFuAAIFQAAIGluFuQluFuoGAAQoFAAlulug");
	this.shape.setTransform(125,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shadow, new cjs.Rectangle(0,0,250,250), null);


(lib.bgYellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4D331").s().p("EhR3AeAMArIg7/MB4mAAAMgrGA7/g");
	this.shape.setTransform(523.95,192);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bgYellow, new cjs.Rectangle(0,0,1047.9,384), null);


(lib.wheel_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// РЎР»РѕР№_1
	this.instance = new lib.wheelrotating();
	this.instance.setTransform(56,56,1,1,0,0,0,56,56);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:56.1,rotation:-360,y:56.05},60,cjs.Ease.cubicInOut).to({regY:56,y:56},659).to({regY:56.1,rotation:-720,y:56.05},60,cjs.Ease.cubicInOut).wait(421));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.2,-23.2,158.5,158.5);


(lib.smokemany = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// РЎР»РѕР№_1
	this.instance = new lib.smoke_1();
	this.instance.setTransform(396.85,159.6,1,1,15.0005,0,0,124.9,100);

	this.instance_1 = new lib.smoke_1();
	this.instance_1.setTransform(457.85,259.65,1,1,15.0005,0,0,124.9,100);

	this.instance_2 = new lib.smoke_1();
	this.instance_2.setTransform(309.8,259.65,1,1,15.0005,0,0,124.9,100);

	this.instance_3 = new lib.smoke_1();
	this.instance_3.setTransform(220.1,219.85,1,1,15.0005,0,0,124.9,100);

	this.instance_4 = new lib.smoke_1();
	this.instance_4.setTransform(158.25,308.75,1,1,-150.0004,0,0,125,100);

	this.instance_5 = new lib.smoke_1();
	this.instance_5.setTransform(322.3,189.7,1,1,44.9994,0,0,124.9,100);

	this.instance_6 = new lib.smoke_1();
	this.instance_6.setTransform(372.9,174.75,1,1,-135.0006,0,0,124.9,100);

	this.instance_7 = new lib.smoke_1();
	this.instance_7.setTransform(431.55,259.65,1,1,180,0,0,125,100);

	this.instance_8 = new lib.smoke_1();
	this.instance_8.setTransform(511.55,125,1,1,90,0,0,125,100);

	this.instance_9 = new lib.smoke_1();
	this.instance_9.setTransform(443.55,199.65,1,1,-90,0,0,125,100);

	this.instance_10 = new lib.smoke_1();
	this.instance_10.setTransform(542.2,207.65,1,1,0,0,0,125,100);

	this.instance_11 = new lib.smoke_1();
	this.instance_11.setTransform(479.55,174.65,1,1,0,0,0,125,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.smokemany, new cjs.Rectangle(-2.6,3,672.8000000000001,453.4), null);


(lib.carmain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask_idn___РєРѕРїРёСЏ (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AjQBxIBJltIA2i2ICxgOIANBLIAEBFIBgDZIhwH4IkqAhg");
	var mask_graphics_615 = new cjs.Graphics().p("AjQBxIBJltIA2i2ICxgOIANBLIAEBFIBgDZIhwH4IkqAhg");
	var mask_graphics_719 = new cjs.Graphics().p("AjQBxIBJltIA2i2ICxgOIANBLIAEBFIBgDZIhwH4IkqAhg");
	var mask_graphics_779 = new cjs.Graphics().p("AjQBxIBJltIA2i2ICxgOIANBLIAEBFIBgDZIhwH4IkqAhg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:210.575,y:47}).wait(615).to({graphics:mask_graphics_615,x:210.575,y:47}).wait(1).to({graphics:null,x:0,y:0}).wait(103).to({graphics:mask_graphics_719,x:210.575,y:47}).wait(60).to({graphics:mask_graphics_779,x:210.575,y:47}).wait(1).to({graphics:null,x:0,y:0}).wait(540));

	// wheel___РєРѕРїРёСЏ
	this.instance = new lib.wheel_1("synched",0);
	this.instance.setTransform(207.55,45.85,0.3425,0.759,0,0,0,56.2,56);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(615).to({startPosition:615},0).to({_off:true},1).wait(103).to({_off:false,startPosition:719},0).wait(60).to({startPosition:779},0).to({_off:true},1).wait(540));

	// mask_idn (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AniCrIB/gMIAZh3IAzk4IAuifIAyh8IFCBCIFYQNIsfAIg");
	var mask_1_graphics_615 = new cjs.Graphics().p("AniCrIB/gMIAZh3IAzk4IAuifIAyh8IFCBCIFYQNIsfAIg");
	var mask_1_graphics_719 = new cjs.Graphics().p("AniCrIB/gMIAZh3IAzk4IAuifIAyh8IFCBCIFYQNIsfAIg");
	var mask_1_graphics_779 = new cjs.Graphics().p("AniCrIB/gMIAZh3IAzk4IAuifIAyh8IFCBCIFYQNIsfAIg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:81.9,y:73.6}).wait(615).to({graphics:mask_1_graphics_615,x:81.9,y:73.6}).wait(1).to({graphics:null,x:0,y:0}).wait(103).to({graphics:mask_1_graphics_719,x:81.9,y:73.6}).wait(60).to({graphics:mask_1_graphics_779,x:81.9,y:73.6}).wait(1).to({graphics:null,x:0,y:0}).wait(540));

	// wheel
	this.instance_1 = new lib.wheel_1("synched",0);
	this.instance_1.setTransform(69.05,74.65,0.6375,0.9683,0,0,0,56.1,56.1);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(615).to({startPosition:615},0).to({_off:true},1).wait(103).to({_off:false,startPosition:719},0).wait(60).to({startPosition:779},0).to({_off:true},1).wait(540));

	// mask_idn (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_119 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_120 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_121 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_122 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_123 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_124 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_125 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_126 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_127 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_128 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_129 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_130 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_131 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_132 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_133 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_134 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_135 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_136 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_137 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_138 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_139 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_140 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_141 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_142 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_143 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_144 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_145 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_146 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_147 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_148 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_149 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_150 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_151 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_152 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_153 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_154 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_155 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_156 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_157 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_158 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_159 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_160 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_161 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_162 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_163 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_164 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_165 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_166 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_167 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_168 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_169 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_170 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_171 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_172 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_173 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_174 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_175 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_176 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_177 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_178 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_179 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_180 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_181 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_182 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_183 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_184 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_185 = new cjs.Graphics().p("AqaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_186 = new cjs.Graphics().p("AqWSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_187 = new cjs.Graphics().p("AqSSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_188 = new cjs.Graphics().p("AqNSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_189 = new cjs.Graphics().p("AqJSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_190 = new cjs.Graphics().p("AqFSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_191 = new cjs.Graphics().p("AqASgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_192 = new cjs.Graphics().p("Ap8SgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_193 = new cjs.Graphics().p("Ap3SgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_194 = new cjs.Graphics().p("ApzSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_195 = new cjs.Graphics().p("ApuSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_196 = new cjs.Graphics().p("ApqSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_197 = new cjs.Graphics().p("ApmSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_198 = new cjs.Graphics().p("AphSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_199 = new cjs.Graphics().p("ApdSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_200 = new cjs.Graphics().p("ApYSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_201 = new cjs.Graphics().p("ApUSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_202 = new cjs.Graphics().p("ApPSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_203 = new cjs.Graphics().p("ApLSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_204 = new cjs.Graphics().p("ApHSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_205 = new cjs.Graphics().p("ApCSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_206 = new cjs.Graphics().p("Ao+SgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_207 = new cjs.Graphics().p("Ao5SgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_208 = new cjs.Graphics().p("Ao1SgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_209 = new cjs.Graphics().p("AoxSgIC0sFIguiZIAQnKIgmiQIg7hqIiLlEIAAmNIQpgMIE6LdIA7BqIAmCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_210 = new cjs.Graphics().p("AouSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_211 = new cjs.Graphics().p("AosSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_212 = new cjs.Graphics().p("AoqSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_213 = new cjs.Graphics().p("AooSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_214 = new cjs.Graphics().p("AomSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_215 = new cjs.Graphics().p("AokSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_216 = new cjs.Graphics().p("AoiSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_217 = new cjs.Graphics().p("AogSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_218 = new cjs.Graphics().p("AoeSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_219 = new cjs.Graphics().p("AocSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_220 = new cjs.Graphics().p("AoZSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_221 = new cjs.Graphics().p("AoXSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_222 = new cjs.Graphics().p("AoVSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_223 = new cjs.Graphics().p("AoTSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_224 = new cjs.Graphics().p("AoRSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_225 = new cjs.Graphics().p("AoPSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_226 = new cjs.Graphics().p("AoNSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_227 = new cjs.Graphics().p("AoLSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_228 = new cjs.Graphics().p("AoJSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_229 = new cjs.Graphics().p("AoHSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_230 = new cjs.Graphics().p("AoESgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_231 = new cjs.Graphics().p("AoCSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_232 = new cjs.Graphics().p("AoASgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_233 = new cjs.Graphics().p("An+SgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_234 = new cjs.Graphics().p("An8SgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_235 = new cjs.Graphics().p("An6SgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_236 = new cjs.Graphics().p("An4SgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_237 = new cjs.Graphics().p("An2SgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_238 = new cjs.Graphics().p("An0SgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_239 = new cjs.Graphics().p("AnySgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_240 = new cjs.Graphics().p("AnvSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_241 = new cjs.Graphics().p("AntSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_242 = new cjs.Graphics().p("AnrSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_243 = new cjs.Graphics().p("AnpSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_244 = new cjs.Graphics().p("AnnSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_245 = new cjs.Graphics().p("AnlSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_246 = new cjs.Graphics().p("AnjSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_247 = new cjs.Graphics().p("AnhSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_248 = new cjs.Graphics().p("AnfSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_249 = new cjs.Graphics().p("AndSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_250 = new cjs.Graphics().p("AnaSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_251 = new cjs.Graphics().p("AnYSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_252 = new cjs.Graphics().p("AnWSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_253 = new cjs.Graphics().p("AnUSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_254 = new cjs.Graphics().p("AnSSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_255 = new cjs.Graphics().p("AnQSgICzsFIguiZIAQnKIgliQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_256 = new cjs.Graphics().p("AnOSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_257 = new cjs.Graphics().p("AnMSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_258 = new cjs.Graphics().p("AnKSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_259 = new cjs.Graphics().p("AnISgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_260 = new cjs.Graphics().p("AnGSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_261 = new cjs.Graphics().p("AnDSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_262 = new cjs.Graphics().p("AnBSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_263 = new cjs.Graphics().p("Am/SgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_264 = new cjs.Graphics().p("Am9SgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_265 = new cjs.Graphics().p("Am7SgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_266 = new cjs.Graphics().p("Am5SgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_267 = new cjs.Graphics().p("Am3SgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_268 = new cjs.Graphics().p("Am1SgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_269 = new cjs.Graphics().p("AmzSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_270 = new cjs.Graphics().p("AmxSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_271 = new cjs.Graphics().p("AmuSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_272 = new cjs.Graphics().p("AmsSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_273 = new cjs.Graphics().p("AmqSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_274 = new cjs.Graphics().p("AmoSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_275 = new cjs.Graphics().p("AmmSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_276 = new cjs.Graphics().p("AmkSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_277 = new cjs.Graphics().p("AmiSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_278 = new cjs.Graphics().p("AmgSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_279 = new cjs.Graphics().p("AmeSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_280 = new cjs.Graphics().p("AmcSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_281 = new cjs.Graphics().p("AmZSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_282 = new cjs.Graphics().p("AmXSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_283 = new cjs.Graphics().p("AmVSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_284 = new cjs.Graphics().p("AmTSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_285 = new cjs.Graphics().p("AmRSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_286 = new cjs.Graphics().p("AmPSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_287 = new cjs.Graphics().p("AmNSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_288 = new cjs.Graphics().p("AmLSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_289 = new cjs.Graphics().p("AmJSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_290 = new cjs.Graphics().p("AmHSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_291 = new cjs.Graphics().p("AmESgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_292 = new cjs.Graphics().p("AmCSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_293 = new cjs.Graphics().p("AmASgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_294 = new cjs.Graphics().p("Al+SgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_295 = new cjs.Graphics().p("Al8SgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_296 = new cjs.Graphics().p("Al6SgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_297 = new cjs.Graphics().p("Al4SgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_298 = new cjs.Graphics().p("Al2SgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_299 = new cjs.Graphics().p("Al0SgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_300 = new cjs.Graphics().p("AlySgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_301 = new cjs.Graphics().p("AlvSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_302 = new cjs.Graphics().p("AltSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_303 = new cjs.Graphics().p("AlrSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_304 = new cjs.Graphics().p("AlpSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_305 = new cjs.Graphics().p("AlnSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_306 = new cjs.Graphics().p("AllSgICzsFIguiZIAQnKIgliQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_307 = new cjs.Graphics().p("AljSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_308 = new cjs.Graphics().p("AlhSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_309 = new cjs.Graphics().p("AlfSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_310 = new cjs.Graphics().p("AldSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_311 = new cjs.Graphics().p("AlbSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_312 = new cjs.Graphics().p("AlYSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_313 = new cjs.Graphics().p("AlWSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_314 = new cjs.Graphics().p("AlUSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_315 = new cjs.Graphics().p("AlSSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_316 = new cjs.Graphics().p("AlQSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_317 = new cjs.Graphics().p("AlOSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_318 = new cjs.Graphics().p("AlMSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_319 = new cjs.Graphics().p("AlKSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_320 = new cjs.Graphics().p("AlISgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_321 = new cjs.Graphics().p("AlGSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_322 = new cjs.Graphics().p("AlDSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_323 = new cjs.Graphics().p("AlBSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_324 = new cjs.Graphics().p("Ak/SgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_325 = new cjs.Graphics().p("Ak9SgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_326 = new cjs.Graphics().p("Ak7SgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_327 = new cjs.Graphics().p("Ak5SgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_328 = new cjs.Graphics().p("Ak3SgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_329 = new cjs.Graphics().p("Ak1SgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_330 = new cjs.Graphics().p("AkxSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_331 = new cjs.Graphics().p("AktSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_332 = new cjs.Graphics().p("AkpSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_333 = new cjs.Graphics().p("AklSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_334 = new cjs.Graphics().p("AkhSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_335 = new cjs.Graphics().p("AkeSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_336 = new cjs.Graphics().p("AkaSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_337 = new cjs.Graphics().p("AkWSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_338 = new cjs.Graphics().p("AkSSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_339 = new cjs.Graphics().p("AkOSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_340 = new cjs.Graphics().p("AkKSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_341 = new cjs.Graphics().p("AkGSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_342 = new cjs.Graphics().p("AkDSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_343 = new cjs.Graphics().p("Aj/SgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_344 = new cjs.Graphics().p("Aj7SgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_345 = new cjs.Graphics().p("Aj3SgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_346 = new cjs.Graphics().p("AjzSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_347 = new cjs.Graphics().p("AjvSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_348 = new cjs.Graphics().p("AjrSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_349 = new cjs.Graphics().p("AjoSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_350 = new cjs.Graphics().p("AjkSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_351 = new cjs.Graphics().p("AjgSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_352 = new cjs.Graphics().p("AjcSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_353 = new cjs.Graphics().p("AjYSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_354 = new cjs.Graphics().p("AjUSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_355 = new cjs.Graphics().p("AjQSgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_356 = new cjs.Graphics().p("AjNSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_357 = new cjs.Graphics().p("AjJSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_358 = new cjs.Graphics().p("AjFSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_359 = new cjs.Graphics().p("AjBSgICzsFIguiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_360 = new cjs.Graphics().p("Ai9SgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_361 = new cjs.Graphics().p("Ai5SgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_362 = new cjs.Graphics().p("Ai1SgICzsFIguiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_363 = new cjs.Graphics().p("AiySgICysFIgtiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_364 = new cjs.Graphics().p("AiuSgICysFIgtiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_365 = new cjs.Graphics().p("AiqSgICysFIgtiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_366 = new cjs.Graphics().p("AimSgICysFIgtiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_367 = new cjs.Graphics().p("AiiSgICysFIgtiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_368 = new cjs.Graphics().p("AieSgICysFIgtiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_369 = new cjs.Graphics().p("AiaSgICysFIgtiZIAQnKIgliQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_370 = new cjs.Graphics().p("AiXSgICysFIgtiZIARnKIgmiQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_371 = new cjs.Graphics().p("AiTSgICysFIgtiZIAQnKIgliQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_372 = new cjs.Graphics().p("AiPSgICysFIgtiZIAQnKIgliQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_373 = new cjs.Graphics().p("AiLSgICysFIgtiZIAQnKIgliQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_374 = new cjs.Graphics().p("AiHSgICysFIgtiZIAPnKIgkiQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_375 = new cjs.Graphics().p("AiDSgICysFIguiZIAQnKIgkiQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_376 = new cjs.Graphics().p("Ah/SgICysFIguiZIAQnKIgkiQIg8hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_377 = new cjs.Graphics().p("Ah8SgICysFIguiZIARnKIgliQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_378 = new cjs.Graphics().p("Ah4SgICysFIguiZIARnKIgliQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_379 = new cjs.Graphics().p("Ah0SgICysFIguiZIARnKIgliQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_380 = new cjs.Graphics().p("AhwSgICysFIguiZIARnKIgliQIg8hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_381 = new cjs.Graphics().p("AhsSgICysFIguiZIAQnKIgliQIg7hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_382 = new cjs.Graphics().p("AhoSgICysFIguiZIAQnKIgliQIg7hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_383 = new cjs.Graphics().p("AhkSgICysFIguiZIAQnKIgliQIg7hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_384 = new cjs.Graphics().p("AhhSgICysFIguiZIARnKIgmiQIg7hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_385 = new cjs.Graphics().p("AhdSgICysFIguiZIARnKIgmiQIg7hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_386 = new cjs.Graphics().p("AhZSgICysFIguiZIARnKIgmiQIg7hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_387 = new cjs.Graphics().p("AhVSgICysFIguiZIARnKIgmiQIg7hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_388 = new cjs.Graphics().p("AhRSgICysFIguiZIAQnKIgliQIg7hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_389 = new cjs.Graphics().p("AhNSgICysFIguiZIAQnKIgliQIg7hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_390 = new cjs.Graphics().p("AhJSgICysFIguiZIAQnKIgliQIg7hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_391 = new cjs.Graphics().p("AhGSgICysFIguiZIARnKIgmiQIg7hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_392 = new cjs.Graphics().p("AhCSgICysFIguiZIARnKIgmiQIg7hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_393 = new cjs.Graphics().p("Ag+SgICysFIguiZIARnKIgmiQIg7hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_394 = new cjs.Graphics().p("Ag6SgICysFIguiZIARnKIgmiQIg7hqIiKlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_395 = new cjs.Graphics().p("Ag2SgICysFIguiZIAQnKIgliQIg7hqIiLlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_396 = new cjs.Graphics().p("AgySgICysFIguiZIAQnKIgliQIg8hqIiKlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_397 = new cjs.Graphics().p("AguSgICysFIguiZIAQnKIgliQIg8hqIiKlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_398 = new cjs.Graphics().p("AgrSgICysFIguiZIARnKIgmiQIg8hqIiJlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_399 = new cjs.Graphics().p("AgnSgICysFIguiZIARnKIgmiQIg8hqIiJlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_400 = new cjs.Graphics().p("AgjSgICysFIguiZIARnKIgmiQIg8hqIiJlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_401 = new cjs.Graphics().p("AgfSgICysFIguiZIARnKIgmiQIg8hqIiJlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_402 = new cjs.Graphics().p("AgbSgICysFIguiZIAQnKIgliQIg8hqIiKlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_403 = new cjs.Graphics().p("AgXSgICysFIguiZIAQnKIgliQIg8hqIiKlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_404 = new cjs.Graphics().p("AgTSgICysFIguiZIAQnKIgliQIg8hqIiKlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_405 = new cjs.Graphics().p("AgQSgICysFIguiZIARnKIgmiQIg8hqIiJlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_406 = new cjs.Graphics().p("AgMSgICysFIguiZIARnKIgmiQIg8hqIiJlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_407 = new cjs.Graphics().p("AgISgICysFIguiZIARnKIgmiQIg8hqIiJlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_408 = new cjs.Graphics().p("AgESgICysFIguiZIARnKIgmiQIg8hqIiJlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_409 = new cjs.Graphics().p("AAASgICysFIguiZIAQnKIgliQIg8hqIiKlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_410 = new cjs.Graphics().p("AADSgICzsFIguiZIAQnKIgliQIg8hqIiKlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_411 = new cjs.Graphics().p("AAHSgICzsFIguiZIAQnKIgliQIg8hqIiKlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_412 = new cjs.Graphics().p("AAKSgICzsFIguiZIARnKIgmiQIg8hqIiJlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_413 = new cjs.Graphics().p("AAOSgICzsFIguiZIARnKIgmiQIg8hqIiJlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_414 = new cjs.Graphics().p("AASSgICzsFIguiZIARnKIgmiQIg8hqIiJlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_415 = new cjs.Graphics().p("AAWSgICzsFIguiZIARnKIgmiQIg8hqIiJlEIAAmNIQogMIE6LdIA8BqIAmCQIgRHKIAuCZIizMFg");
	var mask_2_graphics_416 = new cjs.Graphics().p("AAaSgICzsFIguiZIAQnKIgliQIg8hqIiKlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_417 = new cjs.Graphics().p("AAeSgICzsFIguiZIAQnKIgliQIg8hqIiKlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_418 = new cjs.Graphics().p("AAiSgICzsFIguiZIAQnKIgliQIg8hqIiKlEIAAmNIQpgMIE6LdIA8BqIAlCQIgQHKIAuCZIizMFg");
	var mask_2_graphics_419 = new cjs.Graphics().p("AAlSgICzsFIgtiZIAQnKIgliQIg8hqIiKlEIAAmNIQpgMIE6LdIA7BqIAmCQIgQHKIAuCZIizMFg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(119).to({graphics:mask_2_graphics_119,x:16.725,y:-8.55}).wait(1).to({graphics:mask_2_graphics_120,x:17.61,y:-8.55}).wait(1).to({graphics:mask_2_graphics_121,x:18.495,y:-8.55}).wait(1).to({graphics:mask_2_graphics_122,x:19.38,y:-8.55}).wait(1).to({graphics:mask_2_graphics_123,x:20.265,y:-8.55}).wait(1).to({graphics:mask_2_graphics_124,x:21.15,y:-8.55}).wait(1).to({graphics:mask_2_graphics_125,x:22.035,y:-8.55}).wait(1).to({graphics:mask_2_graphics_126,x:22.92,y:-8.55}).wait(1).to({graphics:mask_2_graphics_127,x:23.805,y:-8.55}).wait(1).to({graphics:mask_2_graphics_128,x:24.69,y:-8.55}).wait(1).to({graphics:mask_2_graphics_129,x:25.575,y:-8.55}).wait(1).to({graphics:mask_2_graphics_130,x:26.46,y:-8.55}).wait(1).to({graphics:mask_2_graphics_131,x:27.345,y:-8.55}).wait(1).to({graphics:mask_2_graphics_132,x:28.23,y:-8.55}).wait(1).to({graphics:mask_2_graphics_133,x:29.115,y:-8.55}).wait(1).to({graphics:mask_2_graphics_134,x:30,y:-8.55}).wait(1).to({graphics:mask_2_graphics_135,x:30.885,y:-8.55}).wait(1).to({graphics:mask_2_graphics_136,x:31.77,y:-8.55}).wait(1).to({graphics:mask_2_graphics_137,x:32.655,y:-8.55}).wait(1).to({graphics:mask_2_graphics_138,x:33.54,y:-8.55}).wait(1).to({graphics:mask_2_graphics_139,x:34.425,y:-8.55}).wait(1).to({graphics:mask_2_graphics_140,x:35.31,y:-8.55}).wait(1).to({graphics:mask_2_graphics_141,x:36.195,y:-8.55}).wait(1).to({graphics:mask_2_graphics_142,x:37.08,y:-8.55}).wait(1).to({graphics:mask_2_graphics_143,x:37.965,y:-8.55}).wait(1).to({graphics:mask_2_graphics_144,x:38.85,y:-8.55}).wait(1).to({graphics:mask_2_graphics_145,x:39.735,y:-8.55}).wait(1).to({graphics:mask_2_graphics_146,x:40.62,y:-8.55}).wait(1).to({graphics:mask_2_graphics_147,x:41.505,y:-8.55}).wait(1).to({graphics:mask_2_graphics_148,x:42.39,y:-8.55}).wait(1).to({graphics:mask_2_graphics_149,x:43.275,y:-8.55}).wait(1).to({graphics:mask_2_graphics_150,x:44.16,y:-8.55}).wait(1).to({graphics:mask_2_graphics_151,x:45.045,y:-8.55}).wait(1).to({graphics:mask_2_graphics_152,x:45.93,y:-8.55}).wait(1).to({graphics:mask_2_graphics_153,x:46.815,y:-8.55}).wait(1).to({graphics:mask_2_graphics_154,x:47.7,y:-8.55}).wait(1).to({graphics:mask_2_graphics_155,x:48.585,y:-8.55}).wait(1).to({graphics:mask_2_graphics_156,x:49.47,y:-8.55}).wait(1).to({graphics:mask_2_graphics_157,x:50.355,y:-8.55}).wait(1).to({graphics:mask_2_graphics_158,x:51.24,y:-8.55}).wait(1).to({graphics:mask_2_graphics_159,x:52.125,y:-8.55}).wait(1).to({graphics:mask_2_graphics_160,x:53.01,y:-8.55}).wait(1).to({graphics:mask_2_graphics_161,x:53.895,y:-8.55}).wait(1).to({graphics:mask_2_graphics_162,x:54.78,y:-8.55}).wait(1).to({graphics:mask_2_graphics_163,x:55.665,y:-8.55}).wait(1).to({graphics:mask_2_graphics_164,x:56.55,y:-8.55}).wait(1).to({graphics:mask_2_graphics_165,x:57.435,y:-8.55}).wait(1).to({graphics:mask_2_graphics_166,x:58.32,y:-8.55}).wait(1).to({graphics:mask_2_graphics_167,x:59.205,y:-8.55}).wait(1).to({graphics:mask_2_graphics_168,x:60.09,y:-8.55}).wait(1).to({graphics:mask_2_graphics_169,x:60.975,y:-8.55}).wait(1).to({graphics:mask_2_graphics_170,x:61.86,y:-8.55}).wait(1).to({graphics:mask_2_graphics_171,x:62.745,y:-8.55}).wait(1).to({graphics:mask_2_graphics_172,x:63.63,y:-8.55}).wait(1).to({graphics:mask_2_graphics_173,x:64.515,y:-8.55}).wait(1).to({graphics:mask_2_graphics_174,x:65.4,y:-8.55}).wait(1).to({graphics:mask_2_graphics_175,x:66.285,y:-8.55}).wait(1).to({graphics:mask_2_graphics_176,x:67.17,y:-8.55}).wait(1).to({graphics:mask_2_graphics_177,x:68.055,y:-8.55}).wait(1).to({graphics:mask_2_graphics_178,x:68.94,y:-8.55}).wait(1).to({graphics:mask_2_graphics_179,x:69.825,y:-8.55}).wait(1).to({graphics:mask_2_graphics_180,x:70.71,y:-8.55}).wait(1).to({graphics:mask_2_graphics_181,x:71.595,y:-8.55}).wait(1).to({graphics:mask_2_graphics_182,x:72.48,y:-8.55}).wait(1).to({graphics:mask_2_graphics_183,x:73.365,y:-8.55}).wait(1).to({graphics:mask_2_graphics_184,x:74.25,y:-8.55}).wait(1).to({graphics:mask_2_graphics_185,x:75.135,y:-8.55}).wait(1).to({graphics:mask_2_graphics_186,x:75.6725,y:-8.55}).wait(1).to({graphics:mask_2_graphics_187,x:76.115,y:-8.55}).wait(1).to({graphics:mask_2_graphics_188,x:76.5575,y:-8.55}).wait(1).to({graphics:mask_2_graphics_189,x:77,y:-8.55}).wait(1).to({graphics:mask_2_graphics_190,x:77.4425,y:-8.55}).wait(1).to({graphics:mask_2_graphics_191,x:77.885,y:-8.55}).wait(1).to({graphics:mask_2_graphics_192,x:78.3275,y:-8.55}).wait(1).to({graphics:mask_2_graphics_193,x:78.77,y:-8.55}).wait(1).to({graphics:mask_2_graphics_194,x:79.2125,y:-8.55}).wait(1).to({graphics:mask_2_graphics_195,x:79.655,y:-8.55}).wait(1).to({graphics:mask_2_graphics_196,x:80.0975,y:-8.55}).wait(1).to({graphics:mask_2_graphics_197,x:80.54,y:-8.55}).wait(1).to({graphics:mask_2_graphics_198,x:80.9825,y:-8.55}).wait(1).to({graphics:mask_2_graphics_199,x:81.425,y:-8.55}).wait(1).to({graphics:mask_2_graphics_200,x:81.8675,y:-8.55}).wait(1).to({graphics:mask_2_graphics_201,x:82.31,y:-8.55}).wait(1).to({graphics:mask_2_graphics_202,x:82.7525,y:-8.55}).wait(1).to({graphics:mask_2_graphics_203,x:83.195,y:-8.55}).wait(1).to({graphics:mask_2_graphics_204,x:83.6375,y:-8.55}).wait(1).to({graphics:mask_2_graphics_205,x:84.08,y:-8.55}).wait(1).to({graphics:mask_2_graphics_206,x:84.5225,y:-8.55}).wait(1).to({graphics:mask_2_graphics_207,x:84.965,y:-8.55}).wait(1).to({graphics:mask_2_graphics_208,x:85.4075,y:-8.55}).wait(1).to({graphics:mask_2_graphics_209,x:85.85,y:-8.55}).wait(1).to({graphics:mask_2_graphics_210,x:86.0598,y:-8.55}).wait(1).to({graphics:mask_2_graphics_211,x:86.2696,y:-8.55}).wait(1).to({graphics:mask_2_graphics_212,x:86.4794,y:-8.55}).wait(1).to({graphics:mask_2_graphics_213,x:86.6892,y:-8.55}).wait(1).to({graphics:mask_2_graphics_214,x:86.899,y:-8.55}).wait(1).to({graphics:mask_2_graphics_215,x:87.1088,y:-8.55}).wait(1).to({graphics:mask_2_graphics_216,x:87.3185,y:-8.55}).wait(1).to({graphics:mask_2_graphics_217,x:87.5283,y:-8.55}).wait(1).to({graphics:mask_2_graphics_218,x:87.7381,y:-8.55}).wait(1).to({graphics:mask_2_graphics_219,x:87.9479,y:-8.55}).wait(1).to({graphics:mask_2_graphics_220,x:88.1577,y:-8.55}).wait(1).to({graphics:mask_2_graphics_221,x:88.3675,y:-8.55}).wait(1).to({graphics:mask_2_graphics_222,x:88.5773,y:-8.55}).wait(1).to({graphics:mask_2_graphics_223,x:88.7871,y:-8.55}).wait(1).to({graphics:mask_2_graphics_224,x:88.9969,y:-8.55}).wait(1).to({graphics:mask_2_graphics_225,x:89.2067,y:-8.55}).wait(1).to({graphics:mask_2_graphics_226,x:89.4165,y:-8.55}).wait(1).to({graphics:mask_2_graphics_227,x:89.6263,y:-8.55}).wait(1).to({graphics:mask_2_graphics_228,x:89.836,y:-8.55}).wait(1).to({graphics:mask_2_graphics_229,x:90.0458,y:-8.55}).wait(1).to({graphics:mask_2_graphics_230,x:90.2556,y:-8.55}).wait(1).to({graphics:mask_2_graphics_231,x:90.4654,y:-8.55}).wait(1).to({graphics:mask_2_graphics_232,x:90.6752,y:-8.55}).wait(1).to({graphics:mask_2_graphics_233,x:90.885,y:-8.55}).wait(1).to({graphics:mask_2_graphics_234,x:91.0948,y:-8.55}).wait(1).to({graphics:mask_2_graphics_235,x:91.3046,y:-8.55}).wait(1).to({graphics:mask_2_graphics_236,x:91.5144,y:-8.55}).wait(1).to({graphics:mask_2_graphics_237,x:91.7242,y:-8.55}).wait(1).to({graphics:mask_2_graphics_238,x:91.934,y:-8.55}).wait(1).to({graphics:mask_2_graphics_239,x:92.1438,y:-8.55}).wait(1).to({graphics:mask_2_graphics_240,x:92.3535,y:-8.55}).wait(1).to({graphics:mask_2_graphics_241,x:92.5633,y:-8.55}).wait(1).to({graphics:mask_2_graphics_242,x:92.7731,y:-8.55}).wait(1).to({graphics:mask_2_graphics_243,x:92.9829,y:-8.55}).wait(1).to({graphics:mask_2_graphics_244,x:93.1927,y:-8.55}).wait(1).to({graphics:mask_2_graphics_245,x:93.4025,y:-8.55}).wait(1).to({graphics:mask_2_graphics_246,x:93.6123,y:-8.55}).wait(1).to({graphics:mask_2_graphics_247,x:93.8221,y:-8.55}).wait(1).to({graphics:mask_2_graphics_248,x:94.0319,y:-8.55}).wait(1).to({graphics:mask_2_graphics_249,x:94.2417,y:-8.55}).wait(1).to({graphics:mask_2_graphics_250,x:94.4515,y:-8.55}).wait(1).to({graphics:mask_2_graphics_251,x:94.6613,y:-8.55}).wait(1).to({graphics:mask_2_graphics_252,x:94.871,y:-8.55}).wait(1).to({graphics:mask_2_graphics_253,x:95.0808,y:-8.55}).wait(1).to({graphics:mask_2_graphics_254,x:95.2906,y:-8.55}).wait(1).to({graphics:mask_2_graphics_255,x:95.5004,y:-8.55}).wait(1).to({graphics:mask_2_graphics_256,x:95.7102,y:-8.55}).wait(1).to({graphics:mask_2_graphics_257,x:95.92,y:-8.55}).wait(1).to({graphics:mask_2_graphics_258,x:96.1298,y:-8.55}).wait(1).to({graphics:mask_2_graphics_259,x:96.3396,y:-8.55}).wait(1).to({graphics:mask_2_graphics_260,x:96.5494,y:-8.55}).wait(1).to({graphics:mask_2_graphics_261,x:96.7592,y:-8.55}).wait(1).to({graphics:mask_2_graphics_262,x:96.969,y:-8.55}).wait(1).to({graphics:mask_2_graphics_263,x:97.1787,y:-8.55}).wait(1).to({graphics:mask_2_graphics_264,x:97.3885,y:-8.55}).wait(1).to({graphics:mask_2_graphics_265,x:97.5983,y:-8.55}).wait(1).to({graphics:mask_2_graphics_266,x:97.8081,y:-8.55}).wait(1).to({graphics:mask_2_graphics_267,x:98.0179,y:-8.55}).wait(1).to({graphics:mask_2_graphics_268,x:98.2277,y:-8.55}).wait(1).to({graphics:mask_2_graphics_269,x:98.4375,y:-8.55}).wait(1).to({graphics:mask_2_graphics_270,x:98.6473,y:-8.55}).wait(1).to({graphics:mask_2_graphics_271,x:98.8571,y:-8.55}).wait(1).to({graphics:mask_2_graphics_272,x:99.0669,y:-8.55}).wait(1).to({graphics:mask_2_graphics_273,x:99.2767,y:-8.55}).wait(1).to({graphics:mask_2_graphics_274,x:99.4865,y:-8.55}).wait(1).to({graphics:mask_2_graphics_275,x:99.6963,y:-8.55}).wait(1).to({graphics:mask_2_graphics_276,x:99.906,y:-8.55}).wait(1).to({graphics:mask_2_graphics_277,x:100.1158,y:-8.55}).wait(1).to({graphics:mask_2_graphics_278,x:100.3256,y:-8.55}).wait(1).to({graphics:mask_2_graphics_279,x:100.5354,y:-8.55}).wait(1).to({graphics:mask_2_graphics_280,x:100.7452,y:-8.55}).wait(1).to({graphics:mask_2_graphics_281,x:100.955,y:-8.55}).wait(1).to({graphics:mask_2_graphics_282,x:101.1648,y:-8.55}).wait(1).to({graphics:mask_2_graphics_283,x:101.3746,y:-8.55}).wait(1).to({graphics:mask_2_graphics_284,x:101.5844,y:-8.55}).wait(1).to({graphics:mask_2_graphics_285,x:101.7942,y:-8.55}).wait(1).to({graphics:mask_2_graphics_286,x:102.004,y:-8.55}).wait(1).to({graphics:mask_2_graphics_287,x:102.2138,y:-8.55}).wait(1).to({graphics:mask_2_graphics_288,x:102.4235,y:-8.55}).wait(1).to({graphics:mask_2_graphics_289,x:102.6333,y:-8.55}).wait(1).to({graphics:mask_2_graphics_290,x:102.8431,y:-8.55}).wait(1).to({graphics:mask_2_graphics_291,x:103.0529,y:-8.55}).wait(1).to({graphics:mask_2_graphics_292,x:103.2627,y:-8.55}).wait(1).to({graphics:mask_2_graphics_293,x:103.4725,y:-8.55}).wait(1).to({graphics:mask_2_graphics_294,x:103.6823,y:-8.55}).wait(1).to({graphics:mask_2_graphics_295,x:103.8921,y:-8.55}).wait(1).to({graphics:mask_2_graphics_296,x:104.1019,y:-8.55}).wait(1).to({graphics:mask_2_graphics_297,x:104.3117,y:-8.55}).wait(1).to({graphics:mask_2_graphics_298,x:104.5215,y:-8.55}).wait(1).to({graphics:mask_2_graphics_299,x:104.7313,y:-8.55}).wait(1).to({graphics:mask_2_graphics_300,x:104.941,y:-8.55}).wait(1).to({graphics:mask_2_graphics_301,x:105.1508,y:-8.55}).wait(1).to({graphics:mask_2_graphics_302,x:105.3606,y:-8.55}).wait(1).to({graphics:mask_2_graphics_303,x:105.5704,y:-8.55}).wait(1).to({graphics:mask_2_graphics_304,x:105.7802,y:-8.55}).wait(1).to({graphics:mask_2_graphics_305,x:105.99,y:-8.55}).wait(1).to({graphics:mask_2_graphics_306,x:106.1998,y:-8.55}).wait(1).to({graphics:mask_2_graphics_307,x:106.4096,y:-8.55}).wait(1).to({graphics:mask_2_graphics_308,x:106.6194,y:-8.55}).wait(1).to({graphics:mask_2_graphics_309,x:106.8292,y:-8.55}).wait(1).to({graphics:mask_2_graphics_310,x:107.039,y:-8.55}).wait(1).to({graphics:mask_2_graphics_311,x:107.2488,y:-8.55}).wait(1).to({graphics:mask_2_graphics_312,x:107.4585,y:-8.55}).wait(1).to({graphics:mask_2_graphics_313,x:107.6683,y:-8.55}).wait(1).to({graphics:mask_2_graphics_314,x:107.8781,y:-8.55}).wait(1).to({graphics:mask_2_graphics_315,x:108.0879,y:-8.55}).wait(1).to({graphics:mask_2_graphics_316,x:108.2977,y:-8.55}).wait(1).to({graphics:mask_2_graphics_317,x:108.5075,y:-8.55}).wait(1).to({graphics:mask_2_graphics_318,x:108.7173,y:-8.55}).wait(1).to({graphics:mask_2_graphics_319,x:108.9271,y:-8.55}).wait(1).to({graphics:mask_2_graphics_320,x:109.1369,y:-8.55}).wait(1).to({graphics:mask_2_graphics_321,x:109.3467,y:-8.55}).wait(1).to({graphics:mask_2_graphics_322,x:109.5565,y:-8.55}).wait(1).to({graphics:mask_2_graphics_323,x:109.7663,y:-8.55}).wait(1).to({graphics:mask_2_graphics_324,x:109.976,y:-8.55}).wait(1).to({graphics:mask_2_graphics_325,x:110.1858,y:-8.55}).wait(1).to({graphics:mask_2_graphics_326,x:110.3956,y:-8.55}).wait(1).to({graphics:mask_2_graphics_327,x:110.6054,y:-8.55}).wait(1).to({graphics:mask_2_graphics_328,x:110.8152,y:-8.55}).wait(1).to({graphics:mask_2_graphics_329,x:111.025,y:-8.55}).wait(1).to({graphics:mask_2_graphics_330,x:111.4108,y:-8.55}).wait(1).to({graphics:mask_2_graphics_331,x:111.7967,y:-8.55}).wait(1).to({graphics:mask_2_graphics_332,x:112.1825,y:-8.55}).wait(1).to({graphics:mask_2_graphics_333,x:112.5683,y:-8.55}).wait(1).to({graphics:mask_2_graphics_334,x:112.9542,y:-8.55}).wait(1).to({graphics:mask_2_graphics_335,x:113.34,y:-8.55}).wait(1).to({graphics:mask_2_graphics_336,x:113.7258,y:-8.55}).wait(1).to({graphics:mask_2_graphics_337,x:114.1117,y:-8.55}).wait(1).to({graphics:mask_2_graphics_338,x:114.4975,y:-8.55}).wait(1).to({graphics:mask_2_graphics_339,x:114.8833,y:-8.55}).wait(1).to({graphics:mask_2_graphics_340,x:115.2692,y:-8.55}).wait(1).to({graphics:mask_2_graphics_341,x:115.655,y:-8.55}).wait(1).to({graphics:mask_2_graphics_342,x:116.0408,y:-8.55}).wait(1).to({graphics:mask_2_graphics_343,x:116.4267,y:-8.55}).wait(1).to({graphics:mask_2_graphics_344,x:116.8125,y:-8.55}).wait(1).to({graphics:mask_2_graphics_345,x:117.1983,y:-8.55}).wait(1).to({graphics:mask_2_graphics_346,x:117.5842,y:-8.55}).wait(1).to({graphics:mask_2_graphics_347,x:117.97,y:-8.55}).wait(1).to({graphics:mask_2_graphics_348,x:118.3558,y:-8.55}).wait(1).to({graphics:mask_2_graphics_349,x:118.7417,y:-8.55}).wait(1).to({graphics:mask_2_graphics_350,x:119.1275,y:-8.55}).wait(1).to({graphics:mask_2_graphics_351,x:119.5133,y:-8.55}).wait(1).to({graphics:mask_2_graphics_352,x:119.8992,y:-8.55}).wait(1).to({graphics:mask_2_graphics_353,x:120.285,y:-8.55}).wait(1).to({graphics:mask_2_graphics_354,x:120.6708,y:-8.55}).wait(1).to({graphics:mask_2_graphics_355,x:121.0567,y:-8.55}).wait(1).to({graphics:mask_2_graphics_356,x:121.4425,y:-8.55}).wait(1).to({graphics:mask_2_graphics_357,x:121.8283,y:-8.55}).wait(1).to({graphics:mask_2_graphics_358,x:122.2142,y:-8.55}).wait(1).to({graphics:mask_2_graphics_359,x:122.6,y:-8.55}).wait(1).to({graphics:mask_2_graphics_360,x:122.9858,y:-8.55}).wait(1).to({graphics:mask_2_graphics_361,x:123.3717,y:-8.55}).wait(1).to({graphics:mask_2_graphics_362,x:123.7575,y:-8.55}).wait(1).to({graphics:mask_2_graphics_363,x:124.1433,y:-8.55}).wait(1).to({graphics:mask_2_graphics_364,x:124.5292,y:-8.55}).wait(1).to({graphics:mask_2_graphics_365,x:124.915,y:-8.55}).wait(1).to({graphics:mask_2_graphics_366,x:125.3008,y:-8.55}).wait(1).to({graphics:mask_2_graphics_367,x:125.6867,y:-8.55}).wait(1).to({graphics:mask_2_graphics_368,x:126.0725,y:-8.55}).wait(1).to({graphics:mask_2_graphics_369,x:126.4583,y:-8.55}).wait(1).to({graphics:mask_2_graphics_370,x:126.8442,y:-8.55}).wait(1).to({graphics:mask_2_graphics_371,x:127.23,y:-8.55}).wait(1).to({graphics:mask_2_graphics_372,x:127.6158,y:-8.55}).wait(1).to({graphics:mask_2_graphics_373,x:128.0017,y:-8.55}).wait(1).to({graphics:mask_2_graphics_374,x:128.3875,y:-8.55}).wait(1).to({graphics:mask_2_graphics_375,x:128.7733,y:-8.55}).wait(1).to({graphics:mask_2_graphics_376,x:129.1592,y:-8.55}).wait(1).to({graphics:mask_2_graphics_377,x:129.545,y:-8.55}).wait(1).to({graphics:mask_2_graphics_378,x:129.9308,y:-8.55}).wait(1).to({graphics:mask_2_graphics_379,x:130.3167,y:-8.55}).wait(1).to({graphics:mask_2_graphics_380,x:130.7025,y:-8.55}).wait(1).to({graphics:mask_2_graphics_381,x:131.0883,y:-8.55}).wait(1).to({graphics:mask_2_graphics_382,x:131.4742,y:-8.55}).wait(1).to({graphics:mask_2_graphics_383,x:131.86,y:-8.55}).wait(1).to({graphics:mask_2_graphics_384,x:132.2458,y:-8.55}).wait(1).to({graphics:mask_2_graphics_385,x:132.6317,y:-8.55}).wait(1).to({graphics:mask_2_graphics_386,x:133.0175,y:-8.55}).wait(1).to({graphics:mask_2_graphics_387,x:133.4033,y:-8.55}).wait(1).to({graphics:mask_2_graphics_388,x:133.7892,y:-8.55}).wait(1).to({graphics:mask_2_graphics_389,x:134.175,y:-8.55}).wait(1).to({graphics:mask_2_graphics_390,x:134.5608,y:-8.55}).wait(1).to({graphics:mask_2_graphics_391,x:134.9467,y:-8.55}).wait(1).to({graphics:mask_2_graphics_392,x:135.3325,y:-8.55}).wait(1).to({graphics:mask_2_graphics_393,x:135.7183,y:-8.55}).wait(1).to({graphics:mask_2_graphics_394,x:136.1042,y:-8.55}).wait(1).to({graphics:mask_2_graphics_395,x:136.49,y:-8.55}).wait(1).to({graphics:mask_2_graphics_396,x:136.8758,y:-8.55}).wait(1).to({graphics:mask_2_graphics_397,x:137.2617,y:-8.55}).wait(1).to({graphics:mask_2_graphics_398,x:137.6475,y:-8.55}).wait(1).to({graphics:mask_2_graphics_399,x:138.0333,y:-8.55}).wait(1).to({graphics:mask_2_graphics_400,x:138.4192,y:-8.55}).wait(1).to({graphics:mask_2_graphics_401,x:138.805,y:-8.55}).wait(1).to({graphics:mask_2_graphics_402,x:139.1908,y:-8.55}).wait(1).to({graphics:mask_2_graphics_403,x:139.5767,y:-8.55}).wait(1).to({graphics:mask_2_graphics_404,x:139.9625,y:-8.55}).wait(1).to({graphics:mask_2_graphics_405,x:140.3483,y:-8.55}).wait(1).to({graphics:mask_2_graphics_406,x:140.7342,y:-8.55}).wait(1).to({graphics:mask_2_graphics_407,x:141.12,y:-8.55}).wait(1).to({graphics:mask_2_graphics_408,x:141.5058,y:-8.55}).wait(1).to({graphics:mask_2_graphics_409,x:141.8917,y:-8.55}).wait(1).to({graphics:mask_2_graphics_410,x:142.2775,y:-8.55}).wait(1).to({graphics:mask_2_graphics_411,x:142.6633,y:-8.55}).wait(1).to({graphics:mask_2_graphics_412,x:143.0492,y:-8.55}).wait(1).to({graphics:mask_2_graphics_413,x:143.435,y:-8.55}).wait(1).to({graphics:mask_2_graphics_414,x:143.8208,y:-8.55}).wait(1).to({graphics:mask_2_graphics_415,x:144.2067,y:-8.55}).wait(1).to({graphics:mask_2_graphics_416,x:144.5925,y:-8.55}).wait(1).to({graphics:mask_2_graphics_417,x:144.9783,y:-8.55}).wait(1).to({graphics:mask_2_graphics_418,x:145.3642,y:-8.55}).wait(1).to({graphics:mask_2_graphics_419,x:145.75,y:-8.55}).wait(901));

	// white
	this.instance_2 = new lib.white_1();
	this.instance_2.setTransform(130,0.5,1,1,0,0,0,36,70.5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(119).to({_off:false},0).to({_off:true},301).wait(900));

	// mask_broken (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_1 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_2 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_3 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_4 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_5 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_6 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_7 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_8 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_9 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_10 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_11 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_12 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_13 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_14 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_15 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_16 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_17 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_18 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_19 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_20 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_21 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_22 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_23 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_24 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_25 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_26 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_27 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_28 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_29 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_30 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_31 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_32 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_33 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_34 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_35 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_36 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_37 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_38 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_39 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_40 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_41 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_42 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_43 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_44 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_45 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_46 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_47 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_48 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_49 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_50 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_51 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_52 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_53 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_54 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_55 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_56 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_57 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_58 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_59 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_60 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_61 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_62 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_63 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_64 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_65 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_66 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_67 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_68 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_69 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_70 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_71 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_72 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_73 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_74 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_75 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_76 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_77 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_78 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_79 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_80 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_81 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_82 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_83 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_84 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_85 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_86 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_87 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_88 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_89 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_90 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_91 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_92 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_93 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_94 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_95 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_96 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_97 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_98 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_99 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_100 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_101 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_102 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_103 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_104 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_105 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_106 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_107 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_108 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_109 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_110 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_111 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_112 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_113 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_114 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_115 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_116 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_117 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_118 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_119 = new cjs.Graphics().p("AnKSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_120 = new cjs.Graphics().p("AnGSgICzsFIguiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_121 = new cjs.Graphics().p("AnBSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_122 = new cjs.Graphics().p("Am9SgICzsFIguiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_123 = new cjs.Graphics().p("Am4SgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_124 = new cjs.Graphics().p("Am0SgICzsFIguiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_125 = new cjs.Graphics().p("AmvSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_126 = new cjs.Graphics().p("AmrSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_127 = new cjs.Graphics().p("AmnSgICzsFIguiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_128 = new cjs.Graphics().p("AmiSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_129 = new cjs.Graphics().p("AmeSgICzsFIguiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_130 = new cjs.Graphics().p("AmZSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_131 = new cjs.Graphics().p("AmVSgICzsFIguiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_132 = new cjs.Graphics().p("AmQSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_133 = new cjs.Graphics().p("AmMSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_134 = new cjs.Graphics().p("AmISgICzsFIguiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_135 = new cjs.Graphics().p("AmDSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_136 = new cjs.Graphics().p("Al/SgICzsFIguiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_137 = new cjs.Graphics().p("Al6SgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_138 = new cjs.Graphics().p("Al2SgICzsFIguiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_139 = new cjs.Graphics().p("AlxSgICysFIguiZIARnKIgmiQIg8hqIk6rdIeBAMMAAAAkzg");
	var mask_3_graphics_140 = new cjs.Graphics().p("AltSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_141 = new cjs.Graphics().p("AlpSgICzsFIguiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_142 = new cjs.Graphics().p("AlkSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_143 = new cjs.Graphics().p("AlgSgICzsFIguiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_144 = new cjs.Graphics().p("AlbSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_145 = new cjs.Graphics().p("AlXSgICzsFIguiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_146 = new cjs.Graphics().p("AlTSgICzsFIguiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_147 = new cjs.Graphics().p("AlOSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_148 = new cjs.Graphics().p("AlKSgICzsFIguiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_149 = new cjs.Graphics().p("AlFSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_150 = new cjs.Graphics().p("AlBSgICzsFIguiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_151 = new cjs.Graphics().p("Ak8SgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_152 = new cjs.Graphics().p("Ak4SgICzsFIguiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_153 = new cjs.Graphics().p("Ak0SgICzsFIguiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_154 = new cjs.Graphics().p("AkvSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_155 = new cjs.Graphics().p("AkrSgICzsFIguiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_156 = new cjs.Graphics().p("AkmSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_157 = new cjs.Graphics().p("AkiSgICzsFIguiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_158 = new cjs.Graphics().p("AkdSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_159 = new cjs.Graphics().p("AkZSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_160 = new cjs.Graphics().p("AkVSgICzsFIguiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_161 = new cjs.Graphics().p("AkQSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_162 = new cjs.Graphics().p("AkMSgICzsFIguiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_163 = new cjs.Graphics().p("AkHSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_164 = new cjs.Graphics().p("AkDSgICzsFIguiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_165 = new cjs.Graphics().p("Aj+SgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_166 = new cjs.Graphics().p("Aj6SgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_167 = new cjs.Graphics().p("Aj2SgICzsFIguiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_168 = new cjs.Graphics().p("AjxSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_169 = new cjs.Graphics().p("AjtSgICzsFIguiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_170 = new cjs.Graphics().p("AjoSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_171 = new cjs.Graphics().p("AjkSgICzsFIguiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_172 = new cjs.Graphics().p("AjfSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_173 = new cjs.Graphics().p("AjbSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_174 = new cjs.Graphics().p("AjXSgICzsFIguiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_175 = new cjs.Graphics().p("AjSSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_176 = new cjs.Graphics().p("AjOSgICzsFIguiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_177 = new cjs.Graphics().p("AjJSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_178 = new cjs.Graphics().p("AjFSgICzsFIguiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_179 = new cjs.Graphics().p("AjASgICzsFIguiZIAQnKIgmiQIg7hqIk6rdId/AMMAABAkzg");
	var mask_3_graphics_180 = new cjs.Graphics().p("Ai8SgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_181 = new cjs.Graphics().p("Ai4SgICzsFIguiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_182 = new cjs.Graphics().p("AizSgICzsFIguiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_183 = new cjs.Graphics().p("AivSgICysFIgtiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_184 = new cjs.Graphics().p("AiqSgICysFIgtiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_185 = new cjs.Graphics().p("AimSgICysFIgtiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_186 = new cjs.Graphics().p("AiiSgICysFIgtiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_187 = new cjs.Graphics().p("AidSgICysFIgtiZIAQnKIgliQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_188 = new cjs.Graphics().p("AiZSgICysFIgtiZIARnKIgmiQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_189 = new cjs.Graphics().p("AiUSgICysFIgtiZIAPnKIgkiQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_190 = new cjs.Graphics().p("AiQSgICysFIgtiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_191 = new cjs.Graphics().p("AiLSgICysFIgtiZIAPnKIgkiQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_192 = new cjs.Graphics().p("AiHSgICysFIgtiZIAQnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_193 = new cjs.Graphics().p("AiDSgICysFIguiZIARnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_194 = new cjs.Graphics().p("Ah+SgICysFIguiZIAQnKIgkiQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_195 = new cjs.Graphics().p("Ah6SgICysFIguiZIARnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_196 = new cjs.Graphics().p("Ah1SgICysFIguiZIAQnKIgkiQIg8hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_197 = new cjs.Graphics().p("AhxSgICysFIguiZIARnKIgliQIg8hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_198 = new cjs.Graphics().p("AhsSgICysFIguiZIAQnKIgliQIg7hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_199 = new cjs.Graphics().p("AhoSgICysFIguiZIARnKIgmiQIg7hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_200 = new cjs.Graphics().p("AhkSgICysFIguiZIARnKIgmiQIg7hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_201 = new cjs.Graphics().p("AhfSgICysFIguiZIAQnKIgliQIg7hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_202 = new cjs.Graphics().p("AhbSgICysFIguiZIARnKIgmiQIg7hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_203 = new cjs.Graphics().p("AhWSgICysFIguiZIAQnKIgliQIg7hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_204 = new cjs.Graphics().p("AhSSgICysFIguiZIARnKIgmiQIg7hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_205 = new cjs.Graphics().p("AhNSgICysFIguiZIAQnKIgliQIg7hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_206 = new cjs.Graphics().p("AhJSgICysFIguiZIAQnKIgliQIg7hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_207 = new cjs.Graphics().p("AhFSgICysFIguiZIARnKIgmiQIg7hqIk6rdIeAAMMAABAkzg");
	var mask_3_graphics_208 = new cjs.Graphics().p("AhASgICysFIguiZIAQnKIgliQIg7hqIk6rdIeAAMMAAAAkzg");
	var mask_3_graphics_209 = new cjs.Graphics().p("Ag8SgICysFIguiZIARnKIgmiQIg7hqIk6rdIeAAMMAABAkzg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_1,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_2,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_3,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_4,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_5,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_6,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_7,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_8,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_9,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_10,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_11,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_12,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_13,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_14,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_15,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_16,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_17,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_18,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_19,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_20,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_21,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_22,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_23,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_24,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_25,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_26,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_27,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_28,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_29,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_30,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_31,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_32,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_33,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_34,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_35,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_36,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_37,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_38,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_39,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_40,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_41,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_42,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_43,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_44,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_45,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_46,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_47,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_48,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_49,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_50,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_51,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_52,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_53,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_54,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_55,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_56,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_57,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_58,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_59,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_60,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_61,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_62,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_63,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_64,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_65,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_66,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_67,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_68,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_69,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_70,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_71,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_72,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_73,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_74,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_75,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_76,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_77,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_78,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_79,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_80,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_81,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_82,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_83,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_84,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_85,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_86,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_87,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_88,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_89,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_90,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_91,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_92,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_93,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_94,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_95,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_96,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_97,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_98,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_99,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_100,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_101,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_102,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_103,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_104,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_105,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_106,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_107,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_108,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_109,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_110,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_111,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_112,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_113,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_114,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_115,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_116,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_117,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_118,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_119,x:120.05,y:-8.55}).wait(1).to({graphics:mask_3_graphics_120,x:120.4925,y:-8.55}).wait(1).to({graphics:mask_3_graphics_121,x:120.935,y:-8.55}).wait(1).to({graphics:mask_3_graphics_122,x:121.3775,y:-8.55}).wait(1).to({graphics:mask_3_graphics_123,x:121.82,y:-8.55}).wait(1).to({graphics:mask_3_graphics_124,x:122.2625,y:-8.55}).wait(1).to({graphics:mask_3_graphics_125,x:122.705,y:-8.55}).wait(1).to({graphics:mask_3_graphics_126,x:123.1475,y:-8.55}).wait(1).to({graphics:mask_3_graphics_127,x:123.59,y:-8.55}).wait(1).to({graphics:mask_3_graphics_128,x:124.0325,y:-8.55}).wait(1).to({graphics:mask_3_graphics_129,x:124.475,y:-8.55}).wait(1).to({graphics:mask_3_graphics_130,x:124.9175,y:-8.55}).wait(1).to({graphics:mask_3_graphics_131,x:125.36,y:-8.55}).wait(1).to({graphics:mask_3_graphics_132,x:125.8025,y:-8.55}).wait(1).to({graphics:mask_3_graphics_133,x:126.245,y:-8.55}).wait(1).to({graphics:mask_3_graphics_134,x:126.6875,y:-8.55}).wait(1).to({graphics:mask_3_graphics_135,x:127.13,y:-8.55}).wait(1).to({graphics:mask_3_graphics_136,x:127.5725,y:-8.55}).wait(1).to({graphics:mask_3_graphics_137,x:128.015,y:-8.55}).wait(1).to({graphics:mask_3_graphics_138,x:128.4575,y:-8.55}).wait(1).to({graphics:mask_3_graphics_139,x:128.9,y:-8.55}).wait(1).to({graphics:mask_3_graphics_140,x:129.3425,y:-8.55}).wait(1).to({graphics:mask_3_graphics_141,x:129.785,y:-8.55}).wait(1).to({graphics:mask_3_graphics_142,x:130.2275,y:-8.55}).wait(1).to({graphics:mask_3_graphics_143,x:130.67,y:-8.55}).wait(1).to({graphics:mask_3_graphics_144,x:131.1125,y:-8.55}).wait(1).to({graphics:mask_3_graphics_145,x:131.555,y:-8.55}).wait(1).to({graphics:mask_3_graphics_146,x:131.9975,y:-8.55}).wait(1).to({graphics:mask_3_graphics_147,x:132.44,y:-8.55}).wait(1).to({graphics:mask_3_graphics_148,x:132.8825,y:-8.55}).wait(1).to({graphics:mask_3_graphics_149,x:133.325,y:-8.55}).wait(1).to({graphics:mask_3_graphics_150,x:133.7675,y:-8.55}).wait(1).to({graphics:mask_3_graphics_151,x:134.21,y:-8.55}).wait(1).to({graphics:mask_3_graphics_152,x:134.6525,y:-8.55}).wait(1).to({graphics:mask_3_graphics_153,x:135.095,y:-8.55}).wait(1).to({graphics:mask_3_graphics_154,x:135.5375,y:-8.55}).wait(1).to({graphics:mask_3_graphics_155,x:135.98,y:-8.55}).wait(1).to({graphics:mask_3_graphics_156,x:136.4225,y:-8.55}).wait(1).to({graphics:mask_3_graphics_157,x:136.865,y:-8.55}).wait(1).to({graphics:mask_3_graphics_158,x:137.3075,y:-8.55}).wait(1).to({graphics:mask_3_graphics_159,x:137.75,y:-8.55}).wait(1).to({graphics:mask_3_graphics_160,x:138.1925,y:-8.55}).wait(1).to({graphics:mask_3_graphics_161,x:138.635,y:-8.55}).wait(1).to({graphics:mask_3_graphics_162,x:139.0775,y:-8.55}).wait(1).to({graphics:mask_3_graphics_163,x:139.52,y:-8.55}).wait(1).to({graphics:mask_3_graphics_164,x:139.9625,y:-8.55}).wait(1).to({graphics:mask_3_graphics_165,x:140.405,y:-8.55}).wait(1).to({graphics:mask_3_graphics_166,x:140.8475,y:-8.55}).wait(1).to({graphics:mask_3_graphics_167,x:141.29,y:-8.55}).wait(1).to({graphics:mask_3_graphics_168,x:141.7325,y:-8.55}).wait(1).to({graphics:mask_3_graphics_169,x:142.175,y:-8.55}).wait(1).to({graphics:mask_3_graphics_170,x:142.6175,y:-8.55}).wait(1).to({graphics:mask_3_graphics_171,x:143.06,y:-8.55}).wait(1).to({graphics:mask_3_graphics_172,x:143.5025,y:-8.55}).wait(1).to({graphics:mask_3_graphics_173,x:143.945,y:-8.55}).wait(1).to({graphics:mask_3_graphics_174,x:144.3875,y:-8.55}).wait(1).to({graphics:mask_3_graphics_175,x:144.83,y:-8.55}).wait(1).to({graphics:mask_3_graphics_176,x:145.2725,y:-8.55}).wait(1).to({graphics:mask_3_graphics_177,x:145.715,y:-8.55}).wait(1).to({graphics:mask_3_graphics_178,x:146.1575,y:-8.55}).wait(1).to({graphics:mask_3_graphics_179,x:146.6,y:-8.55}).wait(1).to({graphics:mask_3_graphics_180,x:147.0425,y:-8.55}).wait(1).to({graphics:mask_3_graphics_181,x:147.485,y:-8.55}).wait(1).to({graphics:mask_3_graphics_182,x:147.9275,y:-8.55}).wait(1).to({graphics:mask_3_graphics_183,x:148.37,y:-8.55}).wait(1).to({graphics:mask_3_graphics_184,x:148.8125,y:-8.55}).wait(1).to({graphics:mask_3_graphics_185,x:149.255,y:-8.55}).wait(1).to({graphics:mask_3_graphics_186,x:149.6975,y:-8.55}).wait(1).to({graphics:mask_3_graphics_187,x:150.14,y:-8.55}).wait(1).to({graphics:mask_3_graphics_188,x:150.5825,y:-8.55}).wait(1).to({graphics:mask_3_graphics_189,x:151.025,y:-8.55}).wait(1).to({graphics:mask_3_graphics_190,x:151.4675,y:-8.55}).wait(1).to({graphics:mask_3_graphics_191,x:151.91,y:-8.55}).wait(1).to({graphics:mask_3_graphics_192,x:152.3525,y:-8.55}).wait(1).to({graphics:mask_3_graphics_193,x:152.795,y:-8.55}).wait(1).to({graphics:mask_3_graphics_194,x:153.2375,y:-8.55}).wait(1).to({graphics:mask_3_graphics_195,x:153.68,y:-8.55}).wait(1).to({graphics:mask_3_graphics_196,x:154.1225,y:-8.55}).wait(1).to({graphics:mask_3_graphics_197,x:154.565,y:-8.55}).wait(1).to({graphics:mask_3_graphics_198,x:155.0075,y:-8.55}).wait(1).to({graphics:mask_3_graphics_199,x:155.45,y:-8.55}).wait(1).to({graphics:mask_3_graphics_200,x:155.8925,y:-8.55}).wait(1).to({graphics:mask_3_graphics_201,x:156.335,y:-8.55}).wait(1).to({graphics:mask_3_graphics_202,x:156.7775,y:-8.55}).wait(1).to({graphics:mask_3_graphics_203,x:157.22,y:-8.55}).wait(1).to({graphics:mask_3_graphics_204,x:157.6625,y:-8.55}).wait(1).to({graphics:mask_3_graphics_205,x:158.105,y:-8.55}).wait(1).to({graphics:mask_3_graphics_206,x:158.5475,y:-8.55}).wait(1).to({graphics:mask_3_graphics_207,x:158.99,y:-8.55}).wait(1).to({graphics:mask_3_graphics_208,x:159.4325,y:-8.55}).wait(1).to({graphics:mask_3_graphics_209,x:159.875,y:-8.55}).wait(1111));

	// broken
	this.instance_3 = new lib.broken();
	this.instance_3.setTransform(93,-119);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},210).wait(1110));

	// РЎР»РѕР№_3 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_539 = new cjs.Graphics().p("EhR2AeAMArGg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_540 = new cjs.Graphics().p("EhR2AeAMArGg7/MB4oAAAMgrIA7/g");
	var mask_4_graphics_541 = new cjs.Graphics().p("EhR2AeAMArGg7/MB4nAAAMgrGA7/g");
	var mask_4_graphics_542 = new cjs.Graphics().p("EhR3AeAMArIg7/MB4mAAAMgrGA7/g");
	var mask_4_graphics_543 = new cjs.Graphics().p("EhR2AeAMArGg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_544 = new cjs.Graphics().p("EhR3AeAMArIg7/MB4nAAAMgrIA7/g");
	var mask_4_graphics_545 = new cjs.Graphics().p("EhR2AeAMArGg7/MB4oAAAMgrIA7/g");
	var mask_4_graphics_546 = new cjs.Graphics().p("EhR2AeAMArGg7/MB4nAAAMgrGA7/g");
	var mask_4_graphics_547 = new cjs.Graphics().p("EhR3AeAMArIg7/MB4nAAAMgrIA7/g");
	var mask_4_graphics_548 = new cjs.Graphics().p("EhR3AeAMArIg7/MB4mAAAMgrGA7/g");
	var mask_4_graphics_549 = new cjs.Graphics().p("EhR3AeAMArIg7/MB4nAAAMgrIA7/g");
	var mask_4_graphics_550 = new cjs.Graphics().p("EhR2AeAMArGg7/MB4nAAAMgrGA7/g");
	var mask_4_graphics_551 = new cjs.Graphics().p("EhR2AeAMArGg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_552 = new cjs.Graphics().p("EhR3AeAMArIg7/MB4mAAAMgrGA7/g");
	var mask_4_graphics_553 = new cjs.Graphics().p("EhR2AeAMArGg7/MB4nAAAMgrGA7/g");
	var mask_4_graphics_554 = new cjs.Graphics().p("EhR3AeAMArIg7/MB4nAAAMgrIA7/g");
	var mask_4_graphics_555 = new cjs.Graphics().p("EhR2AeAMArGg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_556 = new cjs.Graphics().p("EhR2AeAMArGg7/MB4nAAAMgrGA7/g");
	var mask_4_graphics_557 = new cjs.Graphics().p("EhR2AeAMArGg7/MB4oAAAMgrIA7/g");
	var mask_4_graphics_558 = new cjs.Graphics().p("EhR2AeAMArGg7/MB4nAAAMgrGA7/g");
	var mask_4_graphics_559 = new cjs.Graphics().p("EhR3AeAMArIg7/MB4mAAAMgrGA7/g");
	var mask_4_graphics_560 = new cjs.Graphics().p("EhR3AeAMArIg7/MB4nAAAMgrIA7/g");
	var mask_4_graphics_561 = new cjs.Graphics().p("EhR2AeAMArGg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_562 = new cjs.Graphics().p("EhR3AeAMArIg7/MB4mAAAMgrGA7/g");
	var mask_4_graphics_563 = new cjs.Graphics().p("EhR2AeAMArGg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_564 = new cjs.Graphics().p("EhR3AeAMArIg7/MB4mAAAMgrGA7/g");
	var mask_4_graphics_565 = new cjs.Graphics().p("EhR2AeAMArGg7/MB4nAAAMgrGA7/g");
	var mask_4_graphics_566 = new cjs.Graphics().p("EhR3AeAMArIg7/MB4nAAAMgrIA7/g");
	var mask_4_graphics_567 = new cjs.Graphics().p("EhR2AeAMArGg7/MB4oAAAMgrIA7/g");
	var mask_4_graphics_568 = new cjs.Graphics().p("EhR2AeAMArGg7/MB4nAAAMgrGA7/g");
	var mask_4_graphics_569 = new cjs.Graphics().p("EhR2AeAMArGg7/MB4oAAAMgrIA7/g");
	var mask_4_graphics_570 = new cjs.Graphics().p("EhR2AeAMArGg7/MB4oAAAMgrIA7/g");
	var mask_4_graphics_571 = new cjs.Graphics().p("EhR2AeAMArGg7/MB4nAAAMgrGA7/g");
	var mask_4_graphics_572 = new cjs.Graphics().p("EhR3AeAMArIg7/MB4mAAAMgrGA7/g");
	var mask_4_graphics_573 = new cjs.Graphics().p("EhR3AeAMArIg7/MB4nAAAMgrIA7/g");
	var mask_4_graphics_574 = new cjs.Graphics().p("EhR2AeAMArGg7/MB4nAAAMgrGA7/g");
	var mask_4_graphics_575 = new cjs.Graphics().p("EhR3AeAMArIg7/MB4nAAAMgrIA7/g");
	var mask_4_graphics_576 = new cjs.Graphics().p("EhR3AeAMArIg7/MB4nAAAMgrIA7/g");
	var mask_4_graphics_577 = new cjs.Graphics().p("EhR3AeAMArIg7/MB4nAAAMgrIA7/g");
	var mask_4_graphics_578 = new cjs.Graphics().p("EhR3AeAMArIg7/MB4mAAAMgrGA7/g");
	var mask_4_graphics_579 = new cjs.Graphics().p("EhR3AeAMArIg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_580 = new cjs.Graphics().p("EhR2AeAMArGg7/MB4nAAAMgrGA7/g");
	var mask_4_graphics_581 = new cjs.Graphics().p("EhR3AeAMArHg7/MB4oAAAMgrIA7/g");
	var mask_4_graphics_582 = new cjs.Graphics().p("EhR3AeAMArIg7/MB4mAAAMgrGA7/g");
	var mask_4_graphics_583 = new cjs.Graphics().p("EhR3AeAMArIg7/MB4mAAAMgrGA7/g");
	var mask_4_graphics_584 = new cjs.Graphics().p("EhR2AeAMArGg7/MB4nAAAMgrGA7/g");
	var mask_4_graphics_585 = new cjs.Graphics().p("EhR3AeAMArIg7/MB4nAAAMgrIA7/g");
	var mask_4_graphics_586 = new cjs.Graphics().p("EhR2AeAMArGg7/MB4nAAAMgrGA7/g");
	var mask_4_graphics_587 = new cjs.Graphics().p("EhQ8AeAMArHg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_588 = new cjs.Graphics().p("EhQAAeAMArHg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_589 = new cjs.Graphics().p("EhPEAeAMArHg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_590 = new cjs.Graphics().p("EhOKAeAMArHg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_591 = new cjs.Graphics().p("EhNRAeAMArHg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_592 = new cjs.Graphics().p("EhMZAeAMArHg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_593 = new cjs.Graphics().p("EhLiAeAMArHg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_594 = new cjs.Graphics().p("EhKsAeAMArHg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_595 = new cjs.Graphics().p("EhJ4AeAMArHg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_596 = new cjs.Graphics().p("EhJGAeAMArHg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_597 = new cjs.Graphics().p("EhIUAeAMArHg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_598 = new cjs.Graphics().p("EhHlAeAMArHg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_599 = new cjs.Graphics().p("EhG3AeAMArHg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_600 = new cjs.Graphics().p("EhGLAeAMArHg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_601 = new cjs.Graphics().p("EhFhAeAMArHg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_602 = new cjs.Graphics().p("EhE4AeAMArHg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_603 = new cjs.Graphics().p("EhEQAeAMArHg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_604 = new cjs.Graphics().p("EhDrAeAMArHg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_605 = new cjs.Graphics().p("EhDHAeAMArHg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_606 = new cjs.Graphics().p("EhClAeAMArHg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_607 = new cjs.Graphics().p("EhCEAeAMArHg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_608 = new cjs.Graphics().p("EhBlAeAMArHg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_609 = new cjs.Graphics().p("EhBIAeAMArHg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_610 = new cjs.Graphics().p("EhAsAeAMArHg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_611 = new cjs.Graphics().p("EhASAeAMArHg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_612 = new cjs.Graphics().p("Eg/5AeAMArHg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_613 = new cjs.Graphics().p("Eg/iAeAMArHg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_614 = new cjs.Graphics().p("Eg/MAeAMArHg7/MB4nAAAMgrHA7/g");
	var mask_4_graphics_615 = new cjs.Graphics().p("Eg+4AeAMArIg7/MB4mAAAMgrGA7/g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(539).to({graphics:mask_4_graphics_539,x:181.65,y:-40.65}).wait(1).to({graphics:mask_4_graphics_540,x:182.2151,y:-40.65}).wait(1).to({graphics:mask_4_graphics_541,x:183.0118,y:-40.65}).wait(1).to({graphics:mask_4_graphics_542,x:184.0462,y:-40.65}).wait(1).to({graphics:mask_4_graphics_543,x:185.3247,y:-40.65}).wait(1).to({graphics:mask_4_graphics_544,x:186.8535,y:-40.65}).wait(1).to({graphics:mask_4_graphics_545,x:188.6393,y:-40.65}).wait(1).to({graphics:mask_4_graphics_546,x:190.6888,y:-40.65}).wait(1).to({graphics:mask_4_graphics_547,x:193.0086,y:-40.65}).wait(1).to({graphics:mask_4_graphics_548,x:195.6057,y:-40.65}).wait(1).to({graphics:mask_4_graphics_549,x:198.4868,y:-40.65}).wait(1).to({graphics:mask_4_graphics_550,x:201.659,y:-40.65}).wait(1).to({graphics:mask_4_graphics_551,x:205.1292,y:-40.65}).wait(1).to({graphics:mask_4_graphics_552,x:208.9042,y:-40.65}).wait(1).to({graphics:mask_4_graphics_553,x:212.9908,y:-40.65}).wait(1).to({graphics:mask_4_graphics_554,x:217.3959,y:-40.65}).wait(1).to({graphics:mask_4_graphics_555,x:222.1257,y:-40.65}).wait(1).to({graphics:mask_4_graphics_556,x:227.1866,y:-40.65}).wait(1).to({graphics:mask_4_graphics_557,x:232.5845,y:-40.65}).wait(1).to({graphics:mask_4_graphics_558,x:238.3249,y:-40.65}).wait(1).to({graphics:mask_4_graphics_559,x:244.4128,y:-40.65}).wait(1).to({graphics:mask_4_graphics_560,x:250.8526,y:-40.65}).wait(1).to({graphics:mask_4_graphics_561,x:257.6478,y:-40.65}).wait(1).to({graphics:mask_4_graphics_562,x:264.8014,y:-40.65}).wait(1).to({graphics:mask_4_graphics_563,x:272.3151,y:-40.65}).wait(1).to({graphics:mask_4_graphics_564,x:280.1896,y:-40.65}).wait(1).to({graphics:mask_4_graphics_565,x:288.4243,y:-40.65}).wait(1).to({graphics:mask_4_graphics_566,x:297.0171,y:-40.65}).wait(1).to({graphics:mask_4_graphics_567,x:305.9643,y:-40.65}).wait(1).to({graphics:mask_4_graphics_568,x:315.2605,y:-40.65}).wait(1).to({graphics:mask_4_graphics_569,x:324.8984,y:-40.65}).wait(1).to({graphics:mask_4_graphics_570,x:334.8686,y:-40.65}).wait(1).to({graphics:mask_4_graphics_571,x:345.1595,y:-40.65}).wait(1).to({graphics:mask_4_graphics_572,x:355.7572,y:-40.65}).wait(1).to({graphics:mask_4_graphics_573,x:366.6456,y:-40.65}).wait(1).to({graphics:mask_4_graphics_574,x:377.806,y:-40.65}).wait(1).to({graphics:mask_4_graphics_575,x:389.2176,y:-40.65}).wait(1).to({graphics:mask_4_graphics_576,x:400.8572,y:-40.65}).wait(1).to({graphics:mask_4_graphics_577,x:412.6995,y:-40.65}).wait(1).to({graphics:mask_4_graphics_578,x:424.717,y:-40.65}).wait(1).to({graphics:mask_4_graphics_579,x:436.8806,y:-40.65}).wait(1).to({graphics:mask_4_graphics_580,x:449.1598,y:-40.65}).wait(1).to({graphics:mask_4_graphics_581,x:461.5228,y:-40.65}).wait(1).to({graphics:mask_4_graphics_582,x:473.9371,y:-40.65}).wait(1).to({graphics:mask_4_graphics_583,x:486.3698,y:-40.65}).wait(1).to({graphics:mask_4_graphics_584,x:498.7878,y:-40.65}).wait(1).to({graphics:mask_4_graphics_585,x:511.1585,y:-40.65}).wait(1).to({graphics:mask_4_graphics_586,x:523.4503,y:-40.65}).wait(1).to({graphics:mask_4_graphics_587,x:529.7912,y:-40.65}).wait(1).to({graphics:mask_4_graphics_588,x:535.8127,y:-40.65}).wait(1).to({graphics:mask_4_graphics_589,x:541.751,y:-40.65}).wait(1).to({graphics:mask_4_graphics_590,x:547.5932,y:-40.65}).wait(1).to({graphics:mask_4_graphics_591,x:553.3276,y:-40.65}).wait(1).to({graphics:mask_4_graphics_592,x:558.9435,y:-40.65}).wait(1).to({graphics:mask_4_graphics_593,x:564.4314,y:-40.65}).wait(1).to({graphics:mask_4_graphics_594,x:569.7829,y:-40.65}).wait(1).to({graphics:mask_4_graphics_595,x:574.9908,y:-40.65}).wait(1).to({graphics:mask_4_graphics_596,x:580.0489,y:-40.65}).wait(1).to({graphics:mask_4_graphics_597,x:584.9521,y:-40.65}).wait(1).to({graphics:mask_4_graphics_598,x:589.6964,y:-40.65}).wait(1).to({graphics:mask_4_graphics_599,x:594.2786,y:-40.65}).wait(1).to({graphics:mask_4_graphics_600,x:598.6963,y:-40.65}).wait(1).to({graphics:mask_4_graphics_601,x:602.9481,y:-40.65}).wait(1).to({graphics:mask_4_graphics_602,x:607.033,y:-40.65}).wait(1).to({graphics:mask_4_graphics_603,x:610.9509,y:-40.65}).wait(1).to({graphics:mask_4_graphics_604,x:614.7022,y:-40.65}).wait(1).to({graphics:mask_4_graphics_605,x:618.2877,y:-40.65}).wait(1).to({graphics:mask_4_graphics_606,x:621.7087,y:-40.65}).wait(1).to({graphics:mask_4_graphics_607,x:624.9669,y:-40.65}).wait(1).to({graphics:mask_4_graphics_608,x:628.0641,y:-40.65}).wait(1).to({graphics:mask_4_graphics_609,x:631.0027,y:-40.65}).wait(1).to({graphics:mask_4_graphics_610,x:633.7851,y:-40.65}).wait(1).to({graphics:mask_4_graphics_611,x:636.4139,y:-40.65}).wait(1).to({graphics:mask_4_graphics_612,x:638.8919,y:-40.65}).wait(1).to({graphics:mask_4_graphics_613,x:641.2219,y:-40.65}).wait(1).to({graphics:mask_4_graphics_614,x:643.407,y:-40.65}).wait(1).to({graphics:mask_4_graphics_615,x:645.45,y:-40.65}).wait(1).to({graphics:null,x:0,y:0}).wait(704));

	// car1
	this.instance_4 = new lib.vw1();
	this.instance_4.setTransform(-223,-130);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(615).to({_off:true},1).wait(704));

	// car2
	this.instance_5 = new lib.vw2();
	this.instance_5.setTransform(-223,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(615).to({_off:true},1).wait(15).to({_off:false},0).wait(148).to({_off:true},1).wait(540));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-223,-130,454.5,260);


(lib.smoke0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// РЎР»РѕР№_1
	this.instance = new lib.smokemany();
	this.instance.setTransform(105.7,154.25,0.2,0.2,0,0,0,333.5,228.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:333.4,scaleX:0.6,scaleY:0.6,x:42.4,alpha:1},19).to({regX:333.6,regY:228.9,scaleX:1,scaleY:1,x:-20.95,alpha:0},20).wait(36));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-357.1,-71.6,672.8,453.29999999999995);


(lib.wheel1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shadow
	this.instance = new lib.shadow();
	this.instance.setTransform(0,100.15,0.7272,0.0948,0,0,0,125,125);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(178).to({_off:true},1).wait(1));

	// smoke19
	this.instance_1 = new lib.smoke_1();
	this.instance_1.setTransform(-162.45,99.15,1,0.5656,-14.9619,0,0,122.4,102.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({scaleX:2.5995,scaleY:1.5952,rotation:3.5345,x:-480.6,y:110.75,alpha:0.5},30).to({scaleX:4.1468,scaleY:2.591,rotation:21.611,x:-788,y:121.8,alpha:0.0156},29).to({_off:true},1).wait(1));

	// smoke18
	this.instance_2 = new lib.smoke_1();
	this.instance_2.setTransform(0,99.05,1,0.1337,0,0,0,122.5,100.5);
	this.instance_2.alpha = 0.5;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89).to({_off:false},0).to({scaleX:4.1648,scaleY:2.5978,rotation:-7.678,x:-1003.4,y:68.4,alpha:0.0039},89).to({_off:true},1).wait(1));

	// smoke23
	this.instance_3 = new lib.smoke_1();
	this.instance_3.setTransform(0,112.55,1,0.1337,0,0,0,122.5,100.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({_off:false},0).to({scaleX:2.9844,scaleY:1.5254,rotation:-5.0041,x:-584.15,y:99.15,alpha:0.5},40).to({scaleX:7.4023,scaleY:4.6232,rotation:-16.1613,x:-1883.65,y:69.45,alpha:0.0039},89).to({_off:true},1).wait(1));

	// smoke22
	this.instance_4 = new lib.smoke_1();
	this.instance_4.setTransform(0,112.55,1,0.1337,180,0,0,122.5,100.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({_off:false},0).to({scaleX:4.2011,scaleY:2.3789,rotation:194.2639,x:-942.75,y:90.95,alpha:0.5},74).to({scaleX:7.4081,scaleY:4.6276,rotation:208.5225,x:-1885.6,y:69.2,alpha:0.0078},74).to({_off:true},1).wait(1));

	// smoke21
	this.instance_5 = new lib.smoke_1();
	this.instance_5.setTransform(0,112.55,1,0.1337,180,0,0,122.5,100.5);
	this.instance_5.alpha = 0.5;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(144).to({_off:false},0).to({scaleX:7.2677,scaleY:4.5288,rotation:207.8942,x:-339.35,y:380.7,alpha:0.0156},34).to({_off:true},1).wait(1));

	// smoke20
	this.instance_6 = new lib.smoke_1();
	this.instance_6.setTransform(0,112.55,1,0.1337,0,0,0,122.5,100.5);
	this.instance_6.alpha = 0.5;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(74).to({_off:false},0).to({scaleX:7.3907,scaleY:4.615,rotation:28.4405,x:-1623.55,y:148.5,alpha:0.0039},104).to({_off:true},1).wait(1));

	// smoke17
	this.instance_7 = new lib.smoke_1();
	this.instance_7.setTransform(0,112.55,1,0.1337,0,0,0,122.5,100.5);
	this.instance_7.alpha = 0.5;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(59).to({_off:false},0).to({scaleX:4.1737,scaleY:2.6047,rotation:18.3288,x:-1260.5,y:148.6,alpha:0.0039},119).to({_off:true},1).wait(1));

	// smoke16
	this.instance_8 = new lib.smoke_1();
	this.instance_8.setTransform(0,99.05,1,0.1337,0,0,0,122.5,100.5);
	this.instance_8.alpha = 0.5;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(89).to({_off:false},0).to({regY:100.6,scaleX:2.3856,scaleY:0.7126,rotation:-9.8472,x:-113.1,y:60.5,alpha:0.0039},89).to({_off:true},1).wait(1));

	// smoke15
	this.instance_9 = new lib.smoke_1();
	this.instance_9.setTransform(0,104.45,1,0.0537,0,0,0,122.5,100.5);
	this.instance_9.alpha = 0.5;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(30).to({_off:false},0).to({scaleX:2.3917,scaleY:0.7147,rotation:10.6566,x:-77.45,y:85.8,alpha:0.0039},148).to({_off:true},1).wait(1));

	// smoke11
	this.instance_10 = new lib.smoke_1();
	this.instance_10.setTransform(1.8,101.3,0.6657,0.0034,0,0,0,121.8,101.5);
	this.instance_10.alpha = 0.5;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(119).to({_off:false},0).to({regX:124.8,regY:100.3,scaleX:1.3418,scaleY:0.5861,x:-64.4,y:71,alpha:0},30).to({_off:true},1).wait(30));

	// smoke10___РєРѕРїРёСЏ
	this.instance_11 = new lib.smoke_1();
	this.instance_11.setTransform(1.75,101.3,0.6657,0.049,180,0,0,121.7,101.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(149).to({_off:false},0).to({scaleX:1.0037,scaleY:0.3175,x:-31.4,y:86.2,alpha:0.5},15).to({regY:101,scaleX:1.3192,scaleY:0.5682,x:-62.3,y:72,alpha:0.0352},14).to({_off:true},1).wait(1));

	// smoke9___РєРѕРїРёСЏ
	this.instance_12 = new lib.smoke_1();
	this.instance_12.setTransform(1.8,101.3,0.6657,0.0034,0,0,0,121.8,101.5);
	this.instance_12.alpha = 0.5;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(120).to({_off:false},0).to({regX:124.8,regY:100.3,scaleX:1.3418,scaleY:0.5861,x:-64.4,y:71,alpha:0},29).wait(29).to({_off:true},1).wait(1));

	// smoke7___РєРѕРїРёСЏ
	this.instance_13 = new lib.smoke_1();
	this.instance_13.setTransform(1.75,101.35,0.6657,0.2554,180,0,0,121.7,100.8);
	this.instance_13.alpha = 0.5;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(120).to({_off:false},0).to({regX:124.8,regY:100.2,scaleX:1.3417,scaleY:1.9034,x:-144.3,y:48.85,alpha:0},29).wait(29).to({_off:true},1).wait(1));

	// smoke6___РєРѕРїРёСЏ
	this.instance_14 = new lib.smoke_1();
	this.instance_14.setTransform(1.75,101.3,0.6657,0.049,180,0,0,121.7,101.1);
	this.instance_14.alpha = 0.5;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(105).to({_off:false},0).to({regX:124.8,regY:100.3,scaleX:1.3417,scaleY:0.5861,x:-64.45,y:70.95,alpha:0},29).wait(44).to({_off:true},1).wait(1));

	// smoke5___РєРѕРїРёСЏ
	this.instance_15 = new lib.smoke_1();
	this.instance_15.setTransform(1.8,101.3,0.6657,0.0034,0,0,0,121.8,101.5);
	this.instance_15.alpha = 0.5;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(90).to({_off:false},0).to({scaleX:1.3192,scaleY:0.5667,x:-62.1,y:71.9,alpha:0.0195},29).to({regX:124.8,regY:100.3,scaleX:1.3418,scaleY:0.5861,x:-64.4,y:71,alpha:0},1).wait(58).to({_off:true},1).wait(1));

	// smoke4___РєРѕРїРёСЏ
	this.instance_16 = new lib.smoke_1();
	this.instance_16.setTransform(-35.05,103.5,0.05,0.05,180,0,0,123,100);
	this.instance_16.alpha = 0.5;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(90).to({_off:false},0).to({regX:122.4,regY:100.5,scaleX:0.5468,scaleY:0.5468,rotation:247.19,x:-110.4,y:10.95},30).to({regX:125,regY:100,scaleX:1,scaleY:1,rotation:314.9994,x:-99.9,y:-121.5,alpha:0},29).wait(29).to({_off:true},1).wait(1));

	// smoke10
	this.instance_17 = new lib.smoke_1();
	this.instance_17.setTransform(1.75,101.3,0.6657,0.049,180,0,0,121.7,101.1);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(89).to({_off:false},0).to({scaleX:1.0037,scaleY:0.3175,x:-31.4,y:86.2,alpha:0.5},15).to({regX:124.8,regY:100.3,scaleX:1.3417,scaleY:0.5861,x:-64.45,y:70.95,alpha:0},15).to({_off:true},1).wait(60));

	// smoke9
	this.instance_18 = new lib.smoke_1();
	this.instance_18.setTransform(1.8,101.3,0.6657,0.0034,0,0,0,121.8,101.5);
	this.instance_18.alpha = 0.5;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(60).to({_off:false},0).to({regX:121.7,scaleX:0.9921,scaleY:0.2847,x:-30.2,y:86.65,alpha:0.2617},14).to({regX:124.8,regY:100.3,scaleX:1.3418,scaleY:0.5861,x:-64.4,y:71,alpha:0},15).to({_off:true},1).wait(90));

	// smoke8
	this.instance_19 = new lib.smoke_1();
	this.instance_19.setTransform(4.45,101.25,0.6657,0.0655,180,0,0,121.7,100.8);
	this.instance_19.alpha = 0.5;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(119).to({_off:false},0).to({regX:124.8,regY:100.1,scaleX:1.3417,scaleY:1.9301,x:-124.85,y:-110.75,alpha:0},30).to({_off:true},1).wait(30));

	// smoke7
	this.instance_20 = new lib.smoke_1();
	this.instance_20.setTransform(1.75,101.35,0.6657,0.2554,180,0,0,121.7,100.8);
	this.instance_20.alpha = 0.5;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(60).to({_off:false},0).to({regX:124.8,regY:100.2,scaleX:1.3417,scaleY:1.9034,x:-144.3,y:48.85,alpha:0},29).to({_off:true},1).wait(90));

	// smoke6
	this.instance_21 = new lib.smoke_1();
	this.instance_21.setTransform(1.75,101.3,0.6657,0.049,180,0,0,121.7,101.1);
	this.instance_21.alpha = 0.5;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(45).to({_off:false},0).to({regX:124.8,regY:100.3,scaleX:1.3417,scaleY:0.5861,x:-64.45,y:70.95,alpha:0},29).to({_off:true},1).wait(105));

	// smoke5
	this.instance_22 = new lib.smoke_1();
	this.instance_22.setTransform(1.8,101.3,0.6657,0.0034,0,0,0,121.8,101.5);
	this.instance_22.alpha = 0.5;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(30).to({_off:false},0).to({regY:101.6,scaleX:1.0037,scaleY:0.2948,x:-31.3,y:86.15,alpha:0.25},15).to({regX:124.8,regY:100.3,scaleX:1.3418,scaleY:0.5861,x:-64.4,y:71,alpha:0},15).to({_off:true},1).wait(119));

	// smoke4
	this.instance_23 = new lib.smoke_1();
	this.instance_23.setTransform(-35.05,103.5,0.05,0.05,180,0,0,123,100);
	this.instance_23.alpha = 0.5;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(30).to({_off:false},0).to({regX:122.4,regY:100.5,scaleX:0.5468,scaleY:0.5468,rotation:247.19,x:-110.4,y:10.95},30).to({regX:125,regY:100,scaleX:1,scaleY:1,rotation:314.9994,x:-99.9,y:-121.5,alpha:0},29).to({_off:true},1).wait(90));

	// smoke0_distorted
	this.instance_24 = new lib.smoke0("synched",1);
	this.instance_24.setTransform(-3.85,104.05,1,0.2077,0,0,0,105.7,154.3);
	this.instance_24.alpha = 0.5;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(30).to({_off:false},0).wait(148).to({startPosition:74},0).to({_off:true},1).wait(1));

	// wheel
	this.instance_25 = new lib.wheel1rotating();
	this.instance_25.setTransform(0,0,1,1,0,0,0,100,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(16).to({rotation:3.793,x:0.05,y:0.05},0).wait(1).to({rotation:7.7254},0).wait(1).to({rotation:11.7992},0).wait(1).to({rotation:16.0161,x:0,y:0},0).wait(1).to({rotation:20.3781,x:0.05},0).wait(1).to({rotation:24.8872,x:0,y:0.05},0).wait(1).to({rotation:29.5454,x:0.05,y:0},0).wait(1).to({rotation:34.3547,x:0,y:0.05},0).wait(1).to({rotation:39.3171,y:0},0).wait(1).to({rotation:44.4349,x:0.05},0).wait(1).to({rotation:49.7101,x:-0.05,y:0.05},0).wait(1).to({rotation:55.1449,x:0,y:0},0).wait(1).to({rotation:60.7416,x:-0.05},0).wait(1).to({rotation:66.5024},0).wait(1).to({rotation:72.4296,y:0.05},0).wait(1).to({rotation:78.5255,x:0},0).wait(1).to({rotation:84.7926},0).wait(1).to({rotation:91.2332,x:-0.05},0).wait(1).to({rotation:97.8499,x:0,y:0},0).wait(1).to({rotation:104.6451,x:-0.05},0).wait(1).to({rotation:111.6215,x:0},0).wait(1).to({rotation:118.7815,x:-0.05,y:0.05},0).wait(1).to({rotation:126.1279,x:0,y:0},0).wait(1).to({rotation:133.6633,x:-0.05,y:0.05},0).wait(1).to({rotation:141.3905,y:-0.05},0).wait(1).to({rotation:149.3123,y:0},0).wait(1).to({rotation:157.4315},0).wait(1).to({rotation:165.7511,x:0},0).wait(1).to({rotation:174.2738,x:-0.05},0).wait(1).to({rotation:183.0028,x:0,y:-0.05},0).wait(1).to({rotation:191.9411,x:-0.05},0).wait(1).to({rotation:201.0917,x:0},0).wait(1).to({rotation:210.4578},0).wait(1).to({rotation:220.0425},0).wait(1).to({rotation:229.8492},0).wait(1).to({rotation:239.8811},0).wait(1).to({rotation:250.1416,x:0.05,y:0},0).wait(1).to({rotation:260.6341},0).wait(1).to({rotation:271.3619},0).wait(1).to({rotation:282.3287,y:-0.05},0).wait(1).to({rotation:293.538},0).wait(1).to({rotation:304.9934,x:0,y:0},0).wait(1).to({rotation:316.6986,x:0.05,y:0.05},0).wait(1).to({rotation:328.6572,x:0},0).wait(1).to({rotation:340.8732,x:0.05},0).wait(1).to({rotation:353.3502},0).wait(1).to({rotation:366.0922,y:0},0).wait(1).to({rotation:379.1031,x:0,y:0.05},0).wait(1).to({rotation:392.3868,x:0.05,y:0},0).wait(1).to({rotation:405.9475,x:0},0).wait(1).to({rotation:419.789,x:-0.05},0).wait(1).to({rotation:433.9157,y:0.05},0).wait(1).to({rotation:448.3316,y:0},0).wait(1).to({rotation:463.0409,x:0},0).wait(1).to({rotation:478.0479,y:0.05},0).wait(1).to({rotation:493.3568,y:0},0).wait(1).to({rotation:508.972,x:-0.05,y:-0.05},0).wait(1).to({rotation:524.8978,x:0},0).wait(1).to({rotation:541.1385,x:-0.05},0).wait(1).to({rotation:557.6986,x:0,y:0},0).wait(1).to({rotation:574.5824,x:-0.05,y:-0.05},0).wait(1).to({rotation:591.7943,x:0.05},0).wait(1).to({rotation:609.3389,x:0},0).wait(1).to({rotation:627.2206,x:0.05},0).wait(1).to({rotation:645.4437,y:0},0).wait(1).to({rotation:664.0127,y:-0.05},0).wait(1).to({rotation:682.9321,y:0},0).wait(1).to({rotation:702.2061,x:0},0).wait(1).to({rotation:721.8393,x:0.05},0).wait(1).to({rotation:741.8358,x:0},0).wait(1).to({rotation:762.2,x:0.05},0).wait(1).to({rotation:782.9361,x:0},0).wait(1).to({rotation:804.0483,x:-0.05},0).wait(1).to({rotation:825.5406},0).wait(1).to({rotation:847.417,x:0},0).wait(1).to({rotation:869.6814},0).wait(1).to({rotation:892.3375,x:-0.05},0).wait(1).to({rotation:915.3891,x:0,y:-0.05},0).wait(1).to({rotation:938.8395,x:-0.05},0).wait(1).to({rotation:962.6921,x:0},0).wait(1).to({rotation:986.9501,x:0.05,y:0},0).wait(1).to({rotation:1011.6165,x:0},0).wait(1).to({rotation:1036.6939},0).wait(1).to({rotation:1062.185,x:0.05},0).wait(1).to({rotation:1088.092,x:0,y:0.05},0).wait(1).to({rotation:1114.417,x:0.05,y:0},0).wait(1).to({rotation:1141.1617,x:0,y:0.05},0).wait(1).to({rotation:1168.3275,x:-0.05,y:0},0).wait(1).to({rotation:1195.9155,y:0.05},0).wait(1).to({rotation:1223.9265,y:-0.05},0).wait(1).to({rotation:1252.361,x:0,y:0},0).wait(1).to({rotation:1281.2189},0).wait(1).to({rotation:1310.4999},0).wait(1).to({rotation:1340.2032,x:0.05,y:-0.05},0).wait(1).to({rotation:1370.3274,x:0,y:0},0).wait(1).to({rotation:1400.8709},0).wait(1).to({rotation:1431.8315,x:0.05,y:0.05},0).wait(1).to({rotation:1463.2065,x:0,y:0},0).wait(1).to({rotation:1494.9926,x:-0.05},0).wait(1).to({rotation:1527.1861,y:0.05},0).wait(1).to({rotation:1559.7828,x:0},0).wait(1).to({rotation:1592.7776,y:0},0).wait(1).to({rotation:1626.1652,y:-0.05},0).wait(1).to({rotation:1659.9396,y:0},0).wait(1).to({rotation:1694.0942},0).wait(1).to({rotation:1728.6217,x:0.05},0).wait(1).to({rotation:1763.5145,x:0},0).wait(1).to({rotation:1798.7642,x:0.05,y:0.05},0).wait(1).to({rotation:1834.3617,x:0,y:0},0).wait(1).to({rotation:1870.2977,x:-0.05},0).wait(1).to({rotation:1906.562,x:0},0).wait(1).to({rotation:1943.1439,x:-0.05},0).wait(1).to({rotation:1980.0324,y:-0.05},0).wait(1).to({rotation:2017.2157,x:0},0).wait(1).to({rotation:2054.6817,x:0.05,y:0},0).wait(1).to({rotation:2092.4177,y:-0.05},0).wait(1).to({rotation:2130.4107,y:0},0).wait(1).to({rotation:2168.6472,x:0},0).wait(1).to({rotation:2207.1134},0).wait(1).to({rotation:2245.7951,x:-0.05,y:0.05},0).wait(1).to({rotation:2284.6778,y:0},0).wait(1).to({rotation:2323.7469,y:-0.05},0).wait(1).to({rotation:2362.9873,x:0},0).wait(1).to({rotation:2402.3841},0).wait(1).to({rotation:2441.922,x:0.05},0).wait(1).to({rotation:2481.5857,y:0},0).wait(1).to({rotation:2521.3598,y:-0.05},0).wait(1).to({rotation:2561.229,y:0},0).wait(1).to({rotation:2601.1781,x:0},0).wait(1).to({rotation:2641.1917,x:-0.05},0).wait(1).to({rotation:2681.2549,y:-0.05},0).wait(1).to({rotation:2721.3528},0).wait(1).to({rotation:2761.4706,x:0.05},0).wait(1).to({rotation:2801.5939,x:0},0).wait(1).to({rotation:2841.7086,x:0.05,y:0.05},0).wait(1).to({rotation:2881.8006,x:0,y:0},0).wait(1).to({rotation:2921.8565,y:0.05},0).wait(1).to({rotation:2961.8631,x:-0.05,y:0},0).wait(1).to({rotation:3001.8076,y:0.05},0).wait(1).to({rotation:3041.6775,y:-0.05},0).wait(1).to({rotation:3081.4609,x:0},0).wait(1).to({rotation:3121.1462,x:0.05},0).wait(1).to({rotation:3160.7223,x:0},0).wait(1).to({rotation:3200.1784,x:0.05,y:0},0).wait(1).to({rotation:3239.5045,x:0},0).wait(1).to({rotation:3278.6907,x:0.05},0).wait(1).to({rotation:3317.7277,x:0},0).wait(1).to({rotation:3356.6069,x:-0.05},0).wait(1).to({rotation:3395.3197,x:0,y:-0.05},0).wait(1).to({rotation:3433.8584,x:-0.05},0).wait(1).to({rotation:3472.2154,x:0.05},0).wait(1).to({rotation:3510.3839,x:0},0).wait(1).to({rotation:3548.3573},0).wait(1).to({rotation:3586.1295,y:0.05},0).wait(1).to({rotation:3623.6948,y:0},0).wait(1).to({rotation:3661.048,x:-0.05},0).wait(1).to({rotation:3698.1841},0).wait(1).to({rotation:3735.0988,y:-0.05},0).wait(1).to({rotation:3771.7879,x:0,y:0},0).wait(1).to({rotation:3808.2477,y:-0.1},0).wait(1).to({rotation:3844.4749,x:0.05,y:-0.05},0).wait(1).to({rotation:3880.4663,y:-0.1},0).wait(1).to({rotation:3916.2192,y:0},0).to({_off:true},1).wait(1));

	// smoke_bg
	this.instance_26 = new lib.smokemany();
	this.instance_26.setTransform(3.45,75.95,0.1,0.1,0,0,0,333.6,229.5);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(30).to({_off:false},0).to({regX:333.5,scaleX:1.8334,scaleY:1.8334,x:-290.6,y:75.7,alpha:0.5},44).to({regX:332.9,regY:229,scaleX:3.6062,scaleY:3.6062,x:-591.3,y:75.6,alpha:0},45).to({_off:true},1).wait(60));

	// smoke14___РєРѕРїРёСЏ
	this.instance_27 = new lib.smoke_1();
	this.instance_27.setTransform(22.5,103.65,0.1,0.1,180,0,0,122.5,100.5);
	this.instance_27.alpha = 0.5;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(74).to({_off:false},0).to({regX:125,regY:100,scaleX:1,scaleY:1,rotation:270,x:-114.6,y:77.6,alpha:0},45).to({_off:true},1).wait(60));

	// smoke13___РєРѕРїРёСЏ
	this.instance_28 = new lib.smoke_1();
	this.instance_28.setTransform(-42,70,0.1,0.1,180,0,0,122.5,100.5);
	this.instance_28.alpha = 0.5;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(93).to({_off:false},0).to({regX:125,regY:100,scaleX:1,scaleY:1,x:-157,y:19.05,alpha:0},40).wait(45).to({_off:true},1).wait(1));

	// smoke12___РєРѕРїРёСЏ
	this.instance_29 = new lib.smoke_1();
	this.instance_29.setTransform(-40,91,0.1,0.1,0,0,0,122.5,100.5);
	this.instance_29.alpha = 0.5;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(133).to({_off:false},0).to({regX:125,regY:100,scaleX:1,scaleY:1,x:-136.95,y:3.05,alpha:0},45).to({_off:true},1).wait(1));

	// smoke3___РєРѕРїРёСЏ
	this.instance_30 = new lib.smoke_1();
	this.instance_30.setTransform(45.45,93.7,0.1,0.1,180,0,0,122.5,100.5);
	this.instance_30.alpha = 0.5;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(74).to({_off:false},0).to({regX:125,regY:100,scaleX:1,scaleY:1,rotation:90,x:-36.45,y:85.2,alpha:0},45).wait(59).to({_off:true},1).wait(1));

	// smoke2___РєРѕРїРёСЏ
	this.instance_31 = new lib.smoke_1();
	this.instance_31.setTransform(-42,70,0.1,0.1,180,0,0,122.5,100.5);
	this.instance_31.alpha = 0.5;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(67).to({_off:false},0).to({regX:125,regY:100,scaleX:1,scaleY:1,x:-157,y:19.05,alpha:0},45).wait(66).to({_off:true},1).wait(1));

	// smoke1___РєРѕРїРёСЏ
	this.instance_32 = new lib.smoke_1();
	this.instance_32.setTransform(0,91,0.1,0.1,0,0,0,122.5,100.5);
	this.instance_32.alpha = 0.5;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(59).to({_off:false},0).to({regX:125,regY:100,scaleX:1,scaleY:1,x:-112.95,y:19.05,alpha:0},45).wait(74).to({_off:true},1).wait(1));

	// smoke14
	this.instance_33 = new lib.smoke_1();
	this.instance_33.setTransform(22.5,103.65,0.1,0.1,180,0,0,122.5,100.5);
	this.instance_33.alpha = 0.5;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(30).to({_off:false},0).to({regX:125,regY:100,scaleX:1,scaleY:1,rotation:270,x:-114.6,y:77.6,alpha:0},45).to({_off:true},1).wait(104));

	// smoke13
	this.instance_34 = new lib.smoke_1();
	this.instance_34.setTransform(-42,70,0.1,0.1,180,0,0,122.5,100.5);
	this.instance_34.alpha = 0.5;
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(49).to({_off:false},0).to({regX:125,regY:100,scaleX:1,scaleY:1,x:-157,y:19.05,alpha:0},40).to({_off:true},1).wait(90));

	// smoke12
	this.instance_35 = new lib.smoke_1();
	this.instance_35.setTransform(-40,91,0.1,0.1,0,0,0,122.5,100.5);
	this.instance_35.alpha = 0.5;
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(89).to({_off:false},0).to({regX:125,regY:100,scaleX:1,scaleY:1,x:-136.95,y:3.05,alpha:0},45).to({_off:true},1).wait(45));

	// smoke3
	this.instance_36 = new lib.smoke_1();
	this.instance_36.setTransform(45.45,93.7,0.1,0.1,180,0,0,122.5,100.5);
	this.instance_36.alpha = 0.5;
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(30).to({_off:false},0).to({regX:125,regY:100,scaleX:1,scaleY:1,rotation:90,x:-36.45,y:85.2,alpha:0},45).to({_off:true},1).wait(104));

	// smoke2
	this.instance_37 = new lib.smoke_1();
	this.instance_37.setTransform(-42,70,0.1,0.1,180,0,0,122.5,100.5);
	this.instance_37.alpha = 0.5;
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(23).to({_off:false},0).to({regX:125,regY:100,scaleX:1,scaleY:1,x:-157,y:19.05,alpha:0},45).to({_off:true},1).wait(111));

	// smoke1
	this.instance_38 = new lib.smoke_1();
	this.instance_38.setTransform(0,91,0.1,0.1,0,0,0,122.5,100.5);
	this.instance_38.alpha = 0.5;
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(15).to({_off:false},0).to({regX:125,regY:100,scaleX:1,scaleY:1,x:-112.95,y:19.05,alpha:0},45).to({_off:true},1).wait(119));

	// smoke0
	this.instance_39 = new lib.smoke0("synched",1);
	this.instance_39.setTransform(-19.3,54.3,1,1,0,0,0,105.7,154.3);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(45).to({_off:false},0).wait(133).to({startPosition:59},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2959.3,-797.6,3630.7000000000003,2031.6999999999998);


// stage content:
(lib.autochic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wheel
	this.instance = new lib.wheel1_1("synched",0);
	this.instance.setTransform(230,192);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:60},60).to({x:2028.45,y:116.5,startPosition:0},119,cjs.Ease.quadIn).to({_off:true},1).wait(600));

	// car
	this.instance_1 = new lib.carmain("synched",0);
	this.instance_1.setTransform(482.7,269.4,0.6,0.6,0,0,0,0,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(103).to({_off:false},0).to({regY:0,scaleX:0.8423,scaleY:0.8423,x:232.7,y:259.4,alpha:1,startPosition:60},60,cjs.Ease.cubicInOut).to({startPosition:719},556).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1,x:-42.25,y:276.9,alpha:0,startPosition:779},60,cjs.Ease.cubicInOut).wait(1));

	// t3
	this.instance_2 = new lib.t3();
	this.instance_2.setTransform(230,94.5,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(569).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1},60,cjs.Ease.backOut).wait(90).to({regX:0.5,regY:0.5,scaleX:0.1,scaleY:0.1,alpha:0},60,cjs.Ease.backIn).wait(1));

	// t2
	this.instance_3 = new lib.t2();
	this.instance_3.setTransform(230,94.5,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(359).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1},60,cjs.Ease.backOut).wait(90).to({regX:0.5,regY:0.5,scaleX:0.1,scaleY:0.1},60,cjs.Ease.backIn).to({_off:true},1).wait(210));

	// t1
	this.instance_4 = new lib.t1();
	this.instance_4.setTransform(230,94.5,0.1,0.1,0,0,0,-0.5,-0.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(149).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1},60,cjs.Ease.backOut).wait(90).to({regX:-0.5,regY:-0.5,scaleX:0.1,scaleY:0.1},60,cjs.Ease.backIn).to({_off:true},1).wait(420));

	// bg_yellow
	this.instance_5 = new lib.bgYellow();
	this.instance_5.setTransform(990.15,192,1,1,0,0,0,524,192);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(103).to({_off:false},0).to({x:230.15},60,cjs.Ease.quartOut).wait(586).to({x:-529.85},30,cjs.Ease.quartIn).wait(1));

	// wheel2
	this.instance_6 = new lib.wheel1_1("synched",0);
	this.instance_6.setTransform(230,192);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(769).to({_off:false},0).wait(11));

	// bg_grey
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#202020","#323232"],[0,1],0,194.2,0,-194.2).s().p("Egj7AeAMAAAg7/MBH3AAAMAAAA7/g");
	this.shape.setTransform(230,192);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(780));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-957.9,-487.3,3595.3,1794.3);
// library properties:
lib.properties = {
	id: '9993D639B7466840BB75C08A63601DC5',
	width: 460,
	height: 384,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"autochic_atlas_.png", id:"autochic_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['9993D639B7466840BB75C08A63601DC5'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;