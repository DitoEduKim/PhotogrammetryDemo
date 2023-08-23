gdjs.Scene5Code = {};
gdjs.Scene5Code.GDlogoObjects1= [];
gdjs.Scene5Code.GDlogoObjects2= [];
gdjs.Scene5Code.GDstep2Objects1= [];
gdjs.Scene5Code.GDstep2Objects2= [];
gdjs.Scene5Code.GDexplObjects1= [];
gdjs.Scene5Code.GDexplObjects2= [];
gdjs.Scene5Code.GDnextObjects1= [];
gdjs.Scene5Code.GDnextObjects2= [];
gdjs.Scene5Code.GDNewSpriteObjects1= [];
gdjs.Scene5Code.GDNewSpriteObjects2= [];
gdjs.Scene5Code.GDNewSprite2Objects1= [];
gdjs.Scene5Code.GDNewSprite2Objects2= [];
gdjs.Scene5Code.GDNewSprite3Objects1= [];
gdjs.Scene5Code.GDNewSprite3Objects2= [];


gdjs.Scene5Code.mapOfGDgdjs_9546Scene5Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Scene5Code.GDNewSprite2Objects1});
gdjs.Scene5Code.mapOfGDgdjs_9546Scene5Code_9546GDnextObjects2Objects = Hashtable.newFrom({"next": gdjs.Scene5Code.GDnextObjects2});
gdjs.Scene5Code.asyncCallback9501780 = function (runtimeScene, asyncObjectsList) {
gdjs.Scene5Code.GDnextObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Scene5Code.mapOfGDgdjs_9546Scene5Code_9546GDnextObjects2Objects, 1518, 881, "");
}{for(var i = 0, len = gdjs.Scene5Code.GDnextObjects2.length ;i < len;++i) {
    gdjs.Scene5Code.GDnextObjects2[i].setScale(0.4);
}
}}
gdjs.Scene5Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.Scene5Code.asyncCallback9501780(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Scene5Code.mapOfGDgdjs_9546Scene5Code_9546GDnextObjects1Objects = Hashtable.newFrom({"next": gdjs.Scene5Code.GDnextObjects1});
gdjs.Scene5Code.asyncCallback9502932 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene6", false);
}}
gdjs.Scene5Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Scene5Code.asyncCallback9502932(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Scene5Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Scene5Code.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.Scene5Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Scene5Code.GDNewSprite3Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Scene5Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene5Code.mapOfGDgdjs_9546Scene5Code_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Scene5Code.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.Scene5Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Scene5Code.GDNewSprite3Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene5Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Scene5Code.GDNewSprite3Objects1[i].playAnimation();
}
}
{ //Subevents
gdjs.Scene5Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.Scene5Code.GDnextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene5Code.mapOfGDgdjs_9546Scene5Code_9546GDnextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Scene5Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Scene5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene5Code.GDlogoObjects1.length = 0;
gdjs.Scene5Code.GDlogoObjects2.length = 0;
gdjs.Scene5Code.GDstep2Objects1.length = 0;
gdjs.Scene5Code.GDstep2Objects2.length = 0;
gdjs.Scene5Code.GDexplObjects1.length = 0;
gdjs.Scene5Code.GDexplObjects2.length = 0;
gdjs.Scene5Code.GDnextObjects1.length = 0;
gdjs.Scene5Code.GDnextObjects2.length = 0;
gdjs.Scene5Code.GDNewSpriteObjects1.length = 0;
gdjs.Scene5Code.GDNewSpriteObjects2.length = 0;
gdjs.Scene5Code.GDNewSprite2Objects1.length = 0;
gdjs.Scene5Code.GDNewSprite2Objects2.length = 0;
gdjs.Scene5Code.GDNewSprite3Objects1.length = 0;
gdjs.Scene5Code.GDNewSprite3Objects2.length = 0;

gdjs.Scene5Code.eventsList2(runtimeScene);

return;

}

gdjs['Scene5Code'] = gdjs.Scene5Code;
