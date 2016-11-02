import React from 'react';

export default function Editable({ editing, value, onEdit, ...props }) {
  if (editing) {
    return <Edit value={value} onEdit={onEdit} {...props} />;
  }

  return <span {...props}>{value}</span>;
}

class Edit extends React.Component {
  render() {
    const { value, ...props } = this.props;

    return <input
      type="text"
      autoFocus={true}
      defaultValue={value}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter}
      {...props} />;
  }

  checkEnter = (event) => {
    if (event.key === 'Enter') {
      this.finishEdit(event);
    }
  } 

  finishEdit = (event) => {
    const value = event.target.value;

    if (this.props.onEdit) {
      this.props.onEdit(value);
    }
  }
}
