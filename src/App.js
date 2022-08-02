import logo from './logo.svg';
import monitor from './monitor.png';
import phone from './phone.png';
import a4 from './Photos/a4.PNG';
import a5 from './Photos/a5.png';
import a6 from './Photos/a6.png';
import book1 from './Photos/book1.PNG';
import qoshtirnoq from './Photos/qoshtirnoq.png'
import './App.css';

function App() {
  return (
    <div>
      <header>
        <div>
          <a href="https://ru.wix.com/" className='a1'>WIX</a>
          <span className='spn'>
              <button type='button'><img src={monitor} alt="" /></button>
              <hr />
              <button type='button'><img src={phone} alt="" /></button>
          </span>
        </div>
        <div>
          <p>Нажмите Редактировать, чтобы создать ваш сайт!</p>
          <a href="#" className='a2'>Подробнее</a>
        </div>
      </header>
      <main>
      <a href="#"><img className="img1" src={a5} alt="" /></a>
      <a href="#"><img className="img2" src={a6} alt="" /></a>
      <section>
        <div className="container">
          <span className="spn1">
          <h1>K. Griffith</h1>
          <div>
            <a href="#" className="a-1">Appearances</a>
            <a href="#" className="a-1">Books</a>
            <a href="#" className="a-1">News</a>
            <a href="#" className="a-1">About</a>
            <a href="#">Contact</a>
          </div>
          </span>
          <hr />
          <img src={a4} className="images" alt="" />
          <span className="spn2">
            <h2>Kayla Griffith</h2>
            <p>Award Winning Author</p>
          </span>
        </div>
      </section>
      <section id="section-1">
        <div className="container1">
          <div>
            <div className="abs">
              <p>New Release</p>
              <span></span>
            </div>
            <span>
              <h4>The Swan Isle (2023)</h4>
              <p>
                I'm a paragraph. Click here to add your own text and edit me. 
                It’s easy. Just click “Edit Text” or double click me to add your 
                own content and make changes to the font. I’m a great place for 
                you to tell a story and let your users know a little more about you.
              </p>
              <p className="Order">Order Now</p>
              <span className="span-a">
                <a href="#">Amazon</a>
                <a href="#">Google</a>
                <a href="#">ibooks</a>
              </span>
            </span>
          </div>
          <img src={book1} alt="" />
        </div>
      </section>
      <section id="section-2">
        <div className="container">
          <div className="belgi"><span></span></div>
          <h2>Praise & Reviews</h2>
          <div className="flex">
            <span>
              <img src={qoshtirnoq} alt="" />
              <p>
                I'm a paragraph. Click here to add your own text and edit me. 
                It’s easy. Just click “Edit Text” or double click me to add your 
                own content and make changes to the font. I’m a great place for 
                you to tell a story and let your users know a little more about you.
              </p>
              <span>
                <p>‘Swan Isle’ is Griffith's best writing yet” The Times Book Review</p>
                <hr />
              </span>
            </span>
            <span>
              <img src={qoshtirnoq} alt="" />
              <p>
                I'm a paragraph. Click here to add your own text and edit me. 
                It’s easy. Just click “Edit Text” or double click me to add your 
                own content and make changes to the font. I’m a great place for 
                you to tell a story and let your users know a little more about you.
              </p>
              <span>
                <p>‘Gripping storytelling’The Good Read Blog</p>
                <hr className="hr2" />
              </span>
            </span>
            <span>
              <img src={qoshtirnoq} alt="" />
              <p>
                I'm a paragraph. Click here to add your own text and edit me. 
                It’s easy. Just click “Edit Text” or double click me to add your 
                own content and make changes to the font. I’m a great place for 
                you to tell a story and let your users know a little more about you.
              </p>
              <span>
                <p>Grifith’s voice tells the story of all women “The Seattle Post Review”</p>
                <hr />
              </span>
            </span>
          </div>
        </div>
      </section>
      <section id="section-3">
        <div className="div-1">
          <h2>See Upcoming Appearances</h2>
          <span>
            <p>I'm a paragraph. Click here to add your own text and edit me. It's easy.</p>
          </span>
        </div>
        <div className="div-2">
          <p>January 18th 2023, The Breakfast Club, Virtual Book Reading of Swan Isle, 7PM - 8PM EST</p>
          <a href="#">Join</a>
        </div>
        <div className="div-2">
          <p>January 31st 2023, The Good Read Club, Online Conversation with Kayla Griffith, 8PM - 9PM EST</p>
          <a href="#">Join</a>
        </div>
        <div className="div-2">
          <p>March 2nd 2023, Otto Cafe, Online Book Reading With Kayla Griffith, 3PM - 4PM EST</p>
          <a href="#">Join</a>
        </div>
        <div className="div-3">
          <div className="mitka"><span></span></div>
          <img src={a4} alt="" />
          <h4>About Kayla Griffith</h4>
          <p>
          I'm a paragraph. Click here to add your own text and edit me. 
          It’s easy. Just click “Edit Text” or double click me to add 
          your own content and make changes to the font. I’m a great place 
          for you to tell a story and let your users know a little more about you.
          </p>
          <a href="#">Read More</a>
        </div>
      </section>
      <footer>
        <div className="footer-1">
          <p>© 2023 Олег Марков. Сайт создан на</p>
          <a href="https://ru.wix.com/">Wix.com</a>
        </div>
      </footer>
      </main>
    </div>
  );
}

export default App;
