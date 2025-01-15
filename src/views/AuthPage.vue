<template>
   <div class="text-navy flex flex-col justify-start gap-4">
      <div v-if="currentStep !== 3" class="mb-6">
         <div class="text-[34px] leading-[46px]">Create your free account</div>
         <div class="text-[18px] mt-2 leading-[18px]">
            Already registered? <span class="text-green cursor-pointer">Sign in</span>
         </div>
      </div>

      <div>
         <SignUpStep v-if="currentStep === 1" :fields="stepOneFields" :buttonText="buttonText.stepOne"
            @next-step="goToStep(2)" />

         <SignUpStepTwo v-else-if="currentStep === 2" :fields="stepTwoFields" :buttonText="buttonText.stepTwo"
            @next-step="goToStep(3)" />

         <SignUpStepThree v-else-if="currentStep === 3" @go-dashboard="goToDashboard" />
      </div>
   </div>
</template>

<script>
import SignUpStep from '@/components/landingSections/SignUpStep.vue';
import SignUpStepThree from '@/components/landingSections/SignUpStepThree.vue';
import SignUpStepTwo from '@/components/landingSections/SignUpStepTwo.vue';


export default {
   components: { SignUpStep, SignUpStepTwo, SignUpStepThree },
   data() {
      return {
         currentStep: 1,
         stepOneFields: [
            { label: "First Name", type: "text", placeholder: "Joshua", name: "first name", icon: "user" },
            { label: "Last Name", type: "text", placeholder: "Bakare", name: "last name", icon: "user" },
            { label: "Email", type: "email", placeholder: "josh.bakery@gmail.com", name: "email", icon: "at" },
            { label: "Password", type: "password", placeholder: "*************", name: "password", icon: "eye-on" },
         ],
         stepTwoFields: [
            { label: "Business Name", type: "text", placeholder: "Enter your business name", name: "businessName", icon: "office" },
            { label: "Business Address", type: "text", placeholder: "Enter your address", name: "businessAddress", icon: "map-pin" },
            { label: "Phone Number", type: "tel", placeholder: "Enter your phone number", name: "phone", icon: "phone" },
         ],
         buttonText: {
            stepOne: "Continue",
            stepTwo: "Finish",
         },
      };
   },
   methods: {
      goToStep(step) {
         this.currentStep = step;
      },
      goToDashboard() {
         this.$router.push('/dashboard');
      },
      submitForm() {
         console.log("Form submitted!");
         this.goToStep(3);
      },
   },
};
</script>
