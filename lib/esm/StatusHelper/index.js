var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, SvgIcon, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
var SStack = styled(Stack)(function (_a) {
    var theme = _a.theme, reverse = _a.reverse;
    return ({
        gap: "".concat(theme.spacing(0.5)),
        flexDirection: reverse === 'true' ? 'row-reverse' : 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'nowrap',
        userSelect: 'none',
        WebkitFontSmoothing: 'antialiased',
        shapeRendering: 'geometricPrecision',
    });
});
var SIcon = styled(SvgIcon)(function (_a) {
    var reverse = _a.reverse;
    return ({
        transform: reverse === 'true' ? 'scaleX(-1)' : 'scaleX(1)',
        display: 'flex',
        order: 0,
        width: '17px',
        flex: '0 0 auto',
    });
});
var SText = styled(Typography)(function () { return ({
    display: 'flex',
    order: 4,
    whiteSpace: 'nowrap',
    userSelect: 'none',
    fontSize: '15px',
    lineHeight: '0px',
}); });
var SNotifications = styled(Typography)(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.palette.text.primary,
        borderRadius: "".concat(theme.shape.borderRadius * 2, "px"),
        backgroundColor: theme.palette.divider,
        border: "0.5px solid ".concat(theme.palette.divider),
        display: 'flex',
        order: 3,
        padding: '0px 6px',
        lineHeight: 'inherit',
        fontSize: '12px',
    });
});
var SImg = styled('img')(function (_a) {
    var mask = _a.mask;
    return ({
        borderRadius: mask === 'true' ? '50%' : '0px',
        display: 'flex',
        order: 2,
        width: '18px',
        height: '18px',
    });
});
var SChildren = styled('div')(function (_a) {
    var theme = _a.theme, index = _a.index;
    return ({
        order: index,
        gap: "".concat(theme.spacing(0.5)),
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'nowrap',
    });
});
/**
 * @param icon - (JSX.Element) Icon to display for status element. Expects a Material UI SvgIcon component.
 * @param text - (string | number) Text to display for status element.
 * @param notifications - (string | number) Badge to display relevant notifications.
 * @param image - (string) Image to display for status element. Expects a valid image path.
 * @param mask - (boolean) If needs to be applied a circular mask to the image.
 * @param reverse - (boolean) If needs to be applied a reverse of the default order of the elements.
 * @param reverseIcon - (boolean) If needs to be applied a reverse of the given icon.
 * @param className - (HTMLAttribute) Class name to be applied to the root element.
 * @param style - (CSSProperties) Style to be applied to the root element.
 *
 * @returns (JSX.Element) Status helper element
 */
export default function (_a) {
    var icon = _a.icon, text = _a.text, notifications = _a.notifications, image = _a.image, _b = _a.mask, mask = _b === void 0 ? false : _b, _c = _a.reverse, reverse = _c === void 0 ? false : _c, _d = _a.reverseIcon, reverseIcon = _d === void 0 ? false : _d, children = _a.children, _e = _a.childrenIndex, childrenIndex = _e === void 0 ? 1 : _e, className = _a.className, style = _a.style;
    return _jsxs(SStack, __assign({}, { id: 'statusHelper', style: style, className: className, reverse: reverse.toString() }, { children: [icon && _jsx(SIcon, __assign({}, { id: 'sh.icon', reverse: reverseIcon.toString() }, { children: icon })), children && _jsx(_Fragment, { children: childrenIndex ? _jsx(SChildren, __assign({}, { index: childrenIndex }, { children: children })) : children }), image && _jsx(SImg, __assign({}, { id: 'sh.image', alt: '', mask: mask.toString(), src: image })), !!notifications && _jsx(SNotifications, __assign({}, { id: 'sh.notifications' }, { children: String(notifications) })), text && _jsx(SText, __assign({}, { id: 'sh.text', variant: 'caption' }, { children: text }))] }));
}
