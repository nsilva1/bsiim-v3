"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function AppBreadcrumbs() {
    const pathname = usePathname()

    // Don't render on home page
    if (pathname === '/') {
        return null
    }

    // Remove any query parameters
    const getPathWithoutQuery = (path: string) => path.split('?')[0];

    const paths = getPathWithoutQuery(pathname)
        .split('/')
        .filter((path) => path !== '');

    return (
        <div className="bg-slate-50 border-b border-border/40 z-40 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        {paths.map((path, index) => {
                            const href = `/${paths.slice(0, index + 1).join('/')}`
                            const isLast = index === paths.length - 1

                            // Format string (e.g., 'sg-business-model' -> 'Sg Business Model')
                            const title = path
                                .split('-')
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .join(' ')

                            return (
                                <React.Fragment key={path}>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        {isLast ? (
                                            <BreadcrumbPage className="font-semibold text-primary">{title}</BreadcrumbPage>
                                        ) : (
                                            <BreadcrumbLink asChild>
                                                <Link href={href}>{title}</Link>
                                            </BreadcrumbLink>
                                        )}
                                    </BreadcrumbItem>
                                </React.Fragment>
                            )
                        })}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </div>
    )
}
