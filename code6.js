gdjs.Scene7Code = {};
gdjs.Scene7Code.GDlogoObjects1= [];
gdjs.Scene7Code.GDlogoObjects2= [];
gdjs.Scene7Code.GDstep2Objects1= [];
gdjs.Scene7Code.GDstep2Objects2= [];
gdjs.Scene7Code.GDexplObjects1= [];
gdjs.Scene7Code.GDexplObjects2= [];
gdjs.Scene7Code.GDnextObjects1= [];
gdjs.Scene7Code.GDnextObjects2= [];
gdjs.Scene7Code.GDNewSpriteObjects1= [];
gdjs.Scene7Code.GDNewSpriteObjects2= [];
gdjs.Scene7Code.GDNewSprite2Objects1= [];
gdjs.Scene7Code.GDNewSprite2Objects2= [];
gdjs.Scene7Code.GDNewSprite3Objects1= [];
gdjs.Scene7Code.GDNewSprite3Objects2= [];
gdjs.Scene7Code.GDMeshObjects1= [];
gdjs.Scene7Code.GDMeshObjects2= [];


gdjs.Scene7Code.mapOfGDgdjs_9546Scene7Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Scene7Code.GDNewSprite2Objects1});
gdjs.Scene7Code.mapOfGDgdjs_9546Scene7Code_9546GDnextObjects2Objects = Hashtable.newFrom({"next": gdjs.Scene7Code.GDnextObjects2});
gdjs.Scene7Code.asyncCallback9519052 = function (runtimeScene, asyncObjectsList) {
gdjs.Scene7Code.GDnextObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Scene7Code.mapOfGDgdjs_9546Scene7Code_9546GDnextObjects2Objects, 1518, 881, "");
}{for(var i = 0, len = gdjs.Scene7Code.GDnextObjects2.length ;i < len;++i) {
    gdjs.Scene7Code.GDnextObjects2[i].setScale(0.4);
}
}}
gdjs.Scene7Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.Scene7Code.asyncCallback9519052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Scene7Code.mapOfGDgdjs_9546Scene7Code_9546GDnextObjects1Objects = Hashtable.newFrom({"next": gdjs.Scene7Code.GDnextObjects1});
gdjs.Scene7Code.asyncCallback9520204 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene8", false);
}}
gdjs.Scene7Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Scene7Code.asyncCallback9520204(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Scene7Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mesh"), gdjs.Scene7Code.GDMeshObjects1);
{for(var i = 0, len = gdjs.Scene7Code.GDMeshObjects1.length ;i < len;++i) {
    gdjs.Scene7Code.GDMeshObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Scene7Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene7Code.mapOfGDgdjs_9546Scene7Code_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mesh"), gdjs.Scene7Code.GDMeshObjects1);
{for(var i = 0, len = gdjs.Scene7Code.GDMeshObjects1.length ;i < len;++i) {
    gdjs.Scene7Code.GDMeshObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene7Code.GDMeshObjects1.length ;i < len;++i) {
    gdjs.Scene7Code.GDMeshObjects1[i].playAnimation();
}
}
{ //Subevents
gdjs.Scene7Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.Scene7Code.GDnextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene7Code.mapOfGDgdjs_9546Scene7Code_9546GDnextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Scene7Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Scene7Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene7Code.GDlogoObjects1.length = 0;
gdjs.Scene7Code.GDlogoObjects2.length = 0;
gdjs.Scene7Code.GDstep2Objects1.length = 0;
gdjs.Scene7Code.GDstep2Objects2.length = 0;
gdjs.Scene7Code.GDexplObjects1.length = 0;
gdjs.Scene7Code.GDexplObjects2.length = 0;
gdjs.Scene7Code.GDnextObjects1.length = 0;
gdjs.Scene7Code.GDnextObjects2.length = 0;
gdjs.Scene7Code.GDNewSpriteObjects1.length = 0;
gdjs.Scene7Code.GDNewSpriteObjects2.length = 0;
gdjs.Scene7Code.GDNewSprite2Objects1.length = 0;
gdjs.Scene7Code.GDNewSprite2Objects2.length = 0;
gdjs.Scene7Code.GDNewSprite3Objects1.length = 0;
gdjs.Scene7Code.GDNewSprite3Objects2.length = 0;
gdjs.Scene7Code.GDMeshObjects1.length = 0;
gdjs.Scene7Code.GDMeshObjects2.length = 0;

gdjs.Scene7Code.eventsList2(runtimeScene);

return;

}

gdjs['Scene7Code'] = gdjs.Scene7Code;
