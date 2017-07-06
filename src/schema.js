import { schema } from 'normalizr';

export const items = new schema.Entity('items');
export const arrayOfItems = new schema.Array(items);
