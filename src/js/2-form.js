const feedbackFormEl = document.querySelector('.js-feedback-form');
feedbackFormEl.elements.email.value='';
feedbackFormEl.elements.message.value='';
let FormData ={
    email:'',
    message:'',
}

const FillFormFields = () => {
    try {
        if (localStorage.length == 0) {
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

const FieldInput = event =>{
   const FormFieldEl = event.target;
   FormData[FormFieldEl.name]=FormFieldEl.value;
   localStorage.setItem('feedback-form-state', JSON.stringify(FormData));
}

const OnFormSubmit = event => {
    if (FormData.email.length ==0 || FormData.message.length ==0) {
        console.log("Fill please all fields");    }
    else {
        console.log(FormData);
        event.preventDefault();
        feedbackFormEl.reset();   
        localStorage.removeItem('feedback-form-state');
        }
    };

feedbackFormEl.addEventListener('input', FieldInput);
feedbackFormEl.addEventListener('submit', OnFormSubmit);