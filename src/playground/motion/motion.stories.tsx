import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import * as motion from 'motion/react-client';
import { fn } from 'storybook/test';

const meta = {
   title: 'Test/Motion',
   component: undefined,
   parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered'
   }
} satisfies Meta<typeof undefined>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Test1: Story = {
   name: 'Motion1',
   render: (args) => {
      return (
         <motion.div
            style={{
               width: 100,
               height: 100,
               backgroundColor: '#ff0088',
               borderRadius: 5
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
         />
      );
   }
};

export const Test2: Story = {
   name: 'Motion2',
   render: (args) => {
      return (
         <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
               duration: 0.4,
               scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 }
            }}
            style={{
               width: 100,
               height: 100,
               backgroundColor: '#dd00ee',
               borderRadius: '10%'
            }}
         />
      );
   }
};

export const Test3: Story = {
   name: 'Hover',
   render: (args) => {
      return (
         <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{
               width: 100,
               height: 100,
               backgroundColor: '#9911ff',
               borderRadius: 5
            }}
         />
      );
   }
};

export const Test4: Story = {
   name: 'LayoutAnimation',
   render: (args) => {
      return <LayoutAnimation />;
   }
};

export const Test5: Story = {
   name: 'BoxToggle',
   render: (args) => {
      return <BoxToggle />;
   }
};

export const Test6: Story = {
   name: 'ReorderExample',
   render: (args) => {
      return <ReorderExample />;
   }
};

export const Test7: Story = {
   name: 'ReorderExample2',
   render: (args) => {
      return <ReorderExample2 />;
   }
};

//____________________________________________________________
//____________________________________________________________
//____________________________________________________________
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function ReorderExample() {
   const [order, setOrder] = useState(items);

   const shuffle = () => {
      setOrder([...order].sort(() => Math.random() - 0.5));
   };

   return (
      <div className='space-y-2'>
         <button onClick={shuffle}>Shuffle</button>
         {order.map((item) => (
            <motion.div
               key={item.toString()}
               transition={{
                  type: 'spring',
                  // bounce: 0.5, // Higher = more bounce
                  // duration: 0.6 // Optional, spring usually ignores this
                  stiffness: 300,
                  damping: 20
               }}
               layout
               className='rounded bg-yellow-200 p-2'>
               Item {item}
            </motion.div>
         ))}
      </div>
   );
}

function ReorderExample2() {
   const [order, setOrder] = useState(items);

   const shuffle = () => {
      setOrder([...order].sort(() => Math.random() - 0.5));
   };

   return (
      <div className='space-y-2'>
         <button onClick={shuffle}>Shuffle</button>
         {order.map((item) => (
            <>
               <motion.li
                  initial={{ transform: `translateX(-${100 + item * 10}%)` }}
                  // initial={{ transform: 'translateX(-100%)' }}
                  animate={{ transform: 'translateX(0px)' }}
                  transition={{ type: 'spring' }}
                  key={item.toString()}>
                  {item}
               </motion.li>
               {/* <motion.div
                  key={item.toString()}
                  transition={{
                     type: 'spring',
                     // bounce: 0.5, // Higher = more bounce
                     // duration: 0.6 // Optional, spring usually ignores this
                     stiffness: 300,
                     damping: 20
                  }}
                  layout
                  className='rounded bg-yellow-200 p-2'>
                  Item {item}
               </motion.div> */}
            </>
         ))}
      </div>
   );
}

function BoxToggle() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <motion.div layout onClick={() => setIsOpen(!isOpen)} className='bg-blue-400 p-4'>
         <motion.div
            layout
            className='bg-white'
            style={{
               width: isOpen ? 200 : 100,
               height: isOpen ? 200 : 100
            }}
         />
      </motion.div>
   );
}

function LayoutAnimation() {
   const [isOn, setIsOn] = useState(false);
   const toggleSwitch = () => setIsOn(!isOn);

   const container = {
      width: 100,
      height: 50,
      backgroundColor: 'var(--hue-3-transparent)',
      borderRadius: 50,
      cursor: 'pointer',
      display: 'flex',
      padding: 10
   };

   const handle = {
      width: 50,
      height: 50,
      backgroundColor: '#9911ff',
      borderRadius: '50%'
   };

   return (
      <button
         className='border border-rose-500'
         style={{
            ...container,
            justifyContent: 'flex-' + (isOn ? 'start' : 'end')
         }}
         onClick={toggleSwitch}>
         <motion.div
            className='toggle-handle'
            style={handle}
            layout
            transition={{
               type: 'spring',
               visualDuration: 0.2,
               bounce: 1.2
            }}
         />
      </button>
   );
}
