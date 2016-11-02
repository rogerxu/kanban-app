import React from 'react';
import classnames from 'classnames';

const Editable = ({ editing, value, onEdit, className }) => {
  if (editing) {
    return <Editable.Edit
      className={className}
      value={value}
      onEdit={onEdit} />;
  }

  return <Editable.Value className={className} value={value} />;
};

Editable.Value = ({ value, className, ...props }) => (
  <span className={classnames('value', className)} {...props}>
    {value}
  </span>
);

class Edit extends React.Component {
  render() {
    const { className, value, ...props } = this.props;

    return <input
      type="text"
      className={classnames('edit', className)}
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

Editable.Edit = Edit;

export default Editable;
