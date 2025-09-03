import { TailwindColor } from '@/lib';
import { Banknote, ChartNoAxesCombined, FileText, Milestone, Scale, UsersRound } from 'lucide-react';

export type OpenDataType = {
   id: string;
   title: string;
   categoryId: string;
   groupTitle: string;
   link: string;
   fileType: string|string[];
};
export type OpenDataTypeCategoryType = {
   id: string;
   title: string;
   name: string;
   openDataIdList: string[];
   color ?:TailwindColor

};

export type OpenDataTypeNormalized = {
   openData: Record<string, OpenDataType>;
   categories: Record<string, OpenDataTypeCategoryType>;
   categoriesIdList: string[];
};
export type OpenDataTypeCategoryName = keyof typeof OpenDataTypeCategoryName;

export const OpenDataTypeCategoryName = {
   Amar: ChartNoAxesCombined,
   HumanResources:UsersRound,
   Mali:Banknote,
   Asnad:FileText,
   Rahbord:Milestone,
   Ghavanin:Scale
};
