import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../api/apiServise';

// const { lang } = useContext(langContext);

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const data = await api.getContacts();
      // console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// const isDublicate = ({ name }, contacts) => {
//   const normalizedName = name.toLowerCase();

//   const result = contacts.find(item => {
//     return normalizedName === item.name.toLowerCase();
//   });

//   return Boolean(result);
// };
// const notification1 = contentText.notification1[lang];
// const notification2 = contentText.notification2[lang];
// const notification3 = contentText.notification3[lang];

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    //lang context can be used only in conponents!!!!!!!!
    // condition: (data, { getState }) => {
    //   const { contacts } = getState();
    //   if (isDublicate(data, contacts.items)) {
    //     Report.warning(
    //       notification1,
    //       `${data.name}` + notification2,
    //       notification3
    //     );
    //     return false;
    //   }
    // },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/remove',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
