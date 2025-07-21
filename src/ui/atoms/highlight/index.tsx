import * as React from "react";

type HighlightTextProps = {
	/** The full text to display. */
	text: string;
	/** The substring to highlight (case-insensitive). */
	query: string;
	/** Tailwind (or other) classes to apply to the highlighted parts. */
	highlightClassName?: string;
	/** Optional classes for the non-highlighted parts. */
	normalClassName?: string;
};

/**
 * Splits `text` around `query` (case-insensitive),
 * then wraps each matching chunk in a <span> with `highlightClassName`.
 */
export const HighlightText: React.FC<HighlightTextProps> = ({
	text,
	query,
	highlightClassName = "font-semibold text-accent-foreground",
	normalClassName = "",
}) => {
	if (!query) {
		return <span className={normalClassName}>{text}</span>;
	}

	// Escape regex metacharacters in query
	const escaped = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
	const regex = new RegExp(`(${escaped})`, "gi");
	// Split on the query, keeping the matches in the result array
	const parts = text.split(regex);

	return (
		<>
			{parts.map((part, i) =>
				regex.test(part) ? (
					<span key={i} className={highlightClassName}>
						{part}
					</span>
				) : (
					<span key={i} className={normalClassName}>
						{part}
					</span>
				)
			)}
		</>
	);
};
