'use client';

import React, { JSX, useEffect, useState } from 'react';





export function withServerMock<P>(
    ServerComponent: (props: P) => Promise<JSX.Element>,
    mockData: P
) {
    return function MockedComponent() {
        const [element, setElement] = useState<JSX.Element | null>(null);

        useEffect(() => {
            (async () => {
                const rendered = await ServerComponent(mockData);
                setElement(rendered);
            })();
        }, []);

        return element ?? <div>Loading...</div>;
    };
}
