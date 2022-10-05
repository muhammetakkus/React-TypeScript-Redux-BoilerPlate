export default function Input(props: any) {
    
    const {
        className = "",
        type = 'text',
        name = "",
        pholder = "",
        onChange,
        id= "",
        min,
        max
        //errors = []
      } = props;
      
    return (
        <input 
            type={type}
            name={name}
            id={id ? id : name}
            placeholder={pholder}
            onChange={onChange}
            min={min}
            max={max}
            className={`${className} form-control`} />
    );
    
}