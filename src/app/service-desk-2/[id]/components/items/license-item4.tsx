import {LicenseType} from "@/models";
import {BadgeElecrtonics} from "@/ui/components/certificate/list/popover/badge-elecrtonics";
import {BadgePresence} from "@/ui/components/certificate/list/popover/badge-presence";
import {BadgeCost} from "@/ui/components/certificate/list/popover/badge-cost";
import {SolidLink} from "@/ui/components/Links";

export function LicenseItem4({data}: { data: LicenseType }) {
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
                    <tbody>
                    <tr>
                        <th className="p-3 text-center border border-zinc-200">کدخدمت</th>
                        <td className="p-3 text-center border border-zinc-200">{data.id}</td>
                    </tr>

                    <tr>
                        <th className="p-3 text-center border border-zinc-200">گروه خدمت</th>
                        <td className="p-3 text-center border border-zinc-200">{data.serviceGroupCaption}</td>
                    </tr>
                    <tr>
                        <th className="p-3 text-center border border-zinc-200">هزینه</th>
                        <td className="p-3 text-center border border-zinc-200">
                            <BadgeCost needCost={!!data.cost}/>
                        </td>
                    </tr>
                    <tr>
                        <th className="p-3 text-center border border-zinc-200">نحوه اخذ خدمت</th>
                        <td className="p-3 text-center border border-zinc-200">
                            <BadgeElecrtonics electronics={data.electronics}/>
                        </td>
                    </tr>
                    <tr>
                        <th className="p-3 text-center border border-zinc-200">نحوه مراجعه</th>
                        <td className="p-3 text-center border border-zinc-200">
                            <BadgePresence needPresent={!!data.needPresence}/>
                        </td>
                    </tr>
                    <tr>
                        <th className="p-3 text-center border border-zinc-200">مدت اخذ خدمت</th>
                        <td className="p-3 text-center border border-zinc-200">{data.avgTime}</td>
                    </tr>
                    <tr>
                        <th className="p-3 text-center border border-zinc-200">مدت زمان اعتبار</th>
                        <td className="p-3 text-center border border-zinc-200">{data.serviceTime ?? 'نامحدود'}</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </>
    );
}


