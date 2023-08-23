gdjs.Scene4Code = {};
gdjs.Scene4Code.GDlogoObjects1= [];
gdjs.Scene4Code.GDlogoObjects2= [];
gdjs.Scene4Code.GDstep2Objects1= [];
gdjs.Scene4Code.GDstep2Objects2= [];
gdjs.Scene4Code.GDexplObjects1= [];
gdjs.Scene4Code.GDexplObjects2= [];
gdjs.Scene4Code.GDnextObjects1= [];
gdjs.Scene4Code.GDnextObjects2= [];


gdjs.Scene4Code.mapOfGDgdjs_9546Scene4Code_9546GDnextObjects1Objects = Hashtable.newFrom({"next": gdjs.Scene4Code.GDnextObjects1});
gdjs.Scene4Code.asyncCallback8423364 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene5", false);
}}
gdjs.Scene4Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Scene4Code.asyncCallback8423364(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Scene4Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.Scene4Code.GDnextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene4Code.mapOfGDgdjs_9546Scene4Code_9546GDnextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Scene4Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


};

gdjs.Scene4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene4Code.GDlogoObjects1.length = 0;
gdjs.Scene4Code.GDlogoObjects2.length = 0;
gdjs.Scene4Code.GDstep2Objects1.length = 0;
gdjs.Scene4Code.GDstep2Objects2.length = 0;
gdjs.Scene4Code.GDexplObjects1.length = 0;
gdjs.Scene4Code.GDexplObjects2.length = 0;
gdjs.Scene4Code.GDnextObjects1.length = 0;
gdjs.Scene4Code.GDnextObjects2.length = 0;

gdjs.Scene4Code.eventsList1(runtimeScene);

return;

}

gdjs['Scene4Code'] = gdjs.Scene4Code;
