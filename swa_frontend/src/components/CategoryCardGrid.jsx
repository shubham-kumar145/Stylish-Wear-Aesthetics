// // import { useMemo, useState } from 'react';

// // export default function CategoryCardGrid({ products }) {
// //     const categoryMap = useMemo(() => {
// //         const map = {};
// //         for (const p of products) {
// //             const category = p.category?.toLowerCase() || "uncategorized";
// //             if (!map[category]) map[category] = [];
// //             map[category].push(p.name || "Unnamed Product");
// //         }
// //         return map;
// //     }, [products]);

// //     const categories = Object.keys(categoryMap);

// //     const cards = [];
// //     for (let i = 0; i < 8; i++) {
// //         const category = categories[i % categories.length];
// //         cards.push({ category, subItems: categoryMap[category] || [] });
// //     }

// //     return (
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-6">
// //             {cards.map((card, idx) => (
// //                 <CategoryCard
// //                     key={`${card.category}-${idx}`}
// //                     category={card.category}
// //                     subItems={Array.isArray(card.subItems) ? card.subItems : []}
// //                 />
// //             ))}
// //         </div>
// //     );
// // }

// // function CategoryCard({ category = "Unknown", subItems = [] }) {
// //     const [selected, setSelected] = useState("");

// //     return (
// //         <div className="bg-gray-50 p-4 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300 w-full">
// //             <label className="block text-base md:text-lg font-semibold text-gray-800 capitalize mb-2">
// //                 {category}
// //             </label>
// //             <select
// //                 value={selected}
// //                 onChange={(e) => setSelected(e.target.value)}
// //                 className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //             >
// //                 <option value="" disabled>
// //                     Select a product
// //                 </option>
// //                 {subItems.map((item, index) => (
// //                     <option key={`${item}-${index}`} value={item}>
// //                         {item}
// //                     </option>
// //                 ))}
// //             </select>
// //         </div>
// //     );
// // }
// import { useState } from "react";

// export default function CategoryCardGrid() {
//   const [activeMenu, setActiveMenu] = useState(null);

//   const MEN = [
//     "men shirt",
//     "men t-shirt",
//     "men casual shirt",
//     "men formal shirt",
//     "men polo t-shirt",
//     "men pant",
//     "men jeans",
//     "men trousers",
//     "men shorts",
//     "men coat",
//     "men blazer",
//     "men hoodie",
//   ];

//   const WOMEN = [
//     "women top",
//     "women shirt",
//     "women kurti",
//     "women kurta set",
//     "women saree",
//     "women lehenga",
//     "women dress",
//     "women gown",
//     "women t-shirt",
//     "women jeans",
//     "women pant",
//     "women skirt",
//     "women ethnic wear",
//     "women winter wear",
//   ];

//   const KIDS = [
//     "kids t-shirt",
//     "kids shirt",
//     "kids frock",
//     "kids shorts",
//     "kids pant",
//     "kids ethnic wear",
//     "kids hoodie",
//     "kids winter wear",
//   ];

//   const MENU = {
//     MEN: MEN,
//     WOMEN: WOMEN,
//     KIDS: KIDS,
//   };

//   return (
//     <div className="w-full bg-white shadow-md relative border-b">

//       {/* TOP BAR */}
//       <div className="flex gap-10 px-10 py-4 font-semibold text-gray-800 text-lg">

//         {["MEN", "WOMEN", "KIDS"].map((item) => (
//           <div
//             key={item}
//             onMouseEnter={() => setActiveMenu(item)}
//             onMouseLeave={() => setActiveMenu(null)}
//             className="relative cursor-pointer hover:text-pink-600"
//           >
//             {item}

//             {/* DROPDOWN */}
//             {activeMenu === item && (
//               <MegaMenu
//                 title={item}
//                 list={MENU[item]}
//               />
//             )}
//           </div>
//         ))}

//       </div>
//     </div>
//   );
// }

// function MegaMenu({ title, list }) {
//   // Split into 3 equal columns like Myntra
//   const chunkSize = Math.ceil(list.length / 3);
//   const columns = [
//     list.slice(0, chunkSize),
//     list.slice(chunkSize, chunkSize * 2),
//     list.slice(chunkSize * 2),
//   ];

//   return (
//     <div
//       className="absolute left-0 top-full w-full bg-white shadow-xl p-8 grid grid-cols-3 gap-10 z-50"
//       onMouseLeave={(e) => e.stopPropagation()}
//     >
//       {columns.map((col, idx) => (
//         <div key={idx}>
//           <h3 className="font-bold text-gray-700 mb-3">{title} Categories</h3>
//           <ul className="space-y-2">
//             {col.map((c, i) => (
//               <li
//                 key={i}
//                 className="capitalize text-gray-700 hover:text-pink-600 cursor-pointer"
//               >
//                 {c}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }


import { useState } from "react";

export default function CategoryCardGrid() {
  const [activeMenu, setActiveMenu] = useState(null);

  const MEN = [
    "men shirt", "men t-shirt", "men casual shirt", "men formal shirt",
    "men polo t-shirt", "men pant", "men jeans", "men trousers", 
    "men shorts", "men coat", "men blazer", "men hoodie",
  ];

  const WOMEN = [
    "women top", "women shirt", "women kurti", "women kurta set",
    "women saree", "women lehenga", "women dress", "women gown",
    "women t-shirt", "women jeans", "women pant", "women skirt",
    "women ethnic wear", "women winter wear",
  ];

  const KIDS = [
    "kids t-shirt", "kids shirt", "kids frock", "kids shorts",
    "kids pant", "kids ethnic wear", "kids hoodie", "kids winter wear",
  ];

  const MENU = { MEN, WOMEN, KIDS };

  return (
    <div className="w-full bg-white shadow-md relative border-b">

      {/* TOP BAR */}
      <div className="flex gap-10 px-10 py-4 font-semibold text-gray-800 text-lg">

        {["MEN", "WOMEN", "KIDS"].map((item) => (
          <div
            key={item}
            onMouseEnter={() => setActiveMenu(item)}
            onMouseLeave={() => setActiveMenu(null)}
            className="relative cursor-pointer hover:text-pink-600"
          >
            {item}

            {activeMenu === item && (
              <MegaMenu
                title={item}
                list={MENU[item]}
              />
            )}
          </div>
        ))}

      </div>
    </div>
  );
}

function MegaMenu({ title, list }) {
  const chunkSize = Math.ceil(list.length / 3);
  const columns = [
    list.slice(0, chunkSize),
    list.slice(chunkSize, chunkSize * 2),
    list.slice(chunkSize * 2),
  ];

  return (
    <div
      className="
        absolute left-0 top-full 
        w-[750px]      /* BIGGER WIDTH – FIXES OVERLAP */
        bg-white 
        shadow-xl 
        p-8 
        grid 
        grid-cols-3 
        gap-10        /* SPACE BETWEEN COLUMNS */
        z-50
      "
    >
      {columns.map((col, idx) => (
        <div key={idx} className="w-full">

          <h3 className="font-bold text-gray-800 mb-3 text-lg">
            {title} Categories
          </h3>

          <ul className="space-y-2">
            {col.map((c, i) => (
              <li
                key={i}
                className="capitalize text-gray-700 hover:text-pink-600 cursor-pointer text-sm"
              >
                {c}
              </li>
            ))}
          </ul>

        </div>
      ))}
    </div>
  );
}
