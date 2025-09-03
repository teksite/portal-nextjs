import React from 'react';

import Image from 'next/image';

export function SmallLogoImage(props: Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'>) {
   return <Image {...props} src='/logo.png' alt='logo' />;
}
