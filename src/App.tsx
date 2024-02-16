import React from 'react';
import {
  Drawer,
  DrawerPanelContent,
  DrawerContent,
  DrawerContentBody,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  Button
} from '@patternfly/react-core';
import {DragDropSort, DraggableObject} from "@patternfly/react-drag-drop";

export const DrawerInlinePanelStart: React.FunctionComponent = () => {
  const [isExpanded, setIsExpanded] = React.useState(true);
  const drawerRef = React.useRef<HTMLDivElement>();

  const onExpand = () => {
    drawerRef.current && drawerRef.current.focus();
  };

  const onClick = () => {
    setIsExpanded(!isExpanded);
  };

  const onCloseClick = () => {
    setIsExpanded(false);
  };

  const [items, setItems] = React.useState<DraggableObject[]>([
    { id: 'with-button-1', content: 'one' },
    { id: 'with-button-2', content: 'two' },
    { id: 'with-button-3', content: 'three' },
    { id: 'with-button-4', content: 'four' },
    { id: 'with-button-5', content: 'five' },
    { id: 'with-button-6', content: 'six' },
    { id: 'with-button-7', content: 'seven' },
    { id: 'with-button-8', content: 'eight' },
    { id: 'with-button-9', content: 'nine' },
    { id: 'with-button-10', content: 'ten' },
    { id: 'with-button-11', content: 'eleven' },
    { id: 'with-button-12', content: 'twelve' },
    { id: 'with-button-13', content: 'thirteen' },
    { id: 'with-button-14', content: 'fourteen' },
    { id: 'with-button-15', content: 'fifteen' },
    { id: 'with-button-16', content: 'sixteen' },
    { id: 'with-button-17', content: 'seventeen' },
    { id: 'with-button-18', content: 'eighteen' },
    { id: 'with-button-19', content: 'nineteen' },
    { id: 'with-button-20', content: 'twenty' },
  ]);

  const panelContent = (
    <DrawerPanelContent>
      <DrawerHead>
        <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>
          <DragDropSort
            items={items}
            variant="defaultWithHandle"
            onDrop={(_, newItems) => {
              setItems(newItems);
            }}
          />
        </span>
        <DrawerActions>
          <DrawerCloseButton onClick={onCloseClick} />
        </DrawerActions>
      </DrawerHead>
    </DrawerPanelContent>
  );

  const drawerContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';

  return (
    <React.Fragment>
      <Button aria-expanded={isExpanded} onClick={onClick}>
        Toggle drawer
      </Button>
      <Drawer isExpanded={isExpanded} isInline position="start" onExpand={onExpand}>
        <DrawerContent panelContent={panelContent}>
          <DrawerContentBody>{drawerContent}</DrawerContentBody>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  );
};


export default DrawerInlinePanelStart;
