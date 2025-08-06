import {LicenseType} from "@/models";
import {SolidLink} from "@/ui/components/Links";

export function LicenseItem({data}: { data: LicenseType }) {
    return (
        <>
            <h1 className="text-center">{data.title}</h1>
            <div className="x-box">
                {data.description && <p>{data.description}</p>}
                <table className="w-full">
                    <thead>
                    <tr>
                        <th className="p-3 text-center border border-zinc-300">کدخدمت</th>
                        <th className="p-3 text-center border border-zinc-300">گروه خدمت</th>
                        <th className="p-3 text-center border border-zinc-300">مدت اخذ خدمت</th>
                        <th className="p-3 text-center border border-zinc-300">هزینه</th>
                        <th className="p-3 text-center border border-zinc-300">نحوه اخذ خدمت</th>
                        <th className="p-3 text-center border border-zinc-300">نحوه مراجعه</th>
                        <th className="p-3 text-center border border-zinc-300">مدت زمان اعتبار</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="p-3 text-center border border-zinc-300">{data.id}</td>
                        <td className="p-3 text-center border border-zinc-300">{data.avgTime}</td>
                        <td className="p-3 text-center border border-zinc-300">{data.serviceGroupCaption }</td>
                        <td className="p-3 text-center border border-zinc-300">{data.cost ? 'مشمول هزینه' : 'رایگان'}</td>
                        <td className="p-3 text-center border border-zinc-300">{data.electronics == "0" ? 'حضوری' : (data.electronics == "1" ? 'الکترونیکی' : 'ترکیبی')}</td>
                        <td className="p-3 text-center border border-zinc-300">{data.needPresence ? 'حضوری' : 'غیرحضوری'}</td>
                        <td className="p-3 text-center border border-zinc-300">{data.serviceTime ?? 'نامحدود'}</td>
                    </tr>

                    </tbody>
                </table>
                <div className="text-center mt-6">
                    <p className="text-center">
                        {'جهت ثبت درخواست اخذ این مجوز روی دکمه زیر کلیک کنید'}
                    </p>
                    <SolidLink href="#" color="green" size="sm">ثبت درخواست</SolidLink>
                </div>
            </div>
        </>
    );
}


