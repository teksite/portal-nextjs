import {LicenseType} from "@/models";
import {BadgeElecrtonics} from "@/ui/components/certificate/list/popover/badge-elecrtonics";
import {BadgePresence} from "@/ui/components/certificate/list/popover/badge-presence";
import {BadgeCost} from "@/ui/components/certificate/list/popover/badge-cost";
import {SolidLink} from "@/ui/components/Links";

export function LicenseItem5({data}: { data: LicenseType }) {
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
                    <div className="md:columns-2">
                    <div className="flex items-center gap-3 justify-between border-b border-zinc-200">
                        <div className="p-3 text-cente">کدخدمت</div>
                        <div className="p-3 text-center">{data.id}</div>
                    </div>
                    <div className="flex items-center gap-3 justify-between border-b border-zinc-200">
                        <div className="p-3 text-cente">مدت اخذ خدمت</div>
                        <div className="p-3 text-center">{data.avgTime}</div>
                    </div>
                    <div className="flex items-center gap-3 justify-between border-b border-zinc-200">
                        <div className="p-3 text-cente">گروه خدمت</div>
                        <div className="p-3 text-center">{data.serviceGroupCaption}</div>
                    </div>
                    <div className="flex items-center gap-3 justify-between border-b border-zinc-200">
                        <div className="p-3 text-cente">هزینه</div>
                        <div className="p-3 text-center">
                            <BadgeCost needCost={!!data.cost}/>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 justify-between border-b border-zinc-200">
                        <div className="p-3 text-cente">نحوه اخذ خدمت</div>
                        <div className="p-3 text-center">
                            <BadgeElecrtonics electronics={data.electronics}/>

                        </div>
                    </div>
                    <div className="flex items-center gap-3 justify-between border-b border-zinc-200">
                        <div className="p-3 text-cente">نحوه مراجعه</div>
                        <div className="p-3 text-center">
                            <BadgePresence needPresent={!!data.needPresence}/>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 justify-between border-b border-zinc-200">
                        <div className="p-3 text-cente">مدت زمان اعتبار</div>
                        <div className="p-3 text-center">{data.serviceTime ?? 'نامحدود'}</div>
                    </div>

                    </div>
            </div>
        </>
    );
}


