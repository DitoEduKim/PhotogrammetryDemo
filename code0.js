gdjs.Scene1Code = {};
gdjs.Scene1Code.GDNewTextObjects1= [];
gdjs.Scene1Code.GDNewTextObjects2= [];
gdjs.Scene1Code.GDNewText2Objects1= [];
gdjs.Scene1Code.GDNewText2Objects2= [];
gdjs.Scene1Code.GDlogoObjects1= [];
gdjs.Scene1Code.GDlogoObjects2= [];
gdjs.Scene1Code.GDstartObjects1= [];
gdjs.Scene1Code.GDstartObjects2= [];
gdjs.Scene1Code.GDNewText3Objects1= [];
gdjs.Scene1Code.GDNewText3Objects2= [];


gdjs.Scene1Code.mapOfGDgdjs_9546Scene1Code_9546GDstartObjects1Objects = Hashtable.newFrom({"start": gdjs.Scene1Code.GDstartObjects1});
gdjs.Scene1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.Scene1Code.GDstartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene1Code.mapOfGDgdjs_9546Scene1Code_9546GDstartObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene2", false);
}}

}


};

gdjs.Scene1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene1Code.GDNewTextObjects1.length = 0;
gdjs.Scene1Code.GDNewTextObjects2.length = 0;
gdjs.Scene1Code.GDNewText2Objects1.length = 0;
gdjs.Scene1Code.GDNewText2Objects2.length = 0;
gdjs.Scene1Code.GDlogoObjects1.length = 0;
gdjs.Scene1Code.GDlogoObjects2.length = 0;
gdjs.Scene1Code.GDstartObjects1.length = 0;
gdjs.Scene1Code.GDstartObjects2.length = 0;
gdjs.Scene1Code.GDNewText3Objects1.length = 0;
gdjs.Scene1Code.GDNewText3Objects2.length = 0;

gdjs.Scene1Code.eventsList0(runtimeScene);

return;

}

gdjs['Scene1Code'] = gdjs.Scene1Code;
