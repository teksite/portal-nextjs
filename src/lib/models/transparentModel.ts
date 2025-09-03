import { TailwindColor } from '@/lib';
import { Wallet, ChartNoAxesCombined, FileText, Milestone, Scale, UsersRound } from 'lucide-react';

export type TransparencyType = {
   id: string;
   title: string;
   code?: string;
   categoryId: string;
   groupTitle: string;
   link: string;
};
export type TransparencyCategoryType = {
   id: string;
   title: string;
   name: string;
   icon?: string;
   transparencyIdList: string[];
   color ?:TailwindColor

};

export type TransparencyNormalized = {
   transparencies: Record<string, TransparencyType>;
   categories: Record<string, TransparencyCategoryType>;
   categoryIdList: string[];
};
export type TransparencyCategoryName = keyof typeof TransparencyCategoryName;

export const TransparencyCategoryName = {
   Amar: ChartNoAxesCombined,
   HumanResources:UsersRound,
   Mali:Wallet,
   Asnad:FileText,
   Rahbord:Milestone,
   Ghavanin:Scale



};
