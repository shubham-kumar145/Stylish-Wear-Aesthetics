// import Navbar from '../components/Navbar';
// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import axiosClient from '../utils/axiosClients';
// import ProductCard from '../components/ProductCart';
// import MainCarousel from '../components/MainCarousel ';
// import Footer from '../components/Footer';
// import CategoryCardGrid from '../components/CategoryCardGrid';
// import Chatbot from '../chatbot/Chatbot ';

// export default function Home() {
//     const { user } = useSelector((state) => state.auth);
//     const [electronics, setElectronics] = useState([]);
//     const [grocery, setGrocery] = useState([]);
//     const [menswear, setMenswear] = useState([]);
//     const [womenwear, setWomenwear] = useState([]);
//     const [furniture, setFurniture] = useState([]);

//     useEffect(() => {
//         if (!user) return;

//         const fetchAllProducts = async () => {
//             try {
//                 const { data } = await axiosClient.get('/product/allproduct');

//                 setFurniture(data.filter(item => item.category?.toLowerCase() === 'furniture'));
//                 setMenswear(data.filter(item => item.category?.toLowerCase() === 'men\'s wear'));
//                 setGrocery(data.filter(item => item.category?.toLowerCase() === 'grocery'));
//                 setElectronics(data.filter(item => item.category?.toLowerCase() === 'toy'));
//                 setWomenwear(data.filter(item => item.category?.toLowerCase() === 'womenwear'));
//             } catch (err) {
//                 console.error("Error fetching products:", err);
//             }
//         };

//         fetchAllProducts();
//     }, [user]);

//     if (!user) {
//         return <div className="p-4 text-xl text-center">Please log in to view products</div>;
//     }
//     return (
//         <div className=' bg-white/95'>
//             <Navbar />
//             <div className='h-[30%]  mt-2  bg-white/95'>
//                 <MainCarousel />
//             </div>
//             <div className='flex justify-center items-center'>
//                 <CategoryCardGrid
//                     products={[...electronics, ...grocery, ...menswear, ...womenwear, ...furniture]}

//                 />
//             </div>

//             <div className="p-4 space-y-12 bg-white/95">
//                 <CategorySection title="Stylish Furniture" products={furniture} />
//                 <CategorySection title="Top Grocery Picks" products={grocery} />
//                 <CategorySection title="Men's wear" products={menswear} />
//                 <CategorySection title="Best of Toys" products={electronics} />
//                 <CategorySection title="Women's Fashion" products={womenwear} />
//             </div>
//             <Chatbot />
//             <Footer />
//         </div>
//     );
// }

// function CategorySection({ title, products }) {
//     if (products.length === 0) return null;

//     return (
//         <section className=''>
//             <h2 className="text-2xl  text-black font-bold mb-4">{title}</h2>
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//                 {products.map(product => (
//                     <ProductCard key={product._id} product={product} />
//                 ))}
//             </div>
//         </section>
//     );
// }

// import Navbar from '../components/Navbar';
// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import axiosClient from '../utils/axiosClients';
// import ProductCard from '../components/ProductCart';
// import MainCarousel from '../components/MainCarousel ';
// import Footer from '../components/Footer';
// import CategoryCardGrid from '../components/CategoryCardGrid';
// import Chatbot from '../chatbot/Chatbot ';

// export default function Home() {
//     const { user } = useSelector((state) => state.auth);

//     // 34 Clothing Categories
//     const [menShirt, setMenShirt] = useState([]);
//     const [menTshirt, setMenTshirt] = useState([]);
//     const [menCasualShirt, setMenCasualShirt] = useState([]);
//     const [menFormalShirt, setMenFormalShirt] = useState([]);
//     const [menPolo, setMenPolo] = useState([]);
//     const [menPant, setMenPant] = useState([]);
//     const [menJeans, setMenJeans] = useState([]);
//     const [menTrousers, setMenTrousers] = useState([]);
//     const [menShorts, setMenShorts] = useState([]);
//     const [menCoat, setMenCoat] = useState([]);
//     const [menBlazer, setMenBlazer] = useState([]);
//     const [menHoodie, setMenHoodie] = useState([]);

