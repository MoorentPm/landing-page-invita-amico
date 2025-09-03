import React from 'react';
import Link from 'next/link'; // Importa il Link da Next.js
import { ChevronLeft, ChevronRight, FileText, BarChart, Building } from 'lucide-react';
import { createPageUrl } from '@/utils';

export default function Pagination({ currentPage }) {
    const pages = [
        { name: 'Career', title: 'Career Trajectory', icon: FileText },
        { name: 'SWOT', title: 'SWOT Analysis', icon: BarChart },
        { name: 'Nemesis', title: 'Nemesis Brand Audit', icon: Building }
    ];

    const currentPageIndex = pages.findIndex(p => p.name.toLowerCase() === currentPage.toLowerCase());
    const prevPage = currentPageIndex > 0 ? pages[currentPageIndex - 1] : null;
    const nextPage = currentPageIndex < pages.length - 1 ? pages[currentPageIndex + 1] : null;

    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 print:hidden">
            <div className="glass-card rounded-2xl p-3 flex items-center gap-3 border border-white border-opacity-10 shadow-2xl">
                
                {/* Previous Page */}
                {prevPage && (
                    <Link href={createPageUrl(prevPage.name)} scroll={true}>
                        <a className="flex items-center gap-3 px-4 py-2 bg-white bg-opacity-5 rounded-xl hover:bg-opacity-15 transition-all duration-300 group">
                            <ChevronLeft className="w-4 h-4 text-white text-opacity-60 group-hover:text-opacity-100 transition-opacity" />
                            <div className="text-left">
                                <span className="text-white text-sm font-medium">{prevPage.title}</span>
                            </div>
                        </a>
                    </Link>
                )}

                {/* Page Indicators */}
                <div className="flex items-center gap-2 px-3">
                    {pages.map((page) => {
                        const isActive = page.name.toLowerCase() === currentPage.toLowerCase();
                        return (
                            <Link key={page.name} href={createPageUrl(page.name)} scroll={true}>
                                <a
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${isActive ? 'bg-white' : 'bg-white bg-opacity-30 hover:bg-opacity-50'}`}
                                    title={page.title}
                                />
                            </Link>
                        );
                    })}
                </div>

                {/* Next Page */}
                {nextPage && (
                    <Link href={createPageUrl(nextPage.name)} scroll={true}>
                       <a className="flex items-center gap-3 px-4 py-2 bg-white bg-opacity-5 rounded-xl hover:bg-opacity-15 transition-all duration-300 group">
                            <div className="text-right">
                                <span className="text-white text-sm font-medium">{nextPage.title}</span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-white text-opacity-60 group-hover:text-opacity-100 transition-opacity" />
                        </a>
                    </Link>
                )}

            </div>
        </div>
    );
}

