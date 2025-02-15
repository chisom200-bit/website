// Initialize swiper js

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
      599: {
          slidesPerView: 3
      }
    }
  });

  // INITIALIZE ANIMATE ON SCROLL
  AOS.init();

const packagesButtons = document.querySelectorAll('.packages__buttons button')
const packagesTableBody = document.querySelector('.packages tbody')

const removeActiveClassFromButtons = () => {
    packagesButtons.forEach(button => {
        button.classList.remove('active')
    })
}

packagesButtons.forEach(program => {
    program.addEventListener('click', () => {
        removeActiveClassFromButtons()
        if(button.classList.contains('student')){
            button.classList.add('active')
            packagesTableBody.innerHTML = `
                <tr>
                        <td>Regular with standard Lincense</td>
                        <td>6 weeks</td>
                        <td>2,650</td>
                    </tr>
                    <tr>
                        <td>Express with Premium Lincense</td>
                        <td>6 weeks</td>
                        <td>2,900</td>
                    </tr>
                    <tr>
                        <td>Express without Lincense</td>
                        <td>3 weeks</td>
                        <td>2,000</td>
                    </tr>
                    <tr>
                        <td>Regular with standard Lincense</td>
                        <td>6 weeks</td>
                        <td>2,650</td>
                    </tr>
                    <tr>
                        <td>Regular with standard Lincense</td>
                        <td>6 weeks</td>
                        <td>2,650</td>
                    </tr>
                    <tr>
                        <td>Regular with standard Lincense</td>
                        <td>6 weeks</td>
                        <td>2,650</td>
                    </tr>
                    <tr>
                        <td>Regular with standard Lincense</td>
                        <td>6 weeks</td>
                        <td>2,650</td>
                    </tr>
                    <tr>
                        <td>Regular with standard Lincense</td>
                        <td>6 weeks</td>
                        <td>2,650</td>
                    </tr>
                    <tr>
                        <td>Regular with standard Lincense</td>
                        <td>6 weeks</td>
                        <td>2,650</td>
                    </tr>
                    <tr>
                        <td>Regular with standard Lincense</td>
                        <td>6 weeks</td>
                        <td>2,650</td>
                    </tr>
            `
        } else if (button.classList.contains(license)){
            button.classList.add('active')
            packagesTableBody.innerHTML = `
                <tr>
                        <td>Regular with standard Lincense</td>
                        <td>6 weeks</td>
                        <td>2,650</td>
                    </tr>
                    <tr>
                        <td>Express with Premium Lincense</td>
                        <td>6 weeks</td>
                        <td>2,900</td>
                    </tr>
                    <tr>
                        <td>Express without Lincense</td>
                        <td>3 weeks</td>
                        <td>2,000</td>
                    </tr>
                    <tr>
                        <td>Regular with standard Lincense</td>
                        <td>6 weeks</td>
                        <td>2,650</td>
                    </tr>
                    <tr>
                        <td>Regular with standard Lincense</td>
                        <td>6 weeks</td>
                        <td>2,650</td>
                    </tr>
                    <tr>
                        <td>Regular with standard Lincense</td>
                        <td>6 weeks</td>
                        <td>2,650</td>
                    </tr>
                    <tr>
                        <td>Regular with standard Lincense</td>
                        <td>6 weeks</td>
                        <td>2,650</td>
                    </tr>
                    <tr>
                        <td>Regular with standard Lincense</td>
                        <td>6 weeks</td>
                        <td>2,650</td>
                    </tr>
                    <tr>
                        <td>Regular with standard Lincense</td>
                        <td>6 weeks</td>
                        <td>2,650</td>
                    </tr>
                    <tr>
                        <td>Regular with standard Lincense</td>
                        <td>6 weeks</td>
                        <td>2,650</td>
                    </tr>
            `
        } else if(button.classList.contains('non-student')){
             button.classList.add('active')
            packagesTableBody.innerHTML = `
                 <tr>
                        <td>Regular with standard Lincense</td>
                        <td>6 weeks</td>
                        <td>2,050</td>
                    </tr>
                    <tr>
                        <td>Express with Premium Lincense</td>
                        <td>6 weeks</td>
                        <td>2,900</td>
                    </tr>
                    <tr>
                        <td>Express without Lincense</td>
                        <td>3 weeks</td>
                        <td>2,000</td>
                    </tr>
                    <tr>
                        <td>Regular with standard Lincense</td>
                        <td>6 weeks</td>
                        <td>2,650</td>
                    </tr>
                    <tr>
                        <td>Regular with standard Lincense</td>
                        <td>6 weeks</td>
                        <td>2,650</td>
                    </tr>
                    <tr>
                        <td>Regular with standard Lincense</td>
                        <td>6 weeks</td>
                        <td>2,650</td>
                    </tr>
                    <tr>
                        <td>Regular with standard Lincense</td>
                        <td>6 weeks</td>
                        <td>2,650</td>
                    </tr>
                    <tr>
                        <td>Regular with standard Lincense</td>
                        <td>6 weeks</td>
                        <td>2,650</td>
                    </tr>
                    <tr>
                        <td>Regular with standard Lincense</td>
                        <td>6 weeks</td>
                        <td>2,650</td>
                    </tr>
                    <tr>
                        <td>Regular with standard Lincense</td>
                        <td>6 weeks</td>
                        <td>2,650</td>
                    </tr>
      `
        }
    })
});