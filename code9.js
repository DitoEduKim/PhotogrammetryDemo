gdjs.Scene10Code = {};
gdjs.Scene10Code.GDNewTextObjects1= [];
gdjs.Scene10Code.GDNewTextObjects2= [];
gdjs.Scene10Code.GDlogoObjects1= [];
gdjs.Scene10Code.GDlogoObjects2= [];
gdjs.Scene10Code.GDstartObjects1= [];
gdjs.Scene10Code.GDstartObjects2= [];
gdjs.Scene10Code.GDNewSpriteObjects1= [];
gdjs.Scene10Code.GDNewSpriteObjects2= [];


gdjs.Scene10Code.mapOfGDgdjs_9546Scene10Code_9546GDstartObjects1Objects = Hashtable.newFrom({"start": gdjs.Scene10Code.GDstartObjects1});
gdjs.Scene10Code.asyncCallback9545804 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene1", false);
}}
gdjs.Scene10Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Scene10Code.asyncCallback9545804(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Scene10Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.Scene10Code.GDstartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene10Code.mapOfGDgdjs_9546Scene10Code_9546GDstartObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Scene10Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Scene10Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene10Code.GDNewTextObjects1.length = 0;
gdjs.Scene10Code.GDNewTextObjects2.length = 0;
gdjs.Scene10Code.GDlogoObjects1.length = 0;
gdjs.Scene10Code.GDlogoObjects2.length = 0;
gdjs.Scene10Code.GDstartObjects1.length = 0;
gdjs.Scene10Code.GDstartObjects2.length = 0;
gdjs.Scene10Code.GDNewSpriteObjects1.length = 0;
gdjs.Scene10Code.GDNewSpriteObjects2.length = 0;

gdjs.Scene10Code.eventsList1(runtimeScene);

return;

}

gdjs['Scene10Code'] = gdjs.Scene10Code;
