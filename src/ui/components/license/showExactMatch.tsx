import {IconPicker} from "@/ui/components/icons/icon";
import Link from "next/link";
import {LicenseType} from "@/models/licenseModel";

export function ShowExactMatch({license}:{license:LicenseType}) {
   return (
       <div className="flex gap-1 items-center x-box">
           {
               license.icon &&
               <div className="min-w-fit w-fit p-1">
                   <IconPicker name={license.icon} className="fill-blue-600 size-24 mx-auto"/>
               </div>
           }
           <div className="p-1 w-full">
               <div className="flex items-center justify-start gap-1 divide-x divide-zinc-300 *:py-0.5 *:px-3 *:text *:text-xs mb-3">
                   <span>گروه: {license.serviceGroupCaption}</span>
                   <span>کد: {license.code}</span>
                   {license.electronics && <span>ارائه خدمت: {license.electronics ==1 ?"الکترونیکی" :"غیر الکترونیکی"}</span>}
                   {license.electronics && <span>{license.needPresence ?"حضوری" :"غیر حضوری"}</span>}
               </div>
               <h3 className="font-bold">{license.title}</h3>
               {license.description && <p>توضیحات: {license.description}</p>}
               <div className="flex justify-end mt-6">
                   <Link href="#"
                         className="text-sm font-semibold inline-block min-w-fit w-36 text-center border border-zinc-300 dark:border-zinc-600 rounded-s-lg p-3 hover:bg-zinc-300 dark:hover:bg-zinc-600 hover:shadow-innertext-sm"
                   >
                       جزئیات بیشتر
                   </Link>
                   <Link href="#"
                         className="text-sm font-semibold inline-block min-w-fit w-36 text-center border border-zinc-300 dark:border-zinc-600 rounded-e-lg p-3 hover:bg-zinc-300 dark:hover:bg-zinc-600 hover:shadow-innertext-sm"
                   >
                       ثبت درخواست
                   </Link>
               </div>

           </div>

       </div>
   )
}