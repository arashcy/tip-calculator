import { Box, Button, Input, Label } from '@twilio-paste/core';
import { useState } from 'react';
import { addNewItem } from '../store/items/actions'

export const NewItemForm = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const isValid = () => {
    if (!name) return false;
    if (!price.length) return false;
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (typeof onSubmit === 'function') {
      onSubmit(name, price);
    }
    // If you don't pass dispatch map to connect(), you get dipatch function that 
    // behaves similar to useDispatch hook
    // dispatch(addNewItem(name,price))
    setName('');
    setPrice(0);
  };

  return (
    <Box marginBottom="space80">
      <form onSubmit={handleSubmit}>
        <Box marginBottom="space80">
          <Label htmlFor="item-name">Item Name</Label>
          <Input
            id="item-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Box>
        <Box marginBottom="space80">
          <Label htmlFor="item-price">Price</Label>
          <Input
            id="item-price"
            type="number"
            insertBefore={<div>$</div>}
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </Box>
        <Button
          disabled={!isValid()}
          onClick={handleSubmit}
          type="submit"
          fullWidth
          variant="primary"
        >
          🍳 Add Item
        </Button>
      </form>
    </Box>
  );
};

export default NewItemForm;
