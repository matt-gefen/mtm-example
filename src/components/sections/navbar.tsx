'use client'

import * as React from 'react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu'

import { Link } from '@tanstack/react-router'
import {
  centralNavData,
  rightNavData,
  type NavBarComponent,
  type NavBarComponentPrimative,
  type NavBarSection,
} from '../../config/navbar'
import ListItem from '../ui/list-item'

export default function NavBar() {
  const formatNavItems = (navBarSections: NavBarSection[]) => {
    let navItems: React.ReactElement[] = []
    Object.entries(navBarSections).forEach(([key, value]) => {
      let navItem: React.ReactElement
      if (value.components !== undefined) {
        navItem = (
          <NavigationMenuItem key={key}>
            <NavigationMenuTrigger>{value.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-100 gap-2 md:w-125 md:grid-cols-2 lg:w-150">
                {value.components.map((component: NavBarComponent) => {
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
                                    (
                                      subComponent: NavBarComponentPrimative,
                                    ) => {
                                      return (
                                        <ListItem
                                          key={subComponent.title}
                                          title={subComponent.title}
                                          href={subComponent.href ?? ''}
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
                  } else {
                    return (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href ?? ''}
                      >
                        {component.description}
                      </ListItem>
                    )
                  }
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        )
      } else {
        navItem = (
          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              render={<Link to=".">{value.title}</Link>}
            />
          </NavigationMenuItem>
        )
      }
      navItems.push(navItem)
    })
    return navItems
  }
  return (
    <NavigationMenu className="min-w-full justify-between">
      <NavigationMenuList className="flex-0">
        <div className="p-2">LOGO</div>
      </NavigationMenuList>
      <NavigationMenuList>
        <>{formatNavItems(centralNavData)}</>
      </NavigationMenuList>
      <NavigationMenuList className="flex-0">
        <>{formatNavItems(rightNavData)}</>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
