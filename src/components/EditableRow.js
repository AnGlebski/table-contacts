import React from 'react';

const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Введите имя"
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Введите адрес"
          value={editFormData.address}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Введите номер"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Введите email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <button type="submit">Сохранить</button>
        <button
          type="button"
          onClick={handleCancelClick}>
            Отмена
          </button>
      </td>
    </tr>
  );
};

export default EditableRow;
