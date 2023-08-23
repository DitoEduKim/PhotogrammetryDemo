gdjs.Scene6Code = {};
gdjs.Scene6Code.GDlogoObjects1= [];
gdjs.Scene6Code.GDlogoObjects2= [];
gdjs.Scene6Code.GDstep3Objects1= [];
gdjs.Scene6Code.GDstep3Objects2= [];
gdjs.Scene6Code.GDexplObjects1= [];
gdjs.Scene6Code.GDexplObjects2= [];
gdjs.Scene6Code.GDnextObjects1= [];
gdjs.Scene6Code.GDnextObjects2= [];


gdjs.Scene6Code.mapOfGDgdjs_9546Scene6Code_9546GDnextObjects1Objects = Hashtable.newFrom({"next": gdjs.Scene6Code.GDnextObjects1});
gdjs.Scene6Code.asyncCallback9518372 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene7", false);
}}
gdjs.Scene6Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Scene6Code.asyncCallback9518372(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Scene6Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.Scene6Code.GDnextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene6Code.mapOfGDgdjs_9546Scene6Code_9546GDnextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Scene6Code.eventsList0(runtimeScene);} //End of subevents
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

gdjs.Scene6Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene6Code.GDlogoObjects1.length = 0;
gdjs.Scene6Code.GDlogoObjects2.length = 0;
gdjs.Scene6Code.GDstep3Objects1.length = 0;
gdjs.Scene6Code.GDstep3Objects2.length = 0;
gdjs.Scene6Code.GDexplObjects1.length = 0;
gdjs.Scene6Code.GDexplObjects2.length = 0;
gdjs.Scene6Code.GDnextObjects1.length = 0;
gdjs.Scene6Code.GDnextObjects2.length = 0;

gdjs.Scene6Code.eventsList1(runtimeScene);

return;

}

gdjs['Scene6Code'] = gdjs.Scene6Code;
