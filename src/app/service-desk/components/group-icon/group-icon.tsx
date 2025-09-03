import * as React from 'react';
import { SVGProps } from 'react';



import { LicenseGroupName, TransparencyCategoryName } from '@/lib';
import { IconFileCertificate, TablerIcon } from '@tabler/icons-react';



import {
   Wallet,
   BookOpenText,
   ChartNoAxesCombined,
   FileText,
   Film,
   Gamepad2,
   GraduationCap,
   Image,
   Landmark,
   LucideIcon,
   Milestone,
   MonitorSmartphone,
   Newspaper,
   Scale,
   ToolCase,
   Users,
   UsersRound
} from 'lucide-react';





export type GroupIconProps = {
   name: LicenseGroupName|TransparencyCategoryName;
   size?: number;
   color?: string;
   strokeWidth?: number;
} & Omit<SVGProps<SVGSVGElement>, 'name' | 'width' | 'height'>;

export function GroupIcon({ name, size = 48, color = 'currentColor', strokeWidth = 1.5, ...svgProps }: GroupIconProps) {
   const Comp = allIcons[name];

   return isTablerIcon(Comp) ? (
      <Comp size={size} color={color} strokeWidth={strokeWidth} {...(svgProps as any)} />
   ) : (
      <Comp size={size} color={color} strokeWidth={strokeWidth} {...svgProps} />
   );
}

function isTablerIcon(icon: TablerIcon | LucideIcon): icon is TablerIcon {
   return icon === IconFileCertificate;
}

const allIcons: Record<LicenseGroupName|TransparencyCategoryName, TablerIcon | LucideIcon> = {
   Amoozesh: GraduationCap,
   Bazi: Gamepad2,
   Chap: BookOpenText,
   Film: Film,
   Honar: Image,
   Majazi: MonitorSmartphone,
   Omoomi: Users,
   Moarefiname: IconFileCertificate,
   Moassesat: Landmark,
   Resane: Newspaper,
   Sayer: ToolCase,
   Amar: ChartNoAxesCombined,
   HumanResources:UsersRound,
   Mali:Wallet,
   Asnad:FileText,
   Rahbord:Milestone,
   Ghavanin:Scale

};
