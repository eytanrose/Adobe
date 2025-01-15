var idoc = app.activeDocument;
var ilayer = idoc.activeLayer;
var LayItems = new Array;
var LayTitles = new Array;
for (a=ilayer.layers.length-1; a>=0; a--)
	{
		ilayer.layers[a].move( ilayer, ElementPlacement.PLACEBEFORE );
	}
	
for (i=ilayer.pageItems.length-1; i>=0; i--)
	{
		if (ilayer.pageItems[i].name){
			var Laytit = ilayer.pageItems[i].name + "_" + i;
		} else {
			var Laytit = ilayer.pageItems[i].typename + "_" + i;
		}
		LayItems.push( ilayer.pageItems[i] );
		LayTitles.push( Laytit );
	}

for (k=LayItems.length-1; k>=0; k--)
	{
		var LayName = LayTitles[k];
		idoc.layers.add().name = LayName;
		LayItems[k].move( idoc.layers.getByName( LayName ), ElementPlacement.PLACEATBEGINNING );
		idoc.layers.getByName( LayName ).move( ilayer, ElementPlacement.PLACEBEFORE );
	}

if (ilayer.pageItems.length==0){
	ilayer.remove();
} else {
	alert("Something is wrong - the layer is not empty!");
}