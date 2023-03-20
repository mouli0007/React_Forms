	React Forms 
	
	We use Libraries mainly to preserve multiple re renders 
	
	1=> Formik
	
	######
	2=> Yup (Only for Validation)
	3=> React Hook Forms (Functionalities )
	
	#### CMD
	
	npm i react-hook-form yup
	
	import {useForm} from 'react-hook-form'
	
	    const { register, handleSubmit } = useForm();
		
	#### handleSubmit()=> the function is called whenever the form is submitted


     ### register("")=>Provides you the object of values
	 
	 ### Syntax ###
	 
	  <input type="text" placeholder="FullName" {...register("fullname")} />
	  
	  
	  ###Validating with YUP Library
	  
	  ### Syntax ### 
	  
	  const schema = yup.object().shape({
	  
    //   Checking for the type of string !
    fullname: yup.string().required(),

    //   checking for the email
    email: yup.string().email().required(),

    //   making the age valid
    age: yup.number().positive().integer().min(18).required(),

    //   Creating a strong passwrod validation
    password: yup.string().min(4).max(20).required(),

    //   Making a confirm password !
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
	  
  });
  
  ### We Need to import another library to interact with react-hook-form and YUP ###
  
  ### npm i @hookform/resolvers
  
  ##   And useForm syntax will be like this !
  
  ## Syntax 
     
	   const { register, handleSubmit } = useForm({
         resolver: yupResolver(schema),
         });
		 
   ## resolver function will validate the input forms
   
   
   ##### Disaplying the Error Message #####
   
   ####  formState: { errors },
   
   #### Syntax 
   
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  
  ### JSX Syntax 
  
   <input type="text" placeholder="FullName" {...register("fullname")} />
        <p>{errors.fullname?.message}</p>
