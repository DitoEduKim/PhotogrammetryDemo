gdjs.Scene9Code = {};
gdjs.Scene9Code.GDlogoObjects1= [];
gdjs.Scene9Code.GDlogoObjects2= [];
gdjs.Scene9Code.GDexplObjects1= [];
gdjs.Scene9Code.GDexplObjects2= [];
gdjs.Scene9Code.GDnextObjects1= [];
gdjs.Scene9Code.GDnextObjects2= [];
gdjs.Scene9Code.GDNewSprite2Objects1= [];
gdjs.Scene9Code.GDNewSprite2Objects2= [];
gdjs.Scene9Code.GDNewSpriteObjects1= [];
gdjs.Scene9Code.GDNewSpriteObjects2= [];
gdjs.Scene9Code.GDtexObjects1= [];
gdjs.Scene9Code.GDtexObjects2= [];


gdjs.Scene9Code.mapOfGDgdjs_9546Scene9Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Scene9Code.GDNewSprite2Objects1});
gdjs.Scene9Code.mapOfGDgdjs_9546Scene9Code_9546GDnextObjects2Objects = Hashtable.newFrom({"next": gdjs.Scene9Code.GDnextObjects2});
gdjs.Scene9Code.asyncCallback9537460 = function (runtimeScene, asyncObjectsList) {
gdjs.Scene9Code.GDnextObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Scene9Code.mapOfGDgdjs_9546Scene9Code_9546GDnextObjects2Objects, 1518, 881, "");
}{for(var i = 0, len = gdjs.Scene9Code.GDnextObjects2.length ;i < len;++i) {
    gdjs.Scene9Code.GDnextObjects2[i].setScale(0.4);
}
}}
gdjs.Scene9Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Scene9Code.asyncCallback9537460(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Scene9Code.mapOfGDgdjs_9546Scene9Code_9546GDnextObjects1Objects = Hashtable.newFrom({"next": gdjs.Scene9Code.GDnextObjects1});
gdjs.Scene9Code.asyncCallback9538628 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene10", false);
}}
gdjs.Scene9Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Scene9Code.asyncCallback9538628(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Scene9Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("expl"), gdjs.Scene9Code.GDexplObjects1);
gdjs.copyArray(runtimeScene.getObjects("tex"), gdjs.Scene9Code.GDtexObjects1);
{for(var i = 0, len = gdjs.Scene9Code.GDtexObjects1.length ;i < len;++i) {
    gdjs.Scene9Code.GDtexObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene9Code.GDexplObjects1.length ;i < len;++i) {
    gdjs.Scene9Code.GDexplObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Scene9Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene9Code.mapOfGDgdjs_9546Scene9Code_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("expl"), gdjs.Scene9Code.GDexplObjects1);
gdjs.copyArray(runtimeScene.getObjects("tex"), gdjs.Scene9Code.GDtexObjects1);
{for(var i = 0, len = gdjs.Scene9Code.GDtexObjects1.length ;i < len;++i) {
    gdjs.Scene9Code.GDtexObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene9Code.GDexplObjects1.length ;i < len;++i) {
    gdjs.Scene9Code.GDexplObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Scene9Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.Scene9Code.GDnextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene9Code.mapOfGDgdjs_9546Scene9Code_9546GDnextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Scene9Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Scene9Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene9Code.GDlogoObjects1.length = 0;
gdjs.Scene9Code.GDlogoObjects2.length = 0;
gdjs.Scene9Code.GDexplObjects1.length = 0;
gdjs.Scene9Code.GDexplObjects2.length = 0;
gdjs.Scene9Code.GDnextObjects1.length = 0;
gdjs.Scene9Code.GDnextObjects2.length = 0;
gdjs.Scene9Code.GDNewSprite2Objects1.length = 0;
gdjs.Scene9Code.GDNewSprite2Objects2.length = 0;
gdjs.Scene9Code.GDNewSpriteObjects1.length = 0;
gdjs.Scene9Code.GDNewSpriteObjects2.length = 0;
gdjs.Scene9Code.GDtexObjects1.length = 0;
gdjs.Scene9Code.GDtexObjects2.length = 0;

gdjs.Scene9Code.eventsList2(runtimeScene);

return;

}

gdjs['Scene9Code'] = gdjs.Scene9Code;
