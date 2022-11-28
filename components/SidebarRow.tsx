import React, { SVGProps } from 'react'
interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: string
    onClick?: () => {}

}
function SidebarRow({Icon,title,onClick
}: Props) {
  return (
    <div onClick={() => onClick?.()} className=' group flex items-center space-x-2 px-4 py-3 rounded-full cursor-pointer transition-all duration-200 max-w-fit hover:bg-gray-100'>
        <Icon className="h-6 w-6" />
        <p className=' hidden md:inline-flex group-hover:text-twitter'>{title}</p>
    </div>
  )
}

export default SidebarRow