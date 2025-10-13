'use client'
import {useState} from "react";
import {Modal} from "@/components/modal";
import Link from "next/link";
import Image from "next/image";
import {TransparencyCategoryWithGroupType} from "@/types";

export function SliderTransparenciesItem({category}: { category: TransparencyCategoryWithGroupType }) {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => setShowModal((prev) => !prev);

    return (
        <>
            <button
                type="button"
                onClick={toggleModal}
                className="block w-full focus:outline-none cursor-pointer hover:shadow transition border border-zinc-100 rounded-lg p-3">
                <figure className="text-center">
                    {category.image && (
                        <Image
                            src={category.image}
                            alt={category.title}
                            width={200}
                            height={150}
                            loading="lazy"
                            decoding="async"
                            className="mx-auto rounded-md mb-3"
                        />
                    )}
                    <figcaption className="text-center text-sm">{category.title}</figcaption>
                </figure>
            </button>

            <Modal isOpen={showModal} onClose={toggleModal} title={category.title}>
                <ul className="flex gap-3 justify-between items-stretch flex-wrap">
                    {Object.entries(category.groups).map(([key, group]) => (
                        <li key={key} className="w-[200px] p-6 border border-zinc-300 rounded-lg h-full">
                            <Link href={`/groups/${key}`}>
                                <figure>
                                    {group.image && (
                                        <Image
                                            src={group.image}
                                            alt={group.title}
                                            width={200}
                                            height={150}
                                            loading="lazy"
                                            decoding="async"
                                            className="mx-auto rounded-md mb-3"
                                        />
                                    )}
                                    <figcaption className="text-center text-sm">{group.title}</figcaption>
                                </figure>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Modal>
        </>
    );
}
