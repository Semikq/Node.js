
import './App.css';

const Header=({children})=>
<header className="App-header">
        <img src="Pictures1/Знімок екрана 2023-09-06 195600.png" alt="A-Level"/>
        <ul>
            <li>Item1</li>
            <li>Item2</li>
            <li>Item3</li>
            <li>Item4</li>
            <li>Item5</li>
        </ul>
      </header>

const MAIN=({children})=>
<main className="App-main">
<section class="section">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo architecto, ipsa dolores, quas explicabo harum officiis reiciendis officia maxime iure velit nam praesentium magnam tempore porro, esse dolorum! Dolor nostrum dolorem eveniet non iure praesentium perspiciatis inventore maiores rerum voluptas qui, distinctio cupiditate fuga delectus voluptates laboriosam molestias consequuntur ratione?</p>
            <h1>our work</h1>
        <div class="kartki">
            <div class="block1">
                <img class="Vodopad" src="Pictures1/Shaqi_jrvej.jpg" width="100" height="100" alt="Vodopad"/>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p class="Text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis blanditiis eius neque, temporibus esse. Eveniet, molestiae perferendis? Omnis id corporis unde, impedit tempora optio.</p>
                <input class="button" type="button" name="button" value="Go"/>
            </div>
            <div class="block2">
                <img class="Vodopad" src="Pictures1/Shaqi_jrvej.jpg" width="100" height="100" alt="Vodopad"/>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p class="Text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, veniam.</p>
                <input class="button" type="button" name="button" value="Go"/>
           </div>
           <div class="block3">
               <img class="Vodopad" src="Pictures1/Shaqi_jrvej.jpg" width="100" height="100" alt="Vodopad"/>
               <h2>Lorem ipsum dolor sit amet.</h2>
               <p class="Text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aspernatur.</p>
               <input class="button" type="button" name="button" value="Go"/>
           </div>
           <div class="block4">
               <img class="Vodopad" src="Pictures1/Shaqi_jrvej.jpg" width="100" height="100" alt="Vodopad"/>
               <h2>Lorem ipsum dolor sit amet.</h2>
               <p class="Text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, accusantium totam esse temporibus ipsa magni?</p>
               <input class="button" type="button" name="button" value="Go"/>
           </div>
           <div class="block5"> <img class="Vodopad" src="Pictures1/Shaqi_jrvej.jpg" width="100" height="100" alt="Vodopad"/>
               <h2>Lorem ipsum dolor sit amet.</h2>
               <p class="Text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dicta, iure explicabo rerum aspernatur, et consectetur quidem magni, tempora similique ipsam voluptas non atque natus nam! Asperiores, fuga modi? Doloremque saepe, ipsam aliquam qui quia nisi ea, incidunt tempora molestias repellat vitae hic. Corrupti quod quia at, fuga dolorum magnam.</p>
               <input class="button" type="button" name="button" value="Go"/>
           </div>
           <div class="block6"> <img class="Vodopad" src="Pictures1/Shaqi_jrvej.jpg" width="100" height="100" alt="Vodopad"/>
               <h2>Lorem ipsum dolor sit amet.</h2>
               <p class="Text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam alias placeat soluta ipsum voluptate iure eum saepe. Officiis quae alias aut quas harum cumque odio consequuntur temporibus quia, libero veniam illo laborum necessitatibus blanditiis ratione est suscipit sed porro modi.</p>
               <input class="button" type="button" name="button" value="Go"/>
           </div>
        </div>
        <div class="holder">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
            <div class="item">4</div>
            <div class="item">5</div>
        </div>
        </section>
        <aside class="Aside1">Aside1</aside>
        <aside class="Aside2">Aside2</aside>
      </main>



const App=() =>
<><header className="App">
        <Header></Header>
    </header>

    <main>
        <MAIN/>
    </main>

    <footer>
        <p>Footer</p>
    </footer>
    </>

export default App;
