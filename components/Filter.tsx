'use client';

import { useState } from "react";

interface FilterProps {
    tags: string[];
    selectedTags: string[];
    onTagClick: (tag: string) => void;
    onResetClick: () => void;
    searchQuery?: string;
    onSearchChange?: (query: string) => void;
    tagCounts?: Record<string, number>;
    totalCount?: number;
    filteredCount?: number;
}

export default function Filter({
    tags,
    selectedTags,
    onTagClick,
    onResetClick,
    searchQuery = "",
    onSearchChange,
    tagCounts = {},
    totalCount = 0,
    filteredCount = 0
}: FilterProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const techTags = tags.filter((t) => t.toLowerCase() !== "all");
    const isAllSelected = selectedTags.length === 0;

    return (
        <div className="w-full min-w-0 max-w-full flex flex-col gap-4">
            <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 bg-white border-3 border-black p-2 sm:p-3 shadow-[4px_4px_0_0_black] sm:shadow-[6px_6px_0_0_black] min-w-0 max-w-full">
                <div className="flex items-center gap-2 flex-1 min-w-0 px-1 sm:px-2">
                    <span className="font-mono font-bold text-base text-black select-none shrink-0">&gt;_</span>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => onSearchChange?.(e.target.value)}
                        placeholder="SEARCH STACK OR PROJECT..."
                        className="w-full min-w-0 bg-transparent font-mono text-xs sm:text-sm font-semibold uppercase placeholder:text-neutral-400 focus:outline-none"
                    />
                    {searchQuery && (
                        <button
                            type="button"
                            onClick={() => onSearchChange?.("")}
                            className="material-symbols-outlined text-sm font-bold p-1 hover:bg-neutral-200 transition-colors shrink-0"
                            title="Clear search"
                        >
                            close
                        </button>
                    )}
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-2 border-t-2 sm:border-t-0 sm:border-l-2 border-black pt-2 sm:pt-0 sm:pl-3 shrink-0">
                    <span className="font-mono text-[11px] sm:text-xs font-bold bg-[#00F0FF] text-black px-2.5 py-1 border-2 border-black whitespace-nowrap shadow-[2px_2px_0_0_black]">
                        {filteredCount} / {totalCount} PROJECTS
                    </span>
                    {(selectedTags.length > 0 || searchQuery) && (
                        <button
                            type="button"
                            onClick={() => {
                                onResetClick();
                                onSearchChange?.("");
                            }}
                            className="font-mono text-xs uppercase font-bold text-neutral-500 hover:text-black underline underline-offset-2 whitespace-nowrap px-1"
                        >
                            Reset
                        </button>
                    )}
                </div>
            </div>

            <div className="flex items-center gap-2 min-w-0 max-w-full w-full">
                <div className="flex-1 min-w-0 flex items-center gap-2 overflow-x-auto scrollbar-none py-1 px-0.5">
                    <button
                        type="button"
                        onClick={() => onResetClick()}
                        className={`shrink-0 uppercase font-mono text-xs px-3.5 py-1.5 border-2 border-black transition-all duration-200 ${
                            isAllSelected
                                ? "bg-black text-white font-bold shadow-[3px_3px_0_0_#00F0FF] -translate-x-0.5 -translate-y-0.5"
                                : "bg-white text-black hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_black]"
                        }`}
                    >
                        ALL ({totalCount})
                    </button>

                    {techTags.map((tag) => {
                        const isSelected = selectedTags.includes(tag);
                        const count = tagCounts[tag];

                        return (
                            <button
                                key={tag}
                                type="button"
                                aria-pressed={isSelected}
                                onClick={() => onTagClick(tag)}
                                className={`shrink-0 uppercase font-mono text-xs px-3 py-1.5 border-2 border-black transition-all duration-200 ${
                                    isSelected
                                        ? "bg-[#00F0FF] text-black font-bold shadow-[3px_3px_0_0_black] -translate-x-0.5 -translate-y-0.5"
                                        : "bg-white text-black hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_#00F0FF]"
                                }`}
                            >
                                {tag} {count !== undefined && <span className="opacity-60 text-[10px]">({count})</span>}
                            </button>
                        );
                    })}
                </div>

                <button
                    type="button"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`shrink-0 flex items-center gap-1 uppercase font-mono text-xs font-bold px-3 py-1.5 border-2 border-black transition-all duration-200 ${
                        isExpanded
                            ? "bg-black text-white shadow-[3px_3px_0_0_#00F0FF]"
                            : "bg-white text-black hover:bg-black hover:text-white shadow-[3px_3px_0_0_black]"
                    }`}
                >
                    <span className="hidden sm:inline">STACKS ({techTags.length})</span>
                    <span className="sm:hidden">STACKS</span>
                    <span className="material-symbols-outlined text-sm font-bold transition-transform duration-200">
                        {isExpanded ? "expand_less" : "expand_more"}
                    </span>
                </button>
            </div>

            {selectedTags.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="font-mono text-xs font-bold uppercase text-neutral-500 mr-1">Active:</span>
                    {selectedTags.map((tag) => (
                        <button
                            key={tag}
                            type="button"
                            onClick={() => onTagClick(tag)}
                            className="flex items-center gap-1 font-mono text-xs uppercase font-bold bg-black text-white px-2.5 py-1 border border-black hover:bg-red-600 transition-colors"
                        >
                            <span>{tag}</span>
                            <span className="material-symbols-outlined text-xs">close</span>
                        </button>
                    ))}
                    <button
                        type="button"
                        onClick={onResetClick}
                        className="font-mono text-xs uppercase font-bold text-neutral-600 hover:text-black underline underline-offset-4 ml-2"
                    >
                        Clear all
                    </button>
                </div>
            )}

            {isExpanded && (
                <div className="w-full bg-white border-3 border-black p-4 sm:p-6 shadow-[6px_6px_0_0_black] flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex items-center justify-between border-b-2 border-black pb-3">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg">category</span>
                            <h3 className="font-sora font-extrabold uppercase text-sm sm:text-base">
                                All Technologies &amp; Frameworks
                            </h3>
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsExpanded(false)}
                            className="font-mono text-xs uppercase font-bold px-2 py-1 border border-black hover:bg-black hover:text-white transition-colors"
                        >
                            Close ▴
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-2 max-h-72 overflow-y-auto p-[5px]">
                        {techTags.map((tag) => {
                            const isSelected = selectedTags.includes(tag);
                            const count = tagCounts[tag];

                            return (
                                <button
                                    key={tag}
                                    type="button"
                                    aria-pressed={isSelected}
                                    onClick={() => onTagClick(tag)}
                                    className={`uppercase font-mono text-xs px-3 py-1.5 border-2 border-black transition-all duration-150 ${
                                        isSelected
                                            ? "bg-[#00F0FF] text-black font-bold shadow-[3px_3px_0_0_black] -translate-x-0.5 -translate-y-0.5"
                                            : "bg-white text-black hover:shadow-[3px_3px_0_0_#00F0FF] hover:-translate-x-0.5 hover:-translate-y-0.5"
                                    }`}
                                >
                                    {tag} {count !== undefined && <span className="opacity-60 text-[10px]">({count})</span>}
                                </button>
                            );
                        })}
                    </div>

                    <div className="flex items-center justify-between border-t-2 border-black pt-3 mt-1">
                        <span className="font-mono text-xs text-neutral-500">
                            {selectedTags.length} tag{selectedTags.length === 1 ? "" : "s"} selected
                        </span>
                        <div className="flex items-center gap-2">
                            {selectedTags.length > 0 && (
                                <button
                                    type="button"
                                    onClick={onResetClick}
                                    className="font-mono text-xs uppercase font-bold px-4 py-2 border-2 border-black bg-white transition-colors"
                                >
                                    Reset
                                </button>
                            )}
                            <button
                                type="button"
                                onClick={() => setIsExpanded(false)}
                                className="font-mono text-xs uppercase font-bold px-5 py-2 border-2 border-black bg-black text-white hover:bg-[#00F0FF] hover:text-black transition-colors"
                            >
                                Done
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
