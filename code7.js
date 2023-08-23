gdjs.Scene8Code = {};
gdjs.Scene8Code.GDlogoObjects1= [];
gdjs.Scene8Code.GDlogoObjects2= [];
gdjs.Scene8Code.GDstep4Objects1= [];
gdjs.Scene8Code.GDstep4Objects2= [];
gdjs.Scene8Code.GDexplObjects1= [];
gdjs.Scene8Code.GDexplObjects2= [];
gdjs.Scene8Code.GDnextObjects1= [];
gdjs.Scene8Code.GDnextObjects2= [];


gdjs.Scene8Code.mapOfGDgdjs_9546Scene8Code_9546GDnextObjects1Objects = Hashtable.newFrom({"next": gdjs.Scene8Code.GDnextObjects1});
gdjs.Scene8Code.asyncCallback8694756 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene9", false);
}}
gdjs.Scene8Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Scene8Code.asyncCallback8694756(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Scene8Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.Scene8Code.GDnextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene8Code.mapOfGDgdjs_9546Scene8Code_9546GDnextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Scene8Code.eventsList0(runtimeScene);} //End of subevents
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

gdjs.Scene8Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene8Code.GDlogoObjects1.length = 0;
gdjs.Scene8Code.GDlogoObjects2.length = 0;
gdjs.Scene8Code.GDstep4Objects1.length = 0;
gdjs.Scene8Code.GDstep4Objects2.length = 0;
gdjs.Scene8Code.GDexplObjects1.length = 0;
gdjs.Scene8Code.GDexplObjects2.length = 0;
gdjs.Scene8Code.GDnextObjects1.length = 0;
gdjs.Scene8Code.GDnextObjects2.length = 0;

gdjs.Scene8Code.eventsList1(runtimeScene);

return;

}

gdjs['Scene8Code'] = gdjs.Scene8Code;