//     const [womenTop, setWomenTop] = useState([]);
//     const [womenShirt, setWomenShirt] = useState([]);
//     const [womenKurti, setWomenKurti] = useState([]);
//     const [womenKurtaSet, setWomenKurtaSet] = useState([]);
//     const [womenSaree, setWomenSaree] = useState([]);
//     const [womenLehenga, setWomenLehenga] = useState([]);
//     const [womenDress, setWomenDress] = useState([]);
//     const [womenGown, setWomenGown] = useState([]);
//     const [womenTshirt, setWomenTshirt] = useState([]);
//     const [womenJeans, setWomenJeans] = useState([]);
//     const [womenPant, setWomenPant] = useState([]);
//     const [womenSkirt, setWomenSkirt] = useState([]);
//     const [womenEthnic, setWomenEthnic] = useState([]);
//     const [womenWinter, setWomenWinter] = useState([]);

//     const [kidsTshirt, setKidsTshirt] = useState([]);
//     const [kidsShirt, setKidsShirt] = useState([]);
//     const [kidsFrock, setKidsFrock] = useState([]);
//     const [kidsShorts, setKidsShorts] = useState([]);
//     const [kidsPant, setKidsPant] = useState([]);
//     const [kidsEthnic, setKidsEthnic] = useState([]);
//     const [kidsHoodie, setKidsHoodie] = useState([]);
//     const [kidsWinter, setKidsWinter] = useState([]);

//     useEffect(() => {
//         if (!user) return;

//         const fetchAllProducts = async () => {
//             try {
//                 const { data } = await axiosClient.get('/product/allproduct');

//                 // MEN
//                 setMenShirt(data.filter(item => item.category?.toLowerCase() === "men shirt"));
//                 setMenTshirt(data.filter(item => item.category?.toLowerCase() === "men t-shirt"));
//                 setMenCasualShirt(data.filter(item => item.category?.toLowerCase() === "men casual shirt"));
//                 setMenFormalShirt(data.filter(item => item.category?.toLowerCase() === "men formal shirt"));
//                 setMenPolo(data.filter(item => item.category?.toLowerCase() === "men polo t-shirt"));
//                 setMenPant(data.filter(item => item.category?.toLowerCase() === "men pant"));
//                 setMenJeans(data.filter(item => item.category?.toLowerCase() === "men jeans"));
//                 setMenTrousers(data.filter(item => item.category?.toLowerCase() === "men trousers"));
//                 setMenShorts(data.filter(item => item.category?.toLowerCase() === "men shorts"));
//                 setMenCoat(data.filter(item => item.category?.toLowerCase() === "men coat"));
//                 setMenBlazer(data.filter(item => item.category?.toLowerCase() === "men blazer"));
//                 setMenHoodie(data.filter(item => item.category?.toLowerCase() === "men hoodie"));

//                 // WOMEN
//                 setWomenTop(data.filter(item => item.category?.toLowerCase() === "women top"));
//                 setWomenShirt(data.filter(item => item.category?.toLowerCase() === "women shirt"));
//                 setWomenKurti(data.filter(item => item.category?.toLowerCase() === "women kurti"));
//                 setWomenKurtaSet(data.filter(item => item.category?.toLowerCase() === "women kurta set"));
//                 setWomenSaree(data.filter(item => item.category?.toLowerCase() === "women saree"));
//                 setWomenLehenga(data.filter(item => item.category?.toLowerCase() === "women lehenga"));
//                 setWomenDress(data.filter(item => item.category?.toLowerCase() === "women dress"));
//                 setWomenGown(data.filter(item => item.category?.toLowerCase() === "women gown"));
//                 setWomenTshirt(data.filter(item => item.category?.toLowerCase() === "women t-shirt"));
//                 setWomenJeans(data.filter(item => item.category?.toLowerCase() === "women jeans"));
//                 setWomenPant(data.filter(item => item.category?.toLowerCase() === "women pant"));
//                 setWomenSkirt(data.filter(item => item.category?.toLowerCase() === "women skirt"));
//                 setWomenEthnic(data.filter(item => item.category?.toLowerCase() === "women ethnic wear"));
//                 setWomenWinter(data.filter(item => item.category?.toLowerCase() === "women winter wear"));

//                 // KIDS
//                 setKidsTshirt(data.filter(item => item.category?.toLowerCase() === "kids t-shirt"));
//                 setKidsShirt(data.filter(item => item.category?.toLowerCase() === "kids shirt"));
//                 setKidsFrock(data.filter(item => item.category?.toLowerCase() === "kids frock"));
//                 setKidsShorts(data.filter(item => item.category?.toLowerCase() === "kids shorts"));
//                 setKidsPant(data.filter(item => item.category?.toLowerCase() === "kids pant"));
//                 setKidsEthnic(data.filter(item => item.category?.toLowerCase() === "kids ethnic wear"));
//                 setKidsHoodie(data.filter(item => item.category?.toLowerCase() === "kids hoodie"));
//                 setKidsWinter(data.filter(item => item.category?.toLowerCase() === "kids winter wear"));

