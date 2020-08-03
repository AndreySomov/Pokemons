const robotoRegular = (
  fontSize = 30, lineHeight = 30, letterSpacing = 2, fonrWeigth = 400,
) => `
    font-family: Roboto;
    font-size: ${fontSize}px;
    font-weight: ${fonrWeigth};
    line-height: ${lineHeight}px;
    letter-spacing: ${letterSpacing}px;
  `;

const gtSectraDisplay = (
  fontSize = 30, lineHeight = 30, letterSpacing = 2, fontWeigth = 400,
) => `
    font-family: GTSectraDisplay;
    font-size: ${fontSize}px;
    font-weight: ${fontWeigth};
    line-height: ${lineHeight}px;
    letter-spacing: ${letterSpacing}px;
  `;

export default {
  robotoRegular,
  gtSectraDisplay,
};
