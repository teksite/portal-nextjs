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
