// viewport sizes (chrome dev) 

const size = {
    mobileS: "320px",
    mobileM: "375px",
    mobile: "480px", // 425px mobileL default
    tablet: "768px",
    laptop: "960px", // 1024px default
    laptopL: "1440px",
    desktop: "2560px"
}

export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobile: `(max-width: ${size.mobile})`, // size.mobileL default
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
};