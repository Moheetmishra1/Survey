
function validate() {
   var n=document.survey;
            if( n.firstname.value == "" ) {
                alert( "Please provide your First name!" );
                 n.firstname.focus() ;
                return false;
                }
             
            if( n.lastname.value == "" ) {
                 alert( "Please provide your Last name!" );
                 n.lastname.focus() ;
                 return false;
                 }
                
            if( document.survey.email.value == "" ) {
                alert( "Please provide your Email!" );
                n.email.focus() ;
                return false;
                }
              
            if( n.mobile.value == "" || 
                n.mobile.value.length < 10 || n.mobile.value.length > 10) {
                alert( "Please provide a 10 digit number" );
                n.mobile.focus() ;
                return false;
            }
           
            if( n.dob.value == "" ) {
                 alert( "Please enter you Date of Birth !" );
                 n.dob.focus() ;
                 return false;
                 }
                
            if( n.profession.value == "" ) {
                 alert( "Please Enter your Profession !" );
                 n.profession.focus() ;
                 return false;
                }
                

            if( n.dropdown.value == "A" ) {
                 alert( "Please select your country!" );
                 return false;
                
                }
               
                alert("First name: "+n.firstname.value+"\nLast name: "+n.lastname.value+"\nEmail: "+n.email.value+"\nNumber: "+n.mobile.value+"\nD.o.b: "+n.dob.value+"\nCountry: "+n.dropdown.value+"\nGender: "+n.reco.value);
            return( value );

   
    }


