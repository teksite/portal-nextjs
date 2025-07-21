import {Tab, TabGroup, TabList, TabPanel, TabPanels} from '@headlessui/react'
import {LicenseType} from "@/models/licenseModel";
import {ExpandableCardDemoList} from "@/components/expandable-card-demo-list";


const categorizeLicenses = (services: LicenseType[]) => {
    const grouped = services.reduce((acc, service) => {
        const groupName:string = service.serviceGroupCaption ?? "سایر خدمات";
        if (!acc[groupName]) {
            acc[groupName] = [];
        }
        acc[groupName].push(service);
        return acc;
    }, {} as Record<string, LicenseType[]>);

    return Object.keys(grouped).map(name => ({
        name,
        licenses: grouped[name]
    }));
};

export function Tabs({licenses}: { licenses: LicenseType[] }) {
    const groups = categorizeLicenses(licenses);
    return (
        <div className="flex h-screen max-h-screen w-full justify-center px-4 pt-24 overflow-y-auto">
            <div className="w-full ">
                <TabGroup className="flex items-stretch">
                    <TabList className="">
                        {groups.map(({name}: { name: string }) => (
                                <Tab
                                    key={name}
                                    className="block rounded-s-xl min-w-fit w-36 border border-zinc-300 dark:border-zinc-600 px-3 py-3 text-sm/6 font-semibold  focus:not-data-focus:outline-none data-focus:outline data-focus:outline-zinc-600 data-hover:bg-white/5 data-selected:bg-white/10 data-selected:data-hover:bg-white/10"
                                >
                                    {name}
                                </Tab>
                            )
                        )}
                    </TabList>
                    <TabPanels
                        className="mt-3 rounded-e-xl  border border-zinc-300 dark:border-zinc-600 px-3 py-3 min-h-full w-full min-w-96">
                        {groups.map(({name, licenses}) => (
                            <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
                                <ExpandableCardDemoList cards={licenses} className={"space-y-3"}/>

                            </TabPanel>
                        ))}
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
    )
}