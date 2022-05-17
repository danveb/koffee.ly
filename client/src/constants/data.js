import coffee1 from "../assets/coffee1.png"; 
import coffee2 from "../assets/coffee2.png"; 
import coffee3 from "../assets/coffee3.png"; 
import coffee4 from "../assets/coffee4.png"; 
import coffee5 from "../assets/coffee5.png"; 
import coffee7 from "../assets/coffee7.png"; 
import coffeeTool1 from "../assets/coffeeTool1.png"; 
import drip1 from "../assets/drip1.png"; 
import macchiato1 from "../assets/macchiato1.png"; 
import chemexCombo from "../assets/chemex-combo.png"; 

export const sliderItems = [
    {
        id: 1, 
        img: coffee1, 
        title: "S|22", 
        desc: "Spring 2022 Collection @Koffee",
        bg: "f5fafd",
    }, 
    {
        id: 2, 
        img: coffee2, 
        title: "S|22", 
        desc: "Summer 2022 Collection @Koffee",
        bg: "fcf1ed",
    },
    {
        id: 3, 
        img: coffee3, 
        title: "F|22", 
        desc: "Fall 2022 Collection @Koffee",
        bg: "fbf0f4",
    },
    {
        id: 4, 
        img: coffee4, 
        title: "W|23", 
        desc: "Winter 2023 Collection @Koffee",
        bg: "f7agg3",
    },
];

export const categories = [
    {
        id: 1, 
        img: coffee5,
        title: "Drip",
        category: "drip",
    }, 
    {
        id: 2, 
        img: coffee7,
        title: "Macchiato", 
        category: "macchiato",
    }, 
    {
        id: 3, 
        img: coffeeTool1,
        title: "Brew Tools", 
        category: "tools", 
    }, 
]; 

export const popularProducts = [
    {
        id: 1, 
        img: drip1,
    }, 
    {
        id: 3, 
        img: macchiato1,
    }, 
    {
        id: 4, 
        img: chemexCombo,
    }, 
]; 

// JSON for db
// https://us.jura.com/en/about-coffee/coffee-recipes?attributes=AA852CD1A655406A8E63DCF7707DC113
export const products = [
    {
        "title": "Drip Créme",
        "description": "Ice-cold drip coffee with créme, using natural sweeteners for an extra oomph.", 
        "img": "https://sg.jura.com/-/media/global/images/coffee-recipes/images-redesign-2020/cafe_creme_2000x1400px.jpg?h=1400&la=en&w=2000&hash=674179D21D460841EC7D837F8A2D851767CA8DF4", 
        "categories": ["drip"], // drip, macchiato or brew tools 
        "size": "XS", // XS, S, M, L
        "color": "drip", // drip, macchiato or brew tools 
        "price": 5.0
    }, 
    {
        "title": "Drip Barista",
        "description": "Lungo drip coffee with a spoonful of cream that elevates the drip experience.", 
        "img": "https://us.jura.com/-/media/global/images/coffee-recipes/images-redesign-2020/caffe_barista_2000x1400px.jpg?h=1400&la=en&w=2000&hash=45D2368FC562619DCA3691C27589FA0323FCBD0D", 
        "categories": ["drip"], 
        "size": "S", 
        "color": "drip", 
        "price": 6.5
    }, 
    {
        "title": "Cortado",
        "description": "Cortado only for those who know.", 
        "img": "https://us.jura.com/-/media/global/images/coffee-recipes/images-redesign-2020/cortado_2000x1400px.jpg?h=1400&la=en&w=2000&hash=15F7D264C04067172746001763D93299185F0F48", 
        "categories": ["macchiato"], 
        "size": "S", 
        "color": "macchiato", 
        "price": 7.0
    }, 
    {
        "title": "Espresso Macchiato",
        "description": "The only espresso macchiato you will need to fuel your day.", 
        "img": "https://us.jura.com/-/media/global/images/coffee-recipes/images-redesign-2020/espresso_2000x1400px.jpg?h=1400&la=en&w=2000&hash=3D2AAD37B939AC3F270BEEFB303AC1CCBCB7EDB4", 
        "categories": ["macchiato"], 
        "size": "S", 
        "color": "macchiato", 
        "price": 6.5
    }, 
    {
        "title": "Macchiato Italiano",
        "description": "A simple taste of Italy with Macchiato Italiano.", 
        "img": "https://us.jura.com/-/media/global/images/coffee-recipes/images-redesign-2020/espresso_macchiato_2000x1400px.jpg?h=1400&la=en&w=2000&hash=7F934326D0E1AB9368A1FFC53B4379535758A250", 
        "categories": [""], 
        "size": "S", 
        "color": "macchiato", 
        "price": 7.0
    }, 
    {
        "title": "Jura E8",
        "description": "The perfect combination of pleasure, versatility, and luxury.", 
        "img": "https://us.jura.com/-/media/global/images/home-products/e-line-2020/e8-eb-piano-white-15353/image-gallery/e8_eb_pw_15353_image2.jpg?la=en&mh=450&mw=675&hash=78EFD266875126D66F09C141B201D442A36038E7", 
        "categories": ["tools"],
        "size": "L",
        "color": "classic", 
        "price": 2699.99
    }, 
    {
        "title": "Jura GIGA 6",
        "description": "Perfection, precision and craftmanship in every drink.", 
        "img": "https://us.jura.com/-/media/global/images/home-products/giga-line/giga-6/GIGA-6-EU/image-gallery/giga6_alu_image_2.jpg?la=en&mh=450&mw=675&hash=293CFD0963A24B18F4032E54D26F6B020E9B2391", 
        "categories": ["tools"],
        "size": "L",
        "color": "classic", 
        "price": 6999.99
    }, 
    {
        "title": "Jura A1",
        "description": "Compact elegance for Koffee enthusiasts.", 
        "img": "https://us.jura.com/-/media/global/images/home-products/impressa-a-line/A1/big_a1_pianoblack.jpg?la=en&mh=450&mw=675&hash=C0D78D8B643D2845204905F29F6DFA7545B8579D", 
        "categories": ["tools"],
        "size": "S",
        "color": "classic", 
        "price": 899.99
    },
    {
        "title": "Chemex® 8-Cup Pour-Over Glass Handle Coffee Maker",
        "description": "Brew the perfect pour-over coffee.", 
        "img": "https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202214/0384/img38o.jpg", 
        "categories": ["tools"],
        "size": "XS",
        "color": "classic", 
        "price": 79.99
    }
]; 