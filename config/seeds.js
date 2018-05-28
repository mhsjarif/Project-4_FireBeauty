require('dotenv').config({path: './../.env'});
require('./database');
const YT_URL = 'https://www.youtube.com/watch?v=';
const IMG_URL = 'https://i.imgur.com/'

const Influencer = require('./../models/influencer');
const Product = require('./../models/product');
const User = require('./../models/user');

const seed = Promise.all([Influencer.remove({}), Product.remove({}), User.remove({})])

seed
.then(() => {
    return Product.create([
        {
            category: "Foundation",
            name: "Hourglass Vanish Stick Foundation",
            price: 46.00,
            img: `${IMG_URL}30RyIrH.png`,
            link: 'https://www.hourglasscosmetics.com/vanish-seamless-finish-foundation-stick.html'
        }, 
        {
            category: "Concealer",
            name: "Make Up For Ever Ultra HD Invisible Cover Concealer",
            price: 28.00,
            img: `${IMG_URL}iBVIKdw.png`,
            link: 'https://www.makeupforever.com/us/en-us/make-up/face/concealer/ultra-hd-concealer'
        },
        {
            category: "Setting Spray",
            name: "Morphe Prep & Set Makeup Setting Spray",
            price: 15.00,
            img: `${IMG_URL}gIk5PSY.png`,
            link: 'https://www.morphebrushes.com/products/continuous-setting-mist'
        },
        {
            category: "Powder",
            name: "Laura Mercier Loose Setting Powder",
            price: 38.00,
            img: `${IMG_URL}KzbVNvU.png`,
            link: 'https://www.lauramercier.com/set-with-powder/translucent-loose-setting-powder-prod12321001.html?shades=AllShades&color=Translucent'
        },
        {
            category: "Contour",
            name: "Chanel Soleil Tan De Chanel Bronzing Makeup Base",
            price: 50.00,
            img: `${IMG_URL}V2QkIGw.png`,
            link: 'https://www.chanel.com/en_US/fragrance-beauty/makeup-bronzer-soleil-tan-de-chanel-88673'
        },
        {
            category: "Highlighter",
            name: "Hourglass Ambient Lighting Palette",
            price: 62.00,
            img: `${IMG_URL}iTw8P6a.png`,
            link: 'https://www.hourglasscosmetics.com/ambient-lighting-palette.html'
        },
        {
            category: "Blush",
            name: "L'Oreal True Match Super Blendable Blush",
            price: 10.95,
            img: `${IMG_URL}NknA3rw.png`,
            link: 'https://www.lorealparisusa.com/products/makeup/face/blush/true-match-blush.aspx?shade=apricot-kiss-n5-6'
        },
        {
            category: "Mascara",
            name: "L'Oreal Voluminous Lash Paradise Mascara",
            price: 9.99,
            img: `${IMG_URL}P6lJMYa.png`,
            link: 'https://www.lorealparisusa.com/products/makeup/eye/mascara/voluminous-lash-paradise-washable-mascara.aspx?shade=200-blackest-black'
        },
        {
            category: "Eyeliner",
            name: "L'Oreal Lacquer Liner",
            price: 9.95,
            img: `${IMG_URL}oETFrlK.png`,
            link: 'https://www.lorealparisusa.com/products/makeup/eye/eyeliner/infallible-lacquer-liner-24h.aspx?shade=blackest-black'
        },
        {
            category: "Lipstick",
            name: "Wet n Wild Megalast Matte Lipstick",
            price: 2.49,
            img: `${IMG_URL}ZU62zev.png`,
            link: 'https://www.wetnwildbeauty.com/megalast-lip-color.html'
        },
        {
            category: "Brow",
            name: "Hourglass Arch Brow Volumizing Gel",
            price: 28.00,
            img: `${IMG_URL}WuCOA54.png`,
            link: 'https://www.sephora.com/product/arch-brow-volumizing-fiber-gel-P427516'
        },
        {
            category: "Eyeshadow",
            name: "Stila Glitter & Glow Liquid Eyeshadow",
            price: 24.00,
            img: `${IMG_URL}DYMI16h.png`,
            link: 'https://www.stilacosmetics.com/products/shimmer-glow-liquid-eye-shadow'
        }
    ])   
})
    .then((products) => {
        return Influencer.create([
            {
                name: 'Tati', 
                youtube_id: 'UC4qk9TtGhBKCkoWz5qGJcGg', 
                video_url: `${YT_URL}HBqcoSnG_n4`, 
                favorites:[
                    // 1. Foundation // 
                    products.find(p => p.name === "Hourglass Vanish Stick Foundation"), 
                    // 2. Concealer //
                    products.find(p => p.name === "Make Up For Ever Ultra HD Invisible Cover Concealer"), 
                    // 3. Setting Spray //
                    products.find(p => p.name === "Morphe Prep & Set Makeup Setting Spray"), 
                    // 4. Powder //
                    products.find(p => p.name === "Laura Mercier Loose Setting Powder"), 
                    // 5. Contour //
                    products.find(p => p.name === "Chanel Soleil Tan De Chanel Bronzing Makeup Base"), 
                    // 6. Highlighter //
                    products.find(p => p.name === "Hourglass Ambient Lighting Palette"), 
                    // 7. Blush //
                    products.find(p => p.name === "L'Oreal True Match Super Blendable Blush"), 
                    // 8. Mascara //
                    products.find(p => p.name === "L'Oreal Voluminous Lash Paradise Mascara"), 
                    // 9. Eyeliner //
                    products.find(p => p.name === "L'Oreal Lacquer Liner"), 
                    // 10. Lipstick //
                    products.find(p => p.name === "Wet n Wild Megalast Matte Lipstick"), 
                    // 11. Brow //
                    products.find(p => p.name === "Hourglass Arch Brow Volumizing Gel"), 
                    // 12. Eyeshadow //
                    products.find(p => p.name === "Stila Glitter & Glow Liquid Eyeshadow") 
                ]
            }
        ])
    })

    .then(influencer => {
        console.log(influencer);
        process.exit();
        require('mongoose').connection.close();

    })
    .catch(err => console.log(err));




