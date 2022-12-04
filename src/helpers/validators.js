import { toast } from 'react-toastify';

const validateFields = (signupData) => {
  
    const { name, password, email, state, occupation } = signupData;
    
      // eslint-disable-next-line
    const strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
      // eslint-disable-next-line
    const validEmailAddress = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if (name === '' || email === '' || password === '' || state === '' || occupation === '') {
      toast.warn(`Please fill out all the fields.`, {
        toastId: "emptyFields"
      });
    }
 
    if (!password.match(strongPassword)) {
      toast.warn('Make sure your password contains a minimum of eight characters, at least one uppercase letter, one lowercase letter, one number, and one special character.', {
        toastId: "passwordRequirements"
      });
      return false;
    }

    if (!email.match(validEmailAddress)) {
      toast.warn('Make sure to use a valid email address format.', {
        toastId: "validEmail"
      });
      return false;
    } 

    return true;
  }

export default validateFields;