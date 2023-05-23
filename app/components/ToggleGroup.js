import * as ToggleGroup from '@radix-ui/react-toggle-group';
import React from 'react';

const toggleGroupItemClasses =
  "hover:bg-violet3 px-5 text-black color-mauve11 data-[state=on]:bg-violet6 data-[state=on]:text-violet12 flex h-[35px]  items-center justify-center bg-white text-base leading-4 first:rounded-l last:rounded-r focus:z-10 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none";

const CustomToggleGroup = ({ group }) => (
  <ToggleGroup.Root
    className="inline-flex rounded shadow-[0_2px_10px] shadow-blackA7 space-x-3"
    type="single"
    defaultValue="center"
    aria-label="Text alignment"
  >
    <ToggleGroup.Item
      className={toggleGroupItemClasses}
      value="left"
      aria-label="Left aligned"
    >
      {group[0]}
    </ToggleGroup.Item>
    <ToggleGroup.Item
      className={toggleGroupItemClasses}
      value="center1"
      aria-label="Center aligned"
    >
      {group[1]}
    </ToggleGroup.Item>
    <ToggleGroup.Item
      className={toggleGroupItemClasses}
      value="center2"
      aria-label="Center aligned"
    >
      {group[2]}
    </ToggleGroup.Item>
    <ToggleGroup.Item
      className={toggleGroupItemClasses}
      value="right"
      aria-label="Right aligned"
    >
      {group[3]}
    </ToggleGroup.Item>
  </ToggleGroup.Root>
);

export default CustomToggleGroup;
