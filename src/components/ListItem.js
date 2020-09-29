import React from "react"
import { Link } from "gatsby"
import { DENOMINATION } from "../../providers/inventoryProvider"
import Image from "./Image"

const ListItem = ({ link, title, imageSrc, price }) => (
  <div
    className="
    w-100
    md:w-1/2
    lg:w-1/4
    p1 sm:p-2
  "
  >
    <Link to={`/${link}`}>
      <div className="h-72 flex justify-center items-center rounded-md">
        <div className="flex flex-column justify-center items-center">
          <Image alt={title} src={imageSrc} className="w-4/5" />
        </div>
      </div>
    </Link>
    <div className="mt-2 mb-2">
      <p className="text-sm text-gray-700 font-semibold mt-2 mb-1">{`${price}${DENOMINATION}`}</p>
      <p className="text-xs mb-0">{title}</p>
    </div>
  </div>
)

export default ListItem
