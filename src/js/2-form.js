const feedbackFormEl = document.querySelector('.js-feedback-form');
let FormDate ={
    email:'',
    message:'',
}

const FillFormFields = () => {
    try {
        if (localStorage.length ==0) {
            return;
        }

        const FormDateFromLS = JSON.parse(localStorage.getItem('Feedback-Form-User')) ;
        FormDate = FormDateFromLS;
        for (const key in FormDateFromLS) {
            feedbackFormEl.elements[key].value = FormDateFromLS[key];
           }
    } catch (error) {  console.log(error);    }
}

FillFormFields();

const FieldChange = event =>{
   const FormFieldEl = event.target;
   FormDate[FormFieldEl.name]=FormFieldEl.value;
   localStorage.setItem('Feedback-Form-User', JSON.stringify(FormDate));
}

const OnFormSubmit = event => {
    event.preventDefault();
    feedbackFormEl.reset();
    
    localStorage.removeItem('Feedback-Form-User');
};

feedbackFormEl.addEventListener('change', FieldChange);
feedbackFormEl.addEventListener('submit', OnFormSubmit);