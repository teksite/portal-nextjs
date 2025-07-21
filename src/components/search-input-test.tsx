import { ServiceType } from "@/models/serviceModel";
import {
	SearchInput,
	SearchInputProps,
	SearchInputSelectionValue,
} from "@/ui/components/search-input";
import { useCallback, useMemo, useState } from "react";

export function SearchInputTest({
	size = "default",
	type = "noButton",
	data,
}: Pick<SearchInputProps<ServiceType>, "size" | "type" | "data">) {
	const [query, setQuery] = useState<string>();
	const [selection, setSelection] =
		useState<SearchInputSelectionValue<ServiceType>>();

	const filteredData = useMemo(() => filterLogic2(data, query), [data, query]);

	const getItemLabel = useCallback((item: ServiceType) => item.title, []);
	const renderItem = useCallback(
		(service: ServiceType, query?: string) => (
			<ListItem service={service} query={query} />
		),
		[]
	);

	return (
		<div className="flex flex-col w-2xl">
			<div>{`Query: ${query}`}</div>
			<div>{`Q:${selection?.selectedQuery}  I:${selection?.selectedItem?.title} `}</div>
			<SearchInput
				size={size}
				type={type}
				data={filteredData}
				onQueryChange={setQuery}
				getItemLabel={getItemLabel}
				renderItem={renderItem}
				onSelectChange={(selection) => {
					setSelection(selection);
				}}
			/>
		</div>
	);
}

function ListItem({
	service,
	query,
}: {
	service: ServiceType;
	query?: string;
}) {
	return (
		<div className="flex">
			<div className="flex-1">
				{query ? (
					<HighlightText
						text={service.title}
						query={query}
						highlightClassName="font-bold text-blue-700"
					/>
				) : (
					service.title
				)}
			</div>
			<div>{service.groupId}</div>
		</div>
	);
}

function filterLogic2(services: ServiceType[], query?: string): ServiceType[] {
	if (!query || !query.trim()) return services;
	const q = query.trim().toLowerCase();
	if (!q) return services;

	const terms = q.split(/\s+/);

	// helper to normalize & strip accents
	const normalize = (s: string) =>
		s
			.toLowerCase()
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "");

	const beforeSort = services
		.map((service) => {
			const title = normalize(service.title);
			const genre = normalize(service.groupId);
			const description = normalize(service.description || "");

			// require each term somewhere in title|genre|description
			if (
				!terms.some(
					// !terms.every(
					(t) =>
						title.includes(t) || genre.includes(t) || description.includes(t)
				)
			) {
				return null;
			}

			let score = 0;

			// --- Title-based scoring (very high priority) ---
			if (title === q) {
				score += 2000;
			}
			for (const term of terms) {
				if (title.startsWith(term)) {
					score += 600;
				}
				const titleWords = title.split(" ");
				// const titleWords = title.match(/\p{L}+/gu) ?? []
				if (titleWords.includes(term)) {
					score += 400;
				} else if (titleWords.some((w) => w.startsWith(term))) {
					score += 600;
				}
				const idx = title.indexOf(term);
				if (idx >= 0) {
					score += Math.max(100 - idx, 20);
				}
			}

			// --- Genre-based scoring (mid priority) ---
			// Genre typically 1–3 words, so exact/startsWith matter more
			for (const term of terms) {
				if (genre === term) {
					score += 500;
				} else if (genre.startsWith(term)) {
					score += 300;
				} else if (genre.includes(term)) {
					score += 150;
				}
			}

			// --- Description-based scoring (lower priority) ---
			for (const term of terms) {
				const idx = description.indexOf(term);
				if (idx >= 0) {
					// small boost decaying by position
					score += Math.max(50 - idx, 5);
				}
			}

			// --- Title-length bonus (small) ---
			score += Math.max(0, 20 - title.length);

			return { service, score };
		})
		.filter((x): x is { service: ServiceType; score: number } => x !== null);
	const result = beforeSort
		.sort((a, b) => b.score - a.score)
		.map((x) => x.service);

	return result;
}

type HighlightTextProps = {
	text: string;
	query: string;
	highlightClassName?: string;
	normalClassName?: string;
};

/**
 * A <HighlightText> component that splits on *all* terms in `query`
 * and wraps each match in a <span> with `highlightClassName`.
 */
export const HighlightText: React.FC<HighlightTextProps> = ({
	text,
	query,
	highlightClassName = "font-semibold text-accent-foreground",
	normalClassName = "",
}) => {
	if (!query) {
		// Nothing to highlight
		return <span className={normalClassName}>{text}</span>;
	}

	// 1) break query into terms, filter out blanks
	const terms = Array.from(
		new Set(
			query
				.trim()
				.split(/\s+/)
				.map((t) => t.toLowerCase())
		)
	).filter(Boolean);

	if (terms.length === 0) {
		return <span className={normalClassName}>{text}</span>;
	}

	// 2) escape for regex and 3) sort by length descending
	const escaped = terms
		.map((t) => t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"))
		.sort((a, b) => b.length - a.length);

	// 4) build a single `or` regex, global + case-insensitive
	const regex = new RegExp(`(${escaped.join("|")})`, "gi");

	// 5) split text on that regex (capturing the matches)
	const parts = text.split(regex);

	return (
		<>
			{parts.map((part, i) => {
				// If part matches one of our terms, regex.test(part) will be true
				// But `regex.test` advances lastIndex on 'g', so we test via `part.match`
				const isMatch = part.match(new RegExp(`^(${escaped.join("|")})$`, "i"));
				if (isMatch) {
					return (
						<span key={i} className={highlightClassName}>
							{part}
						</span>
					);
				} else {
					return (
						<span key={i} className={normalClassName}>
							{part}
						</span>
					);
				}
			})}
		</>
	);
};
