// import React, { useState, useRef } from "react";
// import {
// 	useCombobox,
// 	autocomplete,
// 	mergeGroupedItems,
// } from "@szhsin/react-autocomplete";
// import styles from "@/styles/Home.module.css";
// import { LIST_GROUP } from "../data";

// type Item = { name: string; abbr: string };
// const getItemValue = (item: Item) => item.name;
// const isItemDisabled = ({ abbr }: Item) => abbr.startsWith("CO");

// const filterGroupedItems = (value: string) =>
// 	LIST_GROUP.map((group) => ({
// 		...group,
// 		states: group.states.filter((item) =>
// 			item.name.toLowerCase().startsWith(value.toLowerCase())
// 		),
// 	})).filter((group) => !!group.states.length);

// export default function Home() {
// 	const selectedFeature = "autocomplete";
// 	const select = false;
// 	const rovingText = false;
// 	const deselectOnClear = false;
// 	const deselectOnChange = false;
// 	const closeOnSelect = true;

// 	const [value, setValue] = useState<string | undefined>();
// 	const [selectedItem, setSelectedItem] = useState<Item | undefined>();

// 	const [anotherValue, setAnotherValue] = useState("");
// 	const anotherRef = useRef(null);

// 	const featureProps = {
// 		select,
// 		deselectOnClear,
// 		deselectOnChange,
// 		closeOnSelect,
// 		rovingText,
// 	};

// 	const groupedItems = filterGroupedItems(value || "");

// 	const {
// 		getLabelProps,
// 		getInputProps,
// 		getListProps,
// 		getItemProps,
// 		getToggleProps,
// 		getClearProps,
// 		open,
// 		focusIndex,
// 		isInputEmpty,
// 		isItemSelected,
// 	} = useCombobox({
// 		getItemValue,
// 		isItemDisabled,
// 		value,
// 		onChange: (value) => {
// 			console.log("onChange", value);
// 			setValue(value);
// 		},
// 		selected: selectedItem,
// 		onSelectChange: (item) => {
// 			setSelectedItem(item);
// 		},

// 		feature: autocomplete(featureProps),

// 		items: mergeGroupedItems({
// 			groups: groupedItems,
// 			getItemsInGroup: (group) => group.states,
// 		}),
// 	});

// 	let itemIndex = 0;

// 	return (
// 		<div className={styles.wrapper}>
// 			<div>value: {value}</div>
// 			<div>Selected item: {selectedItem?.name}</div>
// 			<div>focusIndex: {focusIndex}</div>

// 			<div>
// 				<input
// 					ref={anotherRef}
// 					value={anotherValue}
// 					onChange={(e) => {
// 						setAnotherValue(e.target.value);
// 					}}
// 				/>
// 				<button
// 					onClick={() => {
// 						setValue(anotherValue);
// 					}}
// 				>
// 					Sync value
// 				</button>
// 			</div>
// 			<div>
// 				<label {...getLabelProps()}>States</label>
// 			</div>
// 			<input className={styles.input} {...getInputProps()} />
// 			{!isInputEmpty && (
// 				<button
// 					className={styles.clearButton}
// 					style={{ position: "absolute", transform: "translate(-120%, 10%)" }}
// 					{...getClearProps()}
// 				>
// 					❎
// 				</button>
// 			)}
// 			<button {...getToggleProps()}>{open ? "⬆️" : "⬇️"}</button>
// 			<button>next</button>
// 			<input
// 				type="search"
// 				onKeyDown={(e) => console.log("keydown", e.key)}
// 				onChange={(e) => console.log("onChange", e.target.value)}
// 			/>
// 			<ul
// 				{...getListProps()}
// 				className={styles.list}
// 				style={{
// 					position: "absolute",
// 					border: "1px solid",
// 					display: open ? "block" : "none",
// 				}}
// 			>
// 				<h3>US STATES</h3>

// 				{groupedItems.map(({ groupKey: key, states: group }) => (
// 					<React.Fragment key={key}>
// 						<li>
// 							<h4 style={{ color: "lightskyblue", margin: "10px 0" }}>{key}</h4>
// 						</li>
// 						{group.map((item) => (
// 							<li
// 								className={
// 									isItemDisabled(item) ? styles.disabled : styles.option
// 								}
// 								key={item.abbr}
// 								style={{
// 									background: focusIndex === itemIndex ? "#0a0" : "none",
// 									textDecoration: isItemSelected(item) ? "underline" : "none",
// 								}}
// 								{...getItemProps({ item, index: itemIndex++ })}
// 							>
// 								{item.name}
// 							</li>
// 						))}
// 					</React.Fragment>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }
