module.exports = {
    components: {
      categories: [
        {
          name: "GeneralX",
          include: [
            "src/IconX/IconX.js"
          ]
        },
        {
          name: "General",
          include: [
            "src/Typography/Typography.js",
            "src/Icon/Icon.js",
            "src/Ripple/Ripple.js",
            "src/Elevation/Elevation.js"
          ]
        },
        {
          name: "Buttons",
          include: [
            "src/Button/Button.js",
            "src/IconButton/IconButton.js",
            "src/Fab/Fab.js"
          ],
        },
        {
          name: "Tabs",
          include: [
            "src/Tabs/Tab/Tab.js",
            "src/Tabs/TabBar/TabBar.js"
          ]
        },
        {
          name: "Cards",
          include: [
            "src/Cards/Card/Card.js",
            "src/Cards/CardAction/CardAction.js",
            "src/Cards/CardActionButtons/CardActionButtons.js",
            "src/Cards/CardActionIcons/CardActionIcons.js",
            "src/Cards/CardMedia/CardMedia.js",
            "src/Cards/CardMediaContent/CardMediaContent.js",
            "src/Cards/CardPrimaryAction/CardPrimaryAction.js",
          ]
        },
        {
          name: "Chips",
          include: [
            "src/Chips/Chip/Chip.js",
            "src/Chips/ChipSet/ChipSet.js"
          ]
        },
        {
          name: "Image Lists",
          include: [
            "src/ImageLists/ImageList/ImageList.js",
            "src/ImageLists/ImageListImage/ImageListImage.js",
            "src/ImageLists/ImageListImageAspectContainer/ImageListImageAspectContainer.js",
            "src/ImageLists/ImageListItem/ImageListItem.js", 
            "src/ImageLists/ImageListLabel/ImageListLabel.js",
            "src/ImageLists/ImageListSupporting/ImageListSupporting.js",
          ]
        },
        {
          name: "Inputs and Controls",
          include: [
            "src/InputsAndControls/Checkbox/Checkbox.js",
            "src/InputsAndControls/Radio/Radio.js",
            "src/InputsAndControls/Select/Select/Select.js",
            "src/InputsAndControls/Select/SelectHelperText/SelectHelperText.js",
            "src/InputsAndControls/Slider/Slider.js",
            "src/InputsAndControls/Switch/Switch.js",
            "src/InputsAndControls/TextField/TextFieldHelperText/TextFieldHelperText.js",
            "src/InputsAndControls/TextField/TextField/TextField.js",
            "src/InputsAndControls/TextField/TextFieldIcon/TextFieldIcon.js",
          ]
        },
        {
          name: "Progress",
          include: [
            "src/Progress/LinearProgress/LinearProgress.js",
            "src/Progress/CircularProgress/CircularProgress.js"
          ]
        },
        {
          name: "Lists",
          include: [
            "src/Lists/List/List.js",
            "src/Lists/ListGroup/ListGroup.js",
            "src/Lists/ListItem/ListItem.js",
            "src/Lists/ListItemGraphic/ListItemGraphic.js",
            "src/Lists/ListItemMeta/ListItemMeta.js",
            "src/Lists/ListItemPrimaryText/ListItemPrimaryText.js",
            "src/Lists/ListItemSecondaryText/ListItemSecondaryText.js",
            "src/Lists/ListItemText/ListItemText.js",
            "src/Lists/SimpleListItem/SimpleListItem.js",
          ]
        },
        {
          name: "Menus",
          include: [
            "src/Menus/MenuItem/MenuItem.js",
            "src/Menus/SimpleMenu/SimpleMenu.js",
            "src/Menus/SimpleMenuSurface/SimpleMenuSurface.js",
          ]
        },
        {
          name: "TopAppBar",
          include: [
            "src/TopAppBar/SimpleTopAppBar/SimpleTopAppBar.js",
            "src/TopAppBar/TopAppBar/TopAppBar.js",
            "src/TopAppBar/TopAppBarActionItem/TopAppBarActionItem.js",
            "src/TopAppBar/TopAppBarNavigationIcon/TopAppBarNavigationIcon.js",
            "src/TopAppBar/TopAppBarRow/TopAppBarRow.js",
            "src/TopAppBar/TopAppBarSection/TopAppBarSection.js",
            "src/TopAppBar/TopAppBarTitle/TopAppBarTitle.js",
          ]
        },
        {
          name: "Toolbar",
          include: [
            "src/Toolbar/Toolbar/Toolbar.js",
            "src/Toolbar/ToolbarIcon/ToolbarIcon.js",
            "src/Toolbar/ToolbarMenuIcon/ToolbarMenuIcon.js",
            "src/Toolbar/ToolbarRow/ToolbarRow.js",
            "src/Toolbar/ToolbarSection/ToolbarSection.js",
            "src/Toolbar/ToolbarTitle/ToolbarTitle.js",
          ]
        },
        {
          name: "Table",
          include: [
            "src/DataTable/DataTable/DataTable.js",
            "src/DataTable/DataTableBody/DataTableBody.js",
            "src/DataTable/DataTableCell/DataTableCell.js",
            "src/DataTable/DataTableContent/DataTableContent.js",
            "src/DataTable/DataTableHead/DataTableHead.js",
            "src/DataTable/DataTableHeadCell/DataTableHeadCell.js",
            "src/DataTable/DataTableRow/DataTableRow.js",
            "src/DataTable/SimpleDataTable/SimpleDataTable.js",
          ]
        },
        {
          name: "Drawer",
          include: [
            "src/Drawer/Drawer/Drawer.js",
            "src/Drawer/DrawerContent/DrawerContent.js",
            "src/Drawer/DrawerHeader/DrawerHeader.js",
            "src/Drawer/DrawerSubtitle/DrawerSubtitle.js",
            "src/Drawer/DrawerTitle/DrawerTitle.js",
          ]
        },
        {
          name: "GridList",
          include: [
            "src/GridList/GridList/GridList.js",
            "src/GridList/GridTile/GridTile.js",
            "src/GridList/GridTileIcon/GridTileIcon.js"
          ]
        },
        {
          name: "LayoutGrid",
          include: [
            "src/LayoutGrid/Grid/Grid.js",
            "src/LayoutGrid/GridCell/GridCell.js",
            "src/LayoutGrid/GridInner/GridInner.js"
          ]
        }
      ]
    },
    name: "RMWC"
  };

  /*
  Currently unsupported components due to implementation of position absolute:
    {
      name: "Dialog",
      include: [
        "src/Dialog/Dialog/Dialog.js",
        "src/Dialog/DialogActions/DialogActions.js",
        "src/Dialog/DialogButton/DialogButton.js",
        "src/Dialog/DialogContent/DialogContent.js",
        "src/Dialog/DialogTitle/DialogTitle.js",
        "src/Dialog/SimpleDialog/SimpleDialog.js",
      ]
    }

    {
          name: "experimental",
          include: [
            "src/Snackbar/Snackbar.js"
          ]
        }

    Unknown bugs with components:

    "src/GridList/GridTilePrimary/GridTilePrimary.js",
    "src/GridList/GridTilePrimaryContent/GridTilePrimaryContent.js",
    "src/GridList/GridTileSecondary/GridTileSecondary.js",
    "src/GridList/GridTileTitle/GridTileTitle.js"
  */
