import {LicenseType} from "@/models";
import {BadgeElecrtonics} from "@/ui/components/certificate/list/popover/badge-elecrtonics";
import {BadgePresence} from "@/ui/components/certificate/list/popover/badge-presence";
import {BadgeCost} from "@/ui/components/certificate/list/popover/badge-cost";
import {SolidLink} from "@/ui/components/Links";

export function LicenseItem3({data}: { data: LicenseType }) {
    return (
        <>
            <div className="x-box overflow-x-auto">
                <div className="flex items-center justify-between gap-6">
                    <h1 className="min-w-fit w-fit mb-0">{data.title}</h1>
                    <hr className="hr border-dotted w-full"/>
                    <SolidLink href="#" color="green" size="sm" className="min-w-fit w-fit inline-block">
                        ثبت درخواست
                    </SolidLink>
                </div>
                <hr className="hr my-6 w-full"/>

                {data.description && <p>{data.description}</p>}
                <table className="w-full ">
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
                        <td className="p-3 text-center border border-zinc-300">{data.serviceGroupCaption}</td>
                        <td className="p-3 text-center border border-zinc-300">
                            <BadgeCost needCost={!!data.cost}/>
                        </td>
                        <td className="p-3 text-center border border-zinc-300">
                            <BadgeElecrtonics electronics={data.electronics}/>

                        </td>
                        <td className="p-3 text-center border border-zinc-300">
                            <BadgePresence needPresent={!!data.needPresence}/>
                        </td>
                        <td className="p-3 text-center border border-zinc-300">{data.serviceTime ?? 'نامحدود'}</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </>
    );
}


