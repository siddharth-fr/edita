import React from 'react';
import { cn } from '@/lib/utils';
import { File as FileIcon, List, Bookmark, Highlighter, StickyNote, MessageSquare, Paperclip, Search } from 'lucide-react';

interface LeftSidebarProps {
  sidebarOpen: boolean;
}

export function LeftSidebar({ sidebarOpen }: LeftSidebarProps) {
  return (
    <aside
      className={cn(
        "w-[220px] bg-white border-r border-[#E2E8F0] flex flex-col shrink-0 overflow-y-auto transition-all duration-300",
        !sidebarOpen && "-ml-[220px]"
      )}
    >
      <nav className="p-2.5 space-y-0.5">
        {[
          { icon: FileIcon, label: 'Pages', active: true },
          { icon: List, label: 'Outline' },
          { icon: Bookmark, label: 'Bookmarks' },
          { icon: Highlighter, label: 'Highlights' },
          { icon: StickyNote, label: 'Notes' },
          { icon: MessageSquare, label: 'Comments' },
          { icon: Paperclip, label: 'Attachments' },
          { icon: Search, label: 'Search' },
        ].map(({ icon: Icon, label, active }) => (
          <button
            key={label}
            className={cn(
              "w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-sm font-medium transition-all text-left",
              active
                ? "bg-[#ECFDF5] text-[#059669]"
                : "text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0F172A]"
            )}
          >
            <Icon className="w-[17px] h-[17px] shrink-0" />
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
