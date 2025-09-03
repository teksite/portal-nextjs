import Link from 'next/link';

const FooterNavBar = [
   {id:'1', label: 'سخنی با وزیر', href: '#' },
   {id:'2', label: 'درخواست ملاقات', href: '#' },
   {id:'3', label: 'ثبت شکایت', href: '#' },
   {id:'4', label: 'پشتیبانی فنی', href: '#' },
   {id:'5', label: 'ثبت مکاتبات', href: '#' },
   {id:'6', label: 'پرسش و مشاوره', href: '#' },
   {id:'7', label: 'درخواست اطلاعات', href: '#' },
   {id:'8', label: 'ارتباط با ما', href: '#' },
   {id:'9', label: 'راهنما', href: '#' },
   {id:'10', label: 'سوالات متداول', href: '#' }
];

export function FooterNav() {
  return (
     <>
        <h2 className="text-white">
           دسترسی سریع
        </h2>
        <hr className="border-white/50 my-3"/>
        <ul className="space-y-6 md:columns-2">
           {FooterNavBar.map((item) => (<li key={item.id}>
              <Link href={item.href} className="text-white text-sm">
                 {item.label}
              </Link>
           </li>))}
        </ul>
     </>
  );
}