//             } catch (err) {
//                 console.error("Error fetching products:", err);
//             }
//         };

//         fetchAllProducts();
//     }, [user]);

//     if (!user) {
//         return <div className="p-4 text-xl text-center">Please log in to view products</div>;
//     }

//     return (
//         <div className='bg-white/95'>
//             <Navbar />

//             {/* Carousel */}
//             <div className='h-[30%] mt-2 bg-white/95'>
//                 <MainCarousel />
//             </div>
//             <div className="w-full bg-[#1f1f1f] overflow-hidden relative h-10 flex items-center">
//                 <div className="whitespace-nowrap animate-scroll text-white text-sm font-semibold tracking-wide">
//                     <span className="mx-8">
//                         TURMS, A BRAND THAT IMPRESSED THE SHARKS AND WON DHONI'S HEART |
//                         TRUSTED BY 1 MILLION CUSTOMERS | FREE SHIPPING AS A BIRD | SEASONAL SALE IS LIVE NOW
//                     </span>
//                     <span className="mx-8 ">
//                         TURMS, A BRAND THAT IMPRESSED THE SHARKS AND WON DHONI'S HEART |
//                         TRUSTED BY 1 MILLION CUSTOMERS | FREE SHIPPING AS A BIRD | SEASONAL SALE IS LIVE NOW
//                     </span>
//                 </div>
//             </div>
//             {/* Main Category Grid */}
//             <div className='flex justify-center items-center'>
//                 <CategoryCardGrid
//                     products={[
//                         ...menShirt, ...menTshirt, ...menCasualShirt, ...menFormalShirt, ...menPolo,
//                         ...menPant, ...menJeans, ...menTrousers, ...menShorts, ...menCoat,
//                         ...menBlazer, ...menHoodie,

//                         ...womenTop, ...womenShirt, ...womenKurti, ...womenKurtaSet,
//                         ...womenSaree, ...womenLehenga, ...womenDress, ...womenGown,
//                         ...womenTshirt, ...womenJeans, ...womenPant, ...womenSkirt,
//                         ...womenEthnic, ...womenWinter,

//                         ...kidsTshirt, ...kidsShirt, ...kidsFrock, ...kidsShorts,
//                         ...kidsPant, ...kidsEthnic, ...kidsHoodie, ...kidsWinter
//                     ]}
//                 />
//             </div>

//             {/* Category Sections */}
//             <div className="p-4 space-y-12 bg-white/95">

//                 {/* MEN */}
//                 <CategorySection title="Men Shirts" products={menShirt} />
//                 <CategorySection title="Men T-Shirts" products={menTshirt} />
//                 <CategorySection title="Men Casual Shirts" products={menCasualShirt} />
//                 <CategorySection title="Men Formal Shirts" products={menFormalShirt} />
//                 <CategorySection title="Men Polo T-Shirts" products={menPolo} />
//                 <CategorySection title="Men Pants" products={menPant} />
//                 <CategorySection title="Men Jeans" products={menJeans} />
//                 <CategorySection title="Men Trousers" products={menTrousers} />
//                 <CategorySection title="Men Shorts" products={menShorts} />
//                 <CategorySection title="Men Coats" products={menCoat} />
//                 <CategorySection title="Men Blazers" products={menBlazer} />
//                 <CategorySection title="Men Hoodies" products={menHoodie} />

//                 {/* WOMEN */}
//                 <CategorySection title="Women Tops" products={womenTop} />
//                 <CategorySection title="Women Shirts" products={womenShirt} />
//                 <CategorySection title="Women Kurti" products={womenKurti} />
//                 <CategorySection title="Women Kurta Sets" products={womenKurtaSet} />
//                 <CategorySection title="Women Saree" products={womenSaree} />
//                 <CategorySection title="Women Lehenga" products={womenLehenga} />
//                 <CategorySection title="Women Dresses" products={womenDress} />
//                 <CategorySection title="Women Gowns" products={womenGown} />
//                 <CategorySection title="Women T-Shirts" products={womenTshirt} />
//                 <CategorySection title="Women Jeans" products={womenJeans} />
//                 <CategorySection title="Women Pants" products={womenPant} />
//                 <CategorySection title="Women Skirts" products={womenSkirt} />
//                 <CategorySection title="Women Ethnic Wear" products={womenEthnic} />
//                 <CategorySection title="Women Winter Wear" products={womenWinter} />

