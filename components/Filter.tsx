'use client';

import { useState } from "react";

export default function Filter({ tags, selectedTags, onTagClick }: { tags: string[], selectedTags: string[], onTagClick: (tag: string) => void }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="">
            <div className={`${isExpanded ? "unhide-tags" : "hide-tags"}`}>
                <div className={`flex gap-2 ${isExpanded ? "flex-wrap overflow-y-auto max-h-[60vh]" : ""}`}>
                    {tags.map((tag) => {
                        const isSelected = selectedTags.includes(tag);

                        return (
                            <button
                                key={tag}
                                type="button"
                                aria-pressed={isSelected}
                                onClick={() => onTagClick(tag)}
                                className={`shrink-0 uppercase font-mono text-xs px-4 py-2 border-2 ${isSelected ? "bg-black text-white" : "bg-white"}`}
                            >
                                {tag}
                            </button>
                        )
                    })}
                </div>
                {isExpanded && 
                    <div className="flex gap-4 mt-4 justify-between">
                        <button className="btn-secondary text-xs uppercase" onClick={() => setIsExpanded(false)}>Cancel</button>
                        <button className="btn-secondary text-xs uppercase">Reset</button>
                        <button className="btn-secondary text-xs uppercase">Filter</button>
                    </div>
                }
            </div>
            {tags.length > 0 && (
                <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-label={isExpanded ? "Collapse tags" : "Expand tags"}
                    onClick={() => setIsExpanded((expanded) => !expanded)}
                    className="mt-2 flex items-center gap-1 font-mono text-xs uppercase underline underline-offset-4"
                >
                    {isExpanded ? "Show less" : "Show all tags"}
                </button>
            )}
        </div>
    )
}