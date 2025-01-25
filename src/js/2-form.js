const feedbackFormEl = document.querySelector('.js-feedback-form');
let FormData ={
    email:'',
    message:'',
}

const FillFormFields = () => {
    try {
        if (localStorage.length ==0) {
            return;
        }

        const FormDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state')) ;
        FormData = FormDataFromLS;
        for (const key in FormDataFromLS) {
            feedbackFormEl.elements[key].value = FormDataFromLS[key];
           }
    } catch (error) {  console.log(error);    }
}

FillFormFields();

const FieldChange = event =>{
   const FormFieldEl = event.target;
   FormData[FormFieldEl.name]=FormFieldEl.value;
  
   localStorage.setItem('feedback-form-state', JSON.stringify(FormData));
}

const OnFormSubmit = event => {
    console.log(FormData);
    event.preventDefault();
    feedbackFormEl.reset();   
    localStorage.removeItem('feedback-form-state');
};

feedbackFormEl.addEventListener('input', FieldChange);
feedbackFormEl.addEventListener('submit', OnFormSubmit);