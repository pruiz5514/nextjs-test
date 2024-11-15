import Input from '@/app/components/atoms/Input/Input';
import './InputForm.scss'

interface IInputFormProps{
    id: string;
    label : string
}

const InputForm:React.FC<IInputFormProps> = ({id, label}) => {
  return (
    <div className='input_form-container'>
        <label className='label-input_form' htmlFor={id}>{label}</label>
        <Input id={id}/>
    </div>
  )
}

export default InputForm