$(document).foundation()

var eventBus = new Vue()

//12 Column Row title
Vue.component('title-section', {
    template: `
    <div class="grid-x grid-padding-x">
        <div class="large-12 cell">
        <h1>{{ title }}</h1>
        </div>
    </div>
    `,
    data(){
        return{
           title: 'Vue Foundation Components'
        }
    }
})


//2 col Cards

Vue.component('profile-card', {
    template: `
    <div class="grid-x grid-padding-x">
        <div v-for="item in variants" class="cell medium-6 small-12">
            <div class="card-user-profile">
                <img class="card-user-profile-img" 
                src="https://images.pexels.com/photos/5439/earth-space.jpg?h=350&auto=compress&cs=tinysrgb" 
                alt="picture of space" />
                <div class="card-user-profile-content card-section">
                    <div class="card-user-profile-avatar">
                        <img :src="item.variantHeadshot" alt="picture of yeti" />
                    </div>
                    <p class="card-user-profile-name">{{ item.variantName }}</p>
                    <p class="card-user-profile-status">{{ item.variantTitle }}</p>
                    <p class="card-user-profile-info">{{ item.variantBio }}</p>
                </div>
            
                <!--<div class="card-user-profile-actions">
                    <a href="#" class="card-user-profile-button button hollow">Follow</a>
                    <a href="#" class="card-user-profile-button button hollow secondary">More Info</a>
                </div>-->
            </div> 
        </div> 
    </div>         
    `,
    data(){
        return{              
            variants: [
                {
                    variantID:2234,
                    variantName: "Josh",
                    variantHeadshot: 'https://www.placecage.com/g/200/200',
                    variantTitle: 'Front-End Dev',
                    variantBio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sapiente officiis perspiciatis accusantium ut modi eligendi pariatur impedit voluptatibus beatae corporis, natus culpa. Perferendis dicta exercitationem, facilis autem ea tempore?"
                
                },
                {
                    variantID: 2235,
                    variantName: "Hanna",
                    variantHeadshot: 'https://www.placecage.com/200/200',
                    variantTitle: 'Client Services',
                    variantBio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sapiente officiis perspiciatis accusantium ut modi eligendi pariatur impedit voluptatibus beatae corporis, natus culpa. Perferendis dicta exercitationem, facilis autem ea tempore?"
              
                },
                {
                    variantID: 2236,
                    variantName: "Jesus",
                    variantHeadshot: 'https://www.placecage.com/c/200/200',
                    variantTitle: 'All Mighty',
                    variantBio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sapiente officiis perspiciatis accusantium ut modi eligendi pariatur impedit voluptatibus beatae corporis, natus culpa. Perferendis dicta exercitationem, facilis autem ea tempore?"
              
                }
            ]  
        }
    }

})

Vue.component('hero-banner', {
    template:`
    <div class="grid-x grid-margin-x">
        <div class="promo-hero promo-hero-bg-image">
            <div class="promo-hero-content">
            <h1 class="promo-hero-title">{{ headline }}</h1>
            <p class="promo-hero-description hide-for-small-only">{{ brief }}</p>
            <div class="promo-hero-ctas">
                <a :href="ctaLink" target="_blank" class="promo-section-cta button primary">{{ ctaButton }}</a>
                <!--<a href="#" class="promo-section-cta button white-hollow">Learn More</a>-->
            </div>
            </div>
        </div>    
    </div>
    `,
    data(){
        return{
            headline: 'Welcome to Jurassic Park',
            brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor ante, varius eget lacinia porta, faucibus ut eros. Donec quis dui id felis pharetra fermentum.',
            ctaButton: 'Learn More',
            ctaLink: 'https://www.google.com/'
        }
    }
})


Vue.component('right-brief', {
    template: `
    <div class="marketing-site-hero">
        <div class="marketing-site-hero-content right">
            <h1>{{ rightTitle }}</h1>
            <p class="subheader">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam omnis, maxime libero natus qui minus!</p>
            <a href="#" class="round button">learn more</a>
        </div>
    </div>
    `,
    data(){
        return{
            rightTitle: 'Right'
        }
    }
})

Vue.component('left-brief', {
    template: `
    <div class="marketing-site-hero">
        <div class="marketing-site-hero-content left">
            <h1>{{ leftTitle }}</h1>
            <p class="subheader">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam omnis, maxime libero natus qui minus!</p>
            <a href="#" class="round button">learn more</a>
        </div>
    </div>
    `,
    data(){
        return{
            leftTitle: 'Left'
        }
    }
})

Vue.component('login-box-form-section',{
    template:`
    <div class="login-box-form-section">
        <h1 class="login-box-title">Sign up</h1>
        <form @submit.prevent="onSubmit">
            <p v-if="errors.length">
                <b>Please correct the following error(s);</b>
                <ul>
                <li v-for="error in errors">{{ error }}</li>
                </ul>
            </p>
            <input class="login-box-input" type="text" id="firstName" name="firstName" placeholder="First Name" v-model="firstName"/>
            <input class="login-box-input" type="text" id="lastName" name="lastName" placeholder="Last Name" v-model="lastName"/>
            <input class="login-box-input" type="email" id="email" name="email" placeholder="Email" v-model="email"/>
  
            <input class="login-box-submit-button" type="submit" name="submit" value="Submit" />
        </form>
    </div>
    `,
    data(){
        return{
            firstName: null,
            lastName: null,
            email: null,
            errors: []
        }
    },
    methods:{
        onSubmit(){
            if(this.firstName && this.lastName && this.email){
                let messageBox = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email
                }
                eventBus.$emit(messageBox)
                this.firstName = null,
                this.lastName = null,
                this.email = null
            }else{
                if(!this.firstName) this.errors.push("First Name required")
                if(!this.lastName) this.errors.push("Last Name required")
                if(!this.email) this.errors.push("Email required")
            }
        }
    }
})

Vue.component('login-box-social-section-inner', {
    template:`
    <div class="login-box-social-section-inner">
        <span class="login-box-social-headline">Sign in with<br />your social network</span>
        <a class="login-box-social-button-facebook">Log in with facebook</a>
        <a class="login-box-social-button-twitter">Log in with Twitter</a>
        <a class="login-box-social-button-google">Log in with Google+</a>
    </div>
    `
})


// THis renders the whole app
var app = new Vue({
    el: '#app',
    data: { 
    },
    methods:{

    }
})
