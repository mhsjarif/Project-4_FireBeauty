require('dotenv').config({path: './../.env'});
console.log(process.env)
require('./database');
const YT_URL = 'https://www.youtube.com/watch?v=';
const IMG_URL = 'https://i.imgur.com/';

const Influencer = require('./../models/influencer');
const Product = require('./../models/product');
const User = require('./../models/user');

const seed = Promise.all([Influencer.remove({}), Product.remove({}), User.remove({})])

seed
.then(() => {
    return Product.create([
        {
            category: "Foundation",
            name: "Dior Diorskin Forever Foundation",
            price: 52.00,
            img: `${IMG_URL}lzrijOA.png`,
            link: 'https://www.dior.com/beauty/en_us/fragrance-beauty/makeup/face/foundation/pr-foundation-y0770800-perfect-makeup-everlasting-wear-pore-refining-effect.html'
        },
        {
            category: "Foundation",
            name: "Hourglass Vanish Stick Foundation",
            price: 46.00,
            img: `${IMG_URL}30RyIrH.png`,
            link: 'https://www.hourglasscosmetics.com/vanish-seamless-finish-foundation-stick'
        },
        {
            category: "Foundation",
            name: "Huda Beauty Faux Filter Foundation",
            price: 40.00,
            img: `${IMG_URL}Ts8ApNv.png`,
            link: 'http://www.shophudabeauty.com/product/faux-filter-foundation/?v=7516fd43adaa'
        },
        {
            category: "Foundation",
            name: "La Mer The Soft Fluid Long Wear Foundation",
            price: 110.00,
            img: `${IMG_URL}EeSK2wI.png`,
            link: 'https://www.cremedelamer.com/product/5817/40984/skincolor/the-soft-fluid-long-wear-foundation-broad-spectrum-spf-20/face-foundation-makeup#/shade/22_Neutral'
        },
        {
            category: "Foundation",
            name: "Nars Radient Long Wear Foundation",
            price: 49.00,
            img: `${IMG_URL}PRnHIJw.png`,
            link: 'https://www.narscosmetics.com/USA/fiji-natural-radiant-longwear-foundation/0607845066071.html'
        },
        {
            category: "Foundation",
            name: "Giorgio Armani Luminous Silk Foundation",
            price: 64.00,
            img: `${IMG_URL}BXByKZJ.png`,
            link: 'https://www.giorgioarmanibeauty-usa.com/makeup/foundation/liquid-foundation/luminous-silk-foundation/A041.html'
        },
        {
            category: "Concealer",
            name: "Becca Aqua Luminous Perfecting Concealer",
            price: 32.00,
            img: `${IMG_URL}7dHPZQs.png`,
            link: 'https://www.beccacosmetics.com/aqua-luminous-perfecting-concealer.html'
        },
        {
            category: "Concealer",
            name: "Eve Pearl Dual Salmon Concealer",
            price: 39.00,
            img: `${IMG_URL}PUDOmjD.png`,
            link: 'https://www.evepearl.com/products/dual-salmon-concealer'
        },
        {
            category: "Concealer",
            name: "Make Up For Ever Ultra HD Invisible Cover Concealer",
            price: 28.00,
            img: `${IMG_URL}iBVIKdw.png`,
            link: 'https://www.makeupforever.com/us/en-us/make-up/face/concealer/ultra-hd-concealer'
        },
        {
            category: "Concealer",
            name: "Makeup Revolution Conceal & Define Concealer",
            price: 7.00,
            img: `${IMG_URL}SrXEkLf.png`,
            link: 'https://www.revolutionbeauty.com/en/us/Revolution-Conceal-and-Define-Concealer---C1/m-5840.aspx'
        },
        {
            category: "Concealer",
            name: "NARS Soft Matte Complete Concealer",
            price: 30.00,
            img: `${IMG_URL}j4hCLlj.png`,
            link: 'https://www.narscosmetics.com/USA/custard-soft-matte-complete-concealer/0607845012801.html'
        },
        {
            category: "Concealer",
            name: "Tarte Shape Tape Contour Concealer",
            price: 27.00,
            img: `${IMG_URL}Mqcl09d.png`,
            link: 'https://tartecosmetics.com/en_US/makeup/face/concealer/shape-tape-contour-concealer/836.html'
        },
        {
            category: "Setting Spray",
            name: "Morphe Prep & Set Makeup Setting Spray",
            price: 15.00,
            img: `${IMG_URL}gIk5PSY.png`,
            link: 'https://www.morphebrushes.com/products/continuous-setting-mist'
        },
        {
            category: "Setting Spray",
            name: "Gerard Cosmetics Slay All Day Setting Spray",
            price: 21.95,
            img: `${IMG_URL}TVio5Lm.png`,
            link: 'http://gerardcosmetics.com/rose-slay-all-day-setting-spray/'
        },
        {
            category: "Setting Spray",
            name: "MAC Prep + Prime Fix+",
            price: 26.00,
            img: `${IMG_URL}M21Xt3D.jpg`,
            link: 'https://www.maccosmetics.com/product/13825/32212/products/skincare/primers/prep-prime-fix'
        },
        {
            category: "Setting Spray",
            name: "Skindanavia The Makeup Finishing Spray",
            price: 29.00,
            img: `${IMG_URL}3QtS6r9.png`,
            link: 'http://skindinavia.com/products/the-makeup-finishing-spray.html'
        },
        {
            category: "Setting Spray",
            name: "Cover FX Illuminating Setting Spray",
            price: 31.00,
            img: `${IMG_URL}JSt2SOq.png`,
            link: 'https://www.coverfx.com/products/illuminating-setting-spray'
        },
        {
            category: "Powder",
            name: "Laura Mercier Loose Setting Powder",
            price: 38.00,
            img: `${IMG_URL}KzbVNvU.png`,
            link: 'https://www.lauramercier.com/set-with-powder/translucent-loose-setting-powder-prod12321001.html?shades=AllShades&color=Translucent'
        },
        {
            category: "Powder",
            name: "Charlotte Tilbury Air Brush Flawless Finish Skin Perfecting Micro-Powder",
            price: 45.00,
            img: `${IMG_URL}WPyE1S9.png`,
            link: 'https://shop.nordstrom.com/s/charlotte-tilbury-air-brush-flawless-finish-skin-perfecting-micro-powder/3849022'
        },
        {
            category: "Powder",
            name: "Hourglass Veil Translucent Setting Powder",
            price: 46.00,
            img: `${IMG_URL}GC63ToH.png`,
            link: 'http://www.hourglasscosmetics.com/veil-translucent-setting-powder.html'
        },
        {
            category: "Powder",
            name: "La Mer The Powder",
            price: 95.00,
            img: `${IMG_URL}5qhud4N.png`,
            link: 'https://www.cremedelamer.com/product/5817/41000/skincolor/the-powder/best-powder-foundation#/sku/70606'
        },
        {
            category: "Powder",
            name: "Maybelline Fit Me Loose Powder",
            price: 7.99,
            img: `${IMG_URL}nTDQIQw.png`,
            link: 'https://www.maybelline.com/face-makeup/powder/fit-me-loose-finishing-powder'
        },
        {
            category: "Powder",
            name: "Yves Saint Laurent Souffle D'Eclat",
            price: 60.00,
            img: `${IMG_URL}YL8X2lq.jpg`,
            link: 'https://www.yslbeautyus.com/makeup/face-makeup/face-powder/souffle-declat-sheer-and-radiant-face-powder/1054YSL.html'
        },
        {
            category: "Contour",
            name: "Chanel Soleil Tan De Chanel Bronzing Makeup Base",
            price: 50.00,
            img: `${IMG_URL}V2QkIGw.png`,
            link: 'https://www.chanel.com/en_US/fragrance-beauty/makeup-bronzer-soleil-tan-de-chanel-88673'
        },
        {
            category: "Contour",
            name: "La Mer The Bronzing Powder",
            price: 85.00,
            img: `${IMG_URL}I3csHxF.png`,
            link: 'https://www.neimanmarcus.com/La-Mer-Bronzing-Powder/prod198990377/p.prod'
        },
        {
            category: "Contour",
            name: "Marc Jacobs O!Mega Bronzer",
            price: 49.00,
            img: `${IMG_URL}FAki7CS.png`,
            link: 'https://www.marcjacobs.com/omega-bronzer-%E2%80%93-coconut-perfect-tan/C0000185.html'
        },
        {
            category: "Contour",
            name: "Rodial Instaglam Deluxe Bronzing Powder",
            price: 57.00,
            img: `${IMG_URL}4wLGvi8.png`,
            link: 'https://www.rodial.co.uk/us/instaglam-compact-deluxe-bronzing-powder'
        },
        {
            category: "Contour",
            name: "Nars Bronzing Powder",
            price: 40.00,
            img: `${IMG_URL}AJkpDWQ.png`,
            link: 'https://www.narscosmetics.com/USA/casino-bronzing-powder/0607845051022.html'
        },
        {
            category: "Highlighter",
            name: "Hourglass Ambient Lighting Palette",
            price: 62.00,
            img: `${IMG_URL}iTw8P6a.png`,
            link: 'https://www.hourglasscosmetics.com/ambient-lighting-palette.html'
        },
        {
            category: "Highlighter",
            name: "Becca Shimmering Skin Perfector",
            price: 38.00,
            img: `${IMG_URL}L8aaBGB.png`,
            link: 'https://www.beccacosmetics.com/shimmering-skin-perfector-pressed-2eeec7.html'
        },
        {
            category: "Highlighter",
            name: "DOSE of Colors DESI X KATY MÍRAME Highlighter",
            price: 28.00,
            img: `${IMG_URL}gVuLJJG.png`,
            link: 'https://doseofcolors.com/collections/desi-x-katy/products/mirame'
        },
        {
            category: "Highlighter",
            name: "Hourglass Ambient Lighting Palette",
            price: 62.00,
            img: `${IMG_URL}iTw8P6a.png`,
            link: 'https://www.hourglasscosmetics.com/ambient-lighting-palette.html'
        },
        {
            category: "Highlighter",
            name: "Jeffree Star Cosmetics 24 Karat Pro Palette",
            price: 40.00,
            img: `${IMG_URL}n4Ltg9w.png`,
            link: 'https://jeffreestarcosmetics.com/products/24-karat-pro-palette'
        },
        {
            category: "Highlighter",
            name: "OFRA x NikkieTutorials “Glazed Donut” Highlighter",
            price: 35.00,
            img: `${IMG_URL}RoghUfO.png`,
            link: 'https://www.ofracosmetics.com/products/glazed-donut-highlighter'
        },
        {
            category: "Blush",
            name: "L'Oreal True Match Super Blendable Blush",
            price: 10.95,
            img: `${IMG_URL}NknA3rw.png`,
            link: 'https://www.lorealparisusa.com/products/makeup/face/blush/true-match-blush.aspx?shade=apricot-kiss-n5-6'
        },
        {
            category: "Blush",
            name: "Gucci Sheer Blushing Powder",
            price: 49.00,
            img: `${IMG_URL}0mSLi5M.png`,
            link: 'https://www.gucci.com/us/en/pr/beauty/face/blushing-powder/soft-peach-sheer-blushing-powder-p-3692179PBL15703'
        },
        {
            category: "Blush",
            name: "MAC Extra Dimension Blush",
            price: 29.00,
            img: `${IMG_URL}k970Lhf.png`,
            link: 'https://www.maccosmetics.com/product/13842/24963/products/makeup/face/blush-bronzer/extra-dimension-blush#/shade/Fairly_Precious'
        },
        {
            category: "Blush",
            name: "Morphe 8W Warm Master Blush Palette",
            price: 20.00,
            img: `${IMG_URL}PeQh0Il.png`,
            link: 'https://www.morphebrushes.com/products/8w-warm-master-blush-palette'
        },
        {
            category: "Blush",
            name: "Natasha Denona Blush & Diamond Palette",
            price: 89.00,
            img: `${IMG_URL}w4zJgyU.png`,
            link: 'http://www.natashadenona.com/products/base/highlighter/diamond-blush/darya'
        },
        {
            category: "Blush",
            name: "Laura Geller Baked Blush-N-Brighten",
            price: 28.00,
            img: `${IMG_URL}rY92aWR.png`,
            link: 'https://www.laurageller.com/baked-blush-n-brighten.html'
        },
        {
            category: "Eyeliner",
            name: "L'Oreal Lacquer Liner",
            price: 9.95,
            img: `${IMG_URL}oETFrlK.png`,
            link: 'https://www.lorealparisusa.com/products/makeup/eye/eyeliner/infallible-lacquer-liner-24h.aspx?shade=blackest-black'
        },
        {
            category: "Eyeliner",
            name: "DOSE of Colors Cream Matte Eyeliner",
            price: 19.00,
            img: `${IMG_URL}Im7pyD1.png`,
            link: 'https://doseofcolors.com/products/shady'
        },
        {
            category: "Eyeliner",
            name: "Illamasqua Precision Gel Liner",
            price: 28.00,
            img: `${IMG_URL}5zeQZSe.png`,
            link: 'https://www.illamasqua.com/precision-gel-liner-infinity/11540334.html'
        },
        {
            category: "Eyeliner",
            name: "Jouer Cosmetics Slim Crème Eyeliner",
            price: 16.00,
            img: `${IMG_URL}oomTeAH.png`,
            link: 'https://www.jouercosmetics.com/products/slim-creme-eyeliner-1?variant=28509521225'
        },
        {
            category: "Eyeliner",
            name: "Morphe Gel Eyeliner",
            price: 9.00,
            img: `${IMG_URL}MTVPdxO.png`,
            link: 'https://www.morphebrushes.com/collections/eyeliner/products/gel-liner-jet'
        },
        {
            category: "Eyeliner",
            name: "Tom Ford Eye Defining Pen",
            price: 57.00,
            img: `${IMG_URL}Wff3Kcd.png`,
            link: 'https://www.tomford.com/eye-defining-pen/T1W8.html'
        },
        {
            category: "Eyeliner",
            name: "Inglot AMC Eyeliner Gel",
            price: 17.00,
            img: `${IMG_URL}sxS8QYC.png`,
            link: 'https://inglotusa.com/eyeliners/99-amc-eyeliner-gel'
        },
        {
            category: "Lipstick",
            name: "Wet n Wild Megalast Matte Lipstick",
            price: 2.49,
            img: `${IMG_URL}ZU62zev.png`,
            link: 'https://www.wetnwildbeauty.com/megalast-lip-color.html'
        },
        {
            category: "Lipstick",
            name: "DOSE of Colors DESI X KATY Lipstick",
            price: 16.00,
            img: `${IMG_URL}BjNrcfI.png`,
            link: 'https://doseofcolors.com/collections/desi-x-katy/products/more-creamer-please'
        },
        {
            category: "Lipstick",
            name: "Jeffree Star Cosmetics Velour Liquid Lipstick",
            price: 18.00,
            img: `${IMG_URL}3hjHlsa.png`,
            link: 'https://jeffreestarcosmetics.com/collections/velour-liquid-lipstick'
        },
        {
            category: "Lipstick",
            name: "Jouer Long-Wear Creme Lip Liner",
            price: 16.00,
            img: `${IMG_URL}4uvvESV.png`,
            link: ''
        },
        {
            category: "Lipstick",
            name: "NARS Powermatte Lip Pigment",
            price: 26.00,
            img: `${IMG_URL}lXQUhKP.png`,
            link: 'https://www.narscosmetics.com/USA/powermatte-lip-pigment/999NAC0000053.html'
        },
        {
            category: "Lipstick",
            name: "Smashbox Always On Liquid Lipstick",
            price: 24.00,
            img: `${IMG_URL}umsZspD.png`,
            link: 'https://www.smashbox.com/product/6126/42295/lips-cheek/lipstick-liner/always-on-liquid-lipstick#/shade/Babe_Alert'
        },
        {
            category: "Lipstick",
            name: "Maybelline Superstay Matte Ink Liquid Lipstick",
            price: 9.49,
            img: `${IMG_URL}XxPJzeb.png`,
            link: 'https://www.maybelline.com/lip-makeup/lipstick/superstay-matte-ink-liquid-lipstick'
        },
        {
            category: "Mascara",
            name: "L'Oreal Voluminous Lash Paradise Mascara",
            price: 9.99,
            img: `${IMG_URL}P6lJMYa.png`,
            link: 'https://www.lorealparisusa.com/products/makeup/eye/mascara/voluminous-lash-paradise-washable-mascara.aspx?shade=200-blackest-black'
        },
        {
            category: "Mascara",
            name: "Benefit Cosmetics BADgal Bang! Mascara",
            price: 24.00,
            img: `${IMG_URL}Cd30bCu.png`,
            link: 'https://www.benefitcosmetics.com/us/en/product/badgal-bang-volumizing-mascara'
        },
        {
            category: "Mascara",
            name: "Benefit Cosmetics Rollerlash Curling Mascara",
            price: 24.00,
            img: `${IMG_URL}8bHb6VK.png`,
            link: 'https://www.benefitcosmetics.com/us/en/product/roller-lash'
        },
        {
            category: "Mascara",
            name: "By Terry Lash-Expert Twist Brush Double-Effect Mascara",
            price: 30.00,
            img: `${IMG_URL}BJDQNNK.jpg`,
            link: 'https://www.barneys.com/product/by-terry-lash-expert-twist-brush-double-effect-mascara-505611015.html'
        },
        {
            category: "Mascara",
            name: "MAC Extended Play Mascara",
            price: 19.00,
            img: `${IMG_URL}LsajwBf.png`,
            link: 'https://www.maccosmetics.com/product/13839/21069/products/makeup/eyes/mascara/extended-play-lash-mascara'
        },
        {
            category: "Mascara",
            name: "Too Faced Better Than Sex Mascara",
            price: 23.00,
            img: `${IMG_URL}AKOCBVw.png`,
            link: 'https://www.toofaced.com/eye-makeup/mascara/better-than-sex-mascara/80021.html'
        },
        {
            category: "Brow",
            name: "Hourglass Arch Brow Volumizing Gel",
            price: 28.00,
            img: `${IMG_URL}WuCOA54.png`,
            link: 'https://www.sephora.com/product/arch-brow-volumizing-fiber-gel-P427516'
        },
        {
            category: "Brow",
            name: "Anastasia Beverly Hills Brow Definer",
            price: 23.00,
            img: `${IMG_URL}mWjrRc4.png`,
            link: 'http://www.anastasiabeverlyhills.com/brow-definer/brow-definer.html'
        },
        {
            category: "Brow",
            name: "Anastasia Beverly Hills Dipbrow Pomade",
            price: 18.00,
            img: `${IMG_URL}XvGDVJm.png`,
            link: 'http://www.anastasiabeverlyhills.com/dipbrow-pomade-waterproof-color-brow-sculpt/dipbrow-pomade.html'
        },
        {
            category: "Brow",
            name: "Benefit Ka-BROW! Eyebrow Cream-Gel Color",
            price: 24.00,
            img: `${IMG_URL}jO5K3Ho.png`,
            link: 'https://www.benefitcosmetics.com/us/en/product/ka-brow'
        },
        {
            category: "Brow",
            name: "Iconic London Sculpt & Boost Eyebrow Cushion",
            price: 35.00,
            img: `${IMG_URL}t0QyUhX.png`,
            link: 'https://www.iconiclondoninc.com/products/eyebrow-cushion-sculpt-boost?variant=378209304585'
        },
        {
            category: "Eyeshadow",
            name: "Stila Glitter & Glow Liquid Eyeshadow",
            price: 24.00,
            img: `${IMG_URL}DYMI16h.png`,
            link: 'https://www.stilacosmetics.com/products/shimmer-glow-liquid-eye-shadow'
        },
        {
            category: "Eyeshadow",
            name: "Charlotte Tilbury Transform Eyes",
            price: 53.00,
            img: `${IMG_URL}zza1G40.jpg`,
            link: 'http://www.charlottetilbury.com/us/bigger-brighter-eyeshadow-transformeyes.html'
        },
        {
            category: "Eyeshadow",
            name: "Jeffree Star Cosmetics Blood Sugar Palette",
            price: 52.00,
            img: `${IMG_URL}qjcwXfx.png`,
            link: 'https://jeffreestarcosmetics.com/products/blood-sugar-eyeshadow-palette'
        },
        {
            category: "Eyeshadow",
            name: "Juvia’s Place Douce Eyeshadow Palette",
            price: 19.00,
            img: `${IMG_URL}KErQhZC.png`,
            link: 'https://www.juviasplace.com/products/douce-eyeshadow-palette'
        },
        {
            category: "Eyeshadow",
            name: "Kat Von D MetalMatte Mini Eyeshadow Palette",
            price: 39.00,
            img: `${IMG_URL}3q78AFi.png`,
            link: 'https://www.katvondbeauty.com/eye/eyeshadow/metalmatte-mini-eyeshadow-palette/26566V1.html'
        },
        {
            category: "Eyeshadow",
            name: "Morphe The Jaclyn Hill Palette",
            price: 38.00,
            img: `${IMG_URL}fUjs4bu.png`,
            link: 'https://www.morphebrushes.com/products/jh2-jaclyn-hill-ii-palette'
        },
        {
            category: "Eyeshadow",
            name: "DOSE of Colors Baked Browns",
            price: 32.00,
            img: `${IMG_URL}YRVO4Yt.png?1`,
            link: 'https://doseofcolors.com/collections/palette/products/baked-browns'
        }
    ])
})
    .then((products) => {
        return Influencer.create([
            {
                name: 'Tati', 
                youtube_id: 'UC4qk9TtGhBKCkoWz5qGJcGg', 
                video_url: `${YT_URL}HBqcoSnG_n4`, 
                instagram: 'https://www.instagram.com/glamlifeguru/',
                twitter: 'https://twitter.com/glamlifeguru',
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
            }, 
            {
                name: 'nikkietutorials', 
                youtube_id: 'UCzTKskwIc_-a0cGvCXA848Q', 
                video_url: `${YT_URL}aCoDqL1dK9c`, 
                instagram: 'https://www.instagram.com/nikkietutorials/',
                twitter: 'https://twitter.com/NikkieTutorials',
                favorites:[
                    // 1. Foundation // 
                    products.find(p => p.name === "Huda Beauty Faux Filter Foundation"), 
                    // 2. Concealer //
                    products.find(p => p.name === "NARS Soft Matte Complete Concealer"), 
                    // 3. Setting Spray //
                    products.find(p => p.name === "Gerard Cosmetics Slay All Day Setting Spray"), 
                    // 4. Powder //
                    products.find(p => p.name === "Maybelline Fit Me Loose Powder"), 
                    // 5. Contour //
                    products.find(p => p.name === "Rodial Instaglam Deluxe Bronzing Powder"), 
                    // 6. Highlighter //
                    products.find(p => p.name === "OFRA x NikkieTutorials “Glazed Donut” Highlighter"), 
                    // 7. Blush //
                    products.find(p => p.name === "MAC Extra Dimension Blush"), 
                    // 8. Mascara //
                    products.find(p => p.name === "Benefit Cosmetics BADgal Bang! Mascara"), 
                    // 9. Eyeliner //
                    products.find(p => p.name === "Jouer Cosmetics Slim Crème Eyeliner"), 
                    // 10. Lipstick //
                    products.find(p => p.name === "Jouer Long-Wear Creme Lip Liner"), 
                    // 11. Brow //
                    products.find(p => p.name === "Iconic London Sculpt & Boost Eyebrow Cushion"), 
                    // 12. Eyeshadow //
                    products.find(p => p.name === "Juvia’s Place Douce Eyeshadow Palette") 
                ]
            }, 
            {
                name: 'jeffreestar', 
                youtube_id: 'UCkvK_5omS-42Ovgah8KRKtg', 
                video_url: `${YT_URL}ebOqNwr9sl0`, 
                instagram: 'https://www.instagram.com/jeffreestar/',
                twitter: 'https://twitter.com/JeffreeStar',
                favorites:[
                    // 1. Foundation // 
                    products.find(p => p.name === "La Mer The Soft Fluid Long Wear Foundation"), 
                    // 2. Concealer //
                    products.find(p => p.name === "Makeup Revolution Conceal & Define Concealer"), 
                    // 3. Setting Spray //
                    products.find(p => p.name === "Morphe Prep & Set Makeup Setting Spray"), 
                    // 4. Powder //
                    products.find(p => p.name === "La Mer The Powder"), 
                    // 5. Contour //
                    products.find(p => p.name === "La Mer The Bronzing Powder"), 
                    // 6. Highlighter //
                    products.find(p => p.name === "Jeffree Star Cosmetics 24 Karat Pro Palette"), 
                    // 7. Blush //
                    products.find(p => p.name === "Gucci Sheer Blushing Powder"), 
                    // 8. Mascara //
                    products.find(p => p.name === "Benefit Cosmetics Rollerlash Curling Mascara"), 
                    // 9. Eyeliner //
                    products.find(p => p.name === "Tom Ford Eye Defining Pen"), 
                    // 10. Lipstick //
                    products.find(p => p.name === "Jeffree Star Cosmetics Velour Liquid Lipstick"), 
                    // 11. Brow //
                    products.find(p => p.name === "Anastasia Beverly Hills Dipbrow Pomade"), 
                    // 12. Eyeshadow //
                    products.find(p => p.name === "Jeffree Star Cosmetics Blood Sugar Palette") 
                ]
            }, 
            {
                name: 'Wayne Goss', 
                youtube_id: 'UCCvoAe__WFYMNAEN-C-CtYA', 
                video_url: `${YT_URL}Tj8W3c4qN_M`, 
                instagram: 'https://www.instagram.com/gossmakeupartist/',
                twitter: 'https://twitter.com/gossmakeupartis',
                favorites:[
                    // 1. Foundation // 
                    products.find(p => p.name === "Nars Radient Long Wear Foundation"), 
                    // 2. Concealer //
                    products.find(p => p.name === "Eve Pearl Dual Salmon Concealer"), 
                    // 3. Setting Spray //
                    products.find(p => p.name === "Skindanavia The Makeup Finishing Spray"), 
                    // 4. Powder //
                    products.find(p => p.name === "Yves Saint Laurent Souffle D'Eclat"), 
                    // 5. Contour //
                    products.find(p => p.name === "Rodial Instaglam Deluxe Bronzing Powder"), 
                    // 6. Highlighter //
                    products.find(p => p.name === "Becca Shimmering Skin Perfector"), 
                    // 7. Blush //
                    products.find(p => p.name === "Natasha Denona Blush & Diamond Palette"), 
                    // 8. Mascara //
                    products.find(p => p.name === "By Terry Lash-Expert Twist Brush Double-Effect Mascara"), 
                    // 9. Eyeliner //
                    products.find(p => p.name === "Illamasqua Precision Gel Liner"), 
                    // 10. Lipstick //
                    products.find(p => p.name === "NARS Powermatte Lip Pigment"), 
                    // 11. Brow //
                    products.find(p => p.name === "Anastasia Beverly Hills Dipbrow Pomade"), 
                    // 12. Eyeshadow //
                    products.find(p => p.name === "Charlotte Tilbury Transform Eyes") 
                ]
            }, 
            {
                name: 'Jaclyn Hill', 
                youtube_id: 'UC6jgzx2g3nlbaYkd8EMweKA', 
                video_url: `${YT_URL}mTHLyCqtLJE`, 
                instagram: 'https://www.instagram.com/jaclynhill/',
                twitter: 'https://twitter.com/Jaclynhill',
                favorites:[
                    // 1. Foundation // 
                    products.find(p => p.name === "Dior Diorskin Forever Foundation"), 
                    // 2. Concealer //
                    products.find(p => p.name === "Tarte Shape Tape Contour Concealer"), 
                    // 3. Setting Spray //
                    products.find(p => p.name === "Morphe Prep & Set Makeup Setting Spray"), 
                    // 4. Powder //
                    products.find(p => p.name === "Hourglass Veil Translucent Setting Powder"), 
                    // 5. Contour //
                    products.find(p => p.name === "La Mer The Bronzing Powder"), 
                    // 6. Highlighter //
                    products.find(p => p.name === "Becca Shimmering Skin Perfector"), 
                    // 7. Blush //
                    products.find(p => p.name === "Morphe 8W Warm Master Blush Palette"), 
                    // 8. Mascara //
                    products.find(p => p.name === "L'Oreal Voluminous Lash Paradise Mascara"), 
                    // 9. Eyeliner //
                    products.find(p => p.name === "Morphe Gel Eyeliner"), 
                    // 10. Lipstick //
                    products.find(p => p.name === "Smashbox Always On Liquid Lipstick"), 
                    // 11. Brow //
                    products.find(p => p.name === "Anastasia Beverly Hills Brow Definer"), 
                    // 12. Eyeshadow //
                    products.find(p => p.name === "Morphe The Jaclyn Hill Palette") 
                ]
            }, 
            {
                name: 'Desi Perkins', 
                youtube_id: 'UCG9nVSLp4nQlW79sY5ihRrg', 
                video_url: `${YT_URL}j1f04Jg7IaA`, 
                instagram: 'https://www.instagram.com/desiperkins/',
                twitter: 'https://twitter.com/DesiPerkins',
                favorites:[
                    // 1. Foundation // 
                    products.find(p => p.name === "Nars Radient Long Wear Foundation"), 
                    // 2. Concealer //
                    products.find(p => p.name === "Becca Aqua Luminous Perfecting Concealer"), 
                    // 3. Setting Spray //
                    products.find(p => p.name === "MAC Prep + Prime Fix+"), 
                    // 4. Powder //
                    products.find(p => p.name === "Charlotte Tilbury Air Brush Flawless Finish Skin Perfecting Micro-Powder"), 
                    // 5. Contour //
                    products.find(p => p.name === "Marc Jacobs O!Mega Bronzer"), 
                    // 6. Highlighter //
                    products.find(p => p.name === "DOSE of Colors DESI X KATY MÍRAME Highlighter"), 
                    // 7. Blush //
                    products.find(p => p.name === "MAC Extra Dimension Blush"), 
                    // 8. Mascara //
                    products.find(p => p.name === "MAC Extended Play Mascara"), 
                    // 9. Eyeliner //
                    products.find(p => p.name === "DOSE of Colors Cream Matte Eyeliner"), 
                    // 10. Lipstick //
                    products.find(p => p.name === "DOSE of Colors DESI X KATY Lipstick"), 
                    // 11. Brow //
                    products.find(p => p.name === "Benefit Ka-BROW! Eyebrow Cream-Gel Color"), 
                    // 12. Eyeshadow //
                    products.find(p => p.name === "Kat Von D MetalMatte Mini Eyeshadow Palette") 
                ]
            },
            {
                name: 'LustreLux', 
                youtube_id: 'UCC0EqtXQ9at6ON_-ZYJaImA', 
                video_url: `${YT_URL}AoJ8uMh4h4o`, 
                instagram: 'https://www.instagram.com/katy/',
                twitter: 'https://twitter.com/lustrelux',
                favorites:[
                    // 1. Foundation // 
                    products.find(p => p.name === "Giorgio Armani Luminous Silk Foundation"), 
                    // 2. Concealer //
                    products.find(p => p.name === "Tarte Shape Tape Contour Concealer"), 
                    // 3. Setting Spray //
                    products.find(p => p.name === "Cover FX Illuminating Setting Spray"), 
                    // 4. Powder //
                    products.find(p => p.name === "Laura Mercier Loose Setting Powder"), 
                    // 5. Contour //
                    products.find(p => p.name === "Nars Bronzing Powder"), 
                    // 6. Highlighter //
                    products.find(p => p.name === "DOSE of Colors DESI X KATY MÍRAME Highlighter"), 
                    // 7. Blush //
                    products.find(p => p.name === "Laura Geller Baked Blush-N-Brighten"), 
                    // 8. Mascara //
                    products.find(p => p.name === "Too Faced Better Than Sex Mascara"), 
                    // 9. Eyeliner //
                    products.find(p => p.name === "Inglot AMC Eyeliner Gel"), 
                    // 10. Lipstick //
                    products.find(p => p.name === "Maybelline Superstay Matte Ink Liquid Lipstick"), 
                    // 11. Brow //
                    products.find(p => p.name === "Benefit Ka-BROW! Eyebrow Cream-Gel Color"), 
                    // 12. Eyeshadow //
                    products.find(p => p.name === "DOSE of Colors Baked Browns") 
                ]
            }
            // {
            //     name: 'nikkietutorials', 
            //     youtube_id: '', 
            //     video_url: `${YT_URL}`, 
            //     instagram: 'https://www.instagram.com/katy/',
            //     twitter: 'https://twitter.com/lustrelux',
            //     favorites:[
            //         // 1. Foundation // 
            //         products.find(p => p.name === ""), 
            //         // 2. Concealer //
            //         products.find(p => p.name === ""), 
            //         // 3. Setting Spray //
            //         products.find(p => p.name === ""), 
            //         // 4. Powder //
            //         products.find(p => p.name === ""), 
            //         // 5. Contour //
            //         products.find(p => p.name === ""), 
            //         // 6. Highlighter //
            //         products.find(p => p.name === ""), 
            //         // 7. Blush //
            //         products.find(p => p.name === ""), 
            //         // 8. Mascara //
            //         products.find(p => p.name === ""), 
            //         // 9. Eyeliner //
            //         products.find(p => p.name === ""), 
            //         // 10. Lipstick //
            //         products.find(p => p.name === ""), 
            //         // 11. Brow //
            //         products.find(p => p.name === ""), 
            //         // 12. Eyeshadow //
            //         products.find(p => p.name === "") 
            //     ]
            // }, 
        ])
    })

    .then(influencer => {
        process.exit();
        require('mongoose').connection.close();

    })
    .catch(err => console.log(err));




