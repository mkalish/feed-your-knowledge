
require("./modules/BarcodeScannerPage").create();


tabris.create("Drawer").append(tabris.create("PageSelector"));
tabris.ui.children("Page")[0].open();
