import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filters/selectors';

export const selectContacts = state => {
    return Array.isArray(state.contacts?.items) ? state.contacts.items : [];
  };export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const safeContacts = Array.isArray(contacts) ? contacts : [];
    
    if (!filter) return safeContacts;
    
    const normalizedFilter = String(filter).toLowerCase();
    return safeContacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);