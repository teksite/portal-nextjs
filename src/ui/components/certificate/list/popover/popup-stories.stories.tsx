import type {Meta, StoryObj} from "@storybook/nextjs-vite";

import {LicenseType} from "@/models";
import {WithBadge2} from "@/ui/components/certificate/list/popover/with-badge2";
import {WithBadge3} from "@/ui/components/certificate/list/popover/with-badge3";
import {TableMode} from "@/ui/components/certificate/list/popover/table-mode";
import {ItemExpandedSimple} from "@/ui/components/certificate/list/popover/with-text";
import {Simple} from "@/ui/components/certificate/list/popover/simple";

const meta = {
    title: "License List/Popover",
    component: undefined,
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

const licenseShort: LicenseType = {
    id: "1233027790000000289",
    slug: "1233027790000000289",
    title: "تأسيس واحد فرهنگي ديجيتال",
    code: "17021310000",
    groupId: "1233027780000000100",
    avgTime: "3",
    cost: false,
    description:
        "كسب و كار فرهنگي در فضاي مجازي نظير رسانه برخط، نشر ديجيتال و...",
    electronics: 1,
    needPresence: false,
    serviceTime: "شنبه تا چهار شنبه - ساعات اداري",
    serviceGroupCaption: "فضاي مجازي",
    icon: "game",
};
const licenseLong: LicenseType = {
    id: "1179027790000000128",
    slug: "1179027790000000128",
    title: "ثبت شكايات",
    code: "10",
    groupId: "1152027780000000265",
    avgTime: "1",
    cost: false,
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
    electronics: 1,
    needPresence: false,
    serviceTime: undefined,
    serviceGroupCaption: "خدمات عمومي",
    icon: "briefcase",
};

export const test1: Story = {
    name: "Item Expanded With Badge 2",
    render: (args) => {
        return <WithBadge2 id={licenseShort.id} data={licenseShort}/>;
    },
};
export const test2: Story = {
    name: "Item Expanded With Badge 3",
    render: (args) => {
        return <WithBadge3 id={licenseShort.id} data={licenseShort}/>;
    },
};
export const test3: Story = {
    name: "Item Expanded With Badge 3 long-desc",
    render: (args) => {
        return <WithBadge3 id={licenseLong.id} data={licenseLong}/>;
    },
};

export const test4: Story = {
    name: "Item Expanded Table Mode",
    render: (args) => {
        return <TableMode data={licenseShort}/>;
    },
};
export const test5: Story = {
    name: "Item Expanded Text Mode",
    render: (args) => {
        return <ItemExpandedSimple data={licenseShort} id={licenseShort.id}/>;
    },
};


export const test6: Story = {
    name: "Simple",
    render: (args) => {
        return <Simple data={licenseLong} id={licenseLong.id}/>;
    },
};





