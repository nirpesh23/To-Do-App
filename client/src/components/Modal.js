import React, { useState } from 'react';

export default function ModalForm(props){
    const {open, setOpen} = props.modalOptions;
  const [formData, setFormData] = useState({
    id:'',
    name: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, id: props.itemId });
  };

  const handleSubmit = () => {
    // console.log('Form submitted:', formData);
    // setOpen(false);
    props.modalOptions.handleOnUpdate(formData)
  };

  return (
    <>
      <div className={`ui modal ${open ? 'active' : ''}`}>
        <div className="header">Update Todo</div>
        <div className="content">
          <form className="ui form">
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label>Description</label>
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
          </form>
        </div>
        <div className="actions">
          <button className="ui button" onClick={() => setOpen(false)}>
            Cancel
          </button>
          <button className="ui button positive" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>

      {open && <div className="ui dimmer active"></div>}
    </>
  );
};