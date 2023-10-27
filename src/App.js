import './App.css';
import Button from './components/button/Button';
import Heading from './components/heading/Heading';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ShopItem from './components/shopItem/ShopItem';
import Item from './components/item/Item';
import Feature from './components/feature/Feature';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Navbar/>
        </div>
      <div className='showcase'>
        <Heading text='Welcome to Boosted USA'/>
        <p>The Holy Grail of Electric Skateboards and One Revolutionary Scooter</p>
            <div>
                <Button text = 'BOOSTED REVS'/>
                <Button text='BOOSTED BOARDS'/>
            </div>
      </div>
      <div className='sponsors'>
        <img src="/assets/media/s1.png" alt=""/>
        <img src="/assets/media/s2.png" alt=""/>
        <img src="/assets/media/s3.png" alt=""/>
        <img src="/assets/media/s4.png" alt=""/>
      </div>
      <div className='container'>
        <div className='textContent'>
          <Heading text='Looking for Boosted Boards, or Boosted Revs?'/>
          <p>Boosted USA acquired all of the remaining inventory directly from Boosted.  This means we have the electric skateboards and scooter you all love and have been looking for.  Get your hands on these highly sought after products while supplies last.</p>
          <div className='line'></div>
        </div>
        <div className='shops'>
          <ShopItem h='Shop Boosted Boards' p='In Stock'/>
          <ShopItem h='Shop Boosted Revs' p='In Stock'/>
        </div>
      </div>
      <div className='section-1'>
        <p>High performance</p>
        <Heading text='Electric Skateboards'/>
        <p>Cruising campus, going to work or getting through that long list of errands has never been easier or more fun.</p>
        <Button text='Shop Now'/>
      </div>
      <div className='section-2'>
        <img src="/assets/media/ph3.png" alt="" />
        <img src="/assets/media/ph4.png" alt="" />
        <div>
          <Heading text='Boosted Rev'/>
          <p>There's never been an electric scooter quite like this. Speed past traffic at 24 mph. Go up to 22 miles on a single charge. You'll get there in no time at all. Stop and go with the roll of your thumb. Its intuitive design means there’s almost no learning curve.</p>
          <Button text='shop now'/>
        </div>
      </div>
      <div className='shopItems'>
        <ShopItem h='Shop Boosted Stealth' p='In Stock'/>
        <ShopItem h='Shop Boosted Stealth' p='In Stock'/>
        <ShopItem h='Shop Boosted Stealth' p='In Stock'/>
      </div>
      <div className="iframe">
        <iframe width="45%" height="300" src="https://www.youtube.com/embed/78bXV1ZqQWI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
        <iframe width="45%" height="300" src="https://www.youtube.com/embed/oAQxk9dOJ8k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
    </div>
    <div className='textContent'>
      <Heading text='Looking For Accessories?'/>
      <div className='line'></div>
    </div>
    <div className='items'>
     <Item title='Stomp Brake Fender' price='$25.00'/>
     <Item title='Stomp Brake Fender' price='$25.00'/>
     <Item title='Stomp Brake Fender' price='$25.00'/>
     <Item title='Stomp Brake Fender' price='$25.00'/>
     <Item title='Stomp Brake Fender' price='$25.00'/>
     <Item title='Stomp Brake Fender' price='$25.00'/>
    </div>
    <div className='features'>
      <Feature class='fa-solid fa-bolt' title='Go Fast' text='Boosted is known for its premium performance boards offering a next-level experience.'/>
      <Feature class='fa-solid fa-route' title='Go Far' text='With optional extended battery life, you can get wherever you need to go reliably.'/>
      <Feature class='fa-solid fa-lightbulb' title='Go Safe' text='Safety is a #1 priority for Boosted, always wear a helmet when riding.'/>
      <Feature class='fa-solid fa-shield' title='Built to Last!' text='Boosted products are engineered to last for years and are extremely reliable.'/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
