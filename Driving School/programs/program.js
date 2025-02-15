const programsMenu = document.querySelectorAll('.program')
const programDetail = document.querySelector('.programDetail')

const removeActiveClass = () => {
    programsMenu.forEach(button => {
        button.classList.remove('active')
    })
}

programsMenu.forEach(program => {
    program.addEventListener('click', () => {
        removeActiveClass()
        if(program.classList.contains('express')){
            program.classList.add('active')
            programDetail.innerHTML = `
            <div class="container programDetail__container">
            <div class="programDetail__left">
                <h2>Express Learning</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Doloribus ab illo voluptatem debitis nesciunt aliquid dolores amet provident, 
                    ipsa cumque eius autem labore minima distinctio porro, 
                    blanditiis voluptatibus, eligendi accusantium.
                </p>
                <div class="programDetail__images">
                    <div><img src="../assets/graduate3.avif" alt=""></div>
                    <div><img src="../assets/practical6.jpg" alt=""></div>
                </div>
                <h4>Included in weekday Streams</h4>
                <p>Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. 
                    Quaerat, eius. Ab voluptatibus beatae iure repudiandae qui. 
                    Voluptas repellat quos id!
                </p>
                <article>
                    <h5>Theory Lessons</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nihil tempore blanditiis facere voluptatem in non nemo rerum aspernatur fugiat delectus consequuntur iure sint, 
                        a distinctio dolores enim? Sunt, voluptatem maiores!
                    </p>
                </article>
                <article>
                    <h5>Practical Lessons</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nihil tempore blanditiis facere voluptatem in non nemo rerum aspernatur fugiat delectus consequuntur iure sint, 
                        a distinctio dolores enim? Sunt, voluptatem maiores!
                    </p>
                </article>

                <h4>Included in weekend Streams</h4>
                <p>Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. 
                    Quaerat, eius. Ab voluptatibus beatae iure repudiandae qui. 
                    Voluptas repellat quos id!
                </p>
                <article>
                    <h5>Theory Lessons</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nihil tempore blanditiis facere voluptatem in non nemo rerum aspernatur fugiat delectus consequuntur iure sint, 
                        a distinctio dolores enim? Sunt, voluptatem maiores!
                    </p>
                </article>
                <article>
                    <h5>Practical Lessons</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nihil tempore blanditiis facere voluptatem in non nemo rerum aspernatur fugiat delectus consequuntur iure sint, 
                        a distinctio dolores enim? Sunt, voluptatem maiores!
                    </p>
                </article>
                <a href="../contact/contact.html" class="btn primary">Get Started Now!</a>
            </div>

            <div class="programDetail__right">
                <article>
                    <h4>Express Without License</h4>
                    <div>
                        <h2>#2,424</h2>
                        <p>For Non-students</p>
                    </div>
                    <div>
                        <h2>#2,124</h2>
                        <p>For Students</p>
                    </div>
                </article>
                <article>
                    <h4>Express With Standard License</h4>
                    <div>
                        <h2>#2,424</h2>
                        <p>For Non-students</p>
                    </div>
                    <div>
                        <h2>#2,124</h2>
                        <p>For Students</p>
                    </div>
                </article>
                <article>
                    <h4>Express With Premium License</h4>
                    <div>
                        <h2>#2,700</h2>
                        <p>For Non-students</p>
                    </div>
                    <div>
                        <h2>#2,650</h2>
                        <p>For Students</p>
                    </div>
                    <p>license will be ready 2 weeks after completion</p>
                </article>
            </div>
            </div>
                `
        } else if(program.classList.contains('polishing')){
            program.classList.add('active')
            programDetail.innerHTML = `
            <div class="container programDetail__container">
            <div class="programDetail__left">
                <h2>Polishing</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Doloribus ab illo voluptatem debitis nesciunt aliquid dolores amet provident, 
                    ipsa cumque eius autem labore minima distinctio porro, 
                    blanditiis voluptatibus, eligendi accusantium.
                </p>
                <div class="programDetail__images">
                    <div><img src="../assets/graduate3.avif" alt=""></div>
                    <div><img src="../assets/practical6.jpg" alt=""></div>
                </div>
                <h4>Included in weekday Streams</h4>
                <p>Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. 
                    Quaerat, eius. Ab voluptatibus beatae iure repudiandae qui. 
                    Voluptas repellat quos id!
                </p>
                <article>
                    <h5>Theory Lessons</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nihil tempore blanditiis facere voluptatem in non nemo rerum aspernatur fugiat delectus consequuntur iure sint, 
                        a distinctio dolores enim? Sunt, voluptatem maiores!
                    </p>
                </article>
                <article>
                    <h5>Practical Lessons</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nihil tempore blanditiis facere voluptatem in non nemo rerum aspernatur fugiat delectus consequuntur iure sint, 
                        a distinctio dolores enim? Sunt, voluptatem maiores!
                    </p>
                </article>

                <h4>Included in weekend Streams</h4>
                <p>Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. 
                    Quaerat, eius. Ab voluptatibus beatae iure repudiandae qui. 
                    Voluptas repellat quos id!
                </p>
                <article>
                    <h5>Theory Lessons</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nihil tempore blanditiis facere voluptatem in non nemo rerum aspernatur fugiat delectus consequuntur iure sint, 
                        a distinctio dolores enim? Sunt, voluptatem maiores!
                    </p>
                </article>
                <article>
                    <h5>Practical Lessons</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nihil tempore blanditiis facere voluptatem in non nemo rerum aspernatur fugiat delectus consequuntur iure sint, 
                        a distinctio dolores enim? Sunt, voluptatem maiores!
                    </p>
                </article>
                <a href="../contact/contact.html" class="btn primary">Get Started Now!</a>
            </div>

            <div class="programDetail__right">
                <article>
                    <h4>Polishing Without License</h4>
                    <div>
                        <h2>#1,400</h2>
                        <p>For Non-students</p>
                    </div>
                    <div>
                        <h2>#1,240</h2>
                        <p>For Students</p>
                    </div>
                </article>
                <article>
                    <h4> Polishing With Standard License</h4>
                    <div>
                        <h2>#1,700</h2>
                        <p>For Non-students</p>
                    </div>
                    <div>
                        <h2>#1,610</h2>
                        <p>For Students</p>
                    </div>
                </article>
                <article>
                    <h4>Polishing With Premium License</h4>
                    <div>
                        <h2>#2,000</h2>
                        <p>For Non-students</p>
                    </div>
                    <div>
                        <h2>#1,850</h2>
                        <p>For Students</p>
                    </div>
                    <p>license will be ready 2 weeks after completion</p>
                </article>
            </div>
            </div>
            `
        }   else if(program.classList.contains('license')){
            program.classList.add('active')
            programDetail.innerHTML = `
                <div class="container programDetail__container">
            <div class="programDetail__left">
                <h2>License</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Doloribus ab illo voluptatem debitis nesciunt aliquid dolores amet provident, 
                    ipsa cumque eius autem labore minima distinctio porro, 
                    blanditiis voluptatibus, eligendi accusantium.
                </p>
                <div class="programDetail__images">
                    <div><img src="../assets/graduate3.avif" alt=""></div>
                    <div><img src="../assets/practical6.jpg" alt=""></div>
                </div>
                <h4>Included in weekday Streams</h4>
                <p>Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. 
                    Quaerat, eius. Ab voluptatibus beatae iure repudiandae qui. 
                    Voluptas repellat quos id!
                </p>
                <article>
                    <h5>Theory Lessons</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nihil tempore blanditiis facere voluptatem in non nemo rerum aspernatur fugiat delectus consequuntur iure sint, 
                        a distinctio dolores enim? Sunt, voluptatem maiores!
                    </p>
                </article>
                <article>
                    <h5>Practical Lessons</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nihil tempore blanditiis facere voluptatem in non nemo rerum aspernatur fugiat delectus consequuntur iure sint, 
                        a distinctio dolores enim? Sunt, voluptatem maiores!
                    </p>
                </article>

                <h4>Included in weekend Streams</h4>
                <p>Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. 
                    Quaerat, eius. Ab voluptatibus beatae iure repudiandae qui. 
                    Voluptas repellat quos id!
                </p>
                <article>
                    <h5>Theory Lessons</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nihil tempore blanditiis facere voluptatem in non nemo rerum aspernatur fugiat delectus consequuntur iure sint, 
                        a distinctio dolores enim? Sunt, voluptatem maiores!
                    </p>
                </article>
                <article>
                    <h5>Practical Lessons</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nihil tempore blanditiis facere voluptatem in non nemo rerum aspernatur fugiat delectus consequuntur iure sint, 
                        a distinctio dolores enim? Sunt, voluptatem maiores!
                    </p>
                </article>
                <a href="../contact/contact.html" class="btn primary">Get Started Now!</a>
            </div>

            <div class="programDetail__right">
                <article>
                    <h4>Standard License</h4>
                    <div>
                        <h2>#50,000</h2>
                        <p>For Non-students</p>
                    </div>
                    <div>
                        <h2>#48,000</h2>
                        <p>For Students</p>
                    </div>
                </article>
                <article>
                    <h4>Express License</h4>
                    <div>
                        <h2>#80,000</h2>
                        <p>For Non-students</p>
                    </div>
                    <div>
                        <h2>#76,000</h2>
                        <p>For Students</p>
                    </div>
                </article>
                <article>
                    <h4>Premium License</h4>
                    <div>
                        <h2>#120,000</h2>
                        <p>For Non-students</p>
                    </div>
                    <div>
                        <h2>#110,000</h2>
                        <p>For Students</p>
                    </div>
                    <p>license will be ready 2 weeks after completion</p>
                </article>
            </div>
        </div>
            `

        }   else if(program.classList.contains('regular')){
            program.classList.add('active')
            programDetail.innerHTML = `
                <div class="container programDetail__container">
            <div class="programDetail__left">
                <h2>Regular Learning</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Doloribus ab illo voluptatem debitis nesciunt aliquid dolores amet provident, 
                    ipsa cumque eius autem labore minima distinctio porro, 
                    blanditiis voluptatibus, eligendi accusantium.
                </p>
                <div class="programDetail__images">
                    <div><img src="../assets/graduate3.avif" alt=""></div>
                    <div><img src="../assets/practical6.jpg" alt=""></div>
                </div>
                <h4>Included in weekday Streams</h4>
                <p>Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. 
                    Quaerat, eius. Ab voluptatibus beatae iure repudiandae qui. 
                    Voluptas repellat quos id!
                </p>
                <article>
                    <h5>Theory Lessons</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nihil tempore blanditiis facere voluptatem in non nemo rerum aspernatur fugiat delectus consequuntur iure sint, 
                        a distinctio dolores enim? Sunt, voluptatem maiores!
                    </p>
                </article>
                <article>
                    <h5>Practical Lessons</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nihil tempore blanditiis facere voluptatem in non nemo rerum aspernatur fugiat delectus consequuntur iure sint, 
                        a distinctio dolores enim? Sunt, voluptatem maiores!
                    </p>
                </article>

                <h4>Included in weekend Streams</h4>
                <p>Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. 
                    Quaerat, eius. Ab voluptatibus beatae iure repudiandae qui. 
                    Voluptas repellat quos id!
                </p>
                <article>
                    <h5>Theory Lessons</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nihil tempore blanditiis facere voluptatem in non nemo rerum aspernatur fugiat delectus consequuntur iure sint, 
                        a distinctio dolores enim? Sunt, voluptatem maiores!
                    </p>
                </article>
                <article>
                    <h5>Practical Lessons</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nihil tempore blanditiis facere voluptatem in non nemo rerum aspernatur fugiat delectus consequuntur iure sint, 
                        a distinctio dolores enim? Sunt, voluptatem maiores!
                    </p>
                </article>
                <a href="../contact/contact.html" class="btn primary">Get Started Now!</a>
            </div>

            <div class="programDetail__right">
                <article>
                    <h4>Regular Without License</h4>
                    <div>
                        <h2>#1,990</h2>
                        <p>For Non-students</p>
                    </div>
                    <div>
                        <h2>#1,840</h2>
                        <p>For Students</p>
                    </div>
                </article>
                <article>
                    <h4>Regular With Standard License</h4>
                    <div>
                        <h2>#2,650</h2>
                        <p>For Non-students</p>
                    </div>
                    <div>
                        <h2>#2,500</h2>
                        <p>For Students</p>
                    </div>
                </article>
                <article>
                    <h4>Regular With Premium License</h4>
                    <div>
                        <h2>#2,900</h2>
                        <p>For Non-students</p>
                    </div>
                    <div>
                        <h2>#2,750</h2>
                        <p>For Students</p>
                    </div>
                    <p>license will be ready 2 weeks after completion</p>
                </article>
            </div>
        </div>
            `
        }
    })
});