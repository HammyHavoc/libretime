function fnLibraryTableRowCallback( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {

    $(nRow).attr("id", aData["tr_id"]);
    
	$(nRow).find('td')
		.jjmenu("rightClick",
			[{get:"/Library/context-menu/format/json/id/#id#/type/#type#"}],
			{id: aData["id"], type: aData["ftype"]},
			{xposition: "mouse", yposition: "mouse"});
}

function fnLibraryTableDrawCallback() {
	
	$('#library_display tr[id ^= "au"]').draggable({
		helper: 'clone',
		cursor: 'pointer'
	});
}

/*
 * @param oTable the datatables instance for the library.
 */
function setupLibraryToolbar(oLibTable) {
	var aButtons,
		oLibTT = TableTools.fnGetInstance('library_display'),
		fnResetCol;
	
	fnResetCol = function () {
		ColReorder.fnReset( oLibTable );
		return false;
	};
	
	//[0] = button text
	//[1] = id 
	//[2] = enabled
	//[3] = click event
	aButtons = [["Reset Order", "library_order_reset", true, fnResetCol], 
	                ["Delete", "library_group_delete", true], 
	                ["Add", "library_group_add", true]];
	
	addToolBarButtonsLibrary(aButtons);
}
