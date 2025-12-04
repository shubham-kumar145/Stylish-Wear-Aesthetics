import { useState } from 'react'

export default function CategoryList({ section }) {
  const [openItem, setOpenItem] = useState(null)

  const toggleItem = (itemName) => {
    setOpenItem(prev => (prev === itemName ? null : itemName))
  }

  return (
    <ul
      role="list"
      aria-labelledby={`${section.name}-heading`}
      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
    >
      {section.items.map((item) => (
        <li key={item.name}>
          <button
            onClick={() => toggleItem(item.name)}
            className="font-semibold text-left w-full text-gray-800 hover:text-indigo-600"
          >
            {item.name}
          </button>
          {openItem === item.name && (
            <ul className="mt-2 pl-4 space-y-1">
              {item.subItems?.map((subItem) => (
                <li key={subItem} className="text-gray-600 hover:text-black cursor-pointer">
                  {subItem}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}