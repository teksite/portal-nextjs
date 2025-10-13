import {BasicTransparencyCategoryType, TransparencyCategoryWithGroupType} from "@/types";

export const mockLGetTransparencyCategories: Record<string, BasicTransparencyCategoryType> =
    {
        '1': {
            id: '1',
            title: 'آمار و اطلاعات',
        },
        '2': {
            id: '2',
            title: 'منابع انسانی',
        },
        '3': {
            id: '3',
            title: 'مالی',
        },
        '4': {
            id: '4',
            title: 'اسناد و لوایح',
        },
        '5': {
            id: '5',
            title: 'راهبرد و روال ها',
        },
        '6': {
            id: '6',
            title: 'قوانین',
        }
    };

export const mockLGetTransparencyCategoryWithGroup: Record<string, TransparencyCategoryWithGroupType> =
    {
    '1': {
        id: '1',
        title: 'آمار و اطلاعات',
        groups: {
            '1': { id: '1', title: 'بانک مجوزهای صادره' },
            '2': { id: '2', title: 'آمار و اطلاعات عملکردی' },
            '3': { id: '3', title: 'آمار ارائه خدمات دستگاه' },
            '4': { id: '4', title: 'پراکندگی صدور مجوزها' },
        }
    },
    '2': {
        id: '2',
        title: 'منابع انسانی',
        groups: {
            '5': { id: '5', title: 'مدیران سازمان' },
            '6': { id: '6', title: 'کمیته شفافیت' },
            '7': { id: '7', title: 'کارکنان' },
            '8': { id: '8', title: 'ساختار سازمانی' },
        }
    },
    '3': {
        id: '3',
        title: 'مالی',
        groups: {
            '9': { id: '9', title: 'معاملات و قراردادها' },
            '10': { id: '10', title: 'صورت های مالی و هزینه کرد سالانه' },
            '11': { id: '11', title: 'بودجه' },
            '12': { id: '12', title: 'مناقصات و مزایدات' },
            '13': { id: '13', title: 'فهرست اموال غیر منقول' },
        }
    },
    '4': {
        id: '4',
        title: 'اسناد و لوایح',
        groups: {
            '14': { id: '14', title: 'تفاهم نامه ها' },
            '15': { id: '15', title: 'لوایح پیشنهادی' },
            '16': { id: '16', title: 'اسناد پژوهشی' },
            '17': { id: '17', title: 'بانک صورت جلسات' },
        }
    },
    '5': {
        id: '5',
        title: 'راهبرد و روال ها',
        groups: {
            '18': { id: '18', title: 'برنامه های توسعه راهبردی' },
            '19': { id: '19', title: 'بیانیه حفظ حریم خصوصی' },
            '20': { id: '20', title: 'سند معماری سازمانی' },
            '21': { id: '21', title: 'استراتژی ها و سیاست ها' },
            '22': { id: '22', title: 'بیانیه راهبرد مشارکت دستگاه با مردم' },
        }
    },
    '6': {
        id: '6',
        title: 'قوانین',
        groups: {
            '23': { id: '23', title: 'قوانین و مقررات' }
        }
    }
};