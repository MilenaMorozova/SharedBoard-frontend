import COLORS from "../../../colors";
import FONTS from "../../../fonts";


export const HeaderColumnStyle = {
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 20px",

    width: "300px",

    background: COLORS.BACKGROUND_WHITE,
    borderRadius: "10px",
    ...FONTS.BODY,
    color: COLORS.TEXT_DARK_GRAY,
}

export const HeaderColumnStyleOnHover = {
    background: COLORS.ICON_LIGHT_GRAY
}

export const TaskCounterBadgeStyle = {
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px 15px",
    gap: "10px",

    background: COLORS.BACKGOUND_LIGHT_BLUE,
    borderRadius: "10px",
    ...FONTS.BODY,
    color: COLORS.TEXT_DARK_GRAY,
}

export const ColumnNameWithBadgeStyle = {
    display: "flex",
    flexDirection: "row" as "row",
    alignItems: "center",
    gap: "10px",
}

export const AddTaskIconButtonStyle = {
    width: "24px",
    height: "24px",
}

export const BoardColumnStyle = {
    display: "flex",
    flexDirection: "column" as "column",
    gap: "10px",
    alignItems: "flex-end",
}

export const ColumnActionPanelStyle = {
    display: "flex",
    flexDirection: "row" as "row",
    padding: "8px",
    gap: "10px",

    background: COLORS.TEXT_DARK_GRAY,
    borderRadius: "10px",
}

export const TooltipStyle = {
    padding: 0, 
    borderRadius: "10px",
}