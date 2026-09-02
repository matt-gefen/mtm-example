'use client'

import * as React from 'react'
import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleDashedIcon,
} from 'lucide-react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Link } from '@tanstack/react-router'
import {
  navbarData,
  type NavBarComponent,
  type NavBarComponentPrimative,
} from './navbar'

export default function NavBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Recognition</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {navbarData.recognition.map((component: NavBarComponent) => {
                if (component.components) {
                  return (
                    <li className="row-span-3 p-0">
                      <NavigationMenuLink className={'p-0'}>
                        <NavigationMenu className="">
                          <NavigationMenuList className="relative">
                            <NavigationMenuItem className={''}>
                              <NavigationMenuTrigger className="p-3">
                                {component.title}
                              </NavigationMenuTrigger>
                              <NavigationMenuContent>
                                {component.components.map(
                                  (subComponent: NavBarComponentPrimative) => {
                                    return (
                                      <ListItem
                                        key={subComponent.title}
                                        title={subComponent.title}
                                        href={subComponent.href}
                                      >
                                        {subComponent.description}
                                      </ListItem>
                                    )
                                  },
                                )}
                              </NavigationMenuContent>
                            </NavigationMenuItem>
                          </NavigationMenuList>
                        </NavigationMenu>
                      </NavigationMenuLink>
                    </li>
                  )
                  //                   <li className="row-span-3">
                  //   <NavigationMenuLink asChild>

                  //     {/* This is the nested menu */}

                  //     <NavigationMenu className="flex flex-col top-0 place-content-start content-start">
                  //       <NavigationMenuList className="relative">
                  //         <NavigationMenuItem>
                  //           <NavigationMenuTrigger>shadcn</NavigationMenuTrigger>
                  //           <NavigationMenuContent>
                  //             <div> hi</div>
                  //           </NavigationMenuContent>
                  //         </NavigationMenuItem>
                  //       </NavigationMenuList>
                  //     </NavigationMenu>

                  //   </NavigationMenuLink>
                  // </li>
                } else {
                  return (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  )
                }
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {navbarData.why_mtm.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px]">
              <li>
                <NavigationMenuLink
                  render={
                    <Link to="." className="flex-row items-center gap-2">
                      <CircleAlertIcon />
                      Backlog
                    </Link>
                  }
                />
                <NavigationMenuLink
                  render={
                    <Link to="." className="flex-row items-center gap-2">
                      <CircleDashedIcon />
                      To Do
                    </Link>
                  }
                />
                <NavigationMenuLink
                  render={
                    <Link to="." className="flex-row items-center gap-2">
                      <CircleCheckIcon />
                      Done
                    </Link>
                  }
                />
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link to={href}>
            <div className="flex flex-col gap-1 text-sm">
              <div className="leading-none font-medium">{title}</div>
              <div className="line-clamp-2 text-muted-foreground">
                {children}
              </div>
            </div>
          </Link>
        }
      />
    </li>
  )
}