//                 {/* KIDS */}
//                 <CategorySection title="Kids T-Shirts" products={kidsTshirt} />
//                 <CategorySection title="Kids Shirts" products={kidsShirt} />
//                 <CategorySection title="Kids Frocks" products={kidsFrock} />
//                 <CategorySection title="Kids Shorts" products={kidsShorts} />
//                 <CategorySection title="Kids Pants" products={kidsPant} />
//                 <CategorySection title="Kids Ethnic Wear" products={kidsEthnic} />
//                 <CategorySection title="Kids Hoodies" products={kidsHoodie} />
//                 <CategorySection title="Kids Winter Wear" products={kidsWinter} />

//             </div>


//             <Chatbot />
//             <Footer />
//         </div>
//     );
// }

// // Category Section Component
// function CategorySection({ title, products }) {
//     if (products.length === 0) return null;

//     return (
//         <section>
//             <h2 className="text-2xl text-black font-bold mb-4">{title}</h2>
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//                 {products.map(product => (
//                     <ProductCard key={product._id} product={product} />
//                 ))}
//             </div>
//         </section>
//     );
// }
import Navbar from '../components/Navbar';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axiosClient from '../utils/axiosClients';
import ProductCard from '../components/ProductCart';
import MainCarousel from '../components/MainCarousel ';
import Footer from '../components/Footer';
import CategoryCardGrid from '../components/CategoryCardGrid';
import Chatbot from '../chatbot/Chatbot ';

