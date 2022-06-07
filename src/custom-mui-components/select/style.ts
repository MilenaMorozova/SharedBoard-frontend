import COLORS from "../../colors";
import FONTS from "../../fonts";


export const AccessSelectStyle = {
    color: COLORS.TEXT_GRAY,
    ...FONTS.BODY,
    paddingTop: '6px',
    marginLeft: '10px',
};

export const AccessFormControlStyle = {
minWidth: '90px',
};

export const MenuItemStyle = {
color: COLORS.TEXT_DARK_GRAY,
...FONTS.BODY,
};

export const ColumnsMapStyle = {
    display: "flex",
    flexDirection: "column" as "column",
    gap: "5px",
}

export const ContentMapStyle = {
    display: "flex",
    flexDirection: "row" as "row",
    gap: "5px",
}
  