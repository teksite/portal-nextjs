import { OpenDataTypeNormalized } from '@/lib';

export const mockNormalizedOpenData: OpenDataTypeNormalized = {
   openData: {
      '1': {
         id: '1',
         title: 'لیست امکان اقامتی',
         categoryId: '1',
         groupTitle: 'امکان',
         link: '#',
         fileType: 'excel'
      },
      '2': {
         id: '2',
         title: 'لیست تفرجگاه‌های جنگلی',
         categoryId: '1',
         groupTitle: 'امکان',
         link: '#',
         fileType: ['pdf', 'excel']
      },
      '3': {
         id: '3',
         title: 'تلفیقی',
         categoryId: '1',
         groupTitle: 'آمار و اطلاعات',
         link: '#',
         fileType: ['pdf', 'excel']
      },

      '4': {
         id: '4',
         title: 'لیست هتل‌ها',
         categoryId: '1',
         groupTitle: 'امکان',
         link: '#',
         fileType: 'pdf'
      },
      '5': {
         id: '5',
         title: 'لیست مراکز خرید',
         categoryId: '1',
         groupTitle: 'امکان',
         link: '#',
         fileType: ['excel', 'csv']
      },
      '6': {
         id: '6',
         title: 'گزارش ورود گردشگران',
         categoryId: '2',
         groupTitle: 'آمار و اطلاعات',
         link: '#',
         fileType: 'excel'
      },
      '7': {
         id: '7',
         title: 'نقشه‌های توریستی',
         categoryId: '2',
         groupTitle: 'آمار و اطلاعات',
         link: '#',
         fileType: ['pdf']
      },
      '8': {
         id: '8',
         title: 'آمار جمعیتی',
         categoryId: '2',
         groupTitle: 'آمار و اطلاعات',
         link: '#',
         fileType: ['pdf', 'excel']
      },
      '9': {
         id: '9',
         title: 'لیست رستوران‌ها',
         categoryId: '1',
         groupTitle: 'امکان',
         link: '#',
         fileType: 'excel'
      },
      '10': {
         id: '10',
         title: 'لیست حمل و نقل عمومی',
         categoryId: '1',
         groupTitle: 'امکان',
         link: '#',
         fileType: ['pdf']
      },
      '11': {
         id: '11',
         title: 'گزارش درآمد گردشگری',
         categoryId: '2',
         groupTitle: 'آمار و اطلاعات',
         link: '#',
         fileType: ['excel']
      },
      '12': {
         id: '12',
         title: 'لیست تورهای فعال',
         categoryId: '3',
         groupTitle: 'خدمات',
         link: '#',
         fileType: ['pdf', 'excel']
      },
      '13': {
         id: '13',
         title: 'لیست مراکز فرهنگی',
         categoryId: '3',
         groupTitle: 'خدمات',
         link: '#',
         fileType: 'pdf'
      },
      '14': {
         id: '14',
         title: 'اطلاعات اقلیمی',
         categoryId: '2',
         groupTitle: 'آمار و اطلاعات',
         link: '#',
         fileType: ['excel']
      },
      '15': {
         id: '15',
         title: 'لیست بیمارستان‌ها',
         categoryId: '3',
         groupTitle: 'خدمات',
         link: '#',
         fileType: ['pdf', 'excel']
      },
      '16': {
         id: '16',
         title: 'آمار اشتغال در گردشگری',
         categoryId: '2',
         groupTitle: 'آمار و اطلاعات',
         link: '#',
         fileType: ['csv']
      },
      '17': {
         id: '17',
         title: 'مراکز ورزشی',
         categoryId: '3',
         groupTitle: 'خدمات',
         link: '#',
         fileType: 'pdf'
      },
      '18': {
         id: '18',
         title: 'لیست نمایشگاه‌ها',
         categoryId: '3',
         groupTitle: 'خدمات',
         link: '#',
         fileType: ['pdf', 'excel']
      },
      '19': {
         id: '19',
         title: 'آمار بازدیدکنندگان سالانه',
         categoryId: '2',
         groupTitle: 'آمار و اطلاعات',
         link: '#',
         fileType: ['excel', 'pdf']
      },
      '20': {
         id: '20',
         title: 'لیست اقامتگاه‌های بوم‌گردی',
         categoryId: '1',
         groupTitle: 'امکان',
         link: '#',
         fileType: 'pdf'
      },
      '21': {
         id: '21',
         title: 'آمار سرمایه‌گذاری خارجی',
         categoryId: '2',
         groupTitle: 'آمار و اطلاعات',
         link: '#',
         fileType: ['excel']
      },
      '22': {
         id: '22',
         title: 'لیست مراکز آموزشی گردشگری',
         categoryId: '3',
         groupTitle: 'خدمات',
         link: '#',
         fileType: 'pdf'
      },
      '23': {
         id: '23',
         title: 'مراکز مذهبی و زیارتی',
         categoryId: '1',
         groupTitle: 'امکان',
         link: '#',
         fileType: ['pdf', 'excel']
      }
   },

   categories: {
      '1': {
         id: '1',
         title: 'اماکن',
         openDataIdList: ['1', '2', '3', '4', '5', '9', '10', '20', '23'],
         name: 'amaken',
         color: 'amber'
      },
      '2': {
         id: '2',
         title: 'آمار و اطلاعات',
         openDataIdList: [ '6', '7', '8', '11', '14', '16', '19', '21'],
         name: 'amar',
         color: 'blue'
      },
      '3': {
         id: '3',
         title: 'خدمات',
         openDataIdList: ['12', '13', '15', '17', '18', '22'],
         name: 'Services',
         color: 'green'
      }
   },

   categoriesIdList: ['1', '2', '3']
};
