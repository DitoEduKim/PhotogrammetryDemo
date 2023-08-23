gdjs.Scene2Code = {};
gdjs.Scene2Code.GDlogoObjects1= [];
gdjs.Scene2Code.GDlogoObjects2= [];
gdjs.Scene2Code.GDstep1Objects1= [];
gdjs.Scene2Code.GDstep1Objects2= [];
gdjs.Scene2Code.GDexplObjects1= [];
gdjs.Scene2Code.GDexplObjects2= [];
gdjs.Scene2Code.GDnextObjects1= [];
gdjs.Scene2Code.GDnextObjects2= [];


gdjs.Scene2Code.mapOfGDgdjs_9546Scene2Code_9546GDnextObjects1Objects = Hashtable.newFrom({"next": gdjs.Scene2Code.GDnextObjects1});
gdjs.Scene2Code.asyncCallback9417052 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene3", false);
}}
gdjs.Scene2Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Scene2Code.asyncCallback9417052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Scene2Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.Scene2Code.GDnextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene2Code.mapOfGDgdjs_9546Scene2Code_9546GDnextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Scene2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene2Code.GDlogoObjects1.length = 0;
gdjs.Scene2Code.GDlogoObjects2.length = 0;
gdjs.Scene2Code.GDstep1Objects1.length = 0;
gdjs.Scene2Code.GDstep1Objects2.length = 0;
gdjs.Scene2Code.GDexplObjects1.length = 0;
gdjs.Scene2Code.GDexplObjects2.length = 0;
gdjs.Scene2Code.GDnextObjects1.length = 0;
gdjs.Scene2Code.GDnextObjects2.length = 0;

gdjs.Scene2Code.eventsList1(runtimeScene);

return;

}

gdjs['Scene2Code'] = gdjs.Scene2Code;
