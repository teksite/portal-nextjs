import { cn } from "@/lib";
import { LicenseGroup, LicensesNormalized } from "@/models";
import { Item } from "./item";
import { useGroupData, useNormalizedData } from "./contexts";

export type GroupProps = {
	id: string;
};
export function Group({ id }: GroupProps) {
	return (
		<div
			id={id}
			className={cn(
				"flex flex-col mt-5 ",
				"border border-solid border-amber-500"
			)}
		>
			<GroupHeader id={id} />
			<GroupContent id={id} />
		</div>
	);
}

export function GroupHeader({ id }: GroupProps) {
	const group = useGroupData(id);
	return <h2 className="bg-amber-200 mb-0 px-2">{group.title}</h2>;
}

export function GroupContent({ id }: GroupProps) {
	const group = useGroupData(id);
	const { licenses } = useNormalizedData();

	return (
		<ul className="border border-solid border-amber-200">
			{group.licenseIdList.map((id) => {
				const license = licenses[id];
				return <Item license={license} group={group} />;
			})}
		</ul>
	);
}
