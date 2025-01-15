var doc = app.activeDocument;
doc.selection = null;

app.doScript ("collect in new layer", "Default Actions");
var contLay = doc.activeLayer;
contLay.name = "tempCollect";
var contLayerZ = contLay.zOrderPosition;
var layCount = contLay.layers.length;
var tit = contLay.layers[0].name + " ";

for(i = layCount-1; i>=0; i--){
	if (contLay.layers[i].locked){
		contLay.layers[i].locked = false;
	}
	contLay.layers[i].name = tit + i;
	contLay.layers[i].move(contLay, ElementPlacement.PLACEAFTER );		
}
if (contLay.layers.length == 0){
	doc.layers.getByName("tempCollect").remove();
}