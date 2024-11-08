import React from 'react'
import './form.css'

function form() {
  return (
    <div className='mainf'>
        <h4>Personal Details </h4>
      <form>
        <label id='name'>Name of the Candidate:</label>
        <input  type='textbox' id='textbox'  required/><br/><br/>

        <label >Mother's Name:</label>
        <input type='textbox' id='textbox1' required /><br/><br/>

        <label for="pan">PAN Number:</label>
        <input type="text" id="pan" name="pan" pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" maxlength="10" required /><br /><br/>

        <label for="aadhaar">Aadhaar Number:</label>
        <input type="text" id="aadhaar" name="aadhaar" pattern="\d{12}" maxlength="12"  required /> <br/><br/>

        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" /><br/><br/>

        <label for="age">Age:</label>
        <input type="number" id="age" name="age" min="0" max="120"  required /> <br/><br/>

        <label>Gender:</label>
        <input type="radio" id="male" name="gender" value="male" required />
        <label for="male">Male</label>

        <input type="radio" id="male" name="gender" value="female" required />
        <label for="female">Female</label>

        <input type="radio" id="male" name="gender" value="other" required />
        <label for="other">Other</label> <br/><br/>

        

        
        
        <label for="nationality">Nationality:</label>
        <select id="nationality" name="nationality">
          <option value="">Select your nationality</option>
          <option value="indian">Indian</option>
        </select><br/><br/>

        <label for="marital-status">Marital Status:</label>
         <select id="marital-status" name="marital-status">
            <option value="">Select your marital status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
        </select><br/> <br/>

        <label for="state">State:</label>
        <select id="state1" name="state">
            <option value="">Select your state</option>
            <option value="andhra_pradesh">Andhra Pradesh</option>
            <option value="arunachal_pradesh">Arunachal Pradesh</option>
            <option value="assam">Assam</option>
            <option value="bihar">Bihar</option>
            <option value="chhattisgarh">Chhattisgarh</option>
            <option value="goa">Goa</option>
            <option value="gujarat">Gujarat</option>
            <option value="haryana">Haryana</option>
            <option value="himachal_pradesh">Himachal Pradesh</option>
            <option value="jharkhand">Jharkhand</option>
            <option value="karnataka">Karnataka</option>
            <option value="kerala">Kerala</option>
            <option value="madhya_pradesh">Madhya Pradesh</option>
            <option value="maharashtra">Maharashtra</option>
            <option value="manipur">Manipur</option>
            <option value="meghalaya">Meghalaya</option>
            <option value="mizoram">Mizoram</option>
            <option value="nagaland">Nagaland</option>
            <option value="odisha">Odisha</option>
            <option value="punjab">Punjab</option>
            <option value="rajasthan">Rajasthan</option>
            <option value="sikkim">Sikkim</option>
            <option value="tamil_nadu">Tamil Nadu</option>
            <option value="telangana">Telangana</option>
            <option value="tripura">Tripura</option>
            <option value="uttar_pradesh">Uttar Pradesh</option>
            <option value="uttarakhand">Uttarakhand</option>
            <option value="west_bengal">West Bengal</option>
            <option value="jammu_kashmir">Jammu and Kashmir</option>
        </select><br/> <br/>

        <h4> PWD Details</h4>

        <label>Are you PwD:</label>
          <select id='pwd'>
            <option value='please select an option'> Please Select an option</option>
            <option value='yes'> Yes</option>
            <option value='No'> No</option>
          </select><br/><br/>

       <label>Are you Ex-service man:</label>
        <select id='Ex'>
         <option value='please select an option'> Are you Ex-service Man</option>
         <option value='yes'> Yes</option>
         <option value='No'> No</option>
       </select><br/>
         
     <h4> Qualification</h4>

     <label>Qualification</label>
      <input type='textbox' id='textbox2' /><br/><br/>

     <label for="percentage">Percentage of Marks:</label>
     <input type="number" id="percentage" name="percentage"  /><br/><br/>

     <label for="cgpa">CGPA:</label>
     <input type="number" id="cgpa" name="cgpa" min="0" max="10" step="0.01"  required /> <br/><br/>

     <label for="date-of-passing">Date of Passing:</label>
     <input type="date" id="date-of-passing" name="date-of-passing" required /><br/> <br/>

     <label> University</label>
     <input type='textbox' id='university' /> <br/><br/>

     <label>Institution</label>
     <input type='textbox'  id='university' required/><br/>

     <h4>Mailing Address</h4>
     <h5>Current Address</h5>

     <label>Address</label>
     <input type='textbox' id='address' /><br/><br/>
     <label>City</label>
     <input type='textbox'  id='city'/><br/><br/>
     <label>District</label>
     <input type='textbox' id='district' /><br/> <br/>
     <label for="state">State:</label>
        <select id="state" name="state">
            <option value="">Select your state</option>
            <option value="andhra_pradesh">Andhra Pradesh</option>
            <option value="arunachal_pradesh">Arunachal Pradesh</option>
            <option value="assam">Assam</option>
            <option value="bihar">Bihar</option>
            <option value="chhattisgarh">Chhattisgarh</option>
            <option value="goa">Goa</option>
            <option value="gujarat">Gujarat</option>
            <option value="haryana">Haryana</option>
            <option value="himachal_pradesh">Himachal Pradesh</option>
            <option value="jharkhand">Jharkhand</option>
            <option value="karnataka">Karnataka</option>
            <option value="kerala">Kerala</option>
            <option value="madhya_pradesh">Madhya Pradesh</option>
            <option value="maharashtra">Maharashtra</option>
            <option value="manipur">Manipur</option>
            <option value="meghalaya">Meghalaya</option>
            <option value="mizoram">Mizoram</option>
            <option value="nagaland">Nagaland</option>
            <option value="odisha">Odisha</option>
            <option value="punjab">Punjab</option>
            <option value="rajasthan">Rajasthan</option>
            <option value="sikkim">Sikkim</option>
            <option value="tamil_nadu">Tamil Nadu</option>
            <option value="telangana">Telangana</option>
            <option value="tripura">Tripura</option>
            <option value="uttar_pradesh">Uttar Pradesh</option>
            <option value="uttarakhand">Uttarakhand</option>
            <option value="west_bengal">West Bengal</option>
            <option value="jammu_kashmir">Jammu and Kashmir</option>
        </select><br/><br/>

        <label>Pin Code</label>
        <input type='textbox'  id='pincode'/>


        <h5>Permanent Address</h5>

     <label>Address</label>
     <input type='textbox' id='address' /><br/><br/>
     <label>City</label>
     <input type='textbox'   id='city' /><br/><br/>
     <label>District</label>
     <input type='textbox' id='district' /><br/><br/>
     <label for="state">State:</label>
        <select id="state" name="state">
            <option value="">Select your state</option>
            <option value="andhra_pradesh">Andhra Pradesh</option>
            <option value="arunachal_pradesh">Arunachal Pradesh</option>
            <option value="assam">Assam</option>
            <option value="bihar">Bihar</option>
            <option value="chhattisgarh">Chhattisgarh</option>
            <option value="goa">Goa</option>
            <option value="gujarat">Gujarat</option>
            <option value="haryana">Haryana</option>
            <option value="himachal_pradesh">Himachal Pradesh</option>
            <option value="jharkhand">Jharkhand</option>
            <option value="karnataka">Karnataka</option>
            <option value="kerala">Kerala</option>
            <option value="madhya_pradesh">Madhya Pradesh</option>
            <option value="maharashtra">Maharashtra</option>
            <option value="manipur">Manipur</option>
            <option value="meghalaya">Meghalaya</option>
            <option value="mizoram">Mizoram</option>
            <option value="nagaland">Nagaland</option>
            <option value="odisha">Odisha</option>
            <option value="punjab">Punjab</option>
            <option value="rajasthan">Rajasthan</option>
            <option value="sikkim">Sikkim</option>
            <option value="tamil_nadu">Tamil Nadu</option>
            <option value="telangana">Telangana</option>
            <option value="tripura">Tripura</option>
            <option value="uttar_pradesh">Uttar Pradesh</option>
            <option value="uttarakhand">Uttarakhand</option>
            <option value="west_bengal">West Bengal</option>
            <option value="jammu_kashmir">Jammu and Kashmir</option>
        </select><br/><br/>
        <label>Pin Code</label>
        <input type='textbox' id='pincode' /> <br/><br/>
        <label>
       <input type="checkbox" id='check' name="check" value="yes"  required />
       Check the Check Box if Permanent Address is Same as Current Address   

       </label>

     </form>
    </div>
  )
}

export default form
