import { useErrorsContext } from '../../contexts/ErrorContext';


export const Errors = () => {
  const { error } = useErrorsContext();

  if (!error) {
    return null;
  }else{
    return <div className='errors-container'>{error}</div>;
  }
  
};



