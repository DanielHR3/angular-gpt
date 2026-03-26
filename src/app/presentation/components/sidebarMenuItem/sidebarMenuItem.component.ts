import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component( {
  selector: 'app-sidebar-menu-item',
  standalone: true,
  imports: [
    RouterModule,
  ],
  template: `
    <a
      [routerLink]="path"
      routerLinkActive="bg-white/5 border-white/10 shadow-lg"
      class="flex items-center group hover:bg-white/[0.03] border border-transparent hover:border-white/5 rounded-2xl p-4 transition-all duration-300 ease-out"
    >
      <div class="w-10 h-10 rounded-xl bg-zinc-800/50 flex items-center justify-center mr-4 group-hover:bg-violet-500/10 transition-colors duration-300">
        <i class="{{ icon }} text-xl text-zinc-400 group-hover:text-violet-400 transition-colors duration-300"></i>
      </div>
      <div class="flex flex-col flex-grow overflow-hidden">
        <span class="text-zinc-200 text-sm font-semibold tracking-tight transition-colors duration-300 group-hover:text-white">{{ title }}</span>
        <span class="text-zinc-500 text-[11px] leading-tight truncate transition-colors duration-300 group-hover:text-zinc-400">{{ description }}</span>
      </div>
      <i class="fa-solid fa-chevron-right text-[10px] text-zinc-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></i>
    </a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
} )
export class SidebarMenuItemComponent {

  @Input({ required: true }) icon!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) path!: string;


}