export default function Home() {
    const { user } = useSelector((state) => state.auth);

    // 34 Clothing Categories
    const [menShirt, setMenShirt] = useState([]);
    const [menTshirt, setMenTshirt] = useState([]);
    const [menCasualShirt, setMenCasualShirt] = useState([]);
    const [menFormalShirt, setMenFormalShirt] = useState([]);
    const [menPolo, setMenPolo] = useState([]);
    const [menPant, setMenPant] = useState([]);
    const [menJeans, setMenJeans] = useState([]);
    const [menTrousers, setMenTrousers] = useState([]);
    const [menShorts, setMenShorts] = useState([]);
    const [menCoat, setMenCoat] = useState([]);
    const [menBlazer, setMenBlazer] = useState([]);
    const [menHoodie, setMenHoodie] = useState([]);

    const [womenTop, setWomenTop] = useState([]);
    const [womenShirt, setWomenShirt] = useState([]);
    const [womenKurti, setWomenKurti] = useState([]);
    const [womenKurtaSet, setWomenKurtaSet] = useState([]);
    const [womenSaree, setWomenSaree] = useState([]);
    const [womenLehenga, setWomenLehenga] = useState([]);
    const [womenDress, setWomenDress] = useState([]);
    const [womenGown, setWomenGown] = useState([]);
    const [womenTshirt, setWomenTshirt] = useState([]);
    const [womenJeans, setWomenJeans] = useState([]);
    const [womenPant, setWomenPant] = useState([]);
    const [womenSkirt, setWomenSkirt] = useState([]);
    const [womenEthnic, setWomenEthnic] = useState([]);
    const [womenWinter, setWomenWinter] = useState([]);

    const [kidsTshirt, setKidsTshirt] = useState([]);
    const [kidsShirt, setKidsShirt] = useState([]);
    const [kidsFrock, setKidsFrock] = useState([]);
    const [kidsShorts, setKidsShorts] = useState([]);
    const [kidsPant, setKidsPant] = useState([]);
    const [kidsEthnic, setKidsEthnic] = useState([]);
    const [kidsHoodie, setKidsHoodie] = useState([]);
    const [kidsWinter, setKidsWinter] = useState([]);

    useEffect(() => {
        if (!user) return;

        const fetchAllProducts = async () => {
            try {
                const { data } = await axiosClient.get('/product/allproduct');

                // MEN
                setMenShirt(data.filter(item => item.category?.toLowerCase() === "men shirt"));
                setMenTshirt(data.filter(item => item.category?.toLowerCase() === "men t-shirt"));
                setMenCasualShirt(data.filter(item => item.category?.toLowerCase() === "men casual shirt"));
                setMenFormalShirt(data.filter(item => item.category?.toLowerCase() === "men formal shirt"));
                setMenPolo(data.filter(item => item.category?.toLowerCase() === "men polo t-shirt"));
                setMenPant(data.filter(item => item.category?.toLowerCase() === "men pant"));
                setMenJeans(data.filter(item => item.category?.toLowerCase() === "men jeans"));
                setMenTrousers(data.filter(item => item.category?.toLowerCase() === "men trousers"));
                setMenShorts(data.filter(item => item.category?.toLowerCase() === "men shorts"));
                setMenCoat(data.filter(item => item.category?.toLowerCase() === "men coat"));
                setMenBlazer(data.filter(item => item.category?.toLowerCase() === "men blazer"));
                setMenHoodie(data.filter(item => item.category?.toLowerCase() === "men hoodie"));

                // WOMEN
                setWomenTop(data.filter(item => item.category?.toLowerCase() === "women top"));
                setWomenShirt(data.filter(item => item.category?.toLowerCase() === "women shirt"));
                setWomenKurti(data.filter(item => item.category?.toLowerCase() === "women kurti"));
                setWomenKurtaSet(data.filter(item => item.category?.toLowerCase() === "women kurta set"));
                setWomenSaree(data.filter(item => item.category?.toLowerCase() === "women saree"));
                setWomenLehenga(data.filter(item => item.category?.toLowerCase() === "women lehenga"));
                setWomenDress(data.filter(item => item.category?.toLowerCase() === "women dress"));
                setWomenGown(data.filter(item => item.category?.toLowerCase() === "women gown"));
                setWomenTshirt(data.filter(item => item.category?.toLowerCase() === "women t-shirt"));
                setWomenJeans(data.filter(item => item.category?.toLowerCase() === "women jeans"));
                setWomenPant(data.filter(item => item.category?.toLowerCase() === "women pant"));
                setWomenSkirt(data.filter(item => item.category?.toLowerCase() === "women skirt"));
                setWomenEthnic(data.filter(item => item.category?.toLowerCase() === "women ethnic wear"));
                setWomenWinter(data.filter(item => item.category?.toLowerCase() === "women winter wear"));

                // KIDS
                setKidsTshirt(data.filter(item => item.category?.toLowerCase() === "kids t-shirt"));
                setKidsShirt(data.filter(item => item.category?.toLowerCase() === "kids shirt"));
                setKidsFrock(data.filter(item => item.category?.toLowerCase() === "kids frock"));
                setKidsShorts(data.filter(item => item.category?.toLowerCase() === "kids shorts"));
                setKidsPant(data.filter(item => item.category?.toLowerCase() === "kids pant"));
                setKidsEthnic(data.filter(item => item.category?.toLowerCase() === "kids ethnic wear"));
                setKidsHoodie(data.filter(item => item.category?.toLowerCase() === "kids hoodie"));
                setKidsWinter(data.filter(item => item.category?.toLowerCase() === "kids winter wear"));

            } catch (err) {
                console.error("Error fetching products:", err);
            }
        };

        fetchAllProducts();
    }, [user]);

    if (!user) {
        return <div className="p-4 text-xl text-center">Please log in to view products</div>;
    }
    const messages = [
        "UNLOCK FRESH DEALS THIS SEASON | PREMIUM QUALITY YOU CAN TRUST | FREE DELIVERY ON ALL ORDERS | SHOP NOW & SAVE BIG",
        "STYLE THAT SPEAKS | NEW COLLECTION JUST DROPPED | EXCLUSIVE DISCOUNTS FOR LIMITED TIME | DON’T MISS OUT",
        "FASHION THAT FITS YOUR LIFESTYLE | TRENDING OUTFITS OF 2025 | UP TO 70% OFF ON TOP BRANDS | GRAB YOUR STYLE TODAY",
        "PREMIUM CLOTHING FOR EVERYONE | 1 MILLION+ HAPPY CUSTOMERS | SALE LIVE NOW | SHOP SMART, LOOK SHARP",
        "BIG SEASONAL SALE | BESTSELLERS BACK IN STOCK | FREE RETURNS & EASY EXCHANGE | YOUR STYLE, OUR PRIORITY",
        "ELEVATE YOUR WARDROBE | NEW ARRIVALS DROPPING DAILY | FLASH DEALS EVERY HOUR | SHOP BEFORE IT’S GONE",
        "QUALITY THAT LASTS | TRENDY. COMFORTABLE. AFFORDABLE. | FREE SHIPPING ACROSS INDIA | LIMITED STOCK REMAINING",
        "SALE IS LIVE | UNMATCHED COMFORT & STYLE | SPECIAL FESTIVE OFFERS | GRAB THE BEST DEALS NOW",
        "UPGRADE YOUR STYLE GAME | TOP PICKS OF THE WEEK | MASSIVE PRICE DROPS | SHOP BEFORE PRICES GO UP",
        "NEW SEASON, NEW STYLE | DEALS STARTING AT JUST ₹199 | LUXURY QUALITY AT BEST PRICES | SHOP THE LOOK"
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % messages.length);
        }, 4000); // 4 seconds per message

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='bg-white/95'>
            <Navbar />

            {/* Carousel */}
            <div className='h-[30%] mt-2 bg-white/95'>
                <MainCarousel />
            </div>
            <div className="w-full bg-black text-white py-2 text-center font-semibold text-sm tracking-wide overflow-hidden">
                <div
                    key={index}
                    className="animate-fade"
                >
                    {messages[index]}
                </div>
            </div>
            {/* Main Category Grid */}
            <div className='flex justify-center items-center'>
                <CategoryCardGrid
                    products={[
                        ...menShirt, ...menTshirt, ...menCasualShirt, ...menFormalShirt, ...menPolo,
                        ...menPant, ...menJeans, ...menTrousers, ...menShorts, ...menCoat,
                        ...menBlazer, ...menHoodie,

                        ...womenTop, ...womenShirt, ...womenKurti, ...womenKurtaSet,
                        ...womenSaree, ...womenLehenga, ...womenDress, ...womenGown,
                        ...womenTshirt, ...womenJeans, ...womenPant, ...womenSkirt,
                        ...womenEthnic, ...womenWinter,

                        ...kidsTshirt, ...kidsShirt, ...kidsFrock, ...kidsShorts,
                        ...kidsPant, ...kidsEthnic, ...kidsHoodie, ...kidsWinter
                    ]}
                />
            </div>

            {/* Category Sections */}
            <div className="p-4 space-y-12 bg-white/95">

                {/* MEN */}
                <CategorySection title="Men Shirts" products={menShirt} />
                <CategorySection title="Men T-Shirts" products={menTshirt} />
                <CategorySection title="Men Casual Shirts" products={menCasualShirt} />
                <CategorySection title="Men Formal Shirts" products={menFormalShirt} />
                <CategorySection title="Men Polo T-Shirts" products={menPolo} />
                <CategorySection title="Men Pants" products={menPant} />
                <CategorySection title="Men Jeans" products={menJeans} />
                <CategorySection title="Men Trousers" products={menTrousers} />
                <CategorySection title="Men Shorts" products={menShorts} />
                <CategorySection title="Men Coats" products={menCoat} />
                <CategorySection title="Men Blazers" products={menBlazer} />
                <CategorySection title="Men Hoodies" products={menHoodie} />

                {/* WOMEN */}
                <CategorySection title="Women Tops" products={womenTop} />
                <CategorySection title="Women Shirts" products={womenShirt} />
                <CategorySection title="Women Kurti" products={womenKurti} />
                <CategorySection title="Women Kurta Sets" products={womenKurtaSet} />
                <CategorySection title="Women Saree" products={womenSaree} />
                <CategorySection title="Women Lehenga" products={womenLehenga} />
                <CategorySection title="Women Dresses" products={womenDress} />
                <CategorySection title="Women Gowns" products={womenGown} />
                <CategorySection title="Women T-Shirts" products={womenTshirt} />
                <CategorySection title="Women Jeans" products={womenJeans} />
                <CategorySection title="Women Pants" products={womenPant} />
                <CategorySection title="Women Skirts" products={womenSkirt} />
                <CategorySection title="Women Ethnic Wear" products={womenEthnic} />
                <CategorySection title="Women Winter Wear" products={womenWinter} />

                {/* KIDS */}
                <CategorySection title="Kids T-Shirts" products={kidsTshirt} />
                <CategorySection title="Kids Shirts" products={kidsShirt} />
                <CategorySection title="Kids Frocks" products={kidsFrock} />
                <CategorySection title="Kids Shorts" products={kidsShorts} />
                <CategorySection title="Kids Pants" products={kidsPant} />
                <CategorySection title="Kids Ethnic Wear" products={kidsEthnic} />
                <CategorySection title="Kids Hoodies" products={kidsHoodie} />
                <CategorySection title="Kids Winter Wear" products={kidsWinter} />

            </div>


            <Chatbot />
            <Footer />
        </div>
    );
}

// Category Section Component
function CategorySection({ title, products }) {
    if (products.length === 0) return null;

    return (
        <section>
            <h2 className="text-2xl text-black font-bold mb-4">{title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </section>
    );
}
