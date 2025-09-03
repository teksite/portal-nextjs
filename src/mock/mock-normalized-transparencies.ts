import { TransparencyNormalized } from '@/lib';

export const mockNormalizedTransparencies: TransparencyNormalized = {
   transparencies: {
      '1': {
         id: '1',
         title: 'بانک مجوزهای صادره',
         code: 'TR001',
         categoryId: '1',
         groupTitle: 'آمار و اطلاعات',
         link: '#'
      },
      '2': {
         id: '2',
         title: 'آمار ارائه خدمات دستگاه',
         code: 'TR002',
         categoryId: '1',
         groupTitle: 'آمار و اطلاعات',
         link: '#'
      },
      '3': {
         id: '3',
         title: 'پراکندگی صدور مجوزها',
         code: 'TR003',
         categoryId: '1',
         groupTitle: 'آمار و اطلاعات',
         link: '#'
      },
      '4': {
         id: '4',
         title: 'مدیران سازمان',
         code: 'TR004',
         categoryId: '2',
         groupTitle: 'منابع انسانی',
         link: '#'
      },
      '5': {
         id: '5',
         title: 'کمیته شفافیت',
         code: 'TR005',
         categoryId: '2',
         groupTitle: 'منابع انسانی',
         link: '#'
      },
      '6': {
         id: '6',
         title: 'کارکنان',
         code: 'TR006',
         categoryId: '2',
         groupTitle: 'منابع انسانی',
         link: '#'
      },
      '7': {
         id: '7',
         title: 'ساختار سازمانی',
         code: 'TR007',
         categoryId: '2',
         groupTitle: 'منابع انسانی',
         link: '#'
      },
      '8': {
         id: '8',
         title: 'معاملات و قراردادها',
         code: 'TR008',
         categoryId: '3',
         groupTitle: 'مالی',
         link: '#'
      },
      '9': {
         id: '9',
         title: 'صورت های مالی و هزینه کرد سالانه',
         code: 'TR009',
         categoryId: '3',
         groupTitle: 'مالی',
         link: '#'
      },
      '10': {
         id: '10',
         title: 'بودجه',
         code: 'TR010',
         categoryId: '3',
         groupTitle: 'مالی',
         link: '#'
      },
      '11': {
         id: '11',
         title: 'مناقصات و مزایدات',
         code: 'TR011',
         categoryId: '3',
         groupTitle: 'مالی',
         link: '#'
      },
      '12': {
         id: '12',
         title: 'فهرست اموال غیر منقول',
         code: 'TR012',
         categoryId: '3',
         groupTitle: 'مالی',
         link: '#'
      },
      '13': {
         id: '13',
         title: 'تفاهم نامه ها',
         code: 'TR013',
         categoryId: '4',
         groupTitle: 'اسناد و لوایح',
         link: '#'
      },
      '14': {
         id: '14',
         title: 'لوایح پیشنهادی',
         code: 'TR014',
         categoryId: '4',
         groupTitle: 'اسناد و لوایح',
         link: '#'
      },
      '15': {
         id: '15',
         title: 'اسناد پژوهشی',
         code: 'TR015',
         categoryId: '4',
         groupTitle: 'اسناد و لوایح',
         link: '#'
      },
      '16': {
         id: '16',
         title: 'بانک صورت جلسات',
         code: 'TR016',
         categoryId: '4',
         groupTitle: 'اسناد و لوایح',
         link: '#'
      },
      '17': {
         id: '17',
         title: 'برنامه های توسعه راهبردی',
         code: 'TR017',
         categoryId: '5',
         groupTitle: 'راهبرد و روال ها',
         link: '#'
      },
      '18': {
         id: '18',
         title: 'بیانیه حفظ حریم خصوصی',
         code: 'TR018',
         categoryId: '5',
         groupTitle: 'راهبرد و روال ها',
         link: '#'
      },
      '19': {
         id: '19',
         title: 'سند معماری سازمانی',
         code: 'TR019',
         categoryId: '5',
         groupTitle: 'راهبرد و روال ها',
         link: '#'
      },
      '20': {
         id: '20',
         title: 'استراتژی ها و سیاست ها',
         code: 'TR020',
         categoryId: '5',
         groupTitle: 'راهبرد و روال ها',
         link: '#'
      },
      '21': {
         id: '21',
         title: 'بیانیه راهبرد مشارکت دستگاه با مردم',
         code: 'TR021',
         categoryId: '5',
         groupTitle: 'راهبرد و روال ها',
         link: '#'
      },
      '22': {
         id: '22',
         title: 'قوانین و مقررات',
         code: 'TR022',
         categoryId: '6',
         groupTitle: 'قوانین',
         link: '#'
      }
   },
   categories: {
      '1': {
         id: '1',
         title: 'آمار و اطلاعات',
         transparencyIdList: ['1', '2', '3'],
         name: 'Amar',
         color: 'amber'
      },
      '2': {
         id: '2',
         title: 'منابع انسانی',
         transparencyIdList: ['4', '5', '6', '7'],
         name: 'HumanResources',
         color:'lime'
      },
      '3': {
         id: '3',
         title: 'مالی',
         transparencyIdList: ['8', '9', '10', '11', '12'],
         name: 'Mali',
         color:'sky'
      },
      '4': {
         id: '4',
         title: 'اسناد و لوایح',
         transparencyIdList: ['13', '14', '15', '16'],
         name: 'Asnad',
         color:'purple'
      },
      '5': {
         id: '5',
         title: 'راهبرد و روال ها',
         transparencyIdList: ['17', '18', '19', '20', '21'],
         name: 'Rahbord',
         color:'rose'
      },
      '6': {
         id: '6',
         title: 'قوانین',
         transparencyIdList: ['22'],
         name: 'Ghavanin',
         color:'stone'
      }
   },
   categoryIdList: ['1', '2', '3', '4', '5', '6']
};
