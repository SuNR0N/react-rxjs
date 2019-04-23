import React, {
  ChangeEvent,
  Component,
} from 'react';

export interface IProps {
  id: string;
  label: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
}

export interface IState {
  value?: string;
}

export class SearchField extends Component<IProps, IState> {
  public state: IState = {
    value: '',
  };

  public handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    this.setState({ value });
    if (typeof this.props.onValueChange === 'function') {
      this.props.onValueChange(value);
    }
  }

  public render() {
    const {
      handleChange,
      props: {
        id,
        label,
        placeholder,
      },
      state: {
        value,
      },
    } = this;

    return (
      <div className='form-group'>
        <label
          htmlFor={id}
          className='sr-only'>{label}</label>
        <input
          type='text'
          className='form-control'
          id={id}
          onChange={handleChange}
          placeholder={placeholder}
          value={value} />
      </div>
    );
  }
}
